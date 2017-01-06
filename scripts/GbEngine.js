var GbEngine = (function () {
    function GbEngine() {
        this.interval = 0;
        this.audio = new Audio('sounds/gameboy_start_up.mp3');
        this.cpu = new CPU();
        this.gpu = new GPU();
        this.mmu = new MMU(this.cpu, this.gpu);
        this.timer = new Timer();
        this.opcodes = new Opcodes(this.cpu, this.mmu);
    }
    GbEngine.prototype.reset = function () {
        this.gpu.reset();
        this.mmu.reset();
        this.cpu.reset();
        this.cpu.registers.pc = 0x100;
        this.mmu.readLocalFile('roms/testGame.gb');
    };
    GbEngine.prototype.frame = function () {
        var fclk = this.cpu.clock.t + 70224;
        do {
            // Doing some tricks for debugging
            //console.log('Program counter: ' + this.cpu.registers.pc);
            var opcodeToFetch = this.mmu.readByte(this.cpu.registers.pc++);
            // For now we'll assume is opcodeMap
            //console.log('Opcode fetched: ' + opcodeToFetch);
            this.opcodes.opcodeMap[opcodeToFetch]();
            this.cpu.registers.pc &= 65535;
            this.cpu.clock.m += this.cpu.registers.m;
            this.cpu.clock.t += this.cpu.registers.t;
            this.cpu.registers.m = 0;
            this.cpu.registers.t = 0;
            // Update the timer
            this.timer.inc(this.cpu.registers.m);
            // If IME is on, and some interrupts are enabled in IE, and
            // an interrupt flag is set, handle the interrupt
            if (this.cpu.registers.ime && this.mmu.ie && this.mmu.if) {
                // Mask off ints that aren't enabled
                var ifired = this.mmu.ie & this.mmu.if;
                if (ifired & 0x01) {
                    this.mmu.if &= (255 - 0x01);
                    this.cpu.RST40();
                }
            }
            this.gpu.step(this.cpu.registers.t);
            this.cpu.clock.m += this.cpu.registers.m;
            this.cpu.clock.t += this.cpu.registers.t;
            // Update timer again, in case a RST occurred
            this.timer.inc(this.cpu.registers.t);
        } while (this.cpu.clock.t < fclk);
    };
    GbEngine.prototype.run = function () {
        var _this = this;
        if (this.mmu.rom === undefined) {
            this.audio.play();
            return;
        }
        if (!this.interval) {
            this.interval = setInterval(function () { return _this.frame(); }, 1);
            document.getElementById('run').innerHTML = 'Pause';
        }
        else {
            clearInterval(this.interval);
            this.interval = 0;
            document.getElementById('run').innerHTML = 'Run';
        }
    };
    return GbEngine;
}());
window.onload = function () {
    var gbEngine = new GbEngine();
    document.getElementById('reset').onclick = function () { return gbEngine.reset(); };
    document.getElementById('run').onclick = function () { return gbEngine.run(); };
    gbEngine.reset();
};
//# sourceMappingURL=GbEngine.js.map