// ========================================
// 🎯 GETTERS & SETTERS - PROPERTY ACCESS CONTROL MASTERCLASS
// ========================================

/*
Getters & Setters = Methods that look like properties
Intercept property read/write with custom logic
Enable data validation, transformation, and encapsulation

⭐ INTERVIEW IMPORTANCE: HIGH (85% of interviews)
Most asked: How do they work? When to use? Recursion issue?
Used in all modern frameworks (React, Vue, Angular)
Essential for creating robust APIs

Key Insight:
Getters & Setters = Bridge between properties and methods
Look like properties, actually methods with logic
Enable "virtual properties" with computed values
*/

// ========================================
// 🟢 GETTER & SETTER BASICS
// ========================================

console.log("=== GETTERS & SETTERS BASICS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL
Getters: get value with custom logic
Setters: set value with custom logic
Called without parentheses (look like properties)
*/

// 1️⃣ Simple getter and setter in class
console.log("1. Basic getter and setter:");

class User {
    constructor(email, password) {
        this._email = email; // Convention: _ = internal/private
        this._password = password;
    }
    
    // Getter - called when you READ the property
    get email() {
        console.log("Getter called!");
        return this._email.toUpperCase();
    }
    
    // Setter - called when you SET the property
    set email(value) {
        console.log("Setter called!");
        this._email = value;
    }
    
    get password() {
        return this._password.toUpperCase();
    }
    
    set password(value) {
        this._password = value;
    }
}

const user = new User("mayank@gmail.com", "secret123");

// Reading property calls getter
console.log(user.email); // Calls getter - "Getter called!" then "MAYANK@GMAIL.COM"

// Setting property calls setter
user.email = "newemail@gmail.com"; // Calls setter
console.log(user.email); // "NEWEMAIL@GMAIL.COM"

/*
Key characteristics:
- Look like properties (no parentheses!)
- Actually methods with logic
- Getter MUST return something
- Setter MUST take exactly one parameter
- Setter returns undefined (implicitly)
*/

// 2️⃣ The underscore convention
console.log("\n2. Underscore convention for internal properties:");

class BankAccount {
    constructor(balance) {
        this._balance = balance; // _ means "this is internal, don't access directly"
    }
    
    get balance() {
        return this._balance;
    }
    
    set balance(amount) {
        if (amount < 0) {
            console.log("❌ Balance cannot be negative!");
            return;
        }
        this._balance = amount;
    }
    
    get formattedBalance() {
        return `$${this._balance.toFixed(2)}`; // Computed property
    }
}

const account = new BankAccount(1000);
console.log("Balance:", account.balance); // 1000
console.log("Formatted:", account.formattedBalance); // "$1000.00"

account.balance = 500; // ✅ Works
console.log("New balance:", account.balance); // 500

account.balance = -100; // ❌ Rejected
console.log("After invalid set:", account.balance); // Still 500

/*
Why underscore?
- Signals: "This is internal, don't use directly"
- Encourages use of getter/setter
- Not truly private (can still access _balance)
- Convention, not enforcement (unlike #private)
*/

// 3️⃣ Validation in setters
console.log("\n3. Validation in setters:");

class Student {
    constructor(name, grade) {
        this._name = name;
        this._grade = grade;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        if (typeof value !== 'string' || value.length === 0) {
            console.log("❌ Invalid name!");
            return;
        }
        this._name = value;
    }
    
    get grade() {
        return this._grade;
    }
    
    set grade(value) {
        if (value < 0 || value > 100) {
            console.log("❌ Grade must be 0-100!");
            return;
        }
        this._grade = value;
    }
}

const student = new Student("Mayank", 85);
console.log(`${student.name}: ${student.grade}`);

student.grade = 95; // ✅ Valid
console.log(`New grade: ${student.grade}`);

student.grade = 150; // ❌ Invalid
console.log(`After invalid: ${student.grade}`); // Still 95

student.name = ""; // ❌ Invalid
console.log(`After invalid name: ${student.name}`); // Still "Mayank"

/*
Validation benefits:
- Control data quality
- Prevent invalid states
- Business logic centralized
- Single source of truth
*/


// ========================================
// 🔵 THE RECURSION PROBLEM
// ========================================

console.log("\n=== RECURSION PROBLEM ===\n");

/*
⭐ INTERVIEW IMPORTANCE: CRITICAL (Asked 70%+ of getter/setter questions!)
Common mistake: Using same name in getter/setter
Causes infinite recursion → "Maximum call stack size exceeded"

MUST use different variable name (usually _propertyName)
*/

// 1️⃣ The problem - DON'T DO THIS
console.log("1. ❌ WRONG - Causes recursion:");

class BrokenUser {
    constructor(name) {
        this.name = name; // ❌ Wrong!
    }
    
    get name() {
        // This calls getter again!
        return this.name; // ❌ Infinite recursion!
    }
    
    set name(value) {
        // This calls setter again!
        this.name = value; // ❌ Infinite recursion!
    }
}

// const broken = new BrokenUser("Test");
// console.log(broken.name); // ❌ RangeError: Maximum call stack size exceeded!

console.log("❌ Recursion avoided (didn't run broken code)");

/*
Why recursion happens:
1. Write: this.name = value
2. Triggers setter automatically
3. Inside setter: this.name = value (again!)
4. Triggers setter again...
5. Infinite loop → Stack overflow!

Solution: Use different internal property name!
*/

// 2️⃣ The solution - USE THIS
console.log("\n2. ✅ CORRECT - Use different internal name:");

class CorrectUser {
    constructor(name) {
        this._name = name; // Internal storage
    }
    
    get name() {
        // Reads from _name (doesn't trigger getter)
        return this._name;
    }
    
    set name(value) {
        // Sets _name (doesn't trigger setter)
        this._name = value;
    }
}

const correctUser = new CorrectUser("Mayank");
console.log(correctUser.name); // ✅ "Mayank" (no recursion!)

correctUser.name = "Raj";
console.log(correctUser.name); // ✅ "Raj"

/*
Why this works:
1. Write: this._name = value
2. Directly sets _name property
3. No getter/setter triggered
4. Safe, no recursion!

Rule: Use different name for internal storage
Usually: _propertyName convention
*/

// 3️⃣ Multiple properties handling
console.log("\n3. Multiple internal properties:");

class UserProfile {
    constructor(email, password, age) {
        this._email = email;
        this._password = password;
        this._age = age;
    }
    
    get email() { return this._email; }
    set email(value) { this._email = value; }
    
    get password() { return this._password; }
    set password(value) { this._password = value; }
    
    get age() { return this._age; }
    set age(value) { 
        if (value < 0 || value > 150) {
            console.log("Invalid age!");
            return;
        }
        this._age = value; 
    }
}

const profile = new UserProfile("user@example.com", "pass123", 25);
console.log("Email:", profile.email);
console.log("Age:", profile.age);


// ========================================
// 🟠 COMPUTED PROPERTIES (DERIVED VALUES)
// ========================================

console.log("\n=== COMPUTED PROPERTIES ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Getters for computed/derived values
Read-only (no setter needed)
Value calculated on demand
No storage required
*/

// 1️⃣ Computed getter
console.log("1. Computed properties:");

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Computed property (read-only)
    get area() {
        return this.width * this.height;
    }
    
    get perimeter() {
        return 2 * (this.width + this.height);
    }
    
    get diagonal() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
}

const rect = new Rectangle(5, 4);
console.log("Area:", rect.area); // 20 (computed)
console.log("Perimeter:", rect.perimeter); // 18 (computed)
console.log("Diagonal:", rect.diagonal); // 6.4... (computed)

// Changing dimensions updates computed values
rect.width = 10;
console.log("New area:", rect.area); // 40 (recalculated)

/*
Benefits of computed properties:
- No storage overhead
- Always up-to-date
- Transparent calculation
- Read-only (prevents inconsistency)
*/

// 2️⃣ Derived properties with logic
console.log("\n2. Derived properties:");

class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    get age() {
        return new Date().getFullYear() - this.birthYear;
    }
    
    get isAdult() {
        return this.age >= 18;
    }
    
    get status() {
        if (this.age < 13) return "Child";
        if (this.age < 18) return "Teen";
        if (this.age < 65) return "Adult";
        return "Senior";
    }
}

