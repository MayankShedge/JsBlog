// ========================================
// ⚙️ FUNCTIONS, SCOPE, HOISTING & IIFE
// ========================================

/*
Function = Reusable block of code jo execute hoti hai jab call karo.

Types of Functions:
1. Function Declaration (hoisted)
2. Function Expression (not hoisted)
3. Arrow Functions (ES6)
4. IIFE - Immediately Invoked Function Expression

Scope Types:
- Global Scope
- Function Scope
- Block Scope (let, const)
*/

// ========================================
// 🟢 FUNCTION BASICS
// ========================================

console.log("=== FUNCTION BASICS ===\n");

// 1️⃣ Function Definition
function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}

// 2️⃣ Function Reference (function pointer, does NOT execute)
console.log("Function reference:", sayMyName);

// 3️⃣ Function Execution/Invocation
console.log("\nFunction execution:");
sayMyName(); // Outputs: M, A, Y, A, N, K

// Function with return value
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

// Calling with arguments
const sum = addTwoNumbers(5, 3);
console.log("Sum:", sum); // 8

/*
⚠️ Parameters vs Arguments:
Parameters = values defined in function: function(num1, num2)
Arguments = values passed during call: addTwoNumbers(5, 3)
*/

// Unreachable code after return
function example() {
    console.log("This runs");
    return 42;
    console.log("This NEVER runs"); // Unreachable code
}

example();


// ========================================
// 🔵 FUNCTION TYPES & VARIATIONS
// ========================================

console.log("\n=== FUNCTION TYPES ===\n");

// 1️⃣ Function Declaration (Traditional)
console.log("\n1. Function Declaration:");

function multiply(a, b) {
    return a * b;
}

console.log("multiply(4, 5):", multiply(4, 5)); // 20

/*
⚠️ Function declarations are HOISTED!
You can call them BEFORE declaring.
*/


// 2️⃣ Function Expression (Store in variable)
console.log("\n2. Function Expression:");

const divide = function(a, b) {
    return a / b;
};

console.log("divide(10, 2):", divide(10, 2)); // 5

/*
⚠️ Function expressions are NOT hoisted!
You must declare before calling.

Comparison:
console.log(add(5, 3)); // ✅ Works (hoisted)
function add(a, b) { return a + b; }

console.log(subtract(5, 3)); // ❌ Error (not hoisted)
const subtract = function(a, b) { return a - b; };
*/


// 3️⃣ Arrow Functions (ES6 - Modern)
console.log("\n3. Arrow Functions:");

// Single statement (implicit return)
const square = x => x * x;
console.log("square(5):", square(5)); // 25

// Multiple statements (explicit return)
const greet = (name) => {
    const greeting = `Hello ${name}`;
    return greeting;
};
console.log(greet("Mayank")); // "Hello Mayank"

// Multiple parameters
const power = (base, exp) => base ** exp;
console.log("power(2, 3):", power(2, 3)); // 8

// Return object (needs parentheses)
const getUserObject = (id, name) => ({ id, name, active: true });
console.log("User object:", getUserObject(1, "Mayank"));

/*
⚠️ Arrow Function vs Regular Function:
- Arrow functions don't have their own 'this'
- They inherit 'this' from parent scope
- Perfect for callbacks (map, filter, etc.)
*/


// 4️⃣ Variadic Functions (Unknown number of arguments)
console.log("\n4. Functions with Variable Arguments:");

// Using Rest operator (...)
function calculateSum(val1, val2, ...restNumbers) {
    console.log("val1:", val1);
    console.log("val2:", val2);
    console.log("Rest:", restNumbers);
    
    const allSum = val1 + val2 + restNumbers.reduce((a, b) => a + b, 0);
    return allSum;
}

console.log("calculateSum(10, 20, 30, 40, 50):", calculateSum(10, 20, 30, 40, 50));
// val1: 10
// val2: 20
// Rest: [30, 40, 50]
// Returns: 150

/*
⚠️ Rest operator:
- Must be LAST parameter
- Converts remaining arguments into array
- Very useful for flexible function design
*/


// ========================================
// 🟠 DEFAULT PARAMETERS & MODERN PATTERNS
// ========================================

