const str = '12345.678';
console.log(typeof str);

function weeblyFloat(string) {
  let decimalLoc = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '.') {
      decimalLoc = i;
    }
  }
  let num = 0;
  console.log(string.length);
  for (let i = 0; i < string.length; i += 1) {
    if (i < decimalLoc) {
      num += string[i] * (10 ** (decimalLoc - 1 - i));
    } else if (i > decimalLoc) {
      num += string[i] * (10 ** (decimalLoc - i));
    }
  }
  return num;
}

// or could coerce the string into a number like
// function weeblyFloat(string) {
//   const num = +string;
//   return num;
// }
console.log(weeblyFloat(str));

console.log(typeof weeblyFloat(str));
