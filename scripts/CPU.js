// CPU registers
var Registers = (function () {
    function Registers() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.h = 0;
        this.l = 0;
        this.f = 0;
        this.pc = 0;
        this.sp = 0;
        this.m = 0;
        this.t = 0;
        this.ime = 1;
    }
    return Registers;
}());
// CPU clock
var Clock = (function () {
    function Clock() {
        this.m = 0;
        this.t = 0;
    }
    return Clock;
}());
var CPU = (function () {
    function CPU() {
        this.registers = new Registers();
        this.clock = new Clock();
    }
    // General operations
    // Reset the CPU state
    CPU.prototype.reset = function () {
        // Reset registers
        this.registers.a = 0;
        this.registers.b = 0;
        this.registers.c = 0;
        this.registers.d = 0;
        this.registers.e = 0;
        this.registers.h = 0;
        this.registers.l = 0;
        this.registers.f = 0;
        this.registers.sp = 0;
        this.registers.pc = 0; // Start execution at 0
        // Reset clock
        this.clock.m = 0;
        this.clock.t = 0;
        // Interrupt master enable
        this.registers.ime = 1;
    };
    // Start vblank handler (0040h)
    CPU.prototype.RST40 = function () {
        // Disable further interrupts
        this.registers.ime = 0;
        // Save current SP on the stack
        this.registers.sp -= 2;
        this.mmu.writeWord(this.registers.sp, this.registers.pc);
        // Jump to handler
        this.registers.pc = 0x0040;
        this.registers.m = 3;
        this.registers.t = 12;
    };
    return CPU;
}());
//# sourceMappingURL=CPU.js.map