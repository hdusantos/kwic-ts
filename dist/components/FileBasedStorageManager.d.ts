import IDataStorageManager from "../interfaces/IDataStorageManager";
declare class FileBasedStorageManager implements IDataStorageManager {
    private lines;
    init(): Promise<void>;
    line(idx: number): string;
    length(): number;
    setGetSourceName(func: () => Promise<string>): void;
    private getSourceName;
}
export default FileBasedStorageManager;
