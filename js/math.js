//STEP 1
let number = prompt("Enter a number:");
console.log(`Absolute value of ${number} is: ${Math.abs(number)}`);

//STEP 2
let decimal = prompt("Enter a decimal number:");
console.log(`Rounded up: ${Math.ceil(decimal)}`);

//STEP 3
let decimal2 = prompt("Enter a decimal number:");
console.log(`Rounded down: ${Math.floor(decimal2)}`);

//STEP 4
let numbers = prompt("Enter exactly 5 numbers (comma-separated):");
let numArray = numbers.split(",").map(Number);
if (numArray.length !== 5) {
    console.log("Please enter exactly 5 numbers");
} else {
    console.log(`Largest number in the list: ${Math.max(...numArray)}`);
    console.log(`Smallest number in the list: ${Math.min(...numArray)}`);
}

//STEP 5
let sqrtNum = prompt("Enter a number to find its square root:");
console.log(`Square root of ${sqrtNum} is: ${Math.sqrt(sqrtNum)}`);
