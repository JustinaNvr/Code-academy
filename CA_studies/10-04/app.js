// // Sukurkite du kintamuosius x ir y ir priskirkite jam reikšmes 50 ir 10.
// let x = 50,
//     y = 10;
// //Atlikite šiuos veiksmus, naudodami Sudėtinius paskyrimų operatorius, su  sukurtais kintamaisiais:
// //Sukuriamas naujas kintamasis “suma”, kuris yra lygus x kintamojo vertei sudėtai su y kintamuoju;
// let sum = x+y;
// console.log(sum);
// //Sukuriamas naujas kintamasis “skirtumas”, kuris yra lygus x kintamojo vertei skirtumui su y kintamuoju;
// let diff = x-y;
// console.log(diff);
// //Sukuriamas naujas kintamasis “daugyba”, kuris yra lygus x kintamojo vertei padaugintai iš y kintamuoju;
// let multi = x*y;
// console.log(multi);
// //Sukuriamas naujas kintamasis “dalyba”, kuris yra lygus x kintamojo vertei padalintai iš y kintamuojo.
// let divide = x/y;
// console.log(divide);

// Parašykite if...else sąlygą, kuri:
// consolė’je atspausdins "lyginis", jei skaičius yra lyginis skaičius;
//
// consolė’je atspausdins "nelyginis", jei skaičius yra nelyginis skaičius.
//
//
//Įsitikinkite, kad išbandėte savo kodą su skirtingomis vertėmis.
//Pvz.: Jei skaičius lygus 1, tada konsolėje turėtų būti atspausdinama "nelyginis".

let num = prompt("Enter number: ");
let res = num % 2;

if (res == 0) {
    console.log("Number is even")
}
    else {
        console.log("Number is odd")
}