/*
Data types ke 2 tarah ke categorization hai jo based hai data ko memory mai kis tarah rakha jata hai aur access kiya jata hai:

Primitive & Non Primitive
*/ 

/*
Javascript ek dynamicaLly typed language hai.

Iska matlab hai type checking jaha data type define hota hai variable ka occur hota hai during runtime (during program execution) rather than compile time (before execution)
*/

/*
Primitive Datatypes :- 

Ye sab call by value hote hai matlab jab bhi ham inhe kahi se call karte hai tab inka jo memory reference hai data ka vo hame nahi milta (original value) inko copy karke diya jata hai alag aur jo bhi changes hote hai vo copy mai hote hai

7 categories : String , Number , Boolean , Null(ekdam khali) , Undefined , Symbol , BigInt
*/

//Symbol :-
//Yahape values bhale hi same ho sakti hai par jo return value hame mila hai vo bilkul different hai 
const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id === anotherID);

const bigNumber =  6974008080808908807483383983n //Ye bigInt declare kar diya ab


/*
Reference tyoe (Non Primitive) :-

Isme sidha memory ka reference allocate kiy ajaa sakta hai matlab values sidha directly change ho sakti hai koi copy banake usme changes nahi karenge 

Array , Objects , Functions
*/

const heros = ["shaktiman" , "nagraj" , "krish"]

let employee1 = {
    name: "Mayank",
    age: 22,
}

let addValue = () => {
    console.log(2 + 3)
}

const myFunction = function addValue(){
    console.log(3 + 4);
    
}

myFunction()

console.log(typeof bigNumber);

/*
Type of Operand     Result of typeof
Undefined            "undefined"
Null                 "object" (This is a well-known historical quirk in JavaScript)
Boolean              "boolean"
Number               "number"
BigInt               "bigint"
String               "string"
Symbol               "symbol"
Function object      "function"
Any other object (including arrays, dates, and plain objects)       "object"
*/

// console.log(typeof undefined); // "undefined"
// console.log(typeof null);      // "object"
// console.log(typeof true);      // "boolean"
// console.log(typeof 123);       // "number"
// console.log(typeof 123n);      // "bigint"
// console.log(typeof "hello");   // "string"
// console.log(typeof Symbol('foo')); // "symbol"
// console.log(typeof function() {}); // "function"
// console.log(typeof {});        // "object"
// console.log(typeof []);        // "object"
// console.log(typeof new Date());// "object"


/*
JavaScript ek DYNAMICALLY TYPED language hai.
Iska matlab type checking RUNTIME mein hota hai, compile time se pehle nahi.

Jab ham code run karte hain tab JavaScript automatically detect karta hai 
ki variable kaunsa type ka hai. Hamein manually specify nahi karna padta.
*/

// ========================================
// 🔴 PRIMITIVE DATA TYPES
// ========================================

/*
Primitive = 7 types
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

Characteristics:
- Immutable (change nahi kar sakte original)
- Call by Value (copy diya jata hai)
- Stack memory mein store hote hain
- Direct equality check ho jaati hai
*/

// ─────────────────────────────────────
// 1️⃣ STRING
// ─────────────────────────────────────

let name = "Mayank"; // Double quotes
let city = 'Mumbai'; // Single quotes
let description = `I am ${name} from ${city}`; // Template literals (backticks)

console.log(typeof name);        // "string"
console.log(name.length);        // 6
console.log(name[0]);            // "M"


// ─────────────────────────────────────
// 2️⃣ NUMBER
// ─────────────────────────────────────

let age = 22;
let price = 99.99;
let negativeNumber = -50;
let infinity = Infinity;
let notANumber = NaN; // "Not a Number" (technically a number type!)

console.log(typeof age);         // "number"
console.log(typeof price);       // "number"
console.log(typeof NaN);         // "number" (quirk!)
console.log(typeof Infinity);    // "number"

// Number range: -2^53 + 1 to 2^53 - 1
let maxSafeInteger = Number.MAX_SAFE_INTEGER;
let minSafeInteger = Number.MIN_SAFE_INTEGER;
console.log("Max:", maxSafeInteger);
console.log("Min:", minSafeInteger);


// ─────────────────────────────────────
// 3️⃣ BOOLEAN
// ─────────────────────────────────────

let isLoggedIn = true;
let isAdmin = false;

console.log(typeof isLoggedIn);   // "boolean"
console.log(typeof isAdmin);      // "boolean"

// Truthiness/Falsiness
console.log(Boolean(1));           // true
console.log(Boolean(0));           // false
console.log(Boolean("Hello"));     // true
console.log(Boolean(""));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false


// ─────────────────────────────────────
// 4️⃣ NULL
// ─────────────────────────────────────

/*
null = Intentionally empty value
- Explicitly assign karte ho "kuch nahi hai"
- Represents absence of any value
- typeof null === "object" (ye ek historical bug hai!)
*/

