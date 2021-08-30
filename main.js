//PATTERNS
function myFunc(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}
myFunc(5);

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
