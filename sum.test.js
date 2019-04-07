const sum = require("./sum");

describe("the sum function", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("no arguments throws error", () => {
    // Need to pass an arrow function to
    expect(() => sum()).toThrowError("Must supply only numeric arguments");
  });

  it("string arg throws error", () => {
    expect(() => sum(3, "a")).toThrowError("Must supply only numeric arguments");
  });

  it("true args throw error", () => {
    expect(() => sum(true, true)).toThrowError("Must supply only numeric arguments");
  });

  it("add three args", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  it("third arg is string throws errror", () => {
    expect(() => sum(1, 2, "x")).toThrowError("Must supply only numeric arguments");
  });

  it("add seven args", () => {
    expect(sum(1, 2, -2, 3, -3, 4, -4)).toBe(1);
  });

  it("seventh arg is true throw error", () => {
    expect(() => sum(1, 2, -2, 3, -3, 4, true)).toThrowError("Must supply only numeric arguments");
  });
});
