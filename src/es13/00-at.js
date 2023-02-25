
const array = ["one", "two", "three", "four", "five", "six"];

// no conocemos las longitudes, como acceder al ultimo sin saber

console.log(array[array.length - 1]); // antes
console.log(array.at(-1));
console.log(array.at(1));