import { framePrice } from "./framePrice.js";
import { describe, it, expect } from "vitest";

describe("e-shop discount group", () => {
    // Positive testing, width
    it.each([
        { width: 30, height: 30 }, // minimum for both
        { width: 60, height: 30 }, // middle
        { width: 31, height: 30 },
        { width: 99, height: 30 },
        { width: 100, height: 30 }, // maximum w
    ])("Correct width should return a price", ({ width, height }) => {
        expect(framePrice(width, height)).toBeTruthy();
    });

    // Positive testing, height
    it.each([
        { width: 30, height: 45 }, // middle
        { width: 30, height: 31 },
        { width: 30, height: 59 },
        { width: 30, height: 60 }, // maximum h
    ])("Correct height should return a price", ({ width, height }) => {
        expect(framePrice(width, height)).toBeTruthy();
    });

    // Negative testing, width
    it.each([
        { width: -10, height: 30 },
        { width: -2, height: 30 },
        { width: -1, height: 30 },
        { width: 0, height: 30 },
        { width: 1, height: 30 },
        { width: 2, height: 30 },
        { width: 15, height: 30 },
        { width: 28, height: 30 },
        { width: 29, height: 30 },
        { width: 101, height: 30 },
        { width: 102, height: 30 },
        { width: 150, height: 30 },
    ])("incorrect width should return a price", ({ width, height }) => {
        expect(() => framePrice(width, height)).toThrow(Error);
    });

    // Negative testing, height
    it.each([
        { width: 30, height: -10 },
        { width: 30, height: -2 },
        { width: 30, height: -1 },
        { width: 30, height: 0 },
        { width: 30, height: 1 },
        { width: 30, height: 2 },
        { width: 30, height: 15 },
        { width: 30, height: 28 },
        { width: 30, height: 29 },
        { width: 30, height: 61 },
        { width: 30, height: 62 },
        { width: 30, height: 120 },
    ])("incorrect height should return a price", ({ width, height }) => {
        expect(() => framePrice(width, height)).toThrow(Error);
    });

    // Positive testing, surface
    it.each([
        { width: 40, height: 40, price: 3000 },
        { width: 40, height: 39, price: 3000 },
        { width: 40, height: 38, price: 3000 },
        { width: 40, height: 41, price: 3500 },
        { width: 40, height: 42, price: 3500 },
    ])("should return correct price", ({ width, height, price }) => {
        expect(framePrice(width, height)).toEqual(price);
    });
});
