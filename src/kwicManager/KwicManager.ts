/* Interfaces */
import IDataStorageManager from "../interfaces/IDataStorageManager";
import IIndexManager from "../interfaces/IIndexManager";
import IStopWordManager from "../interfaces/IStopWordManager";
import IWordShift from "../interfaces/IWordShift";
import IKwicManager from "./IKwicManager";

/* Components */
import FileBasedStorageManager from "../../src/components/FileBasedStorageManager";
import IndexManager from "../../src/components/IndexManager";
import StopWordManager from "../../src/components/StopWordManager";
import WordShift from "../../src/components/WordShift";

class KwicManager implements IKwicManager {
  private dataStorageManager: IDataStorageManager;
  private indexManager: IIndexManager;
  private stopWordManager: IStopWordManager;
  private wordShift: IWordShift;

  constructor() {
    /* Create components instance*/
    this.dataStorageManager = new FileBasedStorageManager();
    this.indexManager = new IndexManager();
    this.stopWordManager = new StopWordManager("src/resources/stop_words.txt");
    this.wordShift = new WordShift();
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

      /* Output */
      for (const word of this.indexManager.sortedWords()) {
        this.indexManager.occurrencesOfWord(word).map((tuple) => {
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
