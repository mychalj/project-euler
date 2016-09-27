/*
 * Javascript Solution to Project Euler problem 2
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var fibNums = [1, 2];
var iOne = 0;
var iTwo = 1;
var i = 0;
var evenNums = [];

while (fibNums[iTwo] < 4000000) {
  num = fibNums[iOne] + fibNums[iTwo];
  fibNums.push(num);
  iOne += 1;
  iTwo += 1;
}

while (fibNums[i] < 4000000) {
  if (fibNums[i] % 2 === 0) {
    evenNums.push(fibNums[i]);
  }
  i += 1;
}

var total = evenNums.reduce(function(sum, num){return sum + num;});

console.log(total);
