"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
exports.map = map;
