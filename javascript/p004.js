/*
 * Javascript Solution to Project Euler problem 4
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

//Determines whether the number is a palidrome.
function isPalindrome(num) {
  if (num === parseInt(num.toString().split("").reverse().join(""))) {
    return true;
  } else {
    return false;
  }
}

//Calculates the largest palindrome that was requested.
function largest_palindrome(min, max) {
  var i, j, product, answer = 0;

  for (i = min; i < max; i++) {
    for (j = i; j < max; j++) {
      product = i * j;
      if (product > answer && isPalindrome(product)) { answer = product; }
    }
  }
  return answer
}

//Outputs the largest palindrome.
console.log(largest_palindrome(100, 999));
