class User{
    constructor (email, password){
        this.email = email,
        this.password = password
    }

    get password(){                 //NOTE: To define how a property should show a data if a object wants it.
        return `${this._password}@aman.com`
    }

    set password(value){            //IMP: Get and set can't be used solely.
        this._password = value //NOTE: It defines how the value should be assigned to a class property if user set it.
    }                               //IMP: We defined a new property while using setter because if we set the value of old password property agian then it will collide with the constructor and throw an error.
}

const hitesh = new User ("aman@aman.com", "abc")
console.log(hitesh.password);
