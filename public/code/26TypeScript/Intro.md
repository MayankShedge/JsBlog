# 🚀 Introduction to TypeScript

> A modern way to write robust and scalable JavaScript applications!

---

## 📌 What is TypeScript?

**TypeScript** is a strongly typed, object-oriented, compiled programming language developed and maintained by Microsoft.  
It is a **superset** of JavaScript, meaning every valid JavaScript code is also valid TypeScript code — but with added powerful features.


TypeScript files have a `.ts` extension and are transpiled to JavaScript using the TypeScript Compiler (`tsc`), which allows them to run wherever JavaScript runs — browsers, Node.js, etc.

**TypeScript** is not about **Reinventing** **Javascript**.

Don't use **TypeScript** until....

> When we want **Type Safety** (eg:- javascript won't stop you procceding you with addition of number with string)

---

## 🤔 Type Safety in TypeScript?
One of the core advantages of TypeScript over JavaScript is its ability to enforce **type safety** — catching errors during **development**, not after deployment.

In **JavaScript**, types are dynamic and flexible. While this makes coding quick, it also allows for silent bugs that are hard to trace.

### ⚠️ Problem with JavaScript: No Type Enforcement

```js
Js
function add(a, b) {
  return a + b;
}
console.log(add(5, "10"));
```

1. JavaScript allows the addition of a number and a string.

2. It doesn't throw an error, but instead performs string concatenation.

3. This behavior can lead to unexpected results and bugs in real applications.

```ts
Ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, "10")); 
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

1. TypeScript stops you before running the code.

2. You get instant feedback in your IDE and during compilation.

3. The function clearly expects two numbers, so passing a string is flagged as an error.

```ts
Ts
let age: number = 25;
age = "twenty-five"; 
// ❌ Error: Type 'string' is not assignable to type 'number'
```

🔐 What TypeScript Prevents

### 🔐 What TypeScript Prevents

| 🚫 JavaScript Issue                 | ✅ TypeScript Protection                      |
|------------------------------------|----------------------------------------------|
| Adding a number to a string        | Error at compile time                        |
| Calling a function with wrong args | Enforced with type signatures                |
| Accessing properties incorrectly   | Warns about undefined or missing fields      |
| Using unknown object structures    | Enforced through interfaces and types        |
| Mistyping variable/property names  | Instant feedback from the editor             |


## 🤔 Why Use TypeScript Over JavaScript?

| Feature                         | JavaScript                    | TypeScript                                   |
|---------------------------------|-------------------------------|-----------------------------------------------|
| **Type Safety**                | ❌ No                         | ✅ Yes (compile-time type checking)           |
| **Tooling (IntelliSense)**    | ⚠️ Limited                   | ✅ Advanced editor support                     |
| **Early Error Detection**      | ❌ Runtime only              | ✅ Compile-time errors                         |
| **Modern Features**            | ✅ ES6+ only                 | ✅ Supports future JS + extra features         |
| **Scalability**                | ⚠️ Difficult in large apps   | ✅ Easier to manage & refactor large projects  |

### In short:  
✅ **Better tooling**  
✅ **Fewer bugs**  
✅ **Improved productivity**  
✅ **Smoother collaboration in large teams**

---

## 🔗 Relationship Between TypeScript and JavaScript

TypeScript is a **superset** of JavaScript, which means:

- ✅ All JavaScript code is valid TypeScript.
- 🚫 But not all TypeScript code is valid JavaScript.

After development, TypeScript code is **compiled (transpiled)** to JavaScript so it can run in any JS environment.

### Subset-Superset Relationship

```js
Js
// Valid JavaScript (also valid TypeScript)
function greet(name) {
  console.log("Hello, " + name);
}
```
```ts
Ts
// TypeScript (adds type annotations)
function greet(name: string): void {
  console.log("Hello, " + name);
}
```