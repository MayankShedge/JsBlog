
---

# 🧠 Object Oriented Programming (OOP) in JavaScript

JavaScript ek **prototype-based** language hai —
but ES6 ke baad se classes introduce hue jo bas **syntactic sugar** hain prototypes ke upar.

---

## 🧩 Part 1 — Basic Class Example

### ✅ Using ES6 Classes

```js
// ES6 Class Syntax
class User {
  constructor(username, email, password) {
    // constructor automatically executes when new object is created
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const mayank = new User("Mayank", "may@33.com", "123");
console.log(mayank.encryptPassword());
console.log(mayank.changeUserName());
```

---

### ⚙️ Behind the Scenes (Function + Prototype)

```js
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function() {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function() {
  return `${this.username.toUpperCase()}`;
};

const yash = new User("Yash", "yash@123.com", "123");
console.log(yash.encryptPassword());
console.log(yash.changeUserName());
```

🧠 **Explanation:**

* `class` internally creates a **constructor function**.
* `methods` declared inside class are added to the prototype (not copied per instance).
* `new` keyword:

  1. Creates a new empty object
  2. Sets its prototype to `User.prototype`
  3. Executes the constructor with `this` bound to that new object
  4. Returns the object

---

## 🧩 Part 2 — Inheritance (Parent → Child)

### ✅ Using ES6 Classes

```js
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`The username is : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // same as User.call(this, username)
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by : ${this.username}`);
  }
}

const Mayank = new Teacher("Mayank", "mayank@gmail.com", "123");
Mayank.addCourse();

const Yash = new User("Yash");
Yash.logMe();
```

---

### ⚙️ Behind the Scenes (Function + Prototype Chain)

```js
function User(username) {
  this.username = username;
}

User.prototype.logMe = function() {
  console.log(`The username is : ${this.username}`);
};

function Teacher(username, email, password) {
  User.call(this, username); // super(username)
  this.email = email;
  this.password = password;
}

// 🔥 Inherit User’s prototype (instance-level inheritance)
Teacher.prototype = Object.create(User.prototype);

// ✅ Fix constructor reference
Teacher.prototype.constructor = Teacher;

// Add new method for Teacher
Teacher.prototype.addCourse = function() {
  console.log(`New course was added by : ${this.username}`);
};

const Mayank = new Teacher("Mayank", "mayank@gmail.com", "123");
Mayank.addCourse();
Mayank.logMe();
```

---

### 🧠 Explanation

| Concept                                             | Meaning                                                              |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| `User.call(this, username)`                         | Calls parent constructor (like `super(username)`)                    |
| `Teacher.prototype = Object.create(User.prototype)` | Inherits methods from `User`                                         |
| `Teacher.prototype.constructor = Teacher`           | Fixes the constructor reference                                      |
| `new` keyword                                       | Creates link `Teacher.prototype → User.prototype → Object.prototype` |

---

### ⚡ Prototype Chain Visualization

```
Mayank
  ↓
Teacher.prototype
  ↓
User.prototype
  ↓
Object.prototype
  ↓
null
```

---

## 🧩 Part 3 — Static Methods & Static Inheritance

### ✅ Using ES6 Classes

```js
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    // Static method — accessible only via class, not instance
    return `${Math.floor(Math.random() * (100 - 20) + 1)}`;
  }
}

class Admin extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Admin("IPhone", "i@mac.com");
iPhone.logMe();
Admin.createId();   // ✅ works (static method)
iPhone.createId();  // ❌ Error (static methods aren't inherited by instance)
```

---

### ⚙️ Behind the Scenes (Function-Based)

