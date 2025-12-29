const name = "Mayank "
const repoCount = 14
console.log(name + repoCount + " Repositories") ;

console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`);

const gameName = new String('gta 5')
console.log(gameName[0]);
console.log(gameName.__proto__); //prototyping object

console.log(gameName.length);
console.log(gameName.toUpperCase()); //Although ye original value update nahi karega just the copy will be created(reason ye primitive type data type hai so stack mai store hoga)
console.log(gameName.charAt(2)); //g-0 t-1 a-2 " "-3 "5"-5
console.log(gameName.indexOf('5'));

const newString = gameName.substring(0 , 4) // last ki value not included
console.log(newString);

const anotherString = gameName.slice(-4 , 1) //yahape ham negetive values bhi de sakte hai piche se start karne ke liye 
console.log(anotherString);

//UseCase - suppose user form bharte vakt email ya name mai white spaces de raha hai toh voh unecessary hatane ke liye ye use karenge
const newString1 = "   Mayank     "
console.log(newString1);
console.log(newString1.trim()); // Will remove the white spaces and such things

const url1 = "https://waste-wise-delta.vercel.com/admin/dashboard/mayank%20shedge"
console.log(url.replace('%20' , '-'))

console.log(url.includes('gta'))
console.log(url.includes('mayank'))

const gamer = new String('mayank-vijay-shedge')
//Suppose we want to convert this to array based on ki ye alag parts mai split ho jaye based on '-'
console.log(gamer.split('-'))

// 📌 Basic String Declaration
// const name = "Mayank "
// const repoCount = 14

// // ❌ OLD WAY - String Concatenation (avoid this)
// console.log(name + repoCount + " Repositories");

// // ✅ MODERN WAY - Template Literals (recommended)
// console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`);

// // 📌 String Object vs Primitive
// const gameName = new String('gta 5') // String object (rarely used)
// const primitiveName = 'gta 5'        // String primitive (recommended)

// console.log(gameName[0]);              // 'g' - accessing character by index
// console.log(gameName.__proto__);        // Shows String prototype object
// console.log(gameName.length);           // 5 - total characters
// console.log(gameName.toUpperCase());    // 'GTA 5' - original unchanged (immutable)
// console.log(gameName.charAt(2));        // 'a' - character at index 2
// console.log(gameName.indexOf('5'));     // 4 - first occurrence of '5'


// ========================================
// 🔥 MOST IMPORTANT STRING METHODS (Interview + Production)
// ========================================

const str = "  Hello World, Welcome to JavaScript  ";
const url = "https://example.com/search?q=hello%20world";
const email = "user@example.com";
const password = "Pass123@Word";

// ----------------------------------------
// 1️⃣ CASE CONVERSION
// ----------------------------------------

console.log(str.toLowerCase());         // "  hello world, welcome to javascript  "
console.log(str.toUpperCase());         // "  HELLO WORLD, WELCOME TO JAVASCRIPT  "

// Use case: Email/username comparison (case-insensitive)
const userEmail = "USER@EXAMPLE.COM";
console.log(userEmail.toLowerCase() === "user@example.com"); // true


// ----------------------------------------
// 2️⃣ TRIMMING & WHITESPACE REMOVAL
// ----------------------------------------

console.log(str.trim());                // "Hello World, Welcome to JavaScript" - removes start/end spaces
console.log(str.trimStart());           // "Hello World, Welcome to JavaScript  " - removes only start
console.log(str.trimEnd());             // "  Hello World, Welcome to JavaScript" - removes only end

// Use case: Form input cleaning
const userInput = "  admin@gmail.com  ";
console.log(userInput.trim());          // "admin@gmail.com"


// ----------------------------------------
// 3️⃣ SEARCHING & CHECKING
// ----------------------------------------

console.log(str.indexOf("World"));      // 8 - first occurrence index (returns -1 if not found)
console.log(str.lastIndexOf("o"));      // 26 - last occurrence of 'o'
console.log(str.includes("JavaScript"));// true - checks if substring exists
console.log(str.startsWith("  Hello")); // true - checks start
console.log(str.endsWith("  "));        // true - checks end

// Use case: URL/Path validation
console.log(url.startsWith("https"));   // true - secure URL check
console.log(email.includes("@"));       // true - basic email validation


// ----------------------------------------
// 4️⃣ EXTRACTING SUBSTRINGS ⭐⭐⭐
// ----------------------------------------

