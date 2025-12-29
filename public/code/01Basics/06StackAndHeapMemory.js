/*
Isme 2 types ki memory hoti hai ek hai stack memory and dusri hai heap memory 

Ab jo sare Primitive type data types hai vaha stack memory ka use hota hai (Primitive => Stack Memory)

Jo Non Primitive types ke data types hai vaha pe Heap memory use hoti hai (Non Primitive => Heap Memory)

Jab bhi Stack Memory use hogi => uske andar ke copy provide ki jaegi original address ki 

Jab bhi Heap memory use hogi => uske andar milega reference original value ka
*/

// let myYoutubeName = "mayankshedge2@youtube.com"

// let anotherName = myYoutubeName
// console.log(anotherName);
// anotherName = "Mayank Shedge"
// console.log(myYoutubeName);
// console.log(anotherName);

let userOne1 = {
    email: "user@gmail.com",
    ubi: "user@ybl"
}

let userTwo = userOne //sidha main object ka reference mil jaega inside heap not the copy

userTwo.email = "mayank@gmail.com"
console.log(userOne1.email); 
console.log(userTwo.email);


/*
JavaScript mein 2 types ki memory hoti hai:
1. STACK MEMORY - Primitive values store hoti hain
2. HEAP MEMORY - Non-Primitive values store hoti hain

Yeh concept bahut important hai kiyunki isse hi pata chalta hai ki 
variable ka copy banata hai ya reference deta hai
*/


// ========================================
// 🔴 STACK MEMORY (Primitive Types)
// ========================================

/*
Primitive types = String, Number, Boolean, null, undefined, Symbol, BigInt

Jab bhi Primitive type ko assign karte ho toh:
1. Stack memory mein ek copy create hoti hai
2. Original value change nahi hoti
3. Har assignment se new copy ban jaati hai
*/

// Example 1: String (Primitive)
let myYoutubeName = "mayankshedge2@youtube.com";
let anotherName = myYoutubeName; // Copy ban gaya, reference nahi

anotherName = "Mayank Shedge";
console.log("myYoutubeName:", myYoutubeName); // "mayankshedge2@youtube.com" (unchanged)
console.log("anotherName:", anotherName);     // "Mayank Shedge" (changed)

/*
Memory visualization:

Stack Memory:
┌─────────────────────────────────┐
│ myYoutubeName: "mayankshedge..." │
│ anotherName: "Mayank Shedge"    │ ← Alag se copy
└─────────────────────────────────┘

Do alag-alag values, koi connection nahi!
*/


// Example 2: Number (Primitive)
let num1 = 100;
let num2 = num1;  // Copy created

num2 = 200;
console.log("num1:", num1); // 100 (unchanged)
console.log("num2:", num2); // 200


// Example 3: Boolean (Primitive)
let isActive = true;
let isCopiedStatus = isActive;  // Copy

isCopiedStatus = false;
console.log("isActive:", isActive);           // true
console.log("isCopiedStatus:", isCopiedStatus); // false


// ========================================
// 🔵 HEAP MEMORY (Non-Primitive Types)
// ========================================

/*
Non-Primitive types = Objects, Arrays, Functions

Jab bhi Non-Primitive type ko assign karte ho toh:
1. Heap memory mein actual data store hota hai
2. Stack mein sirf reference (address) store hota hai
3. Doosra variable jo assign karte ho, voh same reference point karta hai
4. Ek jagah change karo, sab jagah change dikhega!
*/

// Example 1: Object (Non-Primitive)
let userOne = {
    email: "user@gmail.com",
    ubi: "user@ybl"
};

let userTwo = userOne; // Reference mil gaya, copy nahi!

userTwo.email = "mayank@gmail.com"; // Change kiya

console.log("userOne.email:", userOne.email); // "mayank@gmail.com" (changed!)
console.log("userTwo.email:", userTwo.email); // "mayank@gmail.com"

