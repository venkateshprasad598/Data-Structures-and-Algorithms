// ******************Is There an Upward Trend? ***************

// upwardTrend([1, 2, 3, 4]) ➞ true

// upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false

// upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"

// upwardTrend([1, 2, 3, 6, 7]) ➞ true

const upward = (arr) => {
  let upward = "upward";
  let isString = false;

  arr.sort((a, b) =>
    typeof b === "string" || typeof a === "string"
      ? (isString = true)
      : a - b < 0
      ? (upward = "notUpward")
      : null
  );
  return isString === true
    ? "Strings not permitted!"
    : upward === "upward"
    ? true
    : upward === "notUpward"
    ? false
    : null;
};
let answer = upward([1, 2, 3, 3, 5, 8]);
console.log(answer);
// ******************Find the Second Occurrence of "zip" in a String ***************

// const findZip = (string) => {
//   let index = string.indexOf("zip");

//   let splitString = string.split("");

//   splitString.splice(index, 1);

//   let splicedString = splitString.join("").indexOf("zip");

//   return splicedString === -1 ? -1 : splicedString + 1;
// };
// let answer = findZip("zip is zip");
// console.log(answer);

// ******************Find the Mean*********************
// const mean = (num) => {
//   return (
//     num
//       .toString()
//       .split("")
//       .map((data) => parseInt(data))
//       .reduce((a, b) => a + b) / num.toString().length
//   );
//   OR;
// let nums = num.toString().split("");
// let sum = nums.reduce((a, b) => {
//   return a + +b;
// }, 0);
// return sum;
// };
// console.log(mean(33));

// let sum = 12;
// let num = sum.toString().split("");
// let mum = num.map((data) => parseInt(data));
// console.log(mum);
// let jum = mum.reduce((a, b) => a + b);
// console.log(jum / mum.length);
// ****************** Swapping largest number *********************
// const swap = (num) => num.toString().split("").reverse().join("") <= num;
// console.log(swap(26));

// let num = 26;
// console.log(num.toString().split(""));
// ****************** Bollean chain *********************

// function and(arr) {
//   return arr.reduce((a, b) => {
//     console.log(a);
//     console.log(b);
//     console.log("---------");
//     return a !== b;
//   });
// }
// let answer = and([1, 2, 3, 4]);
// console.log(answer);

// console.log(false || true);

// ****************** Zero to one and one to Zero*********************

// function string(str) {
//   let mystr = str.toLowerCase().split(" ");
//   let map = mystr
//     .map((data) => {
//       if (data == "one") return 1;
//       if (data == "zero") return 0;
//     })
//     .filter((data) => {
//       return data >= 0;
//     });

//   if (map.length % 8 === 0) {
//     return map.join("");
//   } else {
//     let rem = map.length % 8;
//     return map.splice(0, map.length - rem).join("");
//   }
// }
// let answer = string("one one one one one zero zero zero");
// console.log(answer);
// ******************EXPERIMENTING JS*********************

// console.log("Hello");

// const array = [true, false, true, true];
// console.log(
//   array.reduce((a, b) => {
//     console.log(a);
//     console.log(b);
//     console.log("-------------");
//     return a && b;
//   })
// );
// function textToNumberBinary(str) {
//   var arr = str.toLowerCase().split(" ");
//   arr = arr.map( x => {
//     if (x == "one") return "1";
//     if (x == "zero") return "0";
//     return "";
//   }).filter( x => x.length > 0);

//   var rem = arr.length % 8;
//   if (rem === 0) return arr.join("");
//   return arr.splice(0, arr.length - rem).join("");
// }

// console.log(5 % 8);

// function spread(string) {
//   let strings = string.toLowerCase().split(" ");
//   let newString = strings.map((data) => {
//     if (data == "zero") return 0;
//     if (data == "one") return 1;
//   });
//   console.log(newString);

//   let rem = newString.length % 8;
//   let answer = "";
//   rem === 0
//     ? (answer = newString.join(""))
//     : (answer = newString.splice(0, newString.length - rem).join(""));
//   return answer;
// }
// spread(
//   "zero zero one one zero Zero zero zero zero zero one one zero Zero zero"
// );

// function fac(n) {

//   if (n === 1) {
//     return 1;
//   }
//   return n * fac(n - 1);
// }
// console.log(fac(5));

