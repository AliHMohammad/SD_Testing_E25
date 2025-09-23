export class TemperatureCalculator {
    private _value: number;
    private _system: "Celcius" | "Fahrenheit" | "Kelvin";

    constructor(value: number, system: "Celcius" | "Fahrenheit" | "Kelvin") {
        this._value = value;
        this._system = system;
    }

    convert(destinationSystem: "Celcius" | "Fahrenheit" | "Kelvin"): number {
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
            default:
                break;
        }
        
        return Number(result.toFixed(2));
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