/*
Memory visualization:

Stack Memory            Heap Memory
┌──────────────┐       ┌─────────────────────────┐
│ userOne: ───┼──────→ │ {                       │
│             │       │   email: "user@gmail"   │
│             │       │   ubi: "user@ybl"       │
│             │       │ }                       │
│ userTwo: ───┼──────→ │ (same reference)        │
└──────────────┘       └─────────────────────────┘

Dono same address point kar rahe hain!
*/


// Example 2: Array (Non-Primitive)
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1; // Reference

arr2.push(6); // Modify kiya

console.log("arr1:", arr1); // [1, 2, 3, 4, 5, 6] (changed)
console.log("arr2:", arr2); // [1, 2, 3, 4, 5, 6]

// Check if same reference
console.log(arr1 === arr2); // true (same reference)


// Example 3: Function (Non-Primitive)
let func1 = function() {
    console.log("Hello");
};

let func2 = func1; // Reference

func2(); // "Hello" print hoga

console.log(func1 === func2); // true (same reference)


// ========================================
// 🎯 CREATING INDEPENDENT COPIES
// ========================================

/*
Kabhi kabhi hame copy chahiye but independent, toh kya karte hain?
1. Spread operator (...) - for objects and arrays
2. Object.assign() - for objects
3. Array slice() - for arrays
4. JSON method - for deep copy
5. structuredClone() - modern approach
*/

// Array: Creating independent copy
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray]; // Spread operator - copy banati hai

copiedArray.push(4);
console.log("originalArray:", originalArray); // [1, 2, 3]
console.log("copiedArray:", copiedArray);     // [1, 2, 3, 4]


// Object: Creating independent copy
let originalUser = {
    name: "Mayank",
    age: 22,
    skills: ["React", "Node"]
};

let copiedUser = { ...originalUser }; // Spread operator - shallow copy

copiedUser.name = "Sharma";
console.log("originalUser.name:", originalUser.name); // "Mayank"
console.log("copiedUser.name:", copiedUser.name);     // "Sharma"

/*
⚠️ IMPORTANT: Spread operator shallow copy karta hai!
Agar nested objects/arrays hain toh problem aa sakta hai
*/

let user3 = {
    name: "Raj",
    address: {
        city: "Mumbai",
        zip: "400001"
    }
};

let user4 = { ...user3 }; // Shallow copy

user4.address.city = "Delhi";
console.log("user3.address.city:", user3.address.city); // "Delhi" (❌ changed!)
console.log("user4.address.city:", user4.address.city); // "Delhi"

// ✅ Deep copy ke liye:
let user5 = JSON.parse(JSON.stringify(user3)); // Deep copy

user5.address.city = "Bangalore";
console.log("user3.address.city:", user3.address.city); // "Mumbai" (✅ unchanged)
console.log("user5.address.city:", user5.address.city); // "Bangalore"

// Ya modern approach:
let user6 = structuredClone(user3); // Deep copy (modern)

user6.address.city = "Hyderabad";
console.log("user3.address.city:", user3.address.city); // "Mumbai" (✅ unchanged)
console.log("user6.address.city:", user6.address.city); // "Hyderabad"


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Primitive values ke liye copy banata hai ya reference?
A: Copy! Stack memory mein copy store hoti hai, reference nahi.

Q2: Non-Primitive values ke liye kya hota hai?
A: Reference! Heap memory mein data store hota hai, stack mein sirf address.

Q3: Agar object assign karte ho toh change dikhai de sakta hai original mein?
A: Haan! Kyunki dono same reference point kar rahe hain heap ke same data ko.

Q4: Spread operator se deep copy ban jaata hai?
A: Nahi, shallow copy ban jaata hai. Nested objects/arrays ke liye still problem.

Q5: Deep copy banane ke 2 tarike batao?
A: 
   1. JSON.parse(JSON.stringify(obj))
   2. structuredClone(obj)

Q6: Kya ek array ka reference copy kar sakte ho without modification?
A: Haan, let copy = original.slice() ya let copy = [...original]

Q7: null aur undefined mein farak kya hai memory mein?
A: Dono primitive hain, stack mein store hote hain. null intentional empty,
   undefined unintentional empty.

Q8: Function bhi reference-based hota hai?
A: Haan, functions bhi non-primitive hain, reference-based.

