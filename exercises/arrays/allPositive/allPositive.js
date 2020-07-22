/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */



let positiveNums =[2, 26, 73, 99];

let notPositiveNums = [2, 26, 73,99, -24, -13];

console.log(positiveNums);
console.log(notPositiveNums);

positiveNums = true;
notPositiveNums = false;


function allPositive(array) {
  if (positiveNums) {

    console.log ('these are all positive: ${positiveNums} ');

  } else {
    console.log('these numbers are not all positive: ${positiveNums}');
  }
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = allPositive;
