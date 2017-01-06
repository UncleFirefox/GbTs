// CPU registers
class Registers {
    a: number = 0;
    b: number = 0;
    c: number = 0;
    d: number = 0;
    e: number = 0;
    h: number = 0;
    l: number = 0;
    f: number = 0;
    pc: number = 0;
    sp: number = 0;
    m: number = 0;
    t: number = 0;
    ime: number= 1;
}

// CPU clock
class Clock {
    m: number = 0;
    t: number = 0;
}

class CPU {

    // Internal properties
    registers: Registers;
    clock: Clock;
    mmu: MMU;
    gpu: GPU;
    halt : number;
    stop : number;

    constructor() {
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

        // Interrupt master enable
        this.registers.ime = 1;
    }

        // Start vblank handler (0040h)
    RST40() {
        // Disable further interrupts
        this.registers.ime = 0;

        // Save current SP on the stack
        this.registers.sp -= 2;
        this.mmu.writeWord(this.registers.sp, this.registers.pc);

        // Jump to handler
        this.registers.pc = 0x0040;
        this.registers.m = 3;
        this.registers.t = 12;
    }
}