// Task 1
const ERROR_MESSAGE = 'Ошибка! Callback не является функцией.';

Array.prototype.myFilter = function (callback, obj = this) {
    if (typeof callback !== 'function') {
        throw new TypeError(ERROR_MESSAGE);
    }
    
    const filteredArray = [];

    for (let i = 0; i < obj.length; i++) {
        const element = obj[i];
        const index = i;

        if (callback.call(obj, element, index)) {
            filteredArray.push(element);
        };
    };

    return filteredArray;
};

// Task 2
function createDebounceFunction(callback, delay) {
    let timeout;

    return function debouncedFunction(...args) {
        const context = this;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback.apply(context, args);
            timeout = null;
        }, delay);
    };
};
