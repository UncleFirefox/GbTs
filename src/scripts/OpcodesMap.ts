class OpcodesMap {

    cpu: CPU;
    mmu: MMU;

    constructor(cpu : CPU, mmu : MMU){
        this.cpu = cpu;
        this.mmu = mmu;
    }

    /*--- Load/store ---*/
    LDrr_bb = () => { this.cpu.registers.b = this.cpu.registers.b; this.cpu.registers.m = 1; };
    LDrr_bc = () => { this.cpu.registers.b = this.cpu.registers.c; this.cpu.registers.m = 1; };
    LDrr_bd = () => { this.cpu.registers.b = this.cpu.registers.d; this.cpu.registers.m = 1; };
    LDrr_be = () => { this.cpu.registers.b = this.cpu.registers.e; this.cpu.registers.m = 1; };
    LDrr_bh = () => { this.cpu.registers.b = this.cpu.registers.h; this.cpu.registers.m = 1; };
    LDrr_bl = () => { this.cpu.registers.b = this.cpu.registers.l; this.cpu.registers.m = 1; };
    LDrr_ba = () => { this.cpu.registers.b = this.cpu.registers.a; this.cpu.registers.m = 1; };
    LDrr_cb = () => { this.cpu.registers.c = this.cpu.registers.b; this.cpu.registers.m = 1; };
    LDrr_cc = () => { this.cpu.registers.c = this.cpu.registers.c; this.cpu.registers.m = 1; };
    LDrr_cd = () => { this.cpu.registers.c = this.cpu.registers.d; this.cpu.registers.m = 1; };
    LDrr_ce = () => { this.cpu.registers.c = this.cpu.registers.e; this.cpu.registers.m = 1; };
    LDrr_ch = () => { this.cpu.registers.c = this.cpu.registers.h; this.cpu.registers.m = 1; };
    LDrr_cl = () => { this.cpu.registers.c = this.cpu.registers.l; this.cpu.registers.m = 1; };
    LDrr_ca = () => { this.cpu.registers.c = this.cpu.registers.a; this.cpu.registers.m = 1; };
    LDrr_db = () => { this.cpu.registers.d = this.cpu.registers.b; this.cpu.registers.m = 1; };
    LDrr_dc = () => { this.cpu.registers.d = this.cpu.registers.c; this.cpu.registers.m = 1; };
    LDrr_dd = () => { this.cpu.registers.d = this.cpu.registers.d; this.cpu.registers.m = 1; };
    LDrr_de = () => { this.cpu.registers.d = this.cpu.registers.e; this.cpu.registers.m = 1; };
    LDrr_dh = () => { this.cpu.registers.d = this.cpu.registers.h; this.cpu.registers.m = 1; };
    LDrr_dl = () => { this.cpu.registers.d = this.cpu.registers.l; this.cpu.registers.m = 1; };
    LDrr_da = () => { this.cpu.registers.d = this.cpu.registers.a; this.cpu.registers.m = 1; };
    LDrr_eb = () => { this.cpu.registers.e = this.cpu.registers.b; this.cpu.registers.m = 1; };
    LDrr_ec = () => { this.cpu.registers.e = this.cpu.registers.c; this.cpu.registers.m = 1; };
    LDrr_ed = () => { this.cpu.registers.e = this.cpu.registers.d; this.cpu.registers.m = 1; };
    LDrr_ee = () => { this.cpu.registers.e = this.cpu.registers.e; this.cpu.registers.m = 1; };
    LDrr_eh = () => { this.cpu.registers.e = this.cpu.registers.h; this.cpu.registers.m = 1; };
    LDrr_el = () => { this.cpu.registers.e = this.cpu.registers.l; this.cpu.registers.m = 1; };
    LDrr_ea = () => { this.cpu.registers.e = this.cpu.registers.a; this.cpu.registers.m = 1; };
    LDrr_hb = () => { this.cpu.registers.h = this.cpu.registers.b; this.cpu.registers.m = 1; };
    LDrr_hc = () => { this.cpu.registers.h = this.cpu.registers.c; this.cpu.registers.m = 1; };
    LDrr_hd = () => { this.cpu.registers.h = this.cpu.registers.d; this.cpu.registers.m = 1; };
    LDrr_he = () => { this.cpu.registers.h = this.cpu.registers.e; this.cpu.registers.m = 1; };
    LDrr_hh = () => { this.cpu.registers.h = this.cpu.registers.h; this.cpu.registers.m = 1; };
    LDrr_hl = () => { this.cpu.registers.h = this.cpu.registers.l; this.cpu.registers.m = 1; };
    LDrr_ha = () => { this.cpu.registers.h = this.cpu.registers.a; this.cpu.registers.m = 1; };
    LDrr_lb = () => { this.cpu.registers.l = this.cpu.registers.b; this.cpu.registers.m = 1; };
    LDrr_lc = () => { this.cpu.registers.l = this.cpu.registers.c; this.cpu.registers.m = 1; };
    LDrr_ld = () => { this.cpu.registers.l = this.cpu.registers.d; this.cpu.registers.m = 1; };
    LDrr_le = () => { this.cpu.registers.l = this.cpu.registers.e; this.cpu.registers.m = 1; };
    LDrr_lh = () => { this.cpu.registers.l = this.cpu.registers.h; this.cpu.registers.m = 1; };
    LDrr_ll = () => { this.cpu.registers.l = this.cpu.registers.l; this.cpu.registers.m = 1; };
    LDrr_la = () => { this.cpu.registers.l = this.cpu.registers.a; this.cpu.registers.m = 1; };
    LDrr_ab = () => { this.cpu.registers.a = this.cpu.registers.b; this.cpu.registers.m = 1; };
    LDrr_ac = () => { this.cpu.registers.a = this.cpu.registers.c; this.cpu.registers.m = 1; };
    LDrr_ad = () => { this.cpu.registers.a = this.cpu.registers.d; this.cpu.registers.m = 1; };
    LDrr_ae = () => { this.cpu.registers.a = this.cpu.registers.e; this.cpu.registers.m = 1; };
    LDrr_ah = () => { this.cpu.registers.a = this.cpu.registers.h; this.cpu.registers.m = 1; };
    LDrr_al = () => { this.cpu.registers.a = this.cpu.registers.l; this.cpu.registers.m = 1; };
    LDrr_aa = () => { this.cpu.registers.a = this.cpu.registers.a; this.cpu.registers.m = 1; };

    LDrHLm_b = () => { this.cpu.registers.b = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 2; };
    LDrHLm_c = () => { this.cpu.registers.c = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 2; };
    LDrHLm_d = () => { this.cpu.registers.d = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 2; };
    LDrHLm_e = () => { this.cpu.registers.e = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 2; };
    LDrHLm_h = () => { this.cpu.registers.h = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 2; };
    LDrHLm_l = () => { this.cpu.registers.l = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 2; };
    LDrHLm_a = () => { this.cpu.registers.a = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 2; };

    LDHLmr_b = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.b); this.cpu.registers.m = 2; };
    LDHLmr_c = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.c); this.cpu.registers.m = 2; };
    LDHLmr_d = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.d); this.cpu.registers.m = 2; };
    LDHLmr_e = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.e); this.cpu.registers.m = 2; };
    LDHLmr_h = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.h); this.cpu.registers.m = 2; };
    LDHLmr_l = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.l); this.cpu.registers.m = 2; };
    LDHLmr_a = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.a); this.cpu.registers.m = 2; };

    LDrn_b = () => { this.cpu.registers.b = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.m = 2; };
    LDrn_c = () => { this.cpu.registers.c = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.m = 2; };
    LDrn_d = () => { this.cpu.registers.d = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.m = 2; };
    LDrn_e = () => { this.cpu.registers.e = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.m = 2; };
    LDrn_h = () => { this.cpu.registers.h = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.m = 2; };
    LDrn_l = () => { this.cpu.registers.l = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.m = 2; };
    LDrn_a = () => { this.cpu.registers.a = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.m = 2; };

    LDHLmn = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.mmu.readByte(this.cpu.registers.pc)); this.cpu.registers.pc++; this.cpu.registers.m = 3; };

    LDBCmA = () => { this.mmu.writeByte((this.cpu.registers.b << 8) + this.cpu.registers.c, this.cpu.registers.a); this.cpu.registers.m = 2; };
    LDDEmA = () => { this.mmu.writeByte((this.cpu.registers.d << 8) + this.cpu.registers.e, this.cpu.registers.a); this.cpu.registers.m = 2; };

    LDmmA = () => { this.mmu.writeByte(this.mmu.readWord(this.cpu.registers.pc), this.cpu.registers.a); this.cpu.registers.pc += 2; this.cpu.registers.m = 4; };
    LDmmSP = () => { }

    LDABCm = () => { this.cpu.registers.a = this.mmu.readByte((this.cpu.registers.b << 8) + this.cpu.registers.c); this.cpu.registers.m = 2; };
    LDADEm = () => { this.cpu.registers.a = this.mmu.readByte((this.cpu.registers.d << 8) + this.cpu.registers.e); this.cpu.registers.m = 2; };

    LDAmm = () => { this.cpu.registers.a = this.mmu.readByte(this.mmu.readWord(this.cpu.registers.pc)); this.cpu.registers.pc += 2; this.cpu.registers.m = 4; };

    LDBCnn = () => { this.cpu.registers.c = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.b = this.mmu.readByte(this.cpu.registers.pc + 1); this.cpu.registers.pc += 2; this.cpu.registers.m = 3; };
    LDDEnn = () => { this.cpu.registers.e = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.d = this.mmu.readByte(this.cpu.registers.pc + 1); this.cpu.registers.pc += 2; this.cpu.registers.m = 3; };
    LDHLnn = () => { this.cpu.registers.l = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.h = this.mmu.readByte(this.cpu.registers.pc + 1); this.cpu.registers.pc += 2; this.cpu.registers.m = 3; };
    LDSPnn = () => { this.cpu.registers.sp = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.pc += 2; this.cpu.registers.m = 3; };

    LDHLmm = () => { var i = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.pc += 2; this.cpu.registers.l = this.mmu.readByte(i); this.cpu.registers.h = this.mmu.readByte(i + 1); this.cpu.registers.m = 5; };
    LDmmHL = () => { var i = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.pc += 2; this.mmu.writeWord(i, (this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.m = 5; };

    LDHLIA = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.a); this.cpu.registers.l = (this.cpu.registers.l + 1) & 255; if (!this.cpu.registers.l) this.cpu.registers.h = (this.cpu.registers.h + 1) & 255; this.cpu.registers.m = 2; };
    LDAHLI = () => { this.cpu.registers.a = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.l = (this.cpu.registers.l + 1) & 255; if (!this.cpu.registers.l) this.cpu.registers.h = (this.cpu.registers.h + 1) & 255; this.cpu.registers.m = 2; };

    LDHLDA = () => { this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, this.cpu.registers.a); this.cpu.registers.l = (this.cpu.registers.l - 1) & 255; if (this.cpu.registers.l == 255) this.cpu.registers.h = (this.cpu.registers.h - 1) & 255; this.cpu.registers.m = 2; };
    LDAHLD = () => { this.cpu.registers.a = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.l = (this.cpu.registers.l - 1) & 255; if (this.cpu.registers.l == 255) this.cpu.registers.h = (this.cpu.registers.h - 1) & 255; this.cpu.registers.m = 2; };

    LDAIOn = () => { this.cpu.registers.a = this.mmu.readByte(0xFF00 + this.mmu.readByte(this.cpu.registers.pc)); this.cpu.registers.pc++; this.cpu.registers.m = 3; };
    LDIOnA = () => { this.mmu.writeByte(0xFF00 + this.mmu.readByte(this.cpu.registers.pc), this.cpu.registers.a); this.cpu.registers.pc++; this.cpu.registers.m = 3; };
    LDAIOC = () => { this.cpu.registers.a = this.mmu.readByte(0xFF00 + this.cpu.registers.c); this.cpu.registers.m = 2; };
    LDIOCA = () => { this.mmu.writeByte(0xFF00 + this.cpu.registers.c, this.cpu.registers.a); this.cpu.registers.m = 2; };

    LDHLSPn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; i += this.cpu.registers.sp; this.cpu.registers.h = (i >> 8) & 255; this.cpu.registers.l = i & 255; this.cpu.registers.m = 3; };

    SWAPr_b = () => { var tr = this.cpu.registers.b; this.cpu.registers.b = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.cpu.registers.f = this.cpu.registers.b ? 0 : 0x80; this.cpu.registers.m = 1; };
    SWAPr_c = () => { var tr = this.cpu.registers.c; this.cpu.registers.c = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.cpu.registers.f = this.cpu.registers.c ? 0 : 0x80; this.cpu.registers.m = 1; };
    SWAPr_d = () => { var tr = this.cpu.registers.d; this.cpu.registers.d = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.cpu.registers.f = this.cpu.registers.d ? 0 : 0x80; this.cpu.registers.m = 1; };
    SWAPr_e = () => { var tr = this.cpu.registers.e; this.cpu.registers.e = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.cpu.registers.f = this.cpu.registers.e ? 0 : 0x80; this.cpu.registers.m = 1; };
    SWAPr_h = () => { var tr = this.cpu.registers.h; this.cpu.registers.h = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.cpu.registers.f = this.cpu.registers.h ? 0 : 0x80; this.cpu.registers.m = 1; };
    SWAPr_l = () => { var tr = this.cpu.registers.l; this.cpu.registers.l = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.cpu.registers.f = this.cpu.registers.l ? 0 : 0x80; this.cpu.registers.m = 1; };
    SWAPr_a = () => { var tr = this.cpu.registers.a; this.cpu.registers.a = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };

    /*--- Data processing ---*/
    ADDr_b = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.b; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.b ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADDr_c = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.c; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.c ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADDr_d = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.d; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.d ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADDr_e = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.e; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.e ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADDr_h = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.h; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.h ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADDr_l = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.l; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.l ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADDr_a = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.a; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.a ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADDHL = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.a += m; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ a ^ m) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };
    ADDn = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.a += m; this.cpu.registers.pc++; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ a ^ m) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };
    ADDHLBC = () => { var hl = (this.cpu.registers.h << 8) + this.cpu.registers.l; hl += (this.cpu.registers.b << 8) + this.cpu.registers.c; if (hl > 65535) this.cpu.registers.f |= 0x10; else this.cpu.registers.f &= 0xEF; this.cpu.registers.h = (hl >> 8) & 255; this.cpu.registers.l = hl & 255; this.cpu.registers.m = 3; };
    ADDHLDE = () => { var hl = (this.cpu.registers.h << 8) + this.cpu.registers.l; hl += (this.cpu.registers.d << 8) + this.cpu.registers.e; if (hl > 65535) this.cpu.registers.f |= 0x10; else this.cpu.registers.f &= 0xEF; this.cpu.registers.h = (hl >> 8) & 255; this.cpu.registers.l = hl & 255; this.cpu.registers.m = 3; };
    ADDHLHL = () => { var hl = (this.cpu.registers.h << 8) + this.cpu.registers.l; hl += (this.cpu.registers.h << 8) + this.cpu.registers.l; if (hl > 65535) this.cpu.registers.f |= 0x10; else this.cpu.registers.f &= 0xEF; this.cpu.registers.h = (hl >> 8) & 255; this.cpu.registers.l = hl & 255; this.cpu.registers.m = 3; };
    ADDHLSP = () => { var hl = (this.cpu.registers.h << 8) + this.cpu.registers.l; hl += this.cpu.registers.sp; if (hl > 65535) this.cpu.registers.f |= 0x10; else this.cpu.registers.f &= 0xEF; this.cpu.registers.h = (hl >> 8) & 255; this.cpu.registers.l = hl & 255; this.cpu.registers.m = 3; };
    ADDSPn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; this.cpu.registers.sp += i; this.cpu.registers.m = 4; };

    ADCr_b = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.b; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.b ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADCr_c = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.c; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.c ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADCr_d = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.d; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.d ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADCr_e = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.e; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.e ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADCr_h = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.h; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.h ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADCr_l = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.l; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.l ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADCr_a = () => { var a = this.cpu.registers.a; this.cpu.registers.a += this.cpu.registers.a; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.a ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    ADCHL = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.a += m; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ m ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };
    ADCn = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.a += m; this.cpu.registers.pc++; this.cpu.registers.a += (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a > 255) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ m ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };

    SUBr_b = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.b; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.b ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SUBr_c = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.c; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.c ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SUBr_d = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.d; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.d ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SUBr_e = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.e; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.e ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SUBr_h = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.h; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.h ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SUBr_l = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.l; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.l ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SUBr_a = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.a; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.a ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SUBHL = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.a -= m; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ m ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };
    SUBn = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.a -= m; this.cpu.registers.pc++; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ m ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };

    SBCr_b = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.b; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.b ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SBCr_c = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.c; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.c ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SBCr_d = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.d; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.d ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SBCr_e = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.e; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.e ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SBCr_h = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.h; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.h ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SBCr_l = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.l; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.l ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SBCr_a = () => { var a = this.cpu.registers.a; this.cpu.registers.a -= this.cpu.registers.a; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.a ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    SBCHL = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.a -= m; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ m ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };
    SBCn = () => { var a = this.cpu.registers.a; var m = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.a -= m; this.cpu.registers.pc++; this.cpu.registers.a -= (this.cpu.registers.f & 0x10) ? 1 : 0; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x50 : 0x40; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ m ^ a) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };

    CPr_b = () => { var i = this.cpu.registers.a; i -= this.cpu.registers.b; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.b ^ i) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    CPr_c = () => { var i = this.cpu.registers.a; i -= this.cpu.registers.c; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.c ^ i) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    CPr_d = () => { var i = this.cpu.registers.a; i -= this.cpu.registers.d; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.d ^ i) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    CPr_e = () => { var i = this.cpu.registers.a; i -= this.cpu.registers.e; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.e ^ i) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    CPr_h = () => { var i = this.cpu.registers.a; i -= this.cpu.registers.h; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.h ^ i) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    CPr_l = () => { var i = this.cpu.registers.a; i -= this.cpu.registers.l; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.l ^ i) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    CPr_a = () => { var i = this.cpu.registers.a; i -= this.cpu.registers.a; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ this.cpu.registers.a ^ i) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 1; };
    CPHL = () => { var i = this.cpu.registers.a; var m = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i -= m; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ i ^ m) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };
    CPn = () => { var i = this.cpu.registers.a; var m = this.mmu.readByte(this.cpu.registers.pc); i -= m; this.cpu.registers.pc++; this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.cpu.registers.f |= 0x80; if ((this.cpu.registers.a ^ i ^ m) & 0x10) this.cpu.registers.f |= 0x20; this.cpu.registers.m = 2; };

    DAA = () => { var a = this.cpu.registers.a; if ((this.cpu.registers.f & 0x20) || ((this.cpu.registers.a & 15) > 9)) this.cpu.registers.a += 6; this.cpu.registers.f &= 0xEF; if ((this.cpu.registers.f & 0x20) || (a > 0x99)) { this.cpu.registers.a += 0x60; this.cpu.registers.f |= 0x10; } this.cpu.registers.m = 1; };

    ANDr_b = () => { this.cpu.registers.a &= this.cpu.registers.b; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ANDr_c = () => { this.cpu.registers.a &= this.cpu.registers.c; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ANDr_d = () => { this.cpu.registers.a &= this.cpu.registers.d; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ANDr_e = () => { this.cpu.registers.a &= this.cpu.registers.e; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ANDr_h = () => { this.cpu.registers.a &= this.cpu.registers.h; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ANDr_l = () => { this.cpu.registers.a &= this.cpu.registers.l; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ANDr_a = () => { this.cpu.registers.a &= this.cpu.registers.a; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ANDHL = () => { this.cpu.registers.a &= this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 2; };
    ANDn = () => { this.cpu.registers.a &= this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 2; };

    ORr_b = () => { this.cpu.registers.a |= this.cpu.registers.b; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ORr_c = () => { this.cpu.registers.a |= this.cpu.registers.c; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ORr_d = () => { this.cpu.registers.a |= this.cpu.registers.d; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ORr_e = () => { this.cpu.registers.a |= this.cpu.registers.e; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ORr_h = () => { this.cpu.registers.a |= this.cpu.registers.h; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ORr_l = () => { this.cpu.registers.a |= this.cpu.registers.l; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ORr_a = () => { this.cpu.registers.a |= this.cpu.registers.a; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    ORHL = () => { this.cpu.registers.a |= this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 2; };
    ORn = () => { this.cpu.registers.a |= this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 2; };

    XORr_b = () => { this.cpu.registers.a ^= this.cpu.registers.b; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    XORr_c = () => { this.cpu.registers.a ^= this.cpu.registers.c; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    XORr_d = () => { this.cpu.registers.a ^= this.cpu.registers.d; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    XORr_e = () => { this.cpu.registers.a ^= this.cpu.registers.e; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    XORr_h = () => { this.cpu.registers.a ^= this.cpu.registers.h; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    XORr_l = () => { this.cpu.registers.a ^= this.cpu.registers.l; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    XORr_a = () => { this.cpu.registers.a ^= this.cpu.registers.a; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    XORHL = () => { this.cpu.registers.a ^= this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 2; };
    XORn = () => { this.cpu.registers.a ^= this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 2; };

    INCr_b = () => { this.cpu.registers.b++; this.cpu.registers.b &= 255; this.cpu.registers.f = this.cpu.registers.b ? 0 : 0x80; this.cpu.registers.m = 1; };
    INCr_c = () => { this.cpu.registers.c++; this.cpu.registers.c &= 255; this.cpu.registers.f = this.cpu.registers.c ? 0 : 0x80; this.cpu.registers.m = 1; };
    INCr_d = () => { this.cpu.registers.d++; this.cpu.registers.d &= 255; this.cpu.registers.f = this.cpu.registers.d ? 0 : 0x80; this.cpu.registers.m = 1; };
    INCr_e = () => { this.cpu.registers.e++; this.cpu.registers.e &= 255; this.cpu.registers.f = this.cpu.registers.e ? 0 : 0x80; this.cpu.registers.m = 1; };
    INCr_h = () => { this.cpu.registers.h++; this.cpu.registers.h &= 255; this.cpu.registers.f = this.cpu.registers.h ? 0 : 0x80; this.cpu.registers.m = 1; };
    INCr_l = () => { this.cpu.registers.l++; this.cpu.registers.l &= 255; this.cpu.registers.f = this.cpu.registers.l ? 0 : 0x80; this.cpu.registers.m = 1; };
    INCr_a = () => { this.cpu.registers.a++; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    INCHLm = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) + 1; i &= 255; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.f = i ? 0 : 0x80; this.cpu.registers.m = 3; };

    DECr_b = () => { this.cpu.registers.b--; this.cpu.registers.b &= 255; this.cpu.registers.f = this.cpu.registers.b ? 0 : 0x80; this.cpu.registers.m = 1; };
    DECr_c = () => { this.cpu.registers.c--; this.cpu.registers.c &= 255; this.cpu.registers.f = this.cpu.registers.c ? 0 : 0x80; this.cpu.registers.m = 1; };
    DECr_d = () => { this.cpu.registers.d--; this.cpu.registers.d &= 255; this.cpu.registers.f = this.cpu.registers.d ? 0 : 0x80; this.cpu.registers.m = 1; };
    DECr_e = () => { this.cpu.registers.e--; this.cpu.registers.e &= 255; this.cpu.registers.f = this.cpu.registers.e ? 0 : 0x80; this.cpu.registers.m = 1; };
    DECr_h = () => { this.cpu.registers.h--; this.cpu.registers.h &= 255; this.cpu.registers.f = this.cpu.registers.h ? 0 : 0x80; this.cpu.registers.m = 1; };
    DECr_l = () => { this.cpu.registers.l--; this.cpu.registers.l &= 255; this.cpu.registers.f = this.cpu.registers.l ? 0 : 0x80; this.cpu.registers.m = 1; };
    DECr_a = () => { this.cpu.registers.a--; this.cpu.registers.a &= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    DECHLm = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) - 1; i &= 255; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.f = i ? 0 : 0x80; this.cpu.registers.m = 3; };

    INCBC = () => { this.cpu.registers.c = (this.cpu.registers.c + 1) & 255; if (!this.cpu.registers.c) this.cpu.registers.b = (this.cpu.registers.b + 1) & 255; this.cpu.registers.m = 1; };
    INCDE = () => { this.cpu.registers.e = (this.cpu.registers.e + 1) & 255; if (!this.cpu.registers.e) this.cpu.registers.d = (this.cpu.registers.d + 1) & 255; this.cpu.registers.m = 1; };
    INCHL = () => { this.cpu.registers.l = (this.cpu.registers.l + 1) & 255; if (!this.cpu.registers.l) this.cpu.registers.h = (this.cpu.registers.h + 1) & 255; this.cpu.registers.m = 1; };
    INCSP = () => { this.cpu.registers.sp = (this.cpu.registers.sp + 1) & 65535; this.cpu.registers.m = 1; };

    DECBC = () => { this.cpu.registers.c = (this.cpu.registers.c - 1) & 255; if (this.cpu.registers.c == 255) this.cpu.registers.b = (this.cpu.registers.b - 1) & 255; this.cpu.registers.m = 1; };
    DECDE = () => { this.cpu.registers.e = (this.cpu.registers.e - 1) & 255; if (this.cpu.registers.e == 255) this.cpu.registers.d = (this.cpu.registers.d - 1) & 255; this.cpu.registers.m = 1; };
    DECHL = () => { this.cpu.registers.l = (this.cpu.registers.l - 1) & 255; if (this.cpu.registers.l == 255) this.cpu.registers.h = (this.cpu.registers.h - 1) & 255; this.cpu.registers.m = 1; };
    DECSP = () => { this.cpu.registers.sp = (this.cpu.registers.sp - 1) & 65535; this.cpu.registers.m = 1; };

    /*--- Bit manipulation ---*/
    BIT0b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x01) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT0c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x01) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT0d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x01) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT0e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x01) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT0h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x01) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT0l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x01) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT0a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x01) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT0m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x01) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES0b = () => { this.cpu.registers.b &= 0xFE; this.cpu.registers.m = 2; };
    RES0c = () => { this.cpu.registers.c &= 0xFE; this.cpu.registers.m = 2; };
    RES0d = () => { this.cpu.registers.d &= 0xFE; this.cpu.registers.m = 2; };
    RES0e = () => { this.cpu.registers.e &= 0xFE; this.cpu.registers.m = 2; };
    RES0h = () => { this.cpu.registers.h &= 0xFE; this.cpu.registers.m = 2; };
    RES0l = () => { this.cpu.registers.l &= 0xFE; this.cpu.registers.m = 2; };
    RES0a = () => { this.cpu.registers.a &= 0xFE; this.cpu.registers.m = 2; };
    RES0m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0xFE; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET0b = () => { this.cpu.registers.b |= 0x01; this.cpu.registers.m = 2; };
    SET0c = () => { this.cpu.registers.b |= 0x01; this.cpu.registers.m = 2; };
    SET0d = () => { this.cpu.registers.b |= 0x01; this.cpu.registers.m = 2; };
    SET0e = () => { this.cpu.registers.b |= 0x01; this.cpu.registers.m = 2; };
    SET0h = () => { this.cpu.registers.b |= 0x01; this.cpu.registers.m = 2; };
    SET0l = () => { this.cpu.registers.b |= 0x01; this.cpu.registers.m = 2; };
    SET0a = () => { this.cpu.registers.b |= 0x01; this.cpu.registers.m = 2; };
    SET0m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x01; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    BIT1b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x02) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT1c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x02) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT1d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x02) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT1e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x02) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT1h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x02) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT1l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x02) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT1a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x02) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT1m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x02) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES1b = () => { this.cpu.registers.b &= 0xFD; this.cpu.registers.m = 2; };
    RES1c = () => { this.cpu.registers.c &= 0xFD; this.cpu.registers.m = 2; };
    RES1d = () => { this.cpu.registers.d &= 0xFD; this.cpu.registers.m = 2; };
    RES1e = () => { this.cpu.registers.e &= 0xFD; this.cpu.registers.m = 2; };
    RES1h = () => { this.cpu.registers.h &= 0xFD; this.cpu.registers.m = 2; };
    RES1l = () => { this.cpu.registers.l &= 0xFD; this.cpu.registers.m = 2; };
    RES1a = () => { this.cpu.registers.a &= 0xFD; this.cpu.registers.m = 2; };
    RES1m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0xFD; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET1b = () => { this.cpu.registers.b |= 0x02; this.cpu.registers.m = 2; };
    SET1c = () => { this.cpu.registers.b |= 0x02; this.cpu.registers.m = 2; };
    SET1d = () => { this.cpu.registers.b |= 0x02; this.cpu.registers.m = 2; };
    SET1e = () => { this.cpu.registers.b |= 0x02; this.cpu.registers.m = 2; };
    SET1h = () => { this.cpu.registers.b |= 0x02; this.cpu.registers.m = 2; };
    SET1l = () => { this.cpu.registers.b |= 0x02; this.cpu.registers.m = 2; };
    SET1a = () => { this.cpu.registers.b |= 0x02; this.cpu.registers.m = 2; };
    SET1m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x02; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    BIT2b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x04) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT2c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x04) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT2d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x04) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT2e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x04) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT2h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x04) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT2l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x04) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT2a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x04) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT2m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x04) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES2b = () => { this.cpu.registers.b &= 0xFB; this.cpu.registers.m = 2; };
    RES2c = () => { this.cpu.registers.c &= 0xFB; this.cpu.registers.m = 2; };
    RES2d = () => { this.cpu.registers.d &= 0xFB; this.cpu.registers.m = 2; };
    RES2e = () => { this.cpu.registers.e &= 0xFB; this.cpu.registers.m = 2; };
    RES2h = () => { this.cpu.registers.h &= 0xFB; this.cpu.registers.m = 2; };
    RES2l = () => { this.cpu.registers.l &= 0xFB; this.cpu.registers.m = 2; };
    RES2a = () => { this.cpu.registers.a &= 0xFB; this.cpu.registers.m = 2; };
    RES2m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0xFB; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET2b = () => { this.cpu.registers.b |= 0x04; this.cpu.registers.m = 2; };
    SET2c = () => { this.cpu.registers.b |= 0x04; this.cpu.registers.m = 2; };
    SET2d = () => { this.cpu.registers.b |= 0x04; this.cpu.registers.m = 2; };
    SET2e = () => { this.cpu.registers.b |= 0x04; this.cpu.registers.m = 2; };
    SET2h = () => { this.cpu.registers.b |= 0x04; this.cpu.registers.m = 2; };
    SET2l = () => { this.cpu.registers.b |= 0x04; this.cpu.registers.m = 2; };
    SET2a = () => { this.cpu.registers.b |= 0x04; this.cpu.registers.m = 2; };
    SET2m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x04; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    BIT3b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x08) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT3c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x08) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT3d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x08) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT3e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x08) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT3h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x08) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT3l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x08) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT3a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x08) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT3m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x08) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES3b = () => { this.cpu.registers.b &= 0xF7; this.cpu.registers.m = 2; };
    RES3c = () => { this.cpu.registers.c &= 0xF7; this.cpu.registers.m = 2; };
    RES3d = () => { this.cpu.registers.d &= 0xF7; this.cpu.registers.m = 2; };
    RES3e = () => { this.cpu.registers.e &= 0xF7; this.cpu.registers.m = 2; };
    RES3h = () => { this.cpu.registers.h &= 0xF7; this.cpu.registers.m = 2; };
    RES3l = () => { this.cpu.registers.l &= 0xF7; this.cpu.registers.m = 2; };
    RES3a = () => { this.cpu.registers.a &= 0xF7; this.cpu.registers.m = 2; };
    RES3m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0xF7; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET3b = () => { this.cpu.registers.b |= 0x08; this.cpu.registers.m = 2; };
    SET3c = () => { this.cpu.registers.b |= 0x08; this.cpu.registers.m = 2; };
    SET3d = () => { this.cpu.registers.b |= 0x08; this.cpu.registers.m = 2; };
    SET3e = () => { this.cpu.registers.b |= 0x08; this.cpu.registers.m = 2; };
    SET3h = () => { this.cpu.registers.b |= 0x08; this.cpu.registers.m = 2; };
    SET3l = () => { this.cpu.registers.b |= 0x08; this.cpu.registers.m = 2; };
    SET3a = () => { this.cpu.registers.b |= 0x08; this.cpu.registers.m = 2; };
    SET3m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x08; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    BIT4b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x10) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT4c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x10) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT4d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x10) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT4e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x10) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT4h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x10) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT4l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x10) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT4a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x10) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT4m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x10) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES4b = () => { this.cpu.registers.b &= 0xEF; this.cpu.registers.m = 2; };
    RES4c = () => { this.cpu.registers.c &= 0xEF; this.cpu.registers.m = 2; };
    RES4d = () => { this.cpu.registers.d &= 0xEF; this.cpu.registers.m = 2; };
    RES4e = () => { this.cpu.registers.e &= 0xEF; this.cpu.registers.m = 2; };
    RES4h = () => { this.cpu.registers.h &= 0xEF; this.cpu.registers.m = 2; };
    RES4l = () => { this.cpu.registers.l &= 0xEF; this.cpu.registers.m = 2; };
    RES4a = () => { this.cpu.registers.a &= 0xEF; this.cpu.registers.m = 2; };
    RES4m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0xEF; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET4b = () => { this.cpu.registers.b |= 0x10; this.cpu.registers.m = 2; };
    SET4c = () => { this.cpu.registers.b |= 0x10; this.cpu.registers.m = 2; };
    SET4d = () => { this.cpu.registers.b |= 0x10; this.cpu.registers.m = 2; };
    SET4e = () => { this.cpu.registers.b |= 0x10; this.cpu.registers.m = 2; };
    SET4h = () => { this.cpu.registers.b |= 0x10; this.cpu.registers.m = 2; };
    SET4l = () => { this.cpu.registers.b |= 0x10; this.cpu.registers.m = 2; };
    SET4a = () => { this.cpu.registers.b |= 0x10; this.cpu.registers.m = 2; };
    SET4m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x10; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    BIT5b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x20) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT5c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x20) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT5d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x20) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT5e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x20) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT5h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x20) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT5l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x20) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT5a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x20) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT5m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x20) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES5b = () => { this.cpu.registers.b &= 0xDF; this.cpu.registers.m = 2; };
    RES5c = () => { this.cpu.registers.c &= 0xDF; this.cpu.registers.m = 2; };
    RES5d = () => { this.cpu.registers.d &= 0xDF; this.cpu.registers.m = 2; };
    RES5e = () => { this.cpu.registers.e &= 0xDF; this.cpu.registers.m = 2; };
    RES5h = () => { this.cpu.registers.h &= 0xDF; this.cpu.registers.m = 2; };
    RES5l = () => { this.cpu.registers.l &= 0xDF; this.cpu.registers.m = 2; };
    RES5a = () => { this.cpu.registers.a &= 0xDF; this.cpu.registers.m = 2; };
    RES5m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0xDF; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET5b = () => { this.cpu.registers.b |= 0x20; this.cpu.registers.m = 2; };
    SET5c = () => { this.cpu.registers.b |= 0x20; this.cpu.registers.m = 2; };
    SET5d = () => { this.cpu.registers.b |= 0x20; this.cpu.registers.m = 2; };
    SET5e = () => { this.cpu.registers.b |= 0x20; this.cpu.registers.m = 2; };
    SET5h = () => { this.cpu.registers.b |= 0x20; this.cpu.registers.m = 2; };
    SET5l = () => { this.cpu.registers.b |= 0x20; this.cpu.registers.m = 2; };
    SET5a = () => { this.cpu.registers.b |= 0x20; this.cpu.registers.m = 2; };
    SET5m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x20; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    BIT6b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x40) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT6c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x40) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT6d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x40) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT6e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x40) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT6h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x40) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT6l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x40) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT6a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x40) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT6m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x40) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES6b = () => { this.cpu.registers.b &= 0xBF; this.cpu.registers.m = 2; };
    RES6c = () => { this.cpu.registers.c &= 0xBF; this.cpu.registers.m = 2; };
    RES6d = () => { this.cpu.registers.d &= 0xBF; this.cpu.registers.m = 2; };
    RES6e = () => { this.cpu.registers.e &= 0xBF; this.cpu.registers.m = 2; };
    RES6h = () => { this.cpu.registers.h &= 0xBF; this.cpu.registers.m = 2; };
    RES6l = () => { this.cpu.registers.l &= 0xBF; this.cpu.registers.m = 2; };
    RES6a = () => { this.cpu.registers.a &= 0xBF; this.cpu.registers.m = 2; };
    RES6m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0xBF; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET6b = () => { this.cpu.registers.b |= 0x40; this.cpu.registers.m = 2; };
    SET6c = () => { this.cpu.registers.b |= 0x40; this.cpu.registers.m = 2; };
    SET6d = () => { this.cpu.registers.b |= 0x40; this.cpu.registers.m = 2; };
    SET6e = () => { this.cpu.registers.b |= 0x40; this.cpu.registers.m = 2; };
    SET6h = () => { this.cpu.registers.b |= 0x40; this.cpu.registers.m = 2; };
    SET6l = () => { this.cpu.registers.b |= 0x40; this.cpu.registers.m = 2; };
    SET6a = () => { this.cpu.registers.b |= 0x40; this.cpu.registers.m = 2; };
    SET6m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x40; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    BIT7b = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.b & 0x80) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT7c = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.c & 0x80) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT7d = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.d & 0x80) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT7e = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.e & 0x80) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT7h = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.h & 0x80) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT7l = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.l & 0x80) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT7a = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.cpu.registers.a & 0x80) ? 0 : 0x80; this.cpu.registers.m = 2; };
    BIT7m = () => { this.cpu.registers.f &= 0x1F; this.cpu.registers.f |= 0x20; this.cpu.registers.f = (this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l) & 0x80) ? 0 : 0x80; this.cpu.registers.m = 3; };

    RES7b = () => { this.cpu.registers.b &= 0x7F; this.cpu.registers.m = 2; };
    RES7c = () => { this.cpu.registers.c &= 0x7F; this.cpu.registers.m = 2; };
    RES7d = () => { this.cpu.registers.d &= 0x7F; this.cpu.registers.m = 2; };
    RES7e = () => { this.cpu.registers.e &= 0x7F; this.cpu.registers.m = 2; };
    RES7h = () => { this.cpu.registers.h &= 0x7F; this.cpu.registers.m = 2; };
    RES7l = () => { this.cpu.registers.l &= 0x7F; this.cpu.registers.m = 2; };
    RES7a = () => { this.cpu.registers.a &= 0x7F; this.cpu.registers.m = 2; };
    RES7m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i &= 0x7F; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    SET7b = () => { this.cpu.registers.b |= 0x80; this.cpu.registers.m = 2; };
    SET7c = () => { this.cpu.registers.b |= 0x80; this.cpu.registers.m = 2; };
    SET7d = () => { this.cpu.registers.b |= 0x80; this.cpu.registers.m = 2; };
    SET7e = () => { this.cpu.registers.b |= 0x80; this.cpu.registers.m = 2; };
    SET7h = () => { this.cpu.registers.b |= 0x80; this.cpu.registers.m = 2; };
    SET7l = () => { this.cpu.registers.b |= 0x80; this.cpu.registers.m = 2; };
    SET7a = () => { this.cpu.registers.b |= 0x80; this.cpu.registers.m = 2; };
    SET7m = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); i |= 0x80; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.m = 4; };

    RLA = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.a & 0x80 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a << 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 1; };
    RLCA = () => { var ci = this.cpu.registers.a & 0x80 ? 1 : 0; var co = this.cpu.registers.a & 0x80 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a << 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 1; };
    RRA = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.a & 1 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a >> 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 1; };
    RRCA = () => { var ci = this.cpu.registers.a & 1 ? 0x80 : 0; var co = this.cpu.registers.a & 1 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a >> 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 1; };

    RLr_b = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.b & 0x80 ? 0x10 : 0; this.cpu.registers.b = (this.cpu.registers.b << 1) + ci; this.cpu.registers.b &= 255; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLr_c = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.c & 0x80 ? 0x10 : 0; this.cpu.registers.c = (this.cpu.registers.c << 1) + ci; this.cpu.registers.c &= 255; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLr_d = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.d & 0x80 ? 0x10 : 0; this.cpu.registers.d = (this.cpu.registers.d << 1) + ci; this.cpu.registers.d &= 255; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLr_e = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.e & 0x80 ? 0x10 : 0; this.cpu.registers.e = (this.cpu.registers.e << 1) + ci; this.cpu.registers.e &= 255; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLr_h = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.h & 0x80 ? 0x10 : 0; this.cpu.registers.h = (this.cpu.registers.h << 1) + ci; this.cpu.registers.h &= 255; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLr_l = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.l & 0x80 ? 0x10 : 0; this.cpu.registers.l = (this.cpu.registers.l << 1) + ci; this.cpu.registers.l &= 255; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLr_a = () => { var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = this.cpu.registers.a & 0x80 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a << 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLHL = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); var ci = this.cpu.registers.f & 0x10 ? 1 : 0; var co = i & 0x80 ? 0x10 : 0; i = (i << 1) + ci; i &= 255; this.cpu.registers.f = (i) ? 0 : 0x80; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 4; };

    RLCr_b = () => { var ci = this.cpu.registers.b & 0x80 ? 1 : 0; var co = this.cpu.registers.b & 0x80 ? 0x10 : 0; this.cpu.registers.b = (this.cpu.registers.b << 1) + ci; this.cpu.registers.b &= 255; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLCr_c = () => { var ci = this.cpu.registers.c & 0x80 ? 1 : 0; var co = this.cpu.registers.c & 0x80 ? 0x10 : 0; this.cpu.registers.c = (this.cpu.registers.c << 1) + ci; this.cpu.registers.c &= 255; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLCr_d = () => { var ci = this.cpu.registers.d & 0x80 ? 1 : 0; var co = this.cpu.registers.d & 0x80 ? 0x10 : 0; this.cpu.registers.d = (this.cpu.registers.d << 1) + ci; this.cpu.registers.d &= 255; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLCr_e = () => { var ci = this.cpu.registers.e & 0x80 ? 1 : 0; var co = this.cpu.registers.e & 0x80 ? 0x10 : 0; this.cpu.registers.e = (this.cpu.registers.e << 1) + ci; this.cpu.registers.e &= 255; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLCr_h = () => { var ci = this.cpu.registers.h & 0x80 ? 1 : 0; var co = this.cpu.registers.h & 0x80 ? 0x10 : 0; this.cpu.registers.h = (this.cpu.registers.h << 1) + ci; this.cpu.registers.h &= 255; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLCr_l = () => { var ci = this.cpu.registers.l & 0x80 ? 1 : 0; var co = this.cpu.registers.l & 0x80 ? 0x10 : 0; this.cpu.registers.l = (this.cpu.registers.l << 1) + ci; this.cpu.registers.l &= 255; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLCr_a = () => { var ci = this.cpu.registers.a & 0x80 ? 1 : 0; var co = this.cpu.registers.a & 0x80 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a << 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RLCHL = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); var ci = i & 0x80 ? 1 : 0; var co = i & 0x80 ? 0x10 : 0; i = (i << 1) + ci; i &= 255; this.cpu.registers.f = (i) ? 0 : 0x80; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 4; };

    RRr_b = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.b & 1 ? 0x10 : 0; this.cpu.registers.b = (this.cpu.registers.b >> 1) + ci; this.cpu.registers.b &= 255; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRr_c = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.c & 1 ? 0x10 : 0; this.cpu.registers.c = (this.cpu.registers.c >> 1) + ci; this.cpu.registers.c &= 255; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRr_d = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.d & 1 ? 0x10 : 0; this.cpu.registers.d = (this.cpu.registers.d >> 1) + ci; this.cpu.registers.d &= 255; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRr_e = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.e & 1 ? 0x10 : 0; this.cpu.registers.e = (this.cpu.registers.e >> 1) + ci; this.cpu.registers.e &= 255; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRr_h = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.h & 1 ? 0x10 : 0; this.cpu.registers.h = (this.cpu.registers.h >> 1) + ci; this.cpu.registers.h &= 255; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRr_l = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.l & 1 ? 0x10 : 0; this.cpu.registers.l = (this.cpu.registers.l >> 1) + ci; this.cpu.registers.l &= 255; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRr_a = () => { var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = this.cpu.registers.a & 1 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a >> 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRHL = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); var ci = this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = i & 1 ? 0x10 : 0; i = (i >> 1) + ci; i &= 255; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.f = (i) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 4; };

    RRCr_b = () => { var ci = this.cpu.registers.b & 1 ? 0x80 : 0; var co = this.cpu.registers.b & 1 ? 0x10 : 0; this.cpu.registers.b = (this.cpu.registers.b >> 1) + ci; this.cpu.registers.b &= 255; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRCr_c = () => { var ci = this.cpu.registers.c & 1 ? 0x80 : 0; var co = this.cpu.registers.c & 1 ? 0x10 : 0; this.cpu.registers.c = (this.cpu.registers.c >> 1) + ci; this.cpu.registers.c &= 255; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRCr_d = () => { var ci = this.cpu.registers.d & 1 ? 0x80 : 0; var co = this.cpu.registers.d & 1 ? 0x10 : 0; this.cpu.registers.d = (this.cpu.registers.d >> 1) + ci; this.cpu.registers.d &= 255; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRCr_e = () => { var ci = this.cpu.registers.e & 1 ? 0x80 : 0; var co = this.cpu.registers.e & 1 ? 0x10 : 0; this.cpu.registers.e = (this.cpu.registers.e >> 1) + ci; this.cpu.registers.e &= 255; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRCr_h = () => { var ci = this.cpu.registers.h & 1 ? 0x80 : 0; var co = this.cpu.registers.h & 1 ? 0x10 : 0; this.cpu.registers.h = (this.cpu.registers.h >> 1) + ci; this.cpu.registers.h &= 255; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRCr_l = () => { var ci = this.cpu.registers.l & 1 ? 0x80 : 0; var co = this.cpu.registers.l & 1 ? 0x10 : 0; this.cpu.registers.l = (this.cpu.registers.l >> 1) + ci; this.cpu.registers.l &= 255; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRCr_a = () => { var ci = this.cpu.registers.a & 1 ? 0x80 : 0; var co = this.cpu.registers.a & 1 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a >> 1) + ci; this.cpu.registers.a &= 255; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    RRCHL = () => { var i = this.mmu.readByte((this.cpu.registers.h << 8) + this.cpu.registers.l); var ci = i & 1 ? 0x80 : 0; var co = i & 1 ? 0x10 : 0; i = (i >> 1) + ci; i &= 255; this.mmu.writeByte((this.cpu.registers.h << 8) + this.cpu.registers.l, i); this.cpu.registers.f = (i) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 4; };

    SLAr_b = () => { var co = this.cpu.registers.b & 0x80 ? 0x10 : 0; this.cpu.registers.b = (this.cpu.registers.b << 1) & 255; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLAr_c = () => { var co = this.cpu.registers.c & 0x80 ? 0x10 : 0; this.cpu.registers.c = (this.cpu.registers.c << 1) & 255; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLAr_d = () => { var co = this.cpu.registers.d & 0x80 ? 0x10 : 0; this.cpu.registers.d = (this.cpu.registers.d << 1) & 255; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLAr_e = () => { var co = this.cpu.registers.e & 0x80 ? 0x10 : 0; this.cpu.registers.e = (this.cpu.registers.e << 1) & 255; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLAr_h = () => { var co = this.cpu.registers.h & 0x80 ? 0x10 : 0; this.cpu.registers.h = (this.cpu.registers.h << 1) & 255; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLAr_l = () => { var co = this.cpu.registers.l & 0x80 ? 0x10 : 0; this.cpu.registers.l = (this.cpu.registers.l << 1) & 255; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLAr_a = () => { var co = this.cpu.registers.a & 0x80 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a << 1) & 255; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };

    SLLr_b = () => { var co = this.cpu.registers.b & 0x80 ? 0x10 : 0; this.cpu.registers.b = (this.cpu.registers.b << 1) & 255 + 1; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLLr_c = () => { var co = this.cpu.registers.c & 0x80 ? 0x10 : 0; this.cpu.registers.c = (this.cpu.registers.c << 1) & 255 + 1; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLLr_d = () => { var co = this.cpu.registers.d & 0x80 ? 0x10 : 0; this.cpu.registers.d = (this.cpu.registers.d << 1) & 255 + 1; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLLr_e = () => { var co = this.cpu.registers.e & 0x80 ? 0x10 : 0; this.cpu.registers.e = (this.cpu.registers.e << 1) & 255 + 1; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLLr_h = () => { var co = this.cpu.registers.h & 0x80 ? 0x10 : 0; this.cpu.registers.h = (this.cpu.registers.h << 1) & 255 + 1; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLLr_l = () => { var co = this.cpu.registers.l & 0x80 ? 0x10 : 0; this.cpu.registers.l = (this.cpu.registers.l << 1) & 255 + 1; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SLLr_a = () => { var co = this.cpu.registers.a & 0x80 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a << 1) & 255 + 1; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };

    SRAr_b = () => { var ci = this.cpu.registers.b & 0x80; var co = this.cpu.registers.b & 1 ? 0x10 : 0; this.cpu.registers.b = ((this.cpu.registers.b >> 1) + ci) & 255; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRAr_c = () => { var ci = this.cpu.registers.c & 0x80; var co = this.cpu.registers.c & 1 ? 0x10 : 0; this.cpu.registers.c = ((this.cpu.registers.c >> 1) + ci) & 255; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRAr_d = () => { var ci = this.cpu.registers.d & 0x80; var co = this.cpu.registers.d & 1 ? 0x10 : 0; this.cpu.registers.d = ((this.cpu.registers.d >> 1) + ci) & 255; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRAr_e = () => { var ci = this.cpu.registers.e & 0x80; var co = this.cpu.registers.e & 1 ? 0x10 : 0; this.cpu.registers.e = ((this.cpu.registers.e >> 1) + ci) & 255; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRAr_h = () => { var ci = this.cpu.registers.h & 0x80; var co = this.cpu.registers.h & 1 ? 0x10 : 0; this.cpu.registers.h = ((this.cpu.registers.h >> 1) + ci) & 255; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRAr_l = () => { var ci = this.cpu.registers.l & 0x80; var co = this.cpu.registers.l & 1 ? 0x10 : 0; this.cpu.registers.l = ((this.cpu.registers.l >> 1) + ci) & 255; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRAr_a = () => { var ci = this.cpu.registers.a & 0x80; var co = this.cpu.registers.a & 1 ? 0x10 : 0; this.cpu.registers.a = ((this.cpu.registers.a >> 1) + ci) & 255; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };

    SRLr_b = () => { var co = this.cpu.registers.b & 1 ? 0x10 : 0; this.cpu.registers.b = (this.cpu.registers.b >> 1) & 255; this.cpu.registers.f = (this.cpu.registers.b) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRLr_c = () => { var co = this.cpu.registers.c & 1 ? 0x10 : 0; this.cpu.registers.c = (this.cpu.registers.c >> 1) & 255; this.cpu.registers.f = (this.cpu.registers.c) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRLr_d = () => { var co = this.cpu.registers.d & 1 ? 0x10 : 0; this.cpu.registers.d = (this.cpu.registers.d >> 1) & 255; this.cpu.registers.f = (this.cpu.registers.d) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRLr_e = () => { var co = this.cpu.registers.e & 1 ? 0x10 : 0; this.cpu.registers.e = (this.cpu.registers.e >> 1) & 255; this.cpu.registers.f = (this.cpu.registers.e) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRLr_h = () => { var co = this.cpu.registers.h & 1 ? 0x10 : 0; this.cpu.registers.h = (this.cpu.registers.h >> 1) & 255; this.cpu.registers.f = (this.cpu.registers.h) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRLr_l = () => { var co = this.cpu.registers.l & 1 ? 0x10 : 0; this.cpu.registers.l = (this.cpu.registers.l >> 1) & 255; this.cpu.registers.f = (this.cpu.registers.l) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };
    SRLr_a = () => { var co = this.cpu.registers.a & 1 ? 0x10 : 0; this.cpu.registers.a = (this.cpu.registers.a >> 1) & 255; this.cpu.registers.f = (this.cpu.registers.a) ? 0 : 0x80; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + co; this.cpu.registers.m = 2; };

    CPL = () => { this.cpu.registers.a ^= 255; this.cpu.registers.f = this.cpu.registers.a ? 0 : 0x80; this.cpu.registers.m = 1; };
    NEG = () => { this.cpu.registers.a = 0 - this.cpu.registers.a; this.cpu.registers.f = (this.cpu.registers.a < 0) ? 0x10 : 0; this.cpu.registers.a &= 255; if (!this.cpu.registers.a) this.cpu.registers.f |= 0x80; this.cpu.registers.m = 2; };

    CCF = () => { var ci = this.cpu.registers.f & 0x10 ? 0 : 0x10; this.cpu.registers.f = (this.cpu.registers.f & 0xEF) + ci; this.cpu.registers.m = 1; };
    SCF = () => { this.cpu.registers.f |= 0x10; this.cpu.registers.m = 1; };

    /*--- Stack ---*/
    PUSHBC = () => { this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.b); this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.c); this.cpu.registers.m = 3; };
    PUSHDE = () => { this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.d); this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.e); this.cpu.registers.m = 3; };
    PUSHHL = () => { this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.h); this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.l); this.cpu.registers.m = 3; };
    PUSHAF = () => { this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.a); this.cpu.registers.sp--; this.mmu.writeByte(this.cpu.registers.sp, this.cpu.registers.f); this.cpu.registers.m = 3; };

    POPBC = () => { this.cpu.registers.c = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.b = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.m = 3; };
    POPDE = () => { this.cpu.registers.e = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.d = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.m = 3; };
    POPHL = () => { this.cpu.registers.l = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.h = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.m = 3; };
    POPAF = () => { this.cpu.registers.f = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.a = this.mmu.readByte(this.cpu.registers.sp); this.cpu.registers.sp++; this.cpu.registers.m = 3; };

    /*--- Jump ---*/
    JPnn = () => { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m = 3; };
    JPHL = () => { this.cpu.registers.pc = (this.cpu.registers.h << 8) + this.cpu.registers.l; this.cpu.registers.m = 1; };
    JPNZnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x80) == 0x00) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m++; } else this.cpu.registers.pc += 2; };
    JPZnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x80) == 0x80) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m++; } else this.cpu.registers.pc += 2; };
    JPNCnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x10) == 0x00) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m++; } else this.cpu.registers.pc += 2; };
    JPCnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x10) == 0x10) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m++; } else this.cpu.registers.pc += 2; };

    JRn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; this.cpu.registers.m = 2; this.cpu.registers.pc += i; this.cpu.registers.m++; };
    JRNZn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; this.cpu.registers.m = 2; if ((this.cpu.registers.f & 0x80) == 0x00) { this.cpu.registers.pc += i; this.cpu.registers.m++; } };
    JRZn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; this.cpu.registers.m = 2; if ((this.cpu.registers.f & 0x80) == 0x80) { this.cpu.registers.pc += i; this.cpu.registers.m++; } };
    JRNCn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; this.cpu.registers.m = 2; if ((this.cpu.registers.f & 0x10) == 0x00) { this.cpu.registers.pc += i; this.cpu.registers.m++; } };
    JRCn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; this.cpu.registers.m = 2; if ((this.cpu.registers.f & 0x10) == 0x10) { this.cpu.registers.pc += i; this.cpu.registers.m++; } };

    DJNZn = () => { var i = this.mmu.readByte(this.cpu.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.cpu.registers.pc++; this.cpu.registers.m = 2; this.cpu.registers.b--; if (this.cpu.registers.b) { this.cpu.registers.pc += i; this.cpu.registers.m++; } };

    CALLnn = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc + 2); this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m = 5; };
    CALLNZnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x80) == 0x00) { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc + 2); this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m += 2; } else this.cpu.registers.pc += 2; };
    CALLZnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x80) == 0x80) { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc + 2); this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m += 2; } else this.cpu.registers.pc += 2; };
    CALLNCnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x10) == 0x00) { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc + 2); this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m += 2; } else this.cpu.registers.pc += 2; };
    CALLCnn = () => { this.cpu.registers.m = 3; if ((this.cpu.registers.f & 0x10) == 0x10) { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc + 2); this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.pc); this.cpu.registers.m += 2; } else this.cpu.registers.pc += 2; };

    RET = () => { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.sp); this.cpu.registers.sp += 2; this.cpu.registers.m = 3; };
    RETI = () => { this.cpu.registers.ime = 1; this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.sp); this.cpu.registers.sp += 2; this.cpu.registers.m = 3; };
    RETNZ = () => { this.cpu.registers.m = 1; if ((this.cpu.registers.f & 0x80) == 0x00) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.sp); this.cpu.registers.sp += 2; this.cpu.registers.m += 2; } };
    RETZ = () => { this.cpu.registers.m = 1; if ((this.cpu.registers.f & 0x80) == 0x80) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.sp); this.cpu.registers.sp += 2; this.cpu.registers.m += 2; } };
    RETNC = () => { this.cpu.registers.m = 1; if ((this.cpu.registers.f & 0x10) == 0x00) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.sp); this.cpu.registers.sp += 2; this.cpu.registers.m += 2; } };
    RETC = () => { this.cpu.registers.m = 1; if ((this.cpu.registers.f & 0x10) == 0x10) { this.cpu.registers.pc = this.mmu.readWord(this.cpu.registers.sp); this.cpu.registers.sp += 2; this.cpu.registers.m += 2; } };

    RST00 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x00; this.cpu.registers.m = 3; };
    RST08 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x08; this.cpu.registers.m = 3; };
    RST10 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x10; this.cpu.registers.m = 3; };
    RST18 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x18; this.cpu.registers.m = 3; };
    RST20 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x20; this.cpu.registers.m = 3; };
    RST28 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x28; this.cpu.registers.m = 3; };
    RST30 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x30; this.cpu.registers.m = 3; };
    RST38 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x38; this.cpu.registers.m = 3; };
    RST40 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x40; this.cpu.registers.m = 3; };
    RST48 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x48; this.cpu.registers.m = 3; };
    RST50 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x50; this.cpu.registers.m = 3; };
    RST58 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x58; this.cpu.registers.m = 3; };
    RST60 = () => { this.cpu.registers.sp -= 2; this.mmu.writeWord(this.cpu.registers.sp, this.cpu.registers.pc); this.cpu.registers.pc = 0x60; this.cpu.registers.m = 3; };

    NOP = () => { this.cpu.registers.m = 1; };
    HALT = () => { this.cpu.halt = 1; this.cpu.registers.m = 1; };

    DI = () => { this.cpu.registers.ime = 0; this.cpu.registers.m = 1; };
    EI = () => { this.cpu.registers.ime = 1; this.cpu.registers.m = 1; };

    MAPcb = () => {
        var i = this.mmu.readByte(this.cpu.registers.pc); this.cpu.registers.pc++;
        this.cpu.registers.pc &= 65535;
        if (this.opcodeCbMap[i]) this.opcodeCbMap[i]();
        else console.log(i);
    };

    XX = () => {
        /*Undefined map entry*/
        var opc = this.cpu.registers.pc - 1;
        console.log('this.Z80', 'Unimplemented instruction at $' + opc.toString(16) + ', stopping.');
        this.cpu.stop = 1;
    }

    opcodeMap: any[] = [
        // 00
        this.NOP, this.LDBCnn, this.LDBCmA, this.INCBC,
        this.INCr_b, this.DECr_b, this.LDrn_b, this.RLCA,
        this.LDmmSP, this.ADDHLBC, this.LDABCm, this.DECBC,
        this.INCr_c, this.DECr_c, this.LDrn_c, this.RRCA,
        // 10
        this.DJNZn, this.LDDEnn, this.LDDEmA, this.INCDE,
        this.INCr_d, this.DECr_d, this.LDrn_d, this.RLA,
        this.JRn, this.ADDHLDE, this.LDADEm, this.DECDE,
        this.INCr_e, this.DECr_e, this.LDrn_e, this.RRA,
        // 20
        this.JRNZn, this.LDHLnn, this.LDHLIA, this.INCHL,
        this.INCr_h, this.DECr_h, this.LDrn_h, this.DAA,
        this.JRZn, this.ADDHLHL, this.LDAHLI, this.DECHL,
        this.INCr_l, this.DECr_l, this.LDrn_l, this.CPL,
        // 30
        this.JRNCn, this.LDSPnn, this.LDHLDA, this.INCSP,
        this.INCHLm, this.DECHLm, this.LDHLmn, this.SCF,
        this.JRCn, this.ADDHLSP, this.LDAHLD, this.DECSP,
        this.INCr_a, this.DECr_a, this.LDrn_a, this.CCF,
        // 40
        this.LDrr_bb, this.LDrr_bc, this.LDrr_bd, this.LDrr_be,
        this.LDrr_bh, this.LDrr_bl, this.LDrHLm_b, this.LDrr_ba,
        this.LDrr_cb, this.LDrr_cc, this.LDrr_cd, this.LDrr_ce,
        this.LDrr_ch, this.LDrr_cl, this.LDrHLm_c, this.LDrr_ca,
        // 50
        this.LDrr_db, this.LDrr_dc, this.LDrr_dd, this.LDrr_de,
        this.LDrr_dh, this.LDrr_dl, this.LDrHLm_d, this.LDrr_da,
        this.LDrr_eb, this.LDrr_ec, this.LDrr_ed, this.LDrr_ee,
        this.LDrr_eh, this.LDrr_el, this.LDrHLm_e, this.LDrr_ea,
        // 60
        this.LDrr_hb, this.LDrr_hc, this.LDrr_hd, this.LDrr_he,
        this.LDrr_hh, this.LDrr_hl, this.LDrHLm_h, this.LDrr_ha,
        this.LDrr_lb, this.LDrr_lc, this.LDrr_ld, this.LDrr_le,
        this.LDrr_lh, this.LDrr_ll, this.LDrHLm_l, this.LDrr_la,
        // 70
        this.LDHLmr_b, this.LDHLmr_c, this.LDHLmr_d, this.LDHLmr_e,
        this.LDHLmr_h, this.LDHLmr_l, this.HALT, this.LDHLmr_a,
        this.LDrr_ab, this.LDrr_ac, this.LDrr_ad, this.LDrr_ae,
        this.LDrr_ah, this.LDrr_al, this.LDrHLm_a, this.LDrr_aa,
        // 80
        this.ADDr_b, this.ADDr_c, this.ADDr_d, this.ADDr_e,
        this.ADDr_h, this.ADDr_l, this.ADDHL, this.ADDr_a,
        this.ADCr_b, this.ADCr_c, this.ADCr_d, this.ADCr_e,
        this.ADCr_h, this.ADCr_l, this.ADCHL, this.ADCr_a,
        // 90
        this.SUBr_b, this.SUBr_c, this.SUBr_d, this.SUBr_e,
        this.SUBr_h, this.SUBr_l, this.SUBHL, this.SUBr_a,
        this.SBCr_b, this.SBCr_c, this.SBCr_d, this.SBCr_e,
        this.SBCr_h, this.SBCr_l, this.SBCHL, this.SBCr_a,
        // A0
        this.ANDr_b, this.ANDr_c, this.ANDr_d, this.ANDr_e,
        this.ANDr_h, this.ANDr_l, this.ANDHL, this.ANDr_a,
        this.XORr_b, this.XORr_c, this.XORr_d, this.XORr_e,
        this.XORr_h, this.XORr_l, this.XORHL, this.XORr_a,
        // B0
        this.ORr_b, this.ORr_c, this.ORr_d, this.ORr_e,
        this.ORr_h, this.ORr_l, this.ORHL, this.ORr_a,
        this.CPr_b, this.CPr_c, this.CPr_d, this.CPr_e,
        this.CPr_h, this.CPr_l, this.CPHL, this.CPr_a,
        // C0
        this.RETNZ, this.POPBC, this.JPNZnn, this.JPnn,
        this.CALLNZnn, this.PUSHBC, this.ADDn, this.RST00,
        this.RETZ, this.RET, this.JPZnn, this.MAPcb,
        this.CALLZnn, this.CALLnn, this.ADCn, this.RST08,
        // D0
        this.RETNC, this.POPDE, this.JPNCnn, this.XX,
        this.CALLNCnn, this.PUSHDE, this.SUBn, this.RST10,
        this.RETC, this.RETI, this.JPCnn, this.XX,
        this.CALLCnn, this.XX, this.SBCn, this.RST18,
        // E0
        this.LDIOnA, this.POPHL, this.LDIOCA, this.XX,
        this.XX, this.PUSHHL, this.ANDn, this.RST20,
        this.ADDSPn, this.JPHL, this.LDmmA, this.XX,
        this.XX, this.XX, this.XORn, this.RST28,
        // F0
        this.LDAIOn, this.POPAF, this.LDAIOC, this.DI,
        this.XX, this.PUSHAF, this.ORn, this.RST30,
        this.LDHLSPn, this.XX, this.LDAmm, this.EI,
        this.XX, this.XX, this.CPn, this.RST38
    ];

    opcodeCbMap: any[] = [
        // CB00
        this.RLCr_b, this.RLCr_c, this.RLCr_d, this.RLCr_e,
        this.RLCr_h, this.RLCr_l, this.RLCHL, this.RLCr_a,
        this.RRCr_b, this.RRCr_c, this.RRCr_d, this.RRCr_e,
        this.RRCr_h, this.RRCr_l, this.RRCHL, this.RRCr_a,
        // CB10
        this.RLr_b, this.RLr_c, this.RLr_d, this.RLr_e,
        this.RLr_h, this.RLr_l, this.RLHL, this.RLr_a,
        this.RRr_b, this.RRr_c, this.RRr_d, this.RRr_e,
        this.RRr_h, this.RRr_l, this.RRHL, this.RRr_a,
        // CB20
        this.SLAr_b, this.SLAr_c, this.SLAr_d, this.SLAr_e,
        this.SLAr_h, this.SLAr_l, this.XX, this.SLAr_a,
        this.SRAr_b, this.SRAr_c, this.SRAr_d, this.SRAr_e,
        this.SRAr_h, this.SRAr_l, this.XX, this.SRAr_a,
        // CB30
        this.SWAPr_b, this.SWAPr_c, this.SWAPr_d, this.SWAPr_e,
        this.SWAPr_h, this.SWAPr_l, this.XX, this.SWAPr_a,
        this.SRLr_b, this.SRLr_c, this.SRLr_d, this.SRLr_e,
        this.SRLr_h, this.SRLr_l, this.XX, this.SRLr_a,
        // CB40
        this.BIT0b, this.BIT0c, this.BIT0d, this.BIT0e,
        this.BIT0h, this.BIT0l, this.BIT0m, this.BIT0a,
        this.BIT1b, this.BIT1c, this.BIT1d, this.BIT1e,
        this.BIT1h, this.BIT1l, this.BIT1m, this.BIT1a,
        // CB50
        this.BIT2b, this.BIT2c, this.BIT2d, this.BIT2e,
        this.BIT2h, this.BIT2l, this.BIT2m, this.BIT2a,
        this.BIT3b, this.BIT3c, this.BIT3d, this.BIT3e,
        this.BIT3h, this.BIT3l, this.BIT3m, this.BIT3a,
        // CB60
        this.BIT4b, this.BIT4c, this.BIT4d, this.BIT4e,
        this.BIT4h, this.BIT4l, this.BIT4m, this.BIT4a,
        this.BIT5b, this.BIT5c, this.BIT5d, this.BIT5e,
        this.BIT5h, this.BIT5l, this.BIT5m, this.BIT5a,
        // CB70
        this.BIT6b, this.BIT6c, this.BIT6d, this.BIT6e,
        this.BIT6h, this.BIT6l, this.BIT6m, this.BIT6a,
        this.BIT7b, this.BIT7c, this.BIT7d, this.BIT7e,
        this.BIT7h, this.BIT7l, this.BIT7m, this.BIT7a,
        // CB80
        this.RES0b, this.RES0c, this.RES0d, this.RES0e,
        this.RES0h, this.RES0l, this.RES0m, this.RES0a,
        this.RES1b, this.RES1c, this.RES1d, this.RES1e,
        this.RES1h, this.RES1l, this.RES1m, this.RES1a,
        // CB90
        this.RES2b, this.RES2c, this.RES2d, this.RES2e,
        this.RES2h, this.RES2l, this.RES2m, this.RES2a,
        this.RES3b, this.RES3c, this.RES3d, this.RES3e,
        this.RES3h, this.RES3l, this.RES3m, this.RES3a,
        // CBA0
        this.RES4b, this.RES4c, this.RES4d, this.RES4e,
        this.RES4h, this.RES4l, this.RES4m, this.RES4a,
        this.RES5b, this.RES5c, this.RES5d, this.RES5e,
        this.RES5h, this.RES5l, this.RES5m, this.RES5a,
        // CBB0
        this.RES6b, this.RES6c, this.RES6d, this.RES6e,
        this.RES6h, this.RES6l, this.RES6m, this.RES6a,
        this.RES7b, this.RES7c, this.RES7d, this.RES7e,
        this.RES7h, this.RES7l, this.RES7m, this.RES7a,
        // CBC0
        this.SET0b, this.SET0c, this.SET0d, this.SET0e,
        this.SET0h, this.SET0l, this.SET0m, this.SET0a,
        this.SET1b, this.SET1c, this.SET1d, this.SET1e,
        this.SET1h, this.SET1l, this.SET1m, this.SET1a,
        // CBD0
        this.SET2b, this.SET2c, this.SET2d, this.SET2e,
        this.SET2h, this.SET2l, this.SET2m, this.SET2a,
        this.SET3b, this.SET3c, this.SET3d, this.SET3e,
        this.SET3h, this.SET3l, this.SET3m, this.SET3a,
        // CBE0
        this.SET4b, this.SET4c, this.SET4d, this.SET4e,
        this.SET4h, this.SET4l, this.SET4m, this.SET4a,
        this.SET5b, this.SET5c, this.SET5d, this.SET5e,
        this.SET5h, this.SET5l, this.SET5m, this.SET5a,
        // CBF0
        this.SET6b, this.SET6c, this.SET6d, this.SET6e,
        this.SET6h, this.SET6l, this.SET6m, this.SET6a,
        this.SET7b, this.SET7c, this.SET7d, this.SET7e,
        this.SET7h, this.SET7l, this.SET7m, this.SET7a,
    ];
}