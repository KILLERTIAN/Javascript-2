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