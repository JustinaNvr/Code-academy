//Perrašykite šią “function declaration” būdu parašytą funkciją į “arrow function” (jeigu manote, kad reikia, sutvarkykite funkcijos kūną):
//
// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
//
// function getFavoriteCity(name, surname, city) {
//     let user = `${name} ${surname}`;
//     let favoriteCity = city;
//
//     return `${user} favorite city is ${favoriteCity}`;
// }
// getFavoriteCity("Ernestas", "Rutkauskas", cities[5]);
//
let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];

let randomCity = (cities) => cities[Math.floor(Math.random()*cities.length)]

 let getFavoriteCity = (name, surname, city) => {
     let user = `${name} ${surname}`;
     return `${user} favorite city is ${city}`;
 }
console.log(getFavoriteCity("Ernestas", "Rutkauskas", randomCity(cities)));

// Parašykite funkciją checkNumber, turinčią vieną parametrą, kuri:
//
// Patikrins skaičius nuo 1 iki (begalybės - 1)
// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"
//
// Iškvietus: console.log(checkNumber(15));
//
// Rezultatas: "Skaičius dalijasi iš 3 ir iš 5".

let checkNumber = num => {
    if ((num % 3 === 0) && (num % 5 === 0)){
        return 'Skaičius dalijasi iš 3 ir iš 5';
    }
    else if (num % 3 === 0){
        return 'Skaičius dalijasi iš 3';
    }
    else if (num % 5 === 0){
        return 'Skaičius dalijasi iš 5';
    }
    else {
        return  'Skaičius nesidalija nei iš 3 nei iš 5';
    }
}
console.log(checkNumber(15));