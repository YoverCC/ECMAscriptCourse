// objeto global, todo lo que este almacenado

console.log(window); // navegador
console.log(global); // node
console.log(self); // webworker, que corren en un navegador
console.log(globalThis); // expone la informacion segun sea el contexto, window, global o self