/*
 * Javascript Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

//This is the number that the function will find the largest prime factor(lpm) of.
var num = 600851475143;
//This variable is used to iterate through the loop to find the lpm.
var largest_prime = 2;

//This function keeps looping until the lpm is stored in largest_prime.
var highestPrime = function(val) {
  while (largest_prime < val) {
    if (val % largest_prime === 0) {
      val /= largest_prime;
    } else {
      largest_prime++;
    }
  }
  console.log(largest_prime);
};

//Running this function will print the lpm stored in largest_prime.
highestPrime(num);
