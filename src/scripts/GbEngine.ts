class GbEngine {

    cpu: CPU;
    mmu: MMU;
    gpu: GPU;

    interval: any = null;

    constructor() {
        //let categoriesSelect = (<HTMLSelectElement>document.getElementById('RecipeCategory'));
        this.cpu = new CPU();
        this.mmu = new MMU();
        this.gpu = new GPU();
        
        alert("Congrats! I'm up!");
    }

    reset() {
        this.gpu.reset();
        // this.mmu.reset();
        this.cpu.reset();

        // We'll do it our way, how do we open local files BTW?
        //this.mmu.load('test.gb');
    }

    frame() {
        var fclk = this.cpu.clock.t + 70224;
        do {
            //this.cpu.map[this.mmu.ReadByte(this.cpu.registers.pc++)]();
            this.cpu.registers.pc &= 65535;
            this.cpu.clock.m += this.cpu.registers.m;
            this.cpu.clock.t += this.cpu.registers.t;
            this.gpu.step(this.cpu.registers.t);

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
    gbEngine.mmu.ListenForFiles();

    document.getElementById('reset').onclick = () => gbEngine.reset();
    document.getElementById('run').onclick = () => gbEngine.run();
    gbEngine.reset();
};