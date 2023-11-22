// https://www.codewars.com/kata/5302d846be2a9189af0001e4
// Welcome to the City

/*
Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

// P: array of strings, string, string
// R: string

function sayHello(name, city, state){
    // template literals and join to return statement
    return  `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))          //  'Hello, John Smith! Welcome to Phoenix, Arizona!')
console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'))      // Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')


/*

https://www.codewars.com/kata/5302d846be2a9189af0001e4
Welcome to the City


Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

//P: array, then strings
//E: 
//R: string
/*
function sayHello(name, city, state){
    // break down name
    let message = `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}`
    // add city and state
    // messsage = message + ` Welcome to ${city}, ${state}`
    return message
};


console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')) // Hello, John Smith! Welcome to Phoenix, Arizona!

console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois')) // 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'

*/