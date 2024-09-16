const promiseOne = new Promise(function(resolve, reject){
    // Do an async task:-
    //      DB calls, cryptography, network, setTimeout, setInterval
    setTimeout(function(){
        console.log(('async task is completed'));
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThird = new Promise(function(resolve, reject){
    setTimeout(function (){
        resolve({username: "Aman", email: "aman@example.com"})
    }, 1000)
})

promiseThird.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Aman", password: "123"})
        } else {
            reject('Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {                                           // NOTE: It is a arrow function.
    console.log(user);
    return user.username
})
.then((username) => {                                       // NOTE: Yes!! We can use multiple "then". The next "then" takes the value which is returned from the previous "then"
    console.log(username);
})
.catch(function(error){                                     // NOTE: The reject function is handeled by catch method.
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Javascipt", password: "123"})
        } else {
            reject('js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){                // NOTE: Second way to resolve promises using async await 
    try {                                           // NOTE: Always use try and catch block in order to handle rejection from promises   
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()          //IMP: await in json conversion
//         console.log(data)
//         console.log(response);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }


// getAllUsers()


// NOTE: Above function in .then and .catch

fetch("https://api.github.com/users/Aman-Maurya-Coder")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch(() => console.log(error))



