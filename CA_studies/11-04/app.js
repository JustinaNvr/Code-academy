let car = [
    new Cars('BMW', 'X3', 2004),
    new Cars('Audi', 'A7', 2014),
    new Cars('Mercedes Benz', 'G 500', 2016)
]

for (let cars of car){
    console.log(cars.getIntroduction());
    console.log(cars.getAge());
}
