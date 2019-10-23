interface IDataStorageManager {
    /**
     * Initialize the DataStorageManager
     */
    init(): Promise<void>;
    /**
     * Get a specific item on the data storage
     * @param {number} idx index for a data storage item
     * @return {string} a specific item on the data storage (String)
     */
    line(idx: number): string;
    /**
     * The total number of lines of a data storage
     * @return {number} total number of lines (Int)
     */
    length(): number;
}
export default IDataStorageManager;
