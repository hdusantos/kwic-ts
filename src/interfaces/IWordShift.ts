interface IWordShift {
  shift(words: string[], pos: number, target: number): string[];
  shiftRight(l: string[], r: string[], target: number): string[];
  shiftLeft(l: string[], r: string[], target: number): string[];
}

export default IWordShift;
