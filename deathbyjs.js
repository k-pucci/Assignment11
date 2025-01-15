//STEP 1
function alphabetizeString(str) {
    return str.split('').sort().join('');
}
console.log(alphabetizeString('webmaster')); // Output: 'abeemrstw'

//STEP 2
function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeWords('the quick brown fox')); // Output: 'The Quick Brown Fox'

//STEP 3
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('The quick brown fox')); // Output: 5

//STEP 4
function generateRandomId(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
console.log(generateRandomId(8)); // Output: Random 8-character string

//STEP 5
function Longest_Country_Name(countries) {
    return countries.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));