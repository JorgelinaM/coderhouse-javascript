const books = [];

function addBook() {
    const book = prompt('Ingrese un libro');
    books.push(book);
}

function removeLastBook() {
    books.pop();
}

let shouldContinueBooks;
while(shouldContinueBooks !== 'ESC') {
    let response = prompt('¿Desea agregar un libro? Responda SI o NO');

    while(response !== 'SI' && response !== 'NO') {
        response = prompt('¿Desea agregar un libro? Responda solo SI o NO');
    }
    
    if (response === 'SI') {
        addBook()
    }
    
    if (books.length > 0) { 
        response = prompt('¿Desea remover el último libro? Responda SI o NO');
        
        while(response !== 'SI' && response !== 'NO') {
            response = prompt('¿Desea remover el último libro? Responda solo SI o NO');
        }

        if (response === 'SI') {
            removeLastBook()
        }
    }

    if (books.length > 0) alert('Los libros ingresados son:' + books);

    shouldContinueBooks = prompt('Presione ESC para salir o cualquier texto para continuar');
}


// function promptValues() {
//     let amount = parseFloat(prompt("Ingrese un monto"));
//     while(isNaN(amount)) {
//         amount = parseFloat(prompt("El monto debe ser un número. Ingrese nuevamente un valor."));
//     }

//     let quota = parseInt(prompt('¿Cuantas cuotas?'));
//     while(isNaN(quota)) {
//         quota = parseFloat(prompt("El monto debe ser un número. Ingrese nuevamente la cantidad de cuotas."));
//     }

//     return { amount, quota };
// }

// function paymentCalc() {    
//     const values = promptValues();
    
//     const payment = values.amount / values.quota;
//     alert(payment);
// }

// paymentCalc();
// const continueMessage = 'Precione ESC para salir, de lo contrario el programa continuara';
// let shouldContinue = prompt(continueMessage);

// while (shouldContinue !== 'ESC') {
//     paymentCalc();

//     shouldContinue = prompt(continueMessage);
// }