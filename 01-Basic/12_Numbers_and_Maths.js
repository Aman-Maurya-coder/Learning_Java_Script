const score = 400                   // ways to define variable of number type
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(typeof score.toString());
// console.log(score.toString().length);
// console.log(balance.toFixed(2));
const num = 214.54176
// console.log(num.toPrecision(2));
// console.log(num.toPrecision(6));
// console.log(typeof num.toPrecision(6));

const num2 = 1000000
// console.log(num2.toLocaleString('en-in'));      // to see the value in indian format(default), only "en" for american format



// ****************************************Maths*********************************************************



// console.log(Math);                           // see in dev options in web browser
// console.log(Math.abs(-4))
// console.log(Math.round(502.245));
// console.log(Math.ceil(502.541));
// console.log(Math.floor(502.541));

// console.log(Math.min(4,5,6,7,2,1,6));
// console.log(Math.max(4,5,6,7,2,1,6));


// console.log((Math.random()*10) +1);                // +1 for avoiding getting 0
// console.log(Math.round(Math.random()*10) +1);               

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1) + min))     // to get a value in a given range