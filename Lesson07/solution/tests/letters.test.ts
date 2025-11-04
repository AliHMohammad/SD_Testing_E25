import { it, describe, expect } from "vitest";
import letters from "../src/letters.js";

describe("group for letters", () => {
    it.each([{ input: "cat", expected: { c: 1, a: 1, t: 1 } }, {expected: {b: 1, e: 2, t: 2, r: 1}, input: "better"}])("it should return correct value", async ({ expected, input }) => {
        expect(letters(input)).toEqual(expected);
    });
});
