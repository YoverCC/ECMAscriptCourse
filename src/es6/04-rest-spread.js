// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
let[,c] = fruits; // solo me intereso en el segundo elemento
console.log(a, fruits[1]); // es mejor usar de destructuring que posicion en los arrays

// object destructuring

let user = { username: 'Oscar', age: 34};
let {username , age} = user;
console.log(username, user.age);

// spread operator

let person = {name : 'Oscar', age: 28, houses: {house: 'SJL'}};
let country = 'MX';

let data = { id: 1, ...person, country} // propagacion
console.log(data);

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum (1, 1, 2, 3);


/*
Spread syntax: desestructura -> deconstruye
Rest syntax: empaqueta -> construye
*/