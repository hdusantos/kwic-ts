import "jest";
import WordShift from "../../src/components/WordShift";

test("Successfully created instance", () => {
  const wordShift = new WordShift();
  expect(wordShift).toBeInstanceOf(WordShift);
});

test("Should return \"of Reusable OO Software...\" when we shift the Software word to the 20th position", () => {
  const wordShift = new WordShift();
  const title = "Design Patterns Elements of Reusable OO Software".split(" ");
  const r1 = ["of", "Reusable", "OO", "Software", "Design", "Patterns", "Elements"];

  expect(wordShift.shift(title, 6, 20)).toEqual(r1);
});

test("Should return \"OO Software Design...\" when we shift the Pattern  word to the 30th position", () => {
  const wordShift = new WordShift();
  const title = "Design Patterns Elements of Reusable OO Software".split(" ");
  const r1 = ["OO", "Software", "Design", "Patterns", "Elements", "of", "Reusable"];

  expect(wordShift.shift(title, 1, 30)).toEqual(r1);
});

test("Fill a string with spaces", () => {
  const wordShift = new WordShift();
  const l = ["abc", "defg", "hijk"];
  const r = wordShift.shift(l, 1, 2);

  expect(r).toEqual(["defg", "hijk", "abc"]);
});
