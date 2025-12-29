// ========================================
// 🏗️ OBJECT-ORIENTED PROGRAMMING (OOPS) - MASTERCLASS
// ========================================

/*
OOPS = Programming paradigm for organizing code into reusable objects
Core concepts: Objects, Classes, Inheritance, Encapsulation, Abstraction, Polymorphism

⭐ INTERVIEW IMPORTANCE: CRITICAL (80% of interviews)
Most asked: Object literals, Constructor functions, Prototypes, Classes,
Inheritance, 'this' keyword, new operator

Why OOPS?
✅ Organize code into logical units
✅ Reusability and maintainability
✅ Encapsulation (data + methods together)
✅ Inheritance (code reuse)
✅ Polymorphism (flexibility)

JavaScript OOP Flavors:
1. Object literals (simple objects)
2. Constructor functions (factory pattern)
3. Prototypal inheritance (delegation)
4. ES6 Classes (modern, cleaner syntax)
*/

// ========================================
// 🟢 OBJECT LITERALS - BASICS
// ========================================

console.log("=== OBJECT LITERALS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Object literal = { key: value }
Simplest way to create objects
Good for single instances
*/

// 1️⃣ Simple object
console.log("1. Simple object:");

const user = {
    username: "Mayank",
    loginCount: 8,
    signedIn: true,
    email: "mayank@gmail.com",
    
    // Methods
    getUserDetails: function() {
        console.log(`Username: ${this.username}, LoginCount: ${this.loginCount}`);
    },
    
    greet: function() {
        return `Hello, ${this.username}!`;
    }
};

console.log(user.username);
console.log(user['email']);
user.getUserDetails();
console.log(user.greet());

// 2️⃣ this keyword
console.log("\n2. 'this' keyword:");

const person = {
    name: "John",
    age: 30,
    
    details: function() {
        console.log(this); // Current object
        console.log(this.name); // John
        console.log(this.age); // 30
    }
};

person.details();

/*
'this' refers to:
- In object method: the object itself
- In function: global object (window/global)
- In event handler: the element that triggered
- In arrow function: parent's this
- In constructor: new object being created
*/

// 3️⃣ Add/modify properties
console.log("\n3. Dynamic properties:");

const car = {};
car.brand = "Toyota"; // Add property
car.model = "Camry";
car.start = function() {
    console.log(`${this.brand} ${this.model} started!`);
};

car.start();

// 4️⃣ Nested objects
console.log("\n4. Nested objects:");

const company = {
    name: "TechCorp",
    address: {
        street: "123 Main St",
        city: "Mumbai",
        country: "India"
    },
    employees: [
        { name: "Mayank", role: "Developer" },
        { name: "Raj", role: "Designer" }
    ],
    
    getInfo: function() {
        return `${this.name} is in ${this.address.city}`;
    }
};

console.log(company.getInfo());
console.log(company.employees[0].name);


// ========================================
// 🔵 CONSTRUCTOR FUNCTIONS - FACTORY PATTERN
// ========================================

console.log("\n=== CONSTRUCTOR FUNCTIONS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Constructor function = Factory for creating similar objects
Uses 'new' keyword to create instances
Blueprint for creating multiple objects

Why constructor functions?
✅ Create multiple similar objects
✅ Each instance is separate
✅ Methods can be defined on prototype (shared)
*/

// 1️⃣ Basic constructor
console.log("1. Basic constructor:");

function User(username, email, loginCount) {
    this.username = username;
    this.email = email;
    this.loginCount = loginCount;
    this.signedIn = false;
    
    this.greeting = function() {
        return `Welcome ${this.username}!`;
    };
}

// ⚠️ WITHOUT 'new' - THIS refers to global object (wrong!)
// const userOne = User("Mayank", "mayank@gmail.com", 12);

// ✅ WITH 'new' - THIS refers to new instance (correct!)
const userOne = new User("Mayank", "mayank@gmail.com", 12);
const userTwo = new User("Raj", "raj@gmail.com", 8);
const userThree = new User("Priya", "priya@gmail.com", 15);

console.log("User 1:", userOne.username, userOne.email);
console.log("User 2:", userTwo.username, userTwo.loginCount);
console.log("User 3:", userThree.greeting());

// 2️⃣ The 'new' operator - CRITICAL!
console.log("\n2. 'new' operator steps:");

/*
When you write: const obj = new Constructor(args)

Step 1: Empty object created ({ })
Step 2: Constructor function called (this = new object)
Step 3: 'this' gets injected (properties/methods added)
Step 4: New object returned implicitly
Step 5: obj references the new object

Example:
new User("Mayank", "mayank@gmail.com", 12)
Step 1: {} created
Step 2: User() called with this = {}
Step 3: this.username = "Mayank", etc.
Step 4: Return this (implicitly)
Result: userOne = { username: "Mayank", ... }
*/

// 3️⃣ Explicit return vs implicit
console.log("\n3. Return behavior:");

function BadConstructor(name) {
    this.name = name;
    return "string"; // ❌ Ignored (non-object return)
}

function GoodConstructor(name) {
    this.name = name;
    // ✅ Implicitly returns 'this'
}

const bad = new BadConstructor("Test");
console.log(bad); // { name: "Test" } (return ignored)

// 4️⃣ instanceof operator
console.log("\n4. instanceof:");

console.log(userOne instanceof User); // true
console.log(userOne instanceof Object); // true (everyone inherits from Object)

// 5️⃣ Constructor property
console.log("\n5. Constructor property:");

console.log(userOne.constructor); // [Function: User]
console.log(userOne.constructor === User); // true

// Check object type
if (userOne.constructor === User) {
    console.log("userOne is instance of User");
}


// ========================================
// 🟠 PROTOTYPES & PROTOTYPE CHAIN
// ========================================

console.log("\n=== PROTOTYPES ===\n");

/*
⭐ INTERVIEW IMPORTANCE: EXTREMELY HIGH
Prototype = Object that other objects inherit from
Every function has a prototype property
Every object has __proto__ (internal link)

Prototypal inheritance solves memory issue:
With methods in constructor → each instance has copy
With methods on prototype → all instances share same method
*/

// 1️⃣ Methods in constructor (WASTEFUL)
console.log("1. Methods in constructor:");

function Car1(brand) {
    this.brand = brand;
    
    this.start = function() {
        console.log(`${this.brand} started!`);
    };
}

const car1 = new Car1("Toyota");
const car2 = new Car1("Honda");

console.log(car1.start === car2.start); // false (different functions in memory!)

/*
Problem:
- Each instance has its own start() method
- Car1 instance 1 start → memory location A
- Car1 instance 2 start → memory location B
- Wasteful memory usage!
*/

// 2️⃣ Methods on prototype (EFFICIENT)
console.log("\n2. Methods on prototype:");

function Car2(brand) {
    this.brand = brand;
}

// Add method to prototype (shared by all instances)
Car2.prototype.start = function() {
    console.log(`${this.brand} started!`);
};

Car2.prototype.stop = function() {
    console.log(`${this.brand} stopped!`);
};

const car3 = new Car2("Toyota");
const car4 = new Car2("Honda");

console.log(car3.start === car4.start); // true (same function!)
car3.start();
car4.start();

/*
✅ Benefit:
- All instances share same method
- Same memory location
- More efficient
*/

// 3️⃣ Prototype chain
console.log("\n3. Prototype chain:");

function Animal(name) {
    this.name = name;
}

Animal.prototype.sound = function() {
    return "Some sound";
};

function Dog(name, breed) {
    Animal.call(this, name); // Inherit properties
    this.breed = breed;
}

// Link prototype (inheritance)
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.sound = function() {
    return "Woof!";
};

const dog = new Dog("Buddy", "Golden");
console.log(dog.name); // "Buddy" (from Animal)
console.log(dog.sound()); // "Woof!" (from Dog)

/*
Prototype chain:
dog → Dog.prototype → Animal.prototype → Object.prototype → null

When you access dog.name:
1. Check dog (not there)
2. Check Dog.prototype (not there)
3. Check Animal.prototype (not there)
4. Check Object.prototype (not there)
5. Return undefined

⭐ INTERVIEW GOLD: Understanding prototype chain is CRITICAL!
*/

// 4️⃣ Object.create()
console.log("\n4. Object.create():");

const parent = {
    greet: function() {
        return "Hello";
    }
};

// Create object with parent as prototype
const child = Object.create(parent);
child.name = "Child";

console.log(child.greet()); // Inherited method
console.log(child.hasOwnProperty('greet')); // false (inherited)
console.log(child.hasOwnProperty('name')); // true (own property)

// 5️⃣ hasOwnProperty vs 'in' operator
console.log("\n5. Property checking:");

const obj = {
    ownProp: "value"
};
obj.inheritedProp = "inherited";

console.log('ownProp' in obj); // true (own)
console.log('inheritedProp' in obj); // true (own)
console.log(obj.hasOwnProperty('ownProp')); // true
console.log(obj.hasOwnProperty('inheritedProp')); // false (inherited)

/*
'in' operator → checks prototype chain
hasOwnProperty() → only own properties

Use hasOwnProperty when you want own properties only!
*/


// ========================================
// 🔴 ES6 CLASSES - MODERN SYNTAX
// ========================================

console.log("\n=== ES6 CLASSES ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL (95% of modern JS uses classes)
Classes = Syntactic sugar over constructor functions + prototypes
Cleaner, more readable syntax
Behind the scenes: still using prototypes!

Why classes?
✅ Cleaner syntax
✅ More familiar to other languages (Java, Python)
✅ Less confusing than constructor + prototype
✅ Built-in inheritance (extends keyword)
*/

// 1️⃣ Basic class
console.log("1. Basic class:");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    birthday() {
        this.age++;
        return `${this.name} is now ${this.age}`;
    }
}

const person1 = new Person("Mayank", 22);
const person2 = new Person("Raj", 25);

console.log(person1.greet());
console.log(person1.birthday());

/*
Class structure:
class ClassName {
    constructor(params) {
        // Initialize properties
    }
    
    method1() { }
    method2() { }
    
    static staticMethod() { }
    
    get property() { return ...; }
    set property(value) { }
}
*/

// 2️⃣ Static methods
console.log("\n2. Static methods:");

class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.multiply(4, 2)); // 8

/*
Static methods:
- Belong to class, not instances
- Called on class, not instance
- No access to 'this' (or 'this' is the class)
- Good for utility functions
*/

// 3️⃣ Getters and setters
console.log("\n3. Getters and setters:");

class BankAccount {
    constructor(balance) {
        this._balance = balance; // Convention: _ for private
    }
    
    get balance() {
        return this._balance;
    }
    
    set balance(amount) {
        if (amount < 0) throw new Error("Negative balance!");
        this._balance = amount;
    }
}

const account = new BankAccount(1000);
console.log(account.balance); // Getter
account.balance = 500; // Setter
console.log(account.balance);

// account.balance = -100; // Error: Negative balance!

// 4️⃣ Private fields (ES2022)
console.log("\n4. Private fields:");

class User4 {
    #password; // Private field
    
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    
    authenticate(pwd) {
        return this.#password === pwd;
    }
}

const user4 = new User4("Mayank", "secret123");
console.log(user4.username); // "Mayank"
// console.log(user4.#password); // ❌ SyntaxError (private!)
console.log(user4.authenticate("secret123")); // true


// ========================================
// 🟣 INHERITANCE - EXTENDS & SUPER
// ========================================

console.log("\n=== INHERITANCE ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Inheritance = Child class inherits from parent class
extends keyword = establish parent-child relationship
super keyword = access parent methods/constructor
*/

// 1️⃣ Basic inheritance
console.log("1. Basic inheritance:");

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        // Override parent method
        return `${this.name} barks: Woof!`;
    }
}

