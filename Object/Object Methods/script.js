// Application of Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLiscense: true,
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
// Dot Method
console.log(jonas.calcAge(1991));

//Bracket Method
console.log(jonas['calcAge'](1991));

// Application of Objects without using parameters 
const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLiscense: true,
    calcAge: function () {
        return 2037 - this.birthYear;
    }
};
// Dot Method
console.log(jonas2.calcAge());
// Here `this` is jonas2 

//Another way 
calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
}
console.log(jonas2.calcAge());