const number = prompt('Ingrese un numero');

for (let index = 0; index < parseInt(number); index++) {
    console.log('hola')
}

let text = prompt('Ingrese un texto o "ESC" para salir.');
let result = '';
while (text !== 'ESC') {
    result += text;

    console.log(result);
    text = prompt('Ingrese un texto o "ESC" para salir.');
}
