// ========================================
// 🎯 OBJECTS & JSON - COMPLETE DETAILED GUIDE
// ========================================

/*
JavaScript Objects are key-value pairs collections.

2 Ways to Create Objects:
1. Literal {} - Non-Singleton (multiple instances)
2. Constructor new Object() - Singleton (unique instance)

Singleton = Object.create() ya Constructor

Important: Objects are mutable aur reference-based (call by reference).
*/

// ========================================
// 🟢 OBJECT BASICS & CREATION
// ========================================

console.log("=== OBJECT CREATION ===\n");

// Method 1: Object Literal (Non-Singleton)
const jsUser1 = {
    name: "Mayank",
    age: 22,
    email: "mayank@gmail.com",
    isLoggedIn: false
};

console.log("Object literal:", jsUser1);
console.log("Type:", typeof jsUser1); // "object"

// Method 2: Constructor (Singleton)
const jsUser2 = new Object(); // Unique instance
jsUser2.name = "Raj";
jsUser2.age = 25;

console.log("Constructor object:", jsUser2);

/*
⚠️ Important Distinction:
const obj1 = {name: "A"}; // Non-Singleton
const obj2 = {name: "A"}; // Different instance
obj1 === obj2; // false

const obj3 = new Object(); // Singleton approach
const obj4 = new Object(); // Different singleton
obj3 === obj4; // false
*/


// ========================================
// 🔵 OBJECT KEYS & PROPERTY ACCESS
// ========================================

console.log("\n=== PROPERTY ACCESS ===\n");

const user = {
    name: "Mayank",
    "full-name": "Mayank Shedge", // Key with hyphen (special case)
    age: 22,
    email: "mayank@gmail.com",
    location: "Mumbai"
};

console.log("Object:", user);

// Method 1: Dot notation (most common)
console.log("\n1. Dot notation:");
console.log("user.name:", user.name); // "Mayank"
console.log("user.age:", user.age); // 22

// Method 2: Bracket notation (for any key)
console.log("\n2. Bracket notation:");
console.log("user['name']:", user['name']); // "Mayank"
console.log("user['email']:", user['email']); // "mayank@gmail.com"

// Method 3: Keys with special characters REQUIRE bracket notation
console.log("\n3. Special character keys (hyphen):");
// console.log(user.full-name); // ❌ ERROR - JavaScript tries to subtract!
console.log("user['full-name']:", user['full-name']); // ✅ Correct

/*
⚠️ When to use bracket notation:
- Keys with spaces/hyphens/special chars
- Keys from variables
- Dynamic key access
*/

// Dynamic key access
const key = "email";
console.log("user[key]:", user[key]); // "mayank@gmail.com" (from variable)


// ========================================
// 🟣 SYMBOL KEYS (Advanced)
// ========================================

console.log("\n=== SYMBOL KEYS ===\n");

// Symbol creates unique property keys
const mySym = Symbol("uniqueKey");
const symbolKey = Symbol("id");

const jsUser = {
    name: "Mayank",
    mySym: "this is string", // ❌ NOT a symbol, just a string property
    [mySym]: "actual symbol value", // ✅ Use brackets for actual symbol
    [symbolKey]: 12345
};

console.log("Regular property (mySym):", jsUser.mySym); // "this is string"
console.log("Type of mySym:", typeof jsUser.mySym); // "string"

console.log("Symbol property [mySym]:", jsUser[mySym]); // "actual symbol value"
console.log("Type of [mySym]:", typeof jsUser[mySym]); // "string" (value type)

/*
⚠️ Symbol Basics:
- Each Symbol is unique, even with same description
- Must use bracket notation [symbol] to access
- Not enumerated in for...in loops
- Use case: Private properties, avoiding name collisions
*/

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("id1 === id2:", id1 === id2); // false (always unique!)


// ========================================
// 🟠 MODIFYING OBJECT PROPERTIES
// ========================================

console.log("\n=== MODIFYING PROPERTIES ===\n");

