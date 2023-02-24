/* 
Desde la documentacion:

- Permite tener una alternativa a una funcion.
- Sintaxis entendible.
- No se utilizan constructores.
- Se puede utilizar palabras reservadas.

*/

function square(num) {
    return num*num;
}

const square = (num) => {
    return num*num;
}

// return implicito
const square = num => num * num; // mas amigable y entendible, con un solo parametro

