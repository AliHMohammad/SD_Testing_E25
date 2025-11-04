export default function letters(word: string): Record<string, number> {
    const result: Record<string, number> = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word.charAt(i);
        result[letter] = (result[letter] ?? 0) + 1;
    }

    return result;
}
