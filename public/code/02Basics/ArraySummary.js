// ========================================
// 📦 ARRAYS - COMPLETE DETAILED GUIDE
// ========================================

/*
JavaScript Arrays are RESIZABLE collections:
1. Resizable - dynamically grow/shrink
2. Mixed types - can store different data types
3. Zero-indexed - indexing starts from 0
4. NOT associative - cannot use arbitrary string keys

Important Memory Concept:
- Array copy = SHALLOW COPY (reference-based, call by reference)
- Direct assignment = reference pass hota hai
- Deep copy ke liye special methods use karte ho (spread, slice, etc.)
*/

// ========================================
// 🟢 ARRAY BASICS & CREATION
// ========================================

console.log("=== ARRAY CREATION ===\n");

// Method 1: Array literal
const myArr = [0, 1, 2, 3, 4];
console.log("Literal array:", myArr);
console.log("Type:", typeof myArr); // "object"
console.log("Is Array?:", Array.isArray(myArr)); // true

// Method 2: Array constructor
const myArr2 = new Array(1, 2, 3, 4);
console.log("Constructor array:", myArr2);

// Method 3: Array with pre-defined length
const emptyArray = new Array(5); // Creates array of length 5, all undefined
console.log("Empty array (length 5):", emptyArray);

// Mixed data types (allowed in JavaScript)
const mixedArray = [1, "hello", true, null, undefined, { name: "Mayank" }, [1, 2, 3]];
console.log("Mixed array:", mixedArray);

// Accessing elements
console.log("\nAccessing elements:");
console.log("First element:", myArr[0]); // 0
console.log("Last element:", myArr[myArr.length - 1]); // 4

// Array properties
console.log("\nArray properties:");
console.log("Length:", myArr.length); // 5


// ========================================
// 🔵 ARRAY MUTATING METHODS (Change Original)
// ========================================

console.log("\n=== MUTATING METHODS (Modify Original) ===\n");

// COPY FOR DEMONSTRATION
let arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);

// 1️⃣ push() - Add element at END
console.log("\n1. push(6) - Add at end:");
arr.push(6);
console.log("After push(6):", arr); // [1, 2, 3, 4, 5, 6]
console.log("Returns:", "Length (6)");

// 2️⃣ pop() - Remove element from END
console.log("\n2. pop() - Remove from end:");
let removed = arr.pop();
console.log("Removed element:", removed); // 6
console.log("After pop():", arr); // [1, 2, 3, 4, 5]

// 3️⃣ unshift() - Add element at START (shifts others right)
console.log("\n3. unshift(0) - Add at start:");
arr.unshift(0);
console.log("After unshift(0):", arr); // [0, 1, 2, 3, 4, 5]

// 4️⃣ shift() - Remove element from START
console.log("\n4. shift() - Remove from start:");
removed = arr.shift();
console.log("Removed element:", removed); // 0
console.log("After shift():", arr); // [1, 2, 3, 4, 5]

// 5️⃣ reverse() - Reverse array
console.log("\n5. reverse() - Reverse array:");
arr.reverse();
console.log("After reverse():", arr); // [5, 4, 3, 2, 1]
arr.reverse(); // Reverse back

// 6️⃣ sort() - Sort array
console.log("\n6. sort() - Sort array:");
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
numbers.sort();
console.log("After sort():", numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// sort() with comparison function (for numbers)
const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b); // ascending
console.log("Ascending:", nums);
nums.sort((a, b) => b - a); // descending
console.log("Descending:", nums);

// 7️⃣ splice() - Add/Remove/Replace elements
console.log("\n7. splice(start, deleteCount, ...items) - Most Important!");
let spliceArr = [1, 2, 3, 4, 5];
console.log("Original:", spliceArr);

// splice(1, 2) - Remove 2 elements starting from index 1
let removed2 = spliceArr.splice(1, 2);
console.log("Removed (splice(1, 2)):", removed2); // [2, 3]
console.log("After splice:", spliceArr); // [1, 4, 5]

// splice with insertion
spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(2, 1, "a", "b"); // Remove 1 element at index 2, insert "a", "b"
console.log("After splice(2, 1, 'a', 'b'):", spliceArr); // [1, 2, "a", "b", 4, 5]


// ========================================
// 🟡 ARRAY NON-MUTATING METHODS (Return New)
// ========================================

console.log("\n=== NON-MUTATING METHODS (Return New Array) ===\n");

