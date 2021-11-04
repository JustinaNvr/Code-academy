let cars = [
    new Car('BMW', 'X3', 2004),
    new Car('Audi', 'A7', 2014),
    new Car('Mercedes Benz', 'G 500', 2016)
]

for (let car of cars){
    console.log(car.getIntroduction());
    console.log(car.getAge());
}
