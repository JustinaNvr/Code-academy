// ES6 Class
// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes:
//
// 1. name; 2. year; 3. director; 4. budget; 5. income.
// ir metodus:
// 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director);
// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
//
// Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.

let movie1 = new Movie ('Avatar', 2009, 'James Cameron', '$237 mln.','$2,8 bln.');
let movie2 = new Movie ('Titanic', 1997, 'James Cameron', '$200 mln.', '$3,6 bln.');
let movie3 = new Movie ('Jurassic World', 2015, 'Colin Trevorrow', '$150 mln.', '$1,6 bln.');

console.log(movie1.getIntroduction());
console.log(movie1.getProfit());

console.log(movie2.getIntroduction());
console.log(movie2.getProfit());

console.log(movie3.getIntroduction());
console.log(movie3.getProfit());