let originalArr = [1, 2, 3, 4, 5];

// 1️⃣ slice() - Extract portion (does NOT modify original)
console.log("\n1. slice(start, end) - Extract portion:");
console.log("Original:", originalArr);
console.log("slice(1, 3):", originalArr.slice(1, 3)); // [2, 3]
console.log("slice(2):", originalArr.slice(2)); // [3, 4, 5]
console.log("slice(-2):", originalArr.slice(-2)); // [4, 5] (last 2)
console.log("Original unchanged:", originalArr);

/*
⚠️ CRITICAL: slice() vs splice()
- slice(start, end): Non-mutating, returns new array, END EXCLUDED
- splice(start, deleteCount, ...items): Mutating, modifies original, REPLACES
*/

// 2️⃣ concat() - Merge arrays
console.log("\n2. concat() - Merge arrays:");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log("concat result:", merged); // [1, 2, 3, 4, 5, 6]
console.log("arr1 unchanged:", arr1); // [1, 2, 3]

// Merge multiple arrays
const all = arr1.concat(arr2, [7, 8]);
console.log("Multiple concat:", all); // [1, 2, 3, 4, 5, 6, 7, 8]

// 3️⃣ join() - Convert to string
console.log("\n3. join(separator) - Convert to string:");
const fruits = ["apple", "banana", "cherry"];
console.log("join():", fruits.join()); // "apple,banana,cherry"
console.log("join(' - '):", fruits.join(" - ")); // "apple - banana - cherry"
console.log("join(''):", fruits.join("")); // "applebananacherry"

// 4️⃣ includes() - Check if element exists
console.log("\n4. includes(element) - Check existence:");
const colors = ["red", "green", "blue"];
console.log("includes('red'):", colors.includes("red")); // true
console.log("includes('yellow'):", colors.includes("yellow")); // false

// 5️⃣ indexOf() - Find index of element
console.log("\n5. indexOf(element) - Find position:");
console.log("indexOf('green'):", colors.indexOf("green")); // 1
console.log("indexOf('yellow'):", colors.indexOf("yellow")); // -1

// 6️⃣ lastIndexOf() - Find last occurrence
console.log("\n6. lastIndexOf(element):");
const nums2 = [1, 2, 3, 2, 1];
console.log("lastIndexOf(2):", nums2.lastIndexOf(2)); // 3


// ========================================
// 🟠 HIGHER-ORDER ARRAY METHODS
// ========================================

console.log("\n=== HIGHER-ORDER METHODS (Callback Functions) ===\n");

const numbers2 = [1, 2, 3, 4, 5];

