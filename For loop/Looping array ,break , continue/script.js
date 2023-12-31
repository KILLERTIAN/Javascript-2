// Array on which our loop is working
const jonas = [Firstname, 'schmedtmann', 2037 - 1991, 'teacher', friends];

//Creating a new array 
const types = [];

// for loop which prints all the values in the array 
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    //Filling the new array
    types[i] = typeof jonas[i];

    //Another way of filling array
    //types.push(typeof jonas[i]);


}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; // Only strings
    console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] == 'number') break;
    // break the loop if there is a number present
    console.log(jonas[i], typeof jonas[i]);
}

// Looping Backwards 

const jonas1 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting Exercise ${exercise}`);
    // Loop inside a loop
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
