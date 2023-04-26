// https://www.codewars.com/kata/59ca8246d751df55cc00014c
// Is he gonna survive?
/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

// function hero(bullets, dragons){                // First solution
//     return (bullets / dragons) >= 2
// }

const hero = (bullets, dragons) => bullets >= (dragons * 2)     // Learned solution


console.log(hero(10,5))
console.log(hero(7,4))
console.log(hero(4,5))
console.log(hero(100,40))