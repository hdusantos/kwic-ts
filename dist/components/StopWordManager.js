"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class StopWordManager {
    constructor(fileName) {
        this.words = [];
        const text = fs_1.default.readFileSync(fileName, "utf-8");
        this.words = text.split("\n").sort();
    }
    stopWord(word) {
        return this.searchWord(word);
    }
    // Search word using binarySearch
    searchWord(word) {
        let begin = 0;
        let end = this.words.length - 1;
        let middle;
        while (end >= begin) {
            middle = Math.trunc((end + begin) / 2);
            if (this.words[middle] === word) {
                while (this.words[middle - 1] === word) {
                    middle--;
                }
                return true;
            }
            if (word > this.words[middle]) {
                begin = middle + 1;
            }
            else {
                end = middle - 1;
            }
        }
        return false;
    }
}
exports.default = StopWordManager;
