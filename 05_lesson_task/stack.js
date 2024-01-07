// Task 1
    const MAXSIZE_ERROR_MESSAGE = 'Ошибка! Превышено максимальное кол-во элементов в стеке!';
    const FULL_STACK_ERROR_MESSAGE = 'Ошибка! Стек переполнен!';
    const EMPTY_STACK_ERROR_MESSAGE = 'Ошибка! Стек пуст!';
    const NOT_ITERABLE_ERROR_MESSAGE = 'Ошибка! Сущность не является итерируемой!';    

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Stack {
    constructor(maxSize = 10) {
        this.validateMaxSize(maxSize);

        this.maxSize = maxSize;
        this.top = null;
        this.size = 0;
    };

    validateMaxSize = (maxSize) => {
        if (!Number.isInteger(maxSize) || maxSize <= 0) {
            throw new Error(MAXSIZE_ERROR_MESSAGE);
        };
    };

    isFull = () => {
        return this.size >= this.maxSize;
    };

    isEmpty = () => {
        return this.size === 0;
    };

    push = (elem) => {
        if (this.isFull()) {
            throw new Error(FULL_STACK_ERROR_MESSAGE);
        };

        const newNode = new Node(elem);
        newNode.next = this.top;
        this.top = newNode;
        this.size += 1;
    };

    pop = () => {
        if (this.isEmpty()) {
            throw new Error(EMPTY_STACK_ERROR_MESSAGE);
        };

        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size -= 1;

        return poppedValue;
    };

    peek = () => {
        return this.isEmpty() ? null : this.top.value;
    }

    toArray = () => {
        const result = [];
        let current = this.top;

        while (current) {
            result.push(current.value);
            current = current.next;
        };

        return result.reverse();
    };

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error(NOT_ITERABLE_ERROR_MESSAGE);
        };

        const stack = new Stack();

        for (const elem of iterable) {
            stack.push(elem);
        };

        return stack;
    };
};

// Task 2
class LinkedList {
    constructor() {
        this.head = null;
    };

    append = (elem) => {
        const newNode = new Node(elem);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
    };

    prepend = (elem) => {
        const newNode = new Node(elem);

        newNode.next = this.head;
        this.head = newNode;
    };

    find = (elem) => {
        let current = this.head;

        while (current) {
            if (current.value === elem) {
                return current.value;
            };

            current = current.next;
        };

        return null;
    };

    toArray = () => {
        const result = [];
        let current = this.head;

        while (current) {
            result.push(current.value);

            current = current.next;
        };

        return result;
    };

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error(NOT_ITERABLE_ERROR_MESSAGE);
        };

        const linkedList = new LinkedList();

        for (const elem of iterable) {
            linkedList.append(elem);
        };

        return linkedList;
    };
};