// Immediately Invoked Function Expression (IIFE)

(function chai(){                    //NOTE: It is also called as named IIFE.   
    console.log("db connected");
})();                                //NOTE: function when wrapped in paranthesis "()" and then called after defining are known as IIFE.It is used to protect the function from global variables.
                                     //NOTE: We have to use a semicolon after these functions since they don't end on their own.

(() => {console.log("db connected");})();    //NOTE: Arrow function as IIFE.

((name) => (console.log(`db is connected to ${name}`)))("aman");        //NOTE: Function with a parameter as IIFE.
