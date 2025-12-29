/*
==========================================================
🧠 MASTERCLASS: Understanding `this` in JavaScript
==========================================================

👉 Run this file step-by-step and observe the console output.
Each section demonstrates a different behavior of `this`
in various situations — from simple to complex.

==========================================================
*/


// ==========================================================
// 1️⃣ Global Scope
// ==========================================================
console.log("1️⃣ Global Scope:");
console.log(this); // Browser → window / Node → {}
console.log("---------------------------------");


// ==========================================================
// 2️⃣ Inside a Normal Function (Not an Object)
// ==========================================================
function showThis() {
  console.log("2️⃣ Inside a regular function:", this);
}
showThis(); // In strict mode → undefined | Else → global object
console.log("---------------------------------");


// ==========================================================
// 3️⃣ Inside an Object Method
// ==========================================================
const user = {
  name: "Mayank",
  greet: function () {
    console.log("3️⃣ Inside object method:", this); // refers to user
    console.log(`Hello ${this.name}`);
  },
};
user.greet();
console.log("---------------------------------");


// ==========================================================
// 4️⃣ Arrow Function inside Object
// ==========================================================
const userArrow = {
  name: "Mayank",
  greet: () => {
    console.log("4️⃣ Arrow in object:", this); // ❌ global / window
  },
};
userArrow.greet();
console.log("---------------------------------");


// ==========================================================
// 5️⃣ Constructor Function and `new`
// ==========================================================
function User(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("5️⃣ Constructor:", this);
    console.log(`Hi ${this.name}`);
  };
}
const mayank = new User("Mayank");
mayank.sayHi();
console.log("---------------------------------");


// ==========================================================
// 6️⃣ Arrow Function inside Constructor (Lexical `this`)
// ==========================================================
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(`6️⃣ Timer running... seconds = ${this.seconds}`);
    if (this.seconds === 3) console.log("Timer done!");
  }, 1000);
}
new Timer();
console.log("---------------------------------");


// ==========================================================
// 7️⃣ Event Listener (Browser-only)
// ==========================================================
// Uncomment below code if testing in browser console 👇
//
// document.body.innerHTML = "<button id='btn'>Click Me</button>";
// document.getElementById("btn").addEventListener("click", function() {
//     console.log("7️⃣ Event listener (normal fn):", this); // ✅ button element
// });
// document.getElementById("btn").addEventListener("click", () => {
//     console.log("7️⃣ Event listener (arrow fn):", this); // ❌ window/global
// });


// ==========================================================
// 8️⃣ `this` in Promises / Fetch
// ==========================================================
const apiUser = {
  name: "Mayank",
  fetchData: function () {
    console.log("8️⃣ Fetch started...");

    // ❌ Wrong (loses `this`)
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(function (res) {
        console.log("Inside .then() (normal fn):", this); // undefined/global
        return res.json();
      })
      .then(function (data) {
        console.log("Still wrong context:", this); // undefined/global
      });

    // ✅ Correct (arrow keeps `this` = apiUser)
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Inside .then() (arrow fn):", this); // apiUser
        console.log("Data fetched for:", this.name);
      });
  },
};
apiUser.fetchData();
console.log("---------------------------------");


// ==========================================================
// 9️⃣ Controlling `this` with .call(), .apply(), .bind()
// ==========================================================
function showName() {
  console.log("9️⃣ Controlled `this`:", this.name);
}

const objA = { name: "Yash" };
const objB = { name: "Ravi" };

showName.call(objA); // Hi Yash
showName.apply(objB); // Hi Ravi

const boundFn = showName.bind({ name: "Mayank" });
boundFn(); // Hi Mayank
console.log("---------------------------------");


// ==========================================================
// 🔟 Classes and `this`
// ==========================================================
class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  attack() {
    console.log("🔟 Inside class method:", this);
    console.log(`${this.name} attacks with power ${this.level}!`);
  }
}

const p1 = new Player("IronMan", 9000);
p1.attack();
console.log("---------------------------------");


// ==========================================================
// 🧩 11️⃣ Special Example: Nested functions losing `this`
// ==========================================================
const game = {
  title: "CS:GO",
  start: function () {
    console.log(`Game starting: ${this.title}`);
    function inner() {
      console.log("11️⃣ Inner function `this`:", this); // ❌ Global
    }
    inner();

    // ✅ Fix using arrow
    const fixedInner = () => {
      console.log("11️⃣ Fixed inner (arrow):", this); // ✅ game object
    };
    fixedInner();
  },
};
game.start();
console.log("---------------------------------");


// ==========================================================
// 🧠 Summary: Always ask yourself
// ==========================================================
/*
Who called me?

→ Direct call (showThis()) → global/undefined
→ Called by object (obj.method()) → obj
→ Called with new → new object
→ Arrow function → parent `this`
→ Event listener → HTML element
→ Promise/fetch → use arrow to keep context
→ .call/.apply/.bind → manually decide
*/
