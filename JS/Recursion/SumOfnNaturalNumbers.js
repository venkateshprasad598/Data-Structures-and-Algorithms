console.log("Recursion");

function sum(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return sum(n - 1) + sum(n - 2);
}
console.log(sum(6));
