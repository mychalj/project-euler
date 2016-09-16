/*
 * Javascript Solution to Project Euler problem 2
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

//Creates an array with the starting numbers.
var fibNums = [1, 2];
//Theses variables are used to iterate the loop and provide the index number for the values that are being used.
var iOne = 0;
var iTwo = 1;
var i = 0;
//Creates an empty array to hold the even numbers.
var evenNums = [];

//This loop calculates the numbers in the Fibonacci sequence going up to 4 million and places them in an array.
while (fibNums[iTwo] < 4000000) {
  num = fibNums[iOne] + fibNums[iTwo];
  fibNums.push(num);
  iOne += 1;
  iTwo += 1;
}

//This loop pushes the even numbers from the fibNums array to the evenNums array.
while (fibNums[i] < 4000000) {
  if (fibNums[i] % 2 === 0) {
    evenNums.push(fibNums[i]);
  }
  i += 1;
}

/*This total variable stores the value that is calculated when the
reduce method is used on the num array, which adds together all the
individual values inside the array.*/
var total = evenNums.reduce(function(sum, num){return sum + num;});

//This outputs the total variable.
console.log(total);
