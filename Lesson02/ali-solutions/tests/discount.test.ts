import { describe, it, expect } from "vitest";
import { discount } from "../src/discount.js";

describe("discount group", () => {
    // Positive testing
    it.each([100, 101, 150])("should give discount", (count: number) => {
        expect(discount(count)).toBe(20);
    });

    it.each([5, 6, 50, 98, 99])("should not give discount", (count: number) => {
        expect(discount(count)).toBe(0);
    });

    // Negative testing
    it.each([4, 1, 0, -1, -50, -150])("should throw error", (count: number) => {
        expect(() => discount(count)).toThrow(Error);
    });
});

