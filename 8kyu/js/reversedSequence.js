// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Reversed sequence
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

// const reverseSeq = n => {           // First solution
//     let result = []
//     for( let i = n; i > 0; i-- ){
//         result.push(i)
//     }
//     return result
// }

const reverseSeq = n => {                                               // Learned solution
    return Array(n).fill(0).map( (element, index) => n - index)
}


console.log(reverseSeq(5) === [5, 4, 3, 2, 1])
console.log(reverseSeq(5))