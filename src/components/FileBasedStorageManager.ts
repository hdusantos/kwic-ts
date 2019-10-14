import fs from "fs";
import readline from "readline";
import IDataStorageManager from "../interfaces/IDataStorageManager";

class FileBasedStorageManager implements IDataStorageManager {
  private lines: string[] = [];

  public async init(): Promise<void> {
    const fileName = await this.getSourceName();

    const text = fs.readFileSync(fileName, "utf-8");
    this.lines = text.split("\n");
  }

  public line(idx: number): string {
    return this.lines[idx];
  }

  public length(): number {
    return this.lines.length;
  }

  public setGetSourceName(func: () => Promise<string>): void {
    this.getSourceName = func;
  }

  private getSourceName(): Promise<string> {
    return new Promise((resolve, reject) => {
      const readNameFile = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      readNameFile.question(`Enter the name of the input file:`, (name) => {
        console.log(`Readind ${name}!`);
        resolve(name);
        readNameFile.close();
      });
    });
  }

}

export default FileBasedStorageManager;
