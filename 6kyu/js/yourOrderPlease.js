// https://www.codewars.com/kata/55c45be3b2079eccff00010f
// Your order, please

/*
DESCRIPTION:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/


function order(words){
    // variable for answer, length for # of words
    let answer = []
    let arr = words.split(' ')
    // console.log(arr)
    // loop
    for (let i = 1; i <= arr.length; i++){
        // conditional if word contains next number, add to answer
        for ( let j = 0; j < arr.length; j++) {
            // console.log(arr[j])
            if ( arr[j].includes(i)){
                // console.log(`${arr[j]} and ${i}`)
                answer.push(arr[j])
            }

        }
    }

    return answer.join(' ')
}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // Fo1r the2 g3ood 4of th5e pe6ople
// console.log(order("")) // ''