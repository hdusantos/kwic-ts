import "jest";
import IndexManager from "../../src/components/IndexManager";

test("Successfully created instance", () => {
  const idxManager = new IndexManager();
  expect(idxManager).toBeInstanceOf(IndexManager);
});

test("Return false when we call the isEmpty method", () => {
  const idxManager = new IndexManager();
  expect(idxManager.isEmpty()).toBe(true);
});

test("Return a list of sorted words when we call sortedWords", () => {
  const idxManager = new IndexManager();
  idxManager.map("Programming", "Programming in Scala", 0);
  idxManager.map("Programming", "Object-oriented Programming", 2);
  idxManager.map("Scala", "Programming in Scala", 2);
  idxManager.map("Java", "Java is also cool, isn't it?", 0);

  const words = idxManager.sortedWords();

  expect(words.length).toBe(3);
  expect(words).toEqual(["Java", "Programming", "Scala"]);
});
