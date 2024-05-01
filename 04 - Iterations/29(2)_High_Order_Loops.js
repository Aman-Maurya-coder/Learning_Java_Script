const obj = {
    js : "Java Script",
    cpp : "C++",
    py : "Python",
    rb : "Ruby"
}

// for (const key in obj) {                    //NOTE: for iterating an object
//     console.log(key);
//     console.log(obj[key]);
// }

//IMP: It also works on arrays but the value in key will be index of the array

const arr = ["js", "py", "cpp", "java"]

// for (const key in arr) {
//     console.log(key);
// }

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")
map.set("IN", "India")  

// for (const i in map){                       //NOTE: It can't be used on map since maps are not iterable.
//     console.log(i);
// }

