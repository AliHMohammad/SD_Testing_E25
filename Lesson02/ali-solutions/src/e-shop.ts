

export function eShopDiscount(purchase: number): number {
    if (purchase <= 0) {
        throw Error()
    }

    if (purchase <= 300) {
        return 0
    }
    if (purchase >= 300.01 && purchase <= 800) {
        return 5
    }

    return 10
}
