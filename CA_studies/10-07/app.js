// Parašykite „JavaScript“ funkciją "alphabetOrder" kuri grąžina perduotą eilutę su raidėmis abėcėlės tvarka.
// console.assert(alphabetOrder('alphabetical') == 'aaabcehillpt');

let abc = 'alphabetical'

function alphabetOrder(abc) {
    let letters = abc.split('');
    let res = letters.sort();
    return res.join('')
}

console.log(alphabetOrder(abc));
console.assert(alphabetOrder('alphabetical') == 'aaabcehillpt');

// Parašykite „JavaScript“ funkciją, kuri priima eilutę kaip parametrą ir grąžina ilgiausią eilutės žodį.

let sentence = 'I love JavaScript';

function longestWord (sentence) {
    let word = sentence.split(' ');
    let longest = word.sort(function (a, b){
        return b.length - a.length;
    })
    return longest[0];

}

console.log(longestWord(sentence));
console.assert(longestWord('I love JavaScript') == 'JavaScript');

// Parašykite „JavaScript“ funkciją, kuri priima eilutę kaip parametrą ir grąžina ilgiausią arba trumpiausią eilutės žodį.

function findSpecificWord(sentence, definition) {
    if (definition === 'max') {
        let word = sentence.split(' ');
        let longest = word.sort(function (a, b){
            return b.length - a.length;
        })
        return longest[0];
    }
    if (definition === 'min') {
        let word = sentence.split(' ');
        let shortest = word.sort(function (a, b){
            return a.length - b.length;
        })
        return shortest[0];
    }
}

let max = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'max');
let min = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'min');
console.log(max);
console.log(min);
console.assert(max == 'consectetur');
console.assert(min == 'sit');

let arr = [1,5,6,7,8];
function joinStuff () {
    let arr = arguments;
    return Number(arguments.join(''));
}

console.log(joinStuff());
console.assert(joinStuff(1,5,6,7,8) === 15678);