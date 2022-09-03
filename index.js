function promptValues() {
    let amount = parseFloat(prompt("Ingrese un monto"));
    while(isNaN(amount)) {
        amount = parseFloat(prompt("El monto debe ser un número. Ingrese nuevamente un valor."));
    }

    let quota = parseInt(prompt('¿Cuantas cuotas?'));
    while(isNaN(quota)) {
        quota = parseFloat(prompt("El monto debe ser un número. Ingrese nuevamente la cantidad de cuotas."));
    }

    return { amount, quota };
}

function paymentCalc() {    
    const values = promptValues();
    
    const payment = values.amount / values.quota;
    alert(payment);
}

paymentCalc();
const continueMessage = 'Precione ESC para salir, de lo contrario el programa continuara';
let shouldContinue = prompt(continueMessage);

while (shouldContinue !== 'ESC') {
    paymentCalc();

    shouldContinue = prompt(continueMessage);
}