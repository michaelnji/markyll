import { wordLength } from "../lib/functions";

test("expects wordLength to be a function", () => {
  expect(wordLength).toBeDefined();
});
test("expects wordLength to be a function", () => {
  expect(wordLength("Mike is a boy")).toEqual(4);
});
