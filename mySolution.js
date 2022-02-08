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

// // Beginner Series #3 Sum of Numbers
// function GetSum(a, b) {
//   let result = 0;
//   let bigger = a > b ? a : b;
//   let smaller = a > b ? b : a;
//   for (let i = smaller; i <= bigger; i++) {
//     result += i;
//   }
//   return result;
// }

// // Tower builder
// // Надо смотреть на конструкцию башни и из нее брать алгоритм который засунуть в repeat
// function towerBuilder(nFloors) {
//   const tower = [];
//   for (let i = 0; i < nFloors; i++) {
//     tower.push(
//       " ".repeat(nFloors - i - 1) +
//         "*".repeat(i * 2 + 1) +
//         " ".repeat(nFloors - i - 1)
//     );
//   }
//   return tower;
// }
// console.log(towerBuilder(5));

// count of positive sum of neg in array of numb
// function countPositivesSumNegatives(input) {
//   if (input == null || input.length == 0) return [];

//   var positive = 0;
//   var negative = 0;

//   for (var i = 0, l = input.length; i < l; ++i) {
//     if (input[i] > 0) ++positive;
//     else negative += input[i];
//   }

//   return [positive, negative];
// }

//array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// let array = [5, 3, 2, 8, 1, 4];
// function sortArray(array) {
//   const OddArr = [];
//   const evenArr = [];
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenArr.push(array[i]);
//     } else {
//       OddArr.push(array[i]);
//     }
//   }

//   OddArr.sort((a, b) => a - b);

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       result.push(evenArr.shift());
//     } else {
//       result.push(OddArr.shift());
//     }
//   }
//   return result;
// }

// Square Every Digit
// function squareDigits(num) {
//   let arr = num
//     .toString()
//     .split("")
//     .map((elem) => elem * elem)
//     .join("");

//   //   let mutatedArr = arr.map(elem=>elem*elem).join("");

//   //   return Number(mutatedArr);
//   return Number(arr);
// }

// // abbrevName
// function abbrevName(name){

//   return name.split(" ").map(el=>el[0]).join(".").toUpperCase()

// }

// Invert values
// function invert(array) {
//   return array.map(el=> el * (-1));
// }

// //Keep Hydrated!
// function litres(time) {
//   return Math.floor(time * 0.5);
// }
