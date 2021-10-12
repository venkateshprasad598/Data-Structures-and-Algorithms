// Capitalize first letter of the sentence
// function longest(arr) {
//   let split = arr.split(" ");
//   let array = [];
//   console.log(split);
//   split.map((data, index) => {
//     if (index == 0) {
//       array.push(data.toUpperCase());
//     } else {
//       array.push(data);
//     }
//   });
//   console.log(array.join(" "));
// }
// longest("Hello who are you dear");

// Capitalize fist letter of each word
// function capitilize(str) {
//   let split = str.split(" ");
//   let array = [];
//   split.map((data) => {
//     let dataSplit = data.split("");
//     let add = "";
//     dataSplit.map((metaData, index) => {
//       if (index === 0) {
//         add += metaData.toUpperCase();
//       } else {
//         add += metaData;
//       }
//     });
//     array.push(add);
//   });
//   console.log(array.join(" "));
// }
// capitilize("Hey how are you venkatesh");
// capitilize("let make thus ad sdfkn k");

// function capitilize(str) {
//   let array = str.split(" ").map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//   });
//   console.log(array);
// }
// capitilize("hey there is no need of it");

// function unique(str) {
//   let split = str.split("");
//   let array = [];
//   let isAnswer = true;
//   split.map((data) => {
//     if (!array.includes(data)) {
//       array.push(data);
//     } else {
//       isAnswer = false;
//     }
//   });
//   console.log(isAnswer);
// }
// unique("abcde");
let unique = "abcdea";
console.log(unique.lastIndexOf("a"));
