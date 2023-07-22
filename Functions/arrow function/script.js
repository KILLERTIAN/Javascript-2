// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 665 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));