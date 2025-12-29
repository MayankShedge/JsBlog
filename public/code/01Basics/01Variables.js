const accountId1 = 144553 //immutable

let accountEmail1 = "mayank@gmail.com" // isme scope vala problem dur hoo jata hai
//ye dono aage jake change ho/kar sakte hai
var accountPassword = "12345" //isko nahi pata hota scope kya hai 

accountCity = "Jaipur" //bekar tarika though possible hai aisa create karna variable 

let accountState1; //Koi value declare na karna isse ek undefined value de degi 

/*
Prefer not to use var because of issue in block scope and functional scope
*/

// accountId = 2 // Not allowed as it is immutable 

accountEmail1 = "mams@gmail.com"

accountPassword = "22322"

accountCity = "Mumbai"

console.log(accountId1);

console.table([accountId1 , accountEmail1 ,accountPassword , accountCity , accountState1])




/*
Variable = ek container jo data store karta hai

JavaScript mein 3 tarike hain variables declare karne ka:
1. const  - constant (recommended)
2. let   - block-scoped (recommended)
3. var   - function-scoped (❌ avoid)
*/

// ========================================
// 🟢 VARIABLE DECLARATION TYPES
// ========================================

console.log("=== VARIABLE DECLARATIONS ===\n");

// 1️⃣ CONST - Constant (cannot reassign)
// Best practice: default mein const use karo
const accountId = 144553;
console.log("const accountId:", accountId); // 144553

// ❌ const ko reassign nahi kar sakte
// accountId = 2; // Error: Assignment to constant variable

/*
⚠️ Important: const ko reassign nahi kar sakte, 
lekin object/array ke properties modify kar sakte ho!
*/

const user = { name: "Mayank" };
user.name = "Sharma"; // ✅ Allowed (property modify)
console.log("Modified user:", user); // { name: "Sharma" }

// user = { name: "New" }; // ❌ Error: can't reassign


// 2️⃣ LET - Block-scoped (recommended)
// Dusre variables ki comparison mein better scope handling
let accountEmail = "mayank@gmail.com";
console.log("\nlet accountEmail:", accountEmail);

accountEmail = "new@gmail.com"; // ✅ Allowed: reassignment
console.log("After reassignment:", accountEmail);

/*
let ka scope block-level hota hai:
- Function ke andar declare kare toh function scope
- Loop ke andar declare kare toh loop scope
- If block ke andar declare kare toh if block scope
*/

if (true) {
    let blockScopedVariable = "Inside if";
    console.log("Inside if:", blockScopedVariable);
}

// console.log(blockScopedVariable); // ❌ Error: not defined


// 3️⃣ VAR - Function-scoped (❌ avoid)
// Purane tarike se, scope handling mein problem hota hai
var accountPassword = "12345";
console.log("\nvar accountPassword:", accountPassword);

accountPassword = "54321"; // ✅ Reassign allowed
console.log("After reassignment:", accountPassword);

/*
⚠️ var ke problems:
1. Function scope hota hai, block scope nahi
2. Hoisting issues
3. Global scope pollution
4. Hard to track updates
*/

if (true) {
    var functionScopedVariable = "Inside if";
}

console.log("Outside if (var):", functionScopedVariable); // ✅ Accessible!
// Ye ek problem hai! if block ke bahar bhi accessible hai.

if (true) {
    let letVariable = "Inside if";
}

// console.log(letVariable); // ❌ Error: not defined (correct behavior)


// Direct assignment (❌ Never do this!)
accountCity = "Jaipur"; // Global scope mein variable ban jaega
console.log("\nDirect assignment:", accountCity);

/*
⚠️ NEVER do this! Hameshaa const/let/var se declare karo.
Direct assignment se variable global scope mein chali jaati hai.
*/


// ========================================
// 🟡 VARIABLE MUTABILITY
// ========================================

console.log("\n=== VARIABLE MUTABILITY ===\n");

