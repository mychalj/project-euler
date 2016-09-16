/*
 * Javascript Solution to Project Euler problem 1
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

//Creates an empty array to store all the values needed.
var num = [];

/*This for loop takes all the natural numbers that are multiples
of 3 or 5 and places them in the num array.*/
for(var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    num.push(i);
  }
}

/*This total variable stores the value that is calculated when the
reduce method is used on the num array, which adds together all the
individual values inside the array.*/
var total = num.reduce(function(total, num){return total + num;});
//This outputs the total variable.
console.log(total);
