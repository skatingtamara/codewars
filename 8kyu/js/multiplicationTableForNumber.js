// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
// Multiplication table for number
/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/

// P: integer
// R: string and numbers

function multiTable(number){
    // // variable for answer
    // let answer = ''
    // // loop
    // for (let i = 1; i <= 10; i++){
    //     answer += `${i} * ${number} = ${i * number}\n`
    // }
    // // trim last return
    // return answer.trim()

    // // first solution: simple. can't think how to do this without loop.

    return [...Array(10)].map( (e,i) => `${i+1} * ${number} = ${(i+1) * number}`).join('\n')

    // learned solution: make an array of length 10 with [...Array(10)]
}

console.log(multiTable(5))      // '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'