import { expect, describe, it } from "vitest";
import { WeightCalculator } from "../src/WeightCalculator.js";

describe("group for WeightCalculator Class", () => {
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
            expected: 2.21,
        },
        {
            system: "Imperial",
            value: 2,
            expected: 4.42,
        },
        {
            system: "Imperial",
            value: 50,
            expected: 110.5,
        },
        {
            system: "Imperial",
            value: 0.5,
            expected: 1.11,
        },
    ])("it should return correct value", ({ expected, system, value }) => {
        expect(new WeightCalculator(value, system).convert()).toBe(expected);
    });

    // Postive tests, Metric
    it.each([
        {
            system: "Metric",
            value: 0,
            expected: 0,
        },
        {
            system: "Metric",
            value: 1,
            expected: 0.45,
        },
        {
            system: "Metric",
            value: 2,
            expected: 0.9,
        },
        {
            system: "Metric",
            value: 50,
            expected: 22.62,
        },
        {
            system: "Metric",
            value: 0.5,
            expected: 0.23,
        },
    ])("it should return correct value", ({ expected, system, value }) => {
        expect(new WeightCalculator(value, system).convert()).toBe(expected);
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
        expect(() => new WeightCalculator(value, system).convert()).toThrow();
    });
});