const dog1 = new Dog("Buddy", "Golden");
console.log(dog1.speak()); // "Buddy barks: Woof!" (overridden)
console.log(dog1.eat()); // "Buddy is eating" (inherited)

// 2️⃣ super keyword
console.log("\n2. super keyword:");

class Vehicle {
    constructor(type) {
        this.type = type;
    }
    
    start() {
        return `${this.type} started`;
    }
}

class Car extends Vehicle {
    constructor(type, doors) {
        super(type); // Must call super first!
        this.doors = doors;
    }
    
    start() {
        const parentMessage = super.start(); // Call parent method
        return `${parentMessage} with ${this.doors} doors`;
    }
}

const car5 = new Car("Sedan", 4);
console.log(car5.start()); // "Sedan started with 4 doors"

/*
super() rules:
- Must call super(args) before using 'this' in constructor
- super.method() calls parent method
- Can override and extend functionality
*/

// 3️⃣ Multiple levels of inheritance
console.log("\n3. Multiple levels:");

class LivingBeing {
    alive() {
        return true;
    }
}

class Mammal extends LivingBeing {
    hasHair() {
        return true;
    }
}

class Human extends Mammal {
    constructor(name) {
        super();
        this.name = name;
    }
    
    think() {
        return "I think, therefore I am";
    }
}

