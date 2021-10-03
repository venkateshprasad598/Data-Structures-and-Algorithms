// ******************** REGEX ***********************
let str = "The String";
const regex = /string/i;

prompt(regex.test(str));
// const str = "freeCodeCamp";
// const regex = /Code/;
// let answer = regex.test(str);
// console.log(answer);
// let regexx = /free/;
// if (regexx.test(str)) {
//   console.log(true);
// }

// let a = "There was an;
// let regg = /dog | cat | mouse/;
// let ans = regg.test(a);
// console.log(ans);

// ******************** REGEX ***********************
// function flatten(arr) {
//   let flattened = [];
//   for (i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattened = flattened.concat(flatten(arr[i]));
//     } else {
//       flattened.push(arr[i]);
//     }
//   }
//   return flattened;
// }

// console.log(
//   flatten([

//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// function rec(array) {
//   if (array) {
//     let a = array;
//     for (let i = 0; i < a.length; i++) {
//       let z = a.flat();
//       a = z;
//     }
//     a.map((data) => {
//       if (typeof data == "function") {
//         let index = a.indexOf(data);
//         a.splice(index, 1, data());
//       }
//     });
//     return a;j
//   } else {
//     return [];
//   }
// }

// let z = rec([
//   1,
//   "2",
//   [
//     3,
//     function () {
//       return 4;
//     },
//     ["five"],
//     "six",
//     true,
//     { prop: "val" },
//   ],
// ]);
// console.log(z);

// let a = [
//   1,
//   "2",
//   [
//     3,
//     function () {
//       return 4;
//     },
//     ["five"],
//     "six",
//     true,
//     { prop: "val" },
//   ],
// ];
// let b = a.flat();
// console.log(b);
// let c = b.flat();
// console.log(c);
// let b = [1, [5], { a: 6 }];
// let a = [1, 2, 3, [4], 5];
// console.log(a.flat());

// const places = [
//   { name: "Spain", id: 1 },
//   { name: "Sweden", id: 2 },
//   { name: "Scotland", id: 3 },
// ];
// function getName() {
//   setTimeout(() => {
//     places.map((data) => {
//       console.log(data.name);
//     });
//   }, 2000);
// }

// // function addName(add) {}

// const addName = (add) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       places.push(add);
//       if (true) {
//         resolve();
//       } else {
//         reject("Error");
//       }
//     }, 3000);
//   });
// };
// // addName({ name: "Singapore", id: 4 }).then(getName);

// async function newName() {
//   await addName({ name: "Singapore", id: 4 });
//   getName();
// }

// newName();
// let n = 2;

// let isPrime = true;
// for (let i = 2; i <= n; i++) {
//   if (n % i === 0 && i !== n) {
//     isPrime = false;
//   }
// }
// if (isPrime) {
//   console.log(true);
// } else {
// }
// function num(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * num(n - 1);
// }
// // num(5);
// console.log(num(5));
//
// function Abc(n) {
//   let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   Recursion
// console.log("Hello");
// }
// let answer = Abc(3);
// console.log(answer);
// **************** Recusion find index ***************
// function search(arr, item) {
//   if (arr.length - 1 === 0 && arr[arr.length - 1] !== item) {
//     return -1;
//   } else if (arr[arr.length - 1] == item) {
//     return arr.length - 1;
//   } else {
//     let ok = arr.slice(0, arr.length - 1);
//     return search(ok, item) + 0;
//   }
// }
// let answer = search([1, 2, 3, 4, 5, 6], 8);
// console.log(answer);

// function nthArr(arr, index) {
//   if (arr[arr.length - 1] == index) {
//     return arr.length - 1;
//   } else {
//     let ok = arr.slice(0, arr.length - 1);
//     return nthArr(ok, index);
//   }
// }

// function search(arr, item) {
//   if (arr[arr.length - 1] == item) {
//     return arr.indexOf(item);
//   }
//   return search(arr, item);
// }
// let answer = search([1, 2, 3, 4, 6], 2);
// console.log(answer);

