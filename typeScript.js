// console.log("Hello Typescript");
// var a : string = "9";
// console.log(a);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var str : number = 10;
// console.log(str)
// var boo : boolean = true
// console.log("boolean", boo)
// enum fruit{
//     apple=1, 
//     orange,
//     bananna,
// }
// console.log(fruit.bananna)
var Parent = /** @class */ (function () {
    function Parent(m, n) {
        this.name = m;
        this.last = n;
    }
    Parent.prototype.value = function () {
        return "What is your name " + this.name;
    };
    return Parent;
}());
var ans = new Parent("v", "en");
console.log(ans.value());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(m, n, c) {
        var _this = _super.call(this, m, n) || this;
        _this.age = c;
        return _this;
    }
    Child.prototype.value = function () {
        return "What is your name " + this.name + " " + this.last + " i think your age is " + this.age;
    };
    return Child;
}(Parent));
var newAns = new Child("Venkatesh", "Prasad", 23);
console.log(newAns.value());
