=begin
 * Ruby Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

num = 600851475143
x = 2

while x < num do
  if num % x == 0
    num /= x
  else
    x += 1
  end
end

puts x
