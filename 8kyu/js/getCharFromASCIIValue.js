// https://www.codewars.com/kata/55ad04714f0b468e8200001c
// get character from ASCII Value
/*
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0
For ASCII table, you can refer to http://www.asciitable.com/
*/


function ascii(n){
    return String.fromCharCode(n)
}

console.log(ascii(65))