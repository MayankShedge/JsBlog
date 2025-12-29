// console.log(2 > 3);
// console.log(2 >= 3);
// console.log(2 < 3);
// console.log(2 <= 3);
// console.log(2 == 3);
// console.log(2 != 3);

// Comparison of datatypes which are not same 
// console.log("2" > 1);
// console.log("02" > 1); //Aise cases mai yaad rakhna always compare karte vakt dono values ka data type same ho

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
Note :- The reason the above thing is happening is that a equality check and comparison  > < >= <= work diffferently.

Comparisons convert null to a number treating it as a 0.

That is why (3) null >= 0 is true and (1) null > 0 is false 
*/

// console.log(undefined > 0); // false 
// console.log(undefined == 0); // false 
// console.log(undefined >= 0); // true

//Js mai comparison and equality check alag alag tarah se kaam karte hai

/// Strict check (===)
console.log("2" === 2); //Yahape datatype bhi check hoga



/*
Comparison operators do values ko compare karte hain aur 
BOOLEAN result return karte hain (true ya false).

Important note: Comparison aur Equality check alag-alag kaam karte hain!
*/

// ========================================
// 🟢 BASIC COMPARISON OPERATORS
// ========================================

// Greater than (>)
console.log("1. GREATER THAN (>)");
console.log(5 > 3);              // true
console.log(5 > 5);              // false
console.log(3 > 5);              // false


// Less than (<)
console.log("\n2. LESS THAN (<)");
console.log(5 < 10);             // true
console.log(5 < 5);              // false
console.log(10 < 5);             // false


// Greater than or equal (>=)
console.log("\n3. GREATER THAN OR EQUAL (>=)");
console.log(5 >= 5);             // true
console.log(5 >= 3);             // true
console.log(3 >= 5);             // false


// Less than or equal (<=)
console.log("\n4. LESS THAN OR EQUAL (<=)");
console.log(5 <= 5);             // true
console.log(5 <= 10);            // true
console.log(10 <= 5);            // false


// ========================================
// 🟡 EQUALITY OPERATORS
// ========================================

/*
2 types hote hain:
1. Loose Equality (==) - type coercion karta hai
2. Strict Equality (===) - type check bhi karta hai
*/

console.log("\n5. LOOSE EQUALITY (==) - TYPE COERCION");
console.log(5 == 5);             // true
console.log(5 == "5");           // true ✅ String convert ho jaata hai
console.log(true == 1);          // true ✅ true ki value 1 hai
console.log(false == 0);         // true ✅ false ki value 0 hai
console.log(null == undefined);  // true ✅ Special case


console.log("\n6. STRICT EQUALITY (===) - NO TYPE COERCION");
console.log(5 === 5);            // true
console.log(5 === "5");          // false ❌ Type different
console.log(true === 1);         // false ❌ Type different
console.log(false === 0);        // false ❌ Type different
console.log(null === undefined); // false ❌ Type different


// Inequality operators
console.log("\n7. NOT EQUAL (!=)");
console.log(5 != 3);             // true
console.log(5 != 5);             // false
console.log(5 != "5");           // false ✅ Type coercion


console.log("\n8. STRICT NOT EQUAL (!==)");
console.log(5 !== 3);            // true
console.log(5 !== 5);            // false
console.log(5 !== "5");          // true ❌ Type different


// ========================================
// 🔴 EDGE CASES & QUIRKS
// ========================================

/*
JavaScript mein kuch weird behavior hoti hai jab 
different types compare karte ho. Yeh very important hai interviews mein!
*/

console.log("\n9. STRING COMPARISON");
console.log("2" > "1");          // true ✅ Lexicographic comparison
console.log("02" > "1");         // false ⚠️ String comparison (not numeric!)
console.log("apple" < "banana"); // true (alphabetically)


console.log("\n10. NULL COMPARISONS - ⚠️ QUIRKY");
console.log(null > 0);           // false
console.log(null == 0);          // false ⚠️ Special case!
console.log(null >= 0);          // true ✅ null converts to 0
console.log(null <= 0);          // true

