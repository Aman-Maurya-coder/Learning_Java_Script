// Primitive :-

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Js is a dynamically typed language.
// let useremail;  // another way to define a variable.

// Symbol : to make values or objects unique
let id = Symbol(123)
let another_id = Symbol(123)

console.log(id === another_id)
console.log(typeof id);


// Refrence Type (Non-Primitive) :-

// 3 types : Arrays, Objects, Functions

const names = ["aman", "dron", "naman"]
console.log(typeof names);


let obj = {
    name: "hitesh",
    age: 24,
}
console.log(typeof obj);


const func = function(){
    console.log("hello world");
}
func()
console.log(typeof func);


