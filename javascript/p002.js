/*
 * Javascript Solution to Project Euler problem 2
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var fibNums = [1, 2];
var iOne = 0;
var iTwo = 1;

while (fibNums[iTwo] < 89) {
  num = fibNums[iOne] + fibNums[iTwo];
  fibNums.push(num);
  iOne += 1;
  iTwo += 1;
}

console.log(fibNums);