```js
function User(username) {
  this.username = username;
}

User.prototype.logMe = function() {
  console.log(`Username : ${this.username}`);
};

// ✅ Static method (attached to constructor)
User.createId = function() {
  return `${Math.floor(Math.random() * (100 - 20) + 1)}`;
};

function Admin(username, email) {
  User.call(this, username); // same as super(username)
  this.email = email;
}

// 🔥 Instance-level inheritance (for object methods)
Object.setPrototypeOf(Admin.prototype, User.prototype);

// ⚙️ Static-level inheritance (for class methods)
Object.setPrototypeOf(Admin, User);

const iPhone = new Admin("IPhone", "i@mac.com");
iPhone.logMe();   // ✅ from User.prototype
Admin.createId(); // ✅ from User (static)
iPhone.createId(); // ❌ Error (static not available on instance)
```

---

## ⚖️ Difference Between Instance-level & Static-level Inheritance

| Type                        | Syntax                                                   | Used For                      | Accessible From            | Example              |
| --------------------------- | -------------------------------------------------------- | ----------------------------- | -------------------------- | -------------------- |
| **Instance-level**          | `Object.setPrototypeOf(Admin.prototype, User.prototype)` | Inherit instance methods      | Instances created by `new` | `iPhone.logMe()` ✅   |
| **Static-level**            | `Object.setPrototypeOf(Admin, User)`                     | Inherit class/static methods  | Class itself               | `Admin.createId()` ✅ |
| ❌ If only static chain made | `Object.setPrototypeOf(Admin, User)`                     | No instance methods inherited | Instance methods missing   | `iPhone.logMe()` ❌   |
| ✅ In ES6 classes            | `class Admin extends User {}`                            | Does both automatically       | Both class & instance      | Works for both       |

---

## 🧠 Final Summary

* **`class`** in JS = syntactic sugar for constructor functions + prototypes
* **`extends` + `super()`** = internally does `Parent.call(this, ...)` + prototype linking
* **Instance methods** → go to `.prototype`
* **Static methods** → go directly on the class (constructor)
* **Inheritance Chain:**

  ```
  Instance → Child.prototype → Parent.prototype → Object.prototype → null
  ```

---

### ✅ TL;DR One-liners for Notes

> * `super(username)` = `Parent.call(this, username)`
> * `Object.setPrototypeOf(Admin.prototype, User.prototype)` → for **instance-level inheritance**
> * `Object.setPrototypeOf(Admin, User)` → for **static-level inheritance**
> * `static` keyword methods → only accessible on class, not instance
> * ES6 `class` automatically sets **both chains** internally.

---

---

# 🧠 Object Oriented Programming (OOP) in JavaScript

JavaScript primarily ek **prototype-based language** hai —
but ES6 ke baad `class` keyword introduce hua jo **syntactic sugar** hai existing **prototypal inheritance** ke upar.
Matlab — *andar se ye sab kuch function aur prototypes pe hi based hai.* 😄

---

## 🧩 PART 1 — Basic Class & Behind the Scenes

### ✅ Using ES6 Class

```js
class User {
  constructor(username, email, password) {
    // Automatically executes when 'new' keyword used
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const mayank = new User("Mayank", "may@33.com", "123");
console.log(mayank.encryptPassword());
console.log(mayank.changeUserName());
```

---

### ⚙️ Behind the Scenes (Function-based Version)

```js
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// Methods added to prototype (shared by all instances)
User.prototype.encryptPassword = function() {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function() {
  return `${this.username.toUpperCase()}`;
};

const yash = new User("Yash", "yash@123.com", "123");
console.log(yash.encryptPassword());
console.log(yash.changeUserName());
```

---

### 🧠 Notes

* `class` internally = **constructor function**
* `methods` inside class = added to prototype automatically
* `new` keyword:

  1. Creates a new empty object `{}`
  2. Links it to the prototype (`User.prototype`)
  3. Runs constructor with `this` bound to that new object
  4. Returns the object

---

## 🧩 PART 2 — Inheritance (Parent → Child)

### ✅ Using ES6 Classes

```js
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`The username is : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // same as User.call(this, username)
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by : ${this.username}`);
  }
}

const Mayank = new Teacher("Mayank", "mayank@gmail.com", "123");
Mayank.addCourse();

const Yash = new User("Yash");
Yash.logMe();
```

---

### ⚙️ Behind the Scenes (Function-based Version)

