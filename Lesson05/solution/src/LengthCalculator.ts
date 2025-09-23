export class LengthCalculator {
    private _value: number;
    private _system: "Metric" | "Imperial";

    constructor(value: number, system: "Metric" | "Imperial") {
        this._value = value;
        this._system = system;
    }

    convert(): number {
        const result = this._system === "Metric" ? this._value / 2.54 : this._value * 2.54;
        return Number(result.toFixed(2));
    }
}
