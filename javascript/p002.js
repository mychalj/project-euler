/*
 * Javascript Solution to Project Euler problem 2
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var fibNums = [];
var Nums = [1, 2];
var nextFib = Nums.reduce(function(sum, num){return sum + num;});

while (nextFib < 5) {
  nextFib;
  Nums.push(nextFib);
  fibNums.push(Nums[0]);
  Nums.splice(0, 1);
}

console.log(fibNums);
