//Pabandykime atlikti 5 masyvo (Array) operacijas.
//
// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
//
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
//
// Viduryje esančią reikšmę pakeiskite „Classics“.
//
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
//
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.
//
//

// let arr = ['Jazz', 'Blues'];
//
// console.log(arr);
//
// console.log(arr, arr.push('Rock-n-Roll'));
//
// arr.splice(1, 1, 'Classics');
//
// console.log(arr);
//
// console.log(arr.shift());
//
// console.log(arr);
//
// console.log(arr, arr.unshift('Rap', 'Reggae'));

//  Sukurkite funkciją getMaxSubSum(arr), kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.
//

// let arr = [11, -2, 34, 45, 19, 6];
//
// let getMaxSubSum = arr => {
//
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
//
// console.log(getMaxSubSum(arr));
// console.assert(getMaxSubSum(arr) === 115);

// Parašykite funkciją (nenaudojant "FOR" ciklo), kuri grąžina masyvą su pateiktu formatu:
//
// (3, 'a') => ['a', 'a', 'a']
// (4, 'b') => ['b', 'b', 'b', 'b']
//

// let customFill = arr => {
//     arr = Array.from({ length: 3 }).fill('a');
//     return arr;
// }
// let customFill2 = arr => {
//     arr = Array.from({ length: 4 }).fill('b');
//     return arr;
// }

// let customFill = (len, val) => {
//     return Array(len).fill(val)
// }
//
// console.log(customFill(3, 'a'));
// console.assert(customFill(3, 'a') === ['a', 'a', 'a']);
// console.log(customFill(4, 'b'));
// console.assert(customFill(4, 'b') === ['b', 'b', 'b', 'b']);

// Parašykite funkciją "isEqual", kurį paligina 2 masyvus.
//
// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// let arr3 = [1, 2, 3, 5];
// let arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2));
// console.assert(isEqual(arr1, arr2));
// console.log(isEqual(arr1, arr3));
// console.assert(isEqual(arr1, arr3) == false);
// console.log(isEqual(arr1, arr4));
// console.assert(isEqual(arr1, arr4) == false);
// console.log(isEqual(arr3, arr4));
// console.assert(isEqual(arr3, arr4) == false);
// console.log(isEqual(arr4, arr4));
// console.assert(isEqual(arr4, arr4));

let isEqual = (a, b) => {
    if (a.length !== b.length && a.every((v, i) => v === b[i])){
        return true;
    }
    else {
        return false;
    }

}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 5];
let arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2));
console.assert(isEqual(arr1, arr2));
console.log(isEqual(arr1, arr3));
console.assert(isEqual(arr1, arr3) == false);
console.log(isEqual(arr1, arr4));
console.assert(isEqual(arr1, arr4) == false);
console.log(isEqual(arr3, arr4));
console.assert(isEqual(arr3, arr4) == false);
console.log(isEqual(arr4, arr4));
console.assert(isEqual(arr4, arr4));