// https://www.codewars.com/kata/56747fd5cb988479af000028
// Get the Middle Character
/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/
function getMiddle(s){
    // // if odd, get exact middle number using floor                      // First solution
    // if(s.length % 2 === 1) {
    //     return s[Math.floor(s.length/2)]
    // } else {
    // // if even, get middle two, subtracting 1 for the first value because the array starts counting from 0
    //     return s[(s.length/2) - 1]+ s[s.length/2]
    // }
    
    // return s.length % 2 === 0 ? s[(s.length/2) - 1] + s[s.length/2] : s[Math.floor(s.length/2)]             // Second solution

    return s.slice((s.length-1)/2, s.length/2+1)                        // Learned solution


}

console.log(getMiddle('test'))
console.log(getMiddle('testing'))
console.log(getMiddle('middle'))
console.log(getMiddle('A'))