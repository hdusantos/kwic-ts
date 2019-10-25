"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Components */
const FileBasedStorageManager_1 = __importDefault(require("../components/FileBasedStorageManager"));
const IndexManager_1 = __importDefault(require("../components/IndexManager"));
const ScreenOutputManager_1 = __importDefault(require("../components/ScreenOutputManager"));
const StopWordManager_1 = __importDefault(require("../components/StopWordManager"));
const WordShift_1 = __importDefault(require("../components/WordShift"));
class KwicManager {
    constructor() {
        /* Create components instance*/
        this.dataStorageManager = new FileBasedStorageManager_1.default();
        this.indexManager = new IndexManager_1.default();
        this.stopWordManager = new StopWordManager_1.default("src/resources/stop_words.txt");
        this.wordShift = new WordShift_1.default();
        this.outputManager = new ScreenOutputManager_1.default();
    }
    run() {
        /* Initialize Data Storage Manager */
        this.dataStorageManager.init()
            .then(() => {
            for (let lineNumber = 0; lineNumber < this.dataStorageManager.length(); lineNumber++) {
                const line = this.dataStorageManager.line(lineNumber);
                const words = line.split(" ");
                for (let pos = 0; pos < words.length; pos++) {
                    this.indexManager.map(words[pos], line, pos);
                }
            }
            /* Output */
            const result = [];
            for (const word of this.indexManager.sortedWords()) {
                this.indexManager.occurrencesOfWord(word).map((tuple) => {
                    if (tuple[0] && tuple[1]) {
                        result.push(this.wordShift.shift(tuple[0].split(" "), tuple[1], 0).join(" "));
                    }
                });
            }
            this.outputManager.export(result);
        });
    }
    setDataStorageManager(component) {
        this.dataStorageManager = component;
    }
    setIndexManager(component) {
        this.indexManager = component;
    }
    setStopWordManager(component) {
        this.stopWordManager = component;
    }
    setWordShift(component) {
        this.wordShift = component;
    }
    setOutputManger(component) {
        this.outputManager = component;
    }
}
exports.default = KwicManager;
