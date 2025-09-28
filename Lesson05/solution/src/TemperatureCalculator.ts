export class TemperatureCalculator {
    private _value: number;
    private _system!: "Celcius" | "Fahrenheit" | "Kelvin";

    constructor(value: number, system: string) {
        this._value = value;
        this.setSystem(system);
    }

    convert(destinationSystem: string): number {
        if (destinationSystem !== "Celcius" && destinationSystem !== "Fahrenheit" && destinationSystem !== "Kelvin") {
            throw new Error();
        }
        let result = 0;

        switch (this._system) {
            case "Celcius":
                if (destinationSystem === "Fahrenheit") {
                    result = this.celciusToFahrenheit(this._value);
                } else {
                    result = this.celciusToKelvin(this._value);
                }
                break;
            case "Fahrenheit":
                if (destinationSystem === "Celcius") {
                    result = this.fahrenheitToCelcius(this._value);
                } else {
                    result = this.fahrenheitToKelvin(this._value);
                }
                break;
            case "Kelvin":
                if (destinationSystem === "Fahrenheit") {
                    result = this.kelvinToFahrenheit(this._value);
                } else {
                    result = this.kelvinToCelcius(this._value);
                }
                break;
        }

        return Math.round(result * 100) / 100;
    }

    private setSystem(system: string) {
        if (system !== "Celcius" && system !== "Fahrenheit" && system !== "Kelvin") {
            throw new Error();
        }

        this._system = system;
    }

    private celciusToFahrenheit(celsius: number): number {
        return (celsius * 9) / 5 + 32;
    }

    private celciusToKelvin(celsius: number): number {
        return celsius + 273.15;
    }

    private fahrenheitToCelcius(fahrenheit: number): number {
        return ((fahrenheit - 32) * 5) / 9;
    }

    private fahrenheitToKelvin(fahrenheit: number): number {
        return ((fahrenheit - 32) * 5) / 9 + 273.15;
    }

    private kelvinToCelcius(kelvin: number): number {
        return kelvin - 273.15;
    }

    private kelvinToFahrenheit(kelvin: number): number {
        return ((kelvin - 273.15) * 9) / 5 + 32;
    }
}
