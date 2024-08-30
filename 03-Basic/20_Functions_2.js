function calc_cart_price(val1, val2, ...num1){         //NOTE:IMP:(...) is known as rest operator and as well as spread operator depending upon the usecase
    return (val1, val2)                                //NOTE: works as a **args like in python
}                                                      //NOTE: return statement only return the last object passed to it.
                                                       //NOTE: To return more than one value return it as a array.         

// console.log(calc_cart_price(2,20,400,46,56,2,1));


const user = {
    username : "aman",
    price : 199
}

//IMP: to use object as a argument
function handle_obj(any_obj) {
    console.log(`Username is ${any_obj.username} and price is ${any_obj.price}`);
}

// handle_obj(user)

const my_arr = [1,5,7,6]

//IMP: to use array as argument
function return_second_element(arr) {
    return arr[1]
}

console.log(return_second_element(my_arr));