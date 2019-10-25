/* Interfaces */
import IDataStorageManager from "../interfaces/IDataStorageManager";
import IIndexManager from "../interfaces/IIndexManager";
import IOutputManager from "../interfaces/IOutputManager";
import IStopWordManager from "../interfaces/IStopWordManager";
import IWordShift from "../interfaces/IWordShift";
import IKwicManager from "./IKwicManager";

/* Components */
import FileBasedStorageManager from "../components/FileBasedStorageManager";
import IndexManager from "../components/IndexManager";
import ScreenOutputManager from "../components/ScreenOutputManager";
import StopWordManager from "../components/StopWordManager";
import WordShift from "../components/WordShift";

import path from "path";

class KwicManager implements IKwicManager {
  private dataStorageManager: IDataStorageManager;
  private indexManager: IIndexManager;
  private stopWordManager: IStopWordManager;
  private wordShift: IWordShift;
  private outputManager: IOutputManager;

  constructor() {
    /* Create components instance*/
    this.dataStorageManager = new FileBasedStorageManager();
    this.indexManager = new IndexManager();
    this.stopWordManager = new StopWordManager(path.resolve(__dirname, "../resources/stop_words.txt"));
    this.wordShift = new WordShift();
    this.outputManager = new ScreenOutputManager();
  }

  public run(): void {
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
        const result: string[] = [];
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
  public setOutputManger(component: IOutputManager): void {
    this.outputManager = component;
  }
}

export default KwicManager;
