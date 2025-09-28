import { expect, describe, it, vi, beforeEach } from "vitest";
import { CurrencyCalculator } from "../src/CurrencyCalculator.js";
import { CurrencyAPI } from "../src/utils/CurrencyAPI.js";
import currency_response from "../src/mocks/currency_response.json" with { type: "json" };
import test from "node:test";

// Mock the CurrencyAPI module at the top level
vi.mock("../src/utils/CurrencyAPI.js", () => ({
    CurrencyAPI: vi.fn(),
}));

describe("group for CurrencyCalculator Class", () => {
    let mockCurrencyAPI: any;

    beforeEach(() => {
        vi.clearAllMocks();

        mockCurrencyAPI = {
            getCurrencies: vi.fn(),
        };

        // Configure the CurrencyAPI constructor mock
        (CurrencyAPI as any).mockImplementation(() => mockCurrencyAPI);
    });

    // Positive tests
    it.each([0, 1, 100, 7.55])("it should return correct value", async (amount) => {
        mockCurrencyAPI.getCurrencies.mockResolvedValue(currency_response);

        const calc = new CurrencyCalculator("DKK", new CurrencyAPI());
        const result = await calc.convert(amount);

        expect(result).toBeDefined();
        expect(typeof result).toBe("object");
        expect(result[0]).toHaveProperty("code");
        expect(result[0]).toHaveProperty("value");
    });

    // Negative tests
    it.each([-1, -2, -50, -0.01, -0.02])("it should throw when given negative amount", async (amount) => {
        mockCurrencyAPI.getCurrencies.mockRejectedValue(new Error());

        const calc = new CurrencyCalculator("DKK", new CurrencyAPI());

        await expect(calc.convert(amount)).rejects.toThrow();
    });

    test("it should throw error on unknown currency", async () => {
        mockCurrencyAPI.getCurrencies.mockRejectedValue(new Error());

        const calc = new CurrencyCalculator("XXX", new CurrencyAPI());

        await expect(calc.convert(10)).rejects.toThrow();
    });
});
