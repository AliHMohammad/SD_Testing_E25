import { it, describe, expect } from "vitest";
import { Employee, EducationalLevel, type TDepartment } from "../src/Employee.js";

const testEmployeeMock = {
    cpr: "1234061234",
    firstName: "Hjalte",
    lastName: "Jeppesen",
    department: "IT" as TDepartment,
    baseSalary: 30000,
    educationalLevel: EducationalLevel.Primary,
    dateOfBirth: new Date(1990, 2, 2),
    dateOfEmployment: new Date(2010, 5, 12),
    country: "Denmark",
};

describe("group for cpr", () => {
    const { baseSalary, country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName } = testEmployeeMock;

    // Positive tests
    it.each(["1234566789"])(
        "it should not throw an error and assign the name",
        (cprTest) => {
            expect(
                new Employee(cprTest, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)
            ).toBeDefined();
        }
    );

    // Negative tests
    it.each(["12345667890", "123456678", "0"])("it should throw an error when trying to assign the cpr", (cprTest) => {
        expect(
            () => new Employee(cprTest, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)
        ).toThrowError();
    });
});

describe("group for first name", () => {
    const { baseSalary, country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName, cpr } = testEmployeeMock;

    // Positive tests
    it.each(["A", "Bo", "Hjalte", "sddsdsdafadfdaasfadsdsdsdsdss", "sddsdsdafadfdaasfadsdsdsdsdsss", "Bo-Ole", "Bo Jensen"])(
        "it should not throw an error and assign the name",
        (firstNameTest) => {
            expect(
               new Employee(cpr, firstNameTest, lastName, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)
            ).toBeDefined();
        }
    );

    // Negative tests
    it.each(["", "Ali1234", "1234"])("it should throw an error when trying to assign the name", (firstNameTest) => {
        expect(
            () => new Employee(cpr, firstNameTest, lastName, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)
        ).toThrowError();
    });
});

describe("group for last name", () => {
    const { baseSalary, country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, cpr } = testEmployeeMock;

    // Positive tests
    it.each(["A", "Bo", "Hjalte", "sddsdsdafadfdaasfadsdsdsdsdss", "sddsdsdafadfdaasfadsdsdsdsdsss", "Bo-Ole", "Bo Jensen"])(
        "it should not throw an error and assign the name",
        (lastNameTest) => {
            const employee = new Employee(cpr, firstName, lastNameTest, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country);

            expect(employee.lastName).toBeTruthy();
            expect(employee.lastName).toBe(lastNameTest);
        }
    );

    // Negative tests
    it.each(["", "Ali1234", "1234"])("it should throw an error when trying to assign the name", (lastNameTest) => {
        expect(
            () => new Employee(cpr, firstName, lastNameTest, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country)
        ).toThrowError();
    });
});

describe("group for base salary", () => {
    const { country, dateOfBirth, dateOfEmployment, department, educationalLevel, firstName, lastName, cpr } = testEmployeeMock;

    // Positive tests
    it.each([20000, 20001, 50000, 100000, 99999])("it should not throw an error and assign the baseSalary", (baseSalaryTest) => {
        expect(
            new Employee(cpr, firstName, lastName, department, baseSalaryTest, educationalLevel, dateOfBirth, dateOfEmployment, country)
        ).toBeDefined();
    });

    // Negative tests
    it.each([10000, 19999, 100001, 100002, 150000])("it should not throw an error and assign the baseSalary", (baseSalaryTest) => {
        expect(
            () => new Employee(cpr, firstName, lastName, department, baseSalaryTest, educationalLevel, dateOfBirth, dateOfEmployment, country)
        ).toThrow();
    });

    // getSalary()
    it.each([
        { salary: 20000, expected: 21220 },
        { salary: 20001, expected: 21221 },
        { salary: 50000, expected: 51220 },
        { salary: 100000, expected: 101220 },
        { salary: 99999, expected: 101219 },
    ])("it should not throw an error and assign the baseSalary", ({ salary, expected }) => {
        const employee = new Employee(cpr, firstName, lastName, department, salary, educationalLevel, dateOfBirth, dateOfEmployment, country);

        expect(employee.baseSalary).toBe(expected);
    });
});

