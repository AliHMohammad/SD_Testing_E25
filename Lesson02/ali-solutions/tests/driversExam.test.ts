import { describe, it, expect } from "vitest";
import { driversExam } from "../src/driversExam.js";

describe("group for drivers exam function - points", () => {
    // Positive tests for points
    it.each([
        { points: 90, errorCount: 0 },
        { points: 85, errorCount: 0 },
        { points: 86, errorCount: 0 },
        { points: 99, errorCount: 0 },
        { points: 100, errorCount: 0 },
    ])("should not repeat theory exam if points is above threshold", ({ errorCount, points }) => {
        expect(driversExam(points, errorCount).repeatTheory).toBe(false);
    });

    // Negative tests for points
    it.each([
        { points: 0, errorCount: 0 },
        { points: 1, errorCount: 0 },
        { points: 2, errorCount: 0 },
        { points: 44, errorCount: 0 },
        { points: 83, errorCount: 0 },
        { points: 84, errorCount: 0 },
    ])("should repeat theory exam if points is below threshold", ({ errorCount, points }) => {
        expect(driversExam(points, errorCount).repeatTheory).toBe(true);
    });
});

describe("group for drivers exam function - errorCount", () => {
    // Positive tests for errorCount
    it.each([
        { points: 90, errorCount: 0 },
        { points: 90, errorCount: 1 },
        { points: 90, errorCount: 2 },
    ])("should not repeat theory exam if errorCount is above threshold", ({ errorCount, points }) => {
        expect(driversExam(points, errorCount).repeatPractical).toBe(false);
    });

    // Negative tests for errorCount
    it.each([
        { points: 90, errorCount: 3 },
        { points: 90, errorCount: 4 },
        { points: 90, errorCount: 10 },
    ])("should repeat theory exam if errorCount is below threshold", ({ errorCount, points }) => {
        expect(driversExam(points, errorCount).repeatPractical).toBe(true);
    });
});

describe("group for drivers exam function - overall result", () => {
    // Positive tests for errorCount
    it.each([
        {
            points: 90,
            errorCount: 0,
            result: {
                extraDrivingLessons: false,
                licenseGranted: true,
                repeatPractical: false,
                repeatTheory: false,
            },
        },
        {
            points: 50,
            errorCount: 0,
            result: {
                extraDrivingLessons: false,
                licenseGranted: false,
                repeatPractical: false,
                repeatTheory: true,
            },
        },
        {
            points: 90,
            errorCount: 4,
            result: {
                extraDrivingLessons: false,
                licenseGranted: false,
                repeatPractical: true,
                repeatTheory: false,
            },
        },
        {
            points: 50,
            errorCount: 4,
            result: {
                extraDrivingLessons: true,
                licenseGranted: false,
                repeatPractical: true,
                repeatTheory: true,
            },
        },
    ])("should return the correct outcome depending on the errorCount and points given", ({ errorCount, points, result }) => {
        expect(driversExam(points, errorCount)).toEqual(result);
    });
});