let emptyValue = null;
console.log(typeof emptyValue);    // "object" (❌ bug!)
console.log(emptyValue === null);  // true

// Practical use: database response jab data nahi mile
let userData1 = null; // Initially empty


// ─────────────────────────────────────
// 5️⃣ UNDEFINED
// ─────────────────────────────────────

/*
undefined = Variable declared but value assigned nahi
- Unintentionally empty
- Default value jab kuch nahi assign karte
- typeof undefined === "undefined"
*/

let unassignedValue;
console.log(typeof unassignedValue);  // "undefined"
console.log(unassignedValue === undefined); // true

function noReturnValue() {
    // Kuch nahi return kiya
}

console.log(typeof noReturnValue()); // "undefined"

// ⚠️ null vs undefined
console.log(null == undefined);      // true (loose equality)
console.log(null === undefined);     // false (strict equality)


// ─────────────────────────────────────
// 6️⃣ SYMBOL
// ─────────────────────────────────────

/*
Symbol = Unique, immutable value
- Har baar naya Symbol ban jaata hai, bhale data same ho
- Used for unique object properties
- Private-like properties banane mein use hota hai
*/

const id1 = Symbol('123');
const id2 = Symbol('123');

console.log(id1 === id2);           // false ❌ Different symbols!
console.log(typeof id1);            // "symbol"
console.log(id1);                   // Symbol(123)
console.log(id1.toString());        // "Symbol(123)"
console.log(id1.description);       // "123"

// Use case: Object properties ko unique banana
const user = {};
const privateId = Symbol('id');
user[privateId] = "secret123";

console.log(user);                  // { Symbol(id): "secret123" }
console.log(Object.keys(user));     // [] (symbol properties iterate nahi hote)
console.log(user[privateId]);       // "secret123" (sirf reference se access)


// ─────────────────────────────────────
// 7️⃣ BIGINT
// ─────────────────────────────────────

/*
BigInt = Arbitrarily large integers
- Number type ke range se bahar (2^53 - 1 se zyada)
- Declaration mein 'n' suffix lagta hai
- Ab operations mein ek-dusre se mix nahi kar sakte
*/

const largeNumber = 9007199254740992n; // 'n' suffix
const anotherBigInt = BigInt("999999999999999999999");

console.log(typeof largeNumber);    // "bigint"
console.log(largeNumber + 1n);      // Works ✅
// console.log(largeNumber + 1);     // Error ❌ (can't mix)

// Practical: Cryptocurrency, large calculations
const bitcoinAmount = 21000000000000000n; // in satoshis


// ========================================
// 🔵 NON-PRIMITIVE DATA TYPES (Reference Types)
// ========================================

/*
Non-Primitive = 3 main types
1. Array
2. Object
3. Function

Characteristics:
- Mutable (modify kar sakte ho)
- Call by Reference (reference diya jata hai)
- Heap memory mein store hote hain
- typeof sabhi "object" return karte hain (function "function" return karta hai)
*/

// ─────────────────────────────────────
// 1️⃣ ARRAY
// ─────────────────────────────────────

const fruits = ["Apple", "Banana", "Mango"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "String", true, null, { key: "value" }]; // Mixed types allowed

console.log(typeof fruits);         // "object"
console.log(Array.isArray(fruits)); // true (better way to check)
console.log(fruits[0]);             // "Apple"
console.log(fruits.length);         // 3


// ─────────────────────────────────────
// 2️⃣ OBJECT
// ─────────────────────────────────────

const employee = {
    empId: 1,
    name: "Mayank",
    email: "mayank@gmail.com",
    isActive: true,
    skills: ["React", "Node", "MongoDB"],
    address: {
        city: "Mumbai",
        country: "India"
    }
};

console.log(typeof employee);       // "object"
console.log(employee.name);         // "Mayank"
console.log(employee["email"]);     // "mayank@gmail.com"
console.log(employee.skills[0]);    // "React"
console.log(employee.address.city); // "Mumbai"


// ─────────────────────────────────────
// 3️⃣ FUNCTION
// ─────────────────────────────────────

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

console.log(typeof greet);          // "function"
console.log(typeof add);            // "function"
console.log(typeof multiply);       // "function"
console.log(greet("Mayank"));       // "Hello, Mayank!"


// ========================================
// 🎯 TYPEOF OPERATOR - COMPLETE REFERENCE
// ========================================

/*
typeof operator result reference:

Value                           Result of typeof
undefined                       "undefined"
null                            "object" ❌ (historical bug)
true/false                      "boolean"
123                             "number"
123n                            "bigint"
"hello"                         "string"
Symbol('id')                    "symbol"
function() {}                   "function"
{} (object)                     "object"
[] (array)                      "object"
new Date()                      "object"
/regex/                         "object"
new Error()                     "object"
*/

