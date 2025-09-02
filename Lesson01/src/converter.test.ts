import { expect, describe, test, it } from "vitest";
import { convertRomanToDecimal } from "./converter.js";

describe("group for roman converter", () => {
    test("should return the correct value", () => {
        expect(convertRomanToDecimal("IV")).toBe(4);
        expect(convertRomanToDecimal("MDCCCLXVII")).toBe(1867);
    });

    test("should return correct value by subtracting", () => {
        expect(convertRomanToDecimal("XCIV")).toBe(94);
        expect(convertRomanToDecimal("MCD")).toBe(1400);
    });

    test("should not return decimal if invalid character", () => {
        expect(() => convertRomanToDecimal("CLOIX")).toThrow(Error);
        expect(() => convertRomanToDecimal("CLOIX")).toThrow("Unknown roman number: O");
    });

    test("should not return decimal if invalid character", () => {
        expect(() => convertRomanToDecimal("CLIIX")).toThrow(Error);
        expect(() => convertRomanToDecimal("CLIIX")).toThrow("Invalid subtractive pattern: IIX");
    });

    test("should not return decimal for unrepeatable characters", () => {
        expect(() => convertRomanToDecimal("MLL")).toThrow(Error);
        expect(() => convertRomanToDecimal("MLL")).toThrow("Invalid repetition of L");
        expect(() => convertRomanToDecimal("VV")).toThrow(Error);
        expect(() => convertRomanToDecimal("VV")).toThrow("Invalid repetition of V");
        expect(() => convertRomanToDecimal("DD")).toThrow(Error);
        expect(() => convertRomanToDecimal("DD")).toThrow("Invalid repetition of D");
    });

    test("should not return decimal for characters only repeatable 3 times", () => {
        expect(() => convertRomanToDecimal("IIII")).toThrow(Error);
        expect(() => convertRomanToDecimal("IIII")).toThrow("Invalid repetition of I");
        expect(() => convertRomanToDecimal("XXXX")).toThrow(Error);
        expect(() => convertRomanToDecimal("XXXX")).toThrow("Invalid repetition of X");
        expect(() => convertRomanToDecimal("CCCC")).toThrow(Error);
        expect(() => convertRomanToDecimal("CCCC")).toThrow("Invalid repetition of C");
        expect(() => convertRomanToDecimal("MMMM")).toThrow(Error);
        expect(() => convertRomanToDecimal("MMMM")).toThrow("Invalid repetition of M");
    });

    // Parameterized tests
    it.each([
        "CLOIX",
        "CLIIX",
        "MLL",
        "VV",
        "DD",
        "IIII",
        "XXXX",
        "CCCC",
        "MMMM"
    ])("should throw exception", (roman: string) => {
        expect(() => convertRomanToDecimal(roman)).toThrow(Error);
    });
});
