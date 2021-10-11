const math = (array) => {
  let sum = 0;
  let x = 0;
  let y = 0;
  console.log(array);
  array.map((data) => {
    sum += data;
    if (sum - x == array[0]) {
      console.log("Arthematic");
    } else if (sum - x === x * array[0]) {
      console.log("GEOMETRIC");
    }
    x = sum;
    sum = 0;
  });
};

let func = [
  //   math([2, 4, 6, 8]),
  math([3, 9, 27]),
  // math([2, 5, 14, 89])
];

for (let i = 0; i < func.length; i++) {
  func[i];
}