// const - Immutable reference (value change nahi kar sakte)
const immutableValue = 100;
console.log("const value:", immutableValue);
// immutableValue = 200; // ❌ Error

// let - Mutable (value change kar sakte ho)
let mutableValue = 100;
mutableValue = 200; // ✅ Allowed
console.log("let value:", mutableValue);

// var - Mutable (value change kar sakte ho)
var oldMutableValue = 100;
oldMutableValue = 200; // ✅ Allowed
console.log("var value:", oldMutableValue);


// ========================================
// 🔵 SCOPE EXPLANATION
// ========================================

console.log("\n=== SCOPE DEMONSTRATION ===\n");

// Global scope
let globalVariable = "I'm global";

function demonstrateScope() {
    // Function scope
    let functionVariable = "I'm in function";
    
    if (true) {
        // Block scope (let/const)
        let blockVariable = "I'm in block";
        const blockConst = "Block const";
        var blockVar = "Block var";
        
        console.log("Inside block:");
        console.log("- blockVariable:", blockVariable); // ✅
        console.log("- blockConst:", blockConst);       // ✅
        console.log("- blockVar:", blockVar);           // ✅
        console.log("- functionVariable:", functionVariable); // ✅ (parent scope)
        console.log("- globalVariable:", globalVariable); // ✅ (global scope)
    }
    
    console.log("\nOutside block (but inside function):");
    console.log("- functionVariable:", functionVariable); // ✅
    console.log("- blockVar:", blockVar);       // ✅ (var ignores block scope!)
    // console.log("- blockVariable:", blockVariable); // ❌ Error
    // console.log("- blockConst:", blockConst);       // ❌ Error
}

demonstrateScope();

console.log("\nOutside function (global):");
console.log("- globalVariable:", globalVariable); // ✅
// console.log("- functionVariable:", functionVariable); // ❌ Error


// ========================================
// 📊 TABLE VIEW - ALL VARIABLES DECLARED
// ========================================

console.log("\n=== ALL DECLARED VARIABLES ===\n");

// Using console.table for better visualization
const accountState = "Active"; // Another const example

console.table({
    accountId: { value: accountId, type: "const", scope: "global" },
    accountEmail: { value: accountEmail, type: "let", scope: "global" },
    accountPassword: { value: accountPassword, type: "var", scope: "global" },
    accountCity: { value: accountCity, type: "assignment", scope: "global" },
    accountState: { value: accountState, type: "const", scope: "global" }
});

// ===== OR manual display =====
console.log("\nVariable Summary:");
console.log(`
┌──────────────────┬───────────────────┬──────────┬────────────┐
│ Variable         │ Value             │ Type     │ Scope      │
├──────────────────┼───────────────────┼──────────┼────────────┤
│ accountId        │ ${accountId}       │ const    │ global     │
│ accountEmail     │ ${accountEmail}    │ let      │ global     │
│ accountPassword  │ ${accountPassword} │ var      │ global     │
│ accountCity      │ ${accountCity}     │ (direct) │ global     │
│ accountState     │ ${accountState}    │ const    │ global     │
└──────────────────┴───────────────────┴──────────┴────────────┘
`);


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: const, let, var mein kya difference hai?
A: 
   const: Block-scoped, immutable reference, can't reassign
   let: Block-scoped, mutable, can reassign
   var: Function-scoped, mutable, can reassign
   
   Best practice: const by default, let when needed

Q2: var ka scope kya hota hai?
A: Function-scoped. Block ke andar declare kare toh bhi 
   function ke bahar accessible hota hai.

Q3: const ko reassign kyun nahi kar sakte?
A: const immutable reference deta hai. 
   Lekin object/array properties modify kar sakte hain.

Q4: let aur var mein kya specific difference hai?
A: var function-scoped, let block-scoped.
   if (true) { var x = 1; } → x accessible
   if (true) { let y = 1; } → y not accessible

