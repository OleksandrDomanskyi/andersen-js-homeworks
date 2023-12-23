// Global constants
const INVALID_INPUT_MESSAGE = 'Некорректный ввод!';
const FIRST_MESSAGE = 'Введите первое числовое значение:';
const SECOND_MESSAGE = 'Введите второе числовое значение:';
const MIN_RADIX_NUMBER = 2;
const MAX_RADIX_NUMBER = 36;

// Function to check input validity
const isValidInput = (inputStr) => {
    return !inputStr.trim().length ? false : !isNaN(inputStr);
};

// Task 1
const convertNumbers = () => {
    const firstInput = prompt(FIRST_MESSAGE);
    const secondInput = prompt(SECOND_MESSAGE);

    if (!isValidInput(firstInput) || !isValidInput(secondInput)) {
        return console.log(INVALID_INPUT_MESSAGE);
    }

    const firstNumber = +firstInput;
    const secondNumber = +secondInput;

    if (secondNumber < MIN_RADIX_NUMBER || secondNumber > MAX_RADIX_NUMBER) {
        return console.log(INVALID_INPUT_MESSAGE);
    }

    console.log(firstNumber.toString(secondNumber));
};

convertNumbers();

// Task 2
const additionAndDivision = () => {
    const firstInput = prompt(FIRST_MESSAGE);

    if (!isValidInput(firstInput)) {
        return console.log(INVALID_INPUT_MESSAGE);
    }
        
    const secondInput = prompt(SECOND_MESSAGE);

    if (!isValidInput(secondInput)) {
        return console.log(INVALID_INPUT_MESSAGE);
    }
    
    const firstNumber = +firstInput;
    const secondNumber = +secondInput;

    const addition = firstNumber + secondNumber;
    const division = firstNumber / secondNumber;

    console.log(`Ответ: ${addition}, ${division}.`);
}

additionAndDivision();