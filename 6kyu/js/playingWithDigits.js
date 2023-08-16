// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
// Playing with digits
/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

// P: integers
// R: integer or -1

function digPow(n, p){
    // // break up n
    // let arr = n.toString()
    // let bigSum = 0
    // // loop
    // for( let i = p, j = 0; j < arr.length; i++, j++){
    //     bigSum += Math.pow( +arr[j], i)
    // }
    // return Number.isInteger(bigSum / n) ? (bigSum / n) : -1

    // // // First solution: clear, single loop 

    let bigSum = [...n.toString()].reduce((acc, c, i) => acc + Math.pow(c, p + i), 0)
    return bigSum % n ? -1 : bigSum / n

    // Learned solution: nice to use reduce. Also good with mod
}

console.log(digPow(89, 1))      // 1
console.log(digPow(92, 1))      // -1
console.log(digPow(46288, 3))      // 51