let employee = {
    name: "Mayank",
    designation: "Developer",
    salary: 100000
};

console.log("Original:", employee);

// Add/Update property
employee.name = "Mayank Shedge";
employee.experience = 2; // Add new property
console.log("After modifications:", employee);

// Delete property
delete employee.experience;
console.log("After delete:", employee);

// Object.freeze() - Prevent modifications
const freezedObj = {
    id: 1,
    name: "Frozen"
};

console.log("\nBefore freeze:", freezedObj);
Object.freeze(freezedObj);

freezedObj.name = "Changed"; // ❌ Won't work silently
console.log("After attempting change:", freezedObj); // Still original

/*
⚠️ freeze() characteristics:
- Prevents adding new properties
- Prevents modifying existing properties
- Prevents deleting properties
- Silent failure (no error thrown in non-strict mode)
*/


// ========================================
// 🟢 OBJECT METHODS
// ========================================

console.log("\n=== OBJECT METHODS ===\n");

// 1️⃣ Object.keys() - Get all keys
console.log("\n1. Object.keys() - All property keys:");
const person = {
    name: "Mayank",
    age: 22,
    city: "Mumbai"
};

const keys = Object.keys(person);
console.log("Keys:", keys); // ["name", "age", "city"]

// Use case: Iterate over keys
keys.forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

// 2️⃣ Object.values() - Get all values
console.log("\n2. Object.values() - All property values:");
const values = Object.values(person);
console.log("Values:", values); // ["Mayank", 22, "Mumbai"]

// 3️⃣ Object.entries() - Get key-value pairs
console.log("\n3. Object.entries() - Key-value pairs:");
const entries = Object.entries(person);
console.log("Entries:", entries);
// [["name", "Mayank"], ["age", 22], ["city", "Mumbai"]]

// 4️⃣ Object.hasOwnProperty() - Check if key exists
console.log("\n4. hasOwnProperty() - Check existence:");
console.log("Has 'name'?:", person.hasOwnProperty('name')); // true
console.log("Has 'phone'?:", person.hasOwnProperty('phone')); // false

// 5️⃣ Object.assign() - Merge objects
console.log("\n5. Object.assign() - Merge objects:");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { b: 99 }; // Overrides obj1.b

const merged = Object.assign({}, obj1, obj2, obj3);
console.log("Merged:", merged); // { a: 1, b: 99, c: 3, d: 4 }


// ========================================
// 🔵 SPREAD OPERATOR FOR OBJECTS
// ========================================

console.log("\n=== SPREAD OPERATOR FOR OBJECTS ===\n");

const objA = { x: 1, y: 2 };
const objB = { z: 3 };

// Spread merge
const merged2 = { ...objA, ...objB };
console.log("Spread merge:", merged2); // { x: 1, y: 2, z: 3 }

// Add/override properties
const updated = { ...objA, y: 99, w: 4 };
console.log("With override:", updated); // { x: 1, y: 99, w: 4 }

// Create copy
const original = { name: "Original", value: 1 };
const copy = { ...original };
console.log("Original === Copy?:", original === copy); // false (different references)


// ========================================
// 🟣 DESTRUCTURING OBJECTS
// ========================================

console.log("\n=== OBJECT DESTRUCTURING ===\n");

const course = {
    courseName: "JavaScript Mastery",
    price: 999,
    instructor: "Hitesh Choudhary"
};

// 1️⃣ Basic destructuring
const { courseName, price, instructor } = course;
console.log("Destructured:", { courseName, price, instructor });

// 2️⃣ Rename during destructuring
const { instructor: teach, courseName: title } = course;
console.log("Renamed:", { teach, title });

// 3️⃣ Default values
const { courseName: name, duration = "3 months" } = course;
console.log("With default:", { name, duration });

// 4️⃣ Nested destructuring
const user2 = {
    id: 1,
    profile: {
        name: "Mayank",
        address: {
            city: "Mumbai",
            zip: "400001"
        }
    }
};

const { profile: { name, address: { city } } } = user2;
console.log("Nested destructured:", { name, city });

