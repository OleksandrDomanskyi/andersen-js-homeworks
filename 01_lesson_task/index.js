// Global constants
const INVALID_INPUT_MESSAGE = 'Некорректный ввод!';
const FIRST_MESSAGE = 'Введите первое числовое значение:';
const SECOND_MESSAGE = 'Введите второе числовое значение:';

// Function to prompt user for a numeric value
const promptForNumber = (message) => {
    const userInput = prompt(message);
    const userNumber = +userInput;

    return isNaN(userNumber) ? null : userNumber;
};

// Task 1
const convertNumbers = () => {
    const firstNumber = promptForNumber(FIRST_MESSAGE);
    const secondNumber = promptForNumber(SECOND_MESSAGE);

    if (firstNumber !== null && secondNumber !== null) {
        console.log(firstNumber.toString(secondNumber));
        return;
    }

    console.log(INVALID_INPUT_MESSAGE);
    
};

convertNumbers();

// Task 2
const additionAndDivision = () => {
    const firstNumber = promptForNumber(FIRST_MESSAGE);

    if (firstNumber === null) {
        console.log(INVALID_INPUT_MESSAGE);
        return;
    }
        
    const secondNumber = promptForNumber(SECOND_MESSAGE);

    if (secondNumber === null) {
        console.log(INVALID_INPUT_MESSAGE);
        return;
    }
    
    const addition = firstNumber + secondNumber;
    const division = firstNumber / secondNumber;
    console.log(`Ответ: ${addition}, ${division}.`);


}

additionAndDivision();