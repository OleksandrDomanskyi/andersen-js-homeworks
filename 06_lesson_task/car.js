class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    generateError(propName) {
        throw new Error (`Неверное значение для ${propName}`);
    };

    isNumberInRange(value, min, max) {
        return typeof value === 'number' && value >= min && value <= max;
    };

    isPositiveNumber(value) {
        return typeof value === 'number' && value > 0;
    };

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed = maxSpeed;
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
    };

    get brand() {
        return this.#brand;
    };

    set brand(value) {
        const propName = 'бренда';

        if (!(typeof value === 'string' && this.isNumberInRange(value.length, 1, 50))) {
            this.generateError(propName);
        };

        this.#brand = value;
    };

    get model() {
        return this.#model;
    };

    set model(value) {
        const propName = 'модели';

        if (!(typeof value === 'string' && this.isNumberInRange(value.length, 1, 50))) {
            this.generateError(propName);
        };

        this.#model = value;
    };

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    };

    set yearOfManufacturing(value) {
        const propName = 'года выпуска';

        if (!(this.isNumberInRange(value, 1900, new Date().getFullYear()))) {
            this.generateError(propName);
        };

        this.#yearOfManufacturing = value;
    };

    get maxSpeed() {
        return this.#maxSpeed;
    };

    set maxSpeed(value) {
        const propName = 'максимальной скорости';

        if (!(this.isNumberInRange(value, 100, 300))) {
            this.generateError(propName);
        };

        this.#maxSpeed = value;
    };

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    };

    set maxFuelVolume(value) {
        const propName = 'максимального объема топлива';

        if (!(this.isNumberInRange(value, 5, 20))) {
            this.generateError(propName);
        };
        
        this.#maxFuelVolume = value;
    };

    get fuelConsumption() {
        return this.#fuelConsumption;
    };

    set fuelConsumption(value) {
        const propName = 'расхода топлива';

        if (!(this.isPositiveNumber(value))) {
            this.generateError(propName);
        };

        this.#fuelConsumption = value;
    };

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    };

    get isStarted() {
        return this.#isStarted;
    };

    get mileage() {
        return this.#mileage;
    };

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        };

        this.#isStarted = true;
    };

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена');
        };

        this.#isStarted = false;
    };

    fillUpGasTank(fuelAmount ) {
        fuelAmount  = parseFloat(fuelAmount);

        if (isNaN(fuelAmount) || typeof fuelAmount !== 'number' || fuelAmount <= 0) {
            throw new Error('Неверное количество топлива для заправки');
        };

        const newFuelVolume = this.#currentFuelVolume + fuelAmount;

        if (newFuelVolume > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        };

        this.#currentFuelVolume = newFuelVolume;
    };

    drive(speed, hours) {
        const driveSpeed = parseFloat(speed);
        const driveHours = parseFloat(hours);

        if (isNaN(driveSpeed) || driveSpeed <= 0 || driveSpeed > this.#maxSpeed) {
            throw new Error('Неверная скорость');
        };

        if (isNaN(driveHours) || driveHours <= 0) {
            throw new Error('Неверное количество часов');
        };

        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        };

        if (driveSpeed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        };

        const requiredFuel = (driveSpeed / 100) * this.#fuelConsumption * driveHours;

        if (requiredFuel > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        };

        this.#currentFuelVolume -= requiredFuel;
        this.#mileage += driveSpeed * driveHours;
    };
};