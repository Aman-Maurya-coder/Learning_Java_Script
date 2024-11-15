function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}               //NOTE: Old way to use getter and setter in java script.

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);