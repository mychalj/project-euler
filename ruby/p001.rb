=begin
 * Ruby Solution to Project Euler problem 1
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

num = []

for i 1..1000
  if i % 3 == 0 || i % 5 == 0
    num << i
  end
end

print num
