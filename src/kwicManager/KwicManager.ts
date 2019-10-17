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
    this.dataStorageManager.init();

    /* this.stopWordManager.stopWord() */


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