// let a = 30;
// let answer;
// a === 10
//   ? (answer = "a")
//   : a === 20
//   ? (answer = "a 20")
//   : a === 30
//   ? (answer = "a 30")
//   : null;
// console.log(answer);

// var array = [];
// let a = 1;
// // do {
// //   array.push(a);
// //   a++;
// // } while (a < 10);
// // console.log(array);

// while (a < 10) {
//   array.push(a);
//   a++;
// }
// console.log(array);

// var a = 10;
// let b = 10;
// let c = 10;
// {
//   var a = 20;
//   var a = 30;
//   let b = 20;
//   let c = 20;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log("-----------");
// }
// console.log(a);
// console.log(b);
// console.log(c);

// a = 10;
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// // let b = a.split("");
// // let c = b.join("'");
// // console.log(b);
// console.log(a.push());
// console.log(a);

// var ok = "Hello";
// var be = "Challo ";
// be += ok;
// console.log(be);

// console.log(1 + "Hello");
// console.log("Hello sir\nHow are you\fHave a great sunday pal");
// let str = "Hello";
// let str2 = "Helllo" + str;
// console.log(str2);
// var a = "hello ";
// var str = a;
// str.concat(a);
// console.log(str);
// console.log(a);
// let l = [
//   [1, 2],
//   [1, 2, 3],
// ];
// console.log(typeof l);
// const a = Symbol("Hello whst");
// console.log(typeof a);
// let b = console.log(Boolean);
// // console.log(b);
// let str1 = "Hello ";
// let str2 = str1;
// let str3 = str2;

// console.log(str1.concat(str2, str3));
// console.log("Hello");

// let obj = {
//   name: "Venktaehs"[(1, 2, 3)],
// };

// console.log(obj.name);

// let ok = "Venkatesh";
// console.log(ok[3]);
// ******************SUBARRAY*********************
// ***********************************Rotate the Array
// let array = [1, 2, 3, 4, 5, 6, 7];
// k = array.length;
// for (i = 0; i < k; i++) {
//   let pop = array.pop();
//   array.unshift(pop);
// }
// console.log(array);
// let pop = array.pop();
// array.unshift(pop);
// let op = array.pop();
// array.unshift(op);
// console.log(array);
// ***********************************Sum of odd length subArrays
// let array = [1, 4, 2, 5, 3];

// function sumOfSubArray(arr) {
//   let newArr = [];

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       newArr.push(arr[j]);

//       if (newArr.length % 2 === 1) {
//         for (let k = 0; k < newArr.length; k++) {
//           sum += newArr[k];
//         }

//         // console.log(newArr)

//         // console.log(sum)
//       }
//     }

//     // console.log("--------")

//     newArr = [];
//   }

//   return sum;
// }

// let answer = sumOfSubArray(array);

// console.log(answer);
// // ************************Running sum of 2d Array
// //You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// // A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
// // Example :
// // Input: accounts = [[1,5],[7,3],[3,5]]
// // Output: 10
// // Explanation:
// // 1st customer has wealth = 6
// // 2nd customer has wealth = 10
// // 3rd customer has wealth = 8
// // The 2nd customer is the richest with a wealth of 10.
// let Array = [
//   [2, 8, 7],
//   [7, 1, 3],
//   [1, 9, 5],
// ];

// function runningSum(nums) {
//   let newArray = [];

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     let nestedArray = nums[i];
//     for (let j = 0; j < nestedArray.length; j++) {
//       sum += nestedArray[j];
//     }
//     newArray.push(sum);
//   }

//   let max = Math.max(...newArray);
//   return max;
// }
// console.log(runningSum(Array));
// //********************Runninf sum of Array */
// let numbers = [3, 1, 2, 10, 1];

// function runningSum(nums) {
//   let newArray = [];
//   let sum = 0;
//   for (let i of nums) {
//     sum += i;
//     newArray.push(sum);
//   }
//   return newArray;
// }

// console.log(runningSum(numbers));
// // .// *****************Maximum SubArray
// let array = [1, 2, 3, 4, 5];
// let newArray = [];
// let n = 2;
// for (j = n; j < array.length; j++) {
//   for (i = j; i < array.length; i++) {
//     newArray.push(array[i]);
//     // console.log(newArray)
//   }
//   if (newArray.length === array.length - n) {
//     console.log(newArray);
//   }
//   newArray = [];
// }