const person = new Person("Mayank", "Shedge", 2002);
console.log("Full name:", person.fullName);
console.log("Age:", person.age);
console.log("Adult?", person.isAdult);
console.log("Status:", person.status);

/*
Powerful pattern:
- Combine multiple properties
- Complex logic centralized
- Single source of truth
- Transparent to user
*/

// 3️⃣ Conditional computed property
console.log("\n3. Conditional computed property:");

class BankAccount2 {
    constructor(balance) {
        this._balance = balance;
    }
    
    get balance() {
        return this._balance;
    }
    
    set balance(amount) {
        this._balance = Math.max(0, amount);
    }
    
    // Computed property based on balance
    get accountStatus() {
        if (this._balance === 0) return "Empty";
        if (this._balance < 1000) return "Low";
        if (this._balance < 10000) return "Medium";
        return "High";
    }
}

const acc = new BankAccount2(500);
console.log("Balance:", acc.balance);
console.log("Status:", acc.accountStatus); // "Low"

acc.balance = 5000;
console.log("Status:", acc.accountStatus); // "Medium"


// ========================================
// 🔴 OBJECT.DEFINEPROPERTY - FUNCTION-BASED GETTERS/SETTERS
// ========================================

console.log("\n=== OBJECT.DEFINEPROPERTY ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH (Asked 60%+ of advanced interviews)
Manual way to create getters/setters
Using Object.defineProperty()
More control, more verbose
Used in libraries and frameworks
*/

// 1️⃣ Defining getter/setter with Object.defineProperty
console.log("1. Object.defineProperty():");

function UserFunc(email, password) {
    this._email = email;
    this._password = password;
    
    // Define email property with getter/setter
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        
        set: function(value) {
            this._email = value;
        },
        
        enumerable: true,
        configurable: true
    });
    
    // Define password property with getter/setter
    Object.defineProperty(this, 'password', {
        get: function() {
            // Don't expose password
            return "***";
        },
        
        set: function(value) {
            this._password = value;
        },
        
        enumerable: false, // Hide from for...in
        configurable: true
    });
}

