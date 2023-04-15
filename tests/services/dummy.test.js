import { execute } from "../../src/services/dummy-service";
import { helper } from "../../src/services/helper-service";
jest.mock("../../src/services/helper-service.js");
// test('Name',()=>{})
test("result is true and returns Learning Js", () => {
  helper.mockReturnValue(false);
  const result = execute();
  expect(result).toBe("Learning JS");
});

test("result is false and returns Learning ReactJs", () => {
  helper.mockReturnValue(true);
  const result = execute();
  expect(result).toBe("learning ReactJs");
});
