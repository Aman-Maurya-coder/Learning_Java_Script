// falsy values :-
// false, 0, -0, 0n(BigInt), null, undefined, "", NaN

// truthy values :-
// "0", "false", " ", [], {}, function(){} "empty function", 

const user_email = []
const empty_obj = {}
const empty_str = ""

if (user_email.length === 0) {
    console.log("array is empty");
}

if (Object.keys(empty_obj).length === 0) {
    console.log("object is empty");
}

if (empty_str) {
    console.log("string is not empty");
}

//IMP:  && :- and , || :- or

// IMP: Nullish Coalescing Operator (??): null operator

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10      // Checks if first value is null or not, if it is null then the second value will gets assigned to the variable(it can be a function also)
// val1 = undefined ?? 15       // same for undefined also
// val1 = null ?? undefined ?? 15

// console.log(val1);



// IMP: Ternary Operator:-
// condition ? true : false     // shorthand for if statement

const ice_price = 200

// ice_price>150 ? console.log("greater than 150") : console.log("less than 150");      //IMP