const usr = new UserFunc("mayank@gmail.com", "secret123");
console.log("Email:", usr.email); // "MAYANK@GMAIL.COM"
console.log("Password:", usr.password); // "***" (hidden!)

usr.email = "newemail@gmail.com";
console.log("New email:", usr.email); // "NEWEMAIL@GMAIL.COM"

// password not enumerable
console.log("Keys:", Object.keys(usr)); // Only shows 'email'

/*
Object.defineProperty syntax:
Object.defineProperty(obj, propertyName, {
    get: function() { ... },
    set: function(value) { ... },
    enumerable: true/false,
    configurable: true/false
})
*/

// 2️⃣ Computed property with defineProperty
console.log("\n2. Computed property with defineProperty:");

function Rectangle2(width, height) {
    this.width = width;
    this.height = height;
    
    Object.defineProperty(this, 'area', {
        get: function() {
            return this.width * this.height;
        },
        
        enumerable: true,
        configurable: true
        // No setter - read-only!
    });
}

const rect2 = new Rectangle2(5, 4);
console.log("Area:", rect2.area); // 20

rect2.area = 100; // Fails silently (no setter)
console.log("After assignment:", rect2.area); // Still 20

/*
Without setter = read-only property
Can't be changed from outside
*/

// 3️⃣ Validation with defineProperty
console.log("\n3. Validation with defineProperty:");

function Age(initialAge) {
    this._age = initialAge;
    
    Object.defineProperty(this, 'age', {
        get: function() {
            return this._age;
        },
        
        set: function(value) {
            if (value < 0 || value > 150) {
                throw new Error("Invalid age!");
            }
            this._age = value;
        },
        
        enumerable: true,
        configurable: true
    });
}

const person2 = new Age(25);
console.log("Age:", person2.age); // 25

person2.age = 30; // ✅ Valid
console.log("New age:", person2.age); // 30

// person2.age = 200; // ❌ Throws error


// ========================================
// 🟣 GETTER/SETTER IN OBJECTS
// ========================================