// for (i = 0; i < array.length; i++) {
//   if (i == 3) {

//   }
//   console.log(i);
// }
// console.log(answer);
// let a = [1, 2, 3, 4, 5];
// let slice = a.slice(0, a.length - 1);
// console.log(slice);
// **************** Reverse the string in recursion ***************
// function length(str) {
//   if (str === "") return "";
//   return str.substr(str.length - 1) + length(str.substr(0, str.length - 1));
// }
// let answer = length("Hello");
// console.log(answer);
// let a = "hello";
// console.log(a.substr(0, 4));

// let a = "hello";
// let ok = a.substr(3);
// console.log(ok);
// **************** Spotify PlayList ***************

// let myData = data.songs;
// let Array = [];
// myData.map((data) => {
//   data.track.artists.map((metaData) => {
//     let obj = {
//       artist: metaData.name,
//       song: data.track.name,
//     };
//     Array.push(obj);
//     obj = {};
//   });
// });
// let obj = {};
// let newArray = [];
// Array.map((data) => {
//   let filter = Array.filter((metaData) => metaData.artist === data.artist);
//   let songArray = [];
//   let name;
//   filter.map((data) => {
//     songArray.push(data.song);
//     name = data.artist;
//   });
//   obj[name] = songArray;
//   newArray.push(obj);
//   obj = {};
// });
// let string = newArray.map((data) => JSON.stringify(data));
// let answer = new Set(string);
// let newAnswer = [...answer];
// let finalAnswer = newAnswer.map((data) => JSON.parse(data));
// console.log(finalAnswer);

// **************** objects ***************
// function double(m) {
//   let set = m.split("");
//   console.log(set);
//   let myNew = new Set(set);
//   let newSet = [...myNew];
//   let array = [];
//   let answer = [];
//   newSet.map((data) ss=> {
//     let newData = set.filter((metaData) => data == metaData);
//     array.push(newData.length);
//   });

//   for (i = 0; i < array.length; i++) {
//     answer.push(newSet[i], array[i]);
//   }
//   console.log(answer);
//   console.log(array);
// }

// double("mmmnn");
// ****************Get Sum of People's Budget***************

// function Alternate(n) {
//   let split = n.split("");
//   let zero = split.filter((data) => data === "0");
//   let one = split.filter((data) => data === "1");
//   if (one.length - zero.length == 0) {
//     let zeros = zero.every((data) => data == "0");
//     let ones = one.every((data) => data == "1");
//     if (ones === zeros) {
//       return true;
//     }
//   }
//   if (one.length - zero.length == 1 || zero.length - one.length == 1) {
//     return true;
//   } else {
//     git;
//     return false;
//   }
// }
// Alternate("10101010");

// ****************Get Sum of People's Budget***************
// function budget(n) {
//   let budgets = 0;
//   n.map((data) => {
//     budgets += data.budget;
//   });
//   console.log(budgets);
// }
// budget([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 },
// ]);
// **************** Pricey Products ***************
// function products(obj) {
//   let keys = Object.keys(obj);
//   let myObj = obj;
//   let product = [];
//   keys.map((data) => {
//     if (myObj[data] >= 500) {
//       product.push(data);
//     }
//   });
//   let myProducts = product.sort((a, b) => obj[b] - obj[a]);
//   console.log(myProducts);
//   return myProducts;
// }
// products({ Computer: 600, TV: 800, Radio: 50 });

// **************** Count the Letters and Digits***************

// let Name = "Hello Wo1ld";
// let names = Name.split("").filter((a) => a !== " ");
// console.log(names);
// let words = 0;
// let nums = 0;

// names.map((data) => {
//   //   console.log(typeof data);
//   let parse = parseInt(data);
//   //   console.log(parse);
//   if (typeof parse === "number") {
//     console.log(data);
//   }
// });

