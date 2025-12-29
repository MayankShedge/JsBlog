## 📌 What dose TypeScript do?
Static type checking means TypeScript checks your code for type-related errors at compile time, before the code is run.

Unlike JavaScript, which only throws type errors at runtime, TypeScript validates types when you write and compile the code. This prevents many bugs before your code ever reaches the browser or production. This will help us Analyze the code as we type. Will help getting the error thrown even before compiling i.e while writing the code.

```js
Js
function getLength(str) {
  return str.length;
}

console.log(getLength(123)); // 🔴 No error in JS, but result is undefined → crashes or behaves unexpectedly
```

- JavaScript won’t warn you about passing a number.

- It’ll try to execute and fail at runtime.

```ts
Ts
function getLength(str: string): number {
  return str.length;
}

console.log(getLength(123)); 
// ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
```
- TypeScript checks the types at compile time

- You get an immediate error in your editor

- The mistake is caught before your app runs

## 🧠 Benefits of Static Type Checking

| ✅ Benefit              | 📋 Description                                                   |
|------------------------|------------------------------------------------------------------|
| **Catch Errors Early** | Detect bugs while coding, not during execution                  |
| **Self-Documenting Code** | Function signatures describe expected inputs and outputs     |
| **Safer Refactoring**  | Types prevent accidental breakage during changes                |
| **Better IDE Support** | Auto-complete, hints, and inline docs improve developer speed   |
| **Team Collaboration** | Clear contracts between modules and developers                  |

TypeScript code is converted in Javascript while. TypeScript is a Development tool. Our project still runs in JS.

```js
sample = {name: "Mayank", Roll : 43 }
var role = sample.Role
```

```ts
sample = {name: "Mayank", Roll : 43 }
var role = sample.Role //Will throw a inline error here as no such key is persent in corressponding Json object
```

## Types of TypeScript

- Number          
- String          
- Boolean
- Null
= Undefined 
- Array 
- Void 
- Object 
- Tuples 
- Any
- Never & Unknown

## 🔄 Type Assignability Table

This table summarizes assignability between some abstract types in TypeScript.  
**Rows** = what each type is assignable **to**  
**Columns** = what is assignable **to them**

A “✓” indicates a combination that is compatible only when `strictNullChecks` is **off**.

| From \ To     | `any` | `unknown` | `object` | `void` | `undefined` | `null` | `never` |
|---------------|:-----:|:---------:|:--------:|:------:|:-----------:|:------:|:-------:|
| **any**       |   -   |     ✓     |    ✓     |   ✓    |      ✓      |   ✓    |    ✕    |
| **unknown**   |   ✓   |     -     |    ✕     |   ✕    |      ✕      |   ✕    |    ✕    |
| **object**    |   ✓   |     ✓     |    -     |   ✕    |      ✕      |   ✕    |    ✕    |
| **void**      |   ✓   |     ✓     |    ✕     |   -    |      ✕      |   ✕    |    ✕    |
| **undefined** |   ✓   |     ✓     |    ✓     |   ✓    |      -      |   ✓    |    ✕    |
| **null**      |   ✓   |     ✓     |    ✓     |   ✓    |      ✓      |   -    |    ✕    |
| **never**     |   ✓   |     ✓     |    ✓     |   ✓    |      ✓      |   ✓    |    -    |

# IMPORTANT : Documentation Link
"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"

# In What Situations is TypeScript gonna help us over Js

- **A function accepts 2 numbers :** Don't have to epxlicitly check that the input which is being recived is really a number and not a string/void/etc. 

- **A function returns a string :** Is a function really returning string and not a number.

# Syntax :
```ts
let variableName: type = value

let greetings: string = "Hello Mayank"

//Niche dono lines mai error throw kar dega 
greetings = 6

greetings = true

//Undefined methods use karne pe bhi same , yaha bhi error de dega
let myNum = 6

myNum.toLowerCase()

//Even typos ko bhi
greetings.toLowercase()

console.log(greetings)

export {}
```

# Numbers :
**JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number**

# Any Type :

**Any is not a special keyword or type in Ts its is just a getaway where we tend to use it in cases where we want to skip TypeChecking for that particular part**

You usually want to avoid this, though, because any **isn’t type-checked**. Use the compiler flag **noImplicitAny to flag any implicit any as an error**.