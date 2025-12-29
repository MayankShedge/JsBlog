// ========================================
// 🔐 CLOSURES & LEXICAL SCOPING - JAVASCRIPT'S MOST POWERFUL FEATURE
// ========================================

/*
Closure = Function that "remembers" variables from its outer scope
Even after the outer function has finished executing

⭐ INTERVIEW IMPORTANCE: CRITICAL (95%+ of interviews!)
Most asked: What is closure? How does it work? Real-world use?
This is THE most important concept after 'this'
Understanding closures = Understanding JavaScript deeply

Key Insight:
Functions form closures around the data they need
This creates private data, encapsulation, and state management
Foundation of modern JavaScript patterns
*/

// ========================================
// 🟢 LEXICAL SCOPING - FOUNDATION
// ========================================

console.log("=== LEXICAL SCOPING ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Lexical scoping = Inner function can access outer function variables
Based on WHERE function is defined, not WHERE it's called
Static structure of code determines scope
*/

// 1️⃣ Lexical scoping basics
console.log("1. Basic lexical scoping:");

function outer() {
    let outerVar = "I'm outer";
    
    function inner() {
        let innerVar = "I'm inner";
        
        // Inner has access to:
        console.log("Inner var:", innerVar); // Own variable
        console.log("Outer var:", outerVar); // Outer's variable ✅
    }
    
    inner();
    
    // Outer doesn't have access to:
    // console.log(innerVar); // ❌ Not in scope
}

outer();

/*
Scope chain:
inner → outer → global → null

When looking for variable:
1. Check inner function scope
2. Check outer function scope
3. Check global scope
4. Not found = ReferenceError
*/

// 2️⃣ Multiple levels of nesting
console.log("\n2. Multiple nesting levels:");

function level1() {
    let var1 = "Level 1";
    
    function level2() {
        let var2 = "Level 2";
        
        function level3() {
            let var3 = "Level 3";
            
            // Can access all three
            console.log(var1, var2, var3); // "Level 1" "Level 2" "Level 3"
        }
        
        level3();
    }
    
    level2();
}

level1();

/*
Lexical scope chain:
level3 → level2 → level1 → global

Important: Scope is determined by CODE STRUCTURE
Not by where function is CALLED
*/

// 3️⃣ Parent cannot access child scope
console.log("\n3. Parent cannot access child variables:");

function parent() {
    let parentVar = "Parent";
    
    function child() {
        let childVar = "Child";
    }
    
    child();
    
    // console.log(childVar); // ❌ Error - child's variables hidden
    console.log(parentVar); // ✅ Parent's own variable
}

parent();

/*
Direction is important:
- Child CAN access parent ✅
- Parent CANNOT access child ❌

This creates encapsulation!
Child can keep secrets from parent
*/

// 4️⃣ Scope vs different calls
console.log("\n4. Scope determined by CODE, not CALLS:");

function makeGreeter() {
    let greeting = "Hello";
    
    function greet(name) {
        console.log(`${greeting} ${name}`);
    }
    
    return greet;
}

function changeGreeting() {
    let greeting = "Hi"; // Different variable
    
    const greet = makeGreeter();
    greet("Mayank"); // Which greeting used? "Hello"!
}

changeGreeting();

/*
Why "Hello" and not "Hi"?
greet function was defined inside makeGreeter
So it's lexically bound to makeGreeter's scope
NOT to changeGreeting's scope

Lexical = Where in CODE the function is defined
Not where it's called from!
*/


// ========================================
// 🔵 CLOSURES - THE MAGIC
// ========================================

console.log("\n=== CLOSURES ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL (99% of advanced interviews!)
Closure = Function + its lexical scope
When function is created, it "closes over" its scope
That scope is "remembered" even after outer function finishes

This is THE most powerful feature in JavaScript!
*/

// 1️⃣ Closure example - function returning function
console.log("1. Basic closure:");

function makeMultiplier(multiplier) {
    // This variable is "captured" in the closure
    
    function multiply(number) {
        // This inner function "closes over" multiplier
        return number * multiplier;
    }
    
    return multiply; // Return the function
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double 5:", double(5)); // 10 (remembers multiplier=2)
console.log("Triple 5:", triple(5)); // 15 (remembers multiplier=3)

/*
What happened:
1. makeMultiplier(2) called → returns multiply function
2. multiply function "closes over" multiplier=2
3. Even after makeMultiplier finished, multiply remembers 2
4. double(5) uses that remembered 2

Each closure is independent:
- double remembers 2
- triple remembers 3
- They don't interfere
*/

// 2️⃣ Closure creates private state
console.log("\n2. Closures create private state:");

function createCounter() {
    let count = 0; // Private variable (hidden!)
    
    return {
        increment: function() {
            count++;
            return count;
        },
        
        decrement: function() {
            count--;
            return count;
        },
        
        get: function() {
            return count;
        }
    };
}

const counter = createCounter();

console.log("Initial:", counter.get()); // 0
console.log("After increment:", counter.increment()); // 1
console.log("After increment:", counter.increment()); // 2
console.log("After decrement:", counter.decrement()); // 1

// Can't access count directly!
// console.log(counter.count); // undefined

/*
Magic of closure:
- count is PRIVATE (hidden from outside)
- Only accessible through methods
- Each counter instance has its own count
- Cannot directly modify count

This is TRUE DATA ENCAPSULATION!
*/

// 3️⃣ Multiple independent closures
console.log("\n3. Independent closure instances:");

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Separate for each account
    
    return {
        deposit: function(amount) {
            balance += amount;
            return `Deposited ${amount}, new balance: ${balance}`;
        },
        
        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return `Withdrew ${amount}, new balance: ${balance}`;
        },
        
        getBalance: function() {
            return balance;
        }
    };
}

const account1 = createBankAccount(1000);
const account2 = createBankAccount(500);

console.log(account1.deposit(200)); // 1200
console.log(account1.withdraw(300)); // 900
console.log(account2.withdraw(100)); // 400

console.log("Account1 balance:", account1.getBalance()); // 900
console.log("Account2 balance:", account2.getBalance()); // 400

/*
Each account has its own balance closure:
- account1 remembers its balance (900)
- account2 remembers its balance (400)
- They don't interfere
- True data isolation
*/

// 4️⃣ Function factory with closures
console.log("\n4. Function factory pattern:");

function createMultiplyBy(factor) {
    // Returns a function that "closes over" factor
    return function(number) {
        return number * factor;
    };
}

const multiplyBy5 = createMultiplyBy(5);
const multiplyBy10 = createMultiplyBy(10);

console.log("5 × 5:", multiplyBy5(5)); // 25
console.log("5 × 10:", multiplyBy10(5)); // 50
console.log("10 × 10:", multiplyBy10(10)); // 100

/*
Factory pattern with closures:
- One function creates many specialized functions
- Each remembers its own parameter
- Useful for creating variations
*/


// ========================================
// 🟠 CLOSURE GOTCHAS & COMMON MISTAKES
// ========================================

console.log("\n=== CLOSURE GOTCHAS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Common mistakes with closures
Understanding gotchas = Interview gold
*/

// 1️⃣ Loop closure problem (CLASSIC!)
console.log("1. Loop closure gotcha:");

// ❌ WRONG WAY
const functions = [];
for (var i = 0; i < 3; i++) {
    functions.push(function() {
        console.log("i is:", i); // All will print same value!
    });
}

console.log("Calling functions (wrong way):");
functions[0](); // 3 (not 0!)
functions[1](); // 3 (not 1!)
functions[2](); // 3 (not 2!)

/*
Why?
- All functions close over the SAME i
- When functions execute, i = 3 (loop ended)
- All print 3

Classic closure problem!
*/

// ✅ SOLUTION 1: Use let (block scoping)
console.log("\nSolution 1 - Using let:");
const functions2 = [];
for (let i = 0; i < 3; i++) {
    functions2.push(function() {
        console.log("i is:", i);
    });
}

functions2[0](); // 0 ✅
functions2[1](); // 1 ✅
functions2[2](); // 2 ✅

/*
Why let works:
- let creates new binding each iteration
- Each function closes over its own i
- Separate closures for each i
*/

// ✅ SOLUTION 2: Use IIFE
console.log("\nSolution 2 - Using IIFE:");
const functions3 = [];
for (var i = 0; i < 3; i++) {
    functions3.push((function(index) {
        return function() {
            console.log("index is:", index);
        };
    })(i));
}

functions3[0](); // 0 ✅
functions3[1](); // 1 ✅
functions3[2](); // 2 ✅

/*
Why IIFE works:
- IIFE immediately captures i
- Each IIFE creates its own scope
- Returns function that closes over that scope
*/

// 2️⃣ Unexpected closure behavior
console.log("\n2. Unexpected closures:");

function setupButtons() {
    const buttons = document.querySelectorAll("button");
    
    for (var i = 0; i < buttons.length; i++) {
        // ❌ WRONG - all buttons show same i
        // buttons[i].addEventListener("click", function() {
        //     alert("Button " + i + " clicked");
        // });
        
        // ✅ CORRECT - each gets its own i
        // buttons[i].addEventListener("click", (function(index) {
        //     return function() {
        //         alert("Button " + index + " clicked");
        //     };
        // })(i));
    }
}

/*
Same loop closure problem in real code!
Very common bug
*/

// 3️⃣ Closure memory - can cause memory leaks
console.log("\n3. Closure and memory:");

function heavyComputation() {
    const largeData = new Array(1000000).fill("data"); // Large data
    
    return function() {
        console.log("Accessing first element:", largeData[0]);
    };
}

const result = heavyComputation();
// largeData still in memory because closure needs it!
// If result is never used, it's wasted memory

/*
Closure gotcha:
- Closures keep outer variables alive
- Even if you don't use them
- Can cause memory leaks if not careful
- Important in long-running applications
*/


// ========================================
// 🔴 PRACTICAL CLOSURE PATTERNS
// ========================================

console.log("\n=== PRACTICAL PATTERNS ===\n");

// 1️⃣ Module pattern (encapsulation)
console.log("1. Module pattern:");

const Calculator = (function() {
    // Private variables
    let lastResult = 0;
    
    // Private function
    function logOperation(operation, a, b) {
        console.log(`${operation}(${a}, ${b}) = ${lastResult}`);
    }
    
    // Public API
    return {
        add: function(a, b) {
            lastResult = a + b;
            logOperation("add", a, b);
            return lastResult;
        },
        
        multiply: function(a, b) {
            lastResult = a * b;
            logOperation("multiply", a, b);
            return lastResult;
        },
        
        getLastResult: function() {
            return lastResult;
        }
    };
})();

Calculator.add(5, 3); // "add(5, 3) = 8"
Calculator.multiply(4, 2); // "multiply(4, 2) = 8"
console.log("Last result:", Calculator.getLastResult()); // 8

/*
Module pattern with closures:
- Private variables (lastResult, logOperation)
- Public API (only exposed methods)
- Encapsulation achieved
- Very powerful pattern
*/

// 2️⃣ Function decorator with closure
console.log("\n2. Decorator pattern:");

function addLogging(fn) {
    return function(...args) {
        console.log("Calling with:", args);
        const result = fn(...args);
        console.log("Result:", result);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const addWithLogging = addLogging(add);
addWithLogging(5, 3);

/*
Decorator creates closure:
- Remembers original function
- Wraps it with additional logic
- Common pattern in libraries
*/

// 3️⃣ Memoization (caching results)
console.log("\n3. Memoization with closure:");

function memoize(fn) {
    const cache = {}; // Closed over
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log("Returning cached result");
            return cache[key];
        }
        
        console.log("Computing...");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function expensiveCalc(n) {
    return n * n * n; // Simulate expensive operation
}

const memoized = memoize(expensiveCalc);
console.log(memoized(5)); // "Computing..." then 125
console.log(memoized(5)); // "Returning cached..." then 125

/*
Memoization with closure:
- Cache stays in memory (closure)
- Each call checks cache first
- Avoids recalculation
- Performance optimization
*/

// 4️⃣ Once function (execute only once)
console.log("\n4. Once pattern:");

function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
        }
        return result;
    };
}

const expensiveInit = once(function() {
    console.log("Initializing...");
    return "Initialized";
});

console.log(expensiveInit()); // "Initializing..."
console.log(expensiveInit()); // (nothing logged, returns cached)
console.log(expensiveInit()); // (nothing logged, returns cached)

/*
Once pattern with closure:
- called flag stays true after first call
- Result cached in closure
- Function truly executes only once
- Useful for initialization
*/

// 5️⃣ Event handler with closure
console.log("\n5. Event handler with closure:");

function setupEventHandler(elementId, message) {
    // message is in closure
    const element = document.getElementById(elementId);
    
    if (element) {
        element.addEventListener("click", function() {
            console.log(message); // Remembers message
        });
    }
}

// setupEventHandler("myButton", "Button was clicked!");

/*
Event handler closure:
- Handler remembers message
- message stays in memory
- Each button can have different message
- No global variable pollution
*/


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What is lexical scoping?
A: Inner function can access outer function variables
   Based on WHERE function is defined (code structure)
   NOT where it's called from

Q2: What is a closure?
A: Function + its lexical scope
   Function "remembers" variables from outer scope
   Even after outer function finishes

Q3: Closures create what?
A: Private variables
   Data encapsulation
   State management
   Function factories

Q4: Loop closure problem?
A: All functions close over same variable
   When loop ends, all see final value
   Use let or IIFE to fix

Q5: How to fix loop closure?
A: Option 1: Use let (creates new binding per iteration)
   Option 2: Use IIFE (captures value immediately)
   Option 3: Use arrow + let (modern way)

Q6: Can parent access child scope?
A: No! Direction is important
   Child can access parent
   Parent cannot access child
   Creates encapsulation

Q7: Do closures cause memory leaks?
A: Can if large data held unnecessarily
   Outer variables stay alive
   Even if not used
   Important in long-running code

Q8: Module pattern what is it?
A: IIFE that returns public API
   Private variables hidden
   Public methods access them
   Perfect encapsulation

Q9: Can closures improve performance?
A: Yes! Through memoization
   Cache results in closure
   Avoid recalculation
   Trade memory for speed

Q10: When is closure useful?
A: Data privacy (private variables)
   Encapsulation (OOP)
   Function factories (creating variants)
   Decorators (wrapping functions)
   Event handlers (remembering context)

Q11: var vs let in loops?
A: var = single binding (all reference same)
   let = new binding per iteration
   let preferred in modern code

Q12: How to create private class properties before #?
A: Closures in constructor
   WeakMap pattern
   Symbol pattern
   All use closures

Q13: Real-world closure uses?
A: React hooks (useState uses closure)
   Event listeners
   Timers (remembering context)
   API wrappers
   Configuration functions

Q14: Closure execution environment?
A: Closure remembers scope chain
   Not current execution context
   Lexically determined
   Static, not dynamic

Q15: Can you explain Module Pattern?
A: IIFE creates closure
   Returns object with public methods
   Methods access private data
   Private data hidden from outside
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. REACT HOOKS PATTERN (uses closures!)
*/
function useState(initialValue) {
    let state = initialValue;
    
    return [
        function() { return state; },
        function(newValue) { state = newValue; }
    ];
}

/*
2. OBSERVABLE PATTERN (data change tracking)
*/
function createObservable(initialValue) {
    let value = initialValue;
    const observers = [];
    
    return {
        getValue() {
            return value;
        },
        
        setValue(newValue) {
            value = newValue;
            observers.forEach(callback => callback(newValue));
        },
        
        subscribe(callback) {
            observers.push(callback);
        }
    };
}

/*
3. CONFIGURATION PATTERN
*/
function createConfigurable(defaults) {
    let config = { ...defaults };
    
    return {
        set(key, value) {
            config[key] = value;
        },
        
        get(key) {
            return config[key];
        },
        
        getAll() {
            return { ...config };
        }
    };
}


console.log("\n✅ Closures & Lexical Scoping Mastery Complete!");
