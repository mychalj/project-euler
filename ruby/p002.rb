=begin
 * Ruby Solution to Project Euler problem 2
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

fibNums = [1, 2]
iOne = 0
iTwo = 1
i = 0
evenNums = []

while (fibNums[iTwo] < 89) do
  num = fibNums[iOne] + fibNums[iTwo]
  fibNums << num
  iOne += 1
  iTwo += 1
end

while (fibNums[i] < 89) do
  if (fibNums[i] % 2 == 0)
    evenNums << fibNums[i]
  end
  i += 1
end