// .
// ******************SUBARRAY
// let array = [1, 3, 4, 5, 6];
// let newArray = [];

// for (i = 0; i < array.length; i++) {
//   for (j = i; j < array.length; j++) {
//     newArray.push(array[j]);
//     console.log(...newArray);
//   }
//   newArray = [];
// }
// .
// ******************Object Keys*********************

// let obj = {
//   student_one: {
//     scores_one: { Math: 1, Social: 1, physics: 1, Kannada: 1, English: 1 },
//   },

//   student_two: {
//     scores_two: {
//       Science: 1,
//       Social: 1,
//       physics: 1,
//       Kannada: 1,
//       English: 1,
//     },
//   },
//   student_three: {
//     scores_two: { Mat: 1, Social: 1, physics: 1, Kannada: 1, English: 1 },
//   },
// };
// let keys = Object.keys(obj);
// // console.log(keys);
// sum = 0;
// for (i = 0; i < keys.length; i++) {
//   let objects = obj[keys[i]];
//   // console.log(objects);

//   let keysOne = Object.keys(objects);
//   // console.log(keysOne);

//   let keyKeys = objects[keysOne];
//   // console.log(keyKeys);

//   let scoreKeys = Object.keys(keyKeys);
//   // console.log(scoreKeys);

//   let sum = 0;
//   for (j = 0; j < scoreKeys.length; j++) {
//     let scoreObjects = objects[keysOne][scoreKeys[j]];
//     // console.log(scoreObjects);
//     sum += scoreObjects;
//   }
//   console.log(`${keys[i]} : ${sum}`);
// }

// ******************PALINDROME*********************
// .
// .
// function palindrome(string) {
//   let myString = string.split("");
//   let length = myString.length;
//   console.log(length);
//   let isPalindrome = true;
//   for (let i = 0; i < length; i++) {
//     if (myString[i] !== myString[length - i - 1]) {
//       isPalindrome = false;
//     }
//   }
//   if (isPalindrome === true) {
//     console.log("It is a Palindrome dear");
//   } else {
//     console.log("No it is not Palindrome");
//   }
//   console.log(myString);
// }
// palindrome("MALAYALAM");
// .
// .
// ******************Store first 20 prime numbers*********************
// .
// .
// function primeNum(n) {
//   var newCounter = [];
//   var myArray = [];
//   for (let counter = 2; counter <= 1000; counter++) {
//     var isPrime = true;
//     for (let i = 2; i <= counter; i++) {
//       if (counter % i === 0 && i !== counter) {
//         isPrime = false;
//       }
//     }

//     if (isPrime === true) {
//       newCounter.push(counter);
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     var neww = newCounter[i];
//     myArray.push(neww);
//   }
//   console.log(newCounter);
//   console.log(myArray);
//   console.log(myArray.length);
// }
// primeNum(20);
// ******************Store first 20 prime numbers*********************

// function prime(n) {
//   let isPrime = true;
//   for (let i = 2; i <= n; i++) {
//     if (n % i === 0 && i !== n) {
//       isPrime = false;
//     }
//   }

//   if (isPrime === true) {
//     console.log("It is a prime number");
//   } else {
//     console.log("It is not a prime number");
//   }
// }
// prime(499);
// console.log(9 % 2);

// let myArray = [1, 5, 6, 2, 4];
// let maxNumber = myArray.reduce((a, b) => {
//   console.log(a);
//   console.log(b);
//   console.log("--------");
//   return Math.max(a, b);
// }, 0);
// console.log(maxNumber);

// let ok = new Array(1, 2, 3);
// console.log(ok);

// function array(n) {
// let myArray = [];
// for (i = 1; i <= n; i += 2) {
//   myArray.push(i);
// }
// return myArray;
// 1,5,6,2,4
// }
// console.log(array(20));
//PATTERNS ********************************************************************
// var a = "";
// var i = 5;
// while (i >= 0) {
//   if (i === 0) {
//     var k = 1;
//     while (k <= 5) {
//       var m = 1;
//       while (m <= k) {
//         a = a + "*";
//         m++;
//       }
//       console.log(a);
//       var a = "";
//       k++;
//     }
//   } else {
//     var j = 1;
//     while (j <= i) {
//       a = a + "*";
//       j++;
//     }
//     console.log(a);
//     a = "";
//   }
//   i--;
// }

