//Only for ES6 and after

class User {
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){          //NOTE: No need to write function at start.
        return `${this.password}123`;
    }
    
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("Chai", "chai@chai.com", "aman@")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//NOTE: Behind the scene

function User2(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}123`
}

const tea = new User2("tea", "tea@tea.com", "aman@");
console.log(tea.encryptPassword());