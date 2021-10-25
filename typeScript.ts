// console.log("Hello Typescript");
// var a : string = "9";
// console.log(a);

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

class Parent{
    name : string
    last : string
    constructor(m:string, n:string){
        this.name = m
        this.last = n
    }
    value(){
        return `What is your name ${this.name}`
    }
}
let ans = new Parent("v", "en")
console.log(ans.value())

class Child extends Parent{
    age : number
    constructor(m : string, n : string,c : number){
        super(m ,n)
        this.age = c
    }
    value(){
        return `What is your name ${this.name} ${this.last} i think your age is ${this.age}`
    }
}
let newAns = new Child("Venkatesh", "Prasad",23)
console.log(newAns.value())