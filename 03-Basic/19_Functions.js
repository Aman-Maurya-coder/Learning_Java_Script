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
    if (!usrname) {
        return ("Please enter a username");
    }
    else {
        return `${usrname} just logged in.`
    }
}
// console.log(user_login_msg("Aman"))
console.log(user_login_msg())                   //NOTE:undefined is taken as argument if not given any

