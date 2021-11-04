class Motorcycle extends Car {
    constructor(make, model, year, wheels) {
        super(make, model, year);
        this.wheels = wheels;
    }

    getIntroduction() {
        return `Motorcycles maker is '${this.make}', model of the motorcycle is '${this.model}'`
    };
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