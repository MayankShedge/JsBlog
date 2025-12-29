// ========================================
// 🔀 CONTROL FLOW - COMPLETE MASTERCLASS
// ========================================

/*
Control Flow = Decision making in code
Jab kuch condition check karte ho aur uske basis pe different code execute hota hai.

Main Topics:
1. if / if-else / if-else-if
2. Logical operators (&&, ||, !)
3. Switch statements
4. Truthy/Falsy values
5. Nullish Coalescing (??)
6. Optional Chaining (?.)
7. Ternary operator (? :)

Production use: Authorization, validation, business logic, routing, etc.
*/

// ========================================
// 🟢 IF STATEMENT - BASICS
// ========================================

console.log("=== IF STATEMENT ===\n");

// Basic if - condition true hai toh code run hoga
if (true) {
    console.log("This will execute");
}

if (false) {
    console.log("This will NOT execute");
}

// If with condition
const temperature = 41;

if (temperature === 50) {
    console.log("Temperature exactly 50");
}

/*
⚠️ CRITICAL: === vs ==
=== Strict equality (type + value check) → ALWAYS USE
== Loose equality (type coercion) → AVOID

5 === "5" → false (different types)
5 == "5" → true (coercion happens)
*/

// If with variable
const score = 200;
if (score > 100) {
    const power = "fly"; // Block-scoped variable
    console.log(`User has power: ${power}`);
}

// ❌ This will error - power not accessible here (block scope)
// console.log(power); // ReferenceError: power is not defined

/*
⚠️ SCOPE inside if block:
const/let inside if → only accessible inside if
var inside if → accessible outside if (bad practice!)
*/


// ========================================
// 🔵 IF-ELSE STATEMENT
// ========================================

console.log("\n=== IF-ELSE ===\n");

const balance = 1000;

if (balance > 500) {
    console.log("User has good balance");
} else {
    console.log("User has low balance");
}

// if-else-if ladder (multiple conditions)
console.log("\nif-else-if ladder:");

if (balance < 500) {
    console.log("Balance: Less than 500 (Very Low)");
} else if (balance < 750) {
    console.log("Balance: Between 500-750 (Low)");
} else if (balance < 900) {
    console.log("Balance: Between 750-900 (Medium)");
} else if (balance < 1200) {
    console.log("Balance: Between 900-1200 (Good)");
} else {
    console.log("Balance: 1200+ (Excellent)");
}

/*
⚠️ Best practices:
1. ALWAYS use {} even for single statement
2. Order conditions from most specific to least specific
3. Use === for strict comparison
4. Avoid deeply nested if-else (refactor!)
*/

// ❌ BAD PRACTICE - Single line without braces
// if (balance > 500) console.log("test"), console.log("test2");
// This causes confusion and bugs!

// ✅ GOOD PRACTICE - Clear and readable
if (balance > 500) {
    console.log("Balance good");
}


// ========================================
// 🟠 LOGICAL OPERATORS (AND, OR, NOT)
// ========================================

console.log("\n=== LOGICAL OPERATORS ===\n");

// AND operator (&&) - ALL conditions must be true
const userLoggedIn = true;
const debitCard = true;
const hasBalance = true;

if (userLoggedIn && debitCard && hasBalance) {
    console.log("✅ Allow user to buy courses");
} else {
    console.log("❌ User cannot buy");
}

// OR operator (||) - ANY condition must be true
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const loggedInFromFacebook = false;

if (loggedInFromEmail || loggedInFromGoogle || loggedInFromFacebook) {
    console.log("✅ User is logged in (from any source)");
}

// NOT operator (!) - Reverses boolean
const isUserBanned = false;

if (!isUserBanned) {
    console.log("✅ User is active");
}

// Combined operators
const isAdmin = true;
const isActive = true;
const canEditUsers = false;

if (isAdmin && isActive && !canEditUsers) {
    console.log("Admin active but no edit permission");
}

/*
⚠️ Operator precedence:
1. ! (NOT - highest)
2. && (AND)
3. || (OR - lowest)

Example:
true || false && false
→ true || (false && false)
→ true || false
→ true
*/

