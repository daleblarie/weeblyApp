// make a function to add strings to the new array
// make a function to deal with a layer of array
// make a loop to call that function when it comes accross an array
const arr1 = ['another', 'array'];
const arr2 = ['and', 'stuff2'];
const arr3 = ['first', [arr2], 'end'];
const oldArray = ['stuff', 'things', arr1, 'cool', arr3];

function flattener(array) {
  // array.push('hihi'); // changes oldArray outide of the function
  const returnValue = [];
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'object') {
      // returnValue = returnValue.concat(flattener(array[i]));
      // vvv or can do using the spread function (...) vvv
      returnValue.push(...flattener(array[i]));
    } else {
      returnValue.push(array[i]);
    }
  }
  console.log(returnValue);
  return returnValue;
}

console.log(flattener(oldArray));

// console.log(oldArray);
// const arr = [1, 2, 3, 'a', 'b'];
// console.log(...arr);
//
// console.log(1, 2, 3, 'a', 'b');
