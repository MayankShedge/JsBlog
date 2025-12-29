"use strict"; // Isse ye code treat kiye jaega as newer version of javascript 

// alert(Mayank) //isko node ke andar nahi use kar sakte ye browser mai chalta hai

//Prioritize code redablity always 

//Documentations to refer :- dc39 and mdn

//Primitive data types 
let name1 = "Mayank" //(number => 2^53 iske upar bigint)

let age1 = 18

let isLoggedIn1 = true //(true or false)

// null => standalone value (ek representation ek empty value ka) [iska typeof object dikhata hai jo ek language error hai]

// undefined => Jab koi value define hi nahi ki tab undefined 

// symbol => Unique hai(bht sare compoenents banate hai aur find out karna hai ye isse unique hai toh tab ye use hoga) 


//Object 
let employee1 = {empId: 1 , name: "Mayank" , email: "mayank@gmail.com"} 

console.log(typeof(employee1))

console.log(typeof(undefined)); //object

console.log(typeof(null)); //undefined



"use strict"; // Code ko newer version ke tarah treat karta hai

/*
"use strict" mode:
- Undeclared variables ko allow nahi karta
- Unsafe actions ko restrict karta hai
- Modern JavaScript standards follow karta hai
*/

// alert(3 + 4); // ❌ Browser API, Node.js mein kaam nahi karta
// console.log se use karo

/*
IMPORTANT NOTES:
1. Code readability always prioritize karo
2. Documentation:
   - MDN (Mozilla Developer Network) - Best!
   - ECMAScript specification
   - JavaScript.info
*/

// ========================================
// 🔴 PRIMITIVE DATA TYPES
// ========================================

console.log("=== PRIMITIVE DATA TYPES ===\n");

// 1️⃣ STRING - Text data
let name = "Mayank";
console.log("String:", name);
console.log("Type:", typeof name);  // "string"

// 2️⃣ NUMBER - Numerical values (integers aur decimals)
// Range: -2^53 to 2^53 (safe range)
// Isse bahar BigInt use karna padta hai
let age = 18;
let price = 99.99;
let temperature = -5;
console.log("\nNumber:", age);
console.log("Type:", typeof age);   // "number"
console.log("Decimal:", price);
console.log("Negative:", temperature);

// 3️⃣ BOOLEAN - true/false
let isLoggedIn = true;
let isAdmin = false;
console.log("\nBoolean:", isLoggedIn);
console.log("Type:", typeof isLoggedIn); // "boolean"

// 4️⃣ NULL - Intentionally empty/nothing
// Represents "no value" deliberately
let emptyValue = null;
console.log("\nNull:", emptyValue);
console.log("Type:", typeof emptyValue); // "object" ⚠️ (historical bug!)

/*
typeof null returns "object" - ye ek famous JavaScript bug hai!
Technically null ek primitive hai but typeof "object" return karta hai.
*/

// 5️⃣ UNDEFINED - Variable declared but value not assigned
// Represents "no value" unintentionally
let undefinedValue;
console.log("\nUndefined:", undefinedValue);
console.log("Type:", typeof undefinedValue); // "undefined"

// 6️⃣ SYMBOL - Unique identifier
// Har ek Symbol unique hota hai
const id = Symbol('123');
const anotherID = Symbol('123');
console.log("\nSymbol:", id);
console.log("Type:", typeof id);    // "symbol"
console.log("Are they equal?", id === anotherID); // false (always different)

/*
Symbol use case:
- Object properties ko truly private banana
- Unique identifiers generate karna
- Object key collisions avoid karna
*/

// 7️⃣ BIGINT - Very large numbers
// Range se bahar values ke liye
const largeNumber = 6974008080808908807483383983n; // 'n' suffix mandatory
console.log("\nBigInt:", largeNumber);
console.log("Type:", typeof largeNumber); // "bigint"

// BigInt operations
const big1 = 100n;
const big2 = 50n;
console.log("Addition:", big1 + big2); // 150n
// console.log(big1 + 5); // ❌ Error: can't mix BigInt and Number


// ========================================
// 🔵 NON-PRIMITIVE DATA TYPES
// ========================================

console.log("\n=== NON-PRIMITIVE DATA TYPES ===\n");

// 1️⃣ ARRAY - Ordered collection
const heros = ["shaktiman", "nagraj", "krish"];
console.log("Array:", heros);
console.log("Type:", typeof heros);  // "object" (arrays are objects!)
console.log("Length:", heros.length); // 3
console.log("First hero:", heros[0]); // "shaktiman"

// 2️⃣ OBJECT - Key-value pairs
let employee = {
    name: "Mayank",
    age: 22,
    email: "mayank@example.com",
    isActive: true,
    skills: ["React", "Node", "MongoDB"]
};

console.log("\nObject:", employee);
console.log("Type:", typeof employee);     // "object"
console.log("Name:", employee.name);       // "Mayank"
console.log("Email:", employee["email"]);  // Bracket notation
console.log("Skills:", employee.skills);   // Access nested array


// 3️⃣ FUNCTION - Reusable code block
// Functions are objects in JavaScript!

function addValue() {
    console.log(2 + 3);
}

console.log("\nFunction type:", typeof addValue); // "function" (special object)

// Function expression
const myFunction = function() {
    console.log(3 + 4);
};

myFunction(); // Call the function


// ========================================
// 🎯 TYPEOF OPERATOR - REFERENCE TABLE
// ========================================

