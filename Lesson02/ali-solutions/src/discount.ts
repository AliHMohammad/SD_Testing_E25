

export function discount(count: number): number {
    if (count < 5) {
        throw Error()
    }

    return count >= 100 ? 20 : 0;
}

