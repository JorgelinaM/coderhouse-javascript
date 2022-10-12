const booksList = document.querySelector('.js-books');
const addButtons = booksList.querySelectorAll('button');
const cart = document.querySelector('.js-cart');
const paymentForm = document.querySelector('.js-payment');

async function fetchBooks() {
    const response = await fetch('./books.json');
    const books = await response.json();

    return books;
}

async function renderBooks() {
    const books = await fetchBooks();
    books.forEach(book => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');
        
        span.innerText = book.title;
        button.innerText = 'Agregar';
        button.setAttribute('data-id', book.id);
        button.addEventListener('click', addBookToCart)

        li.append(span);
        li.append(button);
        booksList.append(li);
    })
}

renderBooks();

function addBookToCart({ target }) {
    const bookName = target.previousElementSibling.innerText;
    const book = {
        id: target.getAttribute('data-id'),
        quantity: 1,
        title: bookName,
    };
    const savedBook = setLocalStorageItem(book);
    renderCart(savedBook);
}

function removeBook({ id }) {
    const storageBooks = localStorage.getItem('books');
    parsedBooks = JSON.parse(storageBooks);
    const index = parsedBooks.findIndex((parsedBook) => parsedBook.id === id);
    parsedBooks.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(parsedBooks));
}

function setLocalStorageItem(book) {
    const books = localStorage.getItem('books');
    if (books) {
        parsedBooks = JSON.parse(books);

        const storedBookIndex = parsedBooks.findIndex((parsedBook) => parsedBook.id === book.id);
        if (storedBookIndex > -1) {
            parsedBooks[storedBookIndex].quantity += 1;
            localStorage.setItem('books', JSON.stringify(parsedBooks));
            return parsedBooks[storedBookIndex];
        } else {
            parsedBooks.push(book)
            localStorage.setItem('books', JSON.stringify(parsedBooks));
            return book;
        }
    } else {
        const bookList = [];
        bookList.push(book);
        localStorage.setItem('books', JSON.stringify(bookList));
        return book;
    }
}


function renderCart(book) {
    const { title, quantity, id } = book;

    const existingLi = document.getElementById(book.id);
    if (existingLi) {
        existingLi.firstElementChild.innerText = `${title}: ${quantity}`;
    } else {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = `${title}: ${quantity}`;
        li.append(span);
        li.id = id;
        
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Borrar';
        
        li.append(removeButton);
        
        cart.append(li);

        removeButton.addEventListener('click', () => {
            removeBook(book);
            li.remove();
            const storageBooks = JSON.parse(localStorage.getItem('books'));
            console.log('storageBooks', storageBooks.length);
            storageBooks.length === 0 && paymentForm.setAttribute('hidden', true); 
        })
    }
    paymentForm.removeAttribute('hidden')
}

const storageBooks = localStorage.getItem('books');

if (storageBooks) {
    const listOfBooks = JSON.parse(storageBooks);
    for (const book of listOfBooks) {
        renderCart(book);
    };
}

paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    Swal.fire({
        title: 'Pago Completado!',
        text: 'Se enviaran los libros a su domicilio',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
})

