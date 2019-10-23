import IDataStorageManager from "../interfaces/IDataStorageManager";
import IIndexManager from "../interfaces/IIndexManager";
import IStopWordManager from "../interfaces/IStopWordManager";
import IWordShift from "../interfaces/IWordShift";
import IKwicManager from "./IKwicManager";

class KwicManager implements IKwicManager {
  private dataStorageManager: IDataStorageManager;
  private indexManager: IIndexManager;
  private stopWordManager: IStopWordManager;
  private wordShift: IWordShift;

  constructor(
    dataStorageManager: IDataStorageManager,
    indexManager: IIndexManager,
    stopWordManager: IStopWordManager,
    wordShift: IWordShift) {
    /* set components */
    this.dataStorageManager = dataStorageManager;
    this.indexManager = indexManager;
    this.stopWordManager = stopWordManager;
    this.wordShift = wordShift;
  }
  public run(): void {
    /* Initialize Data Storage Manager */
    this.dataStorageManager.init()
    .then(() => {
      console.log(this.dataStorageManager.length());
      for (let lineNumber = 0; lineNumber < this.dataStorageManager.length(); lineNumber++) {
        const line = this.dataStorageManager.line(lineNumber);
        const words = line.split(" ");

        for (let pos = 0; pos < words.length; pos++) {
          this.indexManager.map(words[pos], line, pos);
        }
      }

      for (const w of this.indexManager.sortedWords()) {
        this.indexManager.occurrencesOfWord(w).map((tuple) => {
          if (tuple[0] && tuple[1]) {
            console.log(this.wordShift.shift(tuple[0].split(" "), tuple[1], 0).join(" "));
          }
        });
      }
    });

  }

  public setDataStorageManager(component: IDataStorageManager): void {
    this.dataStorageManager = component;
  }
  public setIndexManager(component: IIndexManager): void {
    this.indexManager = component;
  }
  public setStopWordManager(component: IStopWordManager): void {
    this.stopWordManager = component;
  }
  public setWordShift(component: IWordShift): void {
    this.wordShift = component;
  }
}

export default KwicManager;
