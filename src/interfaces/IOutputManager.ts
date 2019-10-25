interface IOutputManager {
  /**
   * @param {string[]} data Array with the result of kwic
   * @return {void}
   */
  export(data: string[]): void;
}

export default IOutputManager;
