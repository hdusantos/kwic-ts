/* Interfaces */
import IDataStorageManager from "./interfaces/IDataStorageManager";
import IIndexManager from "./interfaces/IIndexManager";
import IOutputManager from "./interfaces/IOutputManager";
import IStopWordManager from "./interfaces/IStopWordManager";
import IWordShift from "./interfaces/IWordShift";
/* App */
import Kwic from "./kwicManager/KwicManager";

export {
  IDataStorageManager,
  IIndexManager,
  IOutputManager,
  IStopWordManager,
  IWordShift,
};

export default Kwic;
