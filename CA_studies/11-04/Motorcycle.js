class Motorcycle extends Car {
    constructor(make, model, year, wheels) {
        super(make, model, year);
        this.wheels = wheels;
    }

    getIntroduction() {
        return `Motorcycles maker is '${this.make}', model of the motorcycle is '${this.model}'`
    };

    getAge() {
        let today = new Date().getFullYear();
        let age = today - this.year;

        return age <= 10 ? `${this.getIntroduction()}, it is made in ${this.year} and is 10 years old or newer` : `${this.getIntroduction()}, it is made in ${this.year} and is 11 years old or older`;
    }
    getWheelsNumber() {
        if (this.wheels === 4){
            return `${this.getIntroduction()} and it is a quad bike`;
        }
        else if (this.wheels === 3){
            return `${this.getIntroduction()} and it is a trike`;
        }
        else {
            return `${this.getIntroduction()} and it is a regular motorcycle`;
        }
    }
}