Q9: const se object declare kiye toh modify kar sakte ho?
A: Haan! const reference ko freeze karta hai, object ko nahi.
   const obj = {}; obj.name = "Mayank"; ✅ allowed

Q10: typeof check karne se kya difference aata hai primitive vs non-primitive?
A: typeof primitive ke liye sahi result deta hai but object/array dono
   "object" return karte hain. null bhi "object" return karta hai (bug!).
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

/*
1. STATE MANAGEMENT (React, Vue)
   - Reducer functions mein immutability important hai
   - Spread operator use karke new state objects banate hain
   
   Example:
   const newState = { ...state, count: state.count + 1 };
*/

function stateReducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'UPDATE_NAME':
            return { ...state, name: action.payload };
        default:
            return state;
    }
}

let appState = { count: 0, name: "User" };
appState = stateReducer(appState, { type: 'INCREMENT' });
console.log("New appState:", appState); // { count: 1, name: "User" }


/*
2. API RESPONSE HANDLING
   - API se data aata hai, usko directly modify nahi karte
   - Copy banate ho filtering/mapping ke liye
*/

let apiData = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 }
];

// Copy banate hain taaki original data safe rahe
let filteredData = apiData.filter(item => item.price > 150);
console.log("filteredData:", filteredData); // [{id: 2, name: "Product B", price: 200}]
console.log("apiData (unchanged):", apiData); // Original unchanged


/*
3. FORM DATA HANDLING
   - User input ko handle karte ho, original data preserve karna important
*/

let formData = {
    name: "",
    email: "",
    message: ""
};

let userInput = { ...formData }; // Copy
userInput.name = "John";
userInput.email = "john@example.com";

console.log("formData (template):", formData); // Empty (unchanged)
console.log("userInput (filled):", userInput); // Filled with data


/*
4. ARRAY OPERATIONS
   - Destructuring aur spread operator practical use
*/

let originalList = [10, 20, 30];
let [first, second, ...rest] = originalList;
console.log("first:", first);   // 10
console.log("second:", second); // 20
console.log("rest:", rest);     // [30]


/*
5. FUNCTION PARAMETERS
   - Object/array pass karte ho toh reference jaata hai
   - Modification se original affected hota hai
*/

let user = { name: "Mayank", age: 22 };

function updateUserAge(userObj, newAge) {
    userObj.age = newAge; // Direct modification! (Reference)
}

updateUserAge(user, 25);
console.log("user after update:", user); // age: 25 (changed!)

// Better approach: Copy banate hain
function updateUserAgeSafe(userObj, newAge) {
    return { ...userObj, age: newAge }; // New object with updated age
}

let user2 = { name: "Raj", age: 22 };
let updatedUser = updateUserAgeSafe(user2, 25);
console.log("user2 (original):", user2);       // age: 22 (unchanged)
console.log("updatedUser (new):", updatedUser); // age: 25


/*
6. CLONING DATABASES/CACHING
   - Database cache karte ho toh reference avoid karna chahiye
*/

let masterData = {
    users: [
        { id: 1, name: "User1" },
        { id: 2, name: "User2" }
    ]
};

// ❌ Wrong approach (reference)
let cacheWrong = masterData;
cacheWrong.users[0].name = "Modified";
console.log("masterData affected:", masterData.users[0].name); // "Modified"

// ✅ Right approach (deep copy)
let cacheRight = structuredClone(masterData);
cacheRight.users[0].name = "Still Original";
console.log("masterData safe:", masterData.users[0].name); // Original name


// ========================================
// 📝 MEMORY OPTIMIZATION TIPS
// ========================================

/*
1. Bade arrays/objects ko kabhi direct pass na karo function mein
   - Unnecessary reference creation
   - Instead, specific data pass karo

2. Circular references avoid karo
   - Memory leak ho sakta hai
   
3. Deep copy sirf jab zaruri ho
   - Performance impact hai
   
4. WeakMap/WeakSet use karo weak references ke liye
   - Garbage collection better hota hai

5. const use karo primitive ke liye
   - Reference ko accidental modification se bachao
*/