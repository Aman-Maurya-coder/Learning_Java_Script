// These are array specific loops

// for-of loop

// const arr = [1,2,3,4,5,6]
const arr = "aman"                  // NOTE: for strings also

for (const i of arr) {
    // console.log(i);
}

// Maps

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

