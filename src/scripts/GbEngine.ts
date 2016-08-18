class GbEngine {

    cpu: CPU;
    mmu: MMU;
    gpu: GPU;
    timer: Timer;
    opcodes : Opcodes;

    interval: number = 0;

    audio : HTMLAudioElement = new Audio('sounds/gameboy_start_up.mp3');

    constructor() {
        this.cpu = new CPU();
        this.gpu = new GPU();
        this.mmu = new MMU(this.cpu, this.gpu);
        this.timer = new Timer();
        this.opcodes = new Opcodes(this.cpu, this.mmu);
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
            // Doing some tricks for debugging
            console.log('Program counter: ' + this.cpu.registers.pc);
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
    }

    run() {

        if (this.mmu.rom === undefined)
        {
            this.audio.play();
            return;
        }

        if (!this.interval) {
            this.interval = setTimeout(() => {this.frame();}, 1);
            document.getElementById('run').innerHTML = 'Pause';
        }
        else {
            clearInterval(this.interval);
            this.interval = 0;
            document.getElementById('run').innerHTML = 'Run';
        }
    }
}

window.onload = () => {
    var gbEngine = new GbEngine();

    document.getElementById('reset').onclick = () => gbEngine.reset();
    document.getElementById('run').onclick = () => gbEngine.run();
    gbEngine.reset();
};