let hello = 'Hello'; //string
let world = 'World';

let epicPhrase = hello + ' ' + world + '!'; // before ES6

// Template literals
let epicPhrase2 = `${hello} ${world}!`; // comillas francesas
console.log(epicPhrase2)

// Multiline strings

let lorem = 'esto es un string\n' + 'esto es otra linea';

let lorem2 = `Esta es una frase epica
la continuacion de esa frase epica.`;

console.log(lorem);
console.log(lorem2);