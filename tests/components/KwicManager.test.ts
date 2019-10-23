import "jest";
import FileBasedStorageManager from "../../src/components/FileBasedStorageManager";
import IndexManager from "../../src/components/IndexManager";
import StopWordManager from "../../src/components/StopWordManager";
import WordShift from "../../src/components/WordShift";
import KwicManager from "../../src/kwicManager/KwicManager";

test("Successfully created instance", () => {
  const kwic = new KwicManager();
  expect(kwic).toBeInstanceOf(KwicManager);
});

test("Execute kwic run", () => {
  const myFileDir = "tests/resources/papers.txt";

  const fileStorage = new FileBasedStorageManager();
  const mock: () => Promise<string> = jest.fn(() => new Promise((resolve) => resolve(myFileDir)));
  fileStorage.setGetSourceName(mock);

  const idxManager = new IndexManager();
  const stopWords = new StopWordManager("src/resources/stop_words.txt");
  const wordShift = new WordShift();

  const kwic = new KwicManager();
  kwic.setDataStorageManager(fileStorage);
  kwic.setIndexManager(idxManager);
  kwic.setStopWordManager(stopWords);
  kwic.setWordShift(wordShift);

  kwic.run();

  expect(kwic).toBeInstanceOf(KwicManager);
});
