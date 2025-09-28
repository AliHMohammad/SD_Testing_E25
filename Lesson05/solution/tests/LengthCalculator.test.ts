import { test, expect, describe, it } from "vitest";
import { LengthCalculator } from "../src/LengthCalculator.js";

describe("group for LengthCalculator Class", () => {
    // Postive tests, Metric
    it.each([
        {
            system: "Imperial",
            value: 0,
            expected: 0,
        },
        {
            system: "Imperial",
            value: 1,
            expected: 2.54,
        },
        {
            system: "Imperial",
            value: 2,
            expected: 5.08,
        },
        {
            system: "Imperial",
            value: 50,
            expected: 127,
        },
        {
            system: "Imperial",
            value: 0.5,
            expected: 1.27,
        },
    ])("it should return correct value", ({ expected, system, value }) => {
        expect(new LengthCalculator(value, system).convert()).toBe(expected);
    });

    // Postive tests, Imperial
    it.each([
        {
            system: "Imperial",
            value: 0,
            expected: 0,
        },
        {
            system: "Imperial",
            value: 1,
            expected: 2.54,
        },
        {
            system: "Imperial",
            value: 2,
            expected: 5.08,
        },
        {
            system: "Imperial",
            value: 50,
            expected: 127,
        },
        {
            system: "Imperial",
            value: 0.5,
            expected: 1.27,
        },
    ])("it should return correct value", ({ expected, system, value }) => {
        expect(new LengthCalculator(value, system).convert()).toBe(expected);
    });

    // Negative tests
    it.each([
        {
            system: "Imperial",
            value: -0.01,
        },
        {
            system: "Imperial",
            value: -0.02,
        },
        {
            system: "Imperial",
            value: -1,
        },
        {
            system: "Imperial",
            value: -50,
        },
        {
            system: "Metric",
            value: -0.01,
        },
        {
            system: "Metric",
            value: -0.02,
        },
        {
            system: "Metric",
            value: -1,
        },
        {
            system: "Metric",
            value: -50,
        },
        {
            system: "Roman",
            value: 50,
        },
    ])("it should throw error", ({ system, value }) => {
        expect(() => new LengthCalculator(value, system).convert()).toThrow();
    });
});
