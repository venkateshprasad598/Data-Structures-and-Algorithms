console.log("letter");

function possi(tiles) {
  let res = [];
  let flag = [];
  let s = [];
  let ans = "";
  function solve(tiles) {
    for (let i = 0; i < tiles.length; i++) {
      if (flag[i] !== 1) {
        s.push(tiles[i]);
        s.map((data) => (ans += data));
        flag[i] = 1;
        res.push(ans);
        ans = "";
        solve(tiles);
        flag[i] = 0;
        s.pop();
      }
    }
  }
  solve(tiles);
  let newAns = new Set(res);
  let myAns = [...newAns].length;
  console.log(myAns);
  return myAns;
}
possi("AAB");
