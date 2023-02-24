var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'
console.log(fruit)

const animal = 'Dog'; // no se puede reasignar con const
animal = 'Cat';
console.log(animal)

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // no accesible fuera del bloque donde son declaradas - block scope
        const fruit3 = 'Banana'; // block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();