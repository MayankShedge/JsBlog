# Images from the video:
![alt text](<Images/Screenshot 2025-11-02 at 2.28.36 AM.png>)
![alt text](<Images/Screenshot 2025-11-02 at 2.30.18 AM.png>)
![alt text](<Images/Screenshot 2025-11-02 at 2.32.51 AM.png>)
![alt text](<Images/Screenshot 2025-11-02 at 2.40.07 AM.png>)
![alt text](<Images/Screenshot 2025-11-02 at 2.41.28 AM.png>)
![alt text](<Images/Screenshot 2025-11-02 at 2.43.48 AM.png>)
![alt text](<Images/Screenshot 2025-11-02 at 2.44.05 AM.png>)
---

## 📚 Table of Contents

1. [Introduction to JavaScript Execution](#introduction-to-javascript-execution)
2. [JavaScript Execution Context](#javascript-execution-context)
3. [Two Phases of Execution Context](#two-phases-of-execution-context)
4. [Call Stack in JavaScript](#call-stack-in-javascript)
5. [Detailed Execution Example](#detailed-execution-example)
6. [Nested Function Call Stack Example](#nested-function-call-stack-example)
7. [Key Concepts Summary](#key-concepts-summary)

---

## 1. Introduction to JavaScript Execution

**JavaScript ek synchronous, single-threaded language hai.**

- **Single-threaded** matlab JavaScript ek time par sirf ek hi command execute kar sakta hai
- **Synchronous** matlab code line-by-line, order mein execute hota hai

### Core Fundamental 🔥
**Everything in JavaScript happens inside an Execution Context**

Execution Context ko aap ek bada box ya container samajh sakte ho jismein pura JavaScript code execute hota hai.

---

## 2. JavaScript Execution Context

Execution Context ke **do components** hote hain:

### 2.1 Memory Component (Variable Environment)
- Isko **Variable Environment** bhi kaha jata hai
- Yahan **variables** aur **functions** ko **key-value pairs** ke form mein store kiya jata hai
- Example: 
  ```
  a: 10
  square: {function code}
  ```

### 2.2 Code Component (Thread of Execution)
- Isko **Thread of Execution** bhi kaha jata hai
- Yahan code **line-by-line execute** hota hai
- Ek time par sirf ek line execute hoti hai

### Visual Representation:
```
┌─────────────────────────────────────────┐
│     EXECUTION CONTEXT                   │
├─────────────────┬───────────────────────┤
│   Memory        │   Code                │
│   Component     │   Component           │
│                 │                       │
│  (Variable      │  (Thread of           │
│   Environment)  │   Execution)          │
│                 │                       │
│  Variables &    │  Code executed        │
│  Functions      │  line by line         │
│  stored as      │                       │
│  key-value      │                       │
│  pairs          │                       │
└─────────────────┴───────────────────────┘
```

### Types of Execution Context:

1. **Global Execution Context (GEC)**
   - Jab bhi JavaScript program run hota hai, sabse pehle GEC create hota hai
   - Har JavaScript file ke liye sirf **ek hi GEC** hota hai
   - Browser mein, `this` keyword **window object** ko point karta hai

2. **Function Execution Context (FEC)**
   - Jab bhi koi function call hota hai, uske liye naya execution context create hota hai
   - Har function call ke liye alag execution context banta hai
   - Multiple FEC ho sakte hain program execution ke dauran

---

## 3. Two Phases of Execution Context

Jab bhi Execution Context create hota hai, wo **do phases** mein hota hai:

### Phase 1: Memory Creation Phase (Memory Allocation Phase)

**Kya hota hai:**
- JavaScript puri code ko scan karta hai
- Sabhi **variables** aur **functions** ke liye memory allocate karta hai
- Variables ko **undefined** value assign ki jati hai (placeholder ke taur par)
- Functions ko **pura code as it is** memory mein store kiya jata hai

**Example:**
```javascript
let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
```

**Memory Phase ke baad:**
```
Memory:
val1      → undefined
val2      → undefined
addNum    → {complete function definition}
result1   → undefined
result2   → undefined
```

### Phase 2: Execution Phase (Code Execution Phase)

**Kya hota hai:**
- Code **line-by-line execute** hota hai
- Variables ko actual values assign hoti hain
- Jab function invoke hota hai, **naya execution context** create hota hai
- Function ke liye bhi dono phases (Memory + Execution) chalte hain
- `return` statement ke baad, function ka execution context **delete** ho jata hai

**Example Execution:**
```
Line 1: val1 = 10       (val1 ko 10 assign hua)
Line 2: val2 = 5        (val2 ko 5 assign hua)
Line 3-6: function definition (skip, already in memory)
Line 7: result1 = addNum(val1, val2)
        → New Execution Context created for addNum
        → Memory Phase: num1→undefined, num2→undefined, total→undefined
        → Execution Phase: num1=10, num2=5, total=15
        → return 15 (context deleted)
Line 8: result2 = addNum(10, 2)
        → New Execution Context created for addNum
        → Memory Phase: num1→undefined, num2→undefined, total→undefined
        → Execution Phase: num1=10, num2=2, total=12
        → return 12 (context deleted)
```

---

## 4. Call Stack in JavaScript

### Call Stack Kya Hai? 📚

**Call Stack** ek mechanism hai jo:
- **Execution contexts ka order track** karta hai
- **LIFO (Last In, First Out)** principle follow karta hai
- Function calls ko manage karta hai
- Program flow ko control karta hai

### LIFO Principle:
```
Last In, First Out - Jo function sabse last mein stack mein gaya,
wo sabse pehle bahar aayega
```

### Call Stack Names:
Call Stack ko alag-alag names se jaana jata hai:
- Execution Context Stack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

### Visual Representation:
```
     ┌──────────────┐
     │              │  ← Top of Stack (currently executing)
     ├──────────────┤
     │   Function   │
     │   EC 2       │
     ├──────────────┤
     │   Function   │
     │   EC 1       │
     ├──────────────┤
     │   Global     │
     │   EC         │  ← Bottom (always present)
     └──────────────┘
```

### How Call Stack Works:

1. **Program start** → Global Execution Context (GEC) call stack mein push hota hai
2. **Function call** → Naya Execution Context create hota hai aur stack mein push hota hai
3. **Function complete** → Execution Context stack se pop ho jata hai
4. **Program end** → GEC bhi stack se pop ho jata hai, stack empty ho jata hai

---

## 5. Detailed Execution Example

### Code Example:
```javascript
let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
```

### Step-by-Step Execution:

#### **Step 1: Global Execution Context Creation**

**Call Stack:**
```
┌──────────────────┐
│  Global EC       │
└──────────────────┘
```

#### **Step 2: Memory Creation Phase (Global)**
```
Memory Component:
val1      → undefined
val2      → undefined
addNum    → function{...}
result1   → undefined
result2   → undefined
```

#### **Step 3: Execution Phase Starts**

**Line 1:** `val1 = 10`
```
Memory:
val1 → 10 ✓
```

**Line 2:** `val2 = 5`
```
Memory:
val2 → 5 ✓
```

#### **Step 4: First Function Call - `addNum(val1, val2)`**

**New Variable Environment + Execution Thread Created**

**Call Stack:**
```
┌──────────────────┐
│  addNum EC       │  ← Currently executing
├──────────────────┤
│  Global EC       │
└──────────────────┘
```

**Memory Phase (addNum):**
```
Execution Context:
num1  → 10 (from val1)
num2  → 5  (from val2)
total → undefined
```

**Execution Phase (addNum):**
```
total = num1 + num2 = 10 + 5 = 15
return total → 15
```

**After Return:**
- `result1 = 15`
- addNum EC **deleted** from Call Stack

**Call Stack:**
```
┌──────────────────┐
│  Global EC       │
└──────────────────┘
```

#### **Step 5: Second Function Call - `addNum(10, 2)`**

**Call Stack:**
```
┌──────────────────┐
│  addNum EC       │  ← Currently executing
├──────────────────┤
│  Global EC       │
└──────────────────┘
```

**Memory Phase (addNum):**
```
Execution Context:
num1  → 10
num2  → 2
total → undefined
```

**Execution Phase (addNum):**
```
total = num1 + num2 = 10 + 2 = 12
return total → 12
```

**After Return:**
- `result2 = 12`
- addNum EC **deleted** from Call Stack

**Call Stack:**
```
┌──────────────────┐
│  Global EC       │
└──────────────────┘
```

#### **Step 6: Program Completion**
- Sab kuch execute ho gaya
- Global EC bhi Call Stack se pop ho jata hai
- **Call Stack ab empty hai** ✓

---

## 6. Nested Function Call Stack Example

### Code Example:
```javascript
function three() {
    console.log("Function Three");
}

function two() {
    console.log("Function Two");
    three();
    console.log("Back to Function Two");
}

function one() {
    console.log("Function One");
    two();
    console.log("Back to Function One");
}

one();
```

### Detailed Execution Flow:

#### **Initial State:**
```
Call Stack:
┌──────────────────┐
│  Global EC       │
└──────────────────┘
```

#### **Step 1: `one()` called**
```
Output: "Function One"

Call Stack:
┌──────────────────┐
│  one() EC        │
├──────────────────┤
│  Global EC       │
└──────────────────┘
```

#### **Step 2: Inside `one()`, `two()` is called**
```
Output: "Function Two"

Call Stack:
┌──────────────────┐
│  two() EC        │  ← Currently executing
├──────────────────┤
│  one() EC        │  (waiting)
├──────────────────┤
│  Global EC       │
└──────────────────┘
```

#### **Step 3: Inside `two()`, `three()` is called**
```
Output: "Function Three"

Call Stack:
┌──────────────────┐
│  three() EC      │  ← Currently executing
├──────────────────┤
│  two() EC        │  (waiting)
├──────────────────┤
│  one() EC        │  (waiting)
├──────────────────┤
│  Global EC       │
└──────────────────┘
```

#### **Step 4: `three()` completes**
```
three() EC removed from stack

Call Stack:
┌──────────────────┐
│  two() EC        │  ← Resumes execution
├──────────────────┤
│  one() EC        │  (waiting)
├──────────────────┤
│  Global EC       │
└──────────────────┘

Output: "Back to Function Two"
```

#### **Step 5: `two()` completes**
```
two() EC removed from stack

Call Stack:
┌──────────────────┐
│  one() EC        │  ← Resumes execution
├──────────────────┤
│  Global EC       │
└──────────────────┘

Output: "Back to Function One"
```

#### **Step 6: `one()` completes**
```
one() EC removed from stack

Call Stack:
┌──────────────────┐
│  Global EC       │
└──────────────────┘
```

#### **Step 7: Program ends**
```
Call Stack:
Empty ✓
```

### Complete Output:
```
Function One
Function Two
Function Three
Back to Function Two
Back to Function One
```

---

## 7. Key Concepts Summary

### ✅ Important Points to Remember:

1. **Execution Context:**
   - Har JavaScript program Global Execution Context mein execute hota hai
   - Har function call apna Function Execution Context create karta hai
   - Do components: Memory Component + Code Component

2. **Two Phases:**
   - **Phase 1 - Memory Creation:** Variables ko undefined, functions ko complete code store
   - **Phase 2 - Execution:** Line-by-line code execution, actual values assign

3. **Call Stack:**
   - LIFO (Last In, First Out) principle
   - Execution contexts ka order maintain karta hai
   - Sabse niche Global EC, upar function ECs

4. **Function Execution:**
   - Function call → New EC create → Push to stack
   - Function complete → Return value → Pop from stack → EC delete

5. **this Keyword:**
   - Global EC mein `this` → `window` object (browser mein)
   - Function EC mein `this` depends on function invocation type

### ⚡ Quick Mnemonics:

**EXECUTION CONTEXT = Memory + Code**
- **M**emory Component (Variable Environment)
- **C**ode Component (Thread of Execution)

**EXECUTION PHASES = Create + Execute**
- **C**reation Phase (Memory Allocation)
- **E**xecution Phase (Code Running)

**CALL STACK = LIFO**
- **L**ast In
- **F**irst Out

---

## 🎯 Practice Questions

### Q1: What happens when we run this code?
```javascript
console.log(x);
var x = 5;
```

**Answer:** Output: `undefined`  
**Reason:** Memory creation phase mein `x` ko `undefined` assign kiya jata hai (hoisting), so console.log execute hone par undefined milta hai.

### Q2: Call Stack trace bataiye:
```javascript
function a() {
    b();
}
function b() {
    console.log("Hello");
}
a();
```

**Stack Trace:**
```
1. Global EC
2. Global EC → a() EC
3. Global EC → a() EC → b() EC
4. Global EC → a() EC (b completed)
5. Global EC (a completed)
6. Empty (program completed)
```

### Q3: What's the difference between Memory Phase and Execution Phase?
**Answer:**
- **Memory Phase:** Memory allocate hoti hai, variables ko undefined milta hai, functions ka code store hota hai
- **Execution Phase:** Actual code execute hota hai, variables ko real values milti hain, functions call hote hain

---

## 📖 Additional Resources

- **Video:** Chai aur Code - Call Stack in JavaScript (Hitesh Choudhary)
- **MDN:** [Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- **Blog:** JavaScript Visualizer for understanding execution flow

---

## 🔗 Related Topics to Study:

1. **Hoisting** - Variables aur functions ka hoisting kaise hota hai
2. **Scope Chain** - Lexical scope aur scope chain
3. **Closures** - Function ke saath uska lexical environment
4. **Event Loop** - Asynchronous JavaScript execution
5. **this Keyword** - Different contexts mein this ka behavior
6. **Temporal Dead Zone (TDZ)** - let/const declarations

---
![alt text](Images/js_execution_flowchart.png)
![alt text](Images/call_stack_evolution.png)