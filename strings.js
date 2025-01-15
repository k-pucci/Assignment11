//STEP 1
let name = prompt("Please enter your name:");
alert(`Your name is ${name.length} characters long`);

//STEP 2
let name2 = prompt("Please enter your name:");
let position = parseInt(prompt("Enter a number to find the letter at that position:"));
alert(`The letter at position ${position} is: ${name2.charAt(position - 1)}`);

//STEP 3
let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
alert("Your name is: " + firstName + " " + lastName);

//STEP 4
let sentence = "The quick brown fox jumps over the lazy dog";
alert(`The word "fox" starts at index: ${sentence.indexOf("fox")}`);

//STEP 5
let sentence2 = "The quick brown fox jumps over the lazy fox";
alert(`The last instance of "fox" starts at index: ${sentence2.lastIndexOf("fox")}`);

//STEP 6
let sentence3 = "The quick brown fox jumped over the lazy dog";
let userName = prompt("Please enter your full name:");
alert(sentence3.replace(/the lazy dog/i, userName));

//STEP 7
let sentence4 = "The quick brown fox jumps over the lazy dog";
let searchWord = prompt("Enter a word to search for:");
alert(`The word "${searchWord}" was found: ${sentence4.includes(searchWord)}`);

//STEP 8
let old_string = "The quick brown fox jumps over the lazy dog";
let new_string = old_string.slice(old_string.indexOf("the lazy dog"));
alert(new_string.toUpperCase());

//STEP 9
let spacedString = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert(spacedString.trim().toLowerCase());

//STEP 10
let uncapitalized = "the quick brown fox jumps over the lazy dog";
alert(uncapitalized.charAt(0).toUpperCase() + uncapitalized.slice(1));