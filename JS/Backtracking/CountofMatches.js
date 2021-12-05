console.log("BACKTRACKING");

function numOfMatches(n) {
  let sum = 0;

  function matches(n) {
    if (n / 2 === 1) {
      sum++;
      return;
    }

    if (n % 2 == 0) {
      let newN = n / 2;
      sum += newN;
      matches(newN);
    }

    if (n % 2 == 1) {
      let newN = (n - 1) / 2;
      sum += newN;
      matches(newN + 1);
    }
  }
  matches(n);

  return sum;
}
console.log(numOfMatches(14));