```js
function User(username) {
  this.username = username;
}

User.prototype.logMe = function() {
  console.log(`The username is : ${this.username}`);
};

function Teacher(username, email, password) {
  User.call(this, username); // same as super(username)
  this.email = email;
  this.password = password;
}

// 🔥 Link instance-level prototype chain
Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.addCourse = function() {
  console.log(`New course was added by : ${this.username}`);
};

const Mayank = new Teacher("Mayank", "mayank@gmail.com", "123");
Mayank.addCourse();
Mayank.logMe();
```

---

### ⚡ Prototype Chain Visualization

```
Mayank (instance)
   ↓
Teacher.prototype
   ↓
User.prototype
   ↓
Object.prototype
   ↓
null
```

---

## 🧩 PART 3 — Static Methods & Static Inheritance

### ✅ ES6 Version

```js
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() { // static → only accessible on class, not object
    return Math.floor(Math.random() * (100 - 20) + 1);
  }
}

class Admin extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Admin("IPhone", "i@mac.com");
iPhone.logMe();
Admin.createId();   // ✅ works
iPhone.createId();  // ❌ Error (static methods not inherited by instance)
```

---

### ⚙️ Behind the Scenes

```js
function User(username) {
  this.username = username;
}

User.prototype.logMe = function() {
  console.log(`Username : ${this.username}`);
};

// Static method (attached directly to constructor)
User.createId = function() {
  return Math.floor(Math.random() * (100 - 20) + 1);
};

function Admin(username, email) {
  User.call(this, username); // same as super(username)
  this.email = email;
}

// Instance-level inheritance
Object.setPrototypeOf(Admin.prototype, User.prototype);

// Static-level inheritance
Object.setPrototypeOf(Admin, User);

const iPhone = new Admin("IPhone", "i@mac.com");
iPhone.logMe();   // ✅ instance-level
Admin.createId(); // ✅ static-level
iPhone.createId(); // ❌ instance can't access static
```

---

## ⚖️ Difference — Instance vs Static Inheritance

| Type               | Syntax                                                   | Purpose                                  | Accessible From            | Example              |
| ------------------ | -------------------------------------------------------- | ---------------------------------------- | -------------------------- | -------------------- |
| **Instance-level** | `Object.setPrototypeOf(Admin.prototype, User.prototype)` | Inherit instance methods                 | Instance created via `new` | `iPhone.logMe()` ✅   |
| **Static-level**   | `Object.setPrototypeOf(Admin, User)`                     | Inherit class (static) methods           | Class itself               | `Admin.createId()` ✅ |
| ❌ Wrong usage      | `Object.setPrototypeOf(Admin, User)` only                | Inherits static methods but not instance | `iPhone.logMe()` ❌         |                      |
| ✅ ES6 handles both | `class Admin extends User {}`                            | Automatically creates both chains        | Works for both ✅           |                      |

---

## 🧩 How the ES6 Class System Internally Connects

```
            ┌────────────────────┐
            │      User (class)  │
            │  ├─ createId() 🔹  │  ← static method
            │  └─ prototype ───┐ │
            └──────────────────│─┘
                              ↓
                   ┌────────────────────┐
                   │   User.prototype   │
                   │  └─ logMe() 🔹      │
                   └─────────┬──────────┘
                             ↓
                   ┌────────────────────┐
                   │  Object.prototype  │
                   └────────────────────┘
```

If we extend with a subclass (`class Admin extends User {}`):

```
Admin (constructor)
├── static chain → User → Function.prototype → Object.prototype
└── prototype chain → User.prototype → Object.prototype
```

So when we do:

* `Admin.createId()` → looks up the **static chain**
* `iPhone.logMe()` → looks up the **prototype chain**

---

## 🧠 Final Summary

✅ `super(username)` = `Parent.call(this, username)`
✅ `Object.setPrototypeOf(Admin.prototype, User.prototype)` → **Instance-level inheritance**
✅ `Object.setPrototypeOf(Admin, User)` → **Static-level inheritance**
✅ `static` keyword = only class-level access, not for objects
✅ ES6 `extends` automatically sets both prototype chains internally
✅ Everything in JS ultimately inherits from `Object.prototype`