const text = "JavaScript Programming";

// slice(start, end) - most commonly used, supports negative indices
console.log(text.slice(0, 10));         // "JavaScript" - extracts from 0 to 9
console.log(text.slice(11));            // "Programming" - from index 11 to end
console.log(text.slice(-11));           // "Programming" - negative index (from end)
console.log(text.slice(-11, -1));       // "Programmin" - negative indices

// substring(start, end) - similar to slice but NO negative indices
console.log(text.substring(0, 10));     // "JavaScript"
console.log(text.substring(11));        // "Programming"

// substr(start, length) - ⚠️ DEPRECATED (avoid using)
console.log(text.substr(0, 10));        // "JavaScript" - 10 characters from index 0

// Use case: Extract file extension
const fileName = "document.pdf";
console.log(fileName.slice(-3));        // "pdf"


// ----------------------------------------
// 5️⃣ SPLITTING & JOINING ⭐⭐⭐
// ----------------------------------------

const sentence = "JavaScript is awesome and powerful";

// split() - converts string to array
console.log(sentence.split(" "));       // ["JavaScript", "is", "awesome", "and", "powerful"]
console.log(sentence.split(""));        // ["J", "a", "v", "a", ...] - splits every character
console.log(sentence.split(" ", 2));    // ["JavaScript", "is"] - limit to 2 elements

// Use case: URL path parsing
const path = "/user/profile/settings";
console.log(path.split("/"));           // ["", "user", "profile", "settings"]

// Use case: CSV parsing
const csv = "name,age,city";
console.log(csv.split(","));            // ["name", "age", "city"]


// ----------------------------------------
// 6️⃣ REPLACING ⭐⭐⭐
// ----------------------------------------

const message = "Hello World, Hello Universe";

// replace() - replaces ONLY first occurrence
console.log(message.replace("Hello", "Hi")); // "Hi World, Hello Universe"

// replaceAll() - replaces ALL occurrences (ES2021)
console.log(message.replaceAll("Hello", "Hi")); // "Hi World, Hi Universe"

// replace with regex (for case-insensitive or global replace)
console.log(message.replace(/hello/gi, "Hi")); // "Hi World, Hi Universe" - g=global, i=case-insensitive

// Use case: URL encoding fix
const badUrl = "https://example.com/hello%20world";
console.log(badUrl.replaceAll("%20", "-")); // "https://example.com/hello-world"

// Use case: Remove special characters
const username = "user@123#name";
console.log(username.replace(/[^a-zA-Z0-9]/g, "")); // "user123name"


// ----------------------------------------
// 7️⃣ PADDING (ES2017) ⭐
// ----------------------------------------

const cardNumber = "1234";

console.log(cardNumber.padStart(16, "*")); // "************1234" - adds * to start
console.log(cardNumber.padEnd(16, "*"));   // "1234************" - adds * to end

// Use case: Credit card masking
const card = "1234567890123456";
console.log(card.slice(-4).padStart(16, "*")); // "************3456"

// Use case: Time formatting
const hour = "5";
console.log(hour.padStart(2, "0"));     // "05"


// ----------------------------------------
// 8️⃣ REPEATING
// ----------------------------------------

console.log("Ha".repeat(3));            // "HaHaHa"
console.log("*".repeat(10));            // "**********"

// Use case: Creating separators
console.log("=".repeat(50));            // "=================================================="


// ----------------------------------------
// 9️⃣ CHARACTER ACCESS ⭐
// ----------------------------------------

const word = "JavaScript";

console.log(word.charAt(0));            // "J" - character at index 0
console.log(word[0]);                   // "J" - same as charAt (modern way)
console.log(word.charAt(100));          // "" - out of range returns empty string
console.log(word[100]);                 // undefined - out of range returns undefined

console.log(word.charCodeAt(0));        // 74 - ASCII/Unicode code of 'J'

// Use case: Character code validation
const char = "A";
console.log(char.charCodeAt(0));        // 65 - useful for range checks (A-Z = 65-90)


// ----------------------------------------
// 🔟 CONCATENATION ⭐
// ----------------------------------------

const firstName = "Mayank";
const lastName = "Sharma";

// concat() - joins strings
console.log(firstName.concat(" ", lastName)); // "Mayank Sharma"

// ✅ BETTER: Use template literals (more readable)
console.log(`${firstName} ${lastName}`);      // "Mayank Sharma"


