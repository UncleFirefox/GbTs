class MMU {

    // Flag indicating BIOS is mapped in
    // BIOS is unmapped with the first instruction above 0x00FF
    inBios: number = 1;

    // Memory regions (initialized at reset time)
    bios: any[];
    rom: string;
    wram: any[];
    eram: any[];
    zram: any[];
    ie: number = 0;
    if: number = 0;

    // The main classes it depends on
    cpu: any;
    gpu: any;
    input: Input;

    // MBC states
    mbc: any[];

    // Offset for second ROM bank
    romoffs: number = 0x4000;

    // Offset for RAM bank
    ramoffs: number = 0x0000;

    // Copy of the ROM's cartridge-type value
    carttype: number = 0;

    // Resetting the MMU, don't know what I'm doing here
    reset() {
        // initialise MBC internal data
        this.mbc[0] = {};
        this.mbc[1] = {
            rombank: 0,		// Selected ROM bank
            rambank: 0,		// Selected RAM bank
            ramon: 0,		// RAM enable switch
            mode: 0		// ROM/RAM expansion mode
        };

        this.romoffs = 0x4000;
        this.ramoffs = 0x0000;
    }

    // Starts listening for files at the appropriate input
    listenForFiles() {
        document.getElementById("rom-selector").addEventListener("change", e => {
            this.loadRom((<FileEventTarget>e.target).files[0]);
        }, false);
    }

    loadRom(rom: File) {
        var reader = new FileReader();
        reader.onload = file => {
            var contents: any = file.target;
            this.rom = contents.result;
            this.carttype = this.rom.charCodeAt(0x0147);
        }

        reader.readAsBinaryString(rom);
    }

    readLocalFile(filePath: string) {
        var fileRequest = new XMLHttpRequest();

        //  Simulating a request against our local system
        fileRequest.open("GET", filePath, false);
        fileRequest.onreadystatechange = function () {
            if (fileRequest.readyState === 4) {
                if (fileRequest.status === 200 || fileRequest.status == 0) {
                    this.rom = fileRequest.response;
                    this.carttype = this.rom.charCodeAt(0x0147);
                }
            }
        }

        fileRequest.send(null);
    }

    // Read 8-bit byte from a given address
    readByte(address: number): number {
        switch (address & 0xF000) {
            // BIOS (256b)/ROM0
            case 0x0000:
                if (this.inBios) {
                    if (address < 0x0100)
                        return this.bios[address];
                    else if (this.cpu.r.pc == 0x0100)
                        this.inBios = 0;
                }

                return this.rom.charCodeAt[address];

            // ROM0
            case 0x1000:
            case 0x2000:
            case 0x3000:
                return this.rom.charCodeAt[address];

            // ROM1 (unbanked) (16k)
            case 0x4000:
            case 0x5000:
            case 0x6000:
            case 0x7000:
                return this.rom.charCodeAt(this.romoffs + (address & 0x3FFF));

            // Graphics: VRAM (8k)
            case 0x8000:
            case 0x9000:
                return this.gpu.vram[address & 0x1FFF];

            // External RAM
            case 0xA000:
            case 0xB000:
                return this.eram[this.ramoffs + (address & 0x1FFF)];

            // Working RAM
            case 0xC000:
            case 0xD000:
                return this.wram[address & 0x1FFF];

            // Working RAM shadow
            case 0xE000:
                return this.wram[address & 0x1FFF];

            // Working RAM shadow, I/O, Zero-page RAM
            case 0xF000:
                switch (address & 0x0F00) {
                    // Working RAM shadow
                    case 0x000: case 0x100: case 0x200: case 0x300:
                    case 0x400: case 0x500: case 0x600: case 0x700:
                    case 0x800: case 0x900: case 0xA00: case 0xB00:
                    case 0xC00: case 0xD00:
                        return this.wram[address & 0x1FFF];

                    // Graphics: object attribute memory
                    // OAM is 160 bytes, remaining bytes read as 0
                    case 0xE00:
                        if (address < 0xFEA0)
                            return this.gpu.oam[address & 0xFF];
                        else
                            return 0;

                    // Zero-page
                    case 0xF00:
                        if (address == 0xFFFF) {
                            return this.ie;
                        }
                        else if (address >= 0xFF80) {
                            return this.zram[address & 0x7F];
                        }
                        else {
                            switch (address & 0x00F0) {
                                case 0x00:
                                    if (address == 0xFF0F) return this.if;
                                    break;
                                //...
                            }
                            return 0;
                        }
                }
        }
    }

    // Read 16-bit word from a given address
    readWord(address: number): number {
        return this.readByte(address) + (this.readByte(address + 1) << 8)
    }

    // Write 8-bit byte from a given address
    writeByte(address: number, value: number) {

        switch (address & 0xF000) {
            // MBC1: External RAM switch
            case 0x0000:
            case 0x1000:
                switch (this.carttype) {
                    case 2:
                    case 3:
                        this.mbc[1].ramon =
                            ((value & 0x0F) == 0x0A) ? 1 : 0;
                        break;
                }
                break;

            // MBC1: ROM bank
            case 0x2000:
            case 0x3000:
                switch (this.carttype) {
                    case 1:
                    case 2:
                    case 3:
                        // Set lower 5 bits of ROM bank (skipping #0)
                        value &= 0x1F;
                        if (!value) value = 1;
                        this.mbc[1].rombank =
                            (this.mbc[1].rombank & 0x60) + value;

                        // Calculate ROM offset from bank
                        this.romoffs = this.mbc[1].rombank * 0x4000;
                        break;
                }
                break;

            // MBC1: RAM bank
            case 0x4000:
            case 0x5000:
                switch (this.carttype) {
                    case 1:
                    case 2:
                    case 3:
                        if (this.mbc[1].mode) {
                            // RAM mode: Set bank
                            this.mbc[1].rambank = value & 3;
                            this.ramoffs = this.mbc[1].rambank * 0x2000;
                        }
                        else {
                            // ROM mode: Set high bits of bank
                            this.mbc[1].rombank =
                                (this.mbc[1].rombank & 0x1F) +
                                ((value & 3) << 5);

                            this.romoffs = this.mbc[1].rombank * 0x4000;
                        }
                        break;
                }
                break;

            // MBC1: Mode switch
            case 0x6000:
            case 0x7000:
                switch (this.carttype) {
                    case 2:
                    case 3:
                        this.mbc[1].mode = value & 1;
                        break;
                }
                break;

            // External RAM
            case 0xA000:
            case 0xB000:
                this.eram[this.ramoffs + (address & 0x1FFF)] = value;
                break;

            case 0xF000:
                switch (address & 0x0F00) {
                    //...
                    // Zero-page
                    case 0xF00:
                        if (address >= 0xFF80) {
                            this.zram[address & 0x7F] = value;
                        }
                        else {
                            // I/O
                            switch (address & 0x00F0) {
                                // GPU
                                case 0x40: case 0x50: case 0x60: case 0x70:
                                    this.gpu.WriteByte(address, value);
                                    break;
                            }
                        }
                        break;
                    case 0xE00:
                        if (address < 0xFEA0) this.gpu.oam[address & 0xFF] = value;
                        this.gpu.buildobjdata(address - 0xFE00, value);
                        break;
                }
                break;
        }
    }

    // Write 16-bit word from a given address
    writeWord(address: number, value: number) {
    }
}