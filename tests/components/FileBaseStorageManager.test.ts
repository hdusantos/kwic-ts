import "jest";
import FileBasedStorageManager from "../../src/components/FileBasedStorageManager";

test("Successfully created instance", () => {
  const fileStorage = new FileBasedStorageManager();
  expect(fileStorage).toBeInstanceOf(FileBasedStorageManager);
});

test("Should read a local file", () => {
  const myFileDir = "tests/resources/papers.txt";
  const mock: () => Promise<string> = jest.fn(() => new Promise((resolve) => resolve(myFileDir)));

  const fileStorage = new FileBasedStorageManager();
  fileStorage.setGetSourceName(mock);
  fileStorage.init()
    .then(() => {
      expect(fileStorage.length()).toBeGreaterThan(0);
      expect(fileStorage.line(0)).toBe("Incremental model checking of delta-oriented software product lines");
    });
});
