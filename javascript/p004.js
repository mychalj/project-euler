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
