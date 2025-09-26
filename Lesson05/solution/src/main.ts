import { GradeCalculator } from "./GradeCalculator.js";

async function main() {
    const calc = new GradeCalculator();

    console.log(await calc.convert("02", "Denmark"));
}

await main();


