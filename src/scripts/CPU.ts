// CPU registers
class Registers {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    h: number;
    l: number;
    f: number;
    pc: number;
    sp: number;
    m: number;
    t: number;
}

// CPU clock
class Clock {
    m: number;
    t: number;
}

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

    LoadRom(event : any){
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
                            // Currently unhandled
                            return 0;
                        }
                }
        }
    }

    // Read 16-bit word from a given address
    ReadWord(address: number): number {
        return this.ReadByte(address) + (this.ReadByte(address+1) << 8)
    }

    // Write 8-bit byte from a given address
    WriteByte(address: number, value: number) {
    }

    // Write 16-bit word from a given address
    WriteWord(address: number, value: number) {
    }
}

class CPU {

    // Internal properties
    registers: Registers;
    clock: Clock;
    mmu: MMU;
    gpu: GPU;

    // General operations

    // Reset the CPU state
    reset() {

        // Reset registers
        this.registers.a = 0; this.registers.b = 0; this.registers.c = 0; this.registers.d = 0;
        this.registers.e = 0; this.registers.h = 0; this.registers.l = 0; this.registers.f = 0;
        this.registers.sp = 0;
        this.registers.pc = 0;      // Start execution at 0

        // Reset clock
        this.clock.m = 0; this.clock.t = 0;
    }

    dispatch() {
        while (true) {
            var op = this.mmu.ReadByte(this.registers.pc++);              // Fetch instruction
            //Z80._map[op]();                            // Dispatch
            this.registers.pc &= 65535;                        // Mask PC to 16 bits
            this.clock.m += this.registers.m;                  // Add time to CPU clock
            this.clock.t += this.registers.t;

            // Do the GPU stuff
            this.gpu.step(this.registers.t);
        }
    }

    // Instructions, temporarily we'll place them here

    // Add E to A, leaving result in A (ADD A, E)
    ADDr_e() {
        this.registers.a += this.registers.e;                      // Perform addition
        this.registers.f = 0;                              // Clear flags
        if (!(this.registers.a & 255)) this.registers.f |= 0x80;    // Check for zero
        if (this.registers.a > 255) this.registers.f |= 0x10;       // Check for carry
        this.registers.a &= 255;                           // Mask to 8-bits
        this.registers.m = 1; this.registers.t = 4;                // 1 M-time taken
    }

    // Compare B to A, setting flags (CP A, B)
    CPr_b() {
        var i = this.registers.a;                          // Temp copy of A
        i -= this.registers.b;                             // Subtract B
        this.registers.f |= 0x40;                          // Set subtraction flag
        if (!(i & 255)) this.registers.f |= 0x80;           // Check for zero
        if (i < 0) this.registers.f |= 0x10;                // Check for underflow
        this.registers.m = 1; this.registers.t = 4;                // 1 M-time taken
    }

    // No-operation (NOP)
    NOP() {
        this.registers.m = 1; this.registers.t = 4;                // 1 M-time taken
    }

    // Push registers B and C to the stack (PUSH BC)
    PUSHBC() {
        this.registers.sp--;                               // Drop through the stack
        this.mmu.WriteByte(this.registers.sp, this.registers.b);               // Write B
        this.registers.sp--;                               // Drop through the stack
        this.mmu.WriteByte(this.registers.sp, this.registers.c);               // Write C
        this.registers.m = 3; this.registers.t = 12;               // 3 M-times taken
    }

    // Pop registers H and L off the stack (POP HL)
    POPHL() {
        this.registers.l = this.mmu.ReadByte(this.registers.sp);              // Read L
        this.registers.sp++;                               // Move back up the stack
        this.registers.h = this.mmu.ReadByte(this.registers.sp);              // Read H
        this.registers.sp++;                               // Move back up the stack
        this.registers.m = 3; this.registers.t = 12;               // 3 M-times taken
    }

    // Read a byte from absolute location into A (LD A, addr)
    LDAmm() {
        var addr = this.mmu.ReadWord(this.registers.pc);          // Get address from instr
        this.registers.pc += 2;                            // Advance PC
        this.registers.a = this.mmu.ReadWord(addr);                   // Read from address
        this.registers.m = 4; this.registers.t = 16;                 // 4 M-times taken
    }
}