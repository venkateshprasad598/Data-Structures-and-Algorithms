// Capitalize first letter of the sentence
function longest(arr) {
  let split = arr.split(" ");
  let array = [];
  console.log(split);
  split.map((data, index) => {
    if (index == 0) {
      array.push(data.toUpperCase());
    } else {
      array.push(data);
    }
  });
  console.log(array.join(" "));
}
longest("Hello who are you dear");
