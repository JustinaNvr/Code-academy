let userInfoOutput = document.getElementById('main');

let user = {
    name: 'NAME',
    surname: 'SURNAME'
}

userInfoOutput.innerHTML += `<h2>User information</h2> <p>Users name is ${user.name} and users surname is ${user.surname}</p>`;