// Short-circuit evaluation
console.log("\nShort-circuit evaluation:");

let x = 0;
let result = x && (x = 5); // Second part not evaluated!
console.log("x after x && (x=5):", x); // Still 0

let y = 1;
let result2 = y || (y = 5); // Second part not evaluated!
console.log("y after y || (y=5):", y); // Still 1


// ========================================
// 🔴 SWITCH STATEMENT
// ========================================

console.log("\n=== SWITCH STATEMENT ===\n");

// Switch with string
const month = "April";

switch (month) {
    case "Jan":
        console.log("January - 31 days");
        break;
    case "Feb":
        console.log("February - 28/29 days");
        break;
    case "Mar":
        console.log("March - 31 days");
        break;
    case "April":
        console.log("April - 30 days");
        break;
    case "May":
        console.log("May - 31 days");
        break;
    default:
        console.log("Unknown month");
}

/*
⚠️ CRITICAL: Break statement
Without break → fall-through (next case also executes!)
With break → stops execution after case
*/

// Fall-through example (intentional)
console.log("\nFall-through (without break):");

const day = 2;
switch (day) {
    case 1:
        console.log("Monday - Start week");
    case 2:
        console.log("Tuesday - Work day");
    case 3:
        console.log("Wednesday - Middle week");
        break; // Only here does execution stop
    case 4:
        console.log("Thursday - Almost weekend");
        break;
    default:
        console.log("Weekend!");
}

/*
Output:
Tuesday - Work day
Wednesday - Middle week
(Both executed because no break after case 2)
*/

// Switch with numbers
console.log("\nSwitch with numbers:");

const grade = 85;

switch (true) {
    case grade >= 90:
        console.log("Grade: A");
        break;
    case grade >= 80:
        console.log("Grade: B");
        break;
    case grade >= 70:
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
}

/*
⚠️ Switch best practices:
1. Always include break (unless intentional fall-through)
2. Include default case
3. Use === internally (strict comparison)
4. For complex conditions, use if-else-if instead
*/


// ========================================
// 🟣 TRUTHY vs FALSY VALUES (CRITICAL!)
// ========================================

console.log("\n=== TRUTHY vs FALSY ===\n");

/*
FALSY VALUES (These evaluate to false in boolean context):
1. false (literal)
2. 0 (zero)
3. -0 (negative zero)
4. 0n (BigInt zero)
5. "" (empty string)
6. null (no value)
7. undefined (unassigned)
8. NaN (Not a Number)

EVERYTHING ELSE IS TRUTHY!
*/

// Testing falsy values
console.log("Testing falsy values:");
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Testing truthy values
console.log("\nTesting truthy values:");
console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean("0"));        // true (string!)
console.log(Boolean("false"));    // true (string!)
console.log(Boolean(" "));        // true (space is string)
console.log(Boolean([]));         // true (array is object)
console.log(Boolean({}));         // true (object)
console.log(Boolean(function(){})); // true (function)

/*
⚠️ SURPRISING TRUTHY VALUES:
- "0" is truthy (it's a non-empty string!)
- "false" is truthy (it's a non-empty string!)
- [] is truthy (empty array is still an object!)
- {} is truthy (empty object is still an object!)
*/

// Practical examples
console.log("\nPractical truthy/falsy usage:");

// Empty string check
const userEmail1 = "mayank@gmail.com";
if (userEmail1) {
    console.log("✅ Email provided");
}

const userEmail2 = "";
if (!userEmail2) {
    console.log("❌ Email is empty");
}

// Array check (CAREFUL!)
const myArray = [];
if (myArray) {
    console.log("⚠️ Empty array is still truthy!"); // This runs!
}

// Correct way to check empty array
if (myArray.length === 0) {
    console.log("✅ Array is empty (correct check)");
}

// Object check
const myObject = {};
if (myObject) {
    console.log("⚠️ Empty object is still truthy!"); // This runs!
}

// Correct way to check empty object
if (Object.keys(myObject).length === 0) {
    console.log("✅ Object is empty (correct check)");
}

