let cars = [
    new Car('BMW', 'X3', 2004),
    new Car('Audi', 'A7', 2014),
    new Car('Mercedes Benz', 'G 500', 2016)
]

for (let car of cars){
    console.log(car.getIntroduction());
    console.log(car.getAge());
}

let motorcycles = [
    new Motorcycle('Tula', 'Muravey', 1971, 2),
    new Motorcycle('CFMoto', 'CFORCE 625 TOURING', 2021, 4),
    new Motorcycle('Quadro', '350D', 2012, 3)
]

for (let motorcycle of motorcycles){
    console.log(motorcycle.getIntroduction());
    console.log(motorcycle.getAge());
    console.log(motorcycle.getWheelsNumber())
}