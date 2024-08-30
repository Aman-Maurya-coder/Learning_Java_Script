// Stack memory :-
// Used in all primitive datatypes.
// In this the copy of value of variable is returned if we create a copy, so the orginal value doesn't change even if we change the copy.


// Heap memory :-
// Used in all non-primitive datatypes.
// In this the reference of the original value of variable is returned, so if we change it the original value will be changed. 

let yt_channel = "chai aur code"            // primitive type

let new_name = yt_channel

// console.log(new_name);
// console.log(yt_channel);

new_name = "code with harry"                // value will get changed in the new variable only.

// console.log(new_name);
// console.log(yt_channel);


let names = ["aman", "karan", "dron"]       // Non-primitive type
let new_names = names

// console.log(names);
// console.log(new_names);

new_names[1] = "naman"                      // value will get changed in the original object as well.

// console.log(names);
// console.log(new_names);