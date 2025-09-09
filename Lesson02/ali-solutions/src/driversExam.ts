interface IResult {
    licenseGranted: boolean;
    repeatTheory: boolean;
    repeatPractical: boolean;
    extraDrivingLessons: boolean;
}

const result: IResult = {
    extraDrivingLessons: false,
    licenseGranted: false,
    repeatPractical: false,
    repeatTheory: false,
};

export function driversExam(points: number, errorCount: number): IResult {
    const passedTheory = points >= 85 && points <= 100;
    const passedPractical = errorCount <= 2;

    if (passedTheory && passedPractical) {
        return {
            ...result,
            licenseGranted: true,
        };
    }

    if (passedTheory) {
        return {
            ...result,
            repeatPractical: true,
        };
    }

    if (passedPractical) {
        return {
            ...result,
            repeatTheory: true,
        };
    }

    return {
        ...result,
        extraDrivingLessons: true,
        repeatPractical: true,
        repeatTheory: true,
    };
}
