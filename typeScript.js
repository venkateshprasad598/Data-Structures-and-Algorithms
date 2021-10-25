console.log("Hello Typescript");
var a = "9";
console.log(a);
var str = 10;
console.log(str);
var boo = true;
console.log("boolean", boo);
var fruit;
(function (fruit) {
    fruit[fruit["apple"] = 1] = "apple";
    fruit[fruit["orange"] = 2] = "orange";
    fruit[fruit["bananna"] = 3] = "bananna";
})(fruit || (fruit = {}));
console.log(fruit.bananna);
