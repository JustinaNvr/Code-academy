//Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car),
// kuris turės šias savybes:
// make
//
// model
//
// year
// ir metodus:
// getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
//
// getAge, kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą)

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

        return age <= 10 ? `Car ${this.make} ${this.model} is made 10 years ago or earlier` : `Car ${this.make} ${this.model} is made 11 years ago or later`;
    }
}