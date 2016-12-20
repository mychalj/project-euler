# Ruby Solution to Project Euler problem 9
# by Mychal Johnson
# https://github.com/mychalj/project-euler

def pythagorean_triplet(limit)
  (1..limit).each do |a|
    ((a + 1)..limit).each do |b|
      c = limit - a - b

      puts a * b * c if a**2 + b**2 == c**2
    end
  end
end

pythagorean_triplet(1000)
