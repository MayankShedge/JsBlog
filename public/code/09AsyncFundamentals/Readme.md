# Async Functions 
- Javascript ek synchronous language hai by default matlab ek time pe bas ek single thread ka execution hoga( high level pe aisa samjho ki ek time pe bas ek hi task execute hoga ). 
  
- Par ek baat note karni hai ki ye javascript kabhi kahipe hame akela javascript engine milta nai hai, vo jitne bhi baar milega ek runtime environment mai milega jo browser , nodejs ka ho sakta hain( ye sari baat hai default js ki ). 
  
## Blocking vs Non Blocking Code 
**1. Blocking Code :-** Pure ke pure program ka flow block karega 

**2. Non-Blocking Code :-** Ye block nahi karta program ka flow aur allow karta hai usse baki ke tasks ko continue karne mai without any issues

- Ab samajhne ki baat ye hai ki isme se koi accha ya bura nahi hai, matlab ye bata completely use case pe based hai ki hame konsa use karna chaiye 

![alt text](<Screenshot 2025-11-09 at 1.25.25 AM.png>)

1. Jab bhi program execute hoga toh hamara call stack banta hai jisme hamara global execution context banta hai aur ek ek karke function load kiye jate hai aur jaise hi function ka execution khatam hota hai vo unload kiya jata hai

2. Agar suppose mujhe setTimeout call karna hai toh voh 2 sec ka delay lera hai toh WEB API se usko call jaega usko register kiya jaega as callback aur bataya jaega jaise hi iska execution ho notification aaega apko aur usse task queue mai iss callback ko dala jaega (FIFO) toh jo first andar dala jaega voh first niklega aur issi tarah isse call stack (LIFO) mai add kiya jaega.

3. Kuch special WEB APIs rehti hai jo high priority hote hai toh ye promise callbacks ke under aate hai jinka bhi same process rehta hai like normal WEB APIs par ye thodisi high priority hoti hai.

> ---

# 🧠 JavaScript Async Execution — Event Loop, Call Stack & Web APIs

---

## 🧩 Core Concept — JavaScript Nature

* **JavaScript is Single-threaded**
  Ek time pe sirf **ek hi task execute hota hai** — matlab ek single call stack hota hai jisme line-by-line code execute hota hai.
  Ye nature **synchronous** aur **blocking** hoti hai by default.

* **But** — Browser / Node.js environment JS ko asynchronous capabilities dete hain
  Jaise:

  * `setTimeout()`, `setInterval()`
  * `fetch()`, Promises, async/await
  * DOM Events (click, input, etc.)
  * File system (Node.js)

  Ye features **JS Engine ke part nahi** hote, balki **Runtime Environment** (Browser ya Node.js) ke Web APIs provide karte hain.

---

## ⚙️ Blocking vs Non-Blocking Code

| Type             | Description                                                             | Example                                                |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------------------------ |
| **Blocking**     | Code execution stops until the operation completes.                     | Reading a large file synchronously (`fs.readFileSync`) |
| **Non-Blocking** | Code continues executing other tasks, operation handled asynchronously. | Reading a file asynchronously (`fs.readFile`)          |

🧠 **Key Point:**
Na blocking bura hota hai, na non-blocking hamesha best — dono ka use-case pe depend karta hai (e.g., critical vs background task).

---

## 🧩 Execution Model — Step-by-Step Breakdown

### 🧠 1. JS Engine Components

1. **Memory Heap:**

   * Jahaan variables, objects, and functions ke data ko store kiya jata hai.
   * Example:

     ```js
     const name = "Mayank";  // stored in heap
     ```

2. **Call Stack (Execution Stack):**

   * Ye ek LIFO (Last In, First Out) structure hai.
   * Jo bhi function execute hota hai, wo call stack me push hota hai.
   * Jab uska execution complete hota hai, wo stack se pop ho jaata hai.

   Example:

   ```js
   function greet() {
     console.log("Hello");
   }
   function sayHi() {
     greet();
   }
   sayHi();
   ```

   Execution Order:

   ```
   Global() → sayHi() → greet() → console.log()
   ```

---

### ⚙️ 2. Web APIs (Browser Environment)

Web APIs **JavaScript ke external helpers** hain jo asynchronous tasks handle karte hain.

Examples:

* `setTimeout()` / `setInterval()` → Timer APIs
* `fetch()` → Network request API
* `DOM Events` → Event handling

Working:

1. JS code calls a Web API.
2. Web API executes asynchronously (browser ke alag thread par).
3. Once completed, it **registers a callback** and sends it to the **callback queue** (Task Queue / Microtask Queue[Promise Queue]).

---

### 🧠 3. Callback Queue (Task Queue)

* Ye queue (FIFO order) me callbacks ko rakhta hai jo Web API complete hone ke baad ready hain.
* Example:

  ```js
  console.log("Start");
  setTimeout(() => console.log("Timeout callback"), 1000);
  console.log("End");
  ```

  Output:

  ```
  Start
  End
  Timeout callback
  ```

