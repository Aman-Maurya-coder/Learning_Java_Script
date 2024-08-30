// console.log(2>1);       // <, <=, >=, ==, !=

console.log(2 > "1");       //NOTE: Will Behave like numbers.
console.log("2" > 4);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);         //avoid above 6 types of conversions 

console.log("2" === 2);   //NOTE: Checks datatypes too.