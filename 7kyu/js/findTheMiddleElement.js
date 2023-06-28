// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
// Find the middle element
/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// P: 3 distinct numbers (decimal, +,-, 0)
// R: index of middle number

function gimme(triplet){
    
    // return triplet.indexOf([...triplet].sort( (a,b) => a - b)[1])           // Learned solution

    const sliced = triplet.slice()

    return sliced.indexOf(triplet.sort( (a, b) => a - b)[1])                // Learned solution. Best

    // let obj = {
    //     0: triplet[0],
    //     1: triplet[1],
    //     2: triplet[2]
    // }

    // const mid = triplet.sort( (a,b) => a-b)[1]

    // return +Object.keys(obj)[Object.values(obj).indexOf(mid)]

    // // ... First solution
    // // +: confusing but works
    // // -: bad hard coding
    
}

console.log(gimme([2, 3, 1]))       // 0
console.log(gimme([5, 10, 14]))       // 1
console.log(gimme([2.1, 3.2, 1.4]))       // 0
console.log(gimme([-2, -3, -1]))       // 0
console.log(gimme([-5.2, -10.6, 14]))       // 0