// creating a function
function logger() {
    console.log('My name is Jonas');
}

// calling /running or invoking funtion
logger();

function fruitprocessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

fruitprocessor(5, 6);
// output 5 6

const applejuice = fruitprocessor(5, 6);
console.log(applejuice);
// output Juice with 5 apples and 6 oranges