console.log("\n=== DEFAULT PARAMETERS ===\n");

// Default parameter values
function loginUser(username = "Guest", password = "****") {
    if (!username) {
        console.log("Please enter username");
        return;
    }
    console.log(`${username} logged in with password: ${password}`);
}

console.log("With args:");
loginUser("Mayank", "secure123");

console.log("\nWith defaults:");
loginUser(); // Uses defaults

console.log("\nPartial args:");
loginUser("Raj"); // Raj, password uses default


// ========================================
// 🔴 SCOPE - VERY IMPORTANT
// ========================================

console.log("\n=== SCOPE - DIFFERENT CONTEXTS ===\n");

// Global Scope
let globalVar = "I'm global";

function demonstrateScope() {
    // Function Scope
    let functionVar = "I'm in function";
    
    if (true) {
        // Block Scope (for let/const)
        let blockVar = "I'm in block";
        const blockConst = "Block constant";
        var blockVarKeyword = "Block var (function-scoped!)";
        
        console.log("Inside block:");
        console.log("- blockVar:", blockVar);
        console.log("- blockConst:", blockConst);
        console.log("- blockVarKeyword:", blockVarKeyword);
        console.log("- functionVar:", functionVar); // Accessible (parent)
        console.log("- globalVar:", globalVar); // Accessible (global)
    }
    
    console.log("\nOutside block (but inside function):");
    console.log("- functionVar:", functionVar);
    console.log("- blockVarKeyword:", blockVarKeyword); // ✅ Works! (var ignores block scope)
    // console.log("- blockVar:", blockVar); // ❌ Error: not defined
    // console.log("- blockConst:", blockConst); // ❌ Error: not defined
}

demonstrateScope();

console.log("\nGlobal scope:");
console.log("- globalVar:", globalVar);
// console.log("- functionVar:", functionVar); // ❌ Error


// ========================================
// 🟣 LEXICAL SCOPE (Nested Functions)
// ========================================

console.log("\n=== LEXICAL SCOPE - NESTED FUNCTIONS ===\n");

function outer() {
    const outerVar = "Outer";
    
    function inner() {
        const innerVar = "Inner";
        console.log("Inside inner function:");
        console.log("- outerVar:", outerVar); // ✅ Accessible
        console.log("- innerVar:", innerVar);
    }
    
    // console.log(innerVar); // ❌ Error: not accessible from outer
    inner(); // Must call inner() to see its output
}

outer();

/*
⚠️ Scope Chain:
Inner function can access outer function's variables
PERO outer function CANNOT access inner function's variables

This is called CLOSURE - will discuss in interview questions
*/


// ========================================
// 🟢 THIS KEYWORD - CRITICAL CONCEPT
// ========================================

console.log("\n=== THIS KEYWORD ===\n");

// 'this' in regular functions (object methods)
const user = {
    firstName: "Mayank",
    email: "mayank@gmail.com",
    
    greetUser: function() {
        console.log(`Hello ${this.firstName}`);
        console.log("Context (this):", this);
    }
};

console.log("Calling method:");
user.greetUser(); // this = user object

/*
⚠️ 'this' Value:
- In object method: refers to the object
- In global function: refers to global object (window/global)
- In arrow function: inherits from parent scope
- In constructor: refers to new instance
*/

// Global scope (Node.js)
console.log("\n'this' in global scope (Node.js):");
console.log(this); // Module exports object


// ========================================
// 🟠 ARROW FUNCTIONS vs REGULAR FUNCTIONS
// ========================================

console.log("\n=== ARROW vs REGULAR FUNCTION ===\n");

const objectWithArrow = {
    name: "ArrowTest",
    regularMethod: function() {
        console.log("Regular function 'this':", this.name); // "ArrowTest"
    },
    arrowMethod: () => {
        console.log("Arrow function 'this':", this.name); // undefined (inherits global)
    }
};

console.log("Methods:");
objectWithArrow.regularMethod(); // "ArrowTest"
objectWithArrow.arrowMethod(); // undefined

