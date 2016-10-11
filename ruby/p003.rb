=begin
 * Ruby Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

#This is the number that the function will find the largest prime factor(lpm) of.
num = 600851475143
#This variable is used to iterate through the loop to find the lpm.
x = 2

#This while loop keeps going until the desired lpm is stored in x.
while x < num do
  if num % x == 0
    num /= x
  else
    x += 1
  end
end

#This outputs the lpm stored in x.
puts x
