// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// Count by X
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
// function countBy(x, n){                     // First solution
//     let fullCount = []
//     for(let i = 1; i <= n ; i++){
//         fullCount.push(x * i) 
//     }
//     return fullCount
// }

// function countBy(x,n){                                                  // Second solution
//     return Array.from({length: n}, (element, i) => (i + 1) * x)
// }

function countBy(x,n){
    return [...Array(n)].map( (element, i) => ++i * x)                  // Learned solution
}


console.log(countBy(1,10))
console.log(countBy(2,5))