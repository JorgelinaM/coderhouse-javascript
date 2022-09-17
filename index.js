const user = {};
user.name = prompt('Ingrese su nombre');
user.age = prompt('Ingrese su edad');
user.address = prompt('Ingrese su dirección');

const h1 = document.getElementsByTagName('h1')[0];
h1.innerText = h1.innerText + ' ' + user.name;

const header = document.querySelector('header');
const ul = document.createElement('ul');
const ageLi = document.createElement('li');
const addressLi = document.createElement('li');

ageLi.innerText = `Edad: ${user.age}`;
addressLi.innerText = `Dirección: ${user.address}`;

ul.append(ageLi);
ul.append(addressLi);
header.append(ul);

const bookInput = document.getElementById('book');
const addBookButton = document.querySelector('.js-add-books');
const booksList = document.querySelector('.js-books');

addBookButton.addEventListener('click', function() {
    if (bookInput.value !== '') {
        const li = document.createElement('li');
        li.innerText = bookInput.value;
        
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Borrar';
        
        li.append(removeButton);
        
        booksList.append(li);
        bookInput.value = '';
        
        removeButton.addEventListener('click', function() {
            li.remove();
        })
    }
})
