const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true){
            //resolve('Hey!!');
            setTimeout(() => {
                resolve('Hey luego de 5 seg')
            }, 5000)
            // El timeout para que espere un tiempo y veas la magia :)
        }else{
            reject('Whooops');
        }
    })    
}

// promesa: algo que va a pasar hoy, mañana o nunca

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

console.log('Ya llame a la funcion, espera porfa :v')