/*
⚠️ Key Difference:
Regular function: gets its own 'this'
Arrow function: inherits 'this' from parent scope

When to use:
- Object methods: Regular function
- Callbacks (map, filter): Arrow function
- Constructors: Regular function
*/


// ========================================
// 💛 FUNCTION HOISTING
// ========================================

console.log("\n=== HOISTING - IMPORTANT! ===\n");

// ✅ Function declarations are HOISTED
console.log("Calling before declaration:");
console.log("addOne(5):", addOne(5)); // Works!

function addOne(num) {
    return num + 1;
}

// ❌ Function expressions are NOT hoisted
// console.log("addTwo(5):", addTwo(5)); // ❌ Error!
const addTwo = function(num) {
    return num + 2;
};
console.log("addTwo(5):", addTwo(5)); // Works only after declaration

/*
⚠️ Hoisting Explanation:
JavaScript moves declarations to top during compilation.

Function declarations:
function add() {} // Hoisted

Function expressions:
const add = function() {} // NOT hoisted
*/


// ========================================
// 🔵 IIFE - Immediately Invoked Function Expression
// ========================================

console.log("\n=== IIFE - IMMEDIATELY INVOKED ===\n");

// Problem: Global scope pollution
// function database() {
//     console.log("DB connected");
// }
// database(); // Pollutes global namespace

// Solution 1: Named IIFE
console.log("1. Named IIFE:");
(function databaseConnection() {
    console.log("DB CONNECTED (Named IIFE)");
    console.log("Scope isolated!");
})();

// Solution 2: Anonymous IIFE
console.log("\n2. Anonymous IIFE:");
(function() {
    console.log("Anonymous IIFE");
    const privateVar = "Only accessible here";
    console.log(privateVar);
})();

// Solution 3: IIFE with parameters
console.log("\n3. IIFE with Parameters:");
(function(name) {
    console.log(`Hello ${name} (IIFE)`);
})("Mayank");

// Solution 4: Arrow function IIFE
console.log("\n4. Arrow IIFE:");
(() => {
    console.log("Arrow IIFE!");
})();

// Solution 5: IIFE returning value
console.log("\n5. IIFE returning value:");
const result = (function() {
    const x = 5;
    const y = 10;
    return x + y;
})();
console.log("Result:", result); // 15

/*
⚠️ IIFE Use Cases:
- Avoid global scope pollution
- Create private scope/variables
- Module pattern (data hiding)
- One-time initialization code

Syntax:
(function() { ... })()
^ Execute immediately after declaration
*/


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Function declaration aur expression mein difference?
A: Declaration = hoisted (can call before)
   Expression = not hoisted (must declare first)

Q2: Arrow function aur regular function mein kya difference?
A: Arrow nahi apna 'this' rakhta, parent se inherit karta
   Regular function apna 'this' rakhta
   
Q3: Scope kya hai JavaScript mein?
A: Jo variables accessible hain current context mein
   Types: Global, Function, Block (let/const)

Q4: Hoisting kya hota hai?
A: JavaScript declarations ko top pe move karta
   Declarations hoisted, initializations nahi

Q5: 'this' keyword kya refer karta hai?
A: Object jisne function/method call kiya
   Global function: global object (window/global)
   Arrow function: parent scope se inherit

Q6: IIFE ka use kya hai?
A: Immediate execution, scope isolation, avoid global pollution
   Syntax: (function() { })()

Q7: Rest parameter (...) ka use kya hai?
A: Variable number of arguments ko array mein collect karna
   function sum(...numbers) { }

Q8: Closure kya hai?
A: Inner function can access outer function variables
   Even after outer function returns
   
   function outer() {
       let x = 10;
       function inner() { return x; }
       return inner;
   }
   const fn = outer();
   console.log(fn()); // 10

Q9: var, let, const ka scope difference?
A: var = function-scoped (old, avoid)
   let = block-scoped
   const = block-scoped, immutable reference

Q10: Callback function kya hota hai?
A: Function jo dusre function ko parameter mein pass hota
   function greet(callback) { callback(); }
   greet(() => console.log("Hi"));
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. HIGHER-ORDER FUNCTIONS
   - Functions taking/returning functions
*/

