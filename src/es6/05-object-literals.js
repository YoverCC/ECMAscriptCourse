// enhaced object literals

// si el mismo nombre que se pasa al objeto puede usarse de esta forma
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("gndx", 34, "PE", 1));
