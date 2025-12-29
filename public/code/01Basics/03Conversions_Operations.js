let score = null

// console.log(typeof(score));

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);

// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 and false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true && 0 => false 
// "" => false && "Mayank" => true 

let someNumber = 33

// let stringNumber = String(someNumber)

// console.log(someNumber);

// OPERATIONS 

let value = 3

let negValue = -value 
// console.log(negValue)

let str1 = "Hello"
let str2 = " Mayank"
let str3 = str1 + str2
// console.log(str3);

//but problem yahape aa jati hai 
// console.log("1" + 2)
// console.log(1 + "2");
// console.log("1" + 2 + 2); //string first toh sabhi ko string mai convert
// console.log(1 + 2 + "2"); //string second hai toh sabhi ko number mai convert 

console.log(+ true);
console.log(+"");

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++; //postincrement
// ++gameCounter; //preincrement
// gameCounter--; //postdecrement
// --gameCounter; //predecrement
// console.log(gameCounter);



/*
Type Conversion = ek data type ko dusre data type mein convert karna

2 types hote hain:
1. Implicit Conversion (JavaScript automatically karta hai)
2. Explicit Conversion (hamne manually karte hain)
*/

// ========================================
// 🟢 EXPLICIT TYPE CONVERSIONS
// ========================================

// ─────────────────────────────────────
// 1️⃣ STRING TO NUMBER CONVERSION
// ─────────────────────────────────────

console.log("1. STRING TO NUMBER CONVERSION");

let score = "33";
let valueInNumber = Number(score);
console.log(valueInNumber);          // 33 (number)
console.log(typeof valueInNumber);   // "number"

// Different scenarios
console.log(Number("33"));           // 33
console.log(Number("33.5"));         // 33.5
console.log(Number("33abc"));        // NaN ⚠️ Invalid number string
console.log(Number("  "));           // 0 (whitespace converts to 0)
console.log(Number("true"));         // NaN (string "true" nahi convert hota)
console.log(Number(true));           // 1 (boolean true = 1)
console.log(Number(false));          // 0 (boolean false = 0)
console.log(Number(null));           // 0
console.log(Number(undefined));      // NaN

// Alternative methods
console.log(parseInt("33"));         // 33 (strict integer)
console.log(parseInt("33abc"));      // 33 (stops at first non-digit)
console.log(parseFloat("33.5"));     // 33.5 (allows decimals)
console.log(parseFloat("33.5abc"));  // 33.5 (stops at non-digit)
console.log(+"33");                  // 33 (unary plus operator)
console.log(-"33");                  // -33 (unary minus operator)


// ─────────────────────────────────────
// 2️⃣ NUMBER/BOOLEAN TO STRING CONVERSION
// ─────────────────────────────────────

console.log("\n2. NUMBER/BOOLEAN TO STRING CONVERSION");

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);           // "33" (string)
console.log(typeof stringNumber);    // "string"

// Different scenarios
console.log(String(100));            // "100"
console.log(String(99.99));          // "99.99"
console.log(String(true));           // "true"
console.log(String(false));          // "false"
console.log(String(null));           // "null"
console.log(String(undefined));      // "undefined"
console.log(String(NaN));            // "NaN"

// Alternative methods
console.log((100).toString());       // "100" (method on number)
console.log(true.toString());        // "true"


// ─────────────────────────────────────
// 3️⃣ TO BOOLEAN CONVERSION
// ─────────────────────────────────────

console.log("\n3. TO BOOLEAN CONVERSION");

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);      // true
console.log(typeof booleanIsLoggedIn); // "boolean"

// Truthy values → true
console.log(Boolean(1));             // true
console.log(Boolean(99));            // true
console.log(Boolean("Mayank"));      // true
console.log(Boolean("0"));           // true ⚠️ Non-empty string!
console.log(Boolean([]));            // true ⚠️ Array (object)!
console.log(Boolean({}));            // true ⚠️ Object!
console.log(Boolean(function(){}));  // true ⚠️ Function!

// Falsy values → false
console.log(Boolean(0));             // false
console.log(Boolean(-0));            // false
console.log(Boolean(""));            // false (empty string)
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false
console.log(Boolean(NaN));           // false
console.log(Boolean(false));         // false

// Alternative methods (using !! operator)
console.log(!!1);                    // true (double negation)
console.log(!!"Mayank");             // true
console.log(!!"");                   // false


// ========================================
// 🟡 IMPLICIT TYPE CONVERSION (COERCION)
// ========================================

/*
JavaScript automatically convert karta hai types when operations karte hain.
Yeh surprise de sakta hai!
*/

console.log("\n4. IMPLICIT STRING CONCATENATION");

// String + anything = String
console.log("1" + 2);               // "12" (number converts to string)
console.log(1 + "2");               // "12" (number converts to string)
console.log("1" + 2 + 2);           // "122" (string first, so all convert)
console.log(1 + 2 + "2");           // "32" (numbers add first, then concat)
console.log("Hello" + " " + "World"); // "Hello World"