console.log("\n=== TYPEOF OPERATOR REFERENCE ===\n");

// Complete reference table
console.log("typeof undefined →", typeof undefined);         // "undefined"
console.log("typeof null →", typeof null);                   // "object" ⚠️ BUG!
console.log("typeof true →", typeof true);                   // "boolean"
console.log("typeof 123 →", typeof 123);                     // "number"
console.log("typeof 123n →", typeof 123n);                   // "bigint"
console.log("typeof 'hello' →", typeof "hello");             // "string"
console.log("typeof Symbol('id') →", typeof Symbol('id'));   // "symbol"
console.log("typeof function() {} →", typeof function() {}); // "function"
console.log("typeof {} →", typeof {});                       // "object"
console.log("typeof [] →", typeof []);                       // "object"
console.log("typeof new Date() →", typeof new Date());       // "object"
console.log("typeof /regex/ →", typeof /regex/);             // "object"

/*
IMPORTANT OBSERVATIONS:
1. typeof operator mostly accurate hai
2. Exception: typeof null = "object" (bug)
3. Arrays, functions, dates - sab technically objects hain
4. typeof function() {} = "function" (special case)
5. For precise type checking:
   - Array.isArray()
   - instanceof
   - Object.prototype.toString.call()
*/


// ========================================
// 📊 SUMMARY TABLE - ALL DATA TYPES
// ========================================

console.log("\n=== DATA TYPES SUMMARY ===");
console.log(`
┌─────────────────┬──────────────┬──────────────────────────┐
│ Data Type       │ Category     │ typeof Result            │
├─────────────────┼──────────────┼──────────────────────────┤
│ String          │ Primitive    │ "string"                 │
│ Number          │ Primitive    │ "number"                 │
│ Boolean         │ Primitive    │ "boolean"                │
│ Null            │ Primitive    │ "object" (bug!)          │
│ Undefined       │ Primitive    │ "undefined"              │
│ Symbol          │ Primitive    │ "symbol"                 │
│ BigInt          │ Primitive    │ "bigint"                 │
│ Array           │ Non-Prim     │ "object"                 │
│ Object          │ Non-Prim     │ "object"                 │
│ Function        │ Non-Prim     │ "function"               │
└─────────────────┴──────────────┴──────────────────────────┘
`);


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: typeof null ka result "object" kyun hai?
A: Historical bug! null ek primitive hai but typeof "object" return karta hai.
   Proper check: value === null

Q2: Primitive aur Non-Primitive types mein kya difference hai?
A: Primitive: immutable, stack mein store, copy by value
   Non-Prim: mutable, heap mein store, copy by reference

Q3: undefined aur null mein kya difference hai?
A: undefined = variable declared but no value assigned
   null = intentionally assigned "no value"

Q4: Symbol kyu unique hota hai?
A: Har call se new Symbol create hota hai, content same ho toh bhi.
   Symbol('id') === Symbol('id') → false

Q5: BigInt kab use karenge?
A: Jab numbers 2^53-1 se zyada hon.
   Cryptocurrency, large IDs, etc.

Q6: Arrays technically kaunsa type hain?
A: Objects! typeof [] → "object"
   Array.isArray() se check karte hain.

Q7: Function kaunsa type return karta hai typeof?
A: "function" (technically ek special object)

Q8: typeof operator ke limitations kya hain?
A: typeof [] → "object" (actually array)
   typeof null → "object" (bug!)
   Better: Array.isArray(), instanceof

Q9: Can we compare BigInt with Number?
A: No, mixing them causes error.
   10n + 5 → Error
   10n + 5n → Works

Q10: Object aur Array mein kya difference hai types mein?
A: Technically both objects hain, but Array ordered collection hai.
   Array ke special methods aur length property hote hain.
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

/*
1. TYPE CHECKING IN FUNCTIONS
   - Input validation
*/

function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 2;
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return "Unknown type";
    }
}

console.log("\n--- PRODUCTION EXAMPLES ---");
console.log("Process string:", processValue("hello")); // "HELLO"
console.log("Process number:", processValue(5));       // 10
console.log("Process boolean:", processValue(true));   // false


/*
2. ARRAY TYPE CHECKING
   - Safe array operations
*/

function handleData(data) {
    if (Array.isArray(data)) {
        return data.map(item => item * 2);
    } else if (typeof data === "number") {
        return data * 2;
    } else {
        return null;
    }
}

console.log("Array:", handleData([1, 2, 3]));  // [2, 4, 6]
console.log("Number:", handleData(5));         // 10


/*
3. NULL/UNDEFINED CHECKING
   - Safe operations
*/

function getUserInfo(userData) {
    if (userData === null) {
        return "No user found";
    } else if (userData === undefined) {
        return "User data not loaded";
    } else if (typeof userData === "object") {
        return `User: ${userData.name}`;
    }
}

console.log("Null check:", getUserInfo(null));
console.log("Object check:", getUserInfo({ name: "Mayank" }));


/*
4. CONDITIONAL RENDERING
   - React/Vue mein different UI show karna
*/

function renderComponent(dataType) {
    const typeMap = {
        "string": "📝 Text Component",
        "number": "🔢 Number Component",
        "boolean": "✅ Toggle Component",
        "object": "📦 Container Component",
        "function": "⚙️ Handler Component"
    };
    
    return typeMap[typeof dataType] || "Unknown";
}

console.log(renderComponent("hello"));
console.log(renderComponent(123));