import { expect, describe, it } from "vitest";
import { TemperatureCalculator } from "../src/TemperatureCalculator.js";

describe("TemperatureCalculator", () => {
    // Celsius to Fahrenheit
    it.each([
        { value: 0, expected: 32 },
        { value: 100, expected: 212 },
        { value: -40, expected: -40 },
        { value: 25, expected: 77 },
    ])("should convert Celsius to Fahrenheit correctly", ({ value, expected }) => {
        expect(new TemperatureCalculator(value, "Celcius").convert("Fahrenheit")).toBe(expected);
    });

    // Celsius to Kelvin
    it.each([
        { value: 0, expected: 273.15 },
        { value: 100, expected: 373.15 },
        { value: -273.15, expected: 0 },
        { value: 25, expected: 298.15 },
    ])("should convert Celsius to Kelvin correctly", ({ value, expected }) => {
        expect(new TemperatureCalculator(value, "Celcius").convert("Kelvin")).toBe(expected);
    });

    // Fahrenheit to Celsius
    it.each([
        { value: 32, expected: 0 },
        { value: 212, expected: 100 },
        { value: -40, expected: -40 },
        { value: 77, expected: 25 },
    ])("should convert Fahrenheit to Celsius correctly", ({ value, expected }) => {
        expect(new TemperatureCalculator(value, "Fahrenheit").convert("Celcius")).toBe(expected);
    });

    // Fahrenheit to Kelvin
    it.each([
        { value: 32, expected: 273.15 },
        { value: 212, expected: 373.15 },
        { value: -459.67, expected: 0 },
        { value: 77, expected: 298.15 },
    ])("should convert Fahrenheit to Kelvin correctly", ({ value, expected }) => {
        expect(new TemperatureCalculator(value, "Fahrenheit").convert("Kelvin")).toBe(expected);
    });

    // Kelvin to Celsius
    it.each([
        { value: 273.15, expected: 0 },
        { value: 373.15, expected: 100 },
        { value: 0, expected: -273.15 },
        { value: 298.15, expected: 25 },
    ])("should convert Kelvin to Celsius correctly", ({ value, expected }) => {
        expect(new TemperatureCalculator(value, "Kelvin").convert("Celcius")).toBe(expected);
    });

    // Kelvin to Fahrenheit
    it.each([
        { value: 273.15, expected: 32 },
        { value: 373.15, expected: 212 },
        { value: 0, expected: -459.67 },
        { value: 298.15, expected: 77 },
    ])("should convert Kelvin to Fahrenheit correctly", ({ value, expected }) => {
        expect(new TemperatureCalculator(value, "Kelvin").convert("Fahrenheit")).toBe(expected);
    });

    // Error handling tests
    it("should throw error for invalid source system", () => {
        expect(() => new TemperatureCalculator(25, "InvalidSystem")).toThrow();
    });

    it("should throw error for invalid destination system", () => {
        const calculator = new TemperatureCalculator(25, "Celcius");
        expect(() => calculator.convert("InvalidSystem")).toThrow();
    });

    // Edge cases
    it.each([
        { system: "Celcius", value: -273.15, destination: "Fahrenheit", expected: -459.67 },
        { system: "Fahrenheit", value: -459.67, destination: "Celcius", expected: -273.15 },
        { system: "Kelvin", value: 0, destination: "Celcius", expected: -273.15 },
    ])("should handle absolute zero conversions", ({ system, value, destination, expected }) => {
        expect(new TemperatureCalculator(value, system).convert(destination)).toBe(expected);
    });
});
