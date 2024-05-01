let today = new Date()
// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toTimeString());
// console.log(today.toLocaleString());
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleTimeString());

let new_date = new Date(2023, 0, 23)                // Months are set from 0
// console.log(new_date.toString());

let new_date2 = new Date(2023, 0, 23, 5, 3)         // Months are set from 0
// console.log(new_date2.toString());

let new_date3 = new Date("01-14-2023")
// console.log(new_date3.toLocaleString());
// console.log(new_date3.getTime());               // To get the time in miliseconds            

let time_stamp = Date.now()
// console.log(Math.floor(time_stamp/1000));       // To get the value in seconds

let new_date4 = new Date()                         
// console.log(new_date4.get());                  // Same for day,month(but in index form),date,time,year,hour,minutes,etc...

console.log(new_date4.toLocaleString('default', {   // To customize the output 
    weekday: "long",
}))
