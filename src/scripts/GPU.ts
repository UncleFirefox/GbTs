class GPU {

    canvas: CanvasRenderingContext2D;
    screen: ImageData;
    mode: number = 0;
    modeclock: number = 0;
    line: number = 0;
    tileset: any;
    vram: any;
    bgmap: any;
    scx: any;
    scy: any;
    bgtile: any;
    pal: any;
    switchbg: any;
    switchlcd: any;
    oam: number[];
    objdata: any[];
    switchobj: any;

    reset() {
        var htmlcanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('screen');
        if (htmlcanvas && htmlcanvas.getContext) {
            this.canvas = htmlcanvas.getContext('2d');
            if (this.canvas) {
                if (this.canvas.createImageData)
                    this.screen = this.canvas.createImageData(160, 144);

                else if (this.canvas.getImageData)
                    this.screen = this.canvas.getImageData(0, 0, 160, 144);

                else
                    this.screen =
                        new ImageData(
                            new Uint8ClampedArray(160 * 144 * 4),
                            160,
                            144);

                // Initialize canvas to white
                for (var i = 0; i < 160 * 144 * 4; i++)
                    this.screen.data[i] = 255;

                this.canvas.putImageData(this.screen, 0, 0);
            }
        }

        // Tile stuff, we had to put any to avoid problems for now
        this.tileset = [];

        for (var i = 0; i < 384; i++) {
            this.tileset[i] = [];
            for (var j = 0; j < 8; j++) {
                this.tileset[i][j] = [0, 0, 0, 0, 0, 0, 0, 0];
            }
        }

        // OAM stuff
        for (var i = 0, n = 0; i < 40; i++ , n += 4) {
            this.oam[n + 0] = 0;
            this.oam[n + 1] = 0;
            this.oam[n + 2] = 0;
            this.oam[n + 3] = 0;
            this.objdata[i] = {
                'y': -16, 'x': -8,
                'tile': 0, 'palette': 0,
                'xflip': 0, 'yflip': 0, 'prio': 0, 'num': i
            };
        }
    }

    // Does a step in the GPU after the CPU cycle
    step(tregisterfromcpu: number) {
        this.modeclock += tregisterfromcpu;

        switch (this.mode) {
            // OAM read mode, scanline active
            case 2:
                if (this.modeclock >= 80) {
                    // Enter scanline mode 3
                    this.modeclock = 0;
                    this.mode = 3;
                }
                break;

            // VRAM read mode, scanline active
            // Treat end of mode 3 as end of scanline
            case 3:
                if (this.modeclock >= 172) {
                    // Enter hblank
                    this.modeclock = 0;
                    this.mode = 0;

                    // Write a scanline to the framebuffer
                    this.renderScan();
                }
                break;

            // Hblank
            // After the last hblank, push the screen data to canvas
            case 0:
                if (this.modeclock >= 204) {
                    this.modeclock = 0;
                    this.line++;

                    if (this.line == 143) {
                        // Enter vblank
                        this.mode = 1;
                        this.canvas.putImageData(this.screen, 0, 0);
                    }
                    else {
                        this.mode = 2;
                    }
                }
                break;

            // Vblank (10 lines)
            case 1:
                if (this.modeclock >= 456) {
                    this.modeclock = 0;
                    this.line++;

                    if (this.line > 153) {
                        // Restart scanning modes
                        this.mode = 2;
                        this.line = 0;
                    }
                }
                break;
        }
    }

    // Takes a value written to VRAM, and updates the
    // internal tile data set
    updateTile(addr: number, val: number) {
        // Get the "base address" for this tile row
        addr &= 0x1FFE;

        // Work out which tile and row was updated
        var tile = (addr >> 4) & 511;
        var y = (addr >> 1) & 7;

        var sx: any;
        for (var x = 0; x < 8; x++) {
            // Find bit index for this pixel
            sx = 1 << (7 - x);

            // Update tile set
            this.tileset[tile][y][x] =
                ((this.vram[addr] & sx) ? 1 : 0) +
                ((this.vram[addr + 1] & sx) ? 2 : 0);
        }
    }

    renderScan() {
        // Scanline data, for use by sprite renderer
        var scanrow: any = [];

        // Render background if it's switched on
        if (this.switchbg) {
            var mapoffs = this.bgmap ? 0x1C00 : 0x1800;
            mapoffs += ((this.line + this.scy) & 255) >> 3;
            var lineoffs = (this.scx >> 3);
            var y = (this.line + this.scy) & 7;
            var x = this.scx & 7;
            var canvasoffs = this.line * 160 * 4;
            var colour: any;
            var tile = this.vram[mapoffs + lineoffs];

            // If the tile data set in use is #1, the
            // indices are signed; calculate a real tile offset
            if (this.bgtile == 1 && tile < 128) tile += 256;

            for (var i = 0; i < 160; i++) {
                // Re-map the tile pixel through the palette
                colour = this.pal.bg[this.tileset[tile][y][x]];

                // Plot the pixel to canvas
                this.screen.data[canvasoffs + 0] = colour[0];
                this.screen.data[canvasoffs + 1] = colour[1];
                this.screen.data[canvasoffs + 2] = colour[2];
                this.screen.data[canvasoffs + 3] = colour[3];
                canvasoffs += 4;

                // Store the pixel for later checking
                scanrow[i] = this.tileset[tile][y][x];

                // When this tile ends, read another
                x++;
                if (x == 8) {
                    x = 0;
                    lineoffs = (lineoffs + 1) & 31;
                    tile = this.vram[mapoffs + lineoffs];
                    if (this.bgtile == 1 && tile < 128) tile += 256;
                }
            }
        }

        // Render sprites if they're switched on
        if (this.switchobj) {
            for (var i = 0; i < 40; i++) {
                var obj = this.objdata[i];

                // Check if this sprite falls on this scanline
                if (obj.y <= this.line && (obj.y + 8) > this.line) {
                    // Palette to use for this sprite
                    var pal = obj.pal ? this.pal.obj1 : this.pal.obj0;

                    // Where to render on the canvas
                    var canvasoffs = (this.line * 160 + obj.x) * 4;

                    // Data for this line of the sprite
                    var tilerow: any;

                    // If the sprite is Y-flipped,
                    // use the opposite side of the tile
                    if (obj.yflip) {
                        tilerow = this.tileset[obj.tile]
                        [7 - (this.line - obj.y)];
                    }
                    else {
                        tilerow = this.tileset[obj.tile]
                        [this.line - obj.y];
                    }

                    var colour;
                    var x: number;

                    for (var x = 0; x < 8; x++) {
                        // If this pixel is still on-screen, AND
                        // if it's not colour 0 (transparent), AND
                        // if this sprite has priority OR shows under the bg
                        // then render the pixel
                        if ((obj.x + x) >= 0 && (obj.x + x) < 160 &&
                            tilerow[x] &&
                            (obj.prio || !scanrow[obj.x + x])) {
                            // If the sprite is X-flipped,
                            // write pixels in reverse order
                            colour = pal[tilerow[obj.xflip ? (7 - x) : x]];

                            this.screen.data[canvasoffs + 0] = colour[0];
                            this.screen.data[canvasoffs + 1] = colour[1];
                            this.screen.data[canvasoffs + 2] = colour[2];
                            this.screen.data[canvasoffs + 3] = colour[3];

                            canvasoffs += 4;
                        }
                    }
                }
            }
        }
    }

    readByte(address: number) {
        switch (address) {
            // LCD Control
            case 0xFF40:
                return (this.switchbg ? 0x01 : 0x00) |
                    (this.switchobj ? 0x02 : 0x00) |
                    (this.bgmap ? 0x08 : 0x00) |
                    (this.bgtile ? 0x10 : 0x00) |
                    (this.switchlcd ? 0x80 : 0x00);

            // Scroll Y
            case 0xFF42:
                return this.scy;

            // Scroll X
            case 0xFF43:
                return this.scx;

            // Current scanline
            case 0xFF44:
                return this.line;
        }
    }

    writeByte(address: number, value: number) {
        switch (address) {
            // LCD Control
            case 0xFF40:
                this.switchbg = (value & 0x01) ? 1 : 0;
                this.switchobj = (value & 0x02) ? 1 : 0;
                this.bgmap = (value & 0x08) ? 1 : 0;
                this.bgtile = (value & 0x10) ? 1 : 0;
                this.switchlcd = (value & 0x80) ? 1 : 0;
                break;

            // Scroll Y
            case 0xFF42:
                this.scy = value;
                break;

            // Scroll X
            case 0xFF43:
                this.scx = value;
                break;

            // Background palette
            case 0xFF47:
                for (var i = 0; i < 4; i++) {
                    switch ((value >> (i * 2)) & 3) {
                        case 0: this.pal.bg[i] = [255, 255, 255, 255]; break;
                        case 1: this.pal.bg[i] = [192, 192, 192, 255]; break;
                        case 2: this.pal.bg[i] = [96, 96, 96, 255]; break;
                        case 3: this.pal.bg[i] = [0, 0, 0, 255]; break;
                    }
                }
                break;

            // Object palettes
            case 0xFF48:
                for (var i = 0; i < 4; i++) {
                    switch ((value >> (i * 2)) & 3) {
                        case 0: this.pal.obj0[i] = [255, 255, 255, 255]; break;
                        case 1: this.pal.obj0[i] = [192, 192, 192, 255]; break;
                        case 2: this.pal.obj0[i] = [96, 96, 96, 255]; break;
                        case 3: this.pal.obj0[i] = [0, 0, 0, 255]; break;
                    }
                }
                break;

            case 0xFF49:
                for (var i = 0; i < 4; i++) {
                    switch ((value >> (i * 2)) & 3) {
                        case 0: this.pal.obj1[i] = [255, 255, 255, 255]; break;
                        case 1: this.pal.obj1[i] = [192, 192, 192, 255]; break;
                        case 2: this.pal.obj1[i] = [96, 96, 96, 255]; break;
                        case 3: this.pal.obj1[i] = [0, 0, 0, 255]; break;
                    }
                }
                break;
        }
    }

    buildobjdata(address: number, value: number) {
        var obj = address >> 2;
        if (obj < 40) {
            switch (address & 3) {
                // Y-coordinate
                case 0: this.objdata[obj].y = value - 16; break;

                // X-coordinate
                case 1: this.objdata[obj].x = value - 8; break;

                // Data tile
                case 2: this.objdata[obj].tile = value; break;

                // Options
                case 3:
                    this.objdata[obj].palette = (value & 0x10) ? 1 : 0;
                    this.objdata[obj].xflip = (value & 0x20) ? 1 : 0;
                    this.objdata[obj].yflip = (value & 0x40) ? 1 : 0;
                    this.objdata[obj].prio = (value & 0x80) ? 1 : 0;
                    break;
            }
        }
    }
}