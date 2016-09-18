=begin
 * Ruby Solution to Project Euler problem 2
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

#Creates an array with the starting numbers.
fibNums = [1, 2]
#Theses variables are used to iterate the loop and provide the index number for the values that are being used.
iOne = 0
iTwo = 1
i = 0
#Creates an empty array to hold the even numbers.
evenNums = []

#This loop calculates the numbers in the Fibonacci sequence going up to 4 million and places them in an array.
while (fibNums[iTwo] < 89) do
  num = fibNums[iOne] + fibNums[iTwo]
  fibNums << num
  iOne += 1
  iTwo += 1
end

#This loop pushes the even numbers from the fibNums array to the evenNums array.
while (fibNums[i] < 89) do
  if (fibNums[i] % 2 == 0)
    evenNums << fibNums[i]
  end
  i += 1
end

#This total variable stores the value that is calculated when the
#inject method is used on the num array.
total = evenNums.inject(0){|sum, num| sum + num}

#This outputs the total variable.
puts total
