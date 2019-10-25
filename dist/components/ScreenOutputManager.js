"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScreenOutputManager {
    export(data) {
        for (const line of data) {
            console.log(line);
        }
    }
}
exports.default = ScreenOutputManager;
