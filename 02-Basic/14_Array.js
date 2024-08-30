const arr = [0, 1, 2, 4, 5, 6]
// console.log(arr[0]);

const arr2 = ["aman", "karan", "dron"]          // Ways to make arrays
const arr3 = new Array(1,2,2,3,4,5)

arr.push(7)
arr.push(8)
// console.log(arr);

arr.pop()
// console.log(arr);

arr.unshift(9)                                  // To add a element at start of the array
// console.log(arr);

arr.shift()                                     // Removes first element
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(9));

const arr4 = arr.join()                         // Also converts the array into string
// console.log(arr);
// console.log(arr4);
// console.log(typeof arr4);

// console.log("a ", arr);
const arr5 = arr.slice(1,4)
// console.log(arr5);
// console.log("b ", arr);

console.log(arr);
const arr6 = arr.splice(1,3)                    // also deletes the arr from original array
console.log(arr6);
console.log(arr);