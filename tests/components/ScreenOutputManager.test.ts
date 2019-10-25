import "jest";
import ScreenOutputManager from "../../src/components/ScreenOutputManager";

test("Successfully created instance", () => {
  const output = new ScreenOutputManager();
  expect(output).toBeInstanceOf(ScreenOutputManager);
});
