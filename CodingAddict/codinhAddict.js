function longestWord(str) {
  const split = str.split(" ");
  var longWord = split.reduce((a, b) => {
    if (a.length > b.length) {
      return a;
    } else {
      return b;
    }
  });
  return longWord;
}
const ans = longestWord("My fav place is Delhi");
console.log(ans);