// function string(name) {
//   let names = name.split("").filter((data) => data != " ");
//   console.log(names);
//   let myNames = [];
//   names.map((data) => {
//     if (!isNaN(data)) {
//       myNames.push(data);
//     }
//   });
//   return {
//     LETTERS: names.length - myNames.length,
//     DIGITS: myNames.length,
//   };
// }
// let answer = string("Hello M0M");
// console.log(answer);
// console.log(isNaN("N"));
// **************** Objects ***************
// const obj = {
//   Hello: "Venkatesh",
//   age: {
//     school: "DSI",
//     ok: {
//       please: "Access",
//     },
//   },
//   "Hello World": "Hello World",
// };
// obj.hey = "Hey";
// // delete obj.hey;
// console.log(obj);
// console.log(obj.hasOwnProperty("Hello"));
// const {
//   Hello,
//   age: {
//     ok: { please },
//   },
// } = obj;
// console.log(please);

// const func = (myName = "Hello") => `Hey ${myName}`;
// console.log(func("HellYa"));

// let objj = {
//   Hello: "Hey",
//   say(name) {
//     console.log(`Hey how are you ${this.Hello} ${name}`);
//   },
// };
// objj.say("Ven");

// let name = "Venkatesh";
// let age = 23;
// let locality = "Yadgir";
// console.log(
//   `Hello my names is ${name} ${age} year old and I am from ${locality}`
// );
// ****************Array Methods***************
// function arr(a) {
//   console.log(a.flat());
// }
// console.log(
//   arr([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );
// let num = [1, 2, 3, 4, 5];
// let map = num.map()
// let Array = [];
// let forEach = num.forEach((data) => Array.push(data * 3));
// console.log(num);
// console.log(Array);
// let num = [1, 2, 3, 4, 5];
// let answer = num.join();
// console.log(answer);

// let ok = ["Helo", "soir"];
// let sum = ok.toString();
// console.log(sum);
// let num = [1, 2, 4, 5];

// //Adding
// let index = num.indexOf(4);
// console.log(index);
// let add = [...num.slice(0, index), 3, ...num.slice(index)];
// console.log(add); // [1, 2, 3, 4, 5]

// //Removing
// let filter = add.filter((data) => data != 3);
// console.log(filter); // [1, 2, 4, 5]

// //Updating
// let update = num.map((data) => (data === 4 ? data * 2 : data));
// console.log(update); // [1, 2, 8, 5]
// ****************Robo Moves 90Degree ***************
// function robbo(...b) {
//   let a = b;
//   let even = a.filter((data, index) => index % 2 == 0);
//   let odd = a.filter((data, index) => index % 2 == 1);
//   let x = 0;
//   let y = 0;
//   even.map((data, index) => {
//     if (index % 2 === 0) {
//       y += data;
//     } else {
//       y -= data;
//     }
//   });

//   odd.map((data, index) => {
//     if (index % 2 === 0) {
//       x += data;
//     } else {
//       x -= data;
//     }
//   });

//   return [x, y];
// }
// let answer = robbo(1, 2, 3, 4, 5);
// console.log(answer)

// **************** Sort two arrays ***************
// function sort(a, b) {
//   let c = [...a, ...b];
//   let sortedArray = c.sort((a, b) => a - b);
//   let answer = new Set(sortedArray);
//   return [...answer];
// }git a
// let answer = sort([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
// console.log(answer);

// **************** Restaurant Tables ***************

// function tables(a, b, groups) {
//   let oneSeater = a;
//   let twoSeater = b * 2;
//   let sum = oneSeater + twoSeater;
//   console.log(sum);

//   let Array = [];
//   let reject = 0;
//   groups.map((data) => {
//     sum -= data;
//     if (sum < 0) {
//       sum = sum + data;
//       reject += data;
//     } else {
//       Array.push(data);
//     }
//   });
//   return reject;
// }
// let answer = tables(1, 1, [1, 1, 2, 1]);

