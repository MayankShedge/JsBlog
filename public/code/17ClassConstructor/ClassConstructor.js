// ========================================
// 🏛️ CLASS & CONSTRUCTOR - ES6 CLASSES COMPLETE MASTERCLASS
// ========================================

/*
ES6 Classes = Modern syntax for object-oriented programming
Built on top of prototypes (syntactic sugar)
Cleaner, more readable than constructor functions

⭐ INTERVIEW IMPORTANCE: CRITICAL (95% of interviews)
Most asked: How do classes work? extends vs super?
Constructors, static methods, getters/setters, inheritance

Key Insight:
ES6 classes ARE constructor functions underneath
They're just cleaner syntax
Both use prototypes, same mechanism
*/

// ========================================
// 🟢 CLASS BASICS - FUNDAMENTALS
// ========================================

console.log("=== CLASS BASICS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Classes provide cleaner syntax than constructor functions
Auto-setup of methods on prototype
Forced use of 'new' keyword (throws error without it)
*/

// 1️⃣ Simple class
console.log("1. Basic class:");

class User {
    constructor(username, email) {
        // Constructor runs when 'new' is used
        this.username = username;
        this.email = email;
    }
    
    // Methods automatically added to prototype
    greet() {
        return `Hello ${this.username}`;
    }
    
    displayEmail() {
        console.log(`Email: ${this.email}`);
    }
}

const user1 = new User("Mayank", "mayank@gmail.com");
console.log(user1.greet()); // "Hello Mayank"
user1.displayEmail(); // "Email: mayank@gmail.com"

/*
What class does:
1. Creates constructor function
2. Methods go to prototype automatically
3. Enforces 'new' keyword (throws error without)
4. Cleaner, more readable syntax
*/

// 2️⃣ Behind the scenes - class is constructor function
console.log("\n2. Class === Constructor function:");

// This class...
class Person {
    constructor(name) {
        this.name = name;
    }
    
    introduce() {
        return `I am ${this.name}`;
    }
}

// Is equivalent to this...
function PersonFunc(name) {
    this.name = name;
}
PersonFunc.prototype.introduce = function() {
    return `I am ${this.name}`;
};

const p1 = new Person("John");
const p2 = new PersonFunc("Jane");

console.log(p1.introduce()); // "I am John"
console.log(p2.introduce()); // "I am Jane"
console.log(typeof Person); // "function"

/*
⭐ INTERVIEW GOLD:
Classes are NOT a new type
They're just syntactic sugar over constructor functions
Under the hood: still using prototypes!
*/

// 3️⃣ Forcing 'new' keyword
console.log("\n3. Classes require 'new':");

class Student {
    constructor(name) {
        this.name = name;
    }
}

const s1 = new Student("Raj"); // ✅ Works
console.log("Student created:", s1.name);

// const s2 = Student("Yash"); // ❌ Error: Class constructor requires 'new'

/*
Advantage of classes:
- Prevents accidental global variable creation
- Forces proper object creation
- Cleaner error messages
*/

// 4️⃣ Class properties and methods
console.log("\n4. Class properties and methods:");

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    // Instance method
    getSalary() {
        return this.salary;
    }
    
    // Instance method with logic
    giveRaise(amount) {
        this.salary += amount;
        return `New salary: ${this.salary}`;
    }
}

const emp = new Employee("Priya", 50000);
console.log(emp.getSalary()); // 50000
console.log(emp.giveRaise(5000)); // "New salary: 55000"


// ========================================
// 🔵 STATIC METHODS - CLASS-LEVEL METHODS
// ========================================

console.log("\n=== STATIC METHODS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Static methods belong to CLASS, not instances
Called on class itself, not on instances
Common use: utility functions, factory methods

Why separate?
- Some methods don't need instance data
- Organizational clarity
- Clear intent
*/

// 1️⃣ Static methods basics
console.log("1. Static methods:");

class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159; // Static property
}

// Called on class, not instance
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.multiply(4, 2)); // 8
console.log(MathUtils.PI); // 3.14159

// ❌ Cannot call on instance
// const utils = new MathUtils();
// utils.add(5, 3); // Error!

/*
Static characteristics:
- No 'this' (or 'this' = class)
- Cannot access instance properties
- Perfect for utilities and factories
- Not inherited by instances
*/

// 2️⃣ Static vs instance methods
console.log("\n2. Static vs instance methods:");

class Database {
    constructor(name) {
        this.name = name;
    }
    
