import { Calculator } from "./Calculator.js";
import { describe, test, expect, it } from "vitest";

describe("Test the sum method of the Calculator class", () => {

    // Parameterized testing example
    it.each([
        { a: 2, b: 6, expected: 8 },
        { a: 7, b: -3, expected: 4 },
    ])("should return $expected when adding $a and $b", ({ a, b, expected }) => {
        expect(Calculator.sum(a, b)).toBe(expected);
    });

    test("Should return correct sum", () => {
        expect(Calculator.sum(2, 6)).toBe(8);
    });

    test("should return correct sum when negative number", () => {
        expect(Calculator.sum(7, -3)).toBe(4);
    });

    test("should be close to", () => {
        expect(Calculator.sum(3.4, 4.5)).toBeCloseTo(7.9);
    });
});

describe("Test the subtract method of the Calculator class", () => {
    test("should return correct result", () => {
        expect(Calculator.subtract(4, 4)).toBe(0);
    });

    test("should return negative number", () => {
        expect(Calculator.subtract(4, 8)).toBe(-4);
    });
});

describe("group for multiply method of the Calculator class", () => {
    test("should return correct result", () => {
        expect(Calculator.multiply(2, 5)).toBe(10);
    });

    test("should return negative result if one of params is negative", () => {
        expect(Calculator.multiply(5, -4)).toBe(-20);
    });
});

describe("group for divide method of the Calculator class", () => {
    test("should return correct result", () => {
        expect(Calculator.divide(2, 2)).toBe(1);
    });

    test("should return a fraction", () => {
        expect(Calculator.divide(2, 4)).toBe(0.5);
    });

    test("should return negative number", () => {
        expect(Calculator.divide(4, -2)).toBe(-2);
    });

    test("should fail when dividing by zero", () => {
        expect(() => Calculator.divide(4, 0)).toThrow(Error);
        expect(() => Calculator.divide(4, 0)).toThrow("Division by zero");
    });
});
