import IIndexManager from "../interfaces/IIndexManager";

class IndexManager implements IIndexManager {
  private data = new Map<string, Array<[string, number]>>();
  /**
   * Returns true if index manager is empty
   * @return {boolean} true if index manager is empty
   */
  public isEmpty(): boolean {
    return this.data.size === 0;
  }

  /**
   * @param {string} word word to be indexed
   * @param {string} line line where the word appears
   * @param {number} pos word position on the line
   */
  public map(word: string, line: string, pos: number): void {
    const tuple: [string, number] = [line, pos];
    if (this.data.has(word)) {
      const dataMap: [[string, number]] = this.data.get(word) as [[string, number]];
      dataMap.push(tuple);
      this.data.set(word, dataMap);
    } else {
      this.data.set(word, [tuple]);
    }
  }

  /**
   * Retrieves occurrence of a word
   * @param {string} word word to be searched
   * @return {string} Array containing the lines on which a word
   *                  appears and the position on the line
   */

  public occurrencesOfWord(word: string): Array<[string, number]> {
    return this.data.get(word) || [["", 0]];
  }

  /**
   * Sorted All Words
   * @return {string[]} Array containing all sorted words
   */
  public sortedWords(): string[] {
    const keys: string[] = [];
    this.data.forEach((value: any, key: string) => keys.push(key));
    keys.sort();
    return keys;
  }
}

export default IndexManager;
