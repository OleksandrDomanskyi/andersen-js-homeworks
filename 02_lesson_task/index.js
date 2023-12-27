// Task 1
const makeObjectDeepCopy = (obj) => {
    return obj && typeof obj === 'object'
        ? Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, makeObjectDeepCopy(value)])
        )
        : obj;
};

// Task 2
const isValidArray = (arr) => {
    Array.isArray(arr) && !arr.some(isNaN);
};

const isValidInterval = (value) => {
    typeof value === 'number';
};

const selectFromInterval = (arrayOfNumbers, firstIntervalValue, secondIntervalValue) => {
    if (!(isValidArray(arrayOfNumbers) && isValidInterval(firstIntervalValue) && isValidInterval(secondIntervalValue))) {
        throw new Error('Ошибка!');
    }

    const start = Math.min(firstIntervalValue, secondIntervalValue);
    const end = Math.max(firstIntervalValue, secondIntervalValue);

    return arrayOfNumbers.filter((num) => {
        num >= start && num <= end;
    });
};

// Task 3
const myIterable = {
    from: 1,
    to: 4,
    [Symbol.iterator]: function () {
        if (typeof this.from !== 'number' || typeof this.to !== 'number' || this.to < this.from) {
            throw new Error('Ошибка!');
        }

        let result = this.from;

        return {
            next: () => {
                if (result <= this.to) {
                    return { value: result++, done: false };
                } 

                return { value: undefined, done: true };
            },
        };
    },
};