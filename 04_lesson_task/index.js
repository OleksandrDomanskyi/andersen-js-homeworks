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

// Task 2
const ARGUMENTS_NUMBER_ERROR_MESSAGE = 'Ошибка! Количество введённых параметров должно равняться двум!';
const VALIDATION_INPUT_ERROR_MESSAGE = 'Ошибка! Введенные данные - невалидны!';
const VALIDATION_NUMBER_ERROR_MESSAGE = 'Ошибка! Введенное число - невалидно!';
const DIVISION_ERROR_MESSAGE = 'Ошибка! Деление на ноль - запрещено!';

const isInvalidNumber = (number) => {
    return typeof number !== 'number' || isNaN(number) || !isFinite(number);
}

class Calculator {
    constructor(firstNumber, secondNumber) {
        if (arguments.length !== 2) {
            throw new Error(ARGUMENTS_NUMBER_ERROR_MESSAGE);
        };
        
        if (isInvalidNumber(firstNumber) || isInvalidNumber(secondNumber)) {
            throw new Error(VALIDATION_INPUT_ERROR_MESSAGE);
        };

        this.setX(firstNumber);
        this.setY(secondNumber);
    };

    setX = (num) => {
        if (isInvalidNumber(num)) {
            throw new Error(VALIDATION_NUMBER_ERROR_MESSAGE);
        };

        this.x = num;
    };

    setY = (num) => {
        if (isInvalidNumber(num)) {
            throw new Error(VALIDATION_NUMBER_ERROR_MESSAGE);
        };

        this.y = num;
    };

    logSum = () => {
        console.log(this.x + this.y);
    };

    logMul = () => {
        console.log(this.x * this.y);
    };

    logSub = () => {
        console.log(this.x - this.y);
    };

    logDiv = () => {
        if (this.y === 0) {
            throw new Error(DIVISION_ERROR_MESSAGE);
        };

        console.log(this.x / this.y);
    };
};