// Null/undefined check
let value = null;
if (value == null) {
    console.log("✅ Value is null or undefined");
}

// Checking specific type
if (value === null) {
    console.log("✅ Specifically null");
}


// ========================================
// 🟢 COMPARISON SHORTCUTS & COERCION
// ========================================

console.log("\n=== COERCION CASES ===\n");

// Loose equality with coercion
console.log("false == 0:", false == 0);      // true
console.log("false == '':", false == '');    // true
console.log("0 == '':", 0 == '');           // true
console.log("null == undefined:", null == undefined); // true

// Strict equality (no coercion)
console.log("\nWith strict equality:");
console.log("false === 0:", false === 0);    // false
console.log("false === '':", false === '');  // false
console.log("null === undefined:", null === undefined); // false


// ========================================
// 🔵 NULLISH COALESCING OPERATOR (??)
// ========================================

console.log("\n=== NULLISH COALESCING (??) ===\n");

/*
?? (Nullish Coalescing)
Returns right-hand value ONLY if left is null or undefined.
Perfect for API responses where you get null/undefined.

Different from || (OR operator):
|| returns right if left is FALSY (includes 0, "", false, etc.)
?? returns right if left is NULLISH (only null, undefined)
*/

// Basic usage
let val1;
val1 = 5 ?? 10;
console.log("val1 = 5 ?? 10:", val1); // 5

let val2;
val2 = null ?? 10;
console.log("val2 = null ?? 10:", val2); // 10

let val3;
val3 = undefined ?? 15;
console.log("val3 = undefined ?? 15:", val3); // 15

// Difference from ||
console.log("\nDifference from || operator:");

let price = 0;
console.log("price || 100:", price || 100);      // 100 (because 0 is falsy)
console.log("price ?? 100:", price ?? 100);      // 0 (because 0 is not nullish!)

// Chain multiple ??
let response = null;
let backup1 = undefined;
let backup2 = "Default value";

let result = response ?? backup1 ?? backup2 ?? "Ultimate default";
console.log("Chained ?? result:", result); // "Default value"

// Real-world: API response handling
console.log("\nAPI Response Handling:");

const apiResponse = {
    username: null,
    email: "user@example.com",
    age: 0,
    country: undefined
};

const displayName = apiResponse.username ?? "Anonymous";
const displayEmail = apiResponse.email ?? "No email";
const displayAge = apiResponse.age ?? 18; // 0 is valid age!
const displayCountry = apiResponse.country ?? "Unknown";

console.log("Display name:", displayName);     // "Anonymous"
console.log("Display email:", displayEmail);   // "user@example.com"
console.log("Display age:", displayAge);       // 0 (correct!)
console.log("Display country:", displayCountry); // "Unknown"


// ========================================
// 🟡 OPTIONAL CHAINING (?.)
// ========================================

console.log("\n=== OPTIONAL CHAINING (?.) ===\n");

/*
?. (Optional Chaining)
Safely access nested properties that might not exist.
Returns undefined instead of error if property doesn't exist.
*/

const user = {
    name: "Mayank",
    email: "mayank@gmail.com",
    address: {
        street: "123 Main St",
        coordinates: {
            latitude: 19.0760,
            longitude: 72.8777
        }
    }
};

// Without optional chaining (risky)
// console.log(user.phone.number); // ❌ Error: Cannot read property 'number' of undefined

// With optional chaining (safe)
console.log("user.phone?.number:", user.phone?.number); // undefined (no error!)
console.log("user.address?.street:", user.address?.street); // "123 Main St"
console.log("user.address?.city:", user.address?.city); // undefined

// Deep nesting
console.log("user.address?.coordinates?.latitude:", user.address?.coordinates?.latitude); // 19.0760

// With function calls
const getUserEmail = () => user.email;
console.log("getUserEmail?.():", getUserEmail?.()); // "mayank@gmail.com"

const getPhone = null;
console.log("getPhone?.():", getPhone?.()); // undefined (no error!)

// With arrays
const users = [
    { name: "User1", email: "user1@gmail.com" },
    null,
    { name: "User3", email: "user3@gmail.com" }
];

