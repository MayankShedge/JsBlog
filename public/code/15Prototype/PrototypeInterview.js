// ========================================
// 🔗 PROTOTYPE - JAVASCRIPT'S SOUL - COMPLETE MASTERCLASS
// ========================================

/*
Prototype = The mechanism through which JavaScript implements inheritance
It's how JavaScript objects inherit properties and methods from other objects

⭐ INTERVIEW IMPORTANCE: CRITICAL (95% of interviews ask)
Most asked: What is prototype? How does prototype chain work?
__proto__ vs .prototype, prototype inheritance, prototype pollution

Key Insight:
JavaScript is NOT class-based (even ES6 classes use prototypes underneath)
JavaScript is PROTOTYPE-BASED = objects inherit directly from other objects

Why Prototypes?
✅ Code reuse without copying
✅ Memory efficiency (methods shared, not duplicated)
✅ Dynamic property lookup (flexibility)
✅ Foundation for inheritance patterns
✅ Understanding prototypes = Understanding JavaScript
*/

// ========================================
// 🟢 FUNDAMENTAL CONCEPTS - MUST KNOW
// ========================================

console.log("=== PROTOTYPE FUNDAMENTALS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Three key terms that confuse everyone:
1. .prototype - Property on functions
2. __proto__ - Internal reference on objects
3. Prototype chain - Lookup mechanism

Understanding the difference is ESSENTIAL!
*/

// 1️⃣ Every function has .prototype
console.log("1. Function.prototype:");

function MyFunction() {}

console.log("MyFunction.prototype:", MyFunction.prototype);
console.log("Type:", typeof MyFunction.prototype); // object

/*
Every function automatically gets a .prototype property.
It's an object that contains:
- constructor: reference back to function
- Other properties/methods you add
*/

// 2️⃣ Every object has __proto__
console.log("\n2. Object.__proto__:");

const myObj = { name: "Test" };
console.log("myObj.__proto__:", myObj.__proto__);
console.log("Type:", typeof myObj.__proto__); // object

/*
Every object has __proto__ (internal link).
It points to its prototype (parent's properties).

⚠️ __proto__ is NOT standard (non-enumerable).
Use Object.getPrototypeOf(obj) to access it safely.
*/

// 3️⃣ Accessing prototype safely
console.log("\n3. Safe prototype access:");

console.log(Object.getPrototypeOf(myObj)); // Recommended
console.log(myObj.__proto__); // Works but non-standard
// Both point to the same object

// 4️⃣ Primitive vs Object
console.log("\n4. Primitives have prototypes too:");

const str = "Hello";
console.log(typeof str); // string (primitive)
console.log(str.__proto__); // String.prototype

const num = 42;
console.log(typeof num); // number (primitive)
console.log(num.__proto__); // Number.prototype

const bool = true;
console.log(typeof bool); // boolean (primitive)
console.log(bool.__proto__); // Boolean.prototype

/*
Why primitives have __proto__?
When you call a method on primitive:
1. JS auto-boxes it (wraps in object)
2. Accesses prototype methods
3. Unboxes result
4. Discards wrapper

Example:
"hello".toUpperCase()
→ new String("hello").toUpperCase()
→ "HELLO"
→ (wrapper discarded)
*/


// ========================================
// 🔵 PROTOTYPE CHAIN - THE HIERARCHY
// ========================================

console.log("\n=== PROTOTYPE CHAIN ===\n");

/*
⭐ INTERVIEW IMPORTANCE: EXTREMELY HIGH
Prototype chain = Linked chain of objects
When property not found: lookup follows __proto__ link

Chain lookup:
obj → obj.__proto__ → obj.__proto__.__proto__ → ... → null
(Stop when property found OR null reached)
*/

// Visual example:
console.log("1. Chain visualization:");

const arr = [1, 2, 3];

/*
Chain for arr:
1. arr (Array instance)
   ↓ __proto__
2. Array.prototype (has map, filter, reduce, etc.)
   ↓ __proto__
3. Object.prototype (has toString, hasOwnProperty, etc.)
   ↓ __proto__
4. null (end of chain)
*/

console.log("arr[0]:", arr[0]); // Found in arr itself
console.log("arr.map:", arr.map); // Found in Array.prototype
console.log("arr.toString:", arr.toString); // Found in Object.prototype
// console.log("arr.nonExistent"); // undefined (not found anywhere)

// 2️⃣ Walk the chain manually
console.log("\n2. Walking the chain:");

function walkChain(obj) {
    let current = obj;
    let level = 0;
    
    while (current !== null) {
        console.log(`Level ${level}:`, current);
        current = Object.getPrototypeOf(current);
        level++;
    }
}

// walkChain([1, 2, 3]); // Shows: Array instance → Array.prototype → Object.prototype → null

// 3️⃣ hasOwnProperty vs 'in' operator
console.log("\n3. Own vs inherited properties:");

const obj = { ownProp: "mine" };
Object.setPrototypeOf(obj, { inheritedProp: "parent's" });

console.log("ownProp" in obj); // true (own)
console.log("inheritedProp" in obj); // true (inherited)
console.log(obj.hasOwnProperty("ownProp")); // true
console.log(obj.hasOwnProperty("inheritedProp")); // false

/*
⭐ INTERVIEW GOLD:
'in' operator → checks prototype chain
hasOwnProperty() → only own properties

Use hasOwnProperty when you only want own properties!
(Important for for...in loops)
*/

// 4️⃣ for...in gotcha
console.log("\n4. for...in and inherited properties:");

const parent = { parentProp: "from parent" };
const child = { ownProp: "from child" };
Object.setPrototypeOf(child, parent);

console.log("for...in iteration:");
for (let key in child) {
    console.log(key); // Shows BOTH ownProp and parentProp!
}

console.log("\nWith hasOwnProperty filter:");
for (let key in child) {
    if (child.hasOwnProperty(key)) {
        console.log(key); // Shows only ownProp
    }
}


// ========================================
// 🟠 CONSTRUCTOR FUNCTIONS & PROTOTYPES
// ========================================

console.log("\n=== CONSTRUCTOR FUNCTIONS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: EXTREMELY HIGH
Constructor function = Function used with 'new' keyword
Each constructor has .prototype
All instances link to that .prototype via __proto__

Benefits:
✅ Share methods (on prototype)
✅ Separate data (in instance)
✅ Memory efficient
*/

// 1️⃣ Creating a constructor
console.log("1. Constructor function:");

function User(name, email) {
    // Instance properties
    this.name = name;
    this.email = email;
}

// Prototype methods (shared by all instances)
User.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

User.prototype.updateEmail = function(newEmail) {
    this.email = newEmail;
    return `Email updated to ${newEmail}`;
};

const user1 = new User("Mayank", "mayank@gmail.com");
const user2 = new User("Raj", "raj@gmail.com");

console.log("user1.name:", user1.name);
console.log("user1.greet():", user1.greet());
console.log("user2.greet():", user2.greet());

// 2️⃣ Method sharing verification
console.log("\n2. Methods are shared:");

console.log("user1.greet === user2.greet:", user1.greet === user2.greet); // true!
// Same method, not duplicated

console.log("user1.name === user2.name:", user1.name === user2.name); // false
// Different data

// 3️⃣ Adding properties to instances
console.log("\n3. Instance-specific properties:");

user1.role = "admin"; // Add to user1 only
user1.role2 = "moderator"; // Add another

console.log("user1.role:", user1.role); // "admin"
console.log("user2.role:", user2.role); // undefined (not added)

// Check own properties
console.log("user1 own properties:", Object.keys(user1)); // name, email, role, role2
console.log("user1.__proto__ keys:", Object.keys(user1.__proto__)); // greet, updateEmail, constructor

// 4️⃣ Constructor property
console.log("\n4. Constructor property:");

console.log("user1.constructor:", user1.constructor); // [Function: User]
console.log("user1.constructor === User:", user1.constructor === User); // true

// Check instance type
if (user1.constructor === User) {
    console.log("user1 is instance of User");
}

// 5️⃣ instanceof operator
console.log("\n5. instanceof operator:");

console.log("user1 instanceof User:", user1 instanceof User); // true
console.log("user1 instanceof Object:", user1 instanceof Object); // true
console.log("user1 instanceof String:", user1 instanceof String); // false

/*
instanceof checks: object.__proto__ chain contains Constructor.prototype

Behind the scenes:
user1 instanceof User
→ User.prototype in user1's prototype chain?
→ true!
*/


// ========================================
// 🔴 PROTOTYPE INHERITANCE PATTERNS
// ========================================

console.log("\n=== PROTOTYPE INHERITANCE ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Multiple ways to achieve inheritance:
1. Prototype linkage (__proto__ assignment)
2. Object.setPrototypeOf()
3. Object.create()
4. ES6 classes (uses prototypes under the hood)
*/

// Pattern 1️⃣: Direct __proto__ assignment (old)
console.log("1. Direct __proto__ assignment:");

const parent1 = {
    greet() {
        return `Hello from ${this.name}`;
    }
};

const child1 = Object.create(null); // No prototype
child1.name = "Child";
child1.__proto__ = parent1; // Link to parent

console.log(child1.greet()); // "Hello from Child"

// Pattern 2️⃣: Object.setPrototypeOf (modern, safe)
console.log("\n2. Object.setPrototypeOf():");

const parent2 = {
    describe() {
        return `I am ${this.type}`;
    }
};

const child2 = { type: "Animal" };
Object.setPrototypeOf(child2, parent2); // Link to parent

console.log(child2.describe()); // "I am Animal"

// Pattern 3️⃣: Object.create (most common)
console.log("\n3. Object.create():");

const parent3 = {
    speak() {
        return `${this.sound}!`;
    }
};

const child3 = Object.create(parent3); // Create with parent as prototype
child3.sound = "Woof";

console.log(child3.speak()); // "Woof!"
console.log(child3.hasOwnProperty("speak")); // false (inherited)

// Pattern 4️⃣: Constructor inheritance (most complex but powerful)
console.log("\n4. Constructor function inheritance:");

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Link prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Restore constructor

Dog.prototype.bark = function() {
    return `${this.name} barks!`;
};

const dog = new Dog("Buddy", "Golden");
console.log(dog.name); // "Buddy" (from Animal)
console.log(dog.breed); // "Golden" (from Dog)
console.log(dog.eat()); // "Buddy is eating" (from Animal.prototype)
console.log(dog.bark()); // "Buddy barks!" (from Dog.prototype)

/*
⭐ INTERVIEW GOLD: Constructor inheritance
Steps:
1. Child function defined
2. Parent.call(this, args) in child constructor
3. Child.prototype = Object.create(Parent.prototype)
4. Restore Child.prototype.constructor = Child
5. Add methods to Child.prototype
*/

// Pattern 5️⃣: ES6 Classes (modern way)
console.log("\n5. ES6 Classes (uses prototypes internally):");

class Animal2 {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Animal2 {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    
    meow() {
        return `${this.name} meows!`;
    }
}

const cat = new Cat("Whiskers", "Black");
console.log(cat.eat()); // "Whiskers is eating"
console.log(cat.meow()); // "Whiskers meows!"


// ========================================
// 🟣 MODIFYING PROTOTYPES
// ========================================

console.log("\n=== MODIFYING PROTOTYPES ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
You can add properties to ANY prototype
Even built-in prototypes (but be careful!)

Caution: Modifying Object.prototype affects EVERYTHING!
*/

// 1️⃣ Add method to custom prototype
console.log("1. Add to custom prototype:");

function Calculator(value) {
    this.value = value;
}

Calculator.prototype.add = function(num) {
    this.value += num;
    return this;
};

Calculator.prototype.multiply = function(num) {
    this.value *= num;
    return this;
};

const calc = new Calculator(10);
calc.add(5).multiply(2);
console.log("calc.value:", calc.value); // 30

// 2️⃣ Add to Array.prototype
console.log("\n2. Add to Array.prototype:");

Array.prototype.first = function() {
    return this[0];
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

const nums = [1, 2, 3, 4, 5];
console.log("First:", nums.first()); // 1
console.log("Last:", nums.last()); // 5

// 3️⃣ Add to String.prototype
console.log("\n3. Add to String.prototype:");

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log("hello".capitalize()); // "Hello"

// ⚠️ 4️⃣ DANGER: Modifying Object.prototype
console.log("\n4. ⚠️ DANGER - Don't modify Object.prototype!");

// DON'T do this:
// Object.prototype.danger = function() { console.log("Danger!"); };

// Why? Every for...in loop would iterate this property!
const testObj = { a: 1, b: 2 };
// for (let key in testObj) {
//     console.log(key); // a, b, danger ❌ (unwanted!)
// }

/*
⚠️ INTERVIEW GOLD: Prototype pollution
- Don't add properties to Object.prototype
- Don't modify built-in prototypes
- If you must: use Object.defineProperty with non-enumerable flag
- Libraries mitigate by checking hasOwnProperty
*/


// ========================================
// 🟢 PROTOTYPE CHAIN - ADVANCED
// ========================================

console.log("\n=== ADVANCED PROTOTYPE PATTERNS ===\n");

// 1️⃣ Multi-level inheritance
console.log("1. Multi-level inheritance:");

function LivingBeing() {}
LivingBeing.prototype.isAlive = true;

function Mammal() {}
Object.setPrototypeOf(Mammal.prototype, LivingBeing.prototype);
Mammal.prototype.hasFur = true;

function Dog3() {}
Object.setPrototypeOf(Dog3.prototype, Mammal.prototype);
Dog3.prototype.bark = function() { return "Woof!"; };

const dog3 = new Dog3();
console.log("dog3.isAlive:", dog3.isAlive); // true (from LivingBeing)
console.log("dog3.hasFur:", dog3.hasFur); // true (from Mammal)
console.log("dog3.bark():", dog3.bark()); // "Woof!" (from Dog)

// 2️⃣ Mixin pattern
console.log("\n2. Mixin pattern (multiple inheritance):");

const canEat = {
    eat() { return `${this.name} eats`; }
};

const canWalk = {
    walk() { return `${this.name} walks`; }
};

function Human(name) {
    this.name = name;
    Object.assign(this, canEat, canWalk); // Mix in properties
}

const person = new Human("John");
console.log(person.eat()); // "John eats"
console.log(person.walk()); // "John walks"

/*
Mixin pattern:
- Combine multiple objects
- Each provides different behavior
- More flexible than single inheritance
*/

// 3️⃣ Prototype pollution vulnerability
console.log("\n3. Prototype pollution (security issue):");

/*
const user = JSON.parse('{"name":"user","__proto__":{"admin":true}}');
// Oops! user.__proto__ now has admin: true
// ALL objects now have admin: true! (Dangerous!)

Mitigation:
- Validate input
- Use Object.create(null)
- Check hasOwnProperty before iteration
- Use Map instead of plain objects
*/


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What is prototype?
A: Object from which other objects inherit properties/methods
   Foundation of JavaScript inheritance (before ES6 classes)

Q2: Difference between __proto__ and .prototype?
A: .prototype - Property on functions (defines inherited properties)
   __proto__ - Internal reference on objects (points to prototype)

Q3: What is prototype chain?
A: Chain of linked objects through __proto__
   Lookup follows chain: obj → prototype → parent → ... → null

Q4: How does new operator work with prototypes?
A: Creates object, sets __proto__ to constructor.prototype,
   calls constructor with this = new object, returns object

Q5: What is object.constructor?
A: Property pointing back to function that created it
   Used to identify object type or create similar objects

Q6: How to check if property is inherited?
A: hasOwnProperty() checks own properties only
   'in' operator checks own + inherited

Q7: How to modify prototype safely?
A: Use Object.defineProperty() with non-enumerable flag
   Or use Object.assign() for mixins
   Never modify Object.prototype!

Q8: Difference between prototype inheritance and class inheritance?
A: Classes are syntactic sugar over prototypes
   Both use __proto__ chain underneath
   Classes cleaner syntax, same mechanism

Q9: What is prototype pollution?
A: Modifying Object.prototype affects all objects
   Security vulnerability if input not validated
   Can break application logic

Q10: How to create object with specific prototype?
A: Object.create(proto) - Creates with proto as __proto__
   Object.setPrototypeOf(obj, proto) - Links obj to proto

Q11: Can you have circular prototype chain?
A: No! Would cause infinite loop
   JS engine prevents it

Q12: What happens if property not found in chain?
A: Returns undefined (no error thrown)

Q13: How is constructor property set?
A: When creating function, prototype.constructor = function
   When overwriting prototype, must restore it manually

Q14: Performance: methods in constructor vs prototype?
A: Prototype better - methods shared, not duplicated per instance
   Constructor properties stay on instance

Q15: How to prevent prototype pollution?
A: Validate input
   Use Object.create(null) for user data
   Check hasOwnProperty before iteration
   Use Map instead of plain objects
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. SINGLETON PATTERN - Only one instance using prototypes
*/
const Singleton = (function() {
    let instance;
    
    function SingletonClass() {
        if (instance) return instance;
        this.id = Math.random();
        instance = this;
    }
    
    SingletonClass.prototype.getId = function() {
        return this.id;
    };
    
    return SingletonClass;
})();

const s1 = new Singleton();
const s2 = new Singleton();
console.log("Singleton instances same?", s1 === s2); // true

/*
2. FACTORY PATTERN - Create objects without specifying exact classes
*/
class VehicleFactory {
    static create(type) {
        if (type === 'car') return new Car();
        if (type === 'truck') return new Truck();
    }
}

function Car() {
    this.wheels = 4;
}
Car.prototype.drive = function() { return "Driving car"; };

function Truck() {
    this.wheels = 18;
}
Truck.prototype.drive = function() { return "Driving truck"; };

const vehicle = VehicleFactory.create('car');
console.log("Vehicle created:", vehicle.drive());

/*
3. MODULE PATTERN - Encapsulation using prototypes
*/
const Module = (function() {
    function Private() {
        this.secret = "Hidden";
    }
    
    Private.prototype.reveal = function() {
        return this.secret;
    };
    
    return {
        create: function() {
            return new Private();
        }
    };
})();

const mod = Module.create();
console.log("Secret:", mod.reveal());


console.log("\n✅ Prototype Mastery Complete!");
