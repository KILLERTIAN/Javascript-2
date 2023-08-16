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