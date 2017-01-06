var Opcodes = (function () {
    function Opcodes(cpu, mmu) {
        var _this = this;
        /*--- Load/store ---*/
        this.LDrr_bb = function () { _this.cpu.registers.b = _this.cpu.registers.b; _this.cpu.registers.m = 1; };
        this.LDrr_bc = function () { _this.cpu.registers.b = _this.cpu.registers.c; _this.cpu.registers.m = 1; };
        this.LDrr_bd = function () { _this.cpu.registers.b = _this.cpu.registers.d; _this.cpu.registers.m = 1; };
        this.LDrr_be = function () { _this.cpu.registers.b = _this.cpu.registers.e; _this.cpu.registers.m = 1; };
        this.LDrr_bh = function () { _this.cpu.registers.b = _this.cpu.registers.h; _this.cpu.registers.m = 1; };
        this.LDrr_bl = function () { _this.cpu.registers.b = _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.LDrr_ba = function () { _this.cpu.registers.b = _this.cpu.registers.a; _this.cpu.registers.m = 1; };
        this.LDrr_cb = function () { _this.cpu.registers.c = _this.cpu.registers.b; _this.cpu.registers.m = 1; };
        this.LDrr_cc = function () { _this.cpu.registers.c = _this.cpu.registers.c; _this.cpu.registers.m = 1; };
        this.LDrr_cd = function () { _this.cpu.registers.c = _this.cpu.registers.d; _this.cpu.registers.m = 1; };
        this.LDrr_ce = function () { _this.cpu.registers.c = _this.cpu.registers.e; _this.cpu.registers.m = 1; };
        this.LDrr_ch = function () { _this.cpu.registers.c = _this.cpu.registers.h; _this.cpu.registers.m = 1; };
        this.LDrr_cl = function () { _this.cpu.registers.c = _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.LDrr_ca = function () { _this.cpu.registers.c = _this.cpu.registers.a; _this.cpu.registers.m = 1; };
        this.LDrr_db = function () { _this.cpu.registers.d = _this.cpu.registers.b; _this.cpu.registers.m = 1; };
        this.LDrr_dc = function () { _this.cpu.registers.d = _this.cpu.registers.c; _this.cpu.registers.m = 1; };
        this.LDrr_dd = function () { _this.cpu.registers.d = _this.cpu.registers.d; _this.cpu.registers.m = 1; };
        this.LDrr_de = function () { _this.cpu.registers.d = _this.cpu.registers.e; _this.cpu.registers.m = 1; };
        this.LDrr_dh = function () { _this.cpu.registers.d = _this.cpu.registers.h; _this.cpu.registers.m = 1; };
        this.LDrr_dl = function () { _this.cpu.registers.d = _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.LDrr_da = function () { _this.cpu.registers.d = _this.cpu.registers.a; _this.cpu.registers.m = 1; };
        this.LDrr_eb = function () { _this.cpu.registers.e = _this.cpu.registers.b; _this.cpu.registers.m = 1; };
        this.LDrr_ec = function () { _this.cpu.registers.e = _this.cpu.registers.c; _this.cpu.registers.m = 1; };
        this.LDrr_ed = function () { _this.cpu.registers.e = _this.cpu.registers.d; _this.cpu.registers.m = 1; };
        this.LDrr_ee = function () { _this.cpu.registers.e = _this.cpu.registers.e; _this.cpu.registers.m = 1; };
        this.LDrr_eh = function () { _this.cpu.registers.e = _this.cpu.registers.h; _this.cpu.registers.m = 1; };
        this.LDrr_el = function () { _this.cpu.registers.e = _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.LDrr_ea = function () { _this.cpu.registers.e = _this.cpu.registers.a; _this.cpu.registers.m = 1; };
        this.LDrr_hb = function () { _this.cpu.registers.h = _this.cpu.registers.b; _this.cpu.registers.m = 1; };
        this.LDrr_hc = function () { _this.cpu.registers.h = _this.cpu.registers.c; _this.cpu.registers.m = 1; };
        this.LDrr_hd = function () { _this.cpu.registers.h = _this.cpu.registers.d; _this.cpu.registers.m = 1; };
        this.LDrr_he = function () { _this.cpu.registers.h = _this.cpu.registers.e; _this.cpu.registers.m = 1; };
        this.LDrr_hh = function () { _this.cpu.registers.h = _this.cpu.registers.h; _this.cpu.registers.m = 1; };
        this.LDrr_hl = function () { _this.cpu.registers.h = _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.LDrr_ha = function () { _this.cpu.registers.h = _this.cpu.registers.a; _this.cpu.registers.m = 1; };
        this.LDrr_lb = function () { _this.cpu.registers.l = _this.cpu.registers.b; _this.cpu.registers.m = 1; };
        this.LDrr_lc = function () { _this.cpu.registers.l = _this.cpu.registers.c; _this.cpu.registers.m = 1; };
        this.LDrr_ld = function () { _this.cpu.registers.l = _this.cpu.registers.d; _this.cpu.registers.m = 1; };
        this.LDrr_le = function () { _this.cpu.registers.l = _this.cpu.registers.e; _this.cpu.registers.m = 1; };
        this.LDrr_lh = function () { _this.cpu.registers.l = _this.cpu.registers.h; _this.cpu.registers.m = 1; };
        this.LDrr_ll = function () { _this.cpu.registers.l = _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.LDrr_la = function () { _this.cpu.registers.l = _this.cpu.registers.a; _this.cpu.registers.m = 1; };
        this.LDrr_ab = function () { _this.cpu.registers.a = _this.cpu.registers.b; _this.cpu.registers.m = 1; };
        this.LDrr_ac = function () { _this.cpu.registers.a = _this.cpu.registers.c; _this.cpu.registers.m = 1; };
        this.LDrr_ad = function () { _this.cpu.registers.a = _this.cpu.registers.d; _this.cpu.registers.m = 1; };
        this.LDrr_ae = function () { _this.cpu.registers.a = _this.cpu.registers.e; _this.cpu.registers.m = 1; };
        this.LDrr_ah = function () { _this.cpu.registers.a = _this.cpu.registers.h; _this.cpu.registers.m = 1; };
        this.LDrr_al = function () { _this.cpu.registers.a = _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.LDrr_aa = function () { _this.cpu.registers.a = _this.cpu.registers.a; _this.cpu.registers.m = 1; };
        this.LDrHLm_b = function () { _this.cpu.registers.b = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDrHLm_c = function () { _this.cpu.registers.c = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDrHLm_d = function () { _this.cpu.registers.d = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDrHLm_e = function () { _this.cpu.registers.e = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDrHLm_h = function () { _this.cpu.registers.h = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDrHLm_l = function () { _this.cpu.registers.l = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDrHLm_a = function () { _this.cpu.registers.a = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDHLmr_b = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.b); _this.cpu.registers.m = 2; };
        this.LDHLmr_c = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.c); _this.cpu.registers.m = 2; };
        this.LDHLmr_d = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.d); _this.cpu.registers.m = 2; };
        this.LDHLmr_e = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.e); _this.cpu.registers.m = 2; };
        this.LDHLmr_h = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.h); _this.cpu.registers.m = 2; };
        this.LDHLmr_l = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.l); _this.cpu.registers.m = 2; };
        this.LDHLmr_a = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.a); _this.cpu.registers.m = 2; };
        this.LDrn_b = function () { _this.cpu.registers.b = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; };
        this.LDrn_c = function () { _this.cpu.registers.c = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; };
        this.LDrn_d = function () { _this.cpu.registers.d = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; };
        this.LDrn_e = function () { _this.cpu.registers.e = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; };
        this.LDrn_h = function () { _this.cpu.registers.h = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; };
        this.LDrn_l = function () { _this.cpu.registers.l = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; };
        this.LDrn_a = function () { _this.cpu.registers.a = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; };
        this.LDHLmn = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.mmu.readByte(_this.cpu.registers.pc)); _this.cpu.registers.pc++; _this.cpu.registers.m = 3; };
        this.LDBCmA = function () { _this.mmu.writeByte((_this.cpu.registers.b << 8) + _this.cpu.registers.c, _this.cpu.registers.a); _this.cpu.registers.m = 2; };
        this.LDDEmA = function () { _this.mmu.writeByte((_this.cpu.registers.d << 8) + _this.cpu.registers.e, _this.cpu.registers.a); _this.cpu.registers.m = 2; };
        this.LDmmA = function () { _this.mmu.writeByte(_this.mmu.readWord(_this.cpu.registers.pc), _this.cpu.registers.a); _this.cpu.registers.pc += 2; _this.cpu.registers.m = 4; };
        this.LDmmSP = function () { console.debug('You called LDmmSP but I dont know what to do'); };
        this.LDABCm = function () { _this.cpu.registers.a = _this.mmu.readByte((_this.cpu.registers.b << 8) + _this.cpu.registers.c); _this.cpu.registers.m = 2; };
        this.LDADEm = function () { _this.cpu.registers.a = _this.mmu.readByte((_this.cpu.registers.d << 8) + _this.cpu.registers.e); _this.cpu.registers.m = 2; };
        this.LDAmm = function () { _this.cpu.registers.a = _this.mmu.readByte(_this.mmu.readWord(_this.cpu.registers.pc)); _this.cpu.registers.pc += 2; _this.cpu.registers.m = 4; };
        this.LDBCnn = function () { _this.cpu.registers.c = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.b = _this.mmu.readByte(_this.cpu.registers.pc + 1); _this.cpu.registers.pc += 2; _this.cpu.registers.m = 3; };
        this.LDDEnn = function () { _this.cpu.registers.e = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.d = _this.mmu.readByte(_this.cpu.registers.pc + 1); _this.cpu.registers.pc += 2; _this.cpu.registers.m = 3; };
        this.LDHLnn = function () { _this.cpu.registers.l = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.h = _this.mmu.readByte(_this.cpu.registers.pc + 1); _this.cpu.registers.pc += 2; _this.cpu.registers.m = 3; };
        this.LDSPnn = function () { _this.cpu.registers.sp = _this.mmu.readWord(_this.cpu.registers.pc); _this.cpu.registers.pc += 2; _this.cpu.registers.m = 3; };
        this.LDHLmm = function () { var i = _this.mmu.readWord(_this.cpu.registers.pc); _this.cpu.registers.pc += 2; _this.cpu.registers.l = _this.mmu.readByte(i); _this.cpu.registers.h = _this.mmu.readByte(i + 1); _this.cpu.registers.m = 5; };
        this.LDmmHL = function () { var i = _this.mmu.readWord(_this.cpu.registers.pc); _this.cpu.registers.pc += 2; _this.mmu.writeWord(i, (_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.m = 5; };
        this.LDHLIA = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.a); _this.cpu.registers.l = (_this.cpu.registers.l + 1) & 255; if (!_this.cpu.registers.l)
            _this.cpu.registers.h = (_this.cpu.registers.h + 1) & 255; _this.cpu.registers.m = 2; };
        this.LDAHLI = function () { _this.cpu.registers.a = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.l = (_this.cpu.registers.l + 1) & 255; if (!_this.cpu.registers.l)
            _this.cpu.registers.h = (_this.cpu.registers.h + 1) & 255; _this.cpu.registers.m = 2; };
        this.LDHLDA = function () { _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, _this.cpu.registers.a); _this.cpu.registers.l = (_this.cpu.registers.l - 1) & 255; if (_this.cpu.registers.l == 255)
            _this.cpu.registers.h = (_this.cpu.registers.h - 1) & 255; _this.cpu.registers.m = 2; };
        this.LDAHLD = function () { _this.cpu.registers.a = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.l = (_this.cpu.registers.l - 1) & 255; if (_this.cpu.registers.l == 255)
            _this.cpu.registers.h = (_this.cpu.registers.h - 1) & 255; _this.cpu.registers.m = 2; };
        this.LDAIOn = function () { _this.cpu.registers.a = _this.mmu.readByte(0xFF00 + _this.mmu.readByte(_this.cpu.registers.pc)); _this.cpu.registers.pc++; _this.cpu.registers.m = 3; };
        this.LDIOnA = function () { _this.mmu.writeByte(0xFF00 + _this.mmu.readByte(_this.cpu.registers.pc), _this.cpu.registers.a); _this.cpu.registers.pc++; _this.cpu.registers.m = 3; };
        this.LDAIOC = function () { _this.cpu.registers.a = _this.mmu.readByte(0xFF00 + _this.cpu.registers.c); _this.cpu.registers.m = 2; };
        this.LDIOCA = function () { _this.mmu.writeByte(0xFF00 + _this.cpu.registers.c, _this.cpu.registers.a); _this.cpu.registers.m = 2; };
        this.LDHLSPn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; i += _this.cpu.registers.sp; _this.cpu.registers.h = (i >> 8) & 255; _this.cpu.registers.l = i & 255; _this.cpu.registers.m = 3; };
        this.SWAPr_b = function () { var tr = _this.cpu.registers.b; _this.cpu.registers.b = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); _this.cpu.registers.f = _this.cpu.registers.b ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.SWAPr_c = function () { var tr = _this.cpu.registers.c; _this.cpu.registers.c = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); _this.cpu.registers.f = _this.cpu.registers.c ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.SWAPr_d = function () { var tr = _this.cpu.registers.d; _this.cpu.registers.d = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); _this.cpu.registers.f = _this.cpu.registers.d ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.SWAPr_e = function () { var tr = _this.cpu.registers.e; _this.cpu.registers.e = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); _this.cpu.registers.f = _this.cpu.registers.e ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.SWAPr_h = function () { var tr = _this.cpu.registers.h; _this.cpu.registers.h = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); _this.cpu.registers.f = _this.cpu.registers.h ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.SWAPr_l = function () { var tr = _this.cpu.registers.l; _this.cpu.registers.l = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); _this.cpu.registers.f = _this.cpu.registers.l ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.SWAPr_a = function () { var tr = _this.cpu.registers.a; _this.cpu.registers.a = ((tr & 0xF) << 4) | ((tr & 0xF0) >> 4); _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        /*--- Data processing ---*/
        this.ADDr_b = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.b; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.b ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADDr_c = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.c; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.c ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADDr_d = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.d; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.d ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADDr_e = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.e; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.e ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADDr_h = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.h; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.h ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADDr_l = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.l; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.l ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADDr_a = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.a; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.a ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADDHL = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.a += m; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ a ^ m) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.ADDn = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.a += m; _this.cpu.registers.pc++; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ a ^ m) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.ADDHLBC = function () { var hl = (_this.cpu.registers.h << 8) + _this.cpu.registers.l; hl += (_this.cpu.registers.b << 8) + _this.cpu.registers.c; if (hl > 65535)
            _this.cpu.registers.f |= 0x10;
        else
            _this.cpu.registers.f &= 0xEF; _this.cpu.registers.h = (hl >> 8) & 255; _this.cpu.registers.l = hl & 255; _this.cpu.registers.m = 3; };
        this.ADDHLDE = function () { var hl = (_this.cpu.registers.h << 8) + _this.cpu.registers.l; hl += (_this.cpu.registers.d << 8) + _this.cpu.registers.e; if (hl > 65535)
            _this.cpu.registers.f |= 0x10;
        else
            _this.cpu.registers.f &= 0xEF; _this.cpu.registers.h = (hl >> 8) & 255; _this.cpu.registers.l = hl & 255; _this.cpu.registers.m = 3; };
        this.ADDHLHL = function () { var hl = (_this.cpu.registers.h << 8) + _this.cpu.registers.l; hl += (_this.cpu.registers.h << 8) + _this.cpu.registers.l; if (hl > 65535)
            _this.cpu.registers.f |= 0x10;
        else
            _this.cpu.registers.f &= 0xEF; _this.cpu.registers.h = (hl >> 8) & 255; _this.cpu.registers.l = hl & 255; _this.cpu.registers.m = 3; };
        this.ADDHLSP = function () { var hl = (_this.cpu.registers.h << 8) + _this.cpu.registers.l; hl += _this.cpu.registers.sp; if (hl > 65535)
            _this.cpu.registers.f |= 0x10;
        else
            _this.cpu.registers.f &= 0xEF; _this.cpu.registers.h = (hl >> 8) & 255; _this.cpu.registers.l = hl & 255; _this.cpu.registers.m = 3; };
        this.ADDSPn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; _this.cpu.registers.sp += i; _this.cpu.registers.m = 4; };
        this.ADCr_b = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.b; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.b ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADCr_c = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.c; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.c ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADCr_d = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.d; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.d ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADCr_e = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.e; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.e ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADCr_h = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.h; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.h ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADCr_l = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.l; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.l ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADCr_a = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a += _this.cpu.registers.a; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.a ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.ADCHL = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.a += m; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ m ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.ADCn = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.a += m; _this.cpu.registers.pc++; _this.cpu.registers.a += (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a > 255) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ m ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.SUBr_b = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.b; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.b ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SUBr_c = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.c; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.c ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SUBr_d = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.d; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.d ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SUBr_e = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.e; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.e ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SUBr_h = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.h; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.h ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SUBr_l = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.l; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.l ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SUBr_a = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.a; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.a ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SUBHL = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.a -= m; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ m ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.SUBn = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.a -= m; _this.cpu.registers.pc++; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ m ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.SBCr_b = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.b; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.b ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SBCr_c = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.c; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.c ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SBCr_d = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.d; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.d ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SBCr_e = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.e; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.e ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SBCr_h = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.h; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.h ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SBCr_l = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.l; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.l ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SBCr_a = function () { var a = _this.cpu.registers.a; _this.cpu.registers.a -= _this.cpu.registers.a; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.a ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.SBCHL = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.a -= m; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ m ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.SBCn = function () { var a = _this.cpu.registers.a; var m = _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.a -= m; _this.cpu.registers.pc++; _this.cpu.registers.a -= (_this.cpu.registers.f & 0x10) ? 1 : 0; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x50 : 0x40; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ m ^ a) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.CPr_b = function () { var i = _this.cpu.registers.a; i -= _this.cpu.registers.b; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.b ^ i) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.CPr_c = function () { var i = _this.cpu.registers.a; i -= _this.cpu.registers.c; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.c ^ i) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.CPr_d = function () { var i = _this.cpu.registers.a; i -= _this.cpu.registers.d; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.d ^ i) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.CPr_e = function () { var i = _this.cpu.registers.a; i -= _this.cpu.registers.e; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.e ^ i) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.CPr_h = function () { var i = _this.cpu.registers.a; i -= _this.cpu.registers.h; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.h ^ i) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.CPr_l = function () { var i = _this.cpu.registers.a; i -= _this.cpu.registers.l; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.l ^ i) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.CPr_a = function () { var i = _this.cpu.registers.a; i -= _this.cpu.registers.a; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ _this.cpu.registers.a ^ i) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 1; };
        this.CPHL = function () { var i = _this.cpu.registers.a; var m = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i -= m; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ i ^ m) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.CPn = function () { var i = _this.cpu.registers.a; var m = _this.mmu.readByte(_this.cpu.registers.pc); i -= m; _this.cpu.registers.pc++; _this.cpu.registers.f = (i < 0) ? 0x50 : 0x40; i &= 255; if (!i)
            _this.cpu.registers.f |= 0x80; if ((_this.cpu.registers.a ^ i ^ m) & 0x10)
            _this.cpu.registers.f |= 0x20; _this.cpu.registers.m = 2; };
        this.DAA = function () { var a = _this.cpu.registers.a; if ((_this.cpu.registers.f & 0x20) || ((_this.cpu.registers.a & 15) > 9))
            _this.cpu.registers.a += 6; _this.cpu.registers.f &= 0xEF; if ((_this.cpu.registers.f & 0x20) || (a > 0x99)) {
            _this.cpu.registers.a += 0x60;
            _this.cpu.registers.f |= 0x10;
        } _this.cpu.registers.m = 1; };
        this.ANDr_b = function () { _this.cpu.registers.a &= _this.cpu.registers.b; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ANDr_c = function () { _this.cpu.registers.a &= _this.cpu.registers.c; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ANDr_d = function () { _this.cpu.registers.a &= _this.cpu.registers.d; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ANDr_e = function () { _this.cpu.registers.a &= _this.cpu.registers.e; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ANDr_h = function () { _this.cpu.registers.a &= _this.cpu.registers.h; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ANDr_l = function () { _this.cpu.registers.a &= _this.cpu.registers.l; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ANDr_a = function () { _this.cpu.registers.a &= _this.cpu.registers.a; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ANDHL = function () { _this.cpu.registers.a &= _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.ANDn = function () { _this.cpu.registers.a &= _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.ORr_b = function () { _this.cpu.registers.a |= _this.cpu.registers.b; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ORr_c = function () { _this.cpu.registers.a |= _this.cpu.registers.c; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ORr_d = function () { _this.cpu.registers.a |= _this.cpu.registers.d; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ORr_e = function () { _this.cpu.registers.a |= _this.cpu.registers.e; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ORr_h = function () { _this.cpu.registers.a |= _this.cpu.registers.h; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ORr_l = function () { _this.cpu.registers.a |= _this.cpu.registers.l; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ORr_a = function () { _this.cpu.registers.a |= _this.cpu.registers.a; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.ORHL = function () { _this.cpu.registers.a |= _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.ORn = function () { _this.cpu.registers.a |= _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.XORr_b = function () { _this.cpu.registers.a ^= _this.cpu.registers.b; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.XORr_c = function () { _this.cpu.registers.a ^= _this.cpu.registers.c; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.XORr_d = function () { _this.cpu.registers.a ^= _this.cpu.registers.d; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.XORr_e = function () { _this.cpu.registers.a ^= _this.cpu.registers.e; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.XORr_h = function () { _this.cpu.registers.a ^= _this.cpu.registers.h; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.XORr_l = function () { _this.cpu.registers.a ^= _this.cpu.registers.l; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.XORr_a = function () { _this.cpu.registers.a ^= _this.cpu.registers.a; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.XORHL = function () { _this.cpu.registers.a ^= _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.XORn = function () { _this.cpu.registers.a ^= _this.mmu.readByte(_this.cpu.registers.pc); _this.cpu.registers.pc++; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.INCr_b = function () { _this.cpu.registers.b++; _this.cpu.registers.b &= 255; _this.cpu.registers.f = _this.cpu.registers.b ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.INCr_c = function () { _this.cpu.registers.c++; _this.cpu.registers.c &= 255; _this.cpu.registers.f = _this.cpu.registers.c ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.INCr_d = function () { _this.cpu.registers.d++; _this.cpu.registers.d &= 255; _this.cpu.registers.f = _this.cpu.registers.d ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.INCr_e = function () { _this.cpu.registers.e++; _this.cpu.registers.e &= 255; _this.cpu.registers.f = _this.cpu.registers.e ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.INCr_h = function () { _this.cpu.registers.h++; _this.cpu.registers.h &= 255; _this.cpu.registers.f = _this.cpu.registers.h ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.INCr_l = function () { _this.cpu.registers.l++; _this.cpu.registers.l &= 255; _this.cpu.registers.f = _this.cpu.registers.l ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.INCr_a = function () { _this.cpu.registers.a++; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.INCHLm = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) + 1; i &= 255; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.f = i ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.DECr_b = function () { _this.cpu.registers.b--; _this.cpu.registers.b &= 255; _this.cpu.registers.f = _this.cpu.registers.b ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.DECr_c = function () { _this.cpu.registers.c--; _this.cpu.registers.c &= 255; _this.cpu.registers.f = _this.cpu.registers.c ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.DECr_d = function () { _this.cpu.registers.d--; _this.cpu.registers.d &= 255; _this.cpu.registers.f = _this.cpu.registers.d ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.DECr_e = function () { _this.cpu.registers.e--; _this.cpu.registers.e &= 255; _this.cpu.registers.f = _this.cpu.registers.e ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.DECr_h = function () { _this.cpu.registers.h--; _this.cpu.registers.h &= 255; _this.cpu.registers.f = _this.cpu.registers.h ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.DECr_l = function () { _this.cpu.registers.l--; _this.cpu.registers.l &= 255; _this.cpu.registers.f = _this.cpu.registers.l ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.DECr_a = function () { _this.cpu.registers.a--; _this.cpu.registers.a &= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.DECHLm = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) - 1; i &= 255; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.f = i ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.INCBC = function () { _this.cpu.registers.c = (_this.cpu.registers.c + 1) & 255; if (!_this.cpu.registers.c)
            _this.cpu.registers.b = (_this.cpu.registers.b + 1) & 255; _this.cpu.registers.m = 1; };
        this.INCDE = function () { _this.cpu.registers.e = (_this.cpu.registers.e + 1) & 255; if (!_this.cpu.registers.e)
            _this.cpu.registers.d = (_this.cpu.registers.d + 1) & 255; _this.cpu.registers.m = 1; };
        this.INCHL = function () { _this.cpu.registers.l = (_this.cpu.registers.l + 1) & 255; if (!_this.cpu.registers.l)
            _this.cpu.registers.h = (_this.cpu.registers.h + 1) & 255; _this.cpu.registers.m = 1; };
        this.INCSP = function () { _this.cpu.registers.sp = (_this.cpu.registers.sp + 1) & 65535; _this.cpu.registers.m = 1; };
        this.DECBC = function () { _this.cpu.registers.c = (_this.cpu.registers.c - 1) & 255; if (_this.cpu.registers.c == 255)
            _this.cpu.registers.b = (_this.cpu.registers.b - 1) & 255; _this.cpu.registers.m = 1; };
        this.DECDE = function () { _this.cpu.registers.e = (_this.cpu.registers.e - 1) & 255; if (_this.cpu.registers.e == 255)
            _this.cpu.registers.d = (_this.cpu.registers.d - 1) & 255; _this.cpu.registers.m = 1; };
        this.DECHL = function () { _this.cpu.registers.l = (_this.cpu.registers.l - 1) & 255; if (_this.cpu.registers.l == 255)
            _this.cpu.registers.h = (_this.cpu.registers.h - 1) & 255; _this.cpu.registers.m = 1; };
        this.DECSP = function () { _this.cpu.registers.sp = (_this.cpu.registers.sp - 1) & 65535; _this.cpu.registers.m = 1; };
        /*--- Bit manipulation ---*/
        this.BIT0b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT0c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT0d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT0e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT0h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT0l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT0a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT0m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x01) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES0b = function () { _this.cpu.registers.b &= 0xFE; _this.cpu.registers.m = 2; };
        this.RES0c = function () { _this.cpu.registers.c &= 0xFE; _this.cpu.registers.m = 2; };
        this.RES0d = function () { _this.cpu.registers.d &= 0xFE; _this.cpu.registers.m = 2; };
        this.RES0e = function () { _this.cpu.registers.e &= 0xFE; _this.cpu.registers.m = 2; };
        this.RES0h = function () { _this.cpu.registers.h &= 0xFE; _this.cpu.registers.m = 2; };
        this.RES0l = function () { _this.cpu.registers.l &= 0xFE; _this.cpu.registers.m = 2; };
        this.RES0a = function () { _this.cpu.registers.a &= 0xFE; _this.cpu.registers.m = 2; };
        this.RES0m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0xFE; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET0b = function () { _this.cpu.registers.b |= 0x01; _this.cpu.registers.m = 2; };
        this.SET0c = function () { _this.cpu.registers.b |= 0x01; _this.cpu.registers.m = 2; };
        this.SET0d = function () { _this.cpu.registers.b |= 0x01; _this.cpu.registers.m = 2; };
        this.SET0e = function () { _this.cpu.registers.b |= 0x01; _this.cpu.registers.m = 2; };
        this.SET0h = function () { _this.cpu.registers.b |= 0x01; _this.cpu.registers.m = 2; };
        this.SET0l = function () { _this.cpu.registers.b |= 0x01; _this.cpu.registers.m = 2; };
        this.SET0a = function () { _this.cpu.registers.b |= 0x01; _this.cpu.registers.m = 2; };
        this.SET0m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x01; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.BIT1b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT1c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT1d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT1e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT1h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT1l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT1a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT1m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x02) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES1b = function () { _this.cpu.registers.b &= 0xFD; _this.cpu.registers.m = 2; };
        this.RES1c = function () { _this.cpu.registers.c &= 0xFD; _this.cpu.registers.m = 2; };
        this.RES1d = function () { _this.cpu.registers.d &= 0xFD; _this.cpu.registers.m = 2; };
        this.RES1e = function () { _this.cpu.registers.e &= 0xFD; _this.cpu.registers.m = 2; };
        this.RES1h = function () { _this.cpu.registers.h &= 0xFD; _this.cpu.registers.m = 2; };
        this.RES1l = function () { _this.cpu.registers.l &= 0xFD; _this.cpu.registers.m = 2; };
        this.RES1a = function () { _this.cpu.registers.a &= 0xFD; _this.cpu.registers.m = 2; };
        this.RES1m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0xFD; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET1b = function () { _this.cpu.registers.b |= 0x02; _this.cpu.registers.m = 2; };
        this.SET1c = function () { _this.cpu.registers.b |= 0x02; _this.cpu.registers.m = 2; };
        this.SET1d = function () { _this.cpu.registers.b |= 0x02; _this.cpu.registers.m = 2; };
        this.SET1e = function () { _this.cpu.registers.b |= 0x02; _this.cpu.registers.m = 2; };
        this.SET1h = function () { _this.cpu.registers.b |= 0x02; _this.cpu.registers.m = 2; };
        this.SET1l = function () { _this.cpu.registers.b |= 0x02; _this.cpu.registers.m = 2; };
        this.SET1a = function () { _this.cpu.registers.b |= 0x02; _this.cpu.registers.m = 2; };
        this.SET1m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x02; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.BIT2b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT2c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT2d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT2e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT2h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT2l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT2a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT2m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x04) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES2b = function () { _this.cpu.registers.b &= 0xFB; _this.cpu.registers.m = 2; };
        this.RES2c = function () { _this.cpu.registers.c &= 0xFB; _this.cpu.registers.m = 2; };
        this.RES2d = function () { _this.cpu.registers.d &= 0xFB; _this.cpu.registers.m = 2; };
        this.RES2e = function () { _this.cpu.registers.e &= 0xFB; _this.cpu.registers.m = 2; };
        this.RES2h = function () { _this.cpu.registers.h &= 0xFB; _this.cpu.registers.m = 2; };
        this.RES2l = function () { _this.cpu.registers.l &= 0xFB; _this.cpu.registers.m = 2; };
        this.RES2a = function () { _this.cpu.registers.a &= 0xFB; _this.cpu.registers.m = 2; };
        this.RES2m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0xFB; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET2b = function () { _this.cpu.registers.b |= 0x04; _this.cpu.registers.m = 2; };
        this.SET2c = function () { _this.cpu.registers.b |= 0x04; _this.cpu.registers.m = 2; };
        this.SET2d = function () { _this.cpu.registers.b |= 0x04; _this.cpu.registers.m = 2; };
        this.SET2e = function () { _this.cpu.registers.b |= 0x04; _this.cpu.registers.m = 2; };
        this.SET2h = function () { _this.cpu.registers.b |= 0x04; _this.cpu.registers.m = 2; };
        this.SET2l = function () { _this.cpu.registers.b |= 0x04; _this.cpu.registers.m = 2; };
        this.SET2a = function () { _this.cpu.registers.b |= 0x04; _this.cpu.registers.m = 2; };
        this.SET2m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x04; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.BIT3b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT3c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT3d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT3e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT3h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT3l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT3a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT3m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x08) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES3b = function () { _this.cpu.registers.b &= 0xF7; _this.cpu.registers.m = 2; };
        this.RES3c = function () { _this.cpu.registers.c &= 0xF7; _this.cpu.registers.m = 2; };
        this.RES3d = function () { _this.cpu.registers.d &= 0xF7; _this.cpu.registers.m = 2; };
        this.RES3e = function () { _this.cpu.registers.e &= 0xF7; _this.cpu.registers.m = 2; };
        this.RES3h = function () { _this.cpu.registers.h &= 0xF7; _this.cpu.registers.m = 2; };
        this.RES3l = function () { _this.cpu.registers.l &= 0xF7; _this.cpu.registers.m = 2; };
        this.RES3a = function () { _this.cpu.registers.a &= 0xF7; _this.cpu.registers.m = 2; };
        this.RES3m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0xF7; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET3b = function () { _this.cpu.registers.b |= 0x08; _this.cpu.registers.m = 2; };
        this.SET3c = function () { _this.cpu.registers.b |= 0x08; _this.cpu.registers.m = 2; };
        this.SET3d = function () { _this.cpu.registers.b |= 0x08; _this.cpu.registers.m = 2; };
        this.SET3e = function () { _this.cpu.registers.b |= 0x08; _this.cpu.registers.m = 2; };
        this.SET3h = function () { _this.cpu.registers.b |= 0x08; _this.cpu.registers.m = 2; };
        this.SET3l = function () { _this.cpu.registers.b |= 0x08; _this.cpu.registers.m = 2; };
        this.SET3a = function () { _this.cpu.registers.b |= 0x08; _this.cpu.registers.m = 2; };
        this.SET3m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x08; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.BIT4b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT4c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT4d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT4e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT4h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT4l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT4a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT4m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x10) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES4b = function () { _this.cpu.registers.b &= 0xEF; _this.cpu.registers.m = 2; };
        this.RES4c = function () { _this.cpu.registers.c &= 0xEF; _this.cpu.registers.m = 2; };
        this.RES4d = function () { _this.cpu.registers.d &= 0xEF; _this.cpu.registers.m = 2; };
        this.RES4e = function () { _this.cpu.registers.e &= 0xEF; _this.cpu.registers.m = 2; };
        this.RES4h = function () { _this.cpu.registers.h &= 0xEF; _this.cpu.registers.m = 2; };
        this.RES4l = function () { _this.cpu.registers.l &= 0xEF; _this.cpu.registers.m = 2; };
        this.RES4a = function () { _this.cpu.registers.a &= 0xEF; _this.cpu.registers.m = 2; };
        this.RES4m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0xEF; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET4b = function () { _this.cpu.registers.b |= 0x10; _this.cpu.registers.m = 2; };
        this.SET4c = function () { _this.cpu.registers.b |= 0x10; _this.cpu.registers.m = 2; };
        this.SET4d = function () { _this.cpu.registers.b |= 0x10; _this.cpu.registers.m = 2; };
        this.SET4e = function () { _this.cpu.registers.b |= 0x10; _this.cpu.registers.m = 2; };
        this.SET4h = function () { _this.cpu.registers.b |= 0x10; _this.cpu.registers.m = 2; };
        this.SET4l = function () { _this.cpu.registers.b |= 0x10; _this.cpu.registers.m = 2; };
        this.SET4a = function () { _this.cpu.registers.b |= 0x10; _this.cpu.registers.m = 2; };
        this.SET4m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x10; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.BIT5b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT5c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT5d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT5e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT5h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT5l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT5a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT5m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x20) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES5b = function () { _this.cpu.registers.b &= 0xDF; _this.cpu.registers.m = 2; };
        this.RES5c = function () { _this.cpu.registers.c &= 0xDF; _this.cpu.registers.m = 2; };
        this.RES5d = function () { _this.cpu.registers.d &= 0xDF; _this.cpu.registers.m = 2; };
        this.RES5e = function () { _this.cpu.registers.e &= 0xDF; _this.cpu.registers.m = 2; };
        this.RES5h = function () { _this.cpu.registers.h &= 0xDF; _this.cpu.registers.m = 2; };
        this.RES5l = function () { _this.cpu.registers.l &= 0xDF; _this.cpu.registers.m = 2; };
        this.RES5a = function () { _this.cpu.registers.a &= 0xDF; _this.cpu.registers.m = 2; };
        this.RES5m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0xDF; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET5b = function () { _this.cpu.registers.b |= 0x20; _this.cpu.registers.m = 2; };
        this.SET5c = function () { _this.cpu.registers.b |= 0x20; _this.cpu.registers.m = 2; };
        this.SET5d = function () { _this.cpu.registers.b |= 0x20; _this.cpu.registers.m = 2; };
        this.SET5e = function () { _this.cpu.registers.b |= 0x20; _this.cpu.registers.m = 2; };
        this.SET5h = function () { _this.cpu.registers.b |= 0x20; _this.cpu.registers.m = 2; };
        this.SET5l = function () { _this.cpu.registers.b |= 0x20; _this.cpu.registers.m = 2; };
        this.SET5a = function () { _this.cpu.registers.b |= 0x20; _this.cpu.registers.m = 2; };
        this.SET5m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x20; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.BIT6b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT6c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT6d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT6e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT6h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT6l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT6a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT6m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x40) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES6b = function () { _this.cpu.registers.b &= 0xBF; _this.cpu.registers.m = 2; };
        this.RES6c = function () { _this.cpu.registers.c &= 0xBF; _this.cpu.registers.m = 2; };
        this.RES6d = function () { _this.cpu.registers.d &= 0xBF; _this.cpu.registers.m = 2; };
        this.RES6e = function () { _this.cpu.registers.e &= 0xBF; _this.cpu.registers.m = 2; };
        this.RES6h = function () { _this.cpu.registers.h &= 0xBF; _this.cpu.registers.m = 2; };
        this.RES6l = function () { _this.cpu.registers.l &= 0xBF; _this.cpu.registers.m = 2; };
        this.RES6a = function () { _this.cpu.registers.a &= 0xBF; _this.cpu.registers.m = 2; };
        this.RES6m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0xBF; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET6b = function () { _this.cpu.registers.b |= 0x40; _this.cpu.registers.m = 2; };
        this.SET6c = function () { _this.cpu.registers.b |= 0x40; _this.cpu.registers.m = 2; };
        this.SET6d = function () { _this.cpu.registers.b |= 0x40; _this.cpu.registers.m = 2; };
        this.SET6e = function () { _this.cpu.registers.b |= 0x40; _this.cpu.registers.m = 2; };
        this.SET6h = function () { _this.cpu.registers.b |= 0x40; _this.cpu.registers.m = 2; };
        this.SET6l = function () { _this.cpu.registers.b |= 0x40; _this.cpu.registers.m = 2; };
        this.SET6a = function () { _this.cpu.registers.b |= 0x40; _this.cpu.registers.m = 2; };
        this.SET6m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x40; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.BIT7b = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.b & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT7c = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.c & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT7d = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.d & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT7e = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.e & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT7h = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.h & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT7l = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.l & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT7a = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.cpu.registers.a & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 2; };
        this.BIT7m = function () { _this.cpu.registers.f &= 0x1F; _this.cpu.registers.f |= 0x20; _this.cpu.registers.f = (_this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l) & 0x80) ? 0 : 0x80; _this.cpu.registers.m = 3; };
        this.RES7b = function () { _this.cpu.registers.b &= 0x7F; _this.cpu.registers.m = 2; };
        this.RES7c = function () { _this.cpu.registers.c &= 0x7F; _this.cpu.registers.m = 2; };
        this.RES7d = function () { _this.cpu.registers.d &= 0x7F; _this.cpu.registers.m = 2; };
        this.RES7e = function () { _this.cpu.registers.e &= 0x7F; _this.cpu.registers.m = 2; };
        this.RES7h = function () { _this.cpu.registers.h &= 0x7F; _this.cpu.registers.m = 2; };
        this.RES7l = function () { _this.cpu.registers.l &= 0x7F; _this.cpu.registers.m = 2; };
        this.RES7a = function () { _this.cpu.registers.a &= 0x7F; _this.cpu.registers.m = 2; };
        this.RES7m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i &= 0x7F; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.SET7b = function () { _this.cpu.registers.b |= 0x80; _this.cpu.registers.m = 2; };
        this.SET7c = function () { _this.cpu.registers.b |= 0x80; _this.cpu.registers.m = 2; };
        this.SET7d = function () { _this.cpu.registers.b |= 0x80; _this.cpu.registers.m = 2; };
        this.SET7e = function () { _this.cpu.registers.b |= 0x80; _this.cpu.registers.m = 2; };
        this.SET7h = function () { _this.cpu.registers.b |= 0x80; _this.cpu.registers.m = 2; };
        this.SET7l = function () { _this.cpu.registers.b |= 0x80; _this.cpu.registers.m = 2; };
        this.SET7a = function () { _this.cpu.registers.b |= 0x80; _this.cpu.registers.m = 2; };
        this.SET7m = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); i |= 0x80; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.m = 4; };
        this.RLA = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.a & 0x80 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a << 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 1; };
        this.RLCA = function () { var ci = _this.cpu.registers.a & 0x80 ? 1 : 0; var co = _this.cpu.registers.a & 0x80 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a << 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 1; };
        this.RRA = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.a & 1 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a >> 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 1; };
        this.RRCA = function () { var ci = _this.cpu.registers.a & 1 ? 0x80 : 0; var co = _this.cpu.registers.a & 1 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a >> 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 1; };
        this.RLr_b = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.b & 0x80 ? 0x10 : 0; _this.cpu.registers.b = (_this.cpu.registers.b << 1) + ci; _this.cpu.registers.b &= 255; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLr_c = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.c & 0x80 ? 0x10 : 0; _this.cpu.registers.c = (_this.cpu.registers.c << 1) + ci; _this.cpu.registers.c &= 255; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLr_d = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.d & 0x80 ? 0x10 : 0; _this.cpu.registers.d = (_this.cpu.registers.d << 1) + ci; _this.cpu.registers.d &= 255; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLr_e = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.e & 0x80 ? 0x10 : 0; _this.cpu.registers.e = (_this.cpu.registers.e << 1) + ci; _this.cpu.registers.e &= 255; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLr_h = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.h & 0x80 ? 0x10 : 0; _this.cpu.registers.h = (_this.cpu.registers.h << 1) + ci; _this.cpu.registers.h &= 255; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLr_l = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.l & 0x80 ? 0x10 : 0; _this.cpu.registers.l = (_this.cpu.registers.l << 1) + ci; _this.cpu.registers.l &= 255; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLr_a = function () { var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = _this.cpu.registers.a & 0x80 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a << 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLHL = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); var ci = _this.cpu.registers.f & 0x10 ? 1 : 0; var co = i & 0x80 ? 0x10 : 0; i = (i << 1) + ci; i &= 255; _this.cpu.registers.f = (i) ? 0 : 0x80; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 4; };
        this.RLCr_b = function () { var ci = _this.cpu.registers.b & 0x80 ? 1 : 0; var co = _this.cpu.registers.b & 0x80 ? 0x10 : 0; _this.cpu.registers.b = (_this.cpu.registers.b << 1) + ci; _this.cpu.registers.b &= 255; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLCr_c = function () { var ci = _this.cpu.registers.c & 0x80 ? 1 : 0; var co = _this.cpu.registers.c & 0x80 ? 0x10 : 0; _this.cpu.registers.c = (_this.cpu.registers.c << 1) + ci; _this.cpu.registers.c &= 255; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLCr_d = function () { var ci = _this.cpu.registers.d & 0x80 ? 1 : 0; var co = _this.cpu.registers.d & 0x80 ? 0x10 : 0; _this.cpu.registers.d = (_this.cpu.registers.d << 1) + ci; _this.cpu.registers.d &= 255; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLCr_e = function () { var ci = _this.cpu.registers.e & 0x80 ? 1 : 0; var co = _this.cpu.registers.e & 0x80 ? 0x10 : 0; _this.cpu.registers.e = (_this.cpu.registers.e << 1) + ci; _this.cpu.registers.e &= 255; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLCr_h = function () { var ci = _this.cpu.registers.h & 0x80 ? 1 : 0; var co = _this.cpu.registers.h & 0x80 ? 0x10 : 0; _this.cpu.registers.h = (_this.cpu.registers.h << 1) + ci; _this.cpu.registers.h &= 255; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLCr_l = function () { var ci = _this.cpu.registers.l & 0x80 ? 1 : 0; var co = _this.cpu.registers.l & 0x80 ? 0x10 : 0; _this.cpu.registers.l = (_this.cpu.registers.l << 1) + ci; _this.cpu.registers.l &= 255; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLCr_a = function () { var ci = _this.cpu.registers.a & 0x80 ? 1 : 0; var co = _this.cpu.registers.a & 0x80 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a << 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RLCHL = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); var ci = i & 0x80 ? 1 : 0; var co = i & 0x80 ? 0x10 : 0; i = (i << 1) + ci; i &= 255; _this.cpu.registers.f = (i) ? 0 : 0x80; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 4; };
        this.RRr_b = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.b & 1 ? 0x10 : 0; _this.cpu.registers.b = (_this.cpu.registers.b >> 1) + ci; _this.cpu.registers.b &= 255; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRr_c = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.c & 1 ? 0x10 : 0; _this.cpu.registers.c = (_this.cpu.registers.c >> 1) + ci; _this.cpu.registers.c &= 255; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRr_d = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.d & 1 ? 0x10 : 0; _this.cpu.registers.d = (_this.cpu.registers.d >> 1) + ci; _this.cpu.registers.d &= 255; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRr_e = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.e & 1 ? 0x10 : 0; _this.cpu.registers.e = (_this.cpu.registers.e >> 1) + ci; _this.cpu.registers.e &= 255; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRr_h = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.h & 1 ? 0x10 : 0; _this.cpu.registers.h = (_this.cpu.registers.h >> 1) + ci; _this.cpu.registers.h &= 255; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRr_l = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.l & 1 ? 0x10 : 0; _this.cpu.registers.l = (_this.cpu.registers.l >> 1) + ci; _this.cpu.registers.l &= 255; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRr_a = function () { var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = _this.cpu.registers.a & 1 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a >> 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRHL = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); var ci = _this.cpu.registers.f & 0x10 ? 0x80 : 0; var co = i & 1 ? 0x10 : 0; i = (i >> 1) + ci; i &= 255; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.f = (i) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 4; };
        this.RRCr_b = function () { var ci = _this.cpu.registers.b & 1 ? 0x80 : 0; var co = _this.cpu.registers.b & 1 ? 0x10 : 0; _this.cpu.registers.b = (_this.cpu.registers.b >> 1) + ci; _this.cpu.registers.b &= 255; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRCr_c = function () { var ci = _this.cpu.registers.c & 1 ? 0x80 : 0; var co = _this.cpu.registers.c & 1 ? 0x10 : 0; _this.cpu.registers.c = (_this.cpu.registers.c >> 1) + ci; _this.cpu.registers.c &= 255; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRCr_d = function () { var ci = _this.cpu.registers.d & 1 ? 0x80 : 0; var co = _this.cpu.registers.d & 1 ? 0x10 : 0; _this.cpu.registers.d = (_this.cpu.registers.d >> 1) + ci; _this.cpu.registers.d &= 255; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRCr_e = function () { var ci = _this.cpu.registers.e & 1 ? 0x80 : 0; var co = _this.cpu.registers.e & 1 ? 0x10 : 0; _this.cpu.registers.e = (_this.cpu.registers.e >> 1) + ci; _this.cpu.registers.e &= 255; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRCr_h = function () { var ci = _this.cpu.registers.h & 1 ? 0x80 : 0; var co = _this.cpu.registers.h & 1 ? 0x10 : 0; _this.cpu.registers.h = (_this.cpu.registers.h >> 1) + ci; _this.cpu.registers.h &= 255; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRCr_l = function () { var ci = _this.cpu.registers.l & 1 ? 0x80 : 0; var co = _this.cpu.registers.l & 1 ? 0x10 : 0; _this.cpu.registers.l = (_this.cpu.registers.l >> 1) + ci; _this.cpu.registers.l &= 255; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRCr_a = function () { var ci = _this.cpu.registers.a & 1 ? 0x80 : 0; var co = _this.cpu.registers.a & 1 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a >> 1) + ci; _this.cpu.registers.a &= 255; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.RRCHL = function () { var i = _this.mmu.readByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l); var ci = i & 1 ? 0x80 : 0; var co = i & 1 ? 0x10 : 0; i = (i >> 1) + ci; i &= 255; _this.mmu.writeByte((_this.cpu.registers.h << 8) + _this.cpu.registers.l, i); _this.cpu.registers.f = (i) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 4; };
        this.SLAr_b = function () { var co = _this.cpu.registers.b & 0x80 ? 0x10 : 0; _this.cpu.registers.b = (_this.cpu.registers.b << 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLAr_c = function () { var co = _this.cpu.registers.c & 0x80 ? 0x10 : 0; _this.cpu.registers.c = (_this.cpu.registers.c << 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLAr_d = function () { var co = _this.cpu.registers.d & 0x80 ? 0x10 : 0; _this.cpu.registers.d = (_this.cpu.registers.d << 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLAr_e = function () { var co = _this.cpu.registers.e & 0x80 ? 0x10 : 0; _this.cpu.registers.e = (_this.cpu.registers.e << 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLAr_h = function () { var co = _this.cpu.registers.h & 0x80 ? 0x10 : 0; _this.cpu.registers.h = (_this.cpu.registers.h << 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLAr_l = function () { var co = _this.cpu.registers.l & 0x80 ? 0x10 : 0; _this.cpu.registers.l = (_this.cpu.registers.l << 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLAr_a = function () { var co = _this.cpu.registers.a & 0x80 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a << 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLLr_b = function () { var co = _this.cpu.registers.b & 0x80 ? 0x10 : 0; _this.cpu.registers.b = (_this.cpu.registers.b << 1) & 255 + 1; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLLr_c = function () { var co = _this.cpu.registers.c & 0x80 ? 0x10 : 0; _this.cpu.registers.c = (_this.cpu.registers.c << 1) & 255 + 1; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLLr_d = function () { var co = _this.cpu.registers.d & 0x80 ? 0x10 : 0; _this.cpu.registers.d = (_this.cpu.registers.d << 1) & 255 + 1; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLLr_e = function () { var co = _this.cpu.registers.e & 0x80 ? 0x10 : 0; _this.cpu.registers.e = (_this.cpu.registers.e << 1) & 255 + 1; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLLr_h = function () { var co = _this.cpu.registers.h & 0x80 ? 0x10 : 0; _this.cpu.registers.h = (_this.cpu.registers.h << 1) & 255 + 1; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLLr_l = function () { var co = _this.cpu.registers.l & 0x80 ? 0x10 : 0; _this.cpu.registers.l = (_this.cpu.registers.l << 1) & 255 + 1; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SLLr_a = function () { var co = _this.cpu.registers.a & 0x80 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a << 1) & 255 + 1; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRAr_b = function () { var ci = _this.cpu.registers.b & 0x80; var co = _this.cpu.registers.b & 1 ? 0x10 : 0; _this.cpu.registers.b = ((_this.cpu.registers.b >> 1) + ci) & 255; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRAr_c = function () { var ci = _this.cpu.registers.c & 0x80; var co = _this.cpu.registers.c & 1 ? 0x10 : 0; _this.cpu.registers.c = ((_this.cpu.registers.c >> 1) + ci) & 255; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRAr_d = function () { var ci = _this.cpu.registers.d & 0x80; var co = _this.cpu.registers.d & 1 ? 0x10 : 0; _this.cpu.registers.d = ((_this.cpu.registers.d >> 1) + ci) & 255; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRAr_e = function () { var ci = _this.cpu.registers.e & 0x80; var co = _this.cpu.registers.e & 1 ? 0x10 : 0; _this.cpu.registers.e = ((_this.cpu.registers.e >> 1) + ci) & 255; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRAr_h = function () { var ci = _this.cpu.registers.h & 0x80; var co = _this.cpu.registers.h & 1 ? 0x10 : 0; _this.cpu.registers.h = ((_this.cpu.registers.h >> 1) + ci) & 255; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRAr_l = function () { var ci = _this.cpu.registers.l & 0x80; var co = _this.cpu.registers.l & 1 ? 0x10 : 0; _this.cpu.registers.l = ((_this.cpu.registers.l >> 1) + ci) & 255; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRAr_a = function () { var ci = _this.cpu.registers.a & 0x80; var co = _this.cpu.registers.a & 1 ? 0x10 : 0; _this.cpu.registers.a = ((_this.cpu.registers.a >> 1) + ci) & 255; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRLr_b = function () { var co = _this.cpu.registers.b & 1 ? 0x10 : 0; _this.cpu.registers.b = (_this.cpu.registers.b >> 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.b) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRLr_c = function () { var co = _this.cpu.registers.c & 1 ? 0x10 : 0; _this.cpu.registers.c = (_this.cpu.registers.c >> 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.c) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRLr_d = function () { var co = _this.cpu.registers.d & 1 ? 0x10 : 0; _this.cpu.registers.d = (_this.cpu.registers.d >> 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.d) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRLr_e = function () { var co = _this.cpu.registers.e & 1 ? 0x10 : 0; _this.cpu.registers.e = (_this.cpu.registers.e >> 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.e) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRLr_h = function () { var co = _this.cpu.registers.h & 1 ? 0x10 : 0; _this.cpu.registers.h = (_this.cpu.registers.h >> 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.h) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRLr_l = function () { var co = _this.cpu.registers.l & 1 ? 0x10 : 0; _this.cpu.registers.l = (_this.cpu.registers.l >> 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.l) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.SRLr_a = function () { var co = _this.cpu.registers.a & 1 ? 0x10 : 0; _this.cpu.registers.a = (_this.cpu.registers.a >> 1) & 255; _this.cpu.registers.f = (_this.cpu.registers.a) ? 0 : 0x80; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + co; _this.cpu.registers.m = 2; };
        this.CPL = function () { _this.cpu.registers.a ^= 255; _this.cpu.registers.f = _this.cpu.registers.a ? 0 : 0x80; _this.cpu.registers.m = 1; };
        this.NEG = function () { _this.cpu.registers.a = 0 - _this.cpu.registers.a; _this.cpu.registers.f = (_this.cpu.registers.a < 0) ? 0x10 : 0; _this.cpu.registers.a &= 255; if (!_this.cpu.registers.a)
            _this.cpu.registers.f |= 0x80; _this.cpu.registers.m = 2; };
        this.CCF = function () { var ci = _this.cpu.registers.f & 0x10 ? 0 : 0x10; _this.cpu.registers.f = (_this.cpu.registers.f & 0xEF) + ci; _this.cpu.registers.m = 1; };
        this.SCF = function () { _this.cpu.registers.f |= 0x10; _this.cpu.registers.m = 1; };
        /*--- Stack ---*/
        this.PUSHBC = function () { _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.b); _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.c); _this.cpu.registers.m = 3; };
        this.PUSHDE = function () { _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.d); _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.e); _this.cpu.registers.m = 3; };
        this.PUSHHL = function () { _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.h); _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.l); _this.cpu.registers.m = 3; };
        this.PUSHAF = function () { _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.a); _this.cpu.registers.sp--; _this.mmu.writeByte(_this.cpu.registers.sp, _this.cpu.registers.f); _this.cpu.registers.m = 3; };
        this.POPBC = function () { _this.cpu.registers.c = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.b = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.m = 3; };
        this.POPDE = function () { _this.cpu.registers.e = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.d = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.m = 3; };
        this.POPHL = function () { _this.cpu.registers.l = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.h = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.m = 3; };
        this.POPAF = function () { _this.cpu.registers.f = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.a = _this.mmu.readByte(_this.cpu.registers.sp); _this.cpu.registers.sp++; _this.cpu.registers.m = 3; };
        /*--- Jump ---*/
        this.JPnn = function () { _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc); _this.cpu.registers.m = 3; };
        this.JPHL = function () { _this.cpu.registers.pc = (_this.cpu.registers.h << 8) + _this.cpu.registers.l; _this.cpu.registers.m = 1; };
        this.JPNZnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x80) == 0x00) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m++;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.JPZnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x80) == 0x80) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m++;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.JPNCnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x10) == 0x00) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m++;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.JPCnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x10) == 0x10) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m++;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.JRn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; _this.cpu.registers.pc += i; _this.cpu.registers.m++; };
        this.JRNZn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; if ((_this.cpu.registers.f & 0x80) == 0x00) {
            _this.cpu.registers.pc += i;
            _this.cpu.registers.m++;
        } };
        this.JRZn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; if ((_this.cpu.registers.f & 0x80) == 0x80) {
            _this.cpu.registers.pc += i;
            _this.cpu.registers.m++;
        } };
        this.JRNCn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; if ((_this.cpu.registers.f & 0x10) == 0x00) {
            _this.cpu.registers.pc += i;
            _this.cpu.registers.m++;
        } };
        this.JRCn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; if ((_this.cpu.registers.f & 0x10) == 0x10) {
            _this.cpu.registers.pc += i;
            _this.cpu.registers.m++;
        } };
        this.DJNZn = function () { var i = _this.mmu.readByte(_this.cpu.registers.pc); if (i > 127)
            i = -((~i + 1) & 255); _this.cpu.registers.pc++; _this.cpu.registers.m = 2; _this.cpu.registers.b--; if (_this.cpu.registers.b) {
            _this.cpu.registers.pc += i;
            _this.cpu.registers.m++;
        } };
        this.CALLnn = function () { _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc + 2); _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc); _this.cpu.registers.m = 5; };
        this.CALLNZnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x80) == 0x00) {
            _this.cpu.registers.sp -= 2;
            _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc + 2);
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m += 2;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.CALLZnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x80) == 0x80) {
            _this.cpu.registers.sp -= 2;
            _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc + 2);
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m += 2;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.CALLNCnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x10) == 0x00) {
            _this.cpu.registers.sp -= 2;
            _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc + 2);
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m += 2;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.CALLCnn = function () { _this.cpu.registers.m = 3; if ((_this.cpu.registers.f & 0x10) == 0x10) {
            _this.cpu.registers.sp -= 2;
            _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc + 2);
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.pc);
            _this.cpu.registers.m += 2;
        }
        else
            _this.cpu.registers.pc += 2; };
        this.RET = function () { _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.sp); _this.cpu.registers.sp += 2; _this.cpu.registers.m = 3; };
        this.RETI = function () { _this.cpu.registers.ime = 1; _this.rrs(); _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.sp); _this.cpu.registers.sp += 2; _this.cpu.registers.m = 3; };
        this.RETNZ = function () { _this.cpu.registers.m = 1; if ((_this.cpu.registers.f & 0x80) == 0x00) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.sp);
            _this.cpu.registers.sp += 2;
            _this.cpu.registers.m += 2;
        } };
        this.RETZ = function () { _this.cpu.registers.m = 1; if ((_this.cpu.registers.f & 0x80) == 0x80) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.sp);
            _this.cpu.registers.sp += 2;
            _this.cpu.registers.m += 2;
        } };
        this.RETNC = function () { _this.cpu.registers.m = 1; if ((_this.cpu.registers.f & 0x10) == 0x00) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.sp);
            _this.cpu.registers.sp += 2;
            _this.cpu.registers.m += 2;
        } };
        this.RETC = function () { _this.cpu.registers.m = 1; if ((_this.cpu.registers.f & 0x10) == 0x10) {
            _this.cpu.registers.pc = _this.mmu.readWord(_this.cpu.registers.sp);
            _this.cpu.registers.sp += 2;
            _this.cpu.registers.m += 2;
        } };
        this.RST00 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x00; _this.cpu.registers.m = 3; };
        this.RST08 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x08; _this.cpu.registers.m = 3; };
        this.RST10 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x10; _this.cpu.registers.m = 3; };
        this.RST18 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x18; _this.cpu.registers.m = 3; };
        this.RST20 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x20; _this.cpu.registers.m = 3; };
        this.RST28 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x28; _this.cpu.registers.m = 3; };
        this.RST30 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x30; _this.cpu.registers.m = 3; };
        this.RST38 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x38; _this.cpu.registers.m = 3; };
        this.RST40 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x40; _this.cpu.registers.m = 3; };
        this.RST48 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x48; _this.cpu.registers.m = 3; };
        this.RST50 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x50; _this.cpu.registers.m = 3; };
        this.RST58 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x58; _this.cpu.registers.m = 3; };
        this.RST60 = function () { _this.rsv(); _this.cpu.registers.sp -= 2; _this.mmu.writeWord(_this.cpu.registers.sp, _this.cpu.registers.pc); _this.cpu.registers.pc = 0x60; _this.cpu.registers.m = 3; };
        this.NOP = function () { _this.cpu.registers.m = 1; };
        this.HALT = function () { _this.cpu.halt = 1; _this.cpu.registers.m = 1; };
        this.DI = function () { _this.cpu.registers.ime = 0; _this.cpu.registers.m = 1; };
        this.EI = function () { _this.cpu.registers.ime = 1; _this.cpu.registers.m = 1; };
        /*--- Helper functions ---*/
        this.rsv = function () {
            _this.backupregisters.a = _this.cpu.registers.a;
            _this.backupregisters.b = _this.cpu.registers.b;
            _this.backupregisters.c = _this.cpu.registers.c;
            _this.backupregisters.d = _this.cpu.registers.d;
            _this.backupregisters.e = _this.cpu.registers.e;
            _this.backupregisters.f = _this.cpu.registers.f;
            _this.backupregisters.h = _this.cpu.registers.h;
            _this.backupregisters.l = _this.cpu.registers.l;
        };
        this.rrs = function () {
            _this.cpu.registers.a = _this.backupregisters.a;
            _this.cpu.registers.b = _this.backupregisters.b;
            _this.cpu.registers.c = _this.backupregisters.c;
            _this.cpu.registers.d = _this.backupregisters.d;
            _this.cpu.registers.e = _this.backupregisters.e;
            _this.cpu.registers.f = _this.backupregisters.f;
            _this.cpu.registers.h = _this.backupregisters.h;
            _this.cpu.registers.l = _this.backupregisters.l;
        };
        this.MAPcb = function () {
            var i = _this.mmu.readByte(_this.cpu.registers.pc);
            _this.cpu.registers.pc++;
            _this.cpu.registers.pc &= 65535;
            if (_this.opcodeCbMap[i])
                _this.opcodeCbMap[i]();
            else
                console.log(i);
        };
        this.XX = function () {
            /*Undefined map entry*/
            var opc = _this.cpu.registers.pc - 1;
            console.log('Unimplemented instruction at $' + opc.toString(16) + ', stopping.');
            _this.cpu.stop = 1;
        };
        this.opcodeMap = [
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
        this.opcodeCbMap = [
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
        this.cpu = cpu;
        this.mmu = mmu;
        this.backupregisters = new Registers();
    }
    return Opcodes;
}());
//# sourceMappingURL=Opcodes.js.map