import { expect, describe, test } from "vitest";
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
        expect(convertRomanToDecimal("CLOIX")).toBe("Unknown roman number: O");
    });

    test('should not return decimal if invalid character', () => {
        expect(convertRomanToDecimal("CLIIX")).toBe("Invalid subtractive pattern: IIX");
    })

    test('should not return decimal for unrepeatable characters', () => {
        expect(convertRomanToDecimal("MLL")).toBe("Invalid repetition of L");
        expect(convertRomanToDecimal("VV")).toBe("Invalid repetition of V");
        expect(convertRomanToDecimal("DD")).toBe("Invalid repetition of D");
    })

    test('should not return decimal for characters only repeatable 3 times', () => {
        expect(convertRomanToDecimal("IIII")).toBe("Invalid repetition of I");
        expect(convertRomanToDecimal("XXXX")).toBe("Invalid repetition of X");
        expect(convertRomanToDecimal("CCCC")).toBe("Invalid repetition of C");
        expect(convertRomanToDecimal("MMMM")).toBe("Invalid repetition of M");
    })
});
