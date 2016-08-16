class GbEngine {

    cpu: CPU;
    mmu: MMU;
    gpu: GPU;
    timer: Timer;

    interval: number = null;

    constructor() {
        //let categoriesSelect = (<HTMLSelectElement>document.getElementById('RecipeCategory'));
        this.cpu = new CPU();
        this.mmu = new MMU();
        this.gpu = new GPU();
        this.timer = new Timer();

        alert("Congrats! I'm up!");
    }

    reset() {
        this.gpu.reset();
        this.mmu.reset();
        this.cpu.reset();

        this.mmu.readLocalFile('roms/testGame.gb');
    }

    frame() {
        var fclk = this.cpu.clock.t + 70224;
        do {
            //this.cpu.map[this.mmu.ReadByte(this.cpu.registers.pc++)]();
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
    }

    run() {
        if (this.interval) {
            this.interval = setTimeout(this.frame, 1);
            document.getElementById('run').innerHTML = 'Pause';
        }
        else {
            clearInterval(this.interval);
            this.interval = null;
            document.getElementById('run').innerHTML = 'Run';
        }
    }
}

window.onload = () => {
    var gbEngine = new GbEngine();
    gbEngine.mmu.listenForFiles();

    document.getElementById('reset').onclick = () => gbEngine.reset();
    document.getElementById('run').onclick = () => gbEngine.run();
    gbEngine.reset();
};