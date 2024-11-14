class User{
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){      //NOTE: static keyword is used to restrict the access of some methods from its instances.
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());  //NOTE: Will not be able to access the method.

class Teacher extends User{
    constructor (username,email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "iPhone@apple.com")
iPhone.logMe()
// iPhone.createId()        //NOTE: Will not be able to access here too.