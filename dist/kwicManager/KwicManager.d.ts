import IDataStorageManager from "../interfaces/IDataStorageManager";
import IIndexManager from "../interfaces/IIndexManager";
import IStopWordManager from "../interfaces/IStopWordManager";
import IWordShift from "../interfaces/IWordShift";
import IKwicManager from "./IKwicManager";
declare class KwicManager implements IKwicManager {
    private dataStorageManager;
    private indexManager;
    private stopWordManager;
    private wordShift;
    constructor();
    run(): void;
    setDataStorageManager(component: IDataStorageManager): void;
    setIndexManager(component: IIndexManager): void;
    setStopWordManager(component: IStopWordManager): void;
    setWordShift(component: IWordShift): void;
}
export default KwicManager;