console.log("\n=== GETTER/SETTER IN OBJECT LITERALS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Can use getters/setters in object literals too
Cleaner syntax than defineProperty
*/

// 1️⃣ Getters/setters in object literal
console.log("1. Object literal getters/setters:");

const user2 = {
    _email: "user@example.com",
    _password: "secret",
    
    get email() {
        return this._email;
    },
    
    set email(value) {
        this._email = value;
    },
    
    get password() {
        return "***";
    },
    
    set password(value) {
        this._password = value;
    }
};

console.log("Email:", user2.email);
console.log("Password:", user2.password);

user2.email = "new@example.com";
console.log("New email:", user2.email);

// 2️⃣ Factory function with getters
console.log("\n2. Factory function with getters:");

function createUser(email, password) {
    return {
        _email: email,
        _password: password,
        
        get email() {
            return this._email;
        },
        
        set email(value) {
            this._email = value;
        }
    };
}

const factoryUser = createUser("factory@example.com", "pass");
console.log("Factory user email:", factoryUser.email);


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What are getters and setters?
A: Methods that look like properties
   Intercept property read (getter) and write (setter)
   Enable validation, transformation, encapsulation

Q2: When to use getters/setters?
A: Validation on property set
   Transformation on property get
   Computed values
   Hiding internal state
   Side effects on change

Q3: What's the underscore convention?
A: _propertyName = internal/private property
   Not enforced, just convention
   Signals "don't access directly"
   Use getter/setter instead

Q4: Why recursion happens?
A: Using same name in getter/setter
   this.name = value triggers setter
   Inside setter, this.name = value again
   Infinite recursion

Q5: How to prevent recursion?
A: Use different internal name
   Usually: _propertyName
   Store actual value in _property
   Getter/setter work with _property

Q6: Can setter return value?
A: No, setters return undefined
   Use different return value if needed
   For validation, throw error instead

Q7: Must getter have setter?
A: No! Can have getter alone (read-only)
   Can have setter alone (weird, uncommon)
   Both together is normal pattern

Q8: What's enumerable in defineProperty?
A: enumerable: true/false
   true = shows in for...in, Object.keys()
   false = hidden from iteration
   Can still access directly

Q9: What's configurable in defineProperty?
A: configurable: true/false
   true = can change descriptor later
   false = locked, permanent

Q10: Object literal vs class getters/setters?
A: Same functionality, different syntax
   Classes: cleaner, modern
   Objects: more control with defineProperty
   Both achieve same result

Q11: Can you have computed properties without setter?
A: Yes! Read-only property
   Get returns computed value
   No setter = cannot change
   Perfect for derived values

Q12: Getter called how many times?
A: Every time property accessed
   No caching (recalculated each time)
   If expensive, consider caching

Q13: Setter called when?
A: Every time property assigned
   Even if same value
   Can use to track changes

Q14: Are getters/setters faster than methods?
A: Same performance
   Just syntax sugar
   Cleaner API, no performance cost

Q15: Real-world use cases?
A: React (component state)
   Vue (reactivity)
   Libraries (property validation)
   APIs (controlled access)
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. VALIDATION PATTERN
*/
class ValidatedUser {
    constructor(email) {
        this._email = "";
        this.email = email; // Use setter for validation
    }
    
    get email() {
        return this._email;
    }
    
    set email(value) {
        if (!value.includes("@")) {
            throw new Error("Invalid email");
        }
        this._email = value;
    }
}

/*
2. COMPUTED PROPERTY PATTERN
*/
class Invoice {
    constructor(items, taxRate) {
        this.items = items;
        this.taxRate = taxRate;
    }
    
    get subtotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
    
    get tax() {
        return this.subtotal * this.taxRate;
    }
    
    get total() {
        return this.subtotal + this.tax;
    }
}

/*
3. LAZY LOADING PATTERN
*/
class Data {
    constructor() {
        this._data = null;
        this._loaded = false;
    }
    
    get data() {
        if (!this._loaded) {
            this._data = this.loadData();
            this._loaded = true;
        }
        return this._data;
    }
    
    loadData() {
        console.log("Loading data...");
        return { /* data */ };
    }
}

/*
4. CHANGE TRACKING PATTERN
*/
class TrackedObject {
    constructor() {
        this._value = 0;
        this._changed = false;
    }
    
    get value() {
        return this._value;
    }
    
    set value(newValue) {
        if (newValue !== this._value) {
            this._value = newValue;
            this._changed = true;
        }
    }
    
    get changed() {
        return this._changed;
    }
    
    reset() {
        this._changed = false;
    }
}

console.log("\n✅ Getters & Setters Mastery Complete!");
