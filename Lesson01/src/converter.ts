const values: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
const maxRepeat: { [key: string]: number } = {
    I: 3,
    X: 3,
    C: 3,
    M: 3,
    V: 1,
    L: 1,
    D: 1,
};
const subtractive: { [key: string]: string[] } = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
};

function getValue(char: string): number {
    return values[char] ?? -1;
}

function isValidRepetition(char: string, count: number): boolean {
    return count <= (maxRepeat[char] || 0);
}

function isSubtractive(curr: string, next: string): boolean {
    return subtractive[curr]?.includes(next) ?? false;
}

function isValidRomanChar(char: string): boolean {
    return char in values;
}

export function convertRomanToDecimal(roman: string): number | string {
    let result = 0;
    let prevChar = "";
    let repeatCount = 1;
    let i = 0;
    roman = roman.toUpperCase();

    while (i < roman.length) {
        const curr: string = roman[i] ?? "";
        const currVal: number = getValue(curr);
        const next: string = roman[i + 1] ?? "";
        const nextVal: number = next ? getValue(next) : -1;

        if (!isValidRomanChar(curr)) {
            return `Unknown roman number: ${curr}`;
        }

        // Check repetition rules
        if (curr === prevChar) {
            repeatCount++;
            if (!isValidRepetition(curr, repeatCount)) {
                return `Invalid repetition of ${curr}`;
            }
        } else {
            repeatCount = 1;
        }

        // Check for invalid subtractive patterns (e.g., 'IIX', 'XXL')
        if (next && nextVal > currVal) {
            // Only I, X, C can be subtractive
            if (!isSubtractive(curr, next)) {
                return `Invalid subtractive pair: ${curr}${next}`;
            }
            // If previous char is same as current, and repeatCount > 1, it's invalid (e.g., 'IIX')
            if (repeatCount > 1) {
                return `Invalid subtractive pattern: ${roman.slice(Math.max(0, i - repeatCount + 1), i + 2)}`;
            }
            result += nextVal - currVal;
            i += 2;
            prevChar = "";
            continue;
        }

        result += currVal;
        prevChar = curr;
        i++;
    }

    if (result > 3999) {
        return "Value exceeds maximum representable Roman numeral (3999)";
    }
    return result;
}