> Even though `setTimeout` delay is 0 or 1 ms, it still executes **after** the main thread finishes — kyunki callback queue me dala jata hai, aur event loop usse stack khali hone ke baad hi execute karta hai.

---

### 🔄 4. Event Loop — The Real Hero

Event Loop ka main kaam hai:

> “Continuously check if the call stack is empty, and if yes, push tasks from the queue.”

**Steps:**

1. Check if **Call Stack** is empty.
2. If yes → pick the first callback from the **Task Queue** or **Microtask Queue**.
3. Push that callback to the **Call Stack** for execution.
4. Repeat infinitely.

---

## 🪄 Microtask Queue vs Task Queue

| Type                            | Example                                          | Priority             |
| ------------------------------- | ------------------------------------------------ | -------------------- |
| **Microtask Queue[ Promise Queue ]**             | Promises, Mutation Observers, `queueMicrotask()` | 🔥 **High Priority** |
| **Task Queue (Callback Queue)** | `setTimeout`, `setInterval`, DOM events          | ⚙️ Lower Priority    |

**Execution Order Rule:**
👉 After every execution cycle, Event Loop **empties the entire microtask queue first**, then moves to task queue.

Example:

```js
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
```

Output:

```
Start
End
Promise resolved
setTimeout
```

Because:
✅ Promise (microtask) executes before
⏳ setTimeout (task) executes later.

---

## 🧩 5. Promise vs setTimeout — Priority Demo

```js
setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("Normal log");
```

🔹 Step-by-step:

1. `console.log("Normal log")` → executes immediately.
2. Promise callback → goes to **Microtask Queue**.
3. setTimeout callback → goes to **Task Queue**.
4. Event Loop → clears Microtask queue first → runs “Promise resolved”.
5. Then executes “setTimeout”.

Output:

```
Normal log
Promise resolved
setTimeout
```

---

## ⚙️ 6. Real-World Analogy (Simplified)

Imagine:

* 🧑‍🍳 **JS Engine** → the main chef
* 🧾 **Call Stack** → order list
* 🕓 **Web API** → assistant chef handling long tasks (oven, timer, API call)
* 📬 **Callback Queue** → list of completed dishes ready to serve
* 🔁 **Event Loop** → waiter checking “Is chef free?” If yes, bring next order from queue

---

## 🚀 7. Async Functions (Promises + async/await)

Under the hood:

* `async` functions return a **Promise**
* `await` pauses execution **inside that function only**, not globally.

Example:

```js
async function fetchData() {
  console.log("Fetching...");
  const res = await fetch('https://api.github.com');
  console.log("Done!");
}
fetchData();
console.log("After fetch call");
```

Output:

```
Fetching...
After fetch call
Done!
```

Here:

* `await` suspends the async function,
* Browser continues executing other code,
* Once fetch completes → promise resolves → callback goes to **Microtask Queue**,
  and Event Loop executes it when stack is clear.

---

## 🧩 8. Diagram Recap (Based on Your Image)

```
      +---------------------------+
      |         JS Engine         |
      |---------------------------|
      |  Memory Heap  | Call Stack|
      |---------------------------|
      |  Variables    | Execution |
      |                Contexts   |
      +----------|----------------+
                 |
                 | calls Web API
                 v
      +---------------------------+
      |         Web APIs          |
      |---------------------------|
      | setTimeout  fetch() DOM   |
      +---------------------------+
                 |
                 v
      +---------------------------+
      |  Callback / Task Queue    |
      | (FIFO)                    |
      +---------------------------+
                 |
                 | Event Loop
                 v
      +---------------------------+
      |  Back to Call Stack       |
      +---------------------------+
```

---

## 🧩 9. In Node.js (Extra context)

* **Libuv** library handles async tasks.
* There are multiple internal queues: timers, I/O callbacks, check, close, etc.
* Concept remains same → event loop controls task flow.

---

## 🧠 10. Summary Points

* JS = single-threaded synchronous language.
* Web APIs + Event Loop = enable asynchronous behavior.
* Call Stack = executes code one at a time.
* Task Queue = stores async callbacks (setTimeout, etc.).
* Microtask Queue = stores high-priority callbacks (Promises).
* Event Loop = keeps checking stack & queues for execution.
* async/await = syntactic sugar over Promises.

---

## 🧾 11. Bonus Practice Example

Try this:

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

Output:

```
1
4
3
2
```

🧩 Reason:

* 1 & 4 → synchronous
* 3 → microtask (Promise)
* 2 → task queue (setTimeout)

---

✅ **End Summary Line:**

> JavaScript appears asynchronous because of the Event Loop — but under the hood, it’s still single-threaded.
> The event loop acts as a traffic controller, ensuring that asynchronous code doesn’t block the main thread while keeping execution order predictable.

---