// ========================================
// 🔗 BIND IN JAVASCRIPT - COMPLETE MASTERCLASS
// ========================================

/*
bind() = Method to permanently bind 'this' context to a function
Returns NEW function with fixed 'this'
Does NOT execute immediately (unlike call/apply)

⭐ INTERVIEW IMPORTANCE: CRITICAL (90% of interviews)
Most asked: When to use bind? How does it differ from call/apply?
Event listeners, callbacks, partial application

Key Insight:
bind() = Create a copy with permanent 'this'
call/apply = Execute immediately with specific 'this'
*/

// ========================================
// 🟢 BIND BASICS - FUNDAMENTALS
// ========================================

console.log("=== BIND BASICS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
bind() solves the "lost context" problem
Returns new function, doesn't execute immediately
Perfect for callbacks and event handlers
*/

// 1️⃣ The problem - losing context
console.log("1. Losing context problem:");

const user = {
    name: "Mayank",
    email: "mayank@gmail.com",
    
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet(); // ✅ "Hello Mayank"

// Extract method and lose context
const greetFunc = user.greet;
// greetFunc(); // ❌ undefined (lost context!)

console.log("Without bind, lost context!");

// 2️⃣ Solution 1: Using bind
console.log("\n2. Solution with bind():");

const boundGreet = user.greet.bind(user); // Create bound copy
boundGreet(); // ✅ "Hello Mayank" (context preserved!)

/*
What bind does:
- Creates NEW function
- Permanently sets 'this' to specified object
- Does NOT execute immediately
- Returns the new function

Syntax: function.bind(thisArg, arg1, arg2, ...)
*/

// 3️⃣ Bind vs call vs apply
console.log("\n3. Bind vs call vs apply:");

function displayInfo(greeting) {
    console.log(`${greeting} ${this.name}`);
}

const person = { name: "Raj" };

// call - executes immediately
displayInfo.call(person, "Hello"); // ✅ Executes now: "Hello Raj"

// apply - executes immediately (array args)
displayInfo.apply(person, ["Hi"]); // ✅ Executes now: "Hi Raj"

// bind - returns function for later
const boundDisplay = displayInfo.bind(person, "Hey");
boundDisplay(); // ✅ Executes later: "Hey Raj"

/*
⭐ INTERVIEW GOLD:
call() - Execute immediately
apply() - Execute immediately (array args)
bind() - Return function (execute later)

Use call/apply when executing immediately
Use bind when passing to callback
*/

// 4️⃣ Key characteristic - returns new function
console.log("\n4. Bind returns new function:");

function sayName() {
    return this.name;
}

const obj1 = { name: "John" };
const obj2 = { name: "Jane" };

const boundToObj1 = sayName.bind(obj1);
const boundToObj2 = sayName.bind(obj2);

console.log(boundToObj1()); // "John"
console.log(boundToObj2()); // "Jane"
console.log(boundToObj1 === boundToObj2); // false (different functions!)

/*
Each bind() creates a new function!
Can bind same function to different objects
Each binding is independent
*/


// ========================================
// 🔵 BIND IN EVENT LISTENERS
// ========================================

console.log("\n=== BIND IN EVENT LISTENERS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Event listeners lose context (this = element)
bind() preserves context (this = object)
Very common use case in React/Vue
*/

// 1️⃣ Event listener context loss
console.log("1. Event listener context problem:");

/*
// In browser:
class Modal {
    constructor() {
        this.title = "My Modal";
    }
    
    handleClick() {
        console.log(this.title); // What is 'this'?
    }
}

const modal = new Modal();

// Problem: lose 'this'
// button.addEventListener('click', modal.handleClick);
// → 'this' = button element, not Modal instance!

// Solution 1: Use arrow function
// button.addEventListener('click', () => modal.handleClick());
// → 'this' = parent scope (works)

// Solution 2: Use bind (more efficient)
// button.addEventListener('click', modal.handleClick.bind(modal));
// → 'this' = Modal instance (works)
*/

// Simulating browser behavior
const handler = {
    label: "Handler",
    
    onClick: function(element) {
        // Without bind: this = element (button)
        // With bind: this = handler object
        console.log(`Label: ${this.label}`);
    }
};

// Simulate button triggering
const button = { name: "button" };

// ❌ Without bind - loses context
// handler.onClick.call(button); // this = button

// ✅ With bind - preserves context
const boundHandler = handler.onClick.bind(handler);
boundHandler.call(button); // this still = handler!

console.log("With bind, context preserved in event listeners!");

// 2️⃣ Real-world example
console.log("\n2. Real-world React-like example:");

class Component {
    constructor() {
        this.count = 0;
        
        // Bind method to preserve 'this' in event handler
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.count++;
        console.log(`Clicked ${this.count} times`);
    }
    
    render() {
        // Simulating button click
        // In real React: <button onClick={this.handleClick}>Click</button>
        return this.handleClick;
    }
}

const component = new Component();
const clickHandler = component.render();

clickHandler(); // 1
clickHandler(); // 2
clickHandler(); // 3

/*
Common in React class components:
constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
}

Or use arrow function syntax:
handleSubmit = () => { ... }
*/

// 3️⃣ Removing event listeners with bind
console.log("\n3. Removing event listeners:");

/*
Important: must use same bound function reference to remove!

class Window {
    constructor() {
        this.data = [];
        
        // Save bound reference
        this.handleResize = this.handleResize.bind(this);
    }
    
    handleResize() {
        console.log("Window resized");
    }
    
    attachListener() {
        // Add with bound function
        window.addEventListener('resize', this.handleResize);
    }
    
    removeListener() {
        // Remove with SAME bound function
        window.removeEventListener('resize', this.handleResize);
    }
}

const myWindow = new Window();
myWindow.attachListener();
// ... later ...
myWindow.removeListener();

⚠️ GOTCHA:
window.addEventListener('resize', this.handleResize.bind(this));
window.removeEventListener('resize', this.handleResize.bind(this));
// ❌ Won't work! Creates different bound functions each time

// Always save the bound reference!
*/


// ========================================
// 🟠 PARTIAL APPLICATION - PRE-FILLING ARGUMENTS
// ========================================

console.log("\n=== PARTIAL APPLICATION ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
bind() can pre-fill arguments
Create specialized version of function
Powerful functional programming technique
*/

// 1️⃣ Partial application basics
console.log("1. Partial application:");

function multiply(a, b, c) {
    return a * b * c;
}

// Create specialized version (pre-fill first arg)
const double = multiply.bind(null, 2);
console.log(double(3, 4)); // 2 * 3 * 4 = 24

const triple = multiply.bind(null, 3);
console.log(triple(4, 5)); // 3 * 4 * 5 = 60

/*
Partial application:
- Pre-fill some arguments
- Return function that takes remaining args
- Useful for creating variants
- Common in functional programming
*/

// 2️⃣ More complex example
console.log("\n2. Complex partial application:");

function greet(greeting, name, punctuation) {
    return `${greeting} ${name}${punctuation}`;
}

// Pre-fill greeting
const sayHello = greet.bind(null, "Hello");
console.log(sayHello("Mayank", "!")); // "Hello Mayank!"
console.log(sayHello("Raj", ".")); // "Hello Raj."

// Pre-fill greeting and punctuation
const sayHiExcited = greet.bind(null, "Hi", undefined, "!!!");
console.log(sayHiExcited("Priya")); // "Hi Priya!!!"

/*
Syntax: function.bind(thisArg, arg1, arg2, ...)
- thisArg: 'this' context (null if not needed)
- arg1, arg2: pre-filled arguments
- Remaining args passed when calling result
*/

// 3️⃣ Practical example - API requests
console.log("\n3. Practical API wrapper:");

function apiCall(method, url, data) {
    return `${method} request to ${url} with ${JSON.stringify(data)}`;
}

// Create specialized GET function
const getRequest = apiCall.bind(null, "GET");
console.log(getRequest("/api/users", {})); // GET request to /api/users...

// Create specialized POST function
const postRequest = apiCall.bind(null, "POST");
console.log(postRequest("/api/users", { name: "Mayank" })); // POST request...

// Create specialized DELETE function
const deleteRequest = apiCall.bind(null, "DELETE");
console.log(deleteRequest("/api/users/1", {})); // DELETE request...

/*
Benefits:
- DRY principle (don't repeat yourself)
- Cleaner code
- Create reusable utilities
- Functional programming pattern
*/


// ========================================
// 🔴 BIND IN TIMERS & CALLBACKS
// ========================================

console.log("\n=== BIND IN TIMERS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
setTimeout loses context
bind() preserves context
Arrow functions also work (but bind is more flexible)
*/

// 1️⃣ setTimeout and bind
console.log("1. setTimeout with bind:");

class Timer {
    constructor() {
        this.seconds = 0;
    }
    
    start() {
        console.log("Timer started");
        
        // ❌ Without bind - loses context
        // setTimeout(this.increment, 1000);
        // → 'this' = global or undefined
        
        // ✅ With bind - preserves context
        setTimeout(this.increment.bind(this), 1000);
    }
    
    increment() {
        this.seconds++;
        console.log(`Seconds: ${this.seconds}`);
    }
}

const timer = new Timer();
// timer.start(); // Would show "Seconds: 1" after 1s

console.log("Timer with bind works correctly!");

// 2️⃣ Bind with callback chains
console.log("\n2. Callback chain:");

class DataProcessor {
    constructor() {
        this.data = [];
    }
    
    fetchData(onSuccess) {
        // Simulate async operation
        setTimeout(() => {
            this.data = [1, 2, 3];
            onSuccess.bind(this)(); // Call with bound 'this'
        }, 100);
    }
    
    processData() {
        console.log(`Processing: ${this.data}`);
    }
}

const processor = new DataProcessor();
// processor.fetchData(processor.processData); // Would work with bind

console.log("Callbacks with bind work correctly!");

// 3️⃣ Arrow functions vs bind
console.log("\n3. Arrow functions vs bind:");

class Handler {
    constructor() {
        this.name = "Handler";
    }
    
    // Method 1: Use bind in constructor
    method1() {
        console.log(this.name);
    }
    
    // Method 2: Use arrow function (modern)
    method2 = () => {
        console.log(this.name);
    }
}

const handler = new Handler();
handler.method1(); // Need to bind if passed as callback
handler.method2(); // Arrow preserves context automatically

/*
Bind vs Arrow:
bind: Traditional, more control, explicit
arrow: Modern, automatic, concise

Both work, choose based on preference/context
Arrow more popular in modern code
*/


// ========================================
// 🟣 ADVANCED BIND PATTERNS
// ========================================

console.log("\n=== ADVANCED PATTERNS ===\n");

// 1️⃣ Currying with bind
console.log("1. Currying (functional programming):");

function add(a, b, c) {
    return a + b + c;
}

// Create curried versions
const add5 = add.bind(null, 5);
const add5and10 = add5.bind(null, 10);

console.log(add5(3, 4)); // 5 + 3 + 4 = 12
console.log(add5and10(2)); // 5 + 10 + 2 = 17

/*
Currying:
- Break function into smaller steps
- Each step pre-fills one argument
- Can build up complex operations
- Powerful functional technique
*/

// 2️⃣ Array methods and bind
console.log("\n2. Array methods with bind:");

function Logger(prefix) {
    this.prefix = prefix;
}

Logger.prototype.log = function(message) {
    console.log(`[${this.prefix}] ${message}`);
};

const errorLogger = new Logger("ERROR");
const infoLogger = new Logger("INFO");

const messages = ["message1", "message2", "message3"];

// Use bind with array methods
// messages.forEach(errorLogger.log.bind(errorLogger));
// Would output:
// [ERROR] message1
// [ERROR] message2
// [ERROR] message3

/*
Common pattern:
array.forEach(object.method.bind(object))
array.map(object.method.bind(object))
array.filter(object.method.bind(object))
*/

// 3️⃣ Debounce with bind
console.log("\n3. Debounce with bind:");

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

class SearchBox {
    constructor() {
        this.query = "";
        // Use bind in debounce
        this.search = debounce(this.search.bind(this), 300);
    }
    
    search() {
        console.log(`Searching for: ${this.query}`);
    }
}

const searchBox = new SearchBox();
searchBox.query = "javascript";
// searchBox.search(); // Debounced search

/*
Debounce pattern:
- Used in search, resize, scroll events
- Prevents excessive calls
- bind preserves 'this' in debounce
*/


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What is bind()?
A: Method that returns new function with permanent 'this'
   Does not execute immediately (unlike call/apply)

Q2: When to use bind?
A: Event listeners (preserve context)
   Callbacks (prevent losing 'this')
   Partial application (pre-fill arguments)

Q3: Difference between bind, call, apply?
A: call() - execute immediately, individual args
   apply() - execute immediately, array args
   bind() - return new function, doesn't execute

Q4: Syntax of bind?
A: function.bind(thisArg, arg1, arg2, ...)
   thisArg = 'this' context
   arg1, arg2 = pre-filled arguments

Q5: Why use bind in event listeners?
A: Event listeners set 'this' to the element
   bind preserves 'this' as the object instance

Q6: Can you pass arguments to bind?
A: Yes, partial application
   Pre-fill some arguments
   Return function takes remaining arguments

Q7: Does bind execute immediately?
A: No, returns new function
   Must call returned function to execute

Q8: Can you bind an arrow function?
A: No, arrow functions can't be rebound
   They use parent's 'this' (lexical)

Q9: How to remove event listeners with bind?
A: Must save bound reference
   Use same reference to remove
   Don't create new binding each time

Q10: What is partial application?
A: Pre-fill some function arguments
   Return specialized function
   Create variants from single function

Q11: Is bind performant?
A: Yes, minimal overhead
   Creates single new function reference
   Can be reused many times

Q12: Bind vs arrow in constructors?
A: Bind in constructor: explicit, traditional
   Arrow as class property: modern, concise
   Both achieve same result

Q13: Can you chain bind calls?
A: Yes, but usually not needed
   Each bind returns new function
   Can pre-fill multiple arguments

Q14: How bind helps with this loss?
A: Permanently fixes 'this' to object
   Prevents accidental global assignment
   Makes callbacks predictable

Q15: Real-world use cases of bind?
A: React class components
   Event handlers
   Callbacks in async code
   Partial application utilities
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. REACT CLASS COMPONENT PATTERN
*/
class MyComponent {
    constructor() {
        this.state = { count: 0 };
        // Bind methods in constructor
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleClick() {
        this.state.count++;
        console.log(`Clicked: ${this.state.count}`);
    }
    
    handleSubmit() {
        console.log("Form submitted");
    }
}

const component = new MyComponent();
component.handleClick(); // 1
component.handleClick(); // 2

/*
2. DEBOUNCE/THROTTLE WITH BIND
*/
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

class ScrollHandler {
    constructor() {
        this.handleScroll = throttle(
            this.handleScroll.bind(this),
            1000
        );
    }
    
    handleScroll() {
        console.log("Scroll detected at", this.position);
    }
}

/*
3. UTILITY FUNCTION FACTORY
*/
function createLogger(level) {
    return function(message) {
        console.log(`[${level}] ${message}`);
    };
}

const errorLog = createLogger("ERROR");
const infoLog = createLogger("INFO");

errorLog("Something went wrong");
infoLog("All good");


console.log("\n✅ Bind Mastery Complete!");