    // Instance method - needs instance data
    connect() {
        console.log(`Connecting to ${this.name}`);
    }
    
    // Static method - doesn't need instance
    static createConnection(host, port) {
        return `Connection to ${host}:${port}`;
    }
}

const db = new Database("myapp");
db.connect(); // ✅ Uses this.name
console.log(Database.createConnection("localhost", 3000)); // ✅ Static utility

// 3️⃣ Factory pattern with static
console.log("\n3. Factory pattern:");

class User3 {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    
    // Static factory method
    static createAdmin(name) {
        return new User3(name, "admin");
    }
    
    static createGuest(name) {
        return new User3(name, "guest");
    }
}

const admin = User3.createAdmin("Mayank");
const guest = User3.createGuest("Yash");

console.log("Admin:", admin.name, admin.role);
console.log("Guest:", guest.name, guest.role);

/*
Factory pattern benefits:
- Clear intent
- Can add validation
- Can configure before returning
- Cleaner than directly calling new
*/


// ========================================
// 🟠 GETTERS & SETTERS
// ========================================

console.log("\n=== GETTERS & SETTERS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Getters: get property value with logic
Setters: set property value with validation
Look like properties, actually methods
Useful for computed properties, validation
*/

// 1️⃣ Getters and setters basics
console.log("1. Getters and setters:");

class BankAccount {
    constructor(balance) {
        this._balance = balance; // Convention: _ means private
    }
    
    // Getter - no parentheses when called
    get balance() {
        console.log("Getting balance...");
        return this._balance;
    }
    
    // Setter - looks like property assignment
    set balance(amount) {
        if (amount < 0) {
            console.log("❌ Balance cannot be negative!");
            return;
        }
        console.log("Setting balance...");
        this._balance = amount;
    }
}

const account = new BankAccount(1000);
console.log(account.balance); // Calls getter (no parentheses!)
account.balance = 2000; // Calls setter
console.log(account.balance); // 2000
account.balance = -100; // ❌ Rejected

/*
Getters/Setters characteristics:
- No parentheses when called (look like properties)
- Can have logic (validation, computation)
- Useful for encapsulation
- Common in modern frameworks
*/

// 2️⃣ Computed properties with getters
console.log("\n2. Computed properties:");

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Computed property
    get area() {
        return this.width * this.height;
    }
    
    get perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 4);
console.log("Area:", rect.area); // 20 (computed, not stored)
console.log("Perimeter:", rect.perimeter); // 18 (computed)

/*
Benefits:
- Computed values (not stored)
- Look like properties
- Can combine multiple values
*/

// 3️⃣ Validation in setters
console.log("\n3. Validation in setters:");

class User4 {
    constructor(email) {
        this._email = "";
        this.email = email; // Use setter for validation
    }
    
    get email() {
        return this._email;
    }
    
    set email(value) {
        if (!value.includes("@")) {
            console.log("❌ Invalid email!");
            return;
        }
        this._email = value;
    }
}

const user4 = new User4("mayank@gmail.com");
console.log("Email:", user4.email);

user4.email = "invalid"; // ❌ Rejected
console.log("Email:", user4.email); // Still old value

user4.email = "new@gmail.com"; // ✅ Accepted
console.log("Email:", user4.email);


// ========================================
// 🔴 INHERITANCE - EXTENDS & SUPER
// ========================================

