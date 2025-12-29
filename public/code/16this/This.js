// ========================================
// 👆 THIS KEYWORD - JAVASCRIPT'S MOST CONFUSING CONCEPT - MASTERCLASS
// ========================================

/*
'this' = Reference to the object that is executing the current code
The value of 'this' depends on HOW and WHERE the function is called

⭐ INTERVIEW IMPORTANCE: CRITICAL (99% of interviews ask!)
This is THE most common source of bugs in JavaScript
Master this = Master JavaScript

Key Rule:
👉 "Who called me?" - The answer determines 'this'

Why so confusing?
✅ Value changes based on context
✅ Arrow functions behave differently
✅ Strict mode changes behavior
✅ Easy to lose context accidentally
✅ Different in different environments
*/

// ========================================
// 🟢 GLOBAL SCOPE - 'this' at top level
// ========================================

console.log("=== GLOBAL 'this' ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
In global scope, 'this' refers to global object

Browser: this = window
Node.js: this = {} (empty object in module scope)
Strict mode: doesn't change, still global

Note: In modules, global 'this' is NOT the actual global
Use 'globalThis' for true global in all environments
*/

// Global scope
console.log("1. Global this:");
console.log("this:", this); // {} (in Node/module)

if (typeof window !== 'undefined') {
    console.log("Browser detected - this is window");
} else {
    console.log("Node.js detected - this is module context");
}

// Access true global
console.log("\n2. True global object:");
console.log("globalThis:", globalThis); // Works everywhere

// 3️⃣ Global variable assignment
console.log("\n3. Global variable assignment:");

// In strict mode: this.value = "test" throws error (can't add to global)
// In non-strict: this.value = "test" would work (bad practice!)

var globalVar = "I'm global";
console.log("globalVar:", globalVar);
console.log("globalThis.globalVar:", globalThis.globalVar); // true (var added to global)

// let/const don't add to globalThis
let blockVar = "I'm block scoped";
console.log("globalThis.blockVar:", globalThis.blockVar); // undefined


// ========================================
// 🔵 FUNCTION SCOPE - 'this' in functions
// ========================================

console.log("\n=== FUNCTION 'this' ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
In regular function, 'this' depends on call context:
- Direct call → global object (or undefined in strict mode)
- Called from object → that object
- Called with .call/.apply → manually set
- Called with .bind → bound value
- Inside arrow function → parent's this

This is where confusion starts!
*/

// 1️⃣ Regular function - global this
console.log("1. Regular function call:");

function regularFunction() {
    console.log("Inside regular function, this:", this);
    return this;
}

const result1 = regularFunction();
// Output: global object (or undefined in strict mode)

// 2️⃣ Demonstrating the problem
console.log("\n2. Losing context problem:");

function showUser() {
    console.log("User:", this.username);
}

const user = { username: "Mayank", showUser: showUser };

user.showUser(); // ✅ Works - "Mayank"

const extractedMethod = user.showUser;
extractedMethod(); // ❌ Fails - undefined (lost context!)

/*
Why?
- user.showUser() → 'this' = user
- extractedMethod() → 'this' = global (not user!)

This is a classic JavaScript gotcha!
*/

// 3️⃣ Strict mode difference
console.log("\n3. Strict mode vs non-strict:");

function strictTest() {
    "use strict";
    console.log("Strict mode, this:", this); // undefined
}

function nonStrictTest() {
    console.log("Non-strict mode, this:", this); // global
}

strictTest();
nonStrictTest();

/*
Strict mode:
- Regular function this = undefined (safer!)
- Prevents accidental global modification
- Recommended in production
*/


// ========================================
// 🟠 OBJECT METHOD - 'this' in methods
// ========================================

console.log("\n=== OBJECT METHOD 'this' ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
When method called on object, 'this' = that object

obj.method() → 'this' = obj
obj.nested.method() → 'this' = obj.nested (NOT obj!)

This is the most common 'this' use case
*/

// 1️⃣ Simple object method
console.log("1. Simple object method:");

const player = {
    name: "Mayank",
    level: 10,
    
    displayInfo: function() {
        console.log(`${this.name} - Level ${this.level}`);
    }
};

player.displayInfo(); // ✅ "Mayank - Level 10"

// 2️⃣ Accessing object data through 'this'
console.log("\n2. Using 'this' to access object data:");

const car = {
    brand: "Tesla",
    speed: 0,
    
    accelerate: function(amount) {
        this.speed += amount;
        console.log(`${this.brand} accelerated to ${this.speed} km/h`);
    },
    
    brake: function(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} slowed to ${this.speed} km/h`);
    },
    
    getInfo: function() {
        return {
            brand: this.brand,
            speed: this.speed
        };
    }
};

car.accelerate(50);
car.accelerate(30);
car.brake(20);
console.log("Car info:", car.getInfo());

// 3️⃣ Nested objects
console.log("\n3. Nested object methods:");

const company = {
    name: "TechCorp",
    employee: {
        name: "John",
        greet: function() {
            console.log("this in nested method:", this); // this = employee (NOT company!)
            console.log(`I am ${this.name}`); // "John" (not "TechCorp")
        }
    }
};

company.employee.greet(); // 'this' = company.employee

/*
⭐ INTERVIEW GOLD: Who is the caller?
company.employee.greet() → who called greet?
Answer: company.employee

So 'this' = company.employee (the immediate caller!)
NOT company (even though it's nested inside company)
*/

// 4️⃣ Method called from variable
console.log("\n4. Method called through variable:");

const userObj = {
    name: "Raj",
    getName: function() {
        console.log(this.name);
    }
};

const getNameFunc = userObj.getName;
getNameFunc(); // ❌ undefined (lost context!)

// Fix: Use bind
const getNameBound = userObj.getName.bind(userObj);
getNameBound(); // ✅ "Raj" (context preserved)


// ========================================
// 🔴 ARROW FUNCTIONS - Lexical 'this'
// ========================================

console.log("\n=== ARROW FUNCTIONS & 'this' ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Arrow functions DON'T have their own 'this'
They inherit 'this' from parent scope (lexical binding)

This is a major difference from regular functions!
Arrow functions = "this" captured at definition time
Regular functions = "this" determined at call time
*/

// 1️⃣ Arrow in object - DON'T DO THIS
console.log("1. ❌ Arrow function in object (wrong):");

const user1 = {
    name: "Mayank",
    
    greet: () => {
        console.log("Arrow in object, this:", this); // ❌ global this!
        console.log("Name:", this.name); // undefined
    }
};

user1.greet(); // 'this' = global (not user1!)

/*
Why?
Arrow function defined in global scope.
So 'this' = global (captured at definition).
Even though called on user1, still uses global 'this'.

⚠️ NEVER use arrow functions as object methods!
Unless you want 'this' to refer to outer scope.
*/

// 2️⃣ Arrow inside regular function - CORRECT
console.log("\n2. ✅ Arrow inside method (correct):");

const user2 = {
    name: "Raj",
    age: 25,
    
    greet: function() {
        console.log("Regular function, this:", this); // ✅ user2
        
        const arrowFunc = () => {
            console.log("Arrow inside regular, this:", this); // ✅ user2 (inherited!)
            console.log(`Hello ${this.name}, age ${this.age}`);
        };
        
        arrowFunc();
    }
};

user2.greet(); // ✅ Works correctly

/*
Why?
Regular function's 'this' = user2.
Arrow function inherits that 'this'.
Perfect for callbacks inside methods!
*/

// 3️⃣ Async example - when arrow functions shine
console.log("\n3. Arrow in async/timers:");

const userAsync = {
    name: "Priya",
    
    fetchData: function() {
        console.log("Start fetching...");
        
        // ❌ Wrong - regular function loses context
        // setTimeout(function() {
        //     this.name // undefined
        // }, 1000);
        
        // ✅ Correct - arrow preserves context
        setTimeout(() => {
            console.log(`Data for ${this.name} loaded`);
        }, 100);
    }
};

userAsync.fetchData(); // ✅ Works!

// 4️⃣ Event listeners - arrow vs regular
console.log("\n4. Event listeners:");

/*
// In browser:
const button = document.querySelector('button');

// ❌ Regular function loses context
button.addEventListener('click', function() {
    console.log(this); // button element
    console.log(this.username); // undefined (button doesn't have username)
});

// ✅ Arrow preserves outer context
const user = { username: "Mayank" };
button.addEventListener('click', () => {
    console.log(this); // user (parent context)
    console.log(this.username); // "Mayank"
});

Wait - but for click handler, sometimes we WANT 'this' = element!
Solution: Use regular function OR use event.target
*/


// ========================================
// 💚 CONSTRUCTOR FUNCTIONS - 'this' in new
// ========================================

console.log("\n=== CONSTRUCTOR 'this' ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
When using 'new' keyword with constructor function:
'this' = the new object being created

This is how object creation works!
*/

// 1️⃣ Constructor function
console.log("1. Constructor function:");

function Person(name, age) {
    console.log("Inside constructor, this:", this); // New empty object
    
    this.name = name;
    this.age = age;
}

const person1 = new Person("Mayank", 22);
console.log("person1:", person1); // { name: "Mayank", age: 22 }

/*
What happened:
1. new created empty object: this = {}
2. Constructor body ran: this.name = "Mayank", etc.
3. this returned automatically

So 'this' in constructor = new object
*/

// 2️⃣ Methods in constructor
console.log("\n2. Methods in constructor:");

function User(username) {
    this.username = username;
    
    this.greet = function() {
        console.log(`Hello ${this.username}`);
    };
}

const user3 = new User("Raj");
user3.greet(); // ✅ "Hello Raj" (this = user3)

// 3️⃣ Forgetting 'new' - DANGER
console.log("\n3. ❌ Forgetting 'new' (DANGER):");

function BadConstructor(value) {
    this.value = value;
}

// const bad1 = BadConstructor(10); // Forgot 'new'!
// console.log(bad1); // undefined
// console.log(globalThis.value); // 10 (oops! set on global!)

/*
Danger:
- Without 'new': 'this' = global object
- Accidentally modify global scope!
- Hard to debug

Prevention:
- Always use 'new'
- Use ES6 classes (forces 'new')
- Constructor functions should start with Capital letter
*/

// 4️⃣ ES6 class (modern way)
console.log("\n4. ✅ ES6 Class (recommended):");

class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    
    levelUp() {
        this.level++;
        console.log(`${this.name} is now level ${this.level}`);
    }
}

const player1 = new Player("Gamer1", 5);
player1.levelUp(); // "Gamer1 is now level 6"

/*
ES6 classes:
- Cleaner syntax
- Throws error if 'new' forgotten
- Still uses prototypes underneath
- Method 'this' still works same way
*/


// ========================================
// 🟣 CONTROLLING 'this' - call/apply/bind
// ========================================

console.log("\n=== CONTROLLING 'this' ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Three methods to manually set 'this':
1. .call(thisArg, arg1, arg2, ...)
2. .apply(thisArg, [arg1, arg2, ...])
3. .bind(thisArg) - returns new function

These are essential for controlling context!
*/

// 1️⃣ .call() - Execute immediately with specific 'this'
console.log("1. .call() method:");

function introduce(title) {
    console.log(`${title} ${this.name}, from ${this.city}`);
}

const person2 = { name: "Mayank", city: "Mumbai" };
const person3 = { name: "Raj", city: "Delhi" };

introduce.call(person2, "Mr."); // "Mr. Mayank, from Mumbai"
introduce.call(person3, "Dr."); // "Dr. Raj, from Delhi"

/*
.call() syntax:
fn.call(thisArg, arg1, arg2, ...)
- Executes immediately
- First parameter sets 'this'
- Rest are function arguments
*/

// 2️⃣ .apply() - Same as call, but args as array
console.log("\n2. .apply() method:");

function greet(greeting, farewell) {
    console.log(`${greeting} ${this.name}!`);
    console.log(`${farewell}!`);
}

const user4 = { name: "Priya" };

// call - individual args
greet.call(user4, "Hello", "Goodbye");

// apply - array of args
greet.apply(user4, ["Hi", "Bye"]);

/*
.call vs .apply:
- .call(thisArg, a, b, c)
- .apply(thisArg, [a, b, c])

Use apply when you have array of arguments!

Example use case:
Math.max(...numbers) vs Math.max.apply(null, numbers)
*/

// 3️⃣ .bind() - Return new function with bound 'this'
console.log("\n3. .bind() method:");

function displayInfo(detail) {
    console.log(`${this.name}: ${detail}`);
}

const employee = { name: "Employee" };

// Create bound function
const boundDisplay = displayInfo.bind(employee);

// Execute later
boundDisplay("Working"); // "Employee: Working"
boundDisplay("Resting"); // "Employee: Resting"

/*
.bind() characteristics:
- Returns NEW function (doesn't execute immediately)
- 'this' is permanently bound
- Can be called multiple times
- Can pre-fill arguments (partial application)

Perfect for:
- Storing callback functions
- Event listeners that need context
- setTimeout callbacks
*/

// 4️⃣ Partial application with bind
console.log("\n4. Partial application:");

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2); // Pre-fill first argument
console.log(double(5)); // 10
console.log(double(10)); // 20

/*
Bind can pre-fill arguments!
Useful for creating specialized versions of functions
*/

// 5️⃣ Real-world example - removing event listeners
console.log("\n5. Real-world: event listener context:");

/*
// In browser:
class Modal {
    constructor() {
        this.isOpen = false;
    }
    
    open() {
        this.isOpen = true;
        // ❌ Wrong - loses 'this'
        // document.querySelector('.close').addEventListener('click', this.close);
        
        // ✅ Correct - bind preserves 'this'
        document.querySelector('.close').addEventListener(
            'click',
            this.close.bind(this)
        );
    }
    
    close() {
        this.isOpen = false;
        console.log("Modal closed");
    }
}

// Tip: Save bound function to remove later
this.boundClose = this.close.bind(this);
document.querySelector('.close').addEventListener('click', this.boundClose);
// Can remove later:
// document.querySelector('.close').removeEventListener('click', this.boundClose);
*/


// ========================================
// 🔐 IMPLICIT 'this' IN COMPLEX SCENARIOS
// ========================================

console.log("\n=== COMPLEX 'this' SCENARIOS ===\n");

// 1️⃣ setTimeout/setInterval loses context
console.log("1. setTimeout context loss:");

const timer1 = {
    seconds: 0,
    
    start: function() {
        // ❌ Wrong - loses context
        // setInterval(function() {
        //     this.seconds++; // 'this' is global!
        // }, 1000);
        
        // ✅ Correct - arrow preserves context
        setInterval(() => {
            this.seconds++;
            console.log(`Timer: ${this.seconds}s`);
        }, 1000);
    }
};

// timer1.start(); // Would run for 3 seconds

// 2️⃣ Array methods with callbacks
console.log("\n2. Array methods and 'this':");

const scores = {
    points: 0,
    games: [100, 200, 150],
    
    total: function() {
        // ❌ Wrong - 'this' lost in callback
        // let sum = 0;
        // this.games.forEach(function(score) {
        //     sum += score;
        //     console.log(this.points); // undefined!
        // });
        
        // ✅ Correct - arrow preserves 'this'
        let sum = 0;
        this.games.forEach((score) => {
            sum += score;
            console.log(`Point calculation in ${this.points}`); // ✅ works
        });
        
        return sum;
    }
};

console.log("Total:", scores.total());

// 3️⃣ Promises and fetch
console.log("\n3. Promises and 'this':");

const dataFetcher = {
    baseUrl: "https://api.example.com",
    
    getData: function() {
        // ❌ Wrong - normal function loses context
        // fetch(this.baseUrl + '/data')
        //     .then(function(res) {
        //         console.log(this.baseUrl); // undefined!
        //     });
        
        // ✅ Correct - arrow preserves context
        fetch(this.baseUrl + '/data')
            .then((res) => res.json())
            .then((data) => {
                console.log(`Fetched from ${this.baseUrl}`); // ✅ works
            });
    }
};


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What does 'this' refer to?
A: The object that is executing the current code
   Value determined by HOW function is called (context)

Q2: What is 'this' in global scope?
A: Browser → window object
   Node.js → empty object {} (in module scope)
   Use globalThis for universal access

Q3: What is 'this' in regular function?
A: Global object (non-strict) or undefined (strict mode)
   UNLESS called on object (then 'this' = that object)

Q4: What is 'this' in arrow function?
A: Inherits parent's 'this' (lexical binding)
   Captured at definition time, not call time

Q5: What happens with 'new' keyword?
A: 'this' = the new object being created
   Constructor fills in properties via 'this'

Q6: How does .call() work?
A: Executes function immediately with specific 'this'
   Syntax: fn.call(thisArg, arg1, arg2, ...)

Q7: How does .apply() differ from .call()?
A: .apply takes arguments as array
   .call takes arguments individually
   Example: fn.apply(this, [a,b]) vs fn.call(this, a, b)

Q8: What does .bind() do?
A: Returns NEW function with permanently bound 'this'
   Doesn't execute immediately
   Used for storing callbacks, event listeners

Q9: Arrow functions - advantage or problem?
A: Advantage in callbacks (preserve context)
   Problem in object methods (use regular function)
   Never use in constructors

Q10: Why did I lose 'this' in setTimeout?
A: setTimeout passes function to different context
   'this' becomes global
   Solution: Use arrow function

Q11: How to fix 'this' in event listeners?
A: Use arrow function: el.addEventListener('click', () => {...})
   Or use bind: el.addEventListener('click', this.method.bind(this))

Q12: What about async/await and 'this'?
A: Async functions preserve 'this' in arrow form
   But promises inside might need arrow functions

Q13: Class methods and 'this'?
A: 'this' = instance (in methods)
   Same as constructor functions
   Static methods have 'this' = class

Q14: This in nested functions?
A: Each function level gets own 'this'
   Deeply nested = easy to lose context
   Arrow functions help preserve

Q15: When explicitly set 'this' with call/apply/bind?
A: call/apply - when you need 'this' immediately
   bind - when you need 'this' later (callbacks)
   Manual setting - rare but important for control
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. PRESERVING CONTEXT IN CLASS METHODS
*/
class UserManager {
    constructor(name) {
        this.name = name;
        // Bind methods to prevent context loss
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        console.log(`${this.name} handled click`);
    }
    
    // Or use arrow function as class property (newer syntax)
    handleSubmit = (event) => {
        console.log(`${this.name} handled submit`);
    }
}

/*
2. MIXIN WITH CALL
*/
function Loggable(msg) {
    this.log = function() {
        console.log(`[${this.name}] ${msg}`);
    };
}

function Entity(name) {
    this.name = name;
    Loggable.call(this, "Entity message"); // Mix in with correct 'this'
}

const entity = new Entity("Test");
// entity.log(); // "[Test] Entity message"

/*
3. DEBOUNCE WITH BIND
*/
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

class SearchBox {
    constructor() {
        this.query = "";
        this.search = debounce(this.search.bind(this), 300);
    }
    
    search() {
        console.log(`Searching for: ${this.query}`);
    }
}


console.log("\n✅ 'this' Mastery Complete!");
