// https://www.codewars.com/kata/54e6533c92449cc251001667
// Unique In Order

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// P: str or array
// R: array of unique items

function uniqueInOrder(iterable){
    // // variable for answer
    // let answer = []
    // // loop
    // for (let i = 0; i < iterable.length; i++){
    //     // add new, skip if same
    //     if ( iterable[i] !== iterable[i-1]){
    //         answer.push(iterable[i])
    //     }
    // }
    // return answer

    // // First solution: clean, works

    return [...iterable].filter( (e, i) => e !== iterable[i-1])

    // learned solution: creative.

}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))       //  ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))       //  ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       //  [1,2,3]
console.log(uniqueInOrder([]))       //  [1,2,3]
