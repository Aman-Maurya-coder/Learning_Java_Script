const user = {
    username : "aman",
    price : 999,
    welcome_msg : function(){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}

// user.welcome_msg()
// user.username = "sam"
// user.welcome_msg()

// console.log(this);                  //NOTE: This will return a empty object but if we run this on browser it will give us a window object.

function one(){
    let username = "aman"
    // console.log(this.username)      //NOTE: This will return undefined since this does not work on functions like usual.
}

// one()

const two = () => {                    //NOTE: This is a arrow function.
    let username = "aman"
    console.log(this.username);
}

// two()                               //NOTE: The result will be same in this also.

const three = (num1, num2) => num1 + num2   //NOTE: another way to use arrow function can use () after arrow also . e.g. (num1 + num2)

// console.log(three(4,5))

const four = () => ({username : "aman"})    //NOTE: to return a object in arrow function

// console.log(four());