// **************** Matrix of numbers ***************

// function matrix(n) {
//   let sum = "";
//   for (let i = 1; i <= n; i++) {
//     for (j = i; j < n + i; j++) {
//       if (j > n) {
//         sum += j - n;
//       } else {
//         sum += j;
//       }
//     }
//     console.log(sum);
//     sum = "";
//   }
// }
// let answer = matrix(5);

// console.log(name);
// **************** Binary Number ***************

// function something(n) {
//   let x = n;
//   let sum = "";
//   for (i = 0; x > 0; i++) {
//     let y = x % 2;
//     sum += y;
//     let z = x / 2;
//     x = parseInt(z);
//   }
//   return x === 0 ? 0 : sum.split("").reverse().join("");
// }
// let answer = something(0);
// console.log(answer);
// **************** Binary ***************

// const binary = (a) => {
//   console.log("Hello");
//   let y = a;
//   let binary = "";
//   for (i = 0; i < a; i++) {
//     console.log(y);
//     if (y !== 0) {
//       x = y % 2;
//       // console.log(x);
//       binary += x;
//       z = y / 2;
//       y = z;
//     }
//   }
//   let binaryString = binary.split("").reverse().join("");
//   console.log(binaryString);
// };

// let answet = binary(5);
// console.log(1 % 2);
// console.log(answer);

// **************** unique postive number ***************

// const positive = (Array) => {
//   const set = new Set(Array);
//   const newSet = [...set];
//   const positive = newSet.filter((data) => data > 0);
//   const negative = newSet.filter((data) => data < 0);
//   return positive.length >= negative.length ? true : false;
// };
// let answer = positive([1, 1, 1, -1, -2]);
// console.log(answer);

// **************** Tic Toc Toe ***************
// function tic(a) {
//   let x = a.flat().join("");
//   let winnerWho = [
//     x[0] + x[1] + x[2],
//     x[3] + x[4] + x[5],
//     x[6] + x[7] + x[8],
//     x[0] + x[3] + x[6],
//     x[2] + x[5] + x[8],
//     x[1] + x[4] + x[7],
//     x[2] + x[4] + x[6],
//     x[0] + x[4] + x[8],
//   ];
//   return winnerWho.includes("XXX")
//     ? "X"
//     : winnerWho.includes("OOO")
//     ? "O"
//     : "Draw";
// }
// tic([
//   ["x", "o", "x"],
//   ["o", "o", "o"],
//   ["x", "x", "x"],
// ]);

// let ok = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [6, 7, 8],
// ];
// console.log(ok.flat());

// ******************Patterns***************************
// let sum = "";
// let n = 7;
// for (i = 1; i <= n; i++) {
//   for (k = 0; k < n - i; k++) {
//     sum += " ";
//   }

//   for (j = 0; j < 2 * i - 1; j++) {
//     sum += "*";
//   }
//   console.log(sum);
//   sum = "";
// }

// let n = 5;
// let sum = "";

// for (i = 1; i <= n; i++) {
//   for (j = 0; j < i; j++) {
//     if ((i === 3 && j === 1) || (i === 4 && j === 1) || (i === 4 && j === 2)) {
//       sum += " ";
//     } else {
//       sum += "*";
//     }
//   }
//   console.log(sum);
//   sum = "";
// }

// **************** Array Eichange ***************
// let myArray = ["a", "b", "c"];
// let otherArray = [1, 2, 3];
// function exchangeWith(a, b) {
//   x = a.reverse();
//   a = b.reverse();
//   b = x;
//   return [a, b];
// }
// let answer = exchangeWith(["a", "b", "c"], [1, 2, 3]);
// console.log(answer);

// function exchange(myArray, otherArray) {
//   let ok = exchange(myArray, otherArray);
// }
// let answer = exchange(["a", "b", "c"], [1, 2, 3]);
// console.log(answer);
// **************** Difference of 2 ***************

