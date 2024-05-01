//singleton 

// Object literals:-

const mysym = Symbol("key1")
const mysym1 = Symbol("key2")

const js_user = {                       // this is a object in js
    name : "aman",                      // in name inverted commas can be omitted
    "full name" : "aman maurya",
    mysym1 : "my key 1",                // the key is not used as symbol still this way
    [mysym] : "my real key",            // correct way to define a symbol as a key
    age : 18,
    location : "Almora",
    isThere : false,
    lived_there : [2016,2017,2018]
}

// console.log(js_user.name);              //can't access full name through this method
// console.log(js_user["name"]);           // Ways to access values of objects
// console.log(js_user.mysym1);            // it's string (but we want symbol)
// console.log(js_user[mysym]);            // To access Symbol

js_user.email = "amanmaurya@gmail.com"     // To add a key value pair from outside
// console.log(js_user["email"]);

// We can freeze a object also so that it will not get changed.
// Object.freeze(js_user)
js_user.email = "amankashipur@gmail.com"
// console.log(js_user);                   // Value didn't get updated

js_user.greeting = function(){
    console.log(`Hello js user ${this.name}`);
}

js_user.greeting()         // we have to call a function 
console.log(js_user.greeting)           // will now print anything