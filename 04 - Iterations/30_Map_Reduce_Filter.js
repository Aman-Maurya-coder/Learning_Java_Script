// const coding = ['js', 'ruby', 'java', 'python']

// const values = coding.forEach( (item) => {
//     console.log(item)
//     // return item                          //NOTE: forEach doesn't return any values.That's why we use map, filter, reduce to return or store certain values(if conditional statements are used) in a variable.
// } )

// console.log(values);


const num = [1,2,3,4,5,6,7,8,9,10]

//const num2 = num.filter( (item) => item>4)    //NOTE: filter always returns the value. It is used when we have to check a condition.
const num3 = num.filter( (item) => {            // NOTE: if we are using {}("using scope") in arrow functions then we have to use return to return the value. 
    return item > 4                             //NOTE: We have to return the value here because filter needs a boolean input to determine which value to return to variable and which to not.
})
// console.log(num3);

const num4 = num.map( (item) => item+10 )       //NOTE: Just like python. Applies the given function to every variable. Remember to use return statement when using ('{} brackets').
// console.log(num4);

const num5 = num.map( (item) => item*10 )       //NOTE: They can be used like this also. This is known as chaining.
                .map( (i) => i+2 )
                .filter( (j) => j%4===0 )           
// console.log(num5);


// +++++++++++++++++++++ Reduce ++++++++++++++++++++++++

const nums = [1,2,3]

const res = nums.reduce( function (acc, curnt_val) {           //NOTE: VERY STRANGE. The function in reduce should take two arguments  :- accumulator and current value.
                                                               //NOTE: Reduce takes two arguments : function which is taking two arguments, initial value. 
    // console.log("acc:",acc);                                //NOTE: The accumulator on first run takes a value given by us.
    // console.log("currnt_val:",curnt_val);                   //NOTE: Then after that accumulator takes the result of previous iteration as its value.
    return acc + curnt_val                                     //NOTE: And the current value will be taken as current value from the array one by one
}, 0 )                                                         //NOTE: The value given after defining the function is the initial value of function(like in this line)
//                                                               NOTE: It basically reduces a array to a single value
// console.log(res);


// IMP: Reduce with an arrow function
const total = nums.reduce( (acc, curr) => acc+curr,0 )
console.log(total);