import { it, describe, expect } from "vitest";
import anagram from "../src/anagram.js";

describe("group for anagram", () => {
    it.each([
        { input: "god", inputTwo: "dog", expected: true },
        { input: "car", inputTwo: "cat", expected: false },
    ])("it should return correct value", async ({ expected, input, inputTwo }) => {
        expect(anagram(input, inputTwo)).toEqual(expected);
    });
});
