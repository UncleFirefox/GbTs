class MMU {

    // Flag indicating BIOS is mapped in
    // BIOS is unmapped with the first instruction above 0x00FF
    inBios: number = 1;

    // Memory regions (initialized at reset time)
    bios: number[] = [
        0x31, 0xFE, 0xFF, 0xAF, 0x21, 0xFF, 0x9F, 0x32, 0xCB, 0x7C, 0x20, 0xFB, 0x21, 0x26, 0xFF, 0x0E,
        0x11, 0x3E, 0x80, 0x32, 0xE2, 0x0C, 0x3E, 0xF3, 0xE2, 0x32, 0x3E, 0x77, 0x77, 0x3E, 0xFC, 0xE0,
        0x47, 0x11, 0x04, 0x01, 0x21, 0x10, 0x80, 0x1A, 0xCD, 0x95, 0x00, 0xCD, 0x96, 0x00, 0x13, 0x7B,
        0xFE, 0x34, 0x20, 0xF3, 0x11, 0xD8, 0x00, 0x06, 0x08, 0x1A, 0x13, 0x22, 0x23, 0x05, 0x20, 0xF9,
        0x3E, 0x19, 0xEA, 0x10, 0x99, 0x21, 0x2F, 0x99, 0x0E, 0x0C, 0x3D, 0x28, 0x08, 0x32, 0x0D, 0x20,
        0xF9, 0x2E, 0x0F, 0x18, 0xF3, 0x67, 0x3E, 0x64, 0x57, 0xE0, 0x42, 0x3E, 0x91, 0xE0, 0x40, 0x04,
        0x1E, 0x02, 0x0E, 0x0C, 0xF0, 0x44, 0xFE, 0x90, 0x20, 0xFA, 0x0D, 0x20, 0xF7, 0x1D, 0x20, 0xF2,
        0x0E, 0x13, 0x24, 0x7C, 0x1E, 0x83, 0xFE, 0x62, 0x28, 0x06, 0x1E, 0xC1, 0xFE, 0x64, 0x20, 0x06,
        0x7B, 0xE2, 0x0C, 0x3E, 0x87, 0xF2, 0xF0, 0x42, 0x90, 0xE0, 0x42, 0x15, 0x20, 0xD2, 0x05, 0x20,
        0x4F, 0x16, 0x20, 0x18, 0xCB, 0x4F, 0x06, 0x04, 0xC5, 0xCB, 0x11, 0x17, 0xC1, 0xCB, 0x11, 0x17,
        0x05, 0x20, 0xF5, 0x22, 0x23, 0x22, 0x23, 0xC9, 0xCE, 0xED, 0x66, 0x66, 0xCC, 0x0D, 0x00, 0x0B,
        0x03, 0x73, 0x00, 0x83, 0x00, 0x0C, 0x00, 0x0D, 0x00, 0x08, 0x11, 0x1F, 0x88, 0x89, 0x00, 0x0E,
        0xDC, 0xCC, 0x6E, 0xE6, 0xDD, 0xDD, 0xD9, 0x99, 0xBB, 0xBB, 0x67, 0x63, 0x6E, 0x0E, 0xEC, 0xCC,
        0xDD, 0xDC, 0x99, 0x9F, 0xBB, 0xB9, 0x33, 0x3E, 0x3c, 0x42, 0xB9, 0xA5, 0xB9, 0xA5, 0x42, 0x4C,
        0x21, 0x04, 0x01, 0x11, 0xA8, 0x00, 0x1A, 0x13, 0xBE, 0x20, 0xFE, 0x23, 0x7D, 0xFE, 0x34, 0x20,
        0xF5, 0x06, 0x19, 0x78, 0x86, 0x23, 0x05, 0x20, 0xFB, 0x86, 0x20, 0xFE, 0x3E, 0x01, 0xE0, 0x50
    ];

    rom: string;
    wram: number[] = new Array(8192);
    eram: number[] = new Array(131072);
    zram: number[] = new Array(256);
    ie: number = 0;
    if: number = 0;

    // The main classes it depends on
    cpu: CPU;
    gpu: GPU;
    input: Input;

    // MBC states
    mbc: any[] = new Array(2);

    // Offset for second ROM bank
    romoffs: number = 0x4000;

    // Offset for RAM bank
    ramoffs: number = 0x0000;

    // Copy of the ROM's cartridge-type value
    carttype: number = 0;

    constructor(cpu : CPU, gpu : GPU) {
        this.cpu = cpu;
        this.gpu = gpu;

        this.listenForFiles();
    }

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
                    else if (this.cpu.registers.pc == 0x0100)
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
                                    this.gpu.writeByte(address, value);
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