interface IProps {
    age: number;
    destinationToIndia: boolean;
    departureOnMonFri: boolean;
    stayingatleastSixDays: boolean;
}

export function airlineDiscount({ age, destinationToIndia, departureOnMonFri, stayingatleastSixDays }: IProps): number {
    if (age <= 2) {
        return 100;
    }

    if (age > 2 && age <= 18) {
        return stayingatleastSixDays ? 50 : 40;
    }

    return calculateDiscountForAdults(destinationToIndia, departureOnMonFri, stayingatleastSixDays);
}

function calculateDiscountForAdults(destinationToIndia: boolean, departureOnMonFri: boolean, stayingatleastSixDays: boolean) {
    if (destinationToIndia && departureOnMonFri && stayingatleastSixDays) {
        return 10;
    }

    if (destinationToIndia) {
        if (departureOnMonFri && !stayingatleastSixDays) {
            return 0;
        }

        if (!departureOnMonFri && stayingatleastSixDays) {
            return 30;
        }

        if (!departureOnMonFri && !stayingatleastSixDays) {
            return 20;
        }
    }

    if (departureOnMonFri && !stayingatleastSixDays) {
        return 0;
    }

    if (!departureOnMonFri && stayingatleastSixDays) {
        return 35;
    }

    if (!departureOnMonFri && !stayingatleastSixDays) {
        return 25;
    }

    return 10;
}
