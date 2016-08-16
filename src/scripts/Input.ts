class Input {
    rows: number[] = [0x0F, 0x0F];
    column: number = 0;
    keys: number[];

    constructor(){
        window.onkeydown = this.keyDown;
        window.onkeyup = this.keyDown;
    }

    reset() {
        this.rows = [0x0F, 0x0F];
        this.column = 0;
    }

    readByte(addr: number) {
        switch (this.column) {
            case 0x10: return this.rows[0];
            case 0x20: return this.rows[1];
            default: return 0;
        }
    }

    writeByte(addr: number, val: number) {
        this.column = val & 0x30;
    }

/*
    Temporary definition of keys
    --------------------------------
    Scan    code	    Key	Mapping
    13	    Enter	    Start
    32	    Space	    Select
    37	    Left arrow	Left
    38	    Up arrow	Up
    39	    Right arrow	Right
    40	    Down arrow	Down
    88	    X	        B
    90	    Z	        A
*/

    keyDown(e: KeyboardEvent) {
        // Reset the appropriate bit
        switch(e.keyCode)
        {
                case 39: this.keys[1] &= 0xE; break;
                case 37: this.keys[1] &= 0xD; break;
                case 38: this.keys[1] &= 0xB; break;
                case 40: this.keys[1] &= 0x7; break;
                case 90: this.keys[0] &= 0xE; break;
                case 88: this.keys[0] &= 0xD; break;
                case 32: this.keys[0] &= 0xB; break;
                case 13: this.keys[0] &= 0x7; break;
        }
    }

    keyUp(e: KeyboardEvent) {
        // Set the appropriate bit
        switch(e.keyCode)
        {
            case 39: this.keys[1] |= 0x1; break;
            case 37: this.keys[1] |= 0x2; break;
            case 38: this.keys[1] |= 0x4; break;
            case 40: this.keys[1] |= 0x8; break;
            case 90: this.keys[0] |= 0x1; break;
            case 88: this.keys[0] |= 0x2; break;
            case 32: this.keys[0] |= 0x4; break;
            case 13: this.keys[0] |= 0x8; break;
        }
    }
};