Q5: Global scope pollution se kya problem hai?
A: Accidental overwriting, naming conflicts, hard to debug.

Q6: Block scope kya hota hai?
A: {}  ke andar scope. if, for, while, etc.

Q7: const object declare kiye toh modify kar sakte ho?
A: Haan! const reference ko freeze karta hai, object ko nahi.

Q8: Direct assignment (bina let/const) se kya hota hai?
A: Variable global scope mein ban jaata hai (bad practice).

Q9: Variable hoisting kya hota hai?
A: var declarations top pe move hote hain (weird behavior).
   const/let declare nahi hote top pe (temporal dead zone).

Q10: Kaunsa variable type use karna chahiye?
A: Priority: const > let > var (never use var in modern JS)
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

/*
1. CONFIG/CONSTANTS
   - App configuration
*/

console.log("\n--- PRODUCTION USE CASES ---\n");

const API_URL = "https://api.example.com";
const API_TIMEOUT = 5000;
const MAX_RETRIES = 3;

console.log("API Config:", { API_URL, API_TIMEOUT, MAX_RETRIES });


/*
2. APPLICATION STATE
   - Mutable state
*/

let userCount = 0;
let isServerRunning = false;

// State update
userCount += 1;
isServerRunning = true;

console.log("App State:", { userCount, isServerRunning });


/*
3. FUNCTION PARAMETERS
   - Usually const (don't reassign)
*/

function calculatePrice(const_basePrice, const_quantity, let_taxRate) {
    // const params best practice (don't modify inputs)
    const basePrice = 100;
    const quantity = 5;
    let taxRate = 0.1;
    
    const subtotal = basePrice * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    return { subtotal, tax, total };
}

console.log("Price Calculation:", calculatePrice());


/*
4. LOOP VARIABLES
   - Usually let (block-scoped, correct behavior)
*/

console.log("\nLoop Examples:");

// ✅ Correct: let in loop
for (let i = 0; i < 3; i++) {
    console.log("let in loop:", i);
}
// console.log(i); // ❌ Error: i not defined (correct!)

// ❌ Problematic: var in loop (but works)
for (var j = 0; j < 3; j++) {
    console.log("var in loop:", j);
}
console.log("var after loop:", j); // ✅ Accessible (but unexpected!)


/*
5. OBJECT PROPERTY MANIPULATION
   - const object, modified properties
*/

const userData = {
    name: "Mayank",
    email: "mayank@gmail.com",
    age: 22
};

// ✅ Modify properties
userData.email = "new@gmail.com";
userData.age = 23;
userData.status = "active"; // Add new property

console.log("Modified userData:", userData);

// ❌ Can't reassign object itself
// userData = {}; // Error


/*
6. DATABASE QUERIES
   - const for results
*/

const users = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" }
];

// const result (don't reassign)
const activeUsers = users.filter(user => user.id > 1);
console.log("Filtered users:", activeUsers);


/*
7. REDUX/STATE MANAGEMENT
   - const state (immutable pattern)
*/

const initialState = {
    count: 0,
    loading: false,
    error: null
};

// State update immutably
const newState = {
    ...initialState,
    count: initialState.count + 1,
    loading: true
};

console.log("Immutable state:", newState);


// ========================================
// ⚡ BEST PRACTICES SUMMARY
// ========================================

console.log("\n=== BEST PRACTICES ===");
console.log(`
✅ DO:
1. Use const by default for all variables
2. Use let if reassignment needed
3. NEVER use var in modern code
4. Declare variable close to where it's used
5. Use meaningful variable names

❌ DON'T:
1. Don't use var (function-scoped, confusing)
2. Don't do direct assignments (accountCity = "Mumbai")
3. Don't create global variables unnecessarily
4. Don't mix naming conventions
5. Don't reassign constants

📋 PRIORITY ORDER:
const > let >> var (NEVER)
`);