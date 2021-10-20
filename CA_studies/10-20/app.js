// Sukurkite HTML dokumentą su lentele (table) ir forma (form).
// Dokumentu turi būti žemiau aptartos žymos (angl. tags) ir jų atributai.
//
// Suraskite ir konsolėje atvaizduokite:
//
// Lentelę su id = "age-table".
//
// Pirmasis <td> toje lentelėje (su id “age”).
//
// Visus <label> elementus lentelės viduje (jų turėtų būti 3).
//
// Pirmasis įvestį (<input>) į formą.
// Paskutinę įvestį (<input>) į formą.

let table = document.getElementById('age_table');
console.log(table);

let cell = document.getElementById('age');
console.log(cell);

let lbl = document.querySelectorAll("label");
console.log(lbl);

let inp1 = document.querySelector('input');
console.log(inp1);

let inp2 = document.querySelector('form').lastElementChild;
console.log(inp2);