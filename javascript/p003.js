/*
 * Javascript Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

//This is the number that the function will find the largest prime factor(lpm) of.
var num = 600851475143;
//This variable is used to iterate through the loop to find the lpm.
var x = 2;

//This function keeps looping until the lpm is stored in x.
var highestPrime = function(val) {
  while (x < val) {
    if (val % x === 0) {
      val /= x;
    } else {
      x++;
    }
  }
  console.log(x);
};

//Running this function will print the lpm stored in x.
highestPrime(num);
