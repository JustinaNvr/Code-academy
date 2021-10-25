// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
//
// <h2> tag’as su tekstu;
//
// <p> tag’as su tekstu;
//
// <ul> tag’as, kurio viduje yra 5 <li> su paveiksliukais;
//
// <p> tag’as su tekstu.

let div_ = document.getElementById('main');

let hh2 = document.createElement('h2');
hh2.innerHTML = 'Hello World!';
hh2.style.color = 'purple';

div_.appendChild(hh2);

let p1 = document.createElement('p');
p1.innerHTML = '1st - Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eius eligendi labore, nam officia porro quidem sed sit unde velit. Aut blanditiis consequatur dignissimos in laboriosam libero quasi rem tenetur!';
p1.style.color = 'green';

div_.appendChild(p1);

let ul_ = document.createElement('ul');

for (let i = 0; i <= 5; i++) {
    // ulElement.innerHTML =  ulElement.innerHTML + `<li>${name}</li>`;
    // ulElement.innerHTML += `<li>${name}</li>`;

    let li_ = document.createElement('li');

    let image = document.createElement('img');
    image.src = 'https://via.placeholder.com/150';

    li_.appendChild(image);
    ul_.appendChild(li_);
}

ul_.style['list-style-type'] = 'none';
ul_.style['padding-inline-start'] = 0;

div_.appendChild(ul_);


let p2 = document.createElement('p');
p2.innerHTML = '2nd - Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eius eligendi labore, nam officia porro quidem sed sit unde velit. Aut blanditiis consequatur dignissimos in laboriosam libero quasi rem tenetur!';
p2.style.color = 'red';

div_.appendChild(p2);
