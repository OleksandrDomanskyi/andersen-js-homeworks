// Global constants
const INVALID_INPUT_MESSAGE = 'Некорректный ввод!';
const FIRST_MESSAGE = 'Введите первое числовое значение:';
const SECOND_MESSAGE = 'Введите второе числовое значение:';
const MIN_RADIX_NUMBER = 2;
const MAX_RADIX_NUMBER = 36;

// Function to prompt user for a numeric value
const promptForNumber = (message) => {
    const userInput = prompt(message);

    if (userInput.trim() === "") {
        return null;
    }

    const userNumber = +userInput;

    return isNaN(userNumber) ? null : userNumber;
};

// Function to check code validity
const isValidNumber = (number) => {
    return number !== null && !isNaN(number);
};

// Task 1
const convertNumbers = () => {
    const firstNumber = promptForNumber(FIRST_MESSAGE);
    const secondNumber = promptForNumber(SECOND_MESSAGE);

    if (!isValidNumber(firstNumber) || !isValidNumber(secondNumber)) {
        return console.log(INVALID_INPUT_MESSAGE);
    }

    if (secondNumber < MIN_RADIX_NUMBER || secondNumber > MAX_RADIX_NUMBER) {
        return console.log(INVALID_INPUT_MESSAGE);
    }

    console.log(firstNumber.toString(secondNumber));
};

convertNumbers();

// Task 2
const additionAndDivision = () => {
    const firstNumber = promptForNumber(FIRST_MESSAGE);

    if (!isValidNumber(firstNumber)) {
        return console.log(INVALID_INPUT_MESSAGE);
    }
        
    const secondNumber = promptForNumber(SECOND_MESSAGE);

    if (!isValidNumber(secondNumber)) {
        return console.log(INVALID_INPUT_MESSAGE);
    }
    
    const addition = firstNumber + secondNumber;
    const division = firstNumber / secondNumber;

    console.log(`Ответ: ${addition}, ${division}.`);
}

additionAndDivision();