// 5️⃣ Function parameter destructuring
function displayCourse({ courseName, price, instructor }) {
    console.log(`\nCourse: ${courseName}`);
    console.log(`Price: ₹${price}`);
    console.log(`Instructor: ${instructor}`);
}

displayCourse(course);


// ========================================
// 🟡 NESTED OBJECTS
// ========================================

console.log("\n=== NESTED OBJECTS ===\n");

const student = {
    name: "Mayank",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Mumbai",
        country: "India",
        coordinates: {
            latitude: 19.0760,
            longitude: 72.8777
        }
    },
    courses: ["JavaScript", "React", "Node"]
};

// Access nested properties
console.log("City:", student.address.city);
console.log("Latitude:", student.address.coordinates.latitude);

// Optional chaining - Safe access
console.log("Phone (safe):", student.phone?.number); // undefined, no error!

// Update nested property
student.address.city = "Bangalore";
console.log("Updated city:", student.address.city);


// ========================================
// 🟢 METHODS IN OBJECTS
// ========================================

console.log("\n=== METHODS IN OBJECTS ===\n");

const jsUser3 = {
    firstName: "Mayank",
    email: "mayank@gmail.com",
    
    // Method 1: Simple method
    greet: function() {
        console.log("Hello from " + this.firstName);
    },
    
    // Method 2: Using 'this' keyword
    welcome: function() {
        console.log(`Welcome ${this.firstName}! Email: ${this.email}`);
    },
    
    // Method 3: Short syntax
    sayGoodbye() {
        console.log(`Goodbye ${this.firstName}!`);
    }
};

console.log("Calling methods:");
jsUser3.greet(); // "Hello from Mayank"
jsUser3.welcome(); // "Welcome Mayank! Email: mayank@gmail.com"
jsUser3.sayGoodbye(); // "Goodbye Mayank!"

/*
⚠️ 'this' keyword:
- Inside object method: refers to the object
- In global scope: refers to global object (window in browser, global in Node)
- In arrow function: doesn't have its own 'this' (inherits from parent)
*/


// ========================================
// 🔴 JSON - SERIALIZATION & PARSING
// ========================================

console.log("\n=== JSON (JavaScript Object Notation) ===\n");

// JSON format (strict rules)
const jsonString = `{
    "name": "Mayank",
    "courseName": "JavaScript",
    "price": 999,
    "instructor": "Hitesh"
}`;

console.log("JSON String:", jsonString);

// 1️⃣ JSON.parse() - Parse JSON string to object
console.log("\n1. JSON.parse() - String to Object:");
const parsed = JSON.parse(jsonString);
console.log("Parsed:", parsed);
console.log("Access name:", parsed.name);

// 2️⃣ JSON.stringify() - Object to JSON string
console.log("\n2. JSON.stringify() - Object to String:");
const obj = {
    name: "Mayank",
    age: 22,
    skills: ["React", "Node", "MongoDB"]
};

const stringified = JSON.stringify(obj);
console.log("Stringified:", stringified);
console.log("Type:", typeof stringified); // "string"

// With formatting (indentation)
const formattedJSON = JSON.stringify(obj, null, 2);
console.log("Formatted JSON:", formattedJSON);

/*
⚠️ JSON Rules:
- Keys must be double-quoted strings
- Values can be: string, number, boolean, null, array, object
- Functions are NOT valid in JSON
- undefined values are skipped
*/


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Object literal aur constructor mein difference?
A: Literal {} - returns new object every time
   Constructor new Object() - also returns new object
   
   Singleton concept technically both return unique instances.
   Object.create() is the true singleton pattern.

Q2: Symbol kyu unique hota hai?
A: Har call se naya Symbol create hota hai.
   Symbol("id") !== Symbol("id") (always different)
   
   Use case: Private properties, avoid name collisions

Q3: Object.freeze() aur Object.seal() mein difference?
A: freeze() - nahi add/modify/delete kar sakte
   seal() - modify kar sakte lekin add/delete nahi

