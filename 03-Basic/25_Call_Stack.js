// Java Script Execution Context(EC)
// JS is single threaded.
// When a JS code is written. These types of EC are formed :-
// (1) Global EC :- this keyword
// (2) Functional EC
// (3) Eval EC (not necessary)

// On exection the code goes from the following phases:-
// (1) Memory Creation Phase :- Memory allocation takes place
// (2) Execution Phase :- All calculation and processes takes place here.

// e.g. :-
let val1 = 10
let val2 =5
function add_num(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = add_num(val1, val2)
let result2 = add_num(10, 2)

// The execution will take place as :-
// (1) Global Execution :- This
// (2) Memory Phase :- Memory is allocated [val1 => undefined, val2 => undefined, add_num => definition, result1 => undefined, result2 => undefined]
// (3) Execution Phase :- [val1 <= 10, val2 <= 5, result1 <= [new variable environment, new EC], result2 <= [same as result1]]
//                        For result1 :- (1) Memory Phase :- [val1 => undefined, val2 => undefined, total => undefined]
//                                       (2) Execution Phase :- [num1 <= 10, num2 <= 5, total <= 15]
//                                       (3) total will go to global execution phase, and this EC will get deleted.
//                        Same thing will happen to result2. Memory phase will be same for result2 too.