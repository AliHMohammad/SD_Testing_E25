export default function anagram(word: string, wordTwo: string): boolean {
    let reverted = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverted += word.charAt(i);
    }

    return reverted === wordTwo;
}