// All examples
console.log("\n--- TYPEOF REFERENCE ---");
console.log(typeof undefined);              // "undefined"
console.log(typeof null);                   // "object" ⚠️
console.log(typeof true);                   // "boolean"
console.log(typeof 123);                    // "number"
console.log(typeof 123n);                   // "bigint"
console.log(typeof "hello");                // "string"
console.log(typeof Symbol('id'));          // "symbol"
console.log(typeof function() {});          // "function"
console.log(typeof {});                     // "object"
console.log(typeof []);                     // "object"
console.log(typeof new Date());             // "object"
console.log(typeof /regex/);                // "object"


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: JavaScript dynamically typed kyun hai?
A: Type checking RUNTIME mein hoti hai, compile time se pehle nahi.

Q2: Primitive aur Non-Primitive mein kya difference hai?
A: Primitive immutable hai, non-primitive mutable. 
   Primitive copy deta hai, non-primitive reference deta hai.

Q3: typeof null kya return karta hai aur kyu?
A: "object" return karta hai. Ye ek historical bug hai JavaScript mein.

Q4: Symbol kyu unique hai?
A: Har Symbol() call ek naya Symbol create karta hai, content same ho toh bhi.

Q5: BigInt kab use karenge?
A: Jab number 2^53-1 se zyada ho ya cryptocurrency calculations hon.

Q6: Array technically kya type hai?
A: Array ek object hai, lekin Array.isArray() se check kar sakte ho.

Q7: Function kya type hai typeof mein?
A: "function" (special case of object, but typeof separately identify karta hai)

Q8: null == undefined true kyun aata hai?
A: Loose equality mein JavaScript type coercion karta hai.
   null === undefined false hota hai (strict equality).

Q9: Undefined aur uninitialized variable mein farak?
A: Undefined declare kiya gaya lekin value nahi di. 
   Uninitialized: declare hi nahi kiya.

Q10: typeof operator se problem kaunsa aa sakta hai?
A: Array, null, Date sab "object" return karte hain. 
   Proper check ke liye Array.isArray(), instanceof use karte hain.

Q11: Symbol ke use case kya hain?
A: Private properties, unique keys, preventing name collisions.

Q12: Can you mix BigInt with Number?
A: Nahi, mix operations error dete hain.
   const x = 10n + 5; ❌ Error
   const x = 10n + 5n; ✅ Correct
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

/*
1. TYPE CHECKING & VALIDATION
   - API responses validate karna
   - User input check karna
   - Type guards likhna
*/

function validateUserData(user) {
    if (typeof user !== 'object' || user === null) {
        throw new Error('Invalid user data');
    }
    if (typeof user.name !== 'string') {
        throw new Error('Name must be string');
    }
    if (typeof user.age !== 'number' || user.age < 0) {
        throw new Error('Age must be positive number');
    }
    return true;
}

// validateUserData({ name: "Mayank", age: 22 }); ✅
// validateUserData({ name: "Mayank", age: "22" }); ❌


/*
2. TYPE COERCION HANDLING
   - Form input values string milte hain
   - Convert karke use karna padta hai
*/

let formInput = "100"; // String from form
let numericValue = Number(formInput); // Convert to number
let result = numericValue + 50;
console.log("Form result:", result); // 150


/*
3. NULLISH COALESCING & OPTIONAL CHAINING
   - Safe property access
   - Default values
*/

let userData = {
    name: "Mayank",
    address: {
        city: "Mumbai"
    }
};

// Safe access nested properties
let country = userData?.address?.country ?? "India";
console.log("Country:", country); // "India" (default)


/*
4. SYMBOL FOR PRIVATE PROPERTIES
   - Object mein truly private properties
   - No enumeration by default
*/

class BankAccount {
    constructor(balance) {
        this._privateBalance = Symbol('balance');
        this[this._privateBalance] = balance;
    }

    getBalance() {
        return this[this._privateBalance];
    }
}

const myAccount = new BankAccount(10000);
console.log("Balance:", myAccount.getBalance()); // 10000
console.log("Direct access:", myAccount._privateBalance); // Symbol('balance')


/*
5. BIG NUMBER CALCULATIONS
   - Financial transactions
   - Large ID generation
*/

const transactionId = 123456789012345678901234567890n;
const amount = 1000000n;
const taxAmount = amount / 100n; // 10000n
const total = amount + taxAmount; // 1010000n


/*
6. ARRAY/OBJECT TYPE CHECKING
   - Proper type guards likhna important hai
*/

function processData(data) {
    if (Array.isArray(data)) {
        console.log("Processing array...");
        // Array processing
    } else if (typeof data === 'object' && data !== null) {
        console.log("Processing object...");
        // Object processing
    } else if (typeof data === 'string') {
        console.log("Processing string...");
        // String processing
    }
}


/*
7. CONDITIONAL RENDERING (REACT/VUE)
   - Data type check karke different UI render karna
*/

function renderData(data) {
    if (data === null) {
        return "No data available";
    }
    if (typeof data === 'undefined') {
        return "Loading...";
    }
    if (Array.isArray(data)) {
        return data.map(item => `<li>${item}</li>`).join('');
    }
    return String(data);
}