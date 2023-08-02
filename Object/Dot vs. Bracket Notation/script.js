//Creating Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
}
console.log(jonas);

// To get lastname from the object
console.log(jonas.lastName);
console.log(jonas['lastName']);

//Getting elements from objects 
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName,lastName,age,job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName,lastNamw,age,job and friends')
}