//STEP 1
let month = parseInt(prompt("Enter a month (1-12):")) - 1;
let year = new Date().getFullYear();
let daysInMonth = new Date(year, month + 1, 0).getDate();
console.log(`Number of days in specified month: ${daysInMonth}`);

//STEP 2
let date = new Date();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(`Current month: ${months[date.getMonth()]}`);

//STEP 3
let inputDate = prompt("Enter a date (YYYY-MM-DD):");
let checkDate = new Date(inputDate);
console.log(`Is it weekend? ${checkDate.getDay() === 0 || checkDate.getDay() === 6}`);

//STEP 4
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
console.log(`Yesterday was: ${days[yesterday.getDay()]}`);

//STEP 5
let currentDay = new Date();
console.log(`First letter of current day: ${days[currentDay.getDay()].charAt(0)}`);