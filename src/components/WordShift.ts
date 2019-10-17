import IWordShift from "../interfaces/IWordShift";

class WordShift implements IWordShift {
  shift(words: string[], pos: number, target: number): string[] {
    return ["=>>Word Shift:", ...words];
  }
}

export default WordShift;