/*
Reason: JavaScript mein comparison aur equality alag-alag tarah se kaam karte hain.

Comparisons (>, <, >=, <=):
- null ko 0 mein convert karte hain
- So null >= 0 true hai, null > 0 false hai

Equality (==, ===):
- null == undefined only (special case)
- null == 0 false hai (no coercion in this case)
*/


console.log("\n11. UNDEFINED COMPARISONS");
console.log(undefined > 0);      // false
console.log(undefined == 0);     // false
console.log(undefined >= 0);     // false
console.log(undefined <= 0);     // false
console.log(undefined == undefined); // true
console.log(undefined === undefined); // true


console.log("\n12. NaN COMPARISONS - ⚠️ SPECIAL");
console.log(NaN == NaN);         // false ❌ NaN kabhi equal nahi
console.log(NaN === NaN);        // false ❌ Even strict equality!
console.log(typeof NaN);         // "number"

// NaN check karne ke liye:
console.log(isNaN(NaN));         // true (method)
console.log(Number.isNaN(NaN));  // true (better, strict)


console.log("\n13. BOOLEAN COMPARISONS");
console.log(true > false);       // true (true=1, false=0)
console.log(true == 1);          // true (loose equality)
console.log(true === 1);         // false (strict equality)


console.log("\n14. MIXED TYPE COMPARISONS");
console.log("10" > 5);           // true (string converts to number)
console.log("10" > "5");         // true (lexicographic)
console.log(["10"] > 5);         // true (array converts to string, then number)
console.log({} > 5);             // false (object converts to NaN)


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: == aur === mein kya difference hai?
A: == loose equality (type coercion karta hai)
   === strict equality (type check bhi karta hai)
   
   5 == "5" → true (string number convert ho gaya)
   5 === "5" → false (type different)

Q2: null >= 0 true hai par null > 0 false kyun hai?
A: Comparison aur equality alag tarah kaam karte hain.
   Comparisons mein null 0 convert hota hai.
   Equality mein null special case hai.

Q3: NaN == NaN false kyun return karta hai?
A: By design, NaN kabhi equal nahi hota, naa apne aap se!
   Check karne ke liye Number.isNaN() use karo.

Q4: true > false ka result kya hai?
A: true (kyunki true=1 aur false=0, to 1 > 0 = true)

Q5: "10" > 5 true hai, samjhao?
A: String "10" numeric context mein convert hota hai 10 mein.
   Phir 10 > 5 = true

Q6: Kaun sa equality operator use karna chahiye?
A: === (strict equality) hamesha better hai.
   Type coercion accidents se bachata hai.
   Production code mein === use karo.

Q7: typeof NaN kya hai?
A: "number" (ironically, ye ek quirk hai!)

Q8: 0 == false true hai, samjhao?
A: Loose equality mein type coercion hota hai.
   false ki value 0 convert hoti hai.
   0 == 0 true hai.

Q9: null == undefined true kyun hai?
A: Special case! JavaScript mein define kiya gaya hai.
   null === undefined false hai though.

Q10: String comparison lexicographic kyun hota hai?
A: Jab dono values strings hain, tab character-by-character compare hota hai.
   Lexicographic order: "apple" < "banana" (alphabetical)
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

/*
1. USER AUTHENTICATION
   - Credentials match karna
   - Always === use karo security ke liye!
*/

function checkPassword(inputPassword, storedPassword) {
    // ❌ Wrong approach
    // return inputPassword == storedPassword;
    
    // ✅ Correct approach (strict comparison)
    return inputPassword === storedPassword;
}

console.log("\n--- PRODUCTION USE CASES ---");
console.log("Password check:", checkPassword("Pass123", "Pass123")); // true


/*
2. FORM VALIDATION
   - Input values check karna (usually strings se aate hain)
*/

function validateAge(age) {
    const minAge = 18;
    const maxAge = 65;
    
    // age string ho sakta hai form se
    const numericAge = Number(age);
    
    // Comparison ke liye numeric values use karo
    return numericAge >= minAge && numericAge <= maxAge;
}

console.log("Age 25 valid?", validateAge("25"));     // true
console.log("Age 15 valid?", validateAge("15"));     // false


/*
3. STATE/FLAG CHECKING
   - Boolean values check karna
*/

