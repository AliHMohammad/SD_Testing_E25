export class Calculator {
    public static sum(numberOne: number, numberTwo: number) {
        return numberOne + numberTwo;
    }

    public static subtract(numberOne: number, numberTwo: number) {
        return numberOne - numberTwo;
    }

    public static multiply(numberOne: number, numberTwo: number) {
        return numberOne * numberTwo;
    }

    public static divide(numberOne: number, numberTwo: number) {
        if (!numberTwo) 
            throw new Error();
        

        return numberOne / numberTwo;
    }
}
