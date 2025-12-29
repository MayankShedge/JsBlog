// ========================================
// 🔐 PROPERTY DESCRIPTORS & OBJECT PROPERTIES - COMPLETE MASTERCLASS
// ========================================

/*
Property Descriptors = Hidden metadata about object properties
Control what you can do with a property
Four main flags: value, writable, enumerable, configurable

⭐ INTERVIEW IMPORTANCE: MODERATE-HIGH
Asked in advanced interviews and when dealing with complex objects
Important for understanding deep object behavior
Common in library code and APIs

Key Insight:
Every property has descriptors that control behavior
Most are hidden by default
Can be revealed and modified with Object methods
*/

// ========================================
// 🟢 PROPERTY DESCRIPTORS - FUNDAMENTALS
// ========================================

console.log("=== PROPERTY DESCRIPTORS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Property descriptor = Object describing a property
Has four flags:
1. value - the property's value
2. writable - can be changed?
3. enumerable - appears in loops?
4. configurable - can be deleted/modified?
*/

// 1️⃣ Getting property descriptor
console.log("1. Getting property descriptors:");

const obj = {
    name: "Mayank",
    age: 22,
    isActive: true
};

// Get descriptor for single property
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log("Descriptor for 'name':", descriptor);

/*
Output:
{
  value: 'Mayank',
  writable: true,      // Can be changed
  enumerable: true,    // Shows in for...in
  configurable: true   // Can be deleted/reconfigured
}
*/

// Get all descriptors
const allDescriptors = Object.getOwnPropertyDescriptors(obj);
console.log("All descriptors:", allDescriptors);

/*
Default behavior (normal property creation):
- writable: true (can change)
- enumerable: true (shows in loops)
- configurable: true (can delete/reconfigure)
*/

// 2️⃣ Built-in properties with special descriptors
console.log("\n2. Built-in property descriptors:");

const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("Math.PI descriptor:", piDescriptor);

/*
Output:
{
  value: 3.141592653589793,
  writable: false,      // ❌ Cannot change
  enumerable: false,    // ❌ Won't show in loops
  configurable: false   // ❌ Cannot delete/reconfigure
}

That's why:
Math.PI = 5;
console.log(Math.PI); // Still 3.14159 (not changed!)
*/

// 3️⃣ Verify immutability
console.log("\n3. Verifying immutability:");

console.log("Original Math.PI:", Math.PI);
Math.PI = 5; // Try to change
console.log("After assignment Math.PI:", Math.PI); // Still 3.14159!

// Try to delete
delete Math.PI; // Fails silently
console.log("After delete Math.PI:", Math.PI); // Still exists!

/*
This is HOW JavaScript protects built-in constants!
By setting writable: false and configurable: false
*/


// ========================================
// 🔵 MODIFYING PROPERTY DESCRIPTORS
// ========================================

console.log("\n=== MODIFYING DESCRIPTORS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Object.defineProperty() = Create or modify property with specific flags
Object.defineProperties() = Multiple properties at once
Control behavior after creation
*/

// 1️⃣ Object.defineProperty() - modify single property
console.log("1. Modifying single property:");

const user = {
    name: "Mayank",
    age: 25
};

console.log("Before modification:");
console.log(Object.getOwnPropertyDescriptor(user, "age"));

// Make age non-writable
Object.defineProperty(user, "age", {
    writable: false,
    enumerable: true,
    configurable: true
});

console.log("After modification:");
console.log(Object.getOwnPropertyDescriptor(user, "age"));

// Try to change (will fail)
user.age = 30;
console.log("user.age after assignment:", user.age); // Still 25!

/*
Object.defineProperty(obj, prop, descriptor):
- obj: the object
- prop: property name
- descriptor: object with flags

Flags:
- value: new value
- writable: can change?
- enumerable: show in loops?
- configurable: can reconfigure?
*/

// 2️⃣ Make property non-enumerable
console.log("\n2. Non-enumerable property:");

const person = {
    name: "John",
    secret: "hidden"
};

// Make secret non-enumerable
Object.defineProperty(person, "secret", {
    enumerable: false
});

console.log("Object.keys():", Object.keys(person)); // ["name"] (secret hidden!)
console.log("For...in loop:");
for (const key in person) {
    console.log(key); // Only "name" (secret skipped!)
}

console.log("Direct access still works:");
console.log(person.secret); // ✅ "hidden" (accessible!)

/*
Benefits of non-enumerable:
- Hide internal properties
- Reduce noise in object iteration
- Show only public API
*/

// 3️⃣ Make property non-configurable
console.log("\n3. Non-configurable property:");

const config = {
    apiKey: "secret123"
};

Object.defineProperty(config, "apiKey", {
    configurable: false // Cannot reconfigure or delete
});

// Try to delete
delete config.apiKey;
console.log("After delete:", config.apiKey); // Still exists!

// Try to reconfigure
try {
    Object.defineProperty(config, "apiKey", {
        writable: false
    });
} catch (e) {
    console.log("Cannot reconfigure:", e.message);
}

/*
Non-configurable means:
- Cannot delete property
- Cannot change descriptors
- Permanent configuration
- Use for critical settings
*/

// 4️⃣ Object.defineProperties() - multiple properties
console.log("\n4. Multiple properties:");

const obj3 = {};

Object.defineProperties(obj3, {
    id: {
        value: 1,
        writable: false,
        enumerable: true,
        configurable: false
    },
    name: {
        value: "Default",
        writable: true,
        enumerable: true,
        configurable: true
    },
    _internal: {
        value: "secret",
        writable: false,
        enumerable: false,
        configurable: false
    }
});

console.log("Object created with defineProperties:", obj3);
console.log("Keys (only enumerable):", Object.keys(obj3)); // id, name (not _internal)


// ========================================
// 🟠 THE FOUR DESCRIPTOR FLAGS
// ========================================

console.log("\n=== DESCRIPTOR FLAGS EXPLAINED ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Understanding each flag is crucial
Different combinations = Different behaviors
*/

// 1️⃣ FLAG: writable
console.log("1. Writable flag:");

const test1 = {};
Object.defineProperty(test1, "prop", {
    value: "initial",
    writable: false // ❌ Cannot change
});

test1.prop = "modified";
console.log("test1.prop:", test1.prop); // Still "initial"

const test2 = {};
Object.defineProperty(test2, "prop", {
    value: "initial",
    writable: true // ✅ Can change
});

test2.prop = "modified";
console.log("test2.prop:", test2.prop); // "modified"

/*
writable: true = Property can be changed
writable: false = Property is read-only (const-like)
*/

// 2️⃣ FLAG: enumerable
console.log("\n2. Enumerable flag:");

const test3 = {
    visible: "shown",
    hidden: "not shown"
};

Object.defineProperty(test3, "hidden", {
    value: "not shown",
    enumerable: false // ❌ Hide from loops
});

console.log("Object.keys():", Object.keys(test3)); // ["visible"]
console.log("for...in loop:");
for (const key in test3) {
    console.log(key); // Only "visible"
}
console.log("Direct access:", test3.hidden); // Still accessible!

/*
enumerable: true = Property shown in loops (Object.keys, for...in)
enumerable: false = Property hidden from loops (but still accessible)
*/

// 3️⃣ FLAG: configurable
console.log("\n3. Configurable flag:");

const test4 = {};
Object.defineProperty(test4, "locked", {
    value: 42,
    configurable: false // ❌ Permanent configuration
});

// Try to reconfigure
try {
    Object.defineProperty(test4, "locked", {
        writable: false
    });
    console.log("Reconfigured successfully");
} catch (e) {
    console.log("Cannot reconfigure (in strict mode would throw)");
}

// Try to delete
delete test4.locked;
console.log("test4.locked after delete:", test4.locked); // Still 42

/*
configurable: true = Can reconfigure or delete anytime
configurable: false = Permanent, cannot change descriptors
*/

// 4️⃣ FLAG: value
console.log("\n4. Value flag:");

const test5 = {};
Object.defineProperty(test5, "constant", {
    value: 100,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log("test5.constant:", test5.constant); // 100
test5.constant = 200; // Fails silently
console.log("After assignment:", test5.constant); // Still 100

/*
value: = The actual property value
Combined with writable: false = Read-only constant
*/


// ========================================
// 🔴 PRACTICAL EXAMPLES
// ========================================

console.log("\n=== PRACTICAL EXAMPLES ===\n");

// 1️⃣ Create "private" properties
console.log("1. Private-like properties:");

class BankAccount {
    constructor(balance) {
        this._balance = balance;
        
        // Make _balance non-enumerable
        Object.defineProperty(this, "_balance", {
            enumerable: false,
            configurable: false,
            writable: false
        });
    }
    
    getBalance() {
        return this._balance;
    }
}

const account = new BankAccount(1000);
console.log("Object.keys():", Object.keys(account)); // [] (empty, _balance hidden!)
console.log("Direct access:", account.getBalance()); // Still works!

/*
Benefits:
- Hide internal state
- Show only public methods
- Cleaner object iteration
- Still accessible if needed
*/

// 2️⃣ Create read-only properties
console.log("\n2. Read-only properties:");

const config = {};
Object.defineProperty(config, "version", {
    value: "1.0.0",
    writable: false,
    enumerable: true,
    configurable: false
});

console.log("config.version:", config.version); // "1.0.0"
config.version = "2.0.0"; // Fails silently
console.log("After attempted change:", config.version); // Still "1.0.0"

/*
Use case: API versions, constants, critical settings
*/

// 3️⃣ Validation through property descriptors
console.log("\n3. Validation with getters/setters:");

const user2 = {};

Object.defineProperty(user2, "email", {
    _value: "",
    
    get() {
        return this._value;
    },
    
    set(newEmail) {
        if (!newEmail.includes("@")) {
            console.log("❌ Invalid email!");
            return;
        }
        this._value = newEmail;
    },
    
    enumerable: true,
    configurable: true
});

user2.email = "invalid"; // ❌ Rejected
console.log("user2.email:", user2.email); // Still ""

user2.email = "valid@example.com"; // ✅ Accepted
console.log("user2.email:", user2.email); // "valid@example.com"

/*
Getters/setters in descriptors:
- Intercept read/write
- Add validation
- Compute values
- Very powerful!
*/

// 4️⃣ Iterate over properties selectively
console.log("\n4. Selective iteration:");

const data = {};
Object.defineProperty(data, "id", { value: 1, enumerable: true });
Object.defineProperty(data, "apiKey", { value: "secret", enumerable: false });
Object.defineProperty(data, "name", { value: "Test", enumerable: true });

console.log("Enumerable properties only:");
for (const key in data) {
    console.log(`${key}: ${data[key]}`);
}
// Output:
// id: 1
// name: Test
// (apiKey skipped because enumerable: false)

console.log("\nAll properties (including non-enumerable):");
Object.getOwnPropertyNames(data).forEach(key => {
    console.log(`${key}: ${data[key]}`);
});
// Output:
// id: 1
// apiKey: secret
// name: Test

/*
Use case:
- Hide internal state
- Show only public API
- Cleaner object logging
- Better encapsulation
*/


// ========================================
// 🟣 SEAL & FREEZE
// ========================================

console.log("\n=== SEAL & FREEZE ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Object.seal() = Cannot add/delete properties
Object.freeze() = Cannot add/delete/modify
Object.preventExtensions() = Cannot add properties
*/

// 1️⃣ Object.freeze()
console.log("1. Object.freeze():");

const frozen = { name: "Mayank", age: 25 };
Object.freeze(frozen);

frozen.name = "Raj"; // Fails
frozen.age = 30; // Fails
frozen.city = "Mumbai"; // Fails (cannot add)
delete frozen.name; // Fails (cannot delete)

console.log("Frozen object:", frozen); // Unchanged

/*
freeze():
- No modification
- No adding properties
- No deleting properties
- Completely immutable
*/

// 2️⃣ Object.seal()
console.log("\n2. Object.seal():");

const sealed = { name: "Mayank", age: 25 };
Object.seal(sealed);

sealed.name = "Raj"; // ✅ Works (can modify existing)
sealed.age = 30; // ✅ Works
sealed.city = "Mumbai"; // ❌ Fails (cannot add)
delete sealed.name; // ❌ Fails (cannot delete)

console.log("Sealed object:", sealed); // { name: "Raj", age: 30 }

/*
seal():
- Can modify existing properties
- Cannot add new properties
- Cannot delete properties
- Partially immutable
*/

// 3️⃣ Object.preventExtensions()
console.log("\n3. Object.preventExtensions():");

const limited = { name: "Mayank" };
Object.preventExtensions(limited);

limited.name = "Raj"; // ✅ Works
limited.age = 25; // ❌ Fails (cannot add)
delete limited.name; // ✅ Works (can delete!)

console.log("Limited object:", limited); // { name: "Raj" }

/*
preventExtensions():
- Can modify existing
- Can delete existing
- Cannot add new
- Minimal restriction
*/

// 4️⃣ Comparison table
console.log("\n4. Immutability comparison:");

const comparison = {
    "freeze": "❌ No add/delete/modify",
    "seal": "❌ No add/delete | ✅ Modify",
    "preventExtensions": "❌ No add | ✅ Modify/Delete",
    "normal": "✅ Add/Delete/Modify"
};

for (const [method, behavior] of Object.entries(comparison)) {
    console.log(`${method}: ${behavior}`);
}


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What is a property descriptor?
A: Object that describes a property's behavior
   Has flags: value, writable, enumerable, configurable

Q2: What are the four descriptor flags?
A: value - property value
   writable - can change?
   enumerable - show in loops?
   configurable - can reconfigure/delete?

Q3: How to get property descriptor?
A: Object.getOwnPropertyDescriptor(obj, prop)
   Object.getOwnPropertyDescriptors(obj) - all properties

Q4: How to modify property descriptor?
A: Object.defineProperty(obj, prop, descriptor)
   Object.defineProperties(obj, multiple)

Q5: Default values when creating property normally?
A: writable: true
   enumerable: true
   configurable: true

Q6: Why is Math.PI not writable?
A: Its descriptor has writable: false
   Built-in constants protected this way

Q7: What does enumerable: false do?
A: Property won't appear in:
   - for...in loops
   - Object.keys()
   - Object.entries()
   But still accessible via direct access!

Q8: What does configurable: false do?
A: Cannot reconfigure descriptor
   Cannot delete property
   Permanent configuration

Q9: What's difference between delete and writable?
A: writable: false = Cannot change existing value
   configurable: false = Cannot delete property

Q10: How to create read-only property?
A: Object.defineProperty(obj, prop, {
       value: something,
       writable: false
   })

Q11: Object.freeze vs Object.seal?
A: freeze() - no modification at all
   seal() - can modify, cannot add/delete

Q12: Can frozen object properties be changed?
A: No, completely immutable
   Modifications fail silently (or error in strict)

Q13: Use case of non-enumerable properties?
A: Hide internal state
   Show only public API
   Cleaner object logging

Q14: How to iterate including non-enumerable?
A: Object.getOwnPropertyNames(obj)
   Shows all properties (including non-enumerable)

Q15: Can you make property enumerable later?
A: Yes, if configurable: true
   Use Object.defineProperty again
   If configurable: false, cannot change
*/


// ========================================
// 💼 PRODUCTION PATTERNS
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. API RESPONSE PROTECTION
*/
function processAPIResponse(data) {
    const cleaned = {};
    
    // Copy with controlled properties
    for (const [key, value] of Object.entries(data)) {
        Object.defineProperty(cleaned, key, {
            value: value,
            writable: false,      // Read-only
            enumerable: true,
            configurable: false   // Permanent
        });
    }
    
    return cleaned;
}

/*
2. LIBRARY OBJECT WITH PRIVATE STATE
*/
class Library {
    constructor() {
        this._internal = { /* ... */ };
        
        // Hide internal state
        Object.defineProperty(this, "_internal", {
            enumerable: false,
            configurable: false
        });
    }
}

/*
3. VERSION-LOCKED OBJECT
*/
const app = {};
Object.defineProperty(app, "version", {
    value: "1.0.0",
    writable: false,
    enumerable: true,
    configurable: false // Cannot upgrade
});


console.log("\n✅ Property Descriptors Mastery Complete!");
