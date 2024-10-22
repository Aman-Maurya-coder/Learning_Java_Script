function numToPower(num){
    return num*5
}
numToPower.power = 2                       
// console.log(numToPower(5));              //NOTE: Since everything in java script is a object therefore we can add properties to it.
// console.log(numToPower.power);           
// console.log(numToPower.prototype);       //NOTE: It will be empty because power is not still added in its prototype.power is only a property of numToPower which is outside of its prototype.
numToPower.prototype.power_three = 3        //NOTE: To add properties in prototype of numToPower we have to specify it.
// console.log(numToPower.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)     //NOTE: Whenever we store a function in a variable to access its properties and methods from the variable, we have to make the variable a instance of the function which we can do by using new keyword.
const tea = createUser("tea", 250)          //NOTE: Since we didn't use the new keyword while defining tea, therefore tea can't access the properties and methods of createUser function

// chai.printMe()
// tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/