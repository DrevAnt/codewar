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
