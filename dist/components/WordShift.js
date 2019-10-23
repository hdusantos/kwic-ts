"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WordShift {
    shift(words, pos, target) {
        const l = words.slice(0, pos);
        const r = words.slice(pos);
        if (l.join(" ").length < (target - 5)) {
            return this.shiftRight(l, r, target);
        }
        return this.shiftLeft(l, r, target);
    }
    shiftRight(l, r, target) {
        if (r.length === 0) {
            return l;
        }
        const r1 = r.slice(0, r.length - 1);
        const r2 = r.slice(r.length - 1);
        const l1 = r2.concat(l);
        if (l1.join(" ").length > (target - 5)) {
            return l.concat(r);
        }
        return this.shiftRight(l1, r1, target);
    }
    shiftLeft(l, r, target) {
        if (l.length === 0) {
            return r;
        }
        const l1 = l.slice(0, 1);
        const l2 = l.slice(1);
        const r1 = r.concat(l1);
        if (l2.join(" ").length < (target - 5)) {
            return l2.concat(r1);
        }
        return this.shiftLeft(l2, r1, target);
    }
}
exports.default = WordShift;
