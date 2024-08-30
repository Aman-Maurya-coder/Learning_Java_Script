const nam = ["aman", 'karan', "naman"]
const last = ["maurya", "bhatt", "pandey"]

const nam2 = nam.concat(last)//NOTE: insert individual elements.
// console.log(nam2);

// nam.push(last)           //NOTE: insert list as a single element.
// console.log(nam);

const nam3 = [...nam,...last]       //Just like extend in python
// console.log(nam3);

const nam4 = [1,2,5,6,7,[1,25,9],4,[4,5,[1,2],4]]
const nam5 = nam4.flat(Infinity)        //NOTE: Depth to which it should merge the multidimensional arrays.
// console.log(nam5);

// console.log(Array.isArray("Aman"));     //NOTE: Checks if given argument is array or not.
// console.log(Array.from("Aman"));        //NOTE: Creates a array from the given argument.
// console.log(Array.from({"name": "hitesh"}));        // Intresting: Since it can't decide how to make array

let scr1 = 100
let scr2 = 200
let scr3 = 300

// console.log(Array.of(scr1, scr2, scr3));

