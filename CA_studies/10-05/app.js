// let music_group = +prompt("Enter quantity of musicians in group in numbers:");
//
// if (music_group == 1){
//     alert('Solo group');
// }
// else if (music_group == 2){
//     alert('Group is duet');
// }
// else if (music_group == 3){
//     alert('Group is trio');
// }
// else if (music_group == 4){
//     alert('Group is quartet');
// }
// else if (music_group >= 5){
//     alert('Group is big');
// }
// else {
//     alert('Not a group');
// }

///////////////////////////////////////////////////////////////////////////////////
// Skaičiaus dalių suma panaudojant rekursiją.
// someName(4321) => 4+2+1+1

// let num = [4, 2, 1, 1];
//
// function recurse(num) {
//     if (num.length === 1) {
//         return num [0];
//     }
//     if (num.length === 0) {
//         return 0;
//     }
//     let sum = num[0] + recurse(num.slice(1,num.length));
//     return sum;
// }
//
// console.log(recurse(num));

let num = 4321;

function sumdigits(num) {
    if(num == 0){
        return 0;
    }
    let lastdigit = num % 10;
    let remainingnum = Math.floor(num / 10);
    return lastdigit + sumdigits(remainingnum);
}

console.log(sumdigits(num));