// Singleton:-

const tinder_user = new Object()
// console.log(tinder_user);

tinder_user.id = "123abc"
tinder_user.name = "Gaurav"
tinder_user.isLoggedIn = false

// console.log(tinder_user);

const regular_user = {
    email : "someone@gmail.com",
    fullname : {
        first_name : "some",
        last_name : "one"
    }
}

// console.log(regular_user.fullname.last_name);
// console.log(regular_user.fullname?.last_name);      //NOTE: ? is used to handle the exception that if the key is not present in the object

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3 : "a",
    4 : "b"
}

//IMP: To add two or more objects same approach as arrays is taken 

const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({}, obj1, obj2)          //NOTE: The {} is an optional argument (target array in which we want to assign the arrays) but is recommended to use in every case
//IMP: Method used in obj3 is recommended to use in adding objects just like arrays

// console.log(obj3);
// console.log(obj4);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "aman@gmail.com"
    }
]

// console.log(users[0].email)

// IMP
// console.log(Object.keys(tinder_user));
// console.log(Object.values(tinder_user));
// console.log(Object.entries(tinder_user));

// console.log(tinder_user.hasOwnProperty("name"));         //NOTE: to check if the object has this property or not
