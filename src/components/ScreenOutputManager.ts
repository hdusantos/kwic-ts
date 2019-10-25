import IOutputManager from "../interfaces/IOutputManager";

class ScreenOutputManager implements IOutputManager {
  public export(data: string[]): void {
    for (const line of data) {
      console.log(line);
    }
  }
}

export default ScreenOutputManager;
