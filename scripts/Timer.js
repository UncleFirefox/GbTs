var TimerClock = (function () {
    function TimerClock() {
        this.main = 0;
        this.sub = 0;
        this.div = 0;
    }
    return TimerClock;
}());
var DivRegister = (function () {
    function DivRegister() {
        this.div = 0;
        this.tima = 0;
        this.tma = 0;
        this.tac = 0;
    }
    return DivRegister;
}());
var Timer = (function () {
    function Timer() {
        this.clock = new TimerClock();
        this.reg = new DivRegister();
    }
    Timer.prototype.inc = function (cpumregister) {
        // Increment by the last opcode's time
        this.clock.sub += cpumregister;
        // No opcode takes longer than 4 M-times,
        // so we need only check for overflow once
        if (this.clock.sub >= 4) {
            this.clock.main++;
            this.clock.sub -= 4;
            // The DIV register increments at 1/16th
            // the rate, so keep a count of this
            this.clock.div++;
            if (this.clock.div == 16) {
                this.reg.div = (this.reg.div + 1) & 255;
                this.clock.div = 0;
            }
        }
        // Check whether a step needs to be made in the timer
        this.check();
    };
    Timer.prototype.check = function () {
        if (this.reg.tac & 4) {
            switch (this.reg.tac & 3) {
                case 0:
                    this.threshold = 64;
                    break; // 4K
                case 1:
                    this.threshold = 1;
                    break; // 256K
                case 2:
                    this.threshold = 4;
                    break; // 64K
                case 3:
                    this.threshold = 16;
                    break; // 16K
            }
            if (this.clock.main >= this.threshold)
                this.step();
        }
    };
    Timer.prototype.step = function () {
        // Step the timer up by one
        this.clock.main = 0;
        this.reg.tima++;
        if (this.reg.tima > 255) {
            // At overflow, refill with the Modulo
            this.reg.tima = this.reg.tma;
            // Flag a timer interrupt to the dispatcher
            this.mmu.if |= 4;
        }
    };
    Timer.prototype.rb = function (address) {
        switch (address) {
            case 0xFF04: return this.reg.div;
            case 0xFF05: return this.reg.tima;
            case 0xFF06: return this.reg.tma;
            case 0xFF07: return this.reg.tac;
        }
    };
    Timer.prototype.wb = function (address, value) {
        switch (address) {
            case 0xFF04:
                this.reg.div = 0;
                break;
            case 0xFF05:
                this.reg.tima = value;
                break;
            case 0xFF06:
                this.reg.tma = value;
                break;
            case 0xFF07:
                this.reg.tac = value & 7;
                break;
        }
    };
    return Timer;
}());
//# sourceMappingURL=Timer.js.map