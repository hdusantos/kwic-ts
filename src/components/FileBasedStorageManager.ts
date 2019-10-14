import fs from "fs";
import readline from "readline";
import IDataStorageManager from "../interfaces/IDataStorageManager";

class FileBasedStorageManager implements IDataStorageManager {
  private lines: string[] = [];

  public init(): void {
    const readNameFile = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readNameFile.question(`Enter the name of the input file:`, (name) => {
      console.log(`Lendo ${name}!`);
      readNameFile.close();
    });

    fs.readFileSync(name, "utf-8");
  }

  public line(idx: number): string {
    return this.lines[idx];
  }

  public length(): number {
    return this.lines.length;
  }

}

export default FileBasedStorageManager;
