/**
 * Data type of Date is object 
 * every single time we should create an instance of Date Constructor
 * every single time we need to modify Date Instance what we need .
 */

let myDate = new Date();
console.log(myDate); // Output :- Wed Dec 06 2023 10:49:26 GMT+0500 (Pakistan Standard Time)

// Now we implement some important methods about date 

//  Get Date 
// if simply just we need date of the current day of months we use this methods.

console.log(myDate.getDate()); // output:- so its will show you current date of month today is 6 .

// Get Day 
// This method also work simply as getDate() but  its will show us the current day of week.
console.log(myDate.getDay()); // output:- so its will show you current day of week today is 3 .


// get full year

// its will return us full year 
console.log(myDate.getFullYear()); // output:2023

// To Date String
const eventDate = new Date(1993, 6, 28, 14, 39, 7);

console.log(eventDate.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(eventDate.toDateString());
// Expected output: "Wed Jul 28 1993"

//  To local String
/**
 * This method is special method because we can customize our date and time format 
 */

const event2 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event2.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event2.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// Expected output: "2012. 12. 20. 오전 3:00:00"


//  Time Methods 


let myTimeStamp = Date.now(); 
// now is private method thats why without instance we can call it and return us milliseconds since 1970 january.
console.log(myTimeStamp);

// get
let newTime = new Date();
console.log(newTime.getHours());
console.log(newTime.getMinutes());
console.log(newTime.getSeconds());
console.log(newTime.getMilliseconds());
console.log(newTime.getTime()); // milliseconds from 1970