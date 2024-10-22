const user = {
    username: "aman",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}


// console.log(user.username);
// user.getUserDetails()
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function (){
        console.log(`Welcome ${this.username}`)
    }

    return this                                 //NOTE: By using new keyword the return statement is run implicitly. So no need to write this

}
0.

const userOne = new User("aman", 12, true)
const userTwo = new User("ChaiAurCode", 24, true)
console.log(userOne.constructor);
// console.log(userTwo);
// userOne.greetings()