console.log("users[0]?.name:", users[0]?.name); // "User1"
console.log("users[1]?.name:", users[1]?.name); // undefined
console.log("users[2]?.email:", users[2]?.email); // "user3@gmail.com"


// ========================================
// 🟠 TERNARY OPERATOR (? :)
// ========================================

console.log("\n=== TERNARY OPERATOR ===\n");

/*
Syntax: condition ? valueIfTrue : valueIfFalse

Shorthand for if-else in simple cases.
Use for assignments, not complex logic.
*/

// Simple ternary
const age = 25;
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status); // "Adult"

// Ternary in console.log
const iceTeaPrice = 100;
console.log(
    iceTeaPrice <= 80 ? "Price is low" : "Price is high"
);

// Nested ternary (avoid if too complex!)
const score = 75;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade); // "C"

/*
⚠️ When to use ternary:
✅ Simple boolean assignment
✅ Simple single-line decisions
❌ Complex logic (use if-else instead)
❌ Multiple conditions (use if-else-if)
*/

// Assignment with ternary
const userRole = "admin";
const permissions = userRole === "admin" ? ["read", "write", "delete"] : ["read"];
console.log("Permissions:", permissions);


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: == aur === mein difference?
A: == loose equality (type coercion)
   === strict equality (no coercion)
   5 == "5" → true, 5 === "5" → false

Q2: Falsy values kaunsi hain?
A: false, 0, -0, 0n, "", null, undefined, NaN

Q3: Truthy values mein surprising values?
A: "0", "false", " " (space), [], {}, function(){}

Q4: ?? aur || mein difference?
A: ?? (nullish) → null/undefined ko handle karta
   || (logical OR) → sabhi falsy values ko handle karta

Q5: Optional chaining kya karta hai?
A: Safely access nested properties
   Returns undefined instead of error if doesn't exist

Q6: Switch mein break kyun important?
A: Without break → fall-through (next case bhi execute)
   With break → execution stops

Q7: if-else-if vs switch kab use kare?
A: if-else-if → complex conditions
   switch → exact value matching

Q8: Ternary operator ke limitations?
A: Nested ternary confusing ho sakte hain
   Complex logic ke liye if-else better

Q9: Block scope mein variables kaise accessible?
A: const/let → block-scoped (if block se bahar nahi)
   var → function-scoped (if block se bahar accessible)

Q10: Truthy array [] check kaise kare?
A: Array empty check: arr.length === 0
   NOT: if (arr) kyon ki [] truthy hai!
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. USER AUTHENTICATION & AUTHORIZATION
   - Check login status
   - Verify permissions
   - Role-based access
*/

function checkAccess(user) {
    const isLoggedIn = user != null;
    const isAdmin = user?.role === "admin";
    const isVerified = user?.emailVerified ?? false;
    
    if (!isLoggedIn) {
        return { canAccess: false, message: "Please login" };
    }
    
    if (isAdmin && isVerified) {
        return { canAccess: true, level: "full" };
    }
    
    if (isVerified) {
        return { canAccess: true, level: "limited" };
    }
    
    return { canAccess: false, message: "Please verify email" };
}

const testUser1 = { role: "admin", emailVerified: true };
const testUser2 = { role: "user", emailVerified: false };
const testUser3 = null;

console.log("Admin user:", checkAccess(testUser1));
console.log("Unverified user:", checkAccess(testUser2));
console.log("No user:", checkAccess(testUser3));


/*
2. FORM VALIDATION
   - Check required fields
   - Validate data types
   - Business rule validation
*/

