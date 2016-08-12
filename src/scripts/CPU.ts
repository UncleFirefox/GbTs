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

class CPU {

    // Internal properties
    registers: Registers;
    clock: Clock;
    mmu: MMU;
    gpu: GPU;

    constructor(){
        this.registers = new Registers();
        this.clock = new Clock();
    }

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