import { CurrencyAPI } from "./CurrencyAPI.js";

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
        // input tofixed 2
        // try {
            
        // } catch (error) {
        //     throw new Error(error)
        // }
        // return tofixed 2
    }
}