function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("\n1. Higher-Order Functions:");
console.log("add:", applyOperation(5, 3, add)); // 8
console.log("multiply:", applyOperation(5, 3, multiply)); // 15


/*
2. CALLBACK PATTERN
   - Asynchronous operations
*/

function processData(data, callback) {
    console.log("Processing:", data);
    callback(data.toUpperCase());
}

console.log("\n2. Callback Pattern:");
processData("hello", (result) => {
    console.log("Result:", result); // "HELLO"
});


/*
3. FUNCTION COMPOSITION
   - Combine multiple functions
*/

const compose = (f, g) => (x) => f(g(x));

const addFive = x => x + 5;
const double = x => x * 2;

const addFiveThenDouble = compose(double, addFive);
console.log("\n3. Function Composition:");
console.log("Result:", addFiveThenDouble(10)); // (10+5)*2 = 30


/*
4. MEMOIZATION
   - Cache function results
*/

function createFibMemo() {
    const memo = {};
    
    return function fib(n) {
        if (n in memo) return memo[n];
        if (n <= 1) return n;
        return memo[n] = fib(n - 1) + fib(n - 2);
    };
}

const fibonacci = createFibMemo();
console.log("\n4. Memoization:");
console.log("fib(10):", fibonacci(10)); // 55


/*
5. CURRYING
   - Transform function for partial application
*/

const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
};

const add3 = (a, b, c) => a + b + c;
const curriedAdd = curry(add3);

console.log("\n5. Currying:");
console.log("Partial 1:", curriedAdd(5)); // Waiting for more args
console.log("Partial 2:", curriedAdd(5)(3)); // Waiting for more args
console.log("Complete:", curriedAdd(5)(3)(2)); // 10


/*
6. DEBOUNCING
   - Limit function calls
*/

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

const search = (query) => console.log("Searching:", query);
const debouncedSearch = debounce(search, 1000);

console.log("\n6. Debouncing:");
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("java");
// Will only call search("java") after 1s pause


/*
7. API REQUEST WRAPPER
   - Reusable fetch logic
*/

async function apiCall(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            headers: { 'Content-Type': 'application/json' },
            ...options
        });
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
}

/*
Usage:
const data = await apiCall('/api/users');
const newUser = await apiCall('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'Mayank' })
});
*/


/*
8. EVENT HANDLER WRAPPER
   - Prevent multiple clicks
*/

function onceClickable(btn, handler) {
    let clicked = false;
    btn.addEventListener('click', function(e) {
        if (!clicked) {
            handler(e);
            clicked = true;
            btn.disabled = true;
        }
    });
}

// Usage: onceClickable(submitBtn, () => submitForm());

/*
IIFE production use case

// 🚀 IIFE (Immediately Invoked Function Expression) - Real Use Case Example

// ✅ 1️⃣ IIFE for Scope Isolation (old but important)
(function () {
  const secretKey = "SUPER_SECRET_123";  // private variable
  const initApp = () => console.log("App Initialized ✅");

  initApp();

  // secretKey yahan kaam karta hai
  console.log("Inside IIFE:", secretKey);
})();

// secretKey yahan kaam nahi karega
// console.log(secretKey); // ❌ ReferenceError

console.log("----------------------------------------");

// ✅ 2️⃣ IIFE for Configuration Setup (modern front-end use case)
const config = (() => {
  const mode = import.meta?.env?.MODE || "development";
  const apiUrl =
    mode === "production"
      ? "https://api.example.com"
      : "http://localhost:5000";

  console.log("Config Initialized 🌐");

  return { mode, apiUrl };
})();

console.log("Current Config:", config);

console.log("----------------------------------------");

// ✅ 3️⃣ Async IIFE for Initialization or Fetching Data
(async () => {
  console.log("Fetching user data... ⏳");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log("Fetched Users ✅");
    console.table(users.slice(0, 3)); // just show first 3 users
  } catch (err) {
    console.error("Error fetching users ❌", err);
  }
})();

console.log("----------------------------------------");

// ✅ 4️⃣ Another use: Auto-Running Setup Block
(() => {
  console.log("Theme Applied 🎨");
  document.body.style.backgroundColor = "#f4f4f4";
})();

*/