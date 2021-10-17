//Naudodami for, while, doWhile ciklus parašykite visus lyginius skaičiuos nuo 2 iki 10;

//
// for (let i=0; i <= 10; i++){
//     if (i % 2 === 0)
//         console.log('for cycle even: ' + i);
// }
//
// let i = 0;
// while (i <= 10){
//     if (i % 2 === 0)
//         console.log('while cycle even: ' + i);
//         i++;
// }
//
// let x = 0;
// do {
//     if (x % 2 === 0){
//         console.log('doWhile cycle even: ' + x);
//     }
//     x++;
// } while (x <= 10);

//Parašykite funkciją, pavadintą getLaugh(), kuri turi vieną parametrą, skaičių, kuris žymi sugrįžtančių „ha“ skaičių.
//
// patarimas: gali prireikti for ciklo (loop)!


// function getLaugh(repeat) {
//     let laugh = 'ha';
//     let res = '';
//     for (let i = 1; i <= repeat; i++){
//         res += laugh;
//     }
//     console.log(res)
// }
//
// getLaugh(2);

//Parašykite funkciją (arrow function), pavadintą getHighestNumber, kurios tikslas yra leisti vartotojui, kaip argumentus nurodyti bet kokius skaičius ir grąžinama bus didžiausias skaičius iš visų nurodytų.
//
// Surasti didžiausia skaičių butina panadojus ciklą

//console.assert(getHighestNumber(34,7,8,55,6,56,7,9,52) == 56)

let getHighestNumber = (...num) => {
    let highest = num[0] || null;

    for (let i = 0; i <= num.length; i++){
        if (num[i] > highest) {
            highest = num[i]
        }
    }
    return highest;
}

// console.log(getHighestNumber(34,7,8,55,6,56,7,9,52));
// console.assert(getHighestNumber(34,7,8,55,6,56,7,9,52) === 56);

//Panaudojant ciklus parodykitė tokias reikšmes:
//
// 111222333444555666777888999
//
// 11 12 13 21 22 23 31 32 33

// let num = 1;
//
// while (num <= 1){
//     let n = num.toString();
//     result = n.repeat(3) + '';
//     num++;
// }

let result = '';

for (let i = 1; i <= 9; i++){
    let n = i.toString();
    result += n.repeat(3);
}

console.log(result);
console.assert(result == '111222333444555666777888999');

let result2 = '';

for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 3; j++){
        result2 += i.toString() + j.toString() + ' ';
    }
}
result2 = result2.trimRight();

console.log(result2);
console.assert(result2 == '11 12 13 21 22 23 31 32 33');