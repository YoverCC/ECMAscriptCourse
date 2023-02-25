const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true){
            //resolve('Hey!!');
            setTimeout(() => {
                resolve('Hey! han pasado 2 seg')
            }, 2000)
            // El timeout para que espere un tiempo y veas la magia :)
        }else{
            reject('Whooops');
        }
    })    
}

// promesa: algo que va a pasar hoy, mañana o nunca

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));

console.log('Ya llame a la funcion, espera porfa :v')

