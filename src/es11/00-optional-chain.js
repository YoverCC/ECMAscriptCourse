// validar items o accesos en objetos

const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

//console.log(users.gndx.age);
//console.log(users.bebeloper.country);
console.log(users?.bebeloper?.country); // optional chain