// function difference(arr) {
//   let metaData = [...arr];
//   let Array = [];

//   arr.map((data) => {
//     metaData.map((meta) => {
//       if (data - meta === 2) {
//         let sort = [data, meta];
//         let sortedData = sort.sort((a, b) => a - b);
//         Array.push(sortedData);
//       }
//     });
//   });

//   return Array.sort();
// }
// let answer = difference([4, 3, 1, 5, 6]);
// console.log(answer);

// **************** Strange Counter ***************

// function diff(arr) {
//   let Array = [];
//   let num = 2;
//   arr.map((data) => {
//     if (data - num === 2 || data - num === 0) {
//       Array.push(data);
//     }
//   });
//   console.log(Array);
// }
// diff([1, 2, 3, 4]);

// **************** Strange Counter ***************

// function counter(t) {
//   let value = 4;
//   let logic = 3;
//   for (let i = 1; i <= t; i++) {
//     value--;
//     if (value < 1) {
//       value = logic * 2;
//       logic = value;
//     }
//   }
//   return value;
// }
// let answer = counter(2);
// console.log(answer);
// let sort = [1, 1000, 100, 2, 2000, 30000, 3, 300];
// console.log(sort.sort());

// **************** Genarate Words by names ***************
// function abb(abbs, words) {
// let includes = true;
// names.map((name, index) => {
//   let myName = name.split("");
//   console.log(myName + " " + index);
//   abbs.map((abbs_a, index_a) => {
//     let abbs_b = abbs_a.split("");

//     console.log(`${abbs_a} : ${index_a}`);
//     if (index === index_a) {
//       abbs_b.map((abbs_c) => {
//         if (!myName.includes(abbs_c)) {
//           includes = false;
//         }
//       });
//     }
//   });
//   console.log("-----");
// });
// console.log(includes);

//   let includes = true;
//   words.map((data, index) => {
//     let word_split = data.split("");
//     abbs.map((data_one, index_one) => {
//       console.log(data_one);
//       if (index === index_one && !word_split.includes(data_one)) {
//         includes = false;
//       }else{

//       }
//     });
//   });
//   console.log(includes);
// }
// abb(["s", "t", "v"], ["stamina", "television", "vindaloo"]);

// **************** Genarate Words by names ***************

// function generate(name, words) {
//   let splitNames = name.split("");
//   let names = splitNames.filter((data) => data !== " ");

//   let includes = true;
//   let sum = 0;
//   words.map((data) => {
//     let word = data.split("");
//     sum += word.length;

//     word.map((metaData) => {
//       if (
//         !names.includes(metaData.toLowerCase()) &&
//         !names.includes(metaData.toUpperCase())
//       ) {
//         console.log(metaData);
//         includes = false;
//       }
//     }
// );
//   });

//   if (includes === true && sum === names.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// generate("Jeff Goldblum", ["jog", "meld", "bluffs"]);
// **************** unique Charcter Mapping ***************

// const unique = (str) => {
//   let split = str.split("");
//   let strings = [];
//   let Array = [];
//   let sum = 0;
//   split.map((data) => {
//     if (!strings.includes(data)) {
//       strings.push(data);
//       Array.push(sum);
//       sum++;
//     } else {
//       strings.push(data);
//       let index = strings.indexOf(data);
//       console.log(`${data} : ${Array[index]}`);
//       Array.push(Array[index]);
//     }
//   });
//   return Array;
// };
// let answer = unique("aaabbcdefghiii");
// console.log(answer);

// **************** Find the Median ***************
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
// Explanation:
// Window position                Median
// ---------------                -----
// [1  3  -1] -3  5  3  6  7        1
//  1 [3  -1  -3] 5  3  6  7       -1
//  1  3 [-1  -3  5] 3  6  7       -1
//  1  3  -1 [-3  5  3] 6  7        3
//  1  3  -1  -3 [5  3  6] 7        5
//  1  3  -1  -3  5 [3  6  7]       6

