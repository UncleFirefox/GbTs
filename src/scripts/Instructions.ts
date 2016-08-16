class Opcodes {

    Z80: CPU;
    MMU: any;

    /*--- Load/store ---*/
    LDrr_bb = () => { this.Z80.registers.b = this.Z80.registers.b; this.Z80.registers.m = 1; };
    LDrr_bc = () => { this.Z80.registers.b = this.Z80.registers.c; this.Z80.registers.m = 1; };
    LDrr_bd = () => { this.Z80.registers.b = this.Z80.registers.d; this.Z80.registers.m = 1; };
    LDrr_be = () => { this.Z80.registers.b = this.Z80.registers.e; this.Z80.registers.m = 1; };
    LDrr_bh = () => { this.Z80.registers.b = this.Z80.registers.h; this.Z80.registers.m = 1; };
    LDrr_bl = () => { this.Z80.registers.b = this.Z80.registers.l; this.Z80.registers.m = 1; };
    LDrr_ba = () => { this.Z80.registers.b = this.Z80.registers.a; this.Z80.registers.m = 1; };
    LDrr_cb = () => { this.Z80.registers.c = this.Z80.registers.b; this.Z80.registers.m = 1; };
    LDrr_cc = () => { this.Z80.registers.c = this.Z80.registers.c; this.Z80.registers.m = 1; };
    LDrr_cd = () => { this.Z80.registers.c = this.Z80.registers.d; this.Z80.registers.m = 1; };
    LDrr_ce = () => { this.Z80.registers.c = this.Z80.registers.e; this.Z80.registers.m = 1; };
    LDrr_ch = () => { this.Z80.registers.c = this.Z80.registers.h; this.Z80.registers.m = 1; };
    LDrr_cl = () => { this.Z80.registers.c = this.Z80.registers.l; this.Z80.registers.m = 1; };
    LDrr_ca = () => { this.Z80.registers.c = this.Z80.registers.a; this.Z80.registers.m = 1; };
    LDrr_db = () => { this.Z80.registers.d = this.Z80.registers.b; this.Z80.registers.m = 1; };
    LDrr_dc = () => { this.Z80.registers.d = this.Z80.registers.c; this.Z80.registers.m = 1; };
    LDrr_dd = () => { this.Z80.registers.d = this.Z80.registers.d; this.Z80.registers.m = 1; };
    LDrr_de = () => { this.Z80.registers.d = this.Z80.registers.e; this.Z80.registers.m = 1; };
    LDrr_dh = () => { this.Z80.registers.d = this.Z80.registers.h; this.Z80.registers.m = 1; };
    LDrr_dl = () => { this.Z80.registers.d = this.Z80.registers.l; this.Z80.registers.m = 1; };
    LDrr_da = () => { this.Z80.registers.d = this.Z80.registers.a; this.Z80.registers.m = 1; };
    LDrr_eb = () => { this.Z80.registers.e = this.Z80.registers.b; this.Z80.registers.m = 1; };
    LDrr_ec = () => { this.Z80.registers.e = this.Z80.registers.c; this.Z80.registers.m = 1; };
    LDrr_ed = () => { this.Z80.registers.e = this.Z80.registers.d; this.Z80.registers.m = 1; };
    LDrr_ee = () => { this.Z80.registers.e = this.Z80.registers.e; this.Z80.registers.m = 1; };
    LDrr_eh = () => { this.Z80.registers.e = this.Z80.registers.h; this.Z80.registers.m = 1; };
    LDrr_el = () => { this.Z80.registers.e = this.Z80.registers.l; this.Z80.registers.m = 1; };
    LDrr_ea = () => { this.Z80.registers.e = this.Z80.registers.a; this.Z80.registers.m = 1; };
    LDrr_hb = () => { this.Z80.registers.h = this.Z80.registers.b; this.Z80.registers.m = 1; };
    LDrr_hc = () => { this.Z80.registers.h = this.Z80.registers.c; this.Z80.registers.m = 1; };
    LDrr_hd = () => { this.Z80.registers.h = this.Z80.registers.d; this.Z80.registers.m = 1; };
    LDrr_he = () => { this.Z80.registers.h = this.Z80.registers.e; this.Z80.registers.m = 1; };
    LDrr_hh = () => { this.Z80.registers.h = this.Z80.registers.h; this.Z80.registers.m = 1; };
    LDrr_hl = () => { this.Z80.registers.h = this.Z80.registers.l; this.Z80.registers.m = 1; };
    LDrr_ha = () => { this.Z80.registers.h = this.Z80.registers.a; this.Z80.registers.m = 1; };
    LDrr_lb = () => { this.Z80.registers.l = this.Z80.registers.b; this.Z80.registers.m = 1; };
    LDrr_lc = () => { this.Z80.registers.l = this.Z80.registers.c; this.Z80.registers.m = 1; };
    LDrr_ld = () => { this.Z80.registers.l = this.Z80.registers.d; this.Z80.registers.m = 1; };
    LDrr_le = () => { this.Z80.registers.l = this.Z80.registers.e; this.Z80.registers.m = 1; };
    LDrr_lh = () => { this.Z80.registers.l = this.Z80.registers.h; this.Z80.registers.m = 1; };
    LDrr_ll = () => { this.Z80.registers.l = this.Z80.registers.l; this.Z80.registers.m = 1; };
    LDrr_la = () => { this.Z80.registers.l = this.Z80.registers.a; this.Z80.registers.m = 1; };
    LDrr_ab = () => { this.Z80.registers.a = this.Z80.registers.b; this.Z80.registers.m = 1; };
    LDrr_ac = () => { this.Z80.registers.a = this.Z80.registers.c; this.Z80.registers.m = 1; };
    LDrr_ad = () => { this.Z80.registers.a = this.Z80.registers.d; this.Z80.registers.m = 1; };
    LDrr_ae = () => { this.Z80.registers.a = this.Z80.registers.e; this.Z80.registers.m = 1; };
    LDrr_ah = () => { this.Z80.registers.a = this.Z80.registers.h; this.Z80.registers.m = 1; };
    LDrr_al = () => { this.Z80.registers.a = this.Z80.registers.l; this.Z80.registers.m = 1; };
    LDrr_aa = () => { this.Z80.registers.a = this.Z80.registers.a; this.Z80.registers.m = 1; };

    LDrHLm_b = () => { this.Z80.registers.b = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 2; };
    LDrHLm_c = () => { this.Z80.registers.c = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 2; };
    LDrHLm_d = () => { this.Z80.registers.d = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 2; };
    LDrHLm_e = () => { this.Z80.registers.e = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 2; };
    LDrHLm_h = () => { this.Z80.registers.h = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 2; };
    LDrHLm_l = () => { this.Z80.registers.l = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 2; };
    LDrHLm_a = () => { this.Z80.registers.a = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 2; };

    LDHLmr_b = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.b); this.Z80.registers.m = 2; };
    LDHLmr_c = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.c); this.Z80.registers.m = 2; };
    LDHLmr_d = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.d); this.Z80.registers.m = 2; };
    LDHLmr_e = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.e); this.Z80.registers.m = 2; };
    LDHLmr_h = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.h); this.Z80.registers.m = 2; };
    LDHLmr_l = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.l); this.Z80.registers.m = 2; };
    LDHLmr_a = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.a); this.Z80.registers.m = 2; };

    LDrn_b = () => { this.Z80.registers.b = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.m = 2; };
    LDrn_c = () => { this.Z80.registers.c = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.m = 2; };
    LDrn_d = () => { this.Z80.registers.d = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.m = 2; };
    LDrn_e = () => { this.Z80.registers.e = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.m = 2; };
    LDrn_h = () => { this.Z80.registers.h = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.m = 2; };
    LDrn_l = () => { this.Z80.registers.l = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.m = 2; };
    LDrn_a = () => { this.Z80.registers.a = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.m = 2; };

    LDHLmn = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.MMU.rb(this.Z80.registers.pc)); this.Z80.registers.pc++; this.Z80.registers.m = 3; };

    LDBCmA = () => { this.MMU.wb((this.Z80.registers.b << 8) + this.Z80.registers.c, this.Z80.registers.a); this.Z80.registers.m = 2; };
    LDDEmA = () => { this.MMU.wb((this.Z80.registers.d << 8) + this.Z80.registers.e, this.Z80.registers.a); this.Z80.registers.m = 2; };

    LDmmA = () => { this.MMU.wb(this.MMU.rw(this.Z80.registers.pc), this.Z80.registers.a); this.Z80.registers.pc += 2; this.Z80.registers.m = 4; };
    LDmmSP = () => { }

    LDABCm = () => { this.Z80.registers.a = this.MMU.rb((this.Z80.registers.b << 8) + this.Z80.registers.c); this.Z80.registers.m = 2; };
    LDADEm = () => { this.Z80.registers.a = this.MMU.rb((this.Z80.registers.d << 8) + this.Z80.registers.e); this.Z80.registers.m = 2; };

    LDAmm = () => { this.Z80.registers.a = this.MMU.rb(this.MMU.rw(this.Z80.registers.pc)); this.Z80.registers.pc += 2; this.Z80.registers.m = 4; };

    LDBCnn = () => { this.Z80.registers.c = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.b = this.MMU.rb(this.Z80.registers.pc + 1); this.Z80.registers.pc += 2; this.Z80.registers.m = 3; };
    LDDEnn = () => { this.Z80.registers.e = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.d = this.MMU.rb(this.Z80.registers.pc + 1); this.Z80.registers.pc += 2; this.Z80.registers.m = 3; };
    LDHLnn = () => { this.Z80.registers.l = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.h = this.MMU.rb(this.Z80.registers.pc + 1); this.Z80.registers.pc += 2; this.Z80.registers.m = 3; };
    LDSPnn = () => { this.Z80.registers.sp = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.pc += 2; this.Z80.registers.m = 3; };

    LDHLmm = () => { var i = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.pc += 2; this.Z80.registers.l = this.MMU.rb(i); this.Z80.registers.h = this.MMU.rb(i + 1); this.Z80.registers.m = 5; };
    LDmmHL = () => { var i = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.pc += 2; this.MMU.ww(i, (this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.m = 5; };

    LDHLIA = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.a); this.Z80.registers.l = (this.Z80.registers.l + 1) & 255; if (!this.Z80.registers.l) this.Z80.registers.h = (this.Z80.registers.h + 1) & 255; this.Z80.registers.m = 2; };
    LDAHLI = () => { this.Z80.registers.a = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.l = (this.Z80.registers.l + 1) & 255; if (!this.Z80.registers.l) this.Z80.registers.h = (this.Z80.registers.h + 1) & 255; this.Z80.registers.m = 2; };

    LDHLDA = () => { this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, this.Z80.registers.a); this.Z80.registers.l = (this.Z80.registers.l - 1) & 255; if (this.Z80.registers.l == 255) this.Z80.registers.h = (this.Z80.registers.h - 1) & 255; this.Z80.registers.m = 2; };
    LDAHLD = () => { this.Z80.registers.a = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.l = (this.Z80.registers.l - 1) & 255; if (this.Z80.registers.l == 255) this.Z80.registers.h = (this.Z80.registers.h - 1) & 255; this.Z80.registers.m = 2; };

    LDAIOn = () => { this.Z80.registers.a = this.MMU.rb(0xFF00 + this.MMU.rb(this.Z80.registers.pc)); this.Z80.registers.pc++; this.Z80.registers.m = 3; };
    LDIOnA = () => { this.MMU.wb(0xFF00 + this.MMU.rb(this.Z80.registers.pc), this.Z80.registers.a); this.Z80.registers.pc++; this.Z80.registers.m = 3; };
    LDAIOC = () => { this.Z80.registers.a = this.MMU.rb(0xFF00 + this.Z80.registers.c); this.Z80.registers.m = 2; };
    LDIOCA = () => { this.MMU.wb(0xFF00 + this.Z80.registers.c, this.Z80.registers.a); this.Z80.registers.m = 2; };

    LDHLSPn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; i += this.Z80.registers.sp; this.Z80.registers.h = (i >> 8) & 255; this.Z80.registers.l = i & 255; this.Z80.registers.m = 3; };

    SWAPr_b = () => { var tr = this.Z80.registers.b; this.Z80.registers.b = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.Z80.registers.f = this.Z80.registers.b ? 0 : 0x80; this.Z80.registers.m = 1; };
    SWAPr_c = () => { var tr = this.Z80.registers.c; this.Z80.registers.c = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.Z80.registers.f = this.Z80.registers.c ? 0 : 0x80; this.Z80.registers.m = 1; };
    SWAPr_d = () => { var tr = this.Z80.registers.d; this.Z80.registers.d = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.Z80.registers.f = this.Z80.registers.d ? 0 : 0x80; this.Z80.registers.m = 1; };
    SWAPr_e = () => { var tr = this.Z80.registers.e; this.Z80.registers.e = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.Z80.registers.f = this.Z80.registers.e ? 0 : 0x80; this.Z80.registers.m = 1; };
    SWAPr_h = () => { var tr = this.Z80.registers.h; this.Z80.registers.h = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.Z80.registers.f = this.Z80.registers.h ? 0 : 0x80; this.Z80.registers.m = 1; };
    SWAPr_l = () => { var tr = this.Z80.registers.l; this.Z80.registers.l = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.Z80.registers.f = this.Z80.registers.l ? 0 : 0x80; this.Z80.registers.m = 1; };
    SWAPr_a = () => { var tr = this.Z80.registers.a; this.Z80.registers.a = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };

    /*--- Data processing ---*/
    ADDr_b = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.b; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.b ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADDr_c = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.c; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.c ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADDr_d = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.d; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.d ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADDr_e = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.e; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.e ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADDr_h = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.h; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.h ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADDr_l = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.l; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.l ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADDr_a = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.a; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.a ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADDHL = () => { var a = this.Z80.registers.a; var m = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.a += m; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ a ^ m) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };
    ADDn = () => { var a = this.Z80.registers.a; var m = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.a += m; this.Z80.registers.pc++; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ a ^ m) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };
    ADDHLBC = () => { var hl = (this.Z80.registers.h << 8) + this.Z80.registers.l; hl += (this.Z80.registers.b << 8) + this.Z80.registers.c; if (hl > 65535) this.Z80.registers.f |= 0x10; else this.Z80.registers.f &= 0xEF; this.Z80.registers.h = (hl >> 8) & 255; this.Z80.registers.l = hl & 255; this.Z80.registers.m = 3; };
    ADDHLDE = () => { var hl = (this.Z80.registers.h << 8) + this.Z80.registers.l; hl += (this.Z80.registers.d << 8) + this.Z80.registers.e; if (hl > 65535) this.Z80.registers.f |= 0x10; else this.Z80.registers.f &= 0xEF; this.Z80.registers.h = (hl >> 8) & 255; this.Z80.registers.l = hl & 255; this.Z80.registers.m = 3; };
    ADDHLHL = () => { var hl = (this.Z80.registers.h << 8) + this.Z80.registers.l; hl += (this.Z80.registers.h << 8) + this.Z80.registers.l; if (hl > 65535) this.Z80.registers.f |= 0x10; else this.Z80.registers.f &= 0xEF; this.Z80.registers.h = (hl >> 8) & 255; this.Z80.registers.l = hl & 255; this.Z80.registers.m = 3; };
    ADDHLSP = () => { var hl = (this.Z80.registers.h << 8) + this.Z80.registers.l; hl += this.Z80.registers.sp; if (hl > 65535) this.Z80.registers.f |= 0x10; else this.Z80.registers.f &= 0xEF; this.Z80.registers.h = (hl >> 8) & 255; this.Z80.registers.l = hl & 255; this.Z80.registers.m = 3; };
    ADDSPn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; this.Z80.registers.sp += i; this.Z80.registers.m = 4; };

    ADCr_b = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.b; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.b ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADCr_c = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.c; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.c ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADCr_d = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.d; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.d ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADCr_e = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.e; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.e ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADCr_h = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.h; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.h ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADCr_l = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.l; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.l ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADCr_a = () => { var a = this.Z80.registers.a; this.Z80.registers.a += this.Z80.registers.a; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.a ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    ADCHL = () => { var a = this.Z80.registers.a; var m = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.a += m; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ m ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };
    ADCn = () => { var a = this.Z80.registers.a; var m = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.a += m; this.Z80.registers.pc++; this.Z80.registers.a += (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a > 255) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ m ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };

    SUBr_b = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.b; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.b ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SUBr_c = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.c; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.c ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SUBr_d = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.d; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.d ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SUBr_e = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.e; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.e ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SUBr_h = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.h; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.h ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SUBr_l = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.l; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.l ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SUBr_a = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.a; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.a ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SUBHL = () => { var a = this.Z80.registers.a; var m = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.a -= m; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ m ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };
    SUBn = () => { var a = this.Z80.registers.a; var m = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.a -= m; this.Z80.registers.pc++; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ m ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };

    SBCr_b = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.b; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.b ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SBCr_c = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.c; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.c ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SBCr_d = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.d; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.d ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SBCr_e = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.e; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.e ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SBCr_h = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.h; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.h ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SBCr_l = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.l; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.l ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SBCr_a = () => { var a = this.Z80.registers.a; this.Z80.registers.a -= this.Z80.registers.a; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.a ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    SBCHL = () => { var a = this.Z80.registers.a; var m = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.a -= m; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ m ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };
    SBCn = () => { var a = this.Z80.registers.a; var m = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.a -= m; this.Z80.registers.pc++; this.Z80.registers.a -= (this.Z80.registers.f & 0x10) ? 1 : 0; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x50 : 0x40; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ m ^ a) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };

    CPr_b = () => { var i = this.Z80.registers.a; i -= this.Z80.registers.b; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.b ^ i) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    CPr_c = () => { var i = this.Z80.registers.a; i -= this.Z80.registers.c; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.c ^ i) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    CPr_d = () => { var i = this.Z80.registers.a; i -= this.Z80.registers.d; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.d ^ i) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    CPr_e = () => { var i = this.Z80.registers.a; i -= this.Z80.registers.e; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.e ^ i) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    CPr_h = () => { var i = this.Z80.registers.a; i -= this.Z80.registers.h; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.h ^ i) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    CPr_l = () => { var i = this.Z80.registers.a; i -= this.Z80.registers.l; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.l ^ i) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    CPr_a = () => { var i = this.Z80.registers.a; i -= this.Z80.registers.a; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ this.Z80.registers.a ^ i) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 1; };
    CPHL = () => { var i = this.Z80.registers.a; var m = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i -= m; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ i ^ m) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };
    CPn = () => { var i = this.Z80.registers.a; var m = this.MMU.rb(this.Z80.registers.pc); i -= m; this.Z80.registers.pc++; this.Z80.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i) this.Z80.registers.f |= 0x80; if ((this.Z80.registers.a ^ i ^ m) & 0x10) this.Z80.registers.f |= 0x20; this.Z80.registers.m = 2; };

    DAA = () => { var a = this.Z80.registers.a; if ((this.Z80.registers.f & 0x20) || ((this.Z80.registers.a & 15) > 9)) this.Z80.registers.a += 6; this.Z80.registers.f &= 0xEF; if ((this.Z80.registers.f & 0x20) || (a > 0x99)) { this.Z80.registers.a += 0x60; this.Z80.registers.f |= 0x10; } this.Z80.registers.m = 1; };

    ANDr_b = () => { this.Z80.registers.a &= this.Z80.registers.b; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ANDr_c = () => { this.Z80.registers.a &= this.Z80.registers.c; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ANDr_d = () => { this.Z80.registers.a &= this.Z80.registers.d; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ANDr_e = () => { this.Z80.registers.a &= this.Z80.registers.e; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ANDr_h = () => { this.Z80.registers.a &= this.Z80.registers.h; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ANDr_l = () => { this.Z80.registers.a &= this.Z80.registers.l; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ANDr_a = () => { this.Z80.registers.a &= this.Z80.registers.a; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ANDHL = () => { this.Z80.registers.a &= this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 2; };
    ANDn = () => { this.Z80.registers.a &= this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 2; };

    ORr_b = () => { this.Z80.registers.a |= this.Z80.registers.b; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ORr_c = () => { this.Z80.registers.a |= this.Z80.registers.c; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ORr_d = () => { this.Z80.registers.a |= this.Z80.registers.d; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ORr_e = () => { this.Z80.registers.a |= this.Z80.registers.e; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ORr_h = () => { this.Z80.registers.a |= this.Z80.registers.h; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ORr_l = () => { this.Z80.registers.a |= this.Z80.registers.l; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ORr_a = () => { this.Z80.registers.a |= this.Z80.registers.a; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    ORHL = () => { this.Z80.registers.a |= this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 2; };
    ORn = () => { this.Z80.registers.a |= this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 2; };

    XORr_b = () => { this.Z80.registers.a ^= this.Z80.registers.b; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    XORr_c = () => { this.Z80.registers.a ^= this.Z80.registers.c; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    XORr_d = () => { this.Z80.registers.a ^= this.Z80.registers.d; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    XORr_e = () => { this.Z80.registers.a ^= this.Z80.registers.e; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    XORr_h = () => { this.Z80.registers.a ^= this.Z80.registers.h; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    XORr_l = () => { this.Z80.registers.a ^= this.Z80.registers.l; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    XORr_a = () => { this.Z80.registers.a ^= this.Z80.registers.a; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    XORHL = () => { this.Z80.registers.a ^= this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 2; };
    XORn = () => { this.Z80.registers.a ^= this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 2; };

    INCr_b = () => { this.Z80.registers.b++; this.Z80.registers.b &= 255; this.Z80.registers.f = this.Z80.registers.b ? 0 : 0x80; this.Z80.registers.m = 1; };
    INCr_c = () => { this.Z80.registers.c++; this.Z80.registers.c &= 255; this.Z80.registers.f = this.Z80.registers.c ? 0 : 0x80; this.Z80.registers.m = 1; };
    INCr_d = () => { this.Z80.registers.d++; this.Z80.registers.d &= 255; this.Z80.registers.f = this.Z80.registers.d ? 0 : 0x80; this.Z80.registers.m = 1; };
    INCr_e = () => { this.Z80.registers.e++; this.Z80.registers.e &= 255; this.Z80.registers.f = this.Z80.registers.e ? 0 : 0x80; this.Z80.registers.m = 1; };
    INCr_h = () => { this.Z80.registers.h++; this.Z80.registers.h &= 255; this.Z80.registers.f = this.Z80.registers.h ? 0 : 0x80; this.Z80.registers.m = 1; };
    INCr_l = () => { this.Z80.registers.l++; this.Z80.registers.l &= 255; this.Z80.registers.f = this.Z80.registers.l ? 0 : 0x80; this.Z80.registers.m = 1; };
    INCr_a = () => { this.Z80.registers.a++; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    INCHLm = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) + 1; i &= 255; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.f = i ? 0 : 0x80; this.Z80.registers.m = 3; };

    DECr_b = () => { this.Z80.registers.b--; this.Z80.registers.b &= 255; this.Z80.registers.f = this.Z80.registers.b ? 0 : 0x80; this.Z80.registers.m = 1; };
    DECr_c = () => { this.Z80.registers.c--; this.Z80.registers.c &= 255; this.Z80.registers.f = this.Z80.registers.c ? 0 : 0x80; this.Z80.registers.m = 1; };
    DECr_d = () => { this.Z80.registers.d--; this.Z80.registers.d &= 255; this.Z80.registers.f = this.Z80.registers.d ? 0 : 0x80; this.Z80.registers.m = 1; };
    DECr_e = () => { this.Z80.registers.e--; this.Z80.registers.e &= 255; this.Z80.registers.f = this.Z80.registers.e ? 0 : 0x80; this.Z80.registers.m = 1; };
    DECr_h = () => { this.Z80.registers.h--; this.Z80.registers.h &= 255; this.Z80.registers.f = this.Z80.registers.h ? 0 : 0x80; this.Z80.registers.m = 1; };
    DECr_l = () => { this.Z80.registers.l--; this.Z80.registers.l &= 255; this.Z80.registers.f = this.Z80.registers.l ? 0 : 0x80; this.Z80.registers.m = 1; };
    DECr_a = () => { this.Z80.registers.a--; this.Z80.registers.a &= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    DECHLm = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) - 1; i &= 255; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.f = i ? 0 : 0x80; this.Z80.registers.m = 3; };

    INCBC = () => { this.Z80.registers.c = (this.Z80.registers.c + 1) & 255; if (!this.Z80.registers.c) this.Z80.registers.b = (this.Z80.registers.b + 1) & 255; this.Z80.registers.m = 1; };
    INCDE = () => { this.Z80.registers.e = (this.Z80.registers.e + 1) & 255; if (!this.Z80.registers.e) this.Z80.registers.d = (this.Z80.registers.d + 1) & 255; this.Z80.registers.m = 1; };
    INCHL = () => { this.Z80.registers.l = (this.Z80.registers.l + 1) & 255; if (!this.Z80.registers.l) this.Z80.registers.h = (this.Z80.registers.h + 1) & 255; this.Z80.registers.m = 1; };
    INCSP = () => { this.Z80.registers.sp = (this.Z80.registers.sp + 1) & 65535; this.Z80.registers.m = 1; };

    DECBC = () => { this.Z80.registers.c = (this.Z80.registers.c - 1) & 255; if (this.Z80.registers.c == 255) this.Z80.registers.b = (this.Z80.registers.b - 1) & 255; this.Z80.registers.m = 1; };
    DECDE = () => { this.Z80.registers.e = (this.Z80.registers.e - 1) & 255; if (this.Z80.registers.e == 255) this.Z80.registers.d = (this.Z80.registers.d - 1) & 255; this.Z80.registers.m = 1; };
    DECHL = () => { this.Z80.registers.l = (this.Z80.registers.l - 1) & 255; if (this.Z80.registers.l == 255) this.Z80.registers.h = (this.Z80.registers.h - 1) & 255; this.Z80.registers.m = 1; };
    DECSP = () => { this.Z80.registers.sp = (this.Z80.registers.sp - 1) & 65535; this.Z80.registers.m = 1; };

    /*--- Bit manipulation ---*/
    BIT0b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x01) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT0c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x01) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT0d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x01) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT0e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x01) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT0h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x01) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT0l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x01) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT0a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x01) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT0m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x01) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES0b = () => { this.Z80.registers.b &= 0xFE; this.Z80.registers.m = 2; };
    RES0c = () => { this.Z80.registers.c &= 0xFE; this.Z80.registers.m = 2; };
    RES0d = () => { this.Z80.registers.d &= 0xFE; this.Z80.registers.m = 2; };
    RES0e = () => { this.Z80.registers.e &= 0xFE; this.Z80.registers.m = 2; };
    RES0h = () => { this.Z80.registers.h &= 0xFE; this.Z80.registers.m = 2; };
    RES0l = () => { this.Z80.registers.l &= 0xFE; this.Z80.registers.m = 2; };
    RES0a = () => { this.Z80.registers.a &= 0xFE; this.Z80.registers.m = 2; };
    RES0m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0xFE; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET0b = () => { this.Z80.registers.b |= 0x01; this.Z80.registers.m = 2; };
    SET0c = () => { this.Z80.registers.b |= 0x01; this.Z80.registers.m = 2; };
    SET0d = () => { this.Z80.registers.b |= 0x01; this.Z80.registers.m = 2; };
    SET0e = () => { this.Z80.registers.b |= 0x01; this.Z80.registers.m = 2; };
    SET0h = () => { this.Z80.registers.b |= 0x01; this.Z80.registers.m = 2; };
    SET0l = () => { this.Z80.registers.b |= 0x01; this.Z80.registers.m = 2; };
    SET0a = () => { this.Z80.registers.b |= 0x01; this.Z80.registers.m = 2; };
    SET0m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x01; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    BIT1b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x02) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT1c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x02) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT1d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x02) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT1e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x02) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT1h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x02) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT1l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x02) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT1a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x02) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT1m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x02) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES1b = () => { this.Z80.registers.b &= 0xFD; this.Z80.registers.m = 2; };
    RES1c = () => { this.Z80.registers.c &= 0xFD; this.Z80.registers.m = 2; };
    RES1d = () => { this.Z80.registers.d &= 0xFD; this.Z80.registers.m = 2; };
    RES1e = () => { this.Z80.registers.e &= 0xFD; this.Z80.registers.m = 2; };
    RES1h = () => { this.Z80.registers.h &= 0xFD; this.Z80.registers.m = 2; };
    RES1l = () => { this.Z80.registers.l &= 0xFD; this.Z80.registers.m = 2; };
    RES1a = () => { this.Z80.registers.a &= 0xFD; this.Z80.registers.m = 2; };
    RES1m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0xFD; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET1b = () => { this.Z80.registers.b |= 0x02; this.Z80.registers.m = 2; };
    SET1c = () => { this.Z80.registers.b |= 0x02; this.Z80.registers.m = 2; };
    SET1d = () => { this.Z80.registers.b |= 0x02; this.Z80.registers.m = 2; };
    SET1e = () => { this.Z80.registers.b |= 0x02; this.Z80.registers.m = 2; };
    SET1h = () => { this.Z80.registers.b |= 0x02; this.Z80.registers.m = 2; };
    SET1l = () => { this.Z80.registers.b |= 0x02; this.Z80.registers.m = 2; };
    SET1a = () => { this.Z80.registers.b |= 0x02; this.Z80.registers.m = 2; };
    SET1m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x02; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    BIT2b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x04) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT2c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x04) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT2d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x04) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT2e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x04) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT2h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x04) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT2l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x04) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT2a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x04) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT2m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x04) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES2b = () => { this.Z80.registers.b &= 0xFB; this.Z80.registers.m = 2; };
    RES2c = () => { this.Z80.registers.c &= 0xFB; this.Z80.registers.m = 2; };
    RES2d = () => { this.Z80.registers.d &= 0xFB; this.Z80.registers.m = 2; };
    RES2e = () => { this.Z80.registers.e &= 0xFB; this.Z80.registers.m = 2; };
    RES2h = () => { this.Z80.registers.h &= 0xFB; this.Z80.registers.m = 2; };
    RES2l = () => { this.Z80.registers.l &= 0xFB; this.Z80.registers.m = 2; };
    RES2a = () => { this.Z80.registers.a &= 0xFB; this.Z80.registers.m = 2; };
    RES2m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0xFB; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET2b = () => { this.Z80.registers.b |= 0x04; this.Z80.registers.m = 2; };
    SET2c = () => { this.Z80.registers.b |= 0x04; this.Z80.registers.m = 2; };
    SET2d = () => { this.Z80.registers.b |= 0x04; this.Z80.registers.m = 2; };
    SET2e = () => { this.Z80.registers.b |= 0x04; this.Z80.registers.m = 2; };
    SET2h = () => { this.Z80.registers.b |= 0x04; this.Z80.registers.m = 2; };
    SET2l = () => { this.Z80.registers.b |= 0x04; this.Z80.registers.m = 2; };
    SET2a = () => { this.Z80.registers.b |= 0x04; this.Z80.registers.m = 2; };
    SET2m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x04; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    BIT3b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x08) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT3c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x08) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT3d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x08) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT3e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x08) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT3h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x08) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT3l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x08) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT3a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x08) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT3m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x08) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES3b = () => { this.Z80.registers.b &= 0xF7; this.Z80.registers.m = 2; };
    RES3c = () => { this.Z80.registers.c &= 0xF7; this.Z80.registers.m = 2; };
    RES3d = () => { this.Z80.registers.d &= 0xF7; this.Z80.registers.m = 2; };
    RES3e = () => { this.Z80.registers.e &= 0xF7; this.Z80.registers.m = 2; };
    RES3h = () => { this.Z80.registers.h &= 0xF7; this.Z80.registers.m = 2; };
    RES3l = () => { this.Z80.registers.l &= 0xF7; this.Z80.registers.m = 2; };
    RES3a = () => { this.Z80.registers.a &= 0xF7; this.Z80.registers.m = 2; };
    RES3m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0xF7; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET3b = () => { this.Z80.registers.b |= 0x08; this.Z80.registers.m = 2; };
    SET3c = () => { this.Z80.registers.b |= 0x08; this.Z80.registers.m = 2; };
    SET3d = () => { this.Z80.registers.b |= 0x08; this.Z80.registers.m = 2; };
    SET3e = () => { this.Z80.registers.b |= 0x08; this.Z80.registers.m = 2; };
    SET3h = () => { this.Z80.registers.b |= 0x08; this.Z80.registers.m = 2; };
    SET3l = () => { this.Z80.registers.b |= 0x08; this.Z80.registers.m = 2; };
    SET3a = () => { this.Z80.registers.b |= 0x08; this.Z80.registers.m = 2; };
    SET3m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x08; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    BIT4b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x10) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT4c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x10) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT4d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x10) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT4e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x10) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT4h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x10) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT4l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x10) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT4a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x10) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT4m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x10) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES4b = () => { this.Z80.registers.b &= 0xEF; this.Z80.registers.m = 2; };
    RES4c = () => { this.Z80.registers.c &= 0xEF; this.Z80.registers.m = 2; };
    RES4d = () => { this.Z80.registers.d &= 0xEF; this.Z80.registers.m = 2; };
    RES4e = () => { this.Z80.registers.e &= 0xEF; this.Z80.registers.m = 2; };
    RES4h = () => { this.Z80.registers.h &= 0xEF; this.Z80.registers.m = 2; };
    RES4l = () => { this.Z80.registers.l &= 0xEF; this.Z80.registers.m = 2; };
    RES4a = () => { this.Z80.registers.a &= 0xEF; this.Z80.registers.m = 2; };
    RES4m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0xEF; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET4b = () => { this.Z80.registers.b |= 0x10; this.Z80.registers.m = 2; };
    SET4c = () => { this.Z80.registers.b |= 0x10; this.Z80.registers.m = 2; };
    SET4d = () => { this.Z80.registers.b |= 0x10; this.Z80.registers.m = 2; };
    SET4e = () => { this.Z80.registers.b |= 0x10; this.Z80.registers.m = 2; };
    SET4h = () => { this.Z80.registers.b |= 0x10; this.Z80.registers.m = 2; };
    SET4l = () => { this.Z80.registers.b |= 0x10; this.Z80.registers.m = 2; };
    SET4a = () => { this.Z80.registers.b |= 0x10; this.Z80.registers.m = 2; };
    SET4m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x10; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    BIT5b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x20) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT5c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x20) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT5d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x20) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT5e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x20) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT5h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x20) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT5l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x20) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT5a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x20) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT5m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x20) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES5b = () => { this.Z80.registers.b &= 0xDF; this.Z80.registers.m = 2; };
    RES5c = () => { this.Z80.registers.c &= 0xDF; this.Z80.registers.m = 2; };
    RES5d = () => { this.Z80.registers.d &= 0xDF; this.Z80.registers.m = 2; };
    RES5e = () => { this.Z80.registers.e &= 0xDF; this.Z80.registers.m = 2; };
    RES5h = () => { this.Z80.registers.h &= 0xDF; this.Z80.registers.m = 2; };
    RES5l = () => { this.Z80.registers.l &= 0xDF; this.Z80.registers.m = 2; };
    RES5a = () => { this.Z80.registers.a &= 0xDF; this.Z80.registers.m = 2; };
    RES5m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0xDF; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET5b = () => { this.Z80.registers.b |= 0x20; this.Z80.registers.m = 2; };
    SET5c = () => { this.Z80.registers.b |= 0x20; this.Z80.registers.m = 2; };
    SET5d = () => { this.Z80.registers.b |= 0x20; this.Z80.registers.m = 2; };
    SET5e = () => { this.Z80.registers.b |= 0x20; this.Z80.registers.m = 2; };
    SET5h = () => { this.Z80.registers.b |= 0x20; this.Z80.registers.m = 2; };
    SET5l = () => { this.Z80.registers.b |= 0x20; this.Z80.registers.m = 2; };
    SET5a = () => { this.Z80.registers.b |= 0x20; this.Z80.registers.m = 2; };
    SET5m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x20; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    BIT6b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x40) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT6c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x40) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT6d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x40) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT6e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x40) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT6h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x40) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT6l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x40) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT6a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x40) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT6m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x40) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES6b = () => { this.Z80.registers.b &= 0xBF; this.Z80.registers.m = 2; };
    RES6c = () => { this.Z80.registers.c &= 0xBF; this.Z80.registers.m = 2; };
    RES6d = () => { this.Z80.registers.d &= 0xBF; this.Z80.registers.m = 2; };
    RES6e = () => { this.Z80.registers.e &= 0xBF; this.Z80.registers.m = 2; };
    RES6h = () => { this.Z80.registers.h &= 0xBF; this.Z80.registers.m = 2; };
    RES6l = () => { this.Z80.registers.l &= 0xBF; this.Z80.registers.m = 2; };
    RES6a = () => { this.Z80.registers.a &= 0xBF; this.Z80.registers.m = 2; };
    RES6m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0xBF; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET6b = () => { this.Z80.registers.b |= 0x40; this.Z80.registers.m = 2; };
    SET6c = () => { this.Z80.registers.b |= 0x40; this.Z80.registers.m = 2; };
    SET6d = () => { this.Z80.registers.b |= 0x40; this.Z80.registers.m = 2; };
    SET6e = () => { this.Z80.registers.b |= 0x40; this.Z80.registers.m = 2; };
    SET6h = () => { this.Z80.registers.b |= 0x40; this.Z80.registers.m = 2; };
    SET6l = () => { this.Z80.registers.b |= 0x40; this.Z80.registers.m = 2; };
    SET6a = () => { this.Z80.registers.b |= 0x40; this.Z80.registers.m = 2; };
    SET6m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x40; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    BIT7b = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.b & 0x80) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT7c = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.c & 0x80) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT7d = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.d & 0x80) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT7e = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.e & 0x80) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT7h = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.h & 0x80) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT7l = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.l & 0x80) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT7a = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.Z80.registers.a & 0x80) ? 0 : 0x80; this.Z80.registers.m = 2; };
    BIT7m = () => { this.Z80.registers.f &= 0x1F; this.Z80.registers.f |= 0x20; this.Z80.registers.f = (this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l) & 0x80) ? 0 : 0x80; this.Z80.registers.m = 3; };

    RES7b = () => { this.Z80.registers.b &= 0x7F; this.Z80.registers.m = 2; };
    RES7c = () => { this.Z80.registers.c &= 0x7F; this.Z80.registers.m = 2; };
    RES7d = () => { this.Z80.registers.d &= 0x7F; this.Z80.registers.m = 2; };
    RES7e = () => { this.Z80.registers.e &= 0x7F; this.Z80.registers.m = 2; };
    RES7h = () => { this.Z80.registers.h &= 0x7F; this.Z80.registers.m = 2; };
    RES7l = () => { this.Z80.registers.l &= 0x7F; this.Z80.registers.m = 2; };
    RES7a = () => { this.Z80.registers.a &= 0x7F; this.Z80.registers.m = 2; };
    RES7m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i &= 0x7F; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    SET7b = () => { this.Z80.registers.b |= 0x80; this.Z80.registers.m = 2; };
    SET7c = () => { this.Z80.registers.b |= 0x80; this.Z80.registers.m = 2; };
    SET7d = () => { this.Z80.registers.b |= 0x80; this.Z80.registers.m = 2; };
    SET7e = () => { this.Z80.registers.b |= 0x80; this.Z80.registers.m = 2; };
    SET7h = () => { this.Z80.registers.b |= 0x80; this.Z80.registers.m = 2; };
    SET7l = () => { this.Z80.registers.b |= 0x80; this.Z80.registers.m = 2; };
    SET7a = () => { this.Z80.registers.b |= 0x80; this.Z80.registers.m = 2; };
    SET7m = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); i |= 0x80; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.m = 4; };

    RLA = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.a & 0x80 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a << 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 1; };
    RLCA = () => { var ci = this.Z80.registers.a & 0x80 ? 1 : 0; var co = this.Z80.registers.a & 0x80 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a << 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 1; };
    RRA = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.a & 1 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a >> 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 1; };
    RRCA = () => { var ci = this.Z80.registers.a & 1 ? 0x80 : 0; var co = this.Z80.registers.a & 1 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a >> 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 1; };

    RLr_b = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.b & 0x80 ? 0x10 : 0; this.Z80.registers.b = (this.Z80.registers.b << 1) + ci; this.Z80.registers.b &= 255; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLr_c = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.c & 0x80 ? 0x10 : 0; this.Z80.registers.c = (this.Z80.registers.c << 1) + ci; this.Z80.registers.c &= 255; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLr_d = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.d & 0x80 ? 0x10 : 0; this.Z80.registers.d = (this.Z80.registers.d << 1) + ci; this.Z80.registers.d &= 255; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLr_e = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.e & 0x80 ? 0x10 : 0; this.Z80.registers.e = (this.Z80.registers.e << 1) + ci; this.Z80.registers.e &= 255; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLr_h = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.h & 0x80 ? 0x10 : 0; this.Z80.registers.h = (this.Z80.registers.h << 1) + ci; this.Z80.registers.h &= 255; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLr_l = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.l & 0x80 ? 0x10 : 0; this.Z80.registers.l = (this.Z80.registers.l << 1) + ci; this.Z80.registers.l &= 255; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLr_a = () => { var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = this.Z80.registers.a & 0x80 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a << 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLHL = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); var ci = this.Z80.registers.f & 0x10 ? 1 : 0; var co = i & 0x80 ? 0x10 : 0; i = (i << 1) + ci; i &= 255; this.Z80.registers.f = (i) ? 0 : 0x80; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 4; };

    RLCr_b = () => { var ci = this.Z80.registers.b & 0x80 ? 1 : 0; var co = this.Z80.registers.b & 0x80 ? 0x10 : 0; this.Z80.registers.b = (this.Z80.registers.b << 1) + ci; this.Z80.registers.b &= 255; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLCr_c = () => { var ci = this.Z80.registers.c & 0x80 ? 1 : 0; var co = this.Z80.registers.c & 0x80 ? 0x10 : 0; this.Z80.registers.c = (this.Z80.registers.c << 1) + ci; this.Z80.registers.c &= 255; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLCr_d = () => { var ci = this.Z80.registers.d & 0x80 ? 1 : 0; var co = this.Z80.registers.d & 0x80 ? 0x10 : 0; this.Z80.registers.d = (this.Z80.registers.d << 1) + ci; this.Z80.registers.d &= 255; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLCr_e = () => { var ci = this.Z80.registers.e & 0x80 ? 1 : 0; var co = this.Z80.registers.e & 0x80 ? 0x10 : 0; this.Z80.registers.e = (this.Z80.registers.e << 1) + ci; this.Z80.registers.e &= 255; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLCr_h = () => { var ci = this.Z80.registers.h & 0x80 ? 1 : 0; var co = this.Z80.registers.h & 0x80 ? 0x10 : 0; this.Z80.registers.h = (this.Z80.registers.h << 1) + ci; this.Z80.registers.h &= 255; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLCr_l = () => { var ci = this.Z80.registers.l & 0x80 ? 1 : 0; var co = this.Z80.registers.l & 0x80 ? 0x10 : 0; this.Z80.registers.l = (this.Z80.registers.l << 1) + ci; this.Z80.registers.l &= 255; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLCr_a = () => { var ci = this.Z80.registers.a & 0x80 ? 1 : 0; var co = this.Z80.registers.a & 0x80 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a << 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RLCHL = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); var ci = i & 0x80 ? 1 : 0; var co = i & 0x80 ? 0x10 : 0; i = (i << 1) + ci; i &= 255; this.Z80.registers.f = (i) ? 0 : 0x80; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 4; };

    RRr_b = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.b & 1 ? 0x10 : 0; this.Z80.registers.b = (this.Z80.registers.b >> 1) + ci; this.Z80.registers.b &= 255; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRr_c = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.c & 1 ? 0x10 : 0; this.Z80.registers.c = (this.Z80.registers.c >> 1) + ci; this.Z80.registers.c &= 255; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRr_d = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.d & 1 ? 0x10 : 0; this.Z80.registers.d = (this.Z80.registers.d >> 1) + ci; this.Z80.registers.d &= 255; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRr_e = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.e & 1 ? 0x10 : 0; this.Z80.registers.e = (this.Z80.registers.e >> 1) + ci; this.Z80.registers.e &= 255; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRr_h = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.h & 1 ? 0x10 : 0; this.Z80.registers.h = (this.Z80.registers.h >> 1) + ci; this.Z80.registers.h &= 255; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRr_l = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.l & 1 ? 0x10 : 0; this.Z80.registers.l = (this.Z80.registers.l >> 1) + ci; this.Z80.registers.l &= 255; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRr_a = () => { var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = this.Z80.registers.a & 1 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a >> 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRHL = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); var ci = this.Z80.registers.f & 0x10 ? 0x80 : 0; var co = i & 1 ? 0x10 : 0; i = (i >> 1) + ci; i &= 255; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.f = (i) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 4; };

    RRCr_b = () => { var ci = this.Z80.registers.b & 1 ? 0x80 : 0; var co = this.Z80.registers.b & 1 ? 0x10 : 0; this.Z80.registers.b = (this.Z80.registers.b >> 1) + ci; this.Z80.registers.b &= 255; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRCr_c = () => { var ci = this.Z80.registers.c & 1 ? 0x80 : 0; var co = this.Z80.registers.c & 1 ? 0x10 : 0; this.Z80.registers.c = (this.Z80.registers.c >> 1) + ci; this.Z80.registers.c &= 255; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRCr_d = () => { var ci = this.Z80.registers.d & 1 ? 0x80 : 0; var co = this.Z80.registers.d & 1 ? 0x10 : 0; this.Z80.registers.d = (this.Z80.registers.d >> 1) + ci; this.Z80.registers.d &= 255; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRCr_e = () => { var ci = this.Z80.registers.e & 1 ? 0x80 : 0; var co = this.Z80.registers.e & 1 ? 0x10 : 0; this.Z80.registers.e = (this.Z80.registers.e >> 1) + ci; this.Z80.registers.e &= 255; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRCr_h = () => { var ci = this.Z80.registers.h & 1 ? 0x80 : 0; var co = this.Z80.registers.h & 1 ? 0x10 : 0; this.Z80.registers.h = (this.Z80.registers.h >> 1) + ci; this.Z80.registers.h &= 255; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRCr_l = () => { var ci = this.Z80.registers.l & 1 ? 0x80 : 0; var co = this.Z80.registers.l & 1 ? 0x10 : 0; this.Z80.registers.l = (this.Z80.registers.l >> 1) + ci; this.Z80.registers.l &= 255; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRCr_a = () => { var ci = this.Z80.registers.a & 1 ? 0x80 : 0; var co = this.Z80.registers.a & 1 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a >> 1) + ci; this.Z80.registers.a &= 255; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    RRCHL = () => { var i = this.MMU.rb((this.Z80.registers.h << 8) + this.Z80.registers.l); var ci = i & 1 ? 0x80 : 0; var co = i & 1 ? 0x10 : 0; i = (i >> 1) + ci; i &= 255; this.MMU.wb((this.Z80.registers.h << 8) + this.Z80.registers.l, i); this.Z80.registers.f = (i) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 4; };

    SLAr_b = () => { var co = this.Z80.registers.b & 0x80 ? 0x10 : 0; this.Z80.registers.b = (this.Z80.registers.b << 1) & 255; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLAr_c = () => { var co = this.Z80.registers.c & 0x80 ? 0x10 : 0; this.Z80.registers.c = (this.Z80.registers.c << 1) & 255; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLAr_d = () => { var co = this.Z80.registers.d & 0x80 ? 0x10 : 0; this.Z80.registers.d = (this.Z80.registers.d << 1) & 255; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLAr_e = () => { var co = this.Z80.registers.e & 0x80 ? 0x10 : 0; this.Z80.registers.e = (this.Z80.registers.e << 1) & 255; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLAr_h = () => { var co = this.Z80.registers.h & 0x80 ? 0x10 : 0; this.Z80.registers.h = (this.Z80.registers.h << 1) & 255; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLAr_l = () => { var co = this.Z80.registers.l & 0x80 ? 0x10 : 0; this.Z80.registers.l = (this.Z80.registers.l << 1) & 255; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLAr_a = () => { var co = this.Z80.registers.a & 0x80 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a << 1) & 255; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };

    SLLr_b = () => { var co = this.Z80.registers.b & 0x80 ? 0x10 : 0; this.Z80.registers.b = (this.Z80.registers.b << 1) & 255 + 1; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLLr_c = () => { var co = this.Z80.registers.c & 0x80 ? 0x10 : 0; this.Z80.registers.c = (this.Z80.registers.c << 1) & 255 + 1; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLLr_d = () => { var co = this.Z80.registers.d & 0x80 ? 0x10 : 0; this.Z80.registers.d = (this.Z80.registers.d << 1) & 255 + 1; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLLr_e = () => { var co = this.Z80.registers.e & 0x80 ? 0x10 : 0; this.Z80.registers.e = (this.Z80.registers.e << 1) & 255 + 1; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLLr_h = () => { var co = this.Z80.registers.h & 0x80 ? 0x10 : 0; this.Z80.registers.h = (this.Z80.registers.h << 1) & 255 + 1; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLLr_l = () => { var co = this.Z80.registers.l & 0x80 ? 0x10 : 0; this.Z80.registers.l = (this.Z80.registers.l << 1) & 255 + 1; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SLLr_a = () => { var co = this.Z80.registers.a & 0x80 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a << 1) & 255 + 1; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };

    SRAr_b = () => { var ci = this.Z80.registers.b & 0x80; var co = this.Z80.registers.b & 1 ? 0x10 : 0; this.Z80.registers.b = ((this.Z80.registers.b >> 1) + ci) & 255; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRAr_c = () => { var ci = this.Z80.registers.c & 0x80; var co = this.Z80.registers.c & 1 ? 0x10 : 0; this.Z80.registers.c = ((this.Z80.registers.c >> 1) + ci) & 255; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRAr_d = () => { var ci = this.Z80.registers.d & 0x80; var co = this.Z80.registers.d & 1 ? 0x10 : 0; this.Z80.registers.d = ((this.Z80.registers.d >> 1) + ci) & 255; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRAr_e = () => { var ci = this.Z80.registers.e & 0x80; var co = this.Z80.registers.e & 1 ? 0x10 : 0; this.Z80.registers.e = ((this.Z80.registers.e >> 1) + ci) & 255; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRAr_h = () => { var ci = this.Z80.registers.h & 0x80; var co = this.Z80.registers.h & 1 ? 0x10 : 0; this.Z80.registers.h = ((this.Z80.registers.h >> 1) + ci) & 255; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRAr_l = () => { var ci = this.Z80.registers.l & 0x80; var co = this.Z80.registers.l & 1 ? 0x10 : 0; this.Z80.registers.l = ((this.Z80.registers.l >> 1) + ci) & 255; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRAr_a = () => { var ci = this.Z80.registers.a & 0x80; var co = this.Z80.registers.a & 1 ? 0x10 : 0; this.Z80.registers.a = ((this.Z80.registers.a >> 1) + ci) & 255; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };

    SRLr_b = () => { var co = this.Z80.registers.b & 1 ? 0x10 : 0; this.Z80.registers.b = (this.Z80.registers.b >> 1) & 255; this.Z80.registers.f = (this.Z80.registers.b) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRLr_c = () => { var co = this.Z80.registers.c & 1 ? 0x10 : 0; this.Z80.registers.c = (this.Z80.registers.c >> 1) & 255; this.Z80.registers.f = (this.Z80.registers.c) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRLr_d = () => { var co = this.Z80.registers.d & 1 ? 0x10 : 0; this.Z80.registers.d = (this.Z80.registers.d >> 1) & 255; this.Z80.registers.f = (this.Z80.registers.d) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRLr_e = () => { var co = this.Z80.registers.e & 1 ? 0x10 : 0; this.Z80.registers.e = (this.Z80.registers.e >> 1) & 255; this.Z80.registers.f = (this.Z80.registers.e) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRLr_h = () => { var co = this.Z80.registers.h & 1 ? 0x10 : 0; this.Z80.registers.h = (this.Z80.registers.h >> 1) & 255; this.Z80.registers.f = (this.Z80.registers.h) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRLr_l = () => { var co = this.Z80.registers.l & 1 ? 0x10 : 0; this.Z80.registers.l = (this.Z80.registers.l >> 1) & 255; this.Z80.registers.f = (this.Z80.registers.l) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };
    SRLr_a = () => { var co = this.Z80.registers.a & 1 ? 0x10 : 0; this.Z80.registers.a = (this.Z80.registers.a >> 1) & 255; this.Z80.registers.f = (this.Z80.registers.a) ? 0 : 0x80; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + co; this.Z80.registers.m = 2; };

    CPL = () => { this.Z80.registers.a ^= 255; this.Z80.registers.f = this.Z80.registers.a ? 0 : 0x80; this.Z80.registers.m = 1; };
    NEG = () => { this.Z80.registers.a = 0 - this.Z80.registers.a; this.Z80.registers.f = (this.Z80.registers.a < 0) ? 0x10 : 0; this.Z80.registers.a &= 255; if (!this.Z80.registers.a) this.Z80.registers.f |= 0x80; this.Z80.registers.m = 2; };

    CCF = () => { var ci = this.Z80.registers.f & 0x10 ? 0 : 0x10; this.Z80.registers.f = (this.Z80.registers.f & 0xEF) + ci; this.Z80.registers.m = 1; };
    SCF = () => { this.Z80.registers.f |= 0x10; this.Z80.registers.m = 1; };

    /*--- Stack ---*/
    PUSHBC = () => { this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.b); this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.c); this.Z80.registers.m = 3; };
    PUSHDE = () => { this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.d); this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.e); this.Z80.registers.m = 3; };
    PUSHHL = () => { this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.h); this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.l); this.Z80.registers.m = 3; };
    PUSHAF = () => { this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.a); this.Z80.registers.sp--; this.MMU.wb(this.Z80.registers.sp, this.Z80.registers.f); this.Z80.registers.m = 3; };

    POPBC = () => { this.Z80.registers.c = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.b = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.m = 3; };
    POPDE = () => { this.Z80.registers.e = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.d = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.m = 3; };
    POPHL = () => { this.Z80.registers.l = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.h = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.m = 3; };
    POPAF = () => { this.Z80.registers.f = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.a = this.MMU.rb(this.Z80.registers.sp); this.Z80.registers.sp++; this.Z80.registers.m = 3; };

    /*--- Jump ---*/
    JPnn = () => { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m = 3; };
    JPHL = () => { this.Z80.registers.pc = (this.Z80.registers.h << 8) + this.Z80.registers.l; this.Z80.registers.m = 1; };
    JPNZnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x80) == 0x00) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m++; } else this.Z80.registers.pc += 2; };
    JPZnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x80) == 0x80) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m++; } else this.Z80.registers.pc += 2; };
    JPNCnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x10) == 0x00) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m++; } else this.Z80.registers.pc += 2; };
    JPCnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x10) == 0x10) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m++; } else this.Z80.registers.pc += 2; };

    JRn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; this.Z80.registers.m = 2; this.Z80.registers.pc += i; this.Z80.registers.m++; };
    JRNZn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; this.Z80.registers.m = 2; if ((this.Z80.registers.f & 0x80) == 0x00) { this.Z80.registers.pc += i; this.Z80.registers.m++; } };
    JRZn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; this.Z80.registers.m = 2; if ((this.Z80.registers.f & 0x80) == 0x80) { this.Z80.registers.pc += i; this.Z80.registers.m++; } };
    JRNCn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; this.Z80.registers.m = 2; if ((this.Z80.registers.f & 0x10) == 0x00) { this.Z80.registers.pc += i; this.Z80.registers.m++; } };
    JRCn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; this.Z80.registers.m = 2; if ((this.Z80.registers.f & 0x10) == 0x10) { this.Z80.registers.pc += i; this.Z80.registers.m++; } };

    DJNZn = () => { var i = this.MMU.rb(this.Z80.registers.pc); if (i > 127) i = -((~i + 1) & 255); this.Z80.registers.pc++; this.Z80.registers.m = 2; this.Z80.registers.b--; if (this.Z80.registers.b) { this.Z80.registers.pc += i; this.Z80.registers.m++; } };

    CALLnn = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc + 2); this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m = 5; };
    CALLNZnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x80) == 0x00) { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc + 2); this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m += 2; } else this.Z80.registers.pc += 2; };
    CALLZnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x80) == 0x80) { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc + 2); this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m += 2; } else this.Z80.registers.pc += 2; };
    CALLNCnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x10) == 0x00) { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc + 2); this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m += 2; } else this.Z80.registers.pc += 2; };
    CALLCnn = () => { this.Z80.registers.m = 3; if ((this.Z80.registers.f & 0x10) == 0x10) { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc + 2); this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.pc); this.Z80.registers.m += 2; } else this.Z80.registers.pc += 2; };

    RET = () => { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.sp); this.Z80.registers.sp += 2; this.Z80.registers.m = 3; };
    RETI = () => { this.Z80.registers.ime = 1; this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.sp); this.Z80.registers.sp += 2; this.Z80.registers.m = 3; };
    RETNZ = () => { this.Z80.registers.m = 1; if ((this.Z80.registers.f & 0x80) == 0x00) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.sp); this.Z80.registers.sp += 2; this.Z80.registers.m += 2; } };
    RETZ = () => { this.Z80.registers.m = 1; if ((this.Z80.registers.f & 0x80) == 0x80) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.sp); this.Z80.registers.sp += 2; this.Z80.registers.m += 2; } };
    RETNC = () => { this.Z80.registers.m = 1; if ((this.Z80.registers.f & 0x10) == 0x00) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.sp); this.Z80.registers.sp += 2; this.Z80.registers.m += 2; } };
    RETC = () => { this.Z80.registers.m = 1; if ((this.Z80.registers.f & 0x10) == 0x10) { this.Z80.registers.pc = this.MMU.rw(this.Z80.registers.sp); this.Z80.registers.sp += 2; this.Z80.registers.m += 2; } };

    RST00 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x00; this.Z80.registers.m = 3; };
    RST08 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x08; this.Z80.registers.m = 3; };
    RST10 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x10; this.Z80.registers.m = 3; };
    RST18 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x18; this.Z80.registers.m = 3; };
    RST20 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x20; this.Z80.registers.m = 3; };
    RST28 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x28; this.Z80.registers.m = 3; };
    RST30 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x30; this.Z80.registers.m = 3; };
    RST38 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x38; this.Z80.registers.m = 3; };
    RST40 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x40; this.Z80.registers.m = 3; };
    RST48 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x48; this.Z80.registers.m = 3; };
    RST50 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x50; this.Z80.registers.m = 3; };
    RST58 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x58; this.Z80.registers.m = 3; };
    RST60 = () => { this.Z80.registers.sp -= 2; this.MMU.ww(this.Z80.registers.sp, this.Z80.registers.pc); this.Z80.registers.pc = 0x60; this.Z80.registers.m = 3; };

    NOP = () => { this.Z80.registers.m = 1; };
    HALT = () => { this.Z80.halt = 1; this.Z80.registers.m = 1; };

    DI = () => { this.Z80.registers.ime = 0; this.Z80.registers.m = 1; };
    EI = () => { this.Z80.registers.ime = 1; this.Z80.registers.m = 1; };

    MAPcb = () => {
        var i = this.MMU.rb(this.Z80.registers.pc); this.Z80.registers.pc++;
        this.Z80.registers.pc &= 65535;
        if (this.opcodeCbMap[i]) this.opcodeCbMap[i]();
        else console.log(i);
    };

    XX = () => {
        /*Undefined map entry*/
        var opc = this.Z80.registers.pc - 1;
        console.log('this.Z80', 'Unimplemented instruction at $' + opc.toString(16) + ', stopping.');
        this.Z80.stop = 1;
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