// ⚠️ Common mistakes
console.log("5" - 3);               // 2 ✅ (string converts to number for math!)
console.log("5" * "2");             // 10 ✅ (both convert)
console.log("5" / "2");             // 2.5 ✅ (both convert)
console.log("hello" - 5);           // NaN (can't convert non-numeric string)


console.log("\n5. IMPLICIT BOOLEAN CONVERSION");

// Comparisons mein implicit conversion
console.log("5" > 3);               // true (string converts to number)
console.log("02" > "1");            // false (string comparison, lexicographic)
console.log(true + true);           // 2 (true converts to 1)
console.log(true + false);          // 1 (true=1, false=0)


// ========================================
// 🔵 ARITHMETIC OPERATIONS
// ========================================

console.log("\n6. BASIC ARITHMETIC OPERATIONS");

// Addition
console.log(5 + 3);                 // 8
console.log(5.5 + 2.5);             // 8

// Subtraction
console.log(10 - 3);                // 7
console.log(3 - 10);                // -7

// Multiplication
console.log(5 * 3);                 // 15
console.log(5 * -3);                // -15

// Division
console.log(10 / 3);                // 3.333...
console.log(10 / 0);                // Infinity ⚠️

// Modulo (remainder)
console.log(10 % 3);                // 1 (remainder)
console.log(15 % 5);                // 0 (exactly divisible)
console.log(-10 % 3);               // -1 (sign follows dividend)

// Exponentiation (power)
console.log(2 ** 3);                // 8 (2 power 3)
console.log(5 ** 2);                // 25 (5 squared)


// ========================================
// 🟠 UNARY OPERATORS
// ========================================

console.log("\n7. UNARY OPERATORS");

// Unary Plus (+)
console.log(+ true);                // 1 (converts to number)
console.log(+ false);               // 0
console.log(+ "5");                 // 5 (string to number)
console.log(+ "");                  // 0 (empty string to 0)
console.log(+ null);                // 0
console.log(+ undefined);           // NaN

// Unary Minus (-)
let value = 3;
let negValue = -value;
console.log(negValue);              // -3 (negates value)
console.log(- "5");                 // -5
console.log(- true);                // -1

// Logical NOT (!)
console.log(!true);                 // false
console.log(!false);                // true
console.log(!5);                    // false (5 is truthy)
console.log(!0);                    // true (0 is falsy)


// ========================================
// 🟢 STRING OPERATIONS
// ========================================

console.log("\n8. STRING CONCATENATION");

let str1 = "Hello";
let str2 = " Mayank";
let str3 = str1 + str2;
console.log(str3);                  // "Hello Mayank"

// Multiple concatenation
let greeting = "Hello" + " " + "World" + "!";
console.log(greeting);              // "Hello World!"

// Number concatenation
let num1 = 5;
let num2 = 10;
console.log(num1 + num2);           // 15 (addition)
console.log(String(num1) + String(num2)); // "510" (concatenation)


// ========================================
// 🔴 ASSIGNMENT OPERATORS
// ========================================

console.log("\n9. ASSIGNMENT OPERATORS");

let a = 10;
console.log(a);                     // 10

a += 5;                             // a = a + 5
console.log(a);                     // 15

a -= 3;                             // a = a - 3
console.log(a);                     // 12

a *= 2;                             // a = a * 2
console.log(a);                     // 24

a /= 4;                             // a = a / 4
console.log(a);                     // 6

a %= 4;                             // a = a % 4
console.log(a);                     // 2


// ========================================
// 🟣 INCREMENT & DECREMENT OPERATORS
// ========================================

console.log("\n10. INCREMENT & DECREMENT");

let gameCounter = 100;

// Post-increment (returns original value, then increments)
console.log(gameCounter++);         // 100 (returns 100)
console.log(gameCounter);           // 101 (then incremented)

// Pre-increment (increments first, then returns new value)
gameCounter = 100;
console.log(++gameCounter);         // 101 (increments and returns)
console.log(gameCounter);           // 101

// Post-decrement
gameCounter = 100;
console.log(gameCounter--);         // 100 (returns 100)
console.log(gameCounter);           // 99 (then decremented)

// Pre-decrement
gameCounter = 100;
console.log(--gameCounter);         // 99 (decrements and returns)
console.log(gameCounter);           // 99

// Practical difference
let count = 5;
let result1 = count++;               // result1 = 5, count = 6
let result2 = ++count;               // count = 7, result2 = 7
console.log("result1:", result1);    // 5
console.log("result2:", result2);    // 7
console.log("count:", count);        // 7


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Number("33") aur parseInt("33") mein difference?
A: Number() pura string parse karta hai, parseInt() shuru se start karta hai.
   parseInt("33abc") = 33, lekin Number("33abc") = NaN

