import "jest";
import FileBasedStorageManager from "../../src/components/FileBasedStorageManager";
import IndexManager from "../../src/components/IndexManager";
import StopWordManager from "../../src/components/StopWordManager";
import WordShift from "../../src/components/WordShift";
import KwicManager from "../../src/kwicManager/KwicManager";

test("Successfully created instance", () => {
  const fileStorage = new FileBasedStorageManager();
  const idxManager = new IndexManager();
  const stopWords = new StopWordManager("src/resources/stop_words.txt");
  const wordShift = new WordShift();

  const kwic = new KwicManager(
    fileStorage,
    idxManager,
    stopWords,
    wordShift,
  );

  expect(kwic).toBeInstanceOf(KwicManager);
});