describe("group for getDiscount method", () => {
    const { country, dateOfBirth, department, educationalLevel, firstName, lastName, baseSalary, cpr } = testEmployeeMock;
    // Positive tests
    it.each([
        { yearsExperience: 10, expected: 5 },
        { yearsExperience: 1, expected: 0.5 },
        { yearsExperience: 3, expected: 1.5 },
        { yearsExperience: 30, expected: 15 },
        { yearsExperience: 100, expected: 50 },
    ])("it should get the expected discount", ({ expected, yearsExperience }) => {
        const year = new Date().getFullYear();
        const employmentDate = new Date(year - yearsExperience, 1, 1);

        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, employmentDate, country).getDiscount()).toBe(
            expected
        );
    });

    // Negative tests
    it.each([{ yearsExperience: 0, expected: 0 }])("it should not throw an error and return the expected result", ({ expected, yearsExperience }) => {
        const year = new Date().getFullYear();
        const employmentDate = new Date(year - yearsExperience, 1, 1);

        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, employmentDate, country).getDiscount()).toBe(
            expected
        );
    });
});

describe("group for getDiscount method", () => {
    // Positive tests
    it.each([
        { country: "Denmark", expected: 0 },
        { country: "Norway", expected: 0 },
        { country: "Sweden", expected: 0 },
        { country: "Iceland", expected: 50 },
        { country: "Finland", expected: 50 },
        { country: "Germany", expected: 100 },
        { country: "Russia", expected: 100 },
    ])("it should get the expected discount", ({ expected, country }) => {
        const { dateOfBirth, department, educationalLevel, firstName, lastName, baseSalary, dateOfEmployment, cpr } = testEmployeeMock;

        expect(
            new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country).getShippingCosts()
        ).toBe(expected);
    });

    // Negative tests. Nothing
});

describe("group for dateofBirth ", () => {
    const { country, department, educationalLevel, firstName, lastName, baseSalary, dateOfEmployment, cpr } = testEmployeeMock;

    // Positive tests
    it("should set dateOfBirth for a valid date in the past", () => {
        const dob = new Date(1990, 0, 1);
        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dob, dateOfEmployment, country)).toBeDefined();
    });

    it("should set dateOfBirth for a date exactly 18 years ago", () => {
        const now = new Date();
        const dob = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dob, dateOfEmployment, country)).toBeDefined();
    });

    // Negative tests
    it("should throw for a date less than 18 years ago", () => {
        const now = new Date();
        const dob = new Date(now.getFullYear() - 17, now.getMonth(), now.getDate());
        expect(() => new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dob, dateOfEmployment, country)).toThrow();
    });

    it("should throw for a date in the future", () => {
        const future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(() => new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, future, dateOfEmployment, country)).toThrow();
    });

    it("should format dateOfBirth as dd/MM/yyyy", () => {
        const dob = new Date(1985, 4, 9); // 9 May 1985
        const employee = new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dob, dateOfEmployment, country);
        expect(employee.dateOfBirth).toBe("09/05/1985");
    });
});

describe("group for employmentDate ", () => {
    const { country, department, educationalLevel, firstName, lastName, baseSalary, dateOfBirth, cpr } = testEmployeeMock;

    // Positive tests
    it("should set employmentDate for a valid date in the past", () => {
        const employment = new Date(1990, 0, 1);
        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, employment, country)).toBeDefined();
    });

    it("should set employmentDate for today", () => {
        const today = new Date();
        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, today, country)).toBeDefined();
    });

    it("should set employmentDate for yesterday", () => {
        const now = new Date();
        const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, yesterday, country)).toBeDefined();
    });

    // Negative tests
    it("should throw for a date in the future", () => {
        const now = new Date();
        const future = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate() - 1);

        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, future, country)).toBeDefined();
    });

    it("should throw for a date tomorrow", () => {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

        expect(new Employee(cpr, firstName, lastName, department, baseSalary, educationalLevel, dateOfBirth, tomorrow, country)).toBeDefined();
    });
});
