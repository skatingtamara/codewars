// https://www.codewars.com/kata/57a4d500e298a7952100035d
// Hex to Decimal

/*
Complete the function which converts hex number (given as a string) to a decimal number.
*/

// P: string
// R: integer, decimal

function hexToDec(hexString){
    // method
    return parseInt(hexString, 16)
}

console.log(hexToDec('1'))        // 1
console.log(hexToDec('a'))        // 10
console.log(hexToDec('10'))        // 16
console.log(hexToDec('FF'))        // 255
console.log(hexToDec('-C'))        // -12