// 1️⃣ map() - Transform each element
console.log("\n1. map() - Transform elements:");
const doubled = numbers2.map(num => num * 2);
console.log("Original:", numbers2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// 2️⃣ filter() - Keep elements that pass test
console.log("\n2. filter() - Keep matching elements:");
const evens = numbers2.filter(num => num % 2 === 0);
console.log("Even numbers:", evens); // [2, 4]

// 3️⃣ reduce() - Accumulate to single value
console.log("\n3. reduce() - Accumulate value:");
const sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 15

const product = numbers2.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // 120

// 4️⃣ forEach() - Execute function for each element
console.log("\n4. forEach() - Execute for each:");
numbers2.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// 5️⃣ find() - Return first matching element
console.log("\n5. find() - Find first match:");
const users = [
    { id: 1, name: "Mayank" },
    { id: 2, name: "Raj" },
    { id: 3, name: "Priya" }
];
const user = users.find(u => u.id === 2);
console.log("Found user:", user); // { id: 2, name: "Raj" }

// 6️⃣ findIndex() - Return index of first matching
console.log("\n6. findIndex() - Find index:");
const index = users.findIndex(u => u.name === "Priya");
console.log("Index of Priya:", index); // 2

// 7️⃣ some() - Check if ANY element passes test
console.log("\n7. some() - Any match?:");
const hasEven = numbers2.some(num => num % 2 === 0);
console.log("Has even numbers?:", hasEven); // true

// 8️⃣ every() - Check if ALL elements pass test
console.log("\n8. every() - All match?:");
const allPositive = numbers2.every(num => num > 0);
console.log("All positive?:", allPositive); // true


// ========================================
// 🔴 SPREAD OPERATOR (...) & SPREAD SYNTAX
// ========================================

console.log("\n=== SPREAD OPERATOR (...) ===\n");

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

// 1️⃣ Merge arrays using spread
console.log("\n1. Merge arrays:");
const merged2 = [...arr3, ...arr4];
console.log("Spread merge:", merged2); // [1, 2, 3, 4, 5, 6]

// 2️⃣ Add elements in middle
console.log("\n2. Add elements:");
const newArray = [0, ...arr3, 3.5, ...arr4, 7];
console.log("With additions:", newArray); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// 3️⃣ Copy array (SHALLOW copy)
console.log("\n3. Copy array (Shallow):");
const original = [1, 2, [3, 4]];
const copied = [...original];
console.log("Original:", original);
console.log("Copied:", copied);
console.log("Are same reference?:", original === copied); // false (different arrays)
console.log("Nested arrays same reference?:", original[2] === copied[2]); // true (SHALLOW!)

// 4️⃣ Spread in function arguments
console.log("\n4. Function arguments:");
const nums3 = [10, 20, 5];
const maxNum = Math.max(...nums3); // ...nums3 becomes (10, 20, 5)
console.log("Max number:", maxNum); // 20


// ========================================
// 🟣 FLAT & FLATMAP - NESTED ARRAYS
// ========================================

console.log("\n=== FLAT & FLATMAP ===\n");

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
console.log("Nested array:", nestedArray);

// 1️⃣ flat() - Flatten nested arrays
console.log("\n1. flat() - Flatten:");
console.log("flat(1):", nestedArray.flat(1)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
console.log("flat(2):", nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("flat(Infinity):", nestedArray.flat(Infinity)); // Completely flattened

// 2️⃣ flatMap() - Map then flatten
console.log("\n2. flatMap() - Map + Flatten:");
const doubledFlat = [1, 2, 3].flatMap(num => [num, num * 2]);
console.log("flatMap result:", doubledFlat); // [1, 2, 2, 4, 3, 6]


// ========================================
// 🟢 ARRAY STATIC METHODS
// ========================================

console.log("\n=== ARRAY STATIC METHODS ===\n");

// 1️⃣ Array.isArray() - Check if is array
console.log("\n1. Array.isArray():");
console.log("Array.isArray([1,2,3]):", Array.isArray([1, 2, 3])); // true
console.log("Array.isArray('hello'):", Array.isArray('hello')); // false
console.log("Array.isArray({}):", Array.isArray({})); // false

// 2️⃣ Array.from() - Convert to array
console.log("\n2. Array.from() - Convert to array:");
console.log("From string:", Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log("From object:", Array.from({ 0: 'a', 1: 'b', length: 2 })); // ['a', 'b']

// 3️⃣ Array.of() - Create array from elements
console.log("\n3. Array.of():");
console.log("Array.of(1, 2, 3):", Array.of(1, 2, 3)); // [1, 2, 3]
console.log("Array.of(5):", Array.of(5)); // [5] (NOT array of length 5!)


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: slice() aur splice() mein kya difference hai?
A: slice() - non-mutating, returns new array, end excluded
   splice() - mutating, modifies original, can add/remove/replace
   
   [1,2,3,4,5].slice(1,3) → [2,3] (original unchanged)
   [1,2,3,4,5].splice(1,2) → [2,3] (original becomes [1,4,5])

Q2: Array copy se reference copy ho jaata hai?
A: Haan! Direct assignment reference copy hota hai.
   const copy = original; // Same reference
   const copy = [...original]; // New array but shallow copy
   const copy = JSON.parse(JSON.stringify(original)); // Deep copy

Q3: spread operator (...) ka use kya hai?
A: Iterable elements ko expand karna.
   Merge arrays: [...arr1, ...arr2]
   Copy array: [...arr]
   Function args: Math.max(...numbers)

Q4: map() aur forEach() mein difference?
A: map() - returns new array, used for transformation
   forEach() - no return, used for side effects
   
   map: const doubled = arr.map(x => x * 2);
   forEach: arr.forEach(x => console.log(x));

Q5: filter() aur find() mein kya difference hai?
A: filter() - returns ALL matching elements as array
   find() - returns FIRST matching element (not array)
   
   filter: [1,2,3,4].filter(x => x > 2) → [3, 4]
   find: [1,2,3,4].find(x => x > 2) → 3

Q6: reduce() kaise kaam karta hai?
A: Accumulator + current value ko combine karke single value return karta hai.
   [1,2,3].reduce((acc, curr) => acc + curr, 0)
   → 0+1=1, 1+2=3, 3+3=6

Q7: flat() ka use case kya hai?
A: Nested arrays ko flatten karna (merge karna)
   [[1,2],[3,4]].flat() → [1,2,3,4]

Q8: Array.from() ka use kya hai?
A: Non-array iterables ko array mein convert karna.
   Array.from("hello") → ['h','e','l','l','o']
   Array.from(document.querySelectorAll('div')) → [div1, div2, ...]

Q9: indexOf(-1) return karta hai toh kya matlab?
A: Element array mein nahi hai.
   [1,2,3].indexOf(5) → -1

Q10: some() aur every() mein difference?
A: some() - returns true if ANY element passes
   every() - returns true if ALL elements pass
   
   [1,2,3,4].some(x => x > 3) → true (4 > 3)
   [1,2,3,4].every(x => x > 0) → true (all positive)
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. FILTERING & SEARCHING
   - Product filters
   - User search
*/

const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Phone", price: 30000, category: "Electronics" },
    { id: 3, name: "Shirt", price: 1000, category: "Clothing" },
    { id: 4, name: "Pants", price: 1500, category: "Clothing" }
];

// Filter by price
const affordableProducts = products.filter(p => p.price < 20000);
console.log("Affordable products:", affordableProducts);

// Find specific product
const laptop = products.find(p => p.name === "Laptop");
console.log("Found product:", laptop);

// Get product names
const names = products.map(p => p.name);
console.log("Product names:", names);


/*
2. DATA TRANSFORMATION
   - API responses
   - Format changes
*/

function transformUsers(apiData) {
    return apiData.map(user => ({
        id: user.id,
        fullName: user.first_name + " " + user.last_name,
        displayName: user.first_name.toUpperCase(),
        email: user.email.toLowerCase(),
        isActive: user.status === "active"
    }));
}

const apiResponse = [
    { id: 1, first_name: "Mayank", last_name: "Shedge", email: "MAYANK@GMAIL.COM", status: "active" },
    { id: 2, first_name: "Raj", last_name: "Kumar", email: "RAJ@GMAIL.COM", status: "inactive" }
];

const transformedUsers = transformUsers(apiResponse);
console.log("\nTransformed users:", transformedUsers);


/*
3. CART CALCULATION
   - Sum total price
   - Count items
*/

const cartItems = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);

console.log("\nCart calculation:");
console.log("Total price: ₹" + totalPrice); // ₹55000
console.log("Total items:", totalItems); // 4


/*
4. PAGINATION
   - Slice data into pages
*/

function paginate(arr, pageSize, pageNumber) {
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    return arr.slice(start, end);
}

const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nPagination:");
console.log("Page 1:", paginate(allItems, 3, 1)); // [1, 2, 3]
console.log("Page 2:", paginate(allItems, 3, 2)); // [4, 5, 6]
console.log("Page 3:", paginate(allItems, 3, 3)); // [7, 8, 9]


/*
5. UNIQUE VALUES
   - Remove duplicates
*/

function getUniqueValues(arr) {
    return [...new Set(arr)];
}

const duplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log("\nUnique values:", getUniqueValues(duplicates)); // [1, 2, 3, 4, 5]


/*
6. SORTING
   - Sort products
   - Sort users
*/

function sortProducts(products, sortBy = 'price', order = 'asc') {
    const sorted = [...products]; // Don't modify original
    
    sorted.sort((a, b) => {
        if (order === 'asc') {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
    });
    
    return sorted;
}

console.log("\nSort by price ascending:");
console.log(sortProducts(products, 'price', 'asc').map(p => ({ name: p.name, price: p.price })));


/*
7. FLATTEN NESTED DATA
   - Comments with replies
   - Category hierarchy
*/

const comments = [
    { id: 1, text: "Great!", replies: [{ id: 2, text: "Thanks!" }, { id: 3, text: "Nice!" }] },
    { id: 4, text: "Good!", replies: [{ id: 5, text: "Agreed!" }] }
];

// Get all comment texts (including replies)
const allTexts = comments.flatMap(c => [c.text, ...c.replies.map(r => r.text)]);
console.log("\nAll comment texts:", allTexts);


/*
8. GROUP BY
   - Group products by category
*/

function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        const group = item[key];
        if (!result[group]) result[group] = [];
        result[group].push(item);
        return result;
    }, {});
}

const grouped = groupBy(products, 'category');
console.log("\nGrouped by category:", grouped);