class Car {
    #serialNumber;
    #model;
    #manufacturer;
    #year;
    
    constructor(serialNumber, model, manufacturer, year) {
        this.#serialNumber = serialNumber;
        this.#model = model;
        this.#manufacturer = manufacturer;
        this.#year = year;

    }


    get serialNumber() {
        return this.#serialNumber;
    }

    set serialNumber(value) {
        this.#serialNumber = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        this.#model = value;
    }

    get manufacturer() {
        return this.#manufacturer;
    }

    set manufacturer(value) {
        this.#manufacturer = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        this.#year = value;
    }
}

const cars = [
    new Car('SN001', 'Corolla', 'Toyota', 2010),
    new Car('SN002', 'Civic', 'Honda', 2015),
    new Car('SN003', 'Camry', 'Toyota', 2019),
    new Car('SN004', 'Accord', 'Honda', 2016),
    new Car('SN005', 'Sonata', 'Hyundai', 2020),
    new Car('SN006', 'Fusion', 'Ford', 2018),
    new Car('SN007', 'Altima', 'Nissan', 2017),
    new Car('SN008', 'Sentra', 'Nissan', 2013),
    new Car('SN009', 'Mazda3', 'Mazda', 2021),
    new Car('SN010', 'Camaro', 'Chevrolet', 2014),
    new Car('SN011', 'Charger', 'Dodge', 2019),
    new Car('SN012', 'Mustang', 'Ford', 2020),
    new Car('SN013', 'A3', 'Audi', 2012),
    new Car('SN014', '3 Series', 'BMW', 2016),
    new Car('SN015', 'C-Class', 'Mercedes-Benz', 2018),
    new Car('SN016', 'Civic Type R', 'Honda', 2020),
    new Car('SN017', 'Supra', 'Toyota', 2021),
    new Car('SN018', 'Model S', 'Tesla', 2019),
    new Car('SN019', 'Golf GTI', 'Volkswagen', 2017),
    new Car('SN020', 'S60', 'Volvo', 2015),
];