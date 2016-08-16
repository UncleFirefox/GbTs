class TimerClock {
    main: number = 0;
    sub: number = 0;
    div: number = 0;
}

class DivRegister {
    div: number = 0;
    tima: number = 0;
    tma: number = 0;
    tac: number = 0;
}

class Timer {
    clock: TimerClock;
    reg: DivRegister;
    threshold: number;
    mmu: MMU;

    constructor(){
        this.clock = new TimerClock();
        this.reg = new DivRegister();
    }

    inc(cpumregister: number) {
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
    }

    check() {
        if (this.reg.tac & 4) {
            switch (this.reg.tac & 3) {
                case 0: this.threshold = 64; break;		// 4K
                case 1: this.threshold = 1; break;		// 256K
                case 2: this.threshold = 4; break;		// 64K
                case 3: this.threshold = 16; break;		// 16K
            }

            if (this.clock.main >= this.threshold) this.step();
        }
    }

    step() {
        // Step the timer up by one
        this.clock.main = 0;
        this.reg.tima++;

        if (this.reg.tima > 255) {
            // At overflow, refill with the Modulo
            this.reg.tima = this.reg.tma;

            // Flag a timer interrupt to the dispatcher
            this.mmu.if |= 4;
        }
    }

    rb(address: number) {
        switch (address) {
            case 0xFF04: return this.reg.div;
            case 0xFF05: return this.reg.tima;
            case 0xFF06: return this.reg.tma;
            case 0xFF07: return this.reg.tac;
        }
    }

    wb(address: number, value: number) {
        switch (address) {
            case 0xFF04: this.reg.div = 0; break;
            case 0xFF05: this.reg.tima = value; break;
            case 0xFF06: this.reg.tma = value; break;
            case 0xFF07: this.reg.tac = value & 7; break;
        }
    }
}