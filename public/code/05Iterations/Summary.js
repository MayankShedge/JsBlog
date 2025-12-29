// ========================================
// 🔄 ITERATIONS & LOOPS - COMPREHENSIVE MASTERCLASS
// ========================================

/*
Iterations = Repeating code multiple times

Loop Types:
1. for - Classical loop (fixed iterations)
2. while - Unknown iteration count
3. do-while - At least once execution
4. for...of - Iterate over values (arrays, strings)
5. for...in - Iterate over keys/indices (objects, arrays)
6. forEach - Array method with callback
7. map - Transform array elements
8. filter - Keep matching elements
9. reduce - Accumulate to single value
10. find, findIndex, some, every - Conditional iteration

Production use: Data processing, filtering, transformation, API responses, etc.

⭐ INTERVIEW IMPORTANCE: 40% of JavaScript interviews ask about loops!
Most asked topics: for vs forEach, break/continue, nested loops, loop optimization
*/

// ========================================
// 🟢 CLASSICAL FOR LOOP - MOST IMPORTANT
// ========================================

console.log("=== CLASSICAL FOR LOOP ===\n");

/*
Syntax: for (initialization; condition; increment) { }

1. Initialization: runs once at start
2. Condition: checked before each iteration
3. Increment: runs after each iteration
4. Body: executes if condition is true

⭐ INTERVIEW IMPORTANCE: 
- Asked in 90% of interviews
- Questions focus on: performance, break/continue, nested loops
- Common trap: off-by-one errors
*/

// Basic for loop (0 to 10)
console.log("1. Basic for loop (0-10):");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// For loop with condition inside
console.log("\n2. For loop with condition:");
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("Found 5!");
    }
}

// For loop counting backwards
console.log("\n3. Backwards for loop:");
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

// For loop with different increments
console.log("\n4. Loop with step (increment by 2):");
for (let i = 0; i <= 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8, 10
}

