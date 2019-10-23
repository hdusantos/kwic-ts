"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexManager {
    constructor() {
        this.data = new Map();
    }
    /**
     * Returns true if index manager is empty
     * @return {boolean} true if index manager is empty
     */
    isEmpty() {
        return this.data.size === 0;
    }
    /**
     * @param {string} word word to be indexed
     * @param {string} line line where the word appears
     * @param {number} pos word position on the line
     */
    map(word, line, pos) {
        const tuple = [line, pos];
        if (this.data.has(word)) {
            const dataMap = this.data.get(word);
            dataMap.push(tuple);
            this.data.set(word, dataMap);
        }
        else {
            this.data.set(word, [tuple]);
        }
    }
    /**
     * Retrieves occurrence of a word
     * @param {string} word word to be searched
     * @return {string} Array containing the lines on which a word
     *                  appears and the position on the line
     */
    occurrencesOfWord(word) {
        return this.data.get(word) || [["", 0]];
    }
    /**
     * Sorted All Words
     * @return {string[]} Array containing all sorted words
     */
    sortedWords() {
        const keys = [];
        this.data.forEach((value, key) => keys.push(key));
        keys.sort();
        return keys;
    }
}
exports.default = IndexManager;
