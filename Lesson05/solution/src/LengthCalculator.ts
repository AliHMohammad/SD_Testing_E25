export class LengthCalculator {
    private _value!: number;
    private _system!: "Metric" | "Imperial";

    constructor(value: number, system: string) {
        this.setValue(value);
        this.setSystem(system);
    }

    convert(): number {
        const result = this._system === "Metric" ? this._value / 2.54 : this._value * 2.54;
        return Math.round(result * 100) / 100;
    }

    private setSystem(system: string) {
        if (system !== "Metric" && system !== "Imperial") {
            throw new Error();
        }

        this._system = system;
    }

    private setValue(value: number) {
        if (value < 0) {
            throw new Error();
        }

        this._value = value;
    }
}
