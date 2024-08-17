import { add } from "./utils";

describe("String Calculator - add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  test('should return the number for a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum for two numbers', () => {
    expect(add('1,4')).toBe(5);
  });

  test('should handle new lines as delimiters', () => {
    expect(add('1\n2,5')).toBe(8);
  });
});