// ----------------------------------------
// 1️⃣1️⃣ MATCH & SEARCH (Regex) ⭐⭐
// ----------------------------------------

const testStr = "My email is test@example.com and phone is 1234567890";

// match() - returns array of matches or null
console.log(testStr.match(/\d+/));      // ["1234567890"] - finds first number
console.log(testStr.match(/\d+/g));     // ["1234567890"] - g flag for all matches
console.log(testStr.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/)); // ["test@example.com"]

// search() - returns index of first match (like indexOf but with regex)
console.log(testStr.search(/\d+/));     // 38 - position of first digit

// Use case: Email extraction
const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
console.log(testStr.match(emailRegex)); // ["test@example.com"]


// ----------------------------------------
// 1️⃣2️⃣ LOCALECOMPARE (Sorting) ⭐
// ----------------------------------------

const str1 = "apple";
const str2 = "banana";

console.log(str1.localeCompare(str2));  // -1 (str1 comes before str2)
console.log(str2.localeCompare(str1));  // 1  (str2 comes after str1)
console.log(str1.localeCompare(str1));  // 0  (both are equal)

// Use case: Sorting arrays of strings
const fruits = ["banana", "apple", "cherry"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);                    // ["apple", "banana", "cherry"]


// ========================================
// 🎯 PRODUCTION-LEVEL USE CASES
// ========================================

// 1. Email Validation
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(isValidEmail("test@example.com")); // true

// 2. Password Strength Checker
function checkPasswordStrength(pass) {
  const hasUpper = /[A-Z]/.test(pass);
  const hasLower = /[a-z]/.test(pass);
  const hasNumber = /[0-9]/.test(pass);
  const hasSpecial = /[!@#$%^&*]/.test(pass);
  return hasUpper && hasLower && hasNumber && hasSpecial;
}
console.log(checkPasswordStrength("Pass123@")); // true

// 3. Slug Generation (for URLs)
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")  // Remove special chars
    .replace(/\s+/g, "-")           // Replace spaces with -
    .replace(/-+/g, "-");           // Remove duplicate -
}
console.log(generateSlug("  Hello World! JavaScript 2024  ")); // "hello-world-javascript-2024"

// 4. Truncate Text (for previews)
function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
console.log(truncate("This is a very long text", 10)); // "This is a ..."

// 5. Capitalize First Letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("javaScript")); // "Javascript"

// 6. Capitalize Each Word (Title Case)
function titleCase(str) {
  return str.split(" ").map(word => capitalize(word)).join(" ");
}
console.log(titleCase("hello world from javascript")); // "Hello World From Javascript"

// 7. Remove Duplicate Characters
function removeDuplicates(str) {
  return [...new Set(str)].join("");
}
console.log(removeDuplicates("hello")); // "helo"

// 8. Reverse String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// 9. Count Vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("JavaScript")); // 3

// 10. Check Palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("A man a plan a canal Panama")); // true


// ========================================
// 🧠 INTERVIEW QUESTIONS - STRING METHODS
// ========================================

/*
Q1: What's the difference between slice() and substring()?
A: slice() accepts negative indices, substring() treats negatives as 0

Q2: How to remove all spaces from a string?
A: str.replace(/\s+/g, "") or str.replaceAll(" ", "")

Q3: How to check if string contains a substring?
A: str.includes("substring") - returns boolean

Q4: What's the difference between == and === for strings?
A: === checks both value and type, == does type coercion

Q5: Are strings mutable in JavaScript?
A: No, strings are immutable. Methods return new strings.

Q6: How to convert string to array?
A: str.split("") or [...str] or Array.from(str)

Q7: What's the output of "5" + 3?
A: "53" - number is converted to string (concatenation)

Q8: How to remove first and last character?
A: str.slice(1, -1)

Q9: Difference between indexOf() and search()?
A: indexOf() takes string, search() takes regex

Q10: How to make first letter capital?
A: str.charAt(0).toUpperCase() + str.slice(1)
*/


// ========================================
// 📝 IMPORTANT NOTES
// ========================================

/*
✅ Strings are IMMUTABLE - original string never changes
✅ Always use template literals (`${}`) instead of concatenation
✅ trim() is essential for user input validation
✅ Use slice() over substr() (substr is deprecated)
✅ Regular expressions make string manipulation powerful
✅ Remember: String methods return NEW strings, don't modify original
*/
