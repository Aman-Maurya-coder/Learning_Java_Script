function say_my_name (){
    console.log("Aman")
}

// say_my_name()

function add_two_num (num1, num2){
    return num1 + num2
}

// console.log(add_two_num())                   //NOTE:Doesn't throw an exception
// console.log(add_two_num(10, 20))

function user_login_msg(usrname = "aman"){      // NOTE: we can set a default value also
    // if (usrname === undefined) {             //NOTE: can be done as following also
    if (!usrname) {                             //NOTE: undefined, "" are rendered as false in if statement condition evaluation.
        return ("Please enter a username");
    }
    else {
        return `${usrname} just logged in.` 
    }
}
// console.log(user_login_msg("Aman"))          //NOTE: If we don't give a argument in a function which have parameters then the parameters will be defined as undefined.
console.log(user_login_msg())                   //NOTE:undefined is taken as argument if not given any

