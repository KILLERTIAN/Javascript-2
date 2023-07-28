const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

// ADD element at the end of to array
friends.push('Jay');
console.log(friends);

//Add element at the start of the array
friends.unshift('John');
console.log(freinds);

//Remove last element from the array 
friends.pop();
console.log(friends);

//Remove the first element from the array
friends.shift();
console.log(friends);

//To find index of an element in the array ['Micheal','Steven']
console.log(friends.indexOf('Steven')); //output 1

//If the elemeant is not inthe array than we get -1
console.log(friends.indexOf('Bob')); //output -1

//To find if the particular element is in the array or not
console.log(friends.includes('Steven'));//Output true
console.log(friends.includes('Bob'));   //Output false
