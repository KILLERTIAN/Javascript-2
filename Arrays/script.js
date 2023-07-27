// Array example

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

// Another way of creating array 
const years = new Array(1991, 1984, 2008, 2020);

//How to call a specific value from array
console.log(friends[0]);

// To find thwe length of the array 
console.log(friends.length);

//To print last element from the array 
console.log(friends[friends.length - 1]);

// to change a value from array
friends[2] = 'Jay';
console.log(friends);

// Cannot assign new value to comple array 
friends = ['Bob', 'Alice']
// because friends array is already existing

// WE can use an array or expression inside another array
const Firstname = 'Jonas';
const jonas = [Firstname, 'schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);