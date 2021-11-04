class Cars {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getIntroduction() {
        return `Cars maker is '${this.make}' and the model of the car is '${this.model}'`
    };

    getAge() {
        let today = new Date().getFullYear();
        let age = today - this.year;

        return age <= 10 ? `Car ${this.make} ${this.model} is made in ${this.year} and is 10 years old or newer` : `Car ${this.make} ${this.model} is made in ${this.year} and is 11 years old or older`;
    }
}