// For loop with multiplication
console.log("\n5. Multiplication table:");
for (let i = 1; i <= 5; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// Multiple variables in for loop
console.log("\n6. For loop with multiple variables:");
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i=${i}, j=${j}`);
}

// Infinite for loop (controlled with break)
console.log("\n7. Infinite for loop (with break):");
let counter = 0;
for (;;) {
    console.log(`Counter: ${counter}`);
    counter++;
    if (counter === 3) break;
}

// Empty increment for loop
console.log("\n8. Manual increment:");
for (let i = 1; i <= 3;) {
    console.log(i);
    i += 2;
}

/*
⚠️ Important points:
- Loop variable (i) is block-scoped if using let
- Multiple initialization/increments possible
- Infinite loops possible: for(;;) { }
- Performance: for loop is fastest for large iterations
- Off-by-one errors: very common in interviews

✅ Best practices:
- Always use const/let, not var
- Clear variable names (not just i)
- Pre-calculate array.length for performance
*/

// Performance optimization
console.log("\n9. Performance comparison:");
const largeArr = Array.from({ length: 1000 }, (_, i) => i);

// ❌ Bad: calculating length each time
console.time("with length calculation");
for (let i = 0; i < largeArr.length; i++) {
    // Do something
}
console.timeEnd("with length calculation");

// ✅ Good: cache length
console.time("with cached length");
for (let i = 0, len = largeArr.length; i < len; i++) {
    // Do something
}
console.timeEnd("with cached length");


// ========================================
// 🔵 NESTED FOR LOOPS - CRITICAL FOR INTERVIEWS
// ========================================

console.log("\n=== NESTED FOR LOOPS ===\n");

/*
⭐ INTERVIEW IMPORTANCE:
- Asked frequently: "Write code for pattern"
- Tests: logic understanding, complexity analysis, optimization
- Common questions: multiplication table, patterns, 2D arrays, matrix operations
*/

// 2D iteration (matrix/multiplication table)
console.log("1. Multiplication table (3x3):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Pattern creation - triangle
console.log("\n2. Triangle pattern (increasing):");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Pattern creation - inverted triangle
console.log("\n3. Inverted triangle:");
for (let i = 5; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Diamond pattern (popular interview question)
console.log("\n4. Diamond pattern:");
const n = 5;
for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
}
for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
}

// Pyramid with numbers
console.log("\n5. Number pyramid:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// 2D array manipulation
console.log("\n6. 2D array (matrix) iteration:");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// Breaking from nested loop
console.log("\n7. Breaking from nested (labeled break):");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking at i=2, j=2");
            break outerLoop; // Breaks both loops!
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// Continue in nested loop
console.log("\n8. Continue in nested:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) continue; // Skip when j=2
        console.log(`i=${i}, j=${j}`);
    }
}

/*
⚠️ Nested loop complexity:
- 1 level: O(n)
- 2 levels: O(n²)
- 3 levels: O(n³)
- Be careful with large datasets!
- Optimize when possible
*/


// ========================================
// 🟠 ARRAY ITERATION WITH FOR LOOP
// ========================================

console.log("\n=== FOR LOOP WITH ARRAYS ===\n");

/*
⭐ INTERVIEW IMPORTANCE:
- Fundamental skill
- Often combined with conditions
- Performance questions common
*/

const myArr = ["Flash", "Batman", "Superman"];
console.log("Array:", myArr);
console.log("Array length:", myArr.length);

// Iterate through array (basic)
console.log("\n1. Basic array iteration:");
for (let i = 0; i < myArr.length; i++) {
    console.log(`Index ${i}: ${myArr[i]}`);
}

// Find specific element
console.log("\n2. Find specific element:");
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === "Batman") {
        console.log(`Found Batman at index ${i}`);
    }
}

// Modify array elements
console.log("\n3. Modify elements during iteration:");
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}
console.log("Doubled:", numbers);

// Reverse array iteration
console.log("\n4. Reverse array iteration:");
const arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// Count specific elements
console.log("\n5. Count occurrences:");
const items = ["apple", "banana", "apple", "cherry", "apple"];
let count = 0;
for (let i = 0; i < items.length; i++) {
    if (items[i] === "apple") {
        count++;
    }
}
console.log("Apple count:", count);

// Search for multiple conditions
console.log("\n6. Complex search:");
const products = [
    { name: "Laptop", price: 50000, inStock: true },
    { name: "Mouse", price: 500, inStock: false },
    { name: "Keyboard", price: 2000, inStock: true }
];

for (let i = 0; i < products.length; i++) {
    if (products[i].inStock && products[i].price < 30000) {
        console.log(`Available: ${products[i].name}`);
    }
}


// ========================================
// 🔴 BREAK & CONTINUE - CRITICAL INTERVIEW TOPIC
// ========================================

console.log("\n=== BREAK & CONTINUE ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
- Asked in almost every loop interview
- Tests: understanding of control flow, loop logic
- Common questions: "When does break/continue execute?"
- Tricky cases: nested loops, labeled breaks
*/

// BREAK - Exit loop completely
console.log("1. BREAK - Exit entire loop:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Break at 5");
        break;
    }
    console.log(i);
}

// CONTINUE - Skip current iteration
console.log("\n2. CONTINUE - Skip current iteration:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skip 5");
        continue;
    }
    console.log(i);
}

// Find first even number
console.log("\n3. Find first even (break):");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`First even: ${i}`);
        break;
    }
}

// Skip odd numbers
console.log("\n4. Skip odd numbers (continue):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(`Even: ${i}`);
}

// Stop at first negative
console.log("\n5. Stop at negative (break):");
const values = [1, 2, 3, -5, 6, 7];
for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        console.log("Found negative, stopping");
        break;
    }
    console.log(values[i]);
}

// Break with labeled loops (advanced)
console.log("\n6. Labeled break (nested):");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking outer loop at i=2, j=2");
            break outerLoop;
        }
        console.log(`i=${i}, j=${j}`);
    }
}

/*
⚠️ Common mistakes:
- Forgetting break/continue inside condition
- Using break/continue outside loops (❌ syntax error)
- Confused with return statement
- Labeled breaks making code harder to read

✅ Interview tips:
- Explain when break/continue executes
- Show difference between them
- Handle edge cases (when never called)
*/


// ========================================
// 🟣 WHILE LOOP - CONDITIONAL ITERATION
// ========================================

console.log("\n=== WHILE LOOP ===\n");

/*
Syntax: while (condition) { }

Use when:
- Don't know iteration count beforehand
- Condition-based iteration
- Reading until condition met

⭐ INTERVIEW IMPORTANCE:
- Asked frequently
- Questions: when to use vs for, infinite loops, break conditions
*/

// Basic while
console.log("1. Basic while:");
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// While with changing condition
console.log("\n2. While with changing condition:");
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// While with array
console.log("\n3. While with array iteration:");
const heros = ["Flash", "Batman", "Superman"];
let index = 0;
while (index < heros.length) {
    console.log(heros[index]);
    index++;
}

// While with different steps
console.log("\n4. While with steps (increment by 5):");
let num = 0;
while (num <= 20) {
    console.log(num);
    num += 5;
}

// Infinite while (controlled with break)
console.log("\n5. Infinite while (with break):");
let attempts = 0;
while (true) {
    attempts++;
    console.log(`Attempt ${attempts}`);
    if (attempts === 3) {
        console.log("Breaking");
        break;
    }
}

// Real-world: Input validation simulation
console.log("\n6. Input validation (real-world simulation):");
let userInput = "";
let validationAttempts = 0;
while (!userInput || userInput.length < 3) {
    validationAttempts++;
    if (validationAttempts === 1) {
        userInput = "ab"; // Too short
    } else if (validationAttempts === 2) {
        userInput = "validInput";
        console.log(`Valid after ${validationAttempts} attempts`);
    }
}

// Search in array until found
console.log("\n7. Search until found:");
const searchArray = [10, 20, 30, 40, 50];
let searchIndex = 0;
let target = 30;
while (searchIndex < searchArray.length) {
    if (searchArray[searchIndex] === target) {
        console.log(`Found ${target} at index ${searchIndex}`);
        break;
    }
    searchIndex++;
}

/*
⚠️ While loop risks:
- Infinite loops if condition never becomes false
- Must ensure variable change in loop body
- Performance: slower than for loop for large iterations
- Harder to understand loop end condition

✅ When to use:
- Unknown iteration count
- Condition-based (file reading, API polling)
- User input validation
- Event-based loops
*/


// ========================================
// 🟢 DO-WHILE LOOP - AT LEAST ONCE
// ========================================

console.log("\n=== DO-WHILE LOOP ===\n");

/*
Syntax: do { } while (condition)

Key: Body executes FIRST, then condition checked.
Executes at least once, even if condition is false!

⭐ INTERVIEW IMPORTANCE: MODERATE
- Not as common as for/while
- Trick question: "What if condition is false?"
- Real-world: menu systems, input validation
*/

// Basic do-while
console.log("1. Basic do-while:");
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);

// Do-while with false condition (still executes once!)
console.log("\n2. Do-while with false condition:");
do {
    console.log("This runs even though condition is false!");
} while (false);

// Menu system
console.log("\n3. Menu system simulation:");
let choice = 0;
do {
    choice++;
    console.log(`Menu option ${choice}`);
} while (choice < 3);

// Compare with while (won't execute)
console.log("\n4. Compare while vs do-while:");
let x = 10;
console.log("While loop:");
while (x < 5) {
    console.log("While: This won't run");
}

let y = 10;
console.log("Do-while loop:");
do {
    console.log("Do-while: This runs once");
} while (y < 5);

// Input validation with do-while
console.log("\n5. Input validation (guaranteed execution):");
let validInput = "";
do {
    validInput = Math.random() > 0.5 ? "valid" : "";
    console.log(`Input attempt: "${validInput}"`);
} while (!validInput);

/*
⚠️ Do-while characteristics:
- ALWAYS executes at least once
- Body runs before condition check
- Perfect for: menus, initial attempts, validation
- Rarely used in modern code
- Common interview trick: "What if condition is false?"
*/


// ========================================
// 🔵 FOR...OF LOOP - ITERATE VALUES
// ========================================

console.log("\n=== FOR...OF LOOP ===\n");

/*
Syntax: for (const value of iterable) { }

Iterates over VALUES of arrays, strings, iterables.
Cannot be used on plain objects.
Modern, cleaner syntax than traditional for loop.

⭐ INTERVIEW IMPORTANCE: HIGH
- Modern JavaScript question
- Asked with: maps, sets, iterables
- Compare with for...in
*/

// Array iteration
console.log("1. For...of with array:");
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// String iteration
console.log("\n2. For...of with string:");
const word = "Hello";
for (const letter of word) {
    console.log(letter);
}

// Break in for...of
console.log("\n3. For...of with break (stop at space):");
const sentence = "Hello World";
for (const char of sentence) {
    if (char === " ") {
        console.log("Found space");
        break;
    }
    console.log(char);
}

// Array with index using entries()
console.log("\n4. For...of with index (entries()):");
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}

// Map iteration
console.log("\n5. For...of with Map:");
const map = new Map();
map.set("name", "Mayank");
map.set("age", 22);
map.set("city", "Mumbai");

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Set iteration
console.log("\n6. For...of with Set:");
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 3]);
for (const num of uniqueNumbers) {
    console.log(num);
}

// Can't iterate plain objects
console.log("\n7. For...of with object (❌ Won't work):");
const user = { name: "Mayank", age: 22 };
try {
    for (const value of user) {
        console.log(value);
    }
} catch (e) {
    console.log("Error: Cannot iterate plain object with for...of");
}

/*
⚠️ For...of limitations:
- Cannot iterate plain objects
- Cannot get index directly
- Cannot skip ahead easily
- Preference over for loop for modern code

✅ When to use:
- Arrays, strings
- Maps, Sets
- Custom iterables
- When you need values, not indices
*/


// ========================================
// 🟠 FOR...IN LOOP - ITERATE KEYS
// ========================================

console.log("\n=== FOR...IN LOOP ===\n");

/*
Syntax: for (const key in object) { }

Iterates over KEYS/INDICES.
Works on plain objects (for...of doesn't).
Gets indices for arrays, keys for objects.

⭐ INTERVIEW IMPORTANCE: HIGH
- Asked frequently
- Compare with for...of (common question)
- Inheritance issues (prototype pollution)
*/

// Object iteration
console.log("1. For...in with object:");
const userObj = {
    name: "Mayank",
    age: 22,
    city: "Mumbai"
};

for (const key in userObj) {
    console.log(`${key}: ${userObj[key]}`);
}

// Array iteration (gets indices)
console.log("\n2. For...in with array:");
const colors = ["Red", "Green", "Blue"];
for (const index in colors) {
    console.log(`${index}: ${colors[index]}`);
}

// String iteration (gets indices)
console.log("\n3. For...in with string:");
const str = "ABC";
for (const index in str) {
    console.log(`${index}: ${str[index]}`);
}

// Prototype pollution issue
console.log("\n4. For...in includes inherited properties:");
const obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: true
});

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Use hasOwnProperty to avoid inherited
console.log("\n5. For...in with hasOwnProperty (safe):");
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`Own property - ${key}: ${obj[key]}`);
    }
}

// For...in doesn't work well with Maps
console.log("\n6. For...in with Map (❌ doesn't work):");
const myMap = new Map([["key1", "value1"], ["key2", "value2"]]);
for (const key in myMap) {
    console.log(key); // Won't get expected output
}

/*
⚠️ For...in important notes:
- Includes inherited enumerable properties
- Use hasOwnProperty for safety
- Indices are strings, not numbers
- Avoid with Arrays (use for...of instead)
- Doesn't work with Maps/Sets

✅ For...in vs For...of (INTERVIEW GOLD):
for...in   → Keys/Indices (objects, arrays)
for...of   → Values (arrays, strings, iterables)

Which to use:
Array:  for...of (cleaner, gets values)
Object: for...in (only option for plain objects)
Map:    for...of (iterates [key, value] pairs)
*/


// ========================================
// 🔴 FOREACH - ARRAY METHOD CALLBACK
// ========================================

console.log("\n=== FOREACH METHOD ===\n");

/*
Syntax: array.forEach((item, index, array) => { })

Callback parameters:
1. item - current element
2. index - current index
3. array - entire array

⭐ INTERVIEW IMPORTANCE: VERY HIGH
- Asked in 80% of interviews
- Questions: vs map, vs for, break/continue confusion
- Tricky: forEach doesn't return anything
*/

// Basic forEach
console.log("1. Basic forEach:");
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => {
    console.log(num);
});

// forEach with index
console.log("\n2. forEach with index:");
numbers2.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// forEach with entire array
console.log("\n3. forEach with entire array:");
numbers2.forEach((num, index, arr) => {
    console.log(`Element ${num}, Array: [${arr}]`);
});

// forEach with named function
console.log("\n4. forEach with named function:");
function printElement(element) {
    console.log(`Element: ${element}`);
}

numbers2.forEach(printElement);

// forEach doesn't return anything
console.log("\n5. forEach return value:");
const result = numbers2.forEach(num => num * 2);
console.log("forEach result:", result); // undefined

// forEach - cannot break
console.log("\n6. forEach - cannot use break:");
numbers2.forEach(num => {
    if (num === 3) {
        console.log("Found 3, but cannot break");
        // break; // ❌ Syntax error!
    }
});

// forEach - return acts like continue
console.log("\n7. forEach with return (acts like continue):");
numbers2.forEach(num => {
    if (num === 3) {
        console.log("Skip 3");
        return; // Acts like continue!
    }
    console.log(num);
});

// Array of objects with forEach
console.log("\n8. forEach with array of objects:");
const users = [
    { id: 1, name: "Mayank" },
    { id: 2, name: "Raj" },
    { id: 3, name: "Priya" }
];

users.forEach(user => {
    console.log(`${user.id}: ${user.name}`);
});

// forEach - modify original array
console.log("\n9. Modifying array during forEach:");
const arr2 = [1, 2, 3];
arr2.forEach((num, index) => {
    arr2[index] = num * 2;
});
console.log("Modified:", arr2);

// forEach with object properties
console.log("\n10. forEach accessing nested properties:");
const books = [
    { title: "JS Book", author: "John", year: 2020 },
    { title: "Python Book", author: "Jane", year: 2021 }
];

books.forEach(book => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
});

/*
⚠️ forEach CRITICAL points:
- Returns undefined (NOT chainable!)
- Cannot break/return early
- Slower than for for very large arrays
- Modern: prefer for...of when possible

✅ When to use:
- Side effects (logging, API calls)
- No need to return modified array
- Array of objects processing

❌ When NOT to use:
- Need to return/break early → for loop
- Need new array → map/filter
- Need accumulated value → reduce
*/

// ========================================
// 🟣 MAP - TRANSFORM ARRAY ELEMENTS
// ========================================

console.log("\n=== MAP METHOD ===\n");

/*
Syntax: array.map((item, index, array) => newValue)

Returns NEW array with transformed elements.
Original array unchanged (immutable).
Perfect for data transformation.
Chainable with other methods.

⭐ INTERVIEW IMPORTANCE: VERY HIGH
- Asked in almost every interview
- Compare with forEach/filter
- Chaining questions
*/

// Basic map
console.log("1. Basic map - double numbers:");
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(num => num * 2);
console.log("Original:", nums);
console.log("Doubled:", doubled);

// Map with index
console.log("\n2. map with index:");
const indexed = nums.map((num, index) => `Index ${index}: ${num}`);
console.log(indexed);

// Transform objects
console.log("\n3. map array of objects:");
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 2000 }
];

const prices = products.map(product => product.price);
console.log("Prices:", prices);

// Extract properties
console.log("\n4. Extract specific properties:");
const names = products.map(p => p.name);
console.log("Product names:", names);

// String transformation
console.log("\n5. String transformation:");
const words = ["hello", "world", "javascript"];
const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalized);

// Complex transformation
console.log("\n6. Complex map transformation:");
const data = [1, 2, 3, 4, 5];
const transformed = data.map(num => ({
    original: num,
    squared: num ** 2,
    doubled: num * 2,
    isEven: num % 2 === 0
}));
console.log(transformed);

// Map with implicit return
console.log("\n7. Map with implicit return:");
const result1 = nums.map(n => n * 2);
console.log("Implicit return:", result1);

// Map with explicit return
console.log("\n8. Map with explicit return:");
const result2 = nums.map(n => {
    return n * 2;
});
console.log("Explicit return:", result2);

// ❌ Map without return
console.log("\n9. Map without return (❌ wrong):");
const wrongMap = nums.map(n => {
    n * 2; // No return!
});
console.log("Result:", wrongMap); // [undefined, undefined, ...]

// Real-world: API response transformation
console.log("\n10. Real-world: Transform API response:");
const apiData = [
    { user_id: 1, user_name: "Mayank", user_email: "mayank@gmail.com" },
    { user_id: 2, user_name: "Raj", user_email: "raj@gmail.com" }
];

const cleanedData = apiData.map(user => ({
    id: user.user_id,
    name: user.user_name,
    email: user.user_email
}));

console.log("Cleaned:", cleanedData);

/*
⚠️ map() best practices:
- Returns same-length array
- Original array unchanged
- Perfect for transformations
- Return value REQUIRED
- Use when you need the new array

✅ map() vs forEach():
map() - transforms, returns new array, chainable
forEach() - side effects only, returns undefined, NOT chainable

Common mistake:
const wrong = nums.map(n => {
    console.log(n); // Won't work as expected
});
Use forEach for this instead!
*/


// ========================================
// 🟢 FILTER - KEEP MATCHING ELEMENTS
// ========================================

console.log("\n=== FILTER METHOD ===\n");

/*
Syntax: array.filter((item, index, array) => boolean)

Returns NEW array with elements where callback returns true.
Original array unchanged.
Can return fewer elements than original.
Perfect for searching and filtering.

⭐ INTERVIEW IMPORTANCE: VERY HIGH
- Asked in almost every interview
- Compare with map/find
- Filtering logic questions
- Chaining with map/reduce
*/

// Basic filter - even numbers
console.log("1. Basic filter - even numbers:");
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers3.filter(num => num % 2 === 0);
console.log("Original:", numbers3);
console.log("Even numbers:", evens);

// Filter greater than 5
console.log("\n2. Filter greater than 5:");
const greaterThan5 = numbers3.filter(num => num > 5);
console.log(greaterThan5);

// Filter objects
console.log("\n3. Filter array of objects:");
const users2 = [
    { name: "Mayank", age: 22, active: true },
    { name: "Raj", age: 30, active: false },
    { name: "Priya", age: 25, active: true }
];

const activeUsers = users2.filter(user => user.active);
console.log("Active users:", activeUsers);

// Multiple conditions
console.log("\n4. Filter with multiple conditions:");
const adults = users2.filter(user => user.age >= 18 && user.active);
console.log("Active adults:", adults);

// String filtering
console.log("\n5. Filter strings by length:");
const words2 = ["apple", "bat", "cat", "dog", "elephant"];
const longWords = words2.filter(word => word.length > 3);
console.log("Long words:", longWords);

// Filter with index
console.log("\n6. Filter with index:");
const evenIndexes = numbers3.filter((num, index) => index % 2 === 0);
console.log("Even index elements:", evenIndexes);

// Real-world: Books dataset
console.log("\n7. Filter real-world data (books):");
const books2 = [
    { title: "JavaScript Book", genre: "Technology", published: 2020, price: 500 },
    { title: "History of Rome", genre: "History", published: 2015, price: 600 },
    { title: "AI Future", genre: "Technology", published: 2022, price: 800 },
    { title: "Philosophy 101", genre: "Philosophy", published: 2018, price: 400 }
];

const techBooks = books2.filter(book => book.genre === "Technology" && book.published > 2019);
console.log("Recent tech books:", techBooks);

// Filter and get count
console.log("\n8. Filter and count:");
const youngUsers = users2.filter(u => u.age < 30);
console.log(`Young users count: ${youngUsers.length}`);

// Filter empty values
console.log("\n9. Filter out empty/null:");
const mixedArray = [1, null, 2, undefined, 3, "", 4, 0];
const cleaned = mixedArray.filter(item => item !== null && item !== undefined && item !== "");
console.log("Cleaned:", cleaned);

// Filter with complex logic
console.log("\n10. Filter with complex logic:");
const products2 = [
    { name: "Laptop", price: 50000, inStock: true, rating: 4.5 },
    { name: "Mouse", price: 500, inStock: false, rating: 3.5 },
    { name: "Keyboard", price: 2000, inStock: true, rating: 4 },
    { name: "Monitor", price: 15000, inStock: true, rating: 4.8 }
];

const goodProducts = products2.filter(p => p.inStock && p.price < 20000 && p.rating >= 4);
console.log("Good products:", goodProducts);

/*
⚠️ filter() characteristics:
- Returns shorter array (or same length if all pass)
- Original unchanged
- Returns empty array [] if no matches
- Returns boolean from callback
- Perfect for search/filtering features

✅ Common interview questions:
- "Difference between filter and find?"
- "Can you chain filter?"
- "What if no elements match?"
- "Filter with multiple conditions?"

filter() vs find():
filter() → returns array of ALL matches
find() → returns FIRST match element (not array)
*/


// ========================================
// 🔵 REDUCE - ACCUMULATE TO VALUE
// ========================================

console.log("\n=== REDUCE METHOD ===\n");

/*
Syntax: array.reduce((accumulator, item, index, array) => newAccumulator, initialValue)

Accumulates array elements into single value.
Most powerful but complex method.
Perfect for: sum, count, grouping, transformations.

⭐ INTERVIEW IMPORTANCE: VERY HIGH
- Advanced interviews always ask
- Test: understanding of closures, accumulation
- Real-world heavy usage
*/

// Basic sum
console.log("1. Sum of array:");
const nums4 = [1, 2, 3, 4, 5];
const sum = nums4.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 15

// Product
console.log("\n2. Product of array:");
const product = nums4.reduce((acc, num) => acc * num, 1);
console.log("Product:", product); // 120

// Reduce with object
console.log("\n3. Create object from array:");
const fruits3 = ["apple", "banana", "cherry"];
const fruitCount = fruits3.reduce((acc, fruit) => {
    acc[fruit] = fruit.length;
    return acc;
}, {});
console.log("Fruit object:", fruitCount);

// Shopping cart total
console.log("\n4. Shopping cart total:");
const cart = [
    { item: "Laptop", price: 50000, quantity: 1 },
    { item: "Mouse", price: 500, quantity: 2 },
    { item: "Keyboard", price: 2000, quantity: 1 }
];

const cartTotal = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log("Cart total: ₹" + cartTotal);

// Grouping data by category
console.log("\n5. Group by category:");
const items2 = [
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Broccoli", category: "Vegetable" }
];

const grouped = items2.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
}, {});
console.log("Grouped:", grouped);

// Count occurrences
console.log("\n6. Count occurrences:");
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const letterCount = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});
console.log("Letter count:", letterCount);

// Reduce without initial value
console.log("\n7. Reduce without initial value:");
const sum2 = nums4.reduce((acc, num) => acc + num);
console.log("Sum (no initial):", sum2); // First element becomes initial

// Average calculation
console.log("\n8. Calculate average:");
const average = nums4.reduce((acc, num, idx, arr) => {
    acc += num;
    if (idx === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
}, 0);
console.log("Average:", average);

// Flatten nested array
console.log("\n9. Flatten nested array:");
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened:", flat);

// Find max value
console.log("\n10. Find maximum value:");
const numbers4 = [10, 20, 5, 100, 15];
const max = numbers4.reduce((acc, num) => num > acc ? num : acc, -Infinity);
console.log("Max value:", max);

/*
⚠️ reduce() complexity:
- Very powerful but can be hard to understand
- Always specify initialValue (avoid bugs!)
- Common mistake: forgetting to return value
- Can replace many loops but may reduce readability

✅ When to use:
- Sum, product, count
- Grouping/partitioning
- Transforming array → object
- Complex accumulations

❌ When NOT to use:
- Simple array transformation → map
- Simple filtering → filter
- Just want readability → for loop
*/


// ========================================
// 🟠 FIND & FINDINDEX - SEARCH
// ========================================

console.log("\n=== FIND & FINDINDEX ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
- Asked frequently
- Compare with filter (common question)
- Performance considerations
*/

// find() - returns first matching element
console.log("1. find() - first match:");
const nums5 = [1, 2, 3, 4, 5, 6];
const firstEven = nums5.find(num => num % 2 === 0);
console.log("First even:", firstEven); // 2

// find() with object array
console.log("\n2. find() with objects:");
const users3 = [
    { id: 1, name: "Mayank" },
    { id: 2, name: "Raj" },
    { id: 3, name: "Priya" }
];

const user = users3.find(u => u.id === 2);
console.log("Found user:", user);

// findIndex() - returns index
console.log("\n3. findIndex():");
const index = nums5.findIndex(num => num > 3);
console.log("Index of first > 3:", index); // 3

// find() no match returns undefined
console.log("\n4. find() no match:");
const notFound = nums5.find(num => num > 100);
console.log("No match result:", notFound); // undefined

// findIndex() no match returns -1
console.log("\n5. findIndex() no match:");
const indexNotFound = nums5.findIndex(num => num > 100);
console.log("Not found index:", indexNotFound); // -1

// Real-world: Find user by email
console.log("\n6. Real-world: Find user:");
const users4 = [
    { id: 1, email: "user1@gmail.com", name: "User 1" },
    { id: 2, email: "user2@gmail.com", name: "User 2" },
    { id: 3, email: "user3@gmail.com", name: "User 3" }
];

const targetUser = users4.find(u => u.email === "user2@gmail.com");
console.log("Found:", targetUser);

/*
⚠️ find() vs findIndex():
find()      → returns element or undefined
findIndex() → returns index or -1
find()      → better when you need the value
findIndex() → better when you need the position

find() vs filter():
find()   → returns FIRST match element
filter() → returns array of ALL matches

Performance:
find() stops at first match (better!)
filter() checks ALL elements
*/


// ========================================
// 🔴 SOME & EVERY - CONDITIONAL CHECKS
// ========================================

console.log("\n=== SOME & EVERY ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
- Asked in advanced interviews
- Validation logic heavy
- Performance questions
*/

// some() - ANY element passes
console.log("1. some() - check if ANY match:");
const nums6 = [1, 2, 3, 4, 5];
const hasEven = nums6.some(num => num % 2 === 0);
console.log("Has even number?:", hasEven); // true

// every() - ALL elements pass
console.log("\n2. every() - check if ALL match:");
const allEven = nums6.every(num => num % 2 === 0);
console.log("All even?:", allEven); // false

// some() with objects
console.log("\n3. some() with objects:");
const users5 = [
    { name: "Mayank", active: true },
    { name: "Raj", active: false },
    { name: "Priya", active: false }
];

const hasActive = users5.some(user => user.active);
console.log("Has active user?:", hasActive); // true

// every() with objects
console.log("\n4. every() with objects:");
const allActive = users5.every(user => user.active);
console.log("All active?:", allActive); // false

// Form validation with every()
console.log("\n5. Form validation:");
const form = [
    { field: "email", valid: true },
    { field: "password", valid: true },
    { field: "confirm", valid: false }
];

const isFormValid = form.every(field => field.valid);
console.log("Form valid?:", isFormValid); // false

// Validation: all prices positive
console.log("\n6. Validate prices:");
const prices2 = [100, 200, 300, 0]; // Has 0!
const allPositive = prices2.every(price => price > 0);
console.log("All prices positive?:", allPositive); // false

// Real-world: User authentication checks
console.log("\n7. Authentication checks:");
const authChecks = [
    { check: "username", passed: true },
    { check: "password", passed: true },
    { check: "2FA", passed: true }
];

const canLogin = authChecks.every(check => check.passed);
console.log("Can login?:", canLogin); // true

/*
⚠️ some() vs every():
some()  → true if ANY element matches
every() → true if ALL elements match

Performance:
some() stops at first true (good!)
every() stops at first false (good!)

Both are short-circuit evaluators - stop early!
*/


// ========================================
// 🟣 METHOD CHAINING - POWER COMBO
// ========================================

console.log("\n=== METHOD CHAINING ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
- Shows advanced understanding
- Real-world usage heavy
- Questions: order matters, readability
*/

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain map and filter
console.log("1. map -> filter chain:");
const result = data
    .map(num => num * 2)          // Double: [2,4,6,8,...]
    .filter(num => num > 10);      // Keep > 10: [12,14,16,...]

console.log("Result:", result);

// Complex real-world chain
console.log("\n2. Complex chain (real-world):");
const books3 = [
    { title: "Book1", genre: "Tech", price: 300, sold: true, rating: 4.5 },
    { title: "Book2", genre: "Tech", price: 200, sold: false, rating: 3 },
    { title: "Book3", genre: "History", price: 250, sold: true, rating: 4 },
    { title: "Book4", genre: "Tech", price: 400, sold: true, rating: 4.8 }
];

const cheapTechBooks = books3
    .filter(book => book.genre === "Technology" && book.sold)
    .map(book => ({ title: book.title, price: book.price, rating: book.rating }))
    .sort((a, b) => a.price - b.price);

console.log("Cheap tech books:", cheapTechBooks);

// Chain with reduce
console.log("\n3. filter -> map -> reduce chain:");
const totalTechPrice = data
    .filter(num => num > 3)                  // [4,5,6,7,8,9,10]
    .map(num => num * 10)                    // [40,50,60,...]
    .reduce((sum, num) => sum + num, 0);    // Sum all

console.log("Total:", totalTechPrice);

// Real-world: E-commerce product search
console.log("\n4. E-commerce chain:");
const products3 = [
    { id: 1, name: "Laptop", price: 50000, inStock: true, reviews: 4.5 },
    { id: 2, name: "Mouse", price: 500, inStock: false, reviews: 3 },
    { id: 3, name: "Keyboard", price: 2000, inStock: true, reviews: 4 },
    { id: 4, name: "Monitor", price: 15000, inStock: true, reviews: 4.8 }
];

const searchResults2 = products3
    .filter(p => p.inStock && p.price < 30000)
    .sort((a, b) => b.reviews - a.reviews)
    .map(p => ({ name: p.name, price: p.price, rating: p.reviews }));

console.log("Search results:", searchResults2);

/*
⚠️ Chaining best practices:
- Each method returns new array (immutable)
- Left to right execution order
- Performance: no penalty for chaining
- Readability: prefer method names over nested loops
- Break into variables if too complex

✅ Chaining is efficient:
Each method returns array for next method
No intermediate variables needed
Functional programming style
*/


// ========================================
// 🟢 SORT & REVERSE - MUTATION
// ========================================

console.log("\n=== SORT & REVERSE ===\n");

// reverse() - mutates original
console.log("1. reverse() - mutates!");
const arr3 = [1, 2, 3, 4, 5];
console.log("Before:", arr3);
arr3.reverse();
console.log("After reverse:", arr3);

// sort() - lexicographic, mutates!
console.log("\n2. sort() - lexicographic:");
const words4 = ["banana", "apple", "cherry"];
console.log("Before:", words4);
words4.sort();
console.log("After sort:", words4);

// ❌ sort() numbers WRONG
console.log("\n3. sort() numbers (❌ WRONG):");
const nums7 = [10, 2, 30, 1];
const wrongSort = [...nums7].sort();
console.log("Wrong sort:", wrongSort); // [1, 10, 2, 30] - Lexicographic!

// ✅ sort() numbers RIGHT
console.log("\n4. sort() numbers (✅ RIGHT):");
const nums8 = [10, 2, 30, 1];
const rightSort = [...nums8].sort((a, b) => a - b);
console.log("Right sort:", rightSort);

const descSort = [...nums8].sort((a, b) => b - a);
console.log("Descending:", descSort);

// sort() objects
console.log("\n5. sort() objects by property:");
const students = [
    { name: "Mayank", score: 85 },
    { name: "Raj", score: 92 },
    { name: "Priya", score: 78 }
];

const byScore = [...students].sort((a, b) => b.score - a.score);
console.log("By score:", byScore);

// sort() strings alphabetically
console.log("\n6. sort() strings:");
const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai"];
const sortedCities = [...cities].sort();
console.log("Sorted:", sortedCities);

// Real-world: Sort products
console.log("\n7. Sort products by price:");
const items3 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 2000 }
];

const sortedByPrice = [...items3].sort((a, b) => a.price - b.price);
console.log("By price:", sortedByPrice);

/*
⚠️ sort() & reverse() CRITICAL:
- MUTATE original array!
- Use [...arr] to create copy first
- sort() uses comparator: negative (before), 0 (same), positive (after)
- Lexicographic sort for numbers wrong!

✅ Compare:
Ascending: (a, b) => a - b
Descending: (a, b) => b - a
*/


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: for vs while vs forEach mein difference?
A: for - fixed iterations known, fastest, can break
   while - condition-based, unknown count, flexible
   forEach - array method, cleaner, cannot break

Q2: for...of aur for...in mein difference?
A: for...of - values (arrays, strings, iterables)
   for...in - keys/indices (objects, arrays)

Q3: break aur continue kya karte hai?
A: break - completely exits loop
   continue - skips current iteration, continues next

Q4: map() aur forEach() mein difference?
A: map() - returns new array, chainable, for transformation
   forEach() - returns undefined, NOT chainable, for side effects

Q5: filter() aur find() mein difference?
A: filter() - returns array of ALL matches
   find() - returns FIRST match element (not array)

Q6: reduce() kya karta hai?
A: Accumulates array into single value
   Sum, count, grouping, transformations

Q7: some() aur every() mein difference?
A: some() - true if ANY element matches
   every() - true if ALL elements match

Q8: Method chaining kya hota hai?
A: Multiple methods called one after another
   .filter().map().reduce()
   Each returns value for next method

Q9: sort() original array modify karta hai?
A: Haan! Mutates original
   Non-mutating: [...arr].sort()

Q10: for loop performance optimize kaise kare?
A: Cache array length: for(let i=0, len=arr.length; i<len; i++)
   Avoid operations in condition
   Use appropriate loop type

Q11: Nested loops complexity?
A: 1 loop: O(n)
   2 loops: O(n²)
   3 loops: O(n³)
   Avoid deep nesting with large data

Q12: forEach mein break kyu nahi use kar sakte?
A: forEach is method with callback
   Callback is separate scope
   break/continue don't work in callbacks

Q13: do-while kab use hote hai?
A: Minimum once execution guarantee
   Menu systems, input validation
   Rarely used in modern code

Q14: for...in with hasOwnProperty kyu zaroori?
A: Prevents inherited properties
   Safe when iterating objects
   Avoids prototype pollution issues

Q15: Kaunsa loop fastest hai?
A: for loop (traditional) fastest
   forEach second
   while third
   for...of slower than for
*/


// ========================================
// 💼 PRODUCTION USE CASES - DETAILED
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. DATA FILTERING & SEARCH
   - Product filters
   - User search
   - Multi-criteria filtering
*/

console.log("1. E-COMMERCE FILTERING:");
const allProducts = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics", inStock: true, rating: 4.5 },
    { id: 2, name: "Mouse", price: 500, category: "Electronics", inStock: false, rating: 3.5 },
    { id: 3, name: "Keyboard", price: 2000, category: "Electronics", inStock: true, rating: 4 },
    { id: 4, name: "Monitor", price: 15000, category: "Electronics", inStock: true, rating: 4.8 },
    { id: 5, name: "Shirt", price: 800, category: "Clothing", inStock: true, rating: 4 }
];

const filteredResults = allProducts
    .filter(p => p.inStock && p.price < 20000 && p.category === "Electronics")
    .sort((a, b) => b.rating - a.rating)
    .map(p => ({ id: p.id, name: p.name, price: p.price }));

console.log("Filtered products:", filteredResults);


/*
2. DATA TRANSFORMATION
   - API response processing
   - Format conversion
   - Field extraction
*/

console.log("\n2. API RESPONSE TRANSFORMATION:");
const apiResponse2 = [
    { user_id: 1, user_name: "Mayank", user_email: "mayank@gmail.com", user_active: true },
    { user_id: 2, user_name: "Raj", user_email: "raj@gmail.com", user_active: false },
    { user_id: 3, user_name: "Priya", user_email: "priya@gmail.com", user_active: true }
];

const transformedUsers = apiResponse2
    .filter(u => u.user_active)
    .map(user => ({
        id: user.user_id,
        name: user.user_name,
        email: user.user_email
    }));

console.log("Transformed:", transformedUsers);


/*
3. CALCULATIONS & AGGREGATIONS
   - Sum, average, count
   - Statistics
   - Business metrics
*/

console.log("\n3. SALES ANALYTICS:");
const salesData = [
    { product: "Laptop", amount: 50000, quantity: 2, date: "2024-01" },
    { product: "Mouse", amount: 500, quantity: 10, date: "2024-01" },
    { product: "Laptop", amount: 50000, quantity: 1, date: "2024-02" },
    { product: "Keyboard", amount: 2000, quantity: 5, date: "2024-02" }
];

const analytics = salesData.reduce((acc, sale) => {
    acc.totalRevenue += sale.amount;
    acc.totalItems += sale.quantity;
    if (!acc.byProduct[sale.product]) {
        acc.byProduct[sale.product] = 0;
    }
    acc.byProduct[sale.product] += sale.amount;
    return acc;
}, { totalRevenue: 0, totalItems: 0, byProduct: {} });

console.log("Analytics:", analytics);


/*
4. SORTING & PAGINATION
   - Sort by multiple fields
   - Pagination
   - Ranking
*/

console.log("\n4. USER RANKING:");
const users6 = [
    { name: "Mayank", score: 95, joinDate: "2024-01-10" },
    { name: "Raj", score: 87, joinDate: "2024-01-12" },
    { name: "Priya", score: 95, joinDate: "2024-01-08" },
    { name: "Arjun", score: 92, joinDate: "2024-01-15" }
];

const rankings = [...users6]
    .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return new Date(a.joinDate) - new Date(b.joinDate);
    })
    .map((user, index) => ({
        rank: index + 1,
        name: user.name,
        score: user.score
    }));

console.log("Rankings:", rankings);


/*
5. VALIDATION & ERROR CHECKING
   - Form validation
   - Data quality
   - Business rules
*/

console.log("\n5. FORM VALIDATION:");
const formData = [
    { field: "email", value: "user@example.com", required: true, valid: true },
    { field: "password", value: "pass123", required: true, valid: true },
    { field: "confirm", value: "", required: false, valid: true },
    { field: "age", value: 25, required: true, valid: true }
];

const isFormValid3 = formData
    .filter(f => f.required)
    .every(f => f.valid && f.value !== "");

console.log("Form valid?:", isFormValid3);