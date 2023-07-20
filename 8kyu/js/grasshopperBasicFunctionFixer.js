// https://www.codewars.com/kata/56200d610758762fb0000002
// Grasshopper - Basic Function Fixer
/*
Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
*/

// P: integer
// R: integer

function addFive(num){
    var total = num + 5
    return total
}

console.log(addFive(5))     // 10
console.log(addFive(0))     // 5
console.log(addFive(-5))     // 0