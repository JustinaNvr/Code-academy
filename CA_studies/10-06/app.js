// console.log('min(2,5)== ' + Math.min(2, 5));
// console.log('min(3,-1)== ' + Math.min(3,-1));
// console.log('min(1,1)== ' + Math.min(1, 1));
//
// function mini(a, b){
//     return Math.min(a, b)
// }
//
// console.log('function min: ' + mini(6, 8));
//
// let num = 4321;
//
// let sumDigits = num => {
//     if(num == 0){
//         return 0;
//     }
//     let lastDigit = num % 10;
//     let remainingNum = Math.floor(num / 10);
//     return lastDigit + sumDigits(remainingNum);
// }
//
// console.log(sumDigits(num));

function reverse(n) {
    n = n + '';
    return n.split('').reverse().join('');
}
console.log('Regular function: ' + reverse('abc'));
console.log('Regular function: ' + reverse('321'));

reverseArr = n => {
    n = n + '';
    return n.split('').reverse().join('');
}

console.log('Arrow function: ' + reverseArr('abc'));
console.log('Arrow function: ' + reverseArr('321'));