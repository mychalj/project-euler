/*
 * Javascript Solution to Project Euler problem 4
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

function isPalindrome(num) {
  if (num === parseInt(num.toString().split("").reverse().join(""))) {
    return true;
  } else {
    return false;
  }
}

var i, j, product, max = 0;

for (i = 100; i < 999; i++) {
  for (j = i; j < 999; j++) {
    product = i * j;
    if (isPalindrome(product)) {
      if (max < product) {
        max = product;
      }
    }
  }
}

console.log("The largest palindrome made from the product of two 3-digit numbers is " + product + ".");