const human = new Human("Mayank");
console.log(human.alive()); // true (from LivingBeing)
console.log(human.hasHair()); // true (from Mammal)
console.log(human.think()); // "I think..." (from Human)

// 4️⃣ instanceof with inheritance
console.log("\n4. instanceof with inheritance:");

console.log(human instanceof Human); // true
console.log(human instanceof Mammal); // true
console.log(human instanceof LivingBeing); // true
console.log(human instanceof Object); // true (everyone!)


// ========================================
// 🟢 COMPOSITION vs INHERITANCE
// ========================================

console.log("\n=== COMPOSITION VS INHERITANCE ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Inheritance = "is-a" relationship
Composition = "has-a" relationship

Modern preference: Composition over inheritance
More flexible, avoids fragile base class problem
*/

// ❌ Inheritance approach (rigid)
console.log("1. Inheritance (rigid):");

class Shape {
    getArea() {}
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

// ✅ Composition approach (flexible)
console.log("\n2. Composition (flexible):");

const squareCalculator = {
    getArea(side) {
        return side * side;
    }
};

const circleCalculator = {
    getArea(radius) {
        return Math.PI * radius ** 2;
    }
};

class Square2 {
    constructor(side) {
        this.side = side;
        this.calculator = squareCalculator;
    }
    
    getArea() {
        return this.calculator.getArea(this.side);
    }
}

class Circle2 {
    constructor(radius) {
        this.radius = radius;
        this.calculator = circleCalculator;
    }
    
    getArea() {
        return this.calculator.getArea(this.radius);
    }
}

/*
Composition benefits:
✅ More flexible
✅ Easy to change behavior
✅ Avoids inheritance hierarchy issues
✅ Easier to test
✅ "Prefer composition over inheritance"
*/


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What does 'new' keyword do?
A: Creates empty object, calls constructor with this bound to it,
   injects properties/methods, returns object

Q2: Explain 'this' keyword
A: Refers to current object context
   In method: the object
   In function: global (or undefined in strict)
   In constructor: new object

Q3: Object literals vs Constructor functions?
A: Object literals: single instance
   Constructor: template for multiple instances

Q4: What is prototype?
A: Object that other objects inherit from
   All functions have prototype property
   Allows method sharing between instances

Q5: Prototype chain explanation?
A: When accessing property, JS checks: object → prototype → parent → Object.prototype
   Chain lookup until found or null

Q6: Difference between __proto__ and prototype?
A: __proto__: reference to parent (internal link)
   prototype: object methods defined on this

Q7: How to achieve inheritance?
A: ES6 classes with extends
   Or: Object.create() + assignment
   Or: Constructor with Function.call()

Q8: What does super do?
A: Calls parent constructor
   Accesses parent methods
   Must be called first in child constructor

Q9: Static methods vs instance methods?
A: Static: on class, called as Class.method()
   Instance: on object, called as obj.method()

Q10: Private fields in classes?
A: Use # prefix: #fieldName
   Only accessible inside class
   Not visible in instances

Q11: Composition vs Inheritance?
A: Inheritance: "is-a" relationship (fragile)
   Composition: "has-a" relationship (flexible)
   Prefer composition

Q12: What is polymorphism?
A: Same method name, different behavior
   Achieved through method overriding
   Allows flexibility

Q13: Encapsulation explanation?
A: Bundle data + methods together
   Hide internal details
   Expose only what's needed

Q14: instanceof operator?
A: Checks if object is instance of class
   Also checks prototype chain
   True if object's [[Prototype]] includes constructor

Q15: How to create private properties (before #)?
A: Convention: _propertyName (underscore prefix)
   Or: Getters/setters with Object.defineProperty()
   Or: Closures (most reliable)
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. MIXINS - Sharing functionality
*/
const canEat = {
    eat() {
        return `${this.name} is eating`;
    }
};

const canWalk = {
    walk() {
        return `${this.name} is walking`;
    }
};

class Person2 {
    constructor(name) {
        this.name = name;
        Object.assign(this, canEat, canWalk);
    }
}

const person3 = new Person2("John");
console.log(person3.eat());
console.log(person3.walk());

/*
2. SINGLETON PATTERN - Only one instance
*/
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        
        this.connection = null;
        Database.instance = this;
    }
    
    connect() {
        this.connection = "Connected to DB";
        return this.connection;
    }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true (same instance!)

/*
3. FACTORY PATTERN - Create objects without specifying exact classes
*/
class Button {}
class Checkbox {}

function createElement(type) {
    if (type === 'button') return new Button();
    if (type === 'checkbox') return new Checkbox();
}

const btn = createElement('button');
const check = createElement('checkbox');

/*
4. OBSERVER PATTERN - Event listeners
*/
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data));
        }
    }
}

const emitter = new EventEmitter();
emitter.on('login', (user) => console.log(`${user} logged in`));
emitter.emit('login', 'Mayank');


console.log("\n✅ OOPS Mastery Complete!");
