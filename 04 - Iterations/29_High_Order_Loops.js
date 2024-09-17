// These are array specific loops

//NOTE: for-of loop

// const arr = [1,2,3,4,5,6]
const arr = "aman"                  // NOTE: Works for strings also

for (const i of arr) {
    // console.log(i);
}

// Maps :- The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//         Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")
map.set("IN", "India")                      //NOTE: Values in map are uniques they don't get repeated

// console.log(map);
for (const i of map) {
    // console.log(i);
}

for (const [i,j] of map) {                  //NOTE: getting values in seprate variables
    // console.log(j);
    // console.log(i);
}

const obj = {
    game1 : "nfs",
    game2 : "tekken",
    game3 : "midtown madness"
}

// for (const [i,j] of obj) {                  //NOTE: not work on obj
//     console.log(j);
// }

