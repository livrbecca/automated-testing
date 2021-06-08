const findShortestString = require("./find-shortest-string");

test("findShortestString to return the shortest string length (number) in array", () => {
  expect(findShortestString(["hello", "its", "me"])).toBe("me");
});

test("findShortestString in the case of a tie, returns the earlier string length in the array", () => {
  expect(findShortestString(["toodle", "two", "too"])).toBe("two");
});