console.log("\n=== INHERITANCE ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL (Asked 85%+ interviews)
extends keyword: child class inherits from parent
super keyword: access parent properties/methods
Prototype chain: automatically set up

This is the core of OOP!
*/

// 1️⃣ Basic inheritance
console.log("1. Basic inheritance:");

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks!`);
    }
    
    getInfo() {
        return `${this.name} is a ${this.breed}`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // "Buddy barks!" (overridden method)
console.log(dog.getInfo()); // "Buddy is a Golden Retriever"
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

/*
Inheritance flow:
1. extends creates prototype link
2. super() calls parent constructor
3. Child can override parent methods
4. Child can add new methods
5. instanceof works through chain
*/

// 2️⃣ Super keyword - accessing parent
console.log("\n2. Super keyword:");

class Vehicle {
    constructor(type) {
        this.type = type;
    }
    
    describe() {
        return `This is a ${this.type}`;
    }
}

class Car extends Vehicle {
    constructor(type, brand) {
        super(type); // Must call before using 'this'
        this.brand = brand;
    }
    
    describe() {
        // Access parent method
        const parentDesc = super.describe();
        return `${parentDesc} by ${this.brand}`;
    }
}

const car = new Car("sedan", "Toyota");
console.log(car.describe()); // "This is a sedan by Toyota"

/*
super rules:
1. Must call super() first in child constructor
2. Before using 'this' in child
3. super.method() accesses parent method
4. Can extend and customize
*/

// 3️⃣ Multi-level inheritance
console.log("\n3. Multi-level inheritance:");

class LivingBeing {
    constructor(alive) {
        this.alive = alive;
    }
    
    isAlive() {
        return this.alive;
    }
}

class Mammal extends LivingBeing {
    constructor(alive, hasFur) {
        super(alive);
        this.hasFur = hasFur;
    }
    
    canBreathe() {
        return true;
    }
}

class Human extends Mammal {
    constructor(name, alive, hasFur) {
        super(alive, hasFur);
        this.name = name;
    }
    
    think() {
        return "I think, therefore I am";
    }
}

const person = new Human("Mayank", true, true);
console.log("Alive:", person.isAlive()); // true (from LivingBeing)
console.log("Can breathe:", person.canBreathe()); // true (from Mammal)
console.log(person.think()); // "I think..." (from Human)

// 4️⃣ Method overriding
console.log("\n4. Method overriding:");

class Shape {
    getArea() {
        return "Area not defined";
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

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    
    getArea() {
        return this.side ** 2;
    }
}

const circle = new Circle(5);
const square = new Square(4);

console.log("Circle area:", circle.getArea()); // 78.5...
console.log("Square area:", square.getArea()); // 16

/*
Overriding:
- Child method replaces parent
- Access parent with super.method()
- Enables polymorphism
*/


// ========================================
// 🟣 PRIVATE & PROTECTED FIELDS
// ========================================

console.log("\n=== PRIVATE FIELDS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Private fields: # prefix (ES2022)
Not accessible outside class
Truly private (not just convention)
Better than underscore convention
*/

// 1️⃣ Private fields
console.log("1. Private fields:");

class Secret {
    #privateData = "secret"; // Private field
    publicData = "public"; // Public field
    
    getSecret() {
        return this.#privateData; // Can access inside
    }
    
    setSecret(value) {
        this.#privateData = value;
    }
}

const secret = new Secret();
console.log(secret.publicData); // ✅ "public"
console.log(secret.getSecret()); // ✅ "secret"
// console.log(secret.#privateData); // ❌ SyntaxError (can't access outside)

/*
Private fields:
- Only accessible inside class
- Enforced by JavaScript engine
- Not just convention like _
- Modern approach (ES2022)
*/

// 2️⃣ Private methods
console.log("\n2. Private methods:");

class BankAccount2 {
    #balance = 0;
    
    deposit(amount) {
        this.#validateAmount(amount);
        this.#balance += amount;
        return this.#balance;
    }
    
    #validateAmount(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive");
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount2();
console.log(acc.deposit(100)); // 100
// acc.#validateAmount(50); // ❌ Error (private method)

/*
Private methods:
- Helper methods not exposed
- Implementation details hidden
- Cleaner API
*/

// 3️⃣ Protected pattern (convention)
console.log("\n3. Protected pattern (convention):");

class Database2 {
    constructor(name) {
        this._name = name; // Convention: _ = protected
    }
    
    // Can be overridden by subclasses
    _getConnection() {
        return `Connected to ${this._name}`;
    }
}

class SecureDB extends Database2 {
    _getConnection() {
        // Override protected method
        return `Secure: ${super._getConnection()}`;
    }
}

const db2 = new SecureDB("mydb");
console.log(db2._getConnection()); // "Secure: Connected to mydb"


// ========================================
// 🟢 BEHIND THE SCENES - Constructor Functions
// ========================================

console.log("\n=== CONSTRUCTOR FUNCTIONS EQUIVALENT ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Classes are built on constructor functions
Understanding both helps understand JavaScript

Show class equivalent in constructor function form
*/

// 1️⃣ Simple class vs constructor function
console.log("1. Class equivalent:");

// ES6 Class
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    
    teach() {
        return `${this.name} teaches ${this.subject}`;
    }
    
    static sayHi() {
        return "Hello from Teacher";
    }
}

// Equivalent constructor function
function TeacherFunc(name, subject) {
    this.name = name;
    this.subject = subject;
}

TeacherFunc.prototype.teach = function() {
    return `${this.name} teaches ${this.subject}`;
};

TeacherFunc.sayHi = function() {
    return "Hello from Teacher";
};

const t1 = new Teacher("Mayank", "JS");
const t2 = new TeacherFunc("Raj", "Python");

console.log(t1.teach()); // "Mayank teaches JS"
console.log(t2.teach()); // "Raj teaches Python"
console.log(Teacher.sayHi()); // "Hello from Teacher"
console.log(TeacherFunc.sayHi()); // "Hello from Teacher"

// 2️⃣ Inheritance behind the scenes
console.log("\n2. Inheritance equivalent:");

// ES6 Class inheritance
class Parent {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello ${this.name}`;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

// Equivalent constructor function
function ParentFunc(name) {
    this.name = name;
}

ParentFunc.prototype.greet = function() {
    return `Hello ${this.name}`;
};

function ChildFunc(name, age) {
    ParentFunc.call(this, name); // Same as super()
    this.age = age;
}

// Link prototypes
ChildFunc.prototype = Object.create(ParentFunc.prototype);
ChildFunc.prototype.constructor = ChildFunc;

const c1 = new Child("Mayank", 22);
const c2 = new ChildFunc("Raj", 25);

console.log(c1.greet()); // "Hello Mayank"
console.log(c2.greet()); // "Hello Raj"

/*
Behind the scenes:
- Classes use same mechanism as constructor functions
- super() = Parent.call(this, ...)
- extends = Object.create(Parent.prototype)
- Methods on prototype automatically
- Static methods on constructor
*/


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What are ES6 classes?
A: Syntactic sugar over constructor functions
   Cleaner syntax, same mechanism (prototypes)

Q2: How does class inheritance work?
A: extends creates prototype chain
   super() calls parent constructor
   Prototype chain set up automatically

Q3: What does super() do?
A: Calls parent constructor
   Must be called before using 'this' in child
   Sets up parent properties in child

Q4: Static methods vs instance methods?
A: Static: on class, called as Class.method()
   Instance: on object, called as obj.method()
   Static doesn't have access to instance

Q5: Can you extend a class?
A: Yes, use extends keyword
   Can have multiple inheritance levels
   Methods can be overridden

Q6: What are private fields?
A: Fields with # prefix
   Only accessible inside class
   Truly private (enforced by engine)

Q7: Getters and setters - what are they?
A: Getters: get property value
   Setters: set property value
   Look like properties, actually methods

Q8: How to validate in setters?
A: Add logic before assignment
   Reject invalid values
   Common pattern for data validation

Q9: Can classes have static properties?
A: Yes, modern syntax
   Belong to class, not instances

Q10: Is constructor required in class?
A: No, if not needed
   Default constructor created automatically

Q11: How to call parent method?
A: Use super.methodName()
   Can extend parent behavior

Q12: instanceof with inheritance?
A: Works through entire chain
   obj instanceof Child, obj instanceof Parent

Q13: Can you use class without new?
A: No, throws error
   Enforces proper instantiation

Q14: Method overriding - what happens?
A: Child method replaces parent
   Parent can be called with super
   Enables polymorphism

Q15: How are classes transpiled?
A: To constructor functions
   Methods to prototype
   Static to constructor
   Inheritance to prototype chain
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. ABSTRACT CLASS PATTERN
*/
class Animal2 {
    constructor(name) {
        if (new.target === Animal2) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
    }
    
    speak() {
        throw new Error("Must implement speak()");
    }
}

class Dog2 extends Animal2 {
    speak() {
        return `${this.name} barks`;
    }
}

// const a = new Animal2("test"); // ❌ Error
const d = new Dog2("Buddy");
console.log(d.speak()); // "Buddy barks"

/*
2. SINGLETON PATTERN
*/
class DatabaseConnection {
    static instance;
    
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        this.connected = true;
        DatabaseConnection.instance = this;
    }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // true (same instance!)

/*
3. BUILDER PATTERN
*/
class UserBuilder {
    constructor(name) {
        this.name = name;
    }
    
    withEmail(email) {
        this.email = email;
        return this;
    }
    
    withAge(age) {
        this.age = age;
        return this;
    }
    
    build() {
        return new User5(this.name, this.email, this.age);
    }
}

class User5 {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

const user = new UserBuilder("Mayank")
    .withEmail("mayank@gmail.com")
    .withAge(22)
    .build();

console.log(user);

console.log("\n✅ Classes & Constructors Mastery Complete!");
