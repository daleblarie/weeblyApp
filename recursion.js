// this should work for all non negative numbers
// exponent(base, power) {
//   return exponent of base to the power
// }

// way 1
// function exponent(base, power) {
//   const result = base ** power;
//   return result;
// }

// way 2
// function exponent(base, power) {
//   let result = 1;
//   for (let i = 0; i < power; i += 1) {
//     result *= base;
//   }
//   return result;
// }

// recursive way
function exponent(base, power) {
  if (power === 0) {
    return 1;
  }
  return base * exponent(base, power - 1);
}

console.log(exponent(2, 4));

// exponent(2, 4) === 2 * exponent(2, 3);