Q2: "1" + 2 + 2 ka result kya hai?
A: "122" (pehle 2 number + string = "12", fir "12" + 2 = "122")

Q3: 1 + 2 + "2" ka result?
A: "32" (pehle 1 + 2 = 3, fir 3 + "2" = "32")

Q4: String-to-number conversion ke tarike?
A: Number(), parseInt(), parseFloat(), unary + operator
   Number("5") = 5
   +"5" = 5
   parseInt("5") = 5

Q5: Falsy values kaun-kaun se hain?
A: 0, -0, "", null, undefined, NaN, false

Q6: "5" - 3 ka result kya aur kyun?
A: 2. String "5" implicitly number convert hota hai subtraction mein.

Q7: Post-increment aur pre-increment mein difference?
A: x++ returns x then increments
   ++x increments then returns x

Q8: Boolean(0) aur Boolean("0") mein difference?
A: Boolean(0) = false
   Boolean("0") = true (non-empty string)

Q9: + true aur +"true" mein kya difference?
A: +true = 1 (boolean converts)
   +"true" = NaN (string "true" can't convert)

Q10: null + 5 ka result?
A: 5 (null converts to 0 in numeric context)
   0 + 5 = 5
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

/*
1. FORM INPUT CONVERSION
   - Forms se data always string aata hai
   - Numeric operations ke liye convert karna padta hai
*/

function calculateTotal(price, quantity) {
    // Form se strings aate hain, convert karo
    const numPrice = Number(price);
    const numQuantity = Number(quantity);
    
    if (isNaN(numPrice) || isNaN(numQuantity)) {
        return "Invalid input";
    }
    
    return numPrice * numQuantity;
}

console.log("\n--- PRODUCTION USE CASES ---");
console.log("Total:", calculateTotal("100", "5")); // 500


/*
2. API RESPONSE HANDLING
   - Different data types handle karna
*/

function processApiResponse(data) {
    const numValue = Number(data.value);
    const isActive = Boolean(data.status);
    const message = String(data.message);
    
    return {
        value: numValue,
        isActive: isActive,
        message: message
    };
}

const apiData = {
    value: "100",
    status: 1,
    message: null
};

console.log("API Response:", processApiResponse(apiData));


/*
3. COUNTER/SCORE INCREMENTS (GAMES)
   - Game mein score increment karna
*/

class GameCounter {
    constructor() {
        this.score = 0;
    }
    
    increment() {
        this.score++;  // Post-increment
    }
    
    getScore() {
        return this.score;
    }
}

const game = new GameCounter();
game.increment();
game.increment();
console.log("Game Score:", game.getScore()); // 2


/*
4. DISCOUNT CALCULATION
   - Price mein discount apply karna
*/

function applyDiscount(originalPrice, discountPercent) {
    // Ensure numeric types
    const price = Number(originalPrice);
    const discount = Number(discountPercent);
    
    const discountAmount = price * (discount / 100);
    const finalPrice = price - discountAmount;
    
    return finalPrice;
}

console.log("Discounted Price:", applyDiscount("1000", "10")); // 900


/*
5. DATA VALIDATION
   - Type check aur conversion
*/

function validateUserAge(age) {
    const numAge = Number(age);
    
    if (isNaN(numAge)) {
        return "Age must be a number";
    }
    
    if (numAge < 0) {
        return "Age cannot be negative";
    }
    
    if (numAge >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log("Age Check:", validateUserAge("25")); // "Adult"


/*
6. STRING BUILDING
   - Dynamic strings create karna
*/

function buildUserMessage(name, count) {
    // Ensure proper types
    const userName = String(name);
    const totalCount = Number(count);
    
    return userName + " has " + totalCount + " items";
}

console.log("Message:", buildUserMessage("Mayank", "5")); // "Mayank has 5 items"


/*
7. BOOLEAN FLAGS
   - Toggle functionality
*/

class FeatureFlag {
    constructor() {
        this.enabled = false;
    }
    
    toggle() {
        this.enabled = !this.enabled;
    }
    
    isEnabled() {
        return Boolean(this.enabled);
    }
}

const feature = new FeatureFlag();
feature.toggle();
console.log("Feature Enabled:", feature.isEnabled()); // true


// ========================================
// 📝 CONVERSION LOOKUP TABLE
// ========================================

console.log("\n--- CONVERSION LOOKUP ---");
console.log("| Value | Number() | String() | Boolean() |");
console.log("|-------|----------|----------|-----------|");
console.log("| \"33\" | 33 | \"33\" | true |");
console.log("| 33 | 33 | \"33\" | true |");
console.log("| true | 1 | \"true\" | true |");
console.log("| false | 0 | \"false\" | false |");
console.log("| \"\" | 0 | \"\" | false |");
console.log("| null | 0 | \"null\" | false |");
console.log("| undefined | NaN | \"undefined\" | false |");