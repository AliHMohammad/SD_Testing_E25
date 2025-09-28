import { expect, describe, it } from "vitest";
import { LengthCalculator } from "../src/LengthCalculator.js";
import { GradeCalculator } from "../src/GradeCalculator.js";

describe("group for LengthCalculator Class", () => {
    const calc = new GradeCalculator();

    // Postive tests, Denmark
    it.each([
        {
            country: "Denmark",
            grade: "12",
            expected: "A+",
        },
        {
            country: "Denmark",
            grade: "10",
            expected: "A",
        },
        {
            country: "Denmark",
            grade: "7",
            expected: "B",
        },
        {
            country: "Denmark",
            grade: "4",
            expected: "C",
        },
        {
            country: "Denmark",
            grade: "02",
            expected: "D",
        },
        {
            country: "Denmark",
            grade: "00",
            expected: "E",
        },
        {
            country: "Denmark",
            grade: "-3",
            expected: "F",
        },
    ])("it should return correct value", async ({ expected, country, grade }) => {
        expect(await calc.convert(grade, country)).toBe(expected);
    });

    // Postive tests, USA
    it.each([
        {
            country: "USA",
            expected: "12",
            grade: "A+",
        },
        {
            country: "USA",
            expected: "10",
            grade: "A",
        },
        {
            country: "USA",
            expected: "7",
            grade: "B",
        },
        {
            country: "USA",
            expected: "4",
            grade: "C",
        },
        {
            country: "USA",
            expected: "02",
            grade: "D",
        },
        {
            country: "USA",
            expected: "00",
            grade: "E",
        },
        {
            country: "USA",
            expected: "-3",
            grade: "F",
        },
    ])("it should return correct value", async ({ expected, country, grade }) => {
        expect(await calc.convert(grade, country)).toBe(expected);
    });

    // Negative tests
    it("should throw error for invalid source country", async () => {
        await expect(() => calc.convert("10", "Invalid")).rejects.toThrow();
    });

    it("should throw error for invalid Danish grade", async () => {
        await expect(() => calc.convert("11", "Denmark")).rejects.toThrow();
    });

    it("should throw error for invalid USA grade", async () => {
        await expect(() => calc.convert("G", "USA")).rejects.toThrow();
    });
});