function validateForm(formData) {
    const errors = [];
    
    // Required field checks
    if (!formData.email) {
        errors.push("Email is required");
    } else if (!formData.email.includes("@")) {
        errors.push("Email format invalid");
    }
    
    if (!formData.password || formData.password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    
    if (formData.age) {
        if (formData.age < 18) {
            errors.push("Must be 18 or older");
        }
        if (formData.age > 120) {
            errors.push("Invalid age");
        }
    }
    
    // Business rule: Premium users need verified email
    if (formData.accountType === "premium" && !formData.emailVerified) {
        errors.push("Premium accounts require verified email");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

const formTest1 = { email: "user@example.com", password: "SecurePass123" };
const formTest2 = { email: "invalid", password: "short" };

console.log("\nForm validation:");
console.log(validateForm(formTest1));
console.log(validateForm(formTest2));


/*
3. E-COMMERCE: DISCOUNT & PRICING LOGIC
   - Apply discounts based on conditions
   - Calculate final price
   - Handle edge cases
*/

function calculatePrice(cart) {
    const subtotal = cart.items.reduce((sum, item) => sum + item.price, 0);
    const isMember = cart.customer?.isMember ?? false;
    const purchaseHistory = cart.customer?.totalPurchases ?? 0;
    
    let discount = 0;
    
    // Member discount
    if (isMember) {
        discount += 5; // 5% member discount
    }
    
    // Loyalty discount (for purchases > $500)
    if (purchaseHistory > 500) {
        discount += 5; // Additional 5%
    }
    
    // Volume discount (if cart > $200)
    if (subtotal > 200) {
        discount += 10; // Additional 10%
    }
    
    const discountAmount = subtotal * (discount / 100);
    const tax = (subtotal - discountAmount) * 0.18; // 18% tax
    const total = subtotal - discountAmount + tax;
    
    return {
        subtotal: subtotal.toFixed(2),
        discountPercent: discount,
        discountAmount: discountAmount.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

const cartTest = {
    items: [
        { name: "Laptop", price: 100 },
        { name: "Mouse", price: 50 },
        { name: "Keyboard", price: 60 }
    ],
    customer: {
        isMember: true,
        totalPurchases: 600
    }
};

console.log("\nPrice calculation:");
console.log(calculatePrice(cartTest));


/*
4. API RESPONSE HANDLING
   - Handle different response formats
   - Provide defaults
   - Graceful error handling
*/

function processApiResponse(response) {
    // Safe extraction with defaults
    const status = response?.status ?? "unknown";
    const data = response?.data ?? {};
    const errors = response?.errors ?? [];
    const meta = response?.meta ?? { page: 1, total: 0 };
    
    // Validation
    if (status === "error" || errors.length > 0) {
        return {
            success: false,
            message: errors[0] ?? "Unknown error occurred",
            data: null
        };
    }
    
    if (status !== "success") {
        return {
            success: false,
            message: "Unexpected response status",
            data: null
        };
    }
    
    // Format success response
    return {
        success: true,
        message: "Data retrieved successfully",
        data: data,
        pagination: {
            page: meta.page,
            total: meta.total
        }
    };
}

const response1 = {
    status: "success",
    data: { id: 1, name: "User" },
    meta: { page: 1, total: 100 }
};

const response2 = {
    status: "error",
    errors: ["Invalid request"]
};

const response3 = null;

console.log("\nAPI Response handling:");
console.log(processApiResponse(response1));
console.log(processApiResponse(response2));
console.log(processApiResponse(response3));


/*
5. FEATURE FLAGS & CONFIGURATION
   - Enable/disable features
   - Different behavior based on environment
   - A/B testing
*/

function getFeatureAccess(user, environment) {
    const isAdmin = user?.role === "admin";
    const isPremium = user?.subscription === "premium";
    const isEarlyAccess = user?.earlyAccess ?? false;
    
    const features = {
        advancedAnalytics: isAdmin || isPremium,
        darkMode: true, // Everyone gets it
        aiFeatures: isAdmin || (isPremium && environment === "production") || isEarlyAccess,
        betaFeatures: isAdmin || isEarlyAccess,
        multiLanguage: isPremium || isAdmin,
        exportData: isPremium || isAdmin
    };
    
    return features;
}

const user1 = { role: "admin" };
const user2 = { subscription: "premium", earlyAccess: false };
const user3 = { subscription: "free", earlyAccess: true };

console.log("\nFeature flags:");
console.log("Admin:", getFeatureAccess(user1, "production"));
console.log("Premium user:", getFeatureAccess(user2, "production"));
console.log("Beta tester:", getFeatureAccess(user3, "development"));