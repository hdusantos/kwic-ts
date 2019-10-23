import IStopWordManager from "../interfaces/IStopWordManager";
declare class StopWordManager implements IStopWordManager {
    private words;
    constructor(fileName: string);
    stopWord(word: string): boolean;
    private searchWord;
}
export default StopWordManager;
