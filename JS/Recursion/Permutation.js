function permutation(str, result) {
  if (str.length == 0) console.log(result);
  for (let i = 0; i < str.length; i++) {
    let res = str.substring(0, i) + str.substring(i + 1);
    // console.log(res, str[i]);
    permutation(res, result + str[i]);
  }
}
permutation("let", "");
// let x = "let";
// console.log(x.substring(1, 3));
