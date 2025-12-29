# OOPs in javascript 
- Is js a OOP based language ?
1. No Js is not primarily a oops based language, it is primarily a Prototype based language which and its classes are primarily syntactic sugar over existing prototype based inheritance mechanisms.
 2. Ab ye yaad rakhna ki hala ki isme classes ye ye baki languages se alag hai jinme class based inheritance hote hai, due to Js ka prototype based nature 

## OOP 
**1. Object:-** Collection of properties(variables) and methods(functions)

### Why use OOP?
- Code bada mess up hora tha (aise chunks produce hona ki usme se kuch bhi chunks use na hona)

### Parts of OOP
- **Object literal**
- **Constructor Functions**
- **Prototypes**
- **Classes**
- **Instances (new , this)**

## 4 Pillars of OOPs
- **Abstraction:-** Details hide kar dena (like fetch)
- **Encapsulation:-** Encapsulate ya wrap up kardo methods ya properties ko ek alag method mai 
- **Inheritance:-**  Ek parent class ka child class ko apne properties extend karna
- **Polymorphism:-** Ek hi method bohot sare kaam kar deta hai 


---

# 🧠 OOPs in JavaScript — Detailed Notes

---

## 🚀 Is JavaScript OOP-based?

**No**, JavaScript is **not class-based** like Java, C++, or Python.
It’s actually **Prototype-based**, meaning:

> Objects inherit from other objects — not from classes.

When we write `class` in JS, it’s just **syntactic sugar** (a cleaner way of writing something that already existed with prototypes).

---

## 🧩 What is OOP?

OOP = **Object-Oriented Programming**

> A programming style where everything is built around *objects* (data + behavior).

An **object** = Collection of **properties (data)** and **methods (functions)** that act on that data.

Example 👇

```js
const user = {
  name: "Mayank",
  score: 90,
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

user.greet(); // 👉 Hello, Mayank!
```

---

## 🎯 Why OOP?

As codebases grow:

* Functions and variables become hard to manage.
* Reusable logic gets scattered.
* Naming conflicts and data leakage become common.

So we **group data and behavior** logically into *objects or classes* to make:
✅ Code modular
✅ Reusable
✅ Maintainable

---

## 🧩 Major Parts of OOP (in JS)

### 1. **Object Literal**

Simplest way to create an object.

```js
const car = {
  brand: "Tesla",
  model: "Model 3",
  start() {
    console.log("Car started 🚗💨");
  }
};
car.start();
```

Limitation ❌:
If we make 100 cars → we’d have to copy-paste the same structure repeatedly.
→ That’s where **constructor functions** help.

---

### 2. **Constructor Functions**

A function used to create multiple objects with same structure and behavior.

```js
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.start = function () {
    console.log(`${this.brand} ${this.model} started 🚗`);
  };
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("BMW", "i8");

car1.start();
car2.start();
```

Here, `new`:

* Creates an empty object
* Binds `this` to it
* Returns that new object automatically

---

### 3. **Prototypes**

> Every function and object in JS automatically has a hidden property called `prototype`.

We can use prototypes to share common behavior among all instances —
so that functions are **not copied again and again** in memory.

```js
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Prototype method
Car.prototype.start = function() {
  console.log(`${this.brand} ${this.model} started 🚗`);
};

const car1 = new Car("Audi", "Q7");
const car2 = new Car("Toyota", "Fortuner");

car1.start(); // ✅ Works
car2.start(); // ✅ Works
```

💡 Both cars share the same `start()` method from the prototype — memory efficient!

---

### 4. **Classes (Syntactic Sugar)**

`class` in JS is just a cleaner way to write the above prototype pattern.

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} started 🚗`);
  }
}

const car1 = new Car("Tata", "Harrier");
car1.start();
```

Under the hood → JS converts this to constructor + prototype automatically.

---

### 5. **Instances (new, this)**

An **instance** = a copy of a class/object created using `new`.

```js
const car1 = new Car("Mercedes", "C-Class");
const car2 = new Car("Kia", "EV6");

console.log(car1 instanceof Car); // true
```

---

# ⚙️ The 4 Pillars of OOP in JavaScript

---

## 🧱 1. Abstraction

> Hiding internal details and showing only what’s necessary.

Example:

```js
class API {
  #apiKey = "1234XYZ"; // private property (hidden)
  
  fetchData(endpoint) {
    console.log(`Fetching data from ${endpoint} using API key...`);
  }
}

const api = new API();
api.fetchData("/users"); // ✅ works
console.log(api.#apiKey); // ❌ Error — cannot access private field
```

💡 Here, we hide the API key — user only knows about `fetchData()` method, not how it works inside.

---

## 🎁 2. Encapsulation

> Wrapping up data (properties) and behavior (methods) into a single unit.

Example:

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ₹${amount}. New balance = ₹${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds ❌");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ₹${amount}. Balance = ₹${this.balance}`);
    }
  }
}

