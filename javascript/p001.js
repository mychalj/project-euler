/*
 * Javascript Solution to Project Euler problem 1
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var num = [];

for(var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    num.push(i);
  }
}

var total = num.reduce(function(total, num){return total + num;});

console.log(total);
