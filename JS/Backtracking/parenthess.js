console.log("parenthess");
function parenthesses(n) {
  let curString = "";
  let open, close;
  let arr = [];
  function backTrack(curString, open, close, max) {
    if (curString.length == max * 2) {
      arr.push(curString);
      return;
    }

    if (open < max) {
      backTrack(curString + "(", open + 1, close, max);
    }
    if (close < open) {
      backTrack(curString + ")", open, close + 1, max);
    }
  }
  backTrack(curString, 0, 0, n);
  console.log(arr);
}
parenthesses(2);