// var n = 125;
// var a = Math.cbrt(11);
// console.log(a);
// for (var i = 0; i <= a; i++) {
//   console.log(i ** 3);
// }

// var a = "";
// var i = 5;
// while (i >= 0) {
//   if (i === 0) {
//     var k = 1;
//     while (k <= 5) {
//       var m = 1;
//       while (m <= k) {
//         a = a + "*";
//         m++;
//       }
//       console.log(a);
//       a = "";
//       k++;
//     }
//   }

//   var j = 1;
//   while (j <= i) {
//     a = a + "*";
//     j++;
//   }
//   console.log(a);
//   a = "";
//   i--;
// }

// var a = "";
// var i = 5;
// while (i >= 0) {
//   // Second Set*********
//   if (i === 0) {
//     var k = 1;
//     while (k <= 5) {
//       var m = 1;
//       while (m <= k) {
//         a = a + "*";
//         m++;
//       }
//       console.log(a);
//       var a = "";
//       k++;
//     }
//   }
// // Second Set***********

// // first Set*************
//   var j = 1;
//   while (j <= i) {
//     a = a + "*";
//     j++;
//   }
//   console.log(a);
//   var a = "";
//   i--;
// }

//  *****
//  ****
//  ***
//  **
//  *
//  *
//  **
//  ***
//  ****
//  *****
// var a = "";
// for (var i = 5; i >= 0; i--) {
//   if (i === 0) {
//     for (var k = 1; k <= 5; k++) {
//       for (var m = 1; m <= k; m++) {
//         a = a + "*";
//       }
//       console.log(a);
//       a = "";
//     }
//   } else {
//     for (var j = 1; j <= i; j++) {
//       a = a + "*";
//     }
//     console.log(a);
//     a = "";
//   }
// }
// }

// var a = "";
// var i = 1;
// while (i <= 5) {
//   var j = 1;
//   while (j <= i) {
//     a = a + "*";
//     j++;
//   }
//   console.log(a);
//   a = "";
//   i++;
// }
// While Loop

// sum = "";
// var i = 5;
// while (i >= 0) {
//   // if (i === 0) {
//   //   var i = 1;
//   //   while (i <= 5) {
//   //     var j = 1;
//   //     while (j <= i) {
//   //       sum += "*";
//   //       j++;
//   //     }
//   //     sum += "\n";
//   //     i++;
//   //   }
//   // }
//   var j = 1;
//   while (j <= i) {
//     sum += "*";
//     j++;
//   }
//   sum += "\n";
//   i--;
// }
// console.log(sum);

// *    *
// **   **
// ***  ***
// **** ****
// **********
//   var sum = "";
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//       sum += "*";
//     }
//     for (let k = 1; k <= 5 - i; k++) {
//       sum += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       sum += "*";
//     }
//     for (let k = 1; k <= 5 - i; k++) {
//       sum += " ";
//     }
//     sum += "\n";
//   }
//   console.log(sum);

// for loop 5 + 5
// var a = "";
// for (var i = 5; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     a = a + "*";
//   }
//   console.log(a);
//   a = "";
// }
// var sum = "";
// for (let i = 5; i >= 0; i--) {
//   // if (i === 0) {
//   //   for (let i = 1; i <= 5; i++) {
//   //     for (let j = 1; j <= i; j++) {
//   //       sum += "*";
//   //     }
//   //     console.log(sum);
//   //     sum = "";
//   //   }
//   // }

//   for (let j = 1; j <= i; j++) {
//     sum = sum + "*";
//   }
//   console.log(sum);
//   sum = "";
// }

// WHILE LOOP
// var i = 5;
// sum = "";
// while (i >= 1) {
//   var j = 1;
//   while (j <= i) {
//     sum += "*";
//     j++;
//   }
//   sum += "\n";
//   ;
// }
// console.log(sum);
// }
// myFunc(5);

// function myFunc(n) {
//   let sum = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       k = i;
//       // if ((i % 2 === 0 && j % 2 !== 0) || (j % 2 === 0 && i % 2 !== 0)) {
//       //   var k = 0;
//       // }
//       // if ((i + j) % 2 === 0) {
//       //   k = 1;
//       // } else {
//       //   k = 0;
//       // }
//       sum += k;
//     }
//     sum += "\n";
//   }
//   console.log(sum);

