function one() {
    const username = "aman"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    two()
    // console.log(website);
}

// one()

if (true) {
    const username = "aman"

    if (true) {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}


// ++++++++++++++++++++ NOTE ++++++++++++++++++++

// IMP: ways to define a functions:-


// console.log(addone(5))              //NOTE: In js code is not interpreted line by line, we can call a function before its definition
function addone(num) {
    return num +1
}


// console.log(addtwo(5))              //NOTE: But the function defined as an expresion can't be called before their definition 
const addtwo = function(num){          //NOTE: Function defined like this is known as an expresion
    return num +2
}
