// Immediately Invoked Function Expression (IIFE)

(function chai(){                    //NOTE: It is also called as named IIFE.   
    console.log("db connected");
})();                                //IMP: function when wrapped in paranthesis "()" and then called after defining are known as IIFE.It is used to protect the function from global variables.
                                     //IMP: We have to use a semicolon after these functions since they don't end on their own.

(() => {console.log("db connected");})();    //NOTE: Arrow function as IIFE.

((name) => (console.log(`db is connected to ${name}`)))("aman");        //NOTE: Arrow function with a parameter as IIFE.
//NOTE: To pass the values for parameters of functions the arguments are given in the last bracket.


//NOTE: If a iife function is defined with a name then it is called as named iife. Just like the first function ("chai")
//NOTE: Second and third functions are known as unnamed iife.