interface IResponse {
    meta: {
        last_updated_at: string;
    };
    data: {
        [currencyCode: string]: {
            code: string;
            value: number;
        };
    };
}

export class CurrencyAPI {
    private _APIKey: string;

    constructor() {
        this._APIKey = process.env.API_KEY || "";
    }

    async getCurrencies(currency: string): Promise<IResponse> {
        const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${this._APIKey}&base_currency=${currency}`);

        if (!response.ok) {
            throw new Error();
        }

        return await response.json();
    }
}
