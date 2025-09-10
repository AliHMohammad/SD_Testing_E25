import { it, describe, expect } from "vitest";
import { Employee, EducationalLevel, type TDepartment } from "../src/Employee.js";

const testEmployeeMock = {
    firstName: "Hjalte",
    lastName: "Jeppesen",
    department: "IT" as TDepartment,
    baseSalary: 30000,
    educationalLevel: EducationalLevel.Primary,
    dateOfBirth: new Date(1990, 2, 2),
    dateOfEmployment: new Date(2010, 5, 12),
    country: "Denmark",
};

describe("group for first name", () => {
    // Positive tests
    it.each(["A", "Bo", "Hjalte", "sddsdsdafadfdaasfadsdsdsdsdss", "sddsdsdafadfdaasfadsdsdsdsdsss", "Bo-Ole", "Bo Jensen"])(
        "it should not throw an error and assign the name",
        (firstNameTest) => {
            const { baseSalary, country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName } = testEmployeeMock;

            expect(() => new Employee(firstNameTest, lastName, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)).toBeDefined();
        }
    );

    // Negative tests
    it.each(["", "Ali1234", "1234"])("it should throw an error when trying to assign the name", (firstNameTest) => {
        const { baseSalary, country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName } = testEmployeeMock;

        expect(() => new Employee(firstNameTest, lastName, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)).toThrowError();
    });
});

describe("group for last name", () => {
    // Positive tests
    it.each(["A", "Bo", "Hjalte", "sddsdsdafadfdaasfadsdsdsdsdss", "sddsdsdafadfdaasfadsdsdsdsdsss", "Bo-Ole", "Bo Jensen"])(
        "it should not throw an error and assign the name",
        (lastNameTest) => {
            const { baseSalary, country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName } = testEmployeeMock;

            const employee = new Employee(firstName, lastNameTest, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country);

            expect(employee.lastName).toBeTruthy();
            expect(employee.lastName).toBe(lastNameTest);
        }
    );

    // Negative tests
    it.each(["", "Ali1234", "1234"])("it should throw an error when trying to assign the name", (lastNameTest) => {
        const { baseSalary, country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName } = testEmployeeMock;

        expect(() => new Employee(firstName, lastNameTest, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)).toThrowError();
    });
});

describe("group for base salary", () => {
    // Positive tests
    it.each([20000, 20001, 50000, 100000, 99999])("it should not throw an error and assign the baseSalary", (baseSalaryTest) => {
        const { country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName } = testEmployeeMock;

        expect(() => new Employee(firstName, lastName, department, baseSalaryTest, educationalLevel, dateOfBirth, dateOfEmployment, country)).toBeDefined();
    });

    // Negative tests
    it.each([10000, 19999, 100001, 100002, 150000])("it should not throw an error and assign the baseSalary", (baseSalaryTest) => {
        const { country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName } = testEmployeeMock;

        expect(() => new Employee(firstName, lastName, department, baseSalaryTest, educationalLevel, dateOfBirth, dateOfEmployment, country)).toBeDefined();
    });

    // getSalary()
    it.each([
        { salary: 20000, expected: 21220 },
        { salary: 20001, expected: 21221 },
        { salary: 50000, expected: 51220 },
        { salary: 100000, expected: 101220 },
        { salary: 99999, expected: 101219 },
    ])("it should not throw an error and assign the baseSalary", ({ salary, expected }) => {
        const { country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName } = testEmployeeMock;

        const employee = new Employee(firstName, lastName, department, salary, educationalLevel, dateOfBirth, dateOfEmployment, country);

        expect(employee.baseSalary).toBe(expected);
    });
});