// let num = [1, 2, 3, 4, 2, 3, 1, 4, 2];
// let n = 4;
// const myMedian = (nums, k) => {
//   let Array = [];
//   for (let i = 0; i <= nums.length - k; i++) {
//     let myNums = [...nums];
//     let splice = myNums.splice(i, k);
//     let sort = splice.sort((a, b) => a - b);
//     if (sort.length % 2 === 1) {
//       let math = Math.floor(sort.length / 2);
//       Array.push(sort[math]);
//     } else {
//       let evenLength = sort.length / 2;
//       let oddLength = evenLength - 1;
//       let median = (sort[oddLength] + sort[evenLength]) / 2;
//       Array.push(median);
//     }
//   }
//   return Array;
// };
// let answer = myMedian(num, n);
// console.log(answer);

// **************** Cut the Stick ***************
// function Arr(arr) {
//   let hey = [...arr];
//   console.log(hey);
//   let Array = [];

//   for (i = 0; i < arr.length; i++) {
//     if (hey.length !== 0) {
//       Array.push(hey.length);
//       let be = Math.min(...hey);
//       let ok = hey.filter((data) => data !== be).map((data) => data - be);
//       hey = ok;
//     }
//   }

// return Array
// }
// let answer = Arr([1, 2, 3, 4, 3, 3, 2, 1]);

// console.log(answer);

// **************** Vowel words ***************

// function myVowel(w) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let first = w[0].split("").filter((data) => vowel.includes(data));
//   let array = [];
//   w.map((data) => {
//     let isWord = true;
//     let splitData = data.split("");
//     splitData.map((vowels) => {
//       if (vowel.includes(vowels) && !first.includes(vowels)) {
//         isWord = false;
//       }
//     });
//     return isWord === true ? array.push(data) : null;
//   });
//   return array;
// }
// let answer = myVowel(["toe", "ocelot", "maniac"]);
// console.log(answer);

// ****************** Product of a remaining elements ***************

// function product(arr) {
//   let splice = arr.splice(1, 1);
//   let multi = 1;
//   let remainingArray = arr.filter((c) => c !== splice);
//   for (let i of remainingArray) multi *= i;
//   return multi === splice[0] ? true : false;
// }
// let answer = product([2, 8, 4, 1]);
// console.log(answer);

// ******************PUZZLE PIECES ***************
// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]

// puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

// puzzlePieces([1, 2], [-1, -1]) ➞ false

// puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false

// let a = [1, 2, 3, 4, 3];
// let b = [4, 3, 2, 1, 2];
// function puzzle(a1, a2) {
//   let sum = a1[0] + a2[0];
//   let isPuzzle = true;
//   if (a1.length !== a2.length) {
//     isPuzzle = false;
//   }

//   for (i = 0; i < a2.length; i++) {
//     if (a1[i] + a2[i] !== sum) {
//       isPuzzle = false;
//     }
//   }

//   return isPuzzle;
// }

// let answer = puzzle(a, b);
// console.log(answer);

// ******************Is There an Upward Trend? ***************

// upwardTrend([1, 2, 3, 4]) ➞ true

// upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false

// upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"

// upwardTrend([1, 2, 3, 6, 7]) ➞ true

// const upward = (arr) => {
//   let upward = "upward";
//   let isString = false;

//   arr.sort((a, b) =>
//     typeof b === "string" || typeof a === "string"
//       ? (isString = true)
//       : a - b < 0
//       ? (upward = "notUpward")
//       : null
//   );
//   return isString === true
//     ? "Strings not permitted!"
//     : upward === "upward"
//     ? true
//     : upward === "notUpward"
//     ? false
//     : null;
// };
// let answer = upward([1, 2, 3, 3, 5, 8]);
// console.log(answer);
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
