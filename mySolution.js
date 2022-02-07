// Mumbling
// function accum(s) {
//   let result = [...s]
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//     .join("-");
//   return result;
// }

// Descending Order
// function descendingOrder(n) {
//   let array = String(n).split("");
//   let result = array.sort().reverse().join("");
//   console.log(result);
//   return Number(result);
// }

//Highest and Lowest
// function highAndLow(numbers) {
//   const array = numbers.split(" ");
//   let minNum = +array[0];
//   let maxNum = +array[0];
//   for (let item of array) {
//     if (+item < minNum) minNum = +item;
//     if (+item > maxNum) maxNum = +item;
//   }
//   return `${maxNum} ${minNum}`;
// }

// Square Every Digit
// function squareDigits(num) {
//   let numToString = String(num);
//   let result = "";
//   for (let i = 0; i<numToString.length; i++ ) {
//     let sqe = parseInt(numToString[i]) * parseInt(numToString[i]);
//     result = result + String(sqe);
//   }
//   return parseInt(result);
// }

// // Array.diff
// function arrayDiff(a, b) {
//   return a.filter((value) => !b.includes(value));
// }

// // List Filtering
// function filter_list(l) {
//   return l.filter((value) => value === Number(value));
// }

// // Grasshopper - Summation
// var summation = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

// // Isogram ?? algorithm
// let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);
// // Or
// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size === str.length;
// }

// Beginner Series #3 Sum of Numbers
function GetSum(a, b) {
  let result = 0;
  let bigger = a > b ? a : b;
  let smaller = a > b ? b : a;
  for (let i = smaller; i <= bigger; i++) {
    result += i;
  }
  return result;
}
