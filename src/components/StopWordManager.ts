import fs from "fs";
import IStopWordManager from "../interfaces/IStopWordManager";

class StopWordManager implements IStopWordManager {
  private words: string[] = [];

  constructor(fileName: string) {
    const text = fs.readFileSync(fileName, "utf-8");
    this.words = text.split("\n").sort();
  }

  public stopWord(word: string): boolean {
    return this.searchWord(word);
  }

  // Search word using binarySearch
  private searchWord(word: string): boolean {
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
      } else {
        end = middle - 1;
      }
    }
    return false;
  }
}

export default StopWordManager;
