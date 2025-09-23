export class CurrencyAPI {
    private _APIKey: string;

    constructor() {
        this._APIKey = process.env.API_KEY || "";
    }

    // TODO:
    async getCurrencies(amount: string, currency: string) {
        const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${this._APIKey}&currencies=${amount}&base_currency=${currency}`);
        return await response.json();
    }
}
