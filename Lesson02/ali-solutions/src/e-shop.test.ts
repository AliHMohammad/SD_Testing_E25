import { describe, it, expect } from "vitest";
import { eShopDiscount } from "./e-shop.js";


describe('e-shop discount group', () => {
    
    // Positive testing
    it.each([
        0.01,
        0.02,
        150.50,
        299.99,
        300
    ])("should not give discount", (purchase: number) => {
        expect(eShopDiscount(purchase)).toBe(0);
    });

    it.each([
        300.01,
        300.02,
        550.50,
        799.99,
        800
    ])("should give 5% discount", (purchase: number) => {
        expect(eShopDiscount(purchase)).toBe(5);
    });

    it.each([
        800.01,
        800.02,
        1000,
    ])("should give 10% discount", (purchase: number) => {
        expect(eShopDiscount(purchase)).toBe(10);
    });

    // Negative testing
    it.each([
        0,
        -0.01,
        -0.02
        -1,
        -100,
    ])("should throw error", (purchase: number) => {
        expect(() => eShopDiscount(purchase)).toThrow(Error);
    });

})
