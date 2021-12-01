//
let ab = [];
console.log(ab + 1 + 2);
//
let a = 1;
let b = { toString() {return '1'}};
let c = 1;
console.log(a+b+c);
//
let aa = -1;
console.log(a/0);
//
let arr = [];
arr[3] = 33;
console.log(arr.length);
//
// let an = new Array("a","b");
let aan = "a,b".split(",");
// console.log(an);
console.log(aan);
//
for (let i=0; i<10; i++){
    console.log(i)
};
//
let obje = {
    "0" : 1,
    0: 2
};
console.log('obje: ' + obje["0"] + obje[0]);
//
function User() { }
User.prototype = {admin: false};
let user = new User();
User.prototype = {admin: true};
console.log(user.admin);
//
// let f = function g() {
//     return 23;
// };
// console.log(typeof g());
//
let aaa = (1,5 - 1) * 2;
console.log('aaa: ' + aaa);
//
let x = 5;
console.log(x++);
//
console.log(20e-1['toString'](2));
