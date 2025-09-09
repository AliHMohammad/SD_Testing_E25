import { describe, it, expect } from "vitest";
import { airlineDiscount } from "../src/airline.js";

describe("group for drivers exam function - overall result", () => {
    it.each([
        {
            // R1
            props: {
                age: 1,
                destinationToIndia: true,
                departureOnMonFri: true,
                stayingatleastSixDays: true,
            },
            result: 100,
        },
        {
            // R2
            props: {
                age: 10,
                destinationToIndia: true,
                departureOnMonFri: true,
                stayingatleastSixDays: false,
            },
            result: 40,
        },
        {
            // R3
            props: {
                age: 10,
                destinationToIndia: true,
                departureOnMonFri: true,
                stayingatleastSixDays: true,
            },
            result: 50,
        },
        {
            // R4
            props: {
                age: 20,
                destinationToIndia: true,
                departureOnMonFri: false,
                stayingatleastSixDays: false,
            },
            result: 20,
        },
        {
            // R5
            props: {
                age: 20,
                destinationToIndia: true,
                departureOnMonFri: false,
                stayingatleastSixDays: true,
            },
            result: 30,
        },
        {
            // R6
            props: {
                age: 20,
                destinationToIndia: true,
                departureOnMonFri: false,
                stayingatleastSixDays: true,
            },
            result: 30,
        },
        {
            // R7
            props: {
                age: 20,
                destinationToIndia: true,
                departureOnMonFri: true,
                stayingatleastSixDays: true,
            },
            result: 10,
        },
        {
            // R8
            props: {
                age: 20,
                destinationToIndia: false,
                departureOnMonFri: true,
                stayingatleastSixDays: false,
            },
            result: 0,
        },
        {
            // R9
            props: {
                age: 20,
                destinationToIndia: false,
                departureOnMonFri: true,
                stayingatleastSixDays: true,
            },
            result: 10,
        },
        {
            // R10
            props: {
                age: 20,
                destinationToIndia: false,
                departureOnMonFri: false,
                stayingatleastSixDays: false,
            },
            result: 25,
        },
        {
            // R11
            props: {
                age: 20,
                destinationToIndia: false,
                departureOnMonFri: false,
                stayingatleastSixDays: true,
            },
            result: 35,
        },
    ])("should return the correct discount depending on the props", ({ props, result }) => {
        expect(airlineDiscount(props)).toEqual(result);
    });
});
