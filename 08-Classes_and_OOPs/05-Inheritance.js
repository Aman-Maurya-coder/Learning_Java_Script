class User{
    constructor (username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email = email
        this.passoword = password
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@chai.com", "aman@")
chai.addCourse()

const masalaChai = new User("masalChai")
// masalaChai.addCourse()       //NOTE: Will not work
masalaChai.logMe()

// console.log(chai == masalaChai);
// console.log(chai == Teacher);
// console.log(chai instanceof Teacher);
// console.log(Teacher instanceof User);
// console.log(chai instanceof User);