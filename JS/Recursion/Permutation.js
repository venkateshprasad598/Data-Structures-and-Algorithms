function permutation(str) {
  if (str.length == 0) return str;
  for (let i = 0; i < str.length; i++) {
    let res = str.substring(0, i) + str.substring(i + 1);
    console.log(res);
  }
}
permutation("let");

// let x = "let";
// console.log(x.substring(1, 3));
