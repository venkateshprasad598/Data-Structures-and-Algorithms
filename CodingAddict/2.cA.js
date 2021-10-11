const math = (array) => {
  let sum = 0;
  let x = array[0];
  let isArthematic = 0;
  let isGeometric = 0;

  array.map((data, index) => {
    if (index > 0) {
      sum += data;
      let difference = sum - x;
      if (difference == array[0]) {
        isArthematic++;
      } else if (difference == x * 2) {
        isGeometric++;
      }
      x = sum;
      sum = 0;
    }
  });

  if (isGeometric == array.length - 1) {
    console.log("GEO");
  } else if (isArthematic == array.length - 1) {
    console.log("ART");
  } else {
    console.log("-1");
  }
};

math([3, 6, 9]);
math([3, 9, 27]);
math([3, 9, 25]);
math([2, 4, 6, 8, 10]);
math([5, 10, 15]);
