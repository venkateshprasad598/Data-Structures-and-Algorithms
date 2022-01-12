console.log("Interview");
const obj = {
  field1: "value1",
  "field2.field3": "value2",
  "field4.field5.field6": "value3",
};
let keys = Object.keys(obj);
console.log(keys);

keys.map((data) => {
  let split = data.split(".");

  if (split.length > 1) {
    let cur = obj;
    split.map((mdata, index) => {
      if (index == split.length - 1) {
        cur[mdata] = obj[data];
      } else {
        cur[mdata] = {};
        cur = cur[mdata];
      }
    });
    console.log(delete obj[data]);
  }
});
console.log(obj);
