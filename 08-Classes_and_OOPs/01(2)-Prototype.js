
//NOTE: To do by ourself:-
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);          //NOTE: Should print the trimmed length.


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()          //NOTE: Can use hitesh method since it is a instance of object.
myHeros.hitesh()            //NOTE: Same goes for myHeros as arrays are also a instance of object.
myHeros.heyHitesh()         //NOTE: Can use the method of array as myHeros is the instance of array.
heroPower.heyHitesh()       //IMP: It will not run, since heropower is not an instance of array.

//NOTE: inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport          //NOTE: Inheriting the prototype of TheachingSupport object.
}

Teacher.__proto__ = User                //NOTE: Teacher inheriting the prototype of User object.

//IMP: modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


//NOTE: Solution of the above listed problem
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()