/*
 * Javascript Solution to Project Euler problem 9
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

// Finds the Pythagorean triplet for 'limit' and calculates the
// product of the three integers
function pythagorean_triplet(limit) {
  for (var a = 1; n < limit; a++) {
    for (var b = a + 1; b < limit; b++) {
      var c = limit - a - b

      if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
        return (a * b * c)
      }
    }
  }
  console.log('Not found')
}

console.log(pythagorean_triplet(1000))
