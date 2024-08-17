import { add } from "./utils";

describe("String Calculator - add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