function handleUserLogin(isLoggedIn, userRole) {
    // ✅ Strict comparison
    if (isLoggedIn === true && userRole === "admin") {
        return "Admin dashboard";
    } else if (isLoggedIn === true) {
        return "User dashboard";
    } else {
        return "Please login";
    }
}

console.log("Login:", handleUserLogin(true, "admin")); // "Admin dashboard"


/*
4. NULL/UNDEFINED CHECKING
   - Safe value checks
*/

function getUserData(data) {
    // Check for null or undefined
    if (data == null) {
        return "No data";
    }
    
    // Agar string comparison karna ho
    if (data.status === "active") {
        return "Active user";
    }
    
    return "Inactive user";
}

console.log("User data:", getUserData(null));  // "No data"


/*
5. VALUE COMPARISON IN ARRAYS/OBJECTS
   - Searching, filtering
*/

function findUser(users, targetId) {
    // ⚠️ Be careful with type coercion
    // "1" === 1 false hai, but "1" == 1 true hai
    
    return users.find(user => user.id === targetId); // Strict comparison
}

const userList = [
    { id: 1, name: "Mayank" },
    { id: 2, name: "Raj" }
];

console.log("Find user:", findUser(userList, 1)); // { id: 1, name: "Mayank" }


/*
6. CONDITIONAL RENDERING (REACT/VUE)
   - Render logic karna
*/

function renderMessage(status) {
    // Status usually API se string aata hai
    if (status === "success") {
        return "✅ Success!";
    } else if (status === "error") {
        return "❌ Error!";
    } else if (status === "pending") {
        return "⏳ Processing...";
    }
    return "Unknown status";
}

console.log("Render:", renderMessage("success")); // "✅ Success!"


/*
7. DATABASE QUERIES
   - Filter conditions likhna
*/

function filterProducts(products, minPrice, maxPrice) {
    // Price range comparison
    return products.filter(product => 
        product.price >= minPrice && 
        product.price <= maxPrice
    );
}

const productList = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 25000 }
];

console.log("Filtered:", filterProducts(productList, 25000, 40000));
// [{ name: "Phone", price: 30000 }, { name: "Tablet", price: 25000 }]


/*
8. COMMON MISTAKES & FIXES
*/

// ❌ WRONG
function wrongComparison(value) {
    if (value == 0) { // Loose equality issue!
        return "Zero";
    }
    if (value == false) { // Also wrong!
        return "False";
    }
}

// ✅ CORRECT
function correctComparison(value) {
    if (value === 0) {
        return "Zero";
    }
    if (value === false) {
        return "False";
    }
    if (value === null) {
        return "Null";
    }
    if (value === undefined) {
        return "Undefined";
    }
}

// Test
console.log("Wrong result:", wrongComparison(false)); // "Zero" ❌ Wrong!
console.log("Correct result:", correctComparison(false)); // "False" ✅ Correct!


// ========================================
// 📊 COMPARISON RESULTS TABLE
// ========================================

console.log("\n--- COMPARISON RESULTS SUMMARY ---");
console.log("|  Left  | Right |  == | === | Reason");
console.log("|--------|-------|-----|-----|-------");
console.log("|   5    |   5   | true| true| Equal values");
console.log("|   5    |  \"5\"  | true| false| Type coercion");
console.log("|  true  |   1   | true| false| Type coercion");
console.log("|  null  |   0   | false| false| Special case");
console.log("|  null  | undefined| true| false| Special pair");


// ========================================
// ⚡ BEST PRACTICES
// ========================================

/*
1. ALWAYS USE === instead of ==
   - Avoid unexpected type coercion
   - Code clearer hai
   - Less bugs

2. Explicit type conversion karo
   - Number(str) - string to number
   - String(num) - number to string
   - Boolean(val) - to boolean
   
3. null vs undefined clearly understand karo
   - null = intentionally empty
   - undefined = not assigned
   
4. For NaN checking use Number.isNaN()
   - isNaN() sometimes misleading ho sakta hai
   
5. String comparison se avoid karo
   - Numeric comparison prefer karo
   - parseInt(), parseFloat() use karo
*/