---

---

# 🔍 Deep Dive — How `extends` Works Internally

When you write:

```js
class Admin extends User {}
```

JavaScript under the hood does **two things automatically** 👇

---

## 🧩 Step 1 — Connects the Prototype Chains (for instances)

```
iPhone (object)
   ↓
Admin.prototype
   ↓
User.prototype
   ↓
Object.prototype
   ↓
null
```

✅ This ensures:

* All **instance methods** of `User` (like `logMe`) are available to `Admin` objects.
* Example:

  ```js
  iPhone.logMe(); // ✅ Works — found on User.prototype
  ```

---

## 🧩 Step 2 — Connects the Constructor Chains (for static methods)

```
Admin (class)
   ↓
User (class)
   ↓
Function.prototype
   ↓
Object.prototype
   ↓
null
```

✅ This ensures:

* All **static methods** (`createId`) defined on `User` are available on `Admin`.
* Example:

  ```js
  Admin.createId(); // ✅ Works — found on User (static)
  ```

---

### 🔥 Combined View (Both Chains Together)

```
                   ┌──────────────────────────┐
                   │        Object            │
                   └──────────┬───────────────┘
                              ↓
                     Function.prototype
                              ↓
User (constructor) ───────────┐
  │                           │
  │                           └── static methods → createId()
  ↓
User.prototype  ←──────────────
  │
  └── instance methods → logMe()
  ↓
Admin.prototype
  │
  └── instance methods → addCourse()
  ↓
Admin (constructor)
  └── static methods (inherited from User)
```

---

### 🧠 In Simple Words

| Concept                                   | Meaning                                                               |
| ----------------------------------------- | --------------------------------------------------------------------- |
| **extends**                               | Creates two prototype chains: one for instances, one for constructors |
| **super()**                               | Calls parent constructor and binds `this`                             |
| **Admin.prototype → User.prototype**      | Inheritance for instance methods                                      |
| **Admin → User**                          | Inheritance for static methods                                        |
| **Everything ends at `Object.prototype`** | The final root of all JS objects                                      |

---

### ✅ Quick Summary Points (for README footer)

> * `extends` = automatic inheritance of both static and instance properties
> * `super()` = calls parent constructor
> * `Object.setPrototypeOf(Admin.prototype, User.prototype)` = done implicitly
> * `Object.setPrototypeOf(Admin, User)` = also done implicitly
> * JS class system = built entirely on top of prototypes
> * The chain always ends at `Object.prototype → null`

---

---

# 🧩 Real-World Analogy — “Teacher Extends Person”

Imagine you’re building a school system in code:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name); // use parent's constructor
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}`);
  }
}

const ramesh = new Teacher("Ramesh", "Mathematics");
ramesh.introduce(); // ✅ inherited from Person
ramesh.teach();     // ✅ defined in Teacher
```

---

### 🧠 Analogy Breakdown

| Real Life Concept       | JavaScript Concept                        |
| ----------------------- | ----------------------------------------- |
| **Person**              | Base class (`User`, `Parent`)             |
| **Teacher**             | Derived class (`Admin`, `Child`)          |
| **“extends”**           | Relationship that connects both           |
| **“super()”**           | Calls parent’s constructor to reuse logic |
| **Shared Abilities**    | Instance methods via `prototype`          |
| **Global School Rules** | Static methods shared by all classes      |

So in human terms —

> A **Teacher** is a special kind of **Person**,
> but every **Teacher** still behaves like a **Person** — they just have extra powers (teach, grade, manage).
> That’s exactly what `extends` + `super()` achieve in JavaScript.

---

### ✨ Final Takeaway (One-liner)

> Classes in JavaScript aren’t magical — they’re just a cleaner face on top of the prototype system.
> `extends` and `super()` make inheritance *look elegant*, but underneath it’s still `Object.setPrototypeOf()` all the way down. 🚀

---