Q4: dot notation aur bracket notation mein kya use karein?
A: Dot - regular properties: obj.name
   Bracket - special chars: obj['full-name'], dynamic: obj[key]

Q5: Spread operator se object copy kaise karte ho?
A: const copy = {...original};
   Lekin ये SHALLOW copy hai (nested objects share reference)

Q6: Destructuring ka main advantage kya hai?
A: Code concise aur readable: const {x, y} = obj;
   Instead of: const x = obj.x; const y = obj.y;

Q7: this keyword object methods mein kya refer karta hai?
A: Object itself jisne method call kiya.
   user.greet() → this = user
   (lekin arrow function mein parent scope se inherit hota)

Q8: JSON string mein function pass kar sakte ho?
A: Nahi! JSON.stringify() functions ko skip karta hai.
   Only: strings, numbers, booleans, null, arrays, objects

Q9: Optional chaining (?.) ka use kya hai?
A: Safe nested property access.
   obj.deep?.nested?.value - agar intermediate undefined ho to nahi error

Q10: Object.keys(), Object.values(), Object.entries() mein difference?
A: keys() - sirf keys: ["a", "b"]
   values() - sirf values: [1, 2]
   entries() - pairs: [["a",1], ["b",2]]
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. API RESPONSE HANDLING
   - Parse JSON responses
   - Transform data
*/

const apiResponse = `{
    "status": "success",
    "data": {
        "id": 1,
        "name": "Mayank",
        "email": "mayank@gmail.com"
    }
}`;

const response = JSON.parse(apiResponse);
console.log("\n1. API Response:");
console.log("User name:", response.data.name);


/*
2. USER PROFILE MANAGEMENT
   - Store user data
   - Update information
*/

class UserProfile {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
        this.settings = {
            notifications: true,
            theme: "dark"
        };
    }
    
    updateSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
    }
    
    toJSON() {
        return JSON.stringify(this, null, 2);
    }
}

const profile = new UserProfile("Mayank", "mayank@gmail.com");
profile.updateSettings({ theme: "light", notifications: false });
console.log("\n2. User Profile:");
console.log(profile.toJSON());


/*
3. CONFIGURATION OBJECTS
   - App settings
   - Feature flags
*/

const appConfig = {
    database: {
        host: "localhost",
        port: 5432,
        credentials: {
            username: "admin",
            password: "***"
        }
    },
    features: {
        darkMode: true,
        notifications: true,
        analytics: false
    },
    api: {
        timeout: 5000,
        retries: 3
    }
};

console.log("\n3. Config Access:");
console.log("DB Host:", appConfig.database.host);
console.log("Dark Mode:", appConfig.features.darkMode);


/*
4. FORM DATA COLLECTION
   - Gather user input
   - Validation
*/

function createFormData(firstName, lastName, email, phone) {
    return {
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date().toISOString(),
        toJSON() {
            return JSON.stringify(this);
        }
    };
}

const formData = createFormData("Mayank", "Shedge", "mayank@gmail.com", "9876543210");
console.log("\n4. Form Data:");
console.log(formData.toJSON());


/*
5. DATABASE QUERIES
   - Filter logic
   - Search operations
*/

const users = [
    { id: 1, name: "Mayank", role: "admin", status: "active" },
    { id: 2, name: "Raj", role: "user", status: "active" },
    { id: 3, name: "Priya", role: "user", status: "inactive" }
];

function findActiveAdmins(userList) {
    return userList.filter(u => u.role === "admin" && u.status === "active");
}

console.log("\n5. Database Query:");
console.log(findActiveAdmins(users));


/*
6. MERGE & UPDATE OBJECTS
   - Combine configurations
   - Update settings
*/

const defaultSettings = {
    theme: "light",
    language: "en",
    notifications: true,
    fontSize: 14
};

const userSettings = {
    theme: "dark",
    fontSize: 16
};

const finalSettings = { ...defaultSettings, ...userSettings };
console.log("\n6. Merged Settings:");
console.log(finalSettings);