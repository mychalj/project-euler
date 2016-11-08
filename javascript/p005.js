/*
 * Javascript Solution to Project Euler problem 5
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }
  return true;
}

function largestPower(num) {
  var powers = [];
  var index = 0;
  var start = 0;

  for (var i = 2; i <= num; i++) {
    for (var j = 2; j <= num; j++) {
      if (isPrime(i) && Math.pow(i, j) <= num) {
        powers[index] = Math.pow(i, j);
        start = i;
      }
    }
    index++
  }
  powers.unshift(start);
  return powers;
}

function smallestMultiple(limit) {
  var powersArr = (largestPower(limit)).slice(1);
  var start = (largestPower(limit)).unshift();
  var answer = powersArr.reduce(function(a, b) { return a * b; });

  for (var i = start + 1; i <= limit; i++) {
    if (isPrime(i)) {
      answer *= i;
    }
  }
  return answer;
}

console.log(smallestMultiple(20));
