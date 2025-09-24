import { CurrencyAPI } from "./utils/CurrencyAPI.js";

export class CurrencyCalculator {
    private _API: CurrencyAPI;
    private _currency!: string;

    constructor(currency: "string", API: CurrencyAPI) {
        this._API = API;
        this.setCurrency(currency);
    }

    private setCurrency(currency: string) {
        if (currency.length !== 3) {
            throw new Error();
        }
        this._currency = currency.toUpperCase();
    }

    async convert(amount: number) {
        if (amount < 0) {
            throw new Error();
        }

        const currencies = await this._API.getCurrencies(this._currency);

        let result = [];
        for (const [k, v] of Object.entries(currencies.data)) {
            const { code, value } = v;

            result.push({ code, value: Number((value * amount).toFixed(2)) });
        }

        return result;
    }
}
