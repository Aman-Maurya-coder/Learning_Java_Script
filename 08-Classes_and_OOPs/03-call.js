function SetUsername(username){
    //Something complex
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)                  //NOTE: Only this will not work, We have to add this as a optional argument to tell the function to use this execution context instead.
    this.email = email                          //NOTE: Without using call in calling the above function, the function will run but username will get added to the setUsername function instead of createUser and that too will get deleted after the complete execution of the function.
    this.password = password
}

const chai = new createUser("chai", "chai@chai.com", 123)

console.log(chai);