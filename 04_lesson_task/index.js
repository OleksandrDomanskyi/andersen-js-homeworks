// Task 1
const isInvalidString = (str) => {
    return typeof str !== 'string' || str === null || str === undefined;
};

const isValidSeparator = (sep) => {
    return typeof sep === 'string';
};

const concatStrings = (firstString, separator) => {
    return (nextString) => {
        if (isInvalidString(nextString)) {
            return firstString;
        };

        if (isValidSeparator(separator)) {
            return concatStrings(`${firstString}${separator}${nextString}${separator}`);
        };

        return concatStrings(`${firstString}${nextString}`);
    };
};

// Примеры использования
// console.log(concatStrings('first')('second')('third')()); // 'firstsecondthird'
// console.log(concatStrings('first', null)('second')()); // 'firstsecond'
// console.log(concatStrings('first', '123')('second')('third')()); // 'first123second123third'
// console.log(concatStrings('some-value')('')('')(null)); // 'some-value'
// console.log(concatStrings('some-value')(2)); // 'some-value'
// console.log(concatStrings('some-value')('333')(123n)); // 'some-value333'

// Task 2
const VALIDATION_ERROR_MESSAGE = 'Ошибка! Введенные данные - невалидны!';
const ARGUMENTS_ERROR_MESSAGE = 'Ошибка! Введенные данные - невалидны!';

class Calculator {
    constructor(firstNumber, secondNumber) {
        if (arguments.length > 2) {
            throw new Error(ARGUMENTS_ERROR_MESSAGE);
        };

        if (!this.isValidNumber(x) || !this.isValidNumber(y)) {
            throw new Error(VALIDATION_ERROR_MESSAGE);
        };

        this.setX(firstNumber);
        this.setY(secondNumber);
    };

    isValidNumber(num) {
        return typeof num === 'number' && isFinite(num);
    };
};
