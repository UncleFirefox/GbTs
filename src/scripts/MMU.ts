class MMU {

    // Flag indicating BIOS is mapped in
    // BIOS is unmapped with the first instruction above 0x00FF
    inBios: number = 1;

    // Memory regions (initialised at reset time)
    bios: any[];
    rom: string;
    wram: any[];
    eram: any[];
    zram: any[];

    cpu: any;
    gpu: any;

    // Starts listening for files at the appropriate input
    ListenForFiles() {
        document.getElementById("rom-selector").addEventListener("change", e => {
            this.LoadRom(e);
        }, false);
    }

    LoadRom(event: any) {
        EventTarget
        var rom = event.target.files[0];
        var reader = new FileReader();
        reader.onload = file => {
            var contents: any = file.target;
            this.rom = contents.result;
        }

        reader.readAsBinaryString(rom);
    }

    // Read 8-bit byte from a given address
    ReadByte(address: number): number {
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
                return this.rom.charCodeAt[address];

            // Graphics: VRAM (8k)
            case 0x8000:
            case 0x9000:
                return this.gpu.vram[address & 0x1FFF];

            // External RAM (8k)
            case 0xA000:
            case 0xB000:
                return this.eram[address & 0x1FFF];

            // Working RAM (8k)
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
                        if (address >= 0xFF80) {
                            return this.zram[address & 0x7F];
                        }
                        else {
                            // I/O control handling
                            switch (address & 0x00F0) {
                                // GPU (64 registers)
                                case 0x40: case 0x50: case 0x60: case 0x70:
                                    return this.gpu.ReadByte(address);
                            }
                            return 0;
                        }
                }
        }
    }

    // Read 16-bit word from a given address
    ReadWord(address: number): number {
        return this.ReadByte(address) + (this.ReadByte(address + 1) << 8)
    }

    // Write 8-bit byte from a given address
    WriteByte(address: number, value: number) {

        switch (address & 0xF000) {
            //...
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
                }
                break;
        }

    }

    // Write 16-bit word from a given address
    WriteWord(address: number, value: number) {
    }
}