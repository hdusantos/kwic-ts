"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
class FileBasedStorageManager {
    constructor() {
        this.lines = [];
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = yield this.getSourceName();
            const text = fs_1.default.readFileSync(fileName, "utf-8");
            this.lines = text.split("\n");
        });
    }
    line(idx) {
        return this.lines[idx];
    }
    length() {
        return this.lines.length;
    }
    setGetSourceName(func) {
        this.getSourceName = func;
    }
    getSourceName() {
        return new Promise((resolve, reject) => {
            const readNameFile = readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            readNameFile.question(`Enter the name of the input file:`, (name) => {
                console.log(`Readind ${name}!`);
                resolve(name);
                readNameFile.close();
            });
        });
    }
}
exports.default = FileBasedStorageManager;
