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

// Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//   return n < 0 || m < 0 ? 0 : n * m;
// }

// //Beginner Series #2 Clock
// function past(h, m, s) {
//   //#Happy Coding! ^_^
//   return s * 1000 + m * 60000 + h * 3600000;
// }

// // Next Perfect Score
// fubction nextSquare(n) {
//   let squaredNumber = Math.sqrt(n);

//   if(Number.isInteger(squaredNumber) === true){
//     return Math.pow(squaredNumber+1, 2)
//   }else{
//     return null
//   }
// }

// // Two to one (string concat and sort)
// function longest(s1, s2) {
//   let result = [...new Set(s1 + s2)].sort().join("");
//   return result;
// }
// Remove duplicate elements from the array
// // Use to remove duplicate elements from the array

// const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

// console.log([...new Set(numbers)])

// // [2, 3, 4, 5, 6, 7, 32]

// // Fake Binary
// // Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// function fakeBin(x) {
//   let toArr = x.split("");
//   let result = toArr.map((el) => (el < 5 ? 0 : 1)).join("");
//   return result;
//   // return x.split("").map(el=> el<5 ? 0:1).join("")
// }
