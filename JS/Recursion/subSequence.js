function subSequence(arr, cia, ss, cis) {
  if (cia >= arr.length) {
    console.log(ss);
    return;
  }
  subSequence(arr, cia + 1, ss, cis);
  ss[cis] = arr[cia];
  subSequence(arr, cia + 1, ss, cis + 1);
}
subSequence([1, 2, 3], 0, [], 0);
