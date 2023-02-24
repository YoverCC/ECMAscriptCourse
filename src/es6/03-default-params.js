// before ES6
function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 26;
    var country = country || 'PE';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

// ES6
function newAdmin(name = 'Oscar', age = 34, country = 'PE') {
   console.log(name, age, country); 
}
newAdmin();
newAdmin('Ana',28,'CO')

