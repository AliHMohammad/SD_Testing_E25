import { CurrencyCalculator } from "./CurrencyCalculator.js";
import { GradeCalculator } from "./GradeCalculator.js";
import { CurrencyAPI } from "./utils/CurrencyAPI.js";

async function main() {
    const calc = new CurrencyCalculator("DKK", new CurrencyAPI());

    console.log(await calc.convert(100));
}

await main();