// let sum = "";
// for (let i = 1; i < n; i++) {
//   for (let j = 1; j < n; j++) {
//     var k = i + j - 1;
//     if(k > 4){
//       k = k - 4
//     }
//     sum += k;
//   }
//   sum += "\n";
// }
// console.log(sum);
// }
// myFunc(5);

// *
// **
// ***
// ****
// *****
// function myFunc(n) {
//   let string = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);
// }
// myFunc(5);

// function myFunc(n, m) {
//   var m = m;
//   for (let i = 1; i <= n; i++) {
//     if (i === m) {
//       break;
//     }
//     console.log(i);
//   }
// }
// myFunc(20, 21);

// console.log(125 ** 0.33333333333);
//REVERSE THE NUMBER AND ARMSTRONG NUMBER
// function myFunc(n) {
//   var sum = "";
//   while (n > 0) {
//     var x = n % 10;
//     console.log(x);
//     sum += x;
//     n = parseInt(n / 10);
//   }
//   console.log(sum);
//   // if (y === sum) {
//   //   console.log(true);
//   // } else {
//   //   console.log(false);
//   // }
// }
// myFunc(283);

// console.log(2 ** 3);
// console.log(a / 10);
// let a = "12345";
// let b = a.split("");
// console.log(b[3]);
// let b = [...a];
// console.log(b.split);
// b.split(",");
// function myFunc(n) {
//   var y = 1;
//   while (y <= n) {
//     if (y % 5 === 0) {
//       y++;
//     } else {
//       console.log(y);
//       y++;
//     }
//   }
// }
// myFunc(100);

// WHILE LOOP
// Print the following series using while loop

// 1 4 9 16 25 36 …. n

// Input :-

// 49

// Output :-

// 1

// 4

// 9

// 16

// 25

// 36

// 49

// function myFunc(x) {
//   var y = 1;
//   var z = 3;
//   while (y <= x) {
//     console.log(y);
//     y = y + z;
//     z += 2;
//   }
// }
// myFunc(49);

// function mySwitch(n) {
//   switch (n) {
//     case 1:
//       console.log("monday");
//       break;
//     case 2:
//       console.log("tuesday");
//       break;
//     case 3:
//       console.log("wednesday");
//       break;
//     case 4:
//       console.log("thurday");
//       break;
//     case 5:
//       console.log("friday");
//       break;
//     case 6:
//       console.log("saturday");
//       break;
//     case 6:
//       console.log("sunday");
//       break;
//     default:
//       console.log("invalid");
//   }
// }
// mySwitch(8);

// function myFunc(a, b, c) {
//   var answer =
//     a >= b && a >= c
//       ? console.log(a)
//       : b > a && b > c
//       ? console.log(b)
//       : c > a && c > b
//       ? console.log(c)
//       : null;
//   return answer;
//   // var answer = marks >= 40 ? "PASS" : "FAIL";
//   // return answer;
// }
// console.log(myFunc(221, 3, 19));

// function distance(distance) {
//   if (distance >= 0 && distance <= 100) {
//     console.log(5);
//   } else if (distance > 100 && distance <= 500) {
//     console.log(8);
//   } else if (distance > 500 && distance < 1000) {
//     console.log(10);
//   } else {
//     console.log(12);
//   }
// }
// console.log(distance(554));

//Largest Among Two
// function max(a, b, c) {
//   // var max = Math.max(a, b);
//   // console.log(max);
//   if (a >= b && a >= c) {
//     console.log(a);
//   } else if (b > a && b > c) {
//     console.log(b);
//   } else if (c > a && c > b) {
//     console.log(c);
//   }
// }
// max(10, 10, 10);

//CONDITONALS
// var hour = 9;
// var message = "";
// if (hour > 6 && hour < 12) {
//   console.log((message = "good morning"));
// } else if (hour >= 12 && hour <= 18) {
//   console.log((message = "good evening"));
// } else {
//   console.log((message = "good night"));
// }

// SWAP TWO VARIABLES
// function swap(a, b) {
//   var temp = a;
//   var a = b;
//   var b = temp;
//   return [a, b];
// }
// console.log(swap(2, 4));

// DSA ********************************************************************
