document.getElementsByTagName('link');

let header_ = document.createElement('header');
document.body.appendChild(header_);

let main_ = document.createElement('main');
document.body.appendChild(main_);

let footer_ = document.createElement('footer');
document.body.appendChild(footer_);

// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).
//

let nav_ = document.createElement('nav');
nav_.classList.add('navigation');

let ul_ = document.createElement('ul');
ul_.classList.add('list');

let li_1 = document.createElement('li');
li_1.innerText = 'HOME';
li_1.href = 'https://dictionary.cambridge.org/dictionary/english/home';

let li_2 = document.createElement('li');
li_2.innerText = 'BAG';
li_2.href = 'https://dictionary.cambridge.org/dictionary/english/bag';

let li_3 = document.createElement('li');
li_3.innerText = 'ABOUT';
li_3.href = 'https://dictionary.cambridge.org/dictionary/english/about';

let li_4 = document.createElement('li');
li_4.innerText = 'CONTACTS';
li_4.href = 'https://dictionary.cambridge.org/dictionary/english/contact';

let li_5 = document.createElement('li');
li_5.innerText = 'CAREER';
li_5.href = 'https://dictionary.cambridge.org/dictionary/english/career';


ul_.append(li_1, li_2, li_3, li_4, li_5);

li_1.classList.add('list');
li_2.classList.add('list');
li_3.classList.add('list');
li_4.classList.add('list');
li_5.classList.add('list');

nav_.appendChild(ul_);
header_.appendChild(nav_);

// <main> dalyje bus trys <section>:

let section_1 = document.createElement('section');
section_1.classList.add('section_1');
let section_2 = document.createElement('section');
section_2.classList.add('section_2');
let section_3 = document.createElement('section');
section_3.classList.add('section_3');


// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;

let slide1 = document.createElement('img');
slide1.classList.add('slider');
slide1.src = 'images/1st.jpg'

let slide2 = document.createElement('img');
slide2.classList.add('slider');
slide2.src = 'images/2nd.jpg'

let slide3 = document.createElement('img');
slide3.classList.add('slider');
slide3.src = 'images/3rd.jpg'

section_1.append(slide1, slide2, slide3)

main_.appendChild(section_1);

// Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku);
//

let clock_ = document.createElement('div');
clock_.style.fontSize = '250px';
clock_.style.textAlign = 'center';

setInterval(function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clock_.innerText = h + ":" + m + ":" + s;
    section_2.appendChild(clock_);
}, 1000);

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

main_.appendChild(section_2);

// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai.

let form_ = document.createElement('form');



section_3.appendChild(form_);
main_.appendChild(section_3);