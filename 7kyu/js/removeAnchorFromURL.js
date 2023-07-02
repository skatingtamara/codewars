// https://www.codewars.com/kata/51f2b4448cadf20ed0000386
// Remove anchor from URL
/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// P: string with a #
// R: same string with # and anything followed to be removed.

function removeUrlAnchor(url){
    // Split, return only first element
    return url.split('#')[0]

    // ... First solution
    // +: clean and easy
}

console.log(removeUrlAnchor('www.codewars.com#about'))      // www.codewars.com
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))        // www.codewars.com/katas/?page=1
console.log(removeUrlAnchor('www.codewars.com/katas/'))     // www.codewars.com/katas/