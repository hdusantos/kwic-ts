interface IIndexManager {
  /**
   * Returns true if index manager is empty
   * @return {boolean} true if index manager is empty
   */
  isEmpty(): boolean;

  /**
   * @param {string} word word to be indexed
   * @param {string} line line where the word appears
   * @param {number} pos word position on the line
   */
  map(word: string, line: string, pos: number): void;

  /**
   * Retrieves occurrence of a word
   * @param {string} word word to be searched
   * @return {string} Array containing the lines on which a word
   *                  appears and the position on the line
   */

  occurrencesOfWord(word: string): Array<[string, number]>;

  /**
   * Sorted All Words
   * @return {string[]} Array containing all sorted words
   */
  sortedWords(): string[];
}

export default IIndexManager;