const user1 = new BankAccount("Mayank", 5000);
user1.deposit(2000);
user1.withdraw(1000);
```

💡 Data (balance) + functions (deposit/withdraw) = wrapped inside one class.

---

## 👨‍👩‍👧 3. Inheritance

> Child classes can “inherit” (reuse) properties and methods from parent classes.

Example:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I’m ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name); // call parent constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const s1 = new Student("Yash", "JavaScript");
s1.greet();  // from Person
s1.study();  // from Student
```

💡 Student class **inherits** behavior from Person class using `extends` + `super()`.

---

## 🌀 4. Polymorphism

> “Many forms” — same method name behaves differently for different objects.

Example 1 (Method overriding):

```js
class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows 😺");
  }
}

const dog = new Dog();
const cat = new Cat();
dog.speak(); // Dog barks
cat.speak(); // Cat meows
```

💡 Same method name (`speak`) but behavior differs → that’s **polymorphism**.

---

# 🧾 Summary Table

| Concept       | Meaning                         | Example                                   |
| ------------- | ------------------------------- | ----------------------------------------- |
| Abstraction   | Hide complexity                 | `fetch()` hides network layer             |
| Encapsulation | Group data + logic              | `class BankAccount { deposit() { ... } }` |
| Inheritance   | Reuse parent logic              | `class Student extends Person`            |
| Polymorphism  | Same method, different behavior | `Animal.speak()` vs `Dog.speak()`         |

---

# 🧠 Bonus Concept — Prototype Chain

Every object in JS has a hidden `[[Prototype]]` which points to another object, forming a **chain**.

Example:

```js
const arr = [1,2,3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)
```

---

## 💡 Pehle Basic Samajh — Function aur Object me fark kya?

Normal function:

```js
function userInfo(name, age) {
  return { name: name, age: age };
}
const u1 = userInfo("Mayank", 21);
```

Yahan ham **ek object return kar rahe hai manually.**

---

## 🚀 Ab Constructor Function me kya hota hai?

Jab tu likhta hai:

```js
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}
```

Aur agar tu ise call karta hai as:

```js
const user1 = new User("Mayank", 12, true);
```

Toh **ye "new" keyword 4 important kaam karta hai** 👇

---

### ⚙️ Step-by-step

#### 🧩 Step 1: Ek naya blank object banata hai

```js
{}   ←  internally ye new object create hota hai
```

#### 🧩 Step 2: `this` ko uss nayi object se bind kar deta hai

Ab function ke andar jitne bhi `this.xyz` likhe ho,
wo sab iss naye object ke andar add hone lagte hain.

Example:

```js
this.username = username;
```

matlab hota hai:

```js
<new empty object>.username = username;
```

So jaise hi function run hota hai, wo object kuch aisa dikhta hai:

```js
{
  username: "Mayank",
  loginCount: 12,
  isLoggedIn: true
}
```

#### 🧩 Step 3: Automatically return karta hai vo object

Aakhir me `new` keyword automatically return kar deta hai vo object —
tumhe manually `return this` likhne ki bhi zarurat nahi.

---

## 🎯 Matlab simple shabdo me

`this` = **wo naya object** jo constructor function ke andar banta hai jab hum `new` keyword lagate hain.
Aur jitne bhi properties tu `this.xyz` likhta hai, wo sab uss object ke andar set ho jati hain.

---

## 🧩 Example Comparison

### ❌ Without `this` (normal function)

```js
function User(username, loginCount, isLoggedIn) {
  username = username;
  loginCount = loginCount;
  isLoggedIn = isLoggedIn;
}

const user1 = User("Mayank", 12, true);
console.log(user1); // ❌ undefined
```

Kyuki tu kuch return nahi kar raha — aur koi object ban bhi nahi raha.

---

### ✅ With `this` (constructor function)

```js
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}

const user1 = new User("Mayank", 12, true);
console.log(user1);
```

Output:

```js
User { username: "Mayank", loginCount: 12, isLoggedIn: true }
```

---

## 💬 Ek easy analogy:

Soch le `new` ek **machine** hai jo har baar naya “user card” print karti hai.

Aur tu likh raha hai:

```js
this.username = username;
```

Ye likhne ka matlab hai:

> “Jo bhi card abhi ban raha hai, uspe likh do username = Mayank.”

---

## ⚠️ Bonus Tip:

Agar tu `new` bhool gaya:

```js
const user1 = User("Mayank", 12, true);
```

Toh `this` global scope me chala jaata hai (browser me → `window`, Node.js me → `global`)
aur wo variables **window object** pe set ho jaate hain 😅

---

## ✅ Summary:

| Step | Action                                           |
| ---- | ------------------------------------------------ |
| 1    | `new` ek naya object banata hai                  |
| 2    | `this` ko us object se link karta hai            |
| 3    | `this.xyz = value` → properties assign hoti hain |
| 4    | Object automatically return hota hai             |

---

