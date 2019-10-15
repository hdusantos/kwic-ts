import "jest";
import StopWordManager from "../../src/components/StopWordManager";

test("Successfully created instance", () => {
  const stopWords = new StopWordManager("src/resources/stop_words.txt");
  expect(stopWords).toBeInstanceOf(StopWordManager);
});

test("Should find a word", () => {
  const stopWords = new StopWordManager("src/resources/stop_words.txt");
  expect(stopWords.stopWord("a")).toBe(true);
});
