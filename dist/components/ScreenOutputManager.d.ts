import IOutputManager from "../interfaces/IOutputManager";
declare class ScreenOutputManager implements IOutputManager {
    export(data: string[]): void;
}
export default ScreenOutputManager;
