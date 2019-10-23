import IWordShift from "../interfaces/IWordShift";
declare class WordShift implements IWordShift {
    shift(words: string[], pos: number, target: number): string[];
    private shiftRight;
    private shiftLeft;
}
export default WordShift;
