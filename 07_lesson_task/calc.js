class Calculator {
    constructor() {
        this.upperLine = document.getElementById('upper-line');
        this.lowerLine = document.getElementById('lower-line');

        this.clearDisplay();

        this.currentInput = '0';
        this.currentOperator = '';
        this.lastResult = 0;
        this.upperLine.textContent = '\u200B';
        this.tempResult = null;

        this.bindEvents();
    };

    bindEvents() {
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();

                this.handleButtonClick(button.value);
            });
        });

        document.addEventListener('keydown', (event) => {
            event.preventDefault();

            this.handleKeyDown(event);
        });
    };

    handleButtonClick(value) {
        switch (value) {
            case 'AC':
                this.clearAll();
                break;
            case '=':
                if (this.currentOperator && this.tempResult !== null) {
                    const result = this.calculate(parseFloat(this.tempResult), parseFloat(this.currentInput), this.currentOperator);

                    this.handleCalculationResult(result);
                };
                break;
            case '⇐':
                this.deleteLast();
                break;
            case '+/-':
                this.toggleSign();
                break;
            case '.':
                this.handleDotInput(value);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.handleOperator(value);
                break;
            default:
                this.handleInput(value);
                break;
        };

        if (!this.currentOperator && this.upperLine.textContent === '') {
            this.upperLine.textContent = '';
        };

        if (this.currentOperator) {
            this.lowerLine.textContent = this.currentInput || '0';
        };
    };

    handleOperator(value) {
        if (this.currentInput !== '') {
            if (this.tempResult !== null) {
                this.tempResult = this.calculate(this.tempResult, Number(this.currentInput), this.currentOperator);
            } else {
                this.tempResult = Number(this.currentInput);
            };

            this.currentOperator = value;
            this.upperLine.textContent = `${this.tempResult} ${this.currentOperator} `;
            this.currentInput = '';

            return;
        };

        if (this.tempResult !== null && !this.currentOperator) {
            this.currentOperator = value;
            this.upperLine.textContent = `${this.tempResult} ${this.currentOperator} `;
        };
    };

    handleKeyDown(event) {
        const key = event.key;

        switch (key) {
            case 'Escape':
                this.clearAll();
                break;
            case 'Enter':
                this.handleButtonClick('=');
                break;
            default:
                this.handleButtonClick(key);
                break;
        };
    };

    handleInput(value) {
        if (value === '.' && this.currentInput.includes('.')) {
            return;
        };

        if (this.currentInput === '0' || this.currentInput === '-0') {
            this.currentInput = value;

        } else if (this.currentInput === '' && value === '.') {
            this.currentInput = '0' + value;

        } else if (this.currentInput === '' && this.currentOperator !== '') {
            this.currentInput = value;

        } else {
            this.currentInput += value;
        };

        if (value === '.' && this.currentInput === '') {
            this.currentInput = '0.';
        }

        this.updateDisplay();
    }

    clearAll() {
        this.clearDisplay();

        this.currentInput = '0';
        this.currentOperator = '';
        this.lastResult = 0;
        this.tempResult = null;
        this.upperLine.textContent = '\u200B';
    };

    clearDisplay() {
        this.upperLine.textContent = '\u200B';
        this.lowerLine.textContent = '0';
    };

    handleCalculationResult(result) {
        if (result !== null) {
            this.lastResult = result;
            this.tempResult = result;
            this.currentInput = '';
            this.currentOperator = '';

            const formattedResult = Number.isInteger(result) ? result : result.toFixed(8).replace(/(\.\d*?)0+$/, '$1');
            this.upperLine.textContent = `${formattedResult} ${this.currentOperator}`;
            this.lowerLine.textContent = formattedResult;
        } else {
            this.tempResult = null;
            this.currentInput = '0';
            this.currentOperator = '';
            this.upperLine.textContent = '\u200B';
            this.lowerLine.textContent = 'Error';
        };
    };

    deleteLast() {
        this.currentInput = this.currentInput.slice(0, -1) || '0';
        this.updateDisplay();
    };

    handleDotInput() {
        if (this.currentInput === '') {
            this.currentInput = '0.';
        } else if (!this.currentInput.includes('.')) {
            this.currentInput += '.';
        };

        this.updateDisplay();
    }

    toggleSign() {
        if (this.currentInput !== '0') {
            this.currentInput = this.currentInput.startsWith('-')
                ? this.currentInput.slice(1)
                : '-' + this.currentInput;

            this.updateDisplay();
        };
    };

    calculate(firstNum, secondNum, operator) {
        switch (operator) {
            case '+':
                return firstNum + secondNum;
            case '-':
                return firstNum - secondNum;
            case '*':
                return firstNum * secondNum;
            case '/':
                if (secondNum === 0) {
                    this.displayError('Division by zero');

                    return null;
                };

                return firstNum / secondNum;
            default:
                return null;
        };
    };

    displayError(message) {
        this.lowerLine.textContent = 'Error';
        console.error(message);
    }

    updateDisplay() {
        const formattedInput = Number(this.currentInput);

        const upperLine = this.currentOperator
            ? `${this.lastResult} ${this.currentOperator} ${this.currentInput || ''}`
            : this.currentInput === '' ? '' : this.currentInput;

        const lowerLine = this.currentInput === '' && this.currentOperator !== ''
            ? this.lastResult
            : formattedInput;

        const spacedUpperLine = upperLine.replace(/([+\-*/])/g, ' $1 ');

        this.upperLine.textContent = spacedUpperLine;
        this.lowerLine.textContent = isNaN(formattedInput) ? 'Error' : lowerLine;
    };
};

const calculator = new Calculator();