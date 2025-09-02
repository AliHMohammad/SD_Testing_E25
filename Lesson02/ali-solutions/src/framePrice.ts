export function framePrice(width: number, height: number): number {
    if (width < 30 || width > 100) {
        throw Error();
    }
    if (height < 30 || height > 60) {
        throw Error();
    }

    const surface = height * width;

    return surface > 1600 ? 3500 : 3000;
}
