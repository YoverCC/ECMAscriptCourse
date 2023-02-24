const fnAsync = () => {
    return new Promise((resolve, reject) => {
        // if con el concepto ternario
        (true)
            ? setTimeout(() => resolve('AsynC!!'), 2000)
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');

// Aqui ejecuta todo y no espera la promesa, se ve en consola

const anotherFn2 =  () => {
    const something =  fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before2');
anotherFn2();
console.log('After2');