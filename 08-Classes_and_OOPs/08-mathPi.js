const prop = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(prop);
//IMP: Since math.pi writable, enumerable, configurable properties are false, that's why we can't change its value.
Math.PI = 4
// console.log(Math.PI);       //NOTE: The value will not change
const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailble : true
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));     //NOTE: Way to access the properties of any object.

// for (const prop of chai) {                                      //NOTE: We can't iterate a object like this.
//     console.log(prop);
// }

// for (let [key,value] of Object.entries(chai)) {
//     if (typeof(value) !== "function"){                              //NOTE: To ignore any functions defined inside a object. Otherwise it shows all the function defined in them with their code.
//     console.log(`${key} : ${value}`);
//     }
// }

Object.defineProperty(chai, "name",{                            //NOTE: Way to change the properties
    writable : false,
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (const [key, value] of Object.entries(chai)) {
//     if(typeof(value) !== "function"){
//         console.log(`${key} : ${value}`);                           //NOTE: The name property is not printing since we have disabled its enumeration(iteration).
//     }
    
// }