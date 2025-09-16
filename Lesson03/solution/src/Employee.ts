export type TDepartment = "HR" | "Finance" | "IT" | "Sales" | "General Services";

export enum EducationalLevel {
    None = 0,
    Primary = 1,
    Secondary = 2,
    Tertiary = 3,
}

export class Employee {
    _cpr!: string;
    _firstName!: string;
    _lastName!: string;
    _department!: TDepartment;
    _baseSalary!: number;
    _educationalLevel!: EducationalLevel;
    _dateOfBirth!: string;
    _dateOfEmployment!: string;
    _country!: string;

    constructor(
        cpr: string,
        firstName: string,
        lastName: string,
        department: TDepartment,
        baseSalary: number,
        educationalLevel: EducationalLevel,
        dateOfBirth: Date,
        dateOfEmployment: Date,
        country: string
    ) {
        this.setCPR(cpr);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setDepartment(department);
        this.setBaseSalary(baseSalary);
        this.setEducationalLevel(educationalLevel);
        this.setDateOfBirth(dateOfBirth);
        this.setDateOfEmployment(dateOfEmployment);
        this.setCountry(country);
    }

    setCPR(cpr: string) {
        if (cpr.length !== 10) {
            throw new Error();
        }
        this._cpr = cpr;
    }

    setFirstName(firstName: string) {
        if (!firstName || firstName.length > 30 || /\d/.test(firstName)) {
            throw new Error();
        }

        this._firstName = firstName;
    }

    setLastName(lastName: string) {
        if (!lastName || lastName.length > 30 || /\d/.test(lastName)) {
            throw new Error();
        }

        this._lastName = lastName;
    }

    setDepartment(department: TDepartment) {
        this._department = department;
    }

    setBaseSalary(salary: number) {
        if (salary < 20000 || salary > 100000) {
            throw new Error();
        }

        this._baseSalary = Number(salary.toFixed(2));
    }

    setEducationalLevel(educationalLevel: EducationalLevel) {
        this._educationalLevel = educationalLevel;
    }

    setDateOfBirth(dob: Date) {
        const now = new Date();
        const difference = now.getFullYear() - dob.getFullYear();
        if (difference < 18) {
            throw new Error();
        }

        this._dateOfBirth = this.formatDate(dob);
    }

    setDateOfEmployment(doe: Date) {
        const now = new Date();
        if (now.getMilliseconds() < doe.getMilliseconds()) {
            throw new Error();
        }
        this._dateOfEmployment = this.formatDate(doe);
    }

    setCountry(country: string) {
        this._country = country;
    }

    get firstName(): string {
        return this._firstName;
    }

    get cpr(): string {
        return this._cpr;
    }

    get lastName(): string {
        return this._lastName;
    }

    get department(): string {
        return this._department;
    }

    get educationalLevel(): string {
        return EducationalLevel[this._educationalLevel].toLowerCase();
    }

    get baseSalary(): number {
        return this._baseSalary + this._educationalLevel * 1220;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    get dateOfEmployment(): string {
        return this._dateOfEmployment;
    }

    get country(): string {
        return this._country;
    }

    getDiscount(): number {
        const currentYear = new Date().getFullYear();
        const employmentYear = new Date(this.dateOfEmployment).getFullYear();

        return (currentYear - employmentYear) * 0.5;
    }

    getShippingCosts(): number {
        switch (this._country) {
            case "Denmark":
            case "Norway":
            case "Sweden":
                return 0;
            case "Iceland":
            case "Finland":
                return 50;
            default:
                return 100;
        }
    }

    private formatDate(date: Date): string {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    }
}
