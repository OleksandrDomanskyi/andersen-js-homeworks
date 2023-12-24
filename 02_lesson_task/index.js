// Task 1
const makeObjectDeepCopy = (obj) => {
    return obj && typeof obj === 'object'
        ? Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, makeObjectDeepCopy(value)])
        )
        : obj;
};

// Task 2
const selectFromInterval = (arrayOfNumbers, firstIntervalValue, secondIntervalValue) => {
    if (
        !Array.isArray(arrayOfNumbers)
        || arrayOfNumbers.some(isNaN)
        || typeof firstIntervalValue !== 'number'
        || typeof secondIntervalValue !== 'number'
    ) {
        throw new Error('Ошибка!');
    }

    const start = Math.min(firstIntervalValue, secondIntervalValue);
    const end = Math.max(firstIntervalValue, secondIntervalValue);

    return arrayOfNumbers.filter((num) => {
        num >= start && num <= end
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

        let current = this.from;

        return {
            next: () => {
                if (current <= this.to) {
                    return { value: current++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
    },
};