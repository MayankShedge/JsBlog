// ========================================
// ⏳ ASYNC & AWAIT - COMPLETE MASTERCLASS
// ========================================

/*
Async/Await = Modern syntax for handling asynchronous code
Built on top of Promises, makes async code look synchronous

⭐ INTERVIEW IMPORTANCE: CRITICAL (95% of modern JS interviews)
Most asked: async/await vs Promises, error handling, execution flow,
race conditions, event loop with async

What is Asynchronous?
- Code doesn't wait for long operations
- Program continues while waiting
- Results come back later (callbacks, promises)
- Examples: Network requests, file I/O, timers

Why Async/Await over Promises?
✅ Cleaner, more readable syntax
✅ Easier error handling (try/catch)
✅ Looks like synchronous code
✅ Easier debugging (stack traces)
❌ Still based on Promises underneath
*/

// ========================================
// 🟢 PROMISES - FOUNDATION
// ========================================

console.log("=== PROMISES ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Async/await is syntactic sugar over Promises
Must understand Promises to understand async/await

Promise States:
1. Pending - Initial state (operation in progress)
2. Fulfilled - Success (resolved with value)
3. Rejected - Failure (rejected with reason)

Promise can ONLY settle once (not change again)
*/

// 1️⃣ Creating a Promise
console.log("1. Creating Promise:");

const simplePromise = new Promise((resolve, reject) => {
    // executor function runs immediately
    // resolve - call when success
    // reject - call when failure
    
    setTimeout(() => {
        const success = true;
        
        if (success) {
            resolve("Promise resolved!"); // Settle as fulfilled
        } else {
            reject("Promise rejected!"); // Settle as rejected
        }
    }, 1000);
});

/*
Promise Constructor:
- Takes executor function
- Executor receives: resolve, reject
- Called immediately (synchronously!)
- Must call resolve or reject (or neither = pending forever)
*/

// 2️⃣ Consuming with .then() and .catch()
console.log("2. Consuming Promise:");

simplePromise
    .then((result) => {
        console.log("Success:", result);
        return result.toUpperCase(); // Can chain!
    })
    .then((uppercased) => {
        console.log("Chained:", uppercased);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Always executes (cleanup)");
    });

/*
⭐ INTERVIEW GOLD: Promise methods

| Method    | Calls when       | Can chain? | Always runs? |
|-----------|------------------|-----------|--------------|
| .then()   | Fulfilled        | ✅ Yes    | ❌ No        |
| .catch()  | Rejected         | ✅ Yes    | ❌ No        |
| .finally()| Both             | ❌ No     | ✅ Yes       |

Chaining creates new Promises:
promise1
  .then(val => return val + 1)        // Returns new Promise
  .then(val => console.log(val))      // Gets result from previous
*/

// 3️⃣ Promise with Data
console.log("\n3. Promise with Data:");

const fetchUserData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = {
            id: 1,
            name: "Mayank",
            email: "mayank@gmail.com"
        };
        resolve(user); // Pass data to .then()
    }, 500);
});

fetchUserData
    .then((user) => {
        console.log("User:", user);
        return user.name; // Pass to next .then()
    })
    .then((name) => {
        console.log("Name:", name);
    });

// 4️⃣ Promise Error Handling
console.log("\n4. Promise Error Handling:");

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong!"));
    }, 500);
});

errorPromise
    .then((result) => console.log(result))
    .catch((error) => {
        console.log("Caught error:", error.message);
    });

/*
⚠️ Promise Rejection vs HTTP Errors:

fetch() Promise rejects when:
✅ Network error (offline, timeout)
✅ Browser blocks request (CORS)

fetch() Promise DOES NOT reject when:
❌ HTTP error status (404, 500)
   These come as Response with ok=false

So must always check response.ok or response.status!
*/

// 5️⃣ Promise.all, Promise.race
console.log("\n5. Promise Combinators:");

const promise1 = Promise.resolve("First");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 100));
const promise3 = Promise.resolve("Third");

// Promise.all - Wait for ALL promises (fail if any rejects)
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All results:", results);
        // ['First', 'Second', 'Third']
    });

// Promise.race - Return FIRST settled promise
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log("Race winner:", result); // 'First' (fastest)
    });

// Promise.allSettled - Wait for ALL (returns all results/errors)
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log("All settled:", results);
        // [
        //   { status: 'fulfilled', value: 'First' },
        //   { status: 'fulfilled', value: 'Second' },
        //   { status: 'fulfilled', value: 'Third' }
        // ]
    });

// Promise.any - Return FIRST fulfilled promise
Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log("Any winner:", result);
    });

/*
⭐ Promise Combinators:

| Method           | Waits for | Rejects if | Returns      |
|------------------|-----------|------------|--------------|
| Promise.all()    | ALL       | Any rejects| All results  |
| Promise.race()   | FIRST     | Any state  | First result |
| Promise.any()    | FIRST OK  | All reject | First success|
| Promise.allSettled() | ALL   | Never      | All + status |
*/


// ========================================
// 🔵 ASYNC FUNCTIONS - MODERN SYNTAX
// ========================================

console.log("\n=== ASYNC FUNCTIONS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: EXTREMELY HIGH
Async function always returns a Promise
Makes async code look like sync code

Why async/await?
❌ Callback Hell - Deeply nested callbacks
❌ .then() chains - Harder to read/debug
✅ async/await - Looks like synchronous code
*/

// 1️⃣ Basic async function
console.log("1. Basic async:");

async function simpleAsync() {
    console.log("Async function started");
    
    // Code here runs synchronously until await
    
    return "Async result"; // Implicitly wrapped in Promise.resolve()
}

// simpleAsync() returns a Promise!
simpleAsync().then((result) => {
    console.log("Result:", result);
});

/*
Key points:
- async keyword makes function return Promise
- return value auto-wrapped in Promise.resolve()
- throw error auto-wrapped in Promise.reject()
- Function returns IMMEDIATELY (doesn't wait for await)
*/

// 2️⃣ Await - Wait for Promise
console.log("\n2. Using await:");

async function waitForPromise() {
    console.log("Before await");
    
    const result = await simplePromise; // ⏸️ WAIT for Promise
    console.log("After await:", result);
    
    return result;
}

waitForPromise();

/*
⚠️ await behavior:
- Pauses function execution
- Waits for Promise settlement
- If fulfilled: returns value
- If rejected: throws error (use try/catch!)
- Only works in async function (mostly)

Top-level await (in modules):
- Recent feature (ES2022)
- Can use await outside async function in modules
*/

// 3️⃣ Error Handling with try/catch
console.log("\n3. Error handling:");

async function handleError() {
    try {
        const result = await errorPromise;
        console.log("Success:", result);
    } catch (error) {
        console.log("Caught error:", error.message);
    } finally {
        console.log("Cleanup");
    }
}

handleError();

/*
try/catch/finally:
try - Code that might throw error
catch - Handle error if thrown
finally - Always runs (cleanup)

This is much cleaner than .catch()!
*/

// 4️⃣ Multiple awaits
console.log("\n4. Multiple awaits:");

async function multipleAwaits() {
    console.log("Start");
    
    const result1 = await promise1;
    console.log("Result 1:", result1);
    
    const result2 = await promise2;
    console.log("Result 2:", result2);
    
    const result3 = await promise3;
    console.log("Result 3:", result3);
    
    return [result1, result2, result3];
}

// ⚠️ Sequential - Total time = sum of all delays!
// Better: Parallel when possible

// 5️⃣ Parallel execution
console.log("\n5. Parallel execution:");

async function parallelExecution() {
    // Start ALL promises (don't await yet)
    const p1 = promise1; // Already settled
    const p2 = promise2; // Start waiting
    const p3 = promise3; // Already settled
    
    // Now wait for all
    const results = await Promise.all([p1, p2, p3]);
    
    return results;
    // Total time = longest delay (better!)
}

/*
Sequential vs Parallel:

Sequential (slow):
const r1 = await p1; // wait 1s
const r2 = await p2; // wait 1s
const r3 = await p3; // wait 1s
Total: 3 seconds

Parallel (fast):
const [r1, r2, r3] = await Promise.all([p1, p2, p3]);
Total: 1 second (max delay)

⭐ INTERVIEW GOLD: This is asked frequently!
*/

// 6️⃣ Error in first of many
console.log("\n6. Error handling with Promise.all:");

async function errorInMany() {
    try {
        const results = await Promise.all([
            promise1,
            promise2,
            errorPromise // This will reject!
        ]);
        console.log(results);
    } catch (error) {
        console.log("One failed:", error.message);
        // With Promise.allSettled instead:
    }
    
    // Better for handling all:
    const settled = await Promise.allSettled([
        promise1,
        promise2,
        errorPromise
    ]);
    
    // Check each one
    settled.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index} succeeded:`, result.value);
        } else {
            console.log(`Promise ${index} failed:`, result.reason);
        }
    });
}


// ========================================
// 🟠 ASYNC PATTERNS - REAL-WORLD
// ========================================

console.log("\n=== REAL-WORLD PATTERNS ===\n");

// 1️⃣ Fetching API data
console.log("1. Fetch API data:");

async function fetchUser(userId) {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        
        // Check if response OK (important!)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const user = await response.json();
        console.log("User:", user);
        
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}

// fetchUser('MayankShedge');

/*
⚠️ Critical patterns:
- await response (get Response object)
- Check response.ok before using
- await response.json() (converts to data)
- Wrap in try/catch
*/

// 2️⃣ Retry logic
console.log("\n2. Retry logic:");

async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(response.statusText);
            return await response.json();
        } catch (error) {
            console.log(`Attempt ${i + 1} failed:`, error.message);
            
            if (i === maxRetries - 1) throw error; // Last attempt
            
            // Wait before retry (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
        }
    }
}

/*
Retry patterns:
- Fixed delay: setTimeout same duration
- Exponential backoff: Double delay each time
- Jittered backoff: Random + base delay (avoid thundering herd)
*/

// 3️⃣ Sequential vs Parallel
console.log("\n3. Sequential operations:");

async function sequential() {
    // Get user
    const user = await fetchUser('MayankShedge');
    
    // Get user's repos (depends on user)
    const reposUrl = user.repos_url;
    const repos = await fetch(reposUrl).then(r => r.json());
    
    return { user, repos };
}

async function parallel() {
    // Fetch multiple independent resources
    const [user1, user2, user3] = await Promise.all([
        fetchUser('user1'),
        fetchUser('user2'),
        fetchUser('user3')
    ]);
    
    return [user1, user2, user3];
}

// 4️⃣ Timeout handling
console.log("\n4. Timeout handling:");

async function fetchWithTimeout(url, timeoutMs = 5000) {
    const controller = new AbortController();
    
    // Set timeout to abort
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    }
}

/*
AbortController pattern:
- Create controller
- Pass signal to fetch
- Call abort() to cancel
- Prevents hanging requests
*/

// 5️⃣ Queuing/Concurrency control
console.log("\n5. Concurrency control:");

async function fetchManySequential(urls) {
    const results = [];
    
    for (const url of urls) {
        const result = await fetch(url).then(r => r.json());
        results.push(result);
    }
    
    return results; // Sequential
}

async function fetchManyConcurrent(urls, limit = 3) {
    const results = [];
    
    // Create array of promises (but don't await yet!)
    const promises = urls.map(async (url, index) => {
        const result = await fetch(url).then(r => r.json());
        results[index] = result;
        return result;
    });
    
    // Use Promise.all with concurrent limit
    // (Advanced: use p-limit or similar library for true limit)
    await Promise.all(promises);
    
    return results;
}


// ========================================
// 🔴 ASYNC EXECUTION FLOW - CRITICAL!
// ========================================

console.log("\n=== EXECUTION FLOW ===\n");

/*
⭐ INTERVIEW IMPORTANCE: EXTREMELY HIGH
Understanding async execution is KEY to mastering JavaScript

Event Loop with async:
1. Call Stack - Synchronous code
2. Web APIs - setTimeout, fetch, etc.
3. Microtask Queue - Promises, async/await
4. Macrotask Queue - setTimeout, setInterval
5. Event Loop - Moves tasks to stack

CRITICAL: Microtask queue has HIGHER priority!
*/

console.log("Example execution order:");

console.log("1: Start");

setTimeout(() => {
    console.log("2: setTimeout (macrotask)");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3: Promise (microtask)");
    });

async function asyncFunc() {
    console.log("4: Async function body (sync)");
    
    await Promise.resolve();
    
    console.log("5: After await (microtask)");
}

asyncFunc();

console.log("6: End");

/*
Output order:
1: Start
4: Async function body (sync)
6: End
3: Promise (microtask)
5: After await (microtask)
2: setTimeout (macrotask)

Why?
1. Synchronous code first (1, 4, 6)
2. Microtask queue (3, 5) - higher priority!
3. Macrotask queue (2)
4. Back to microtask queue
5. Next macrotask...
*/

// Diagram representation (as in your image):
/*
FETCH PROMISE FLOW (Your Screenshot Context):

┌─ Global Memory ─────────────────────────────────┐
│ response = fetch('url')                         │
│ → Initially: <pending Promise>                  │
└─────────────────────────────────────────────────┘
           ↓
      Web API (Browser/Node)
           ↓
    Network Request Send
      /              \
    /                  \
Success (✅)          Failure (❌)
   ↓                    ↓
Promise Fulfilled    Promise Rejected
   ↓                    ↓
onFulfilled []       onRejection []
   ↓                    ↓
.then(callback)      .catch(callback)
   ↓                    ↓
Microtask Queue
   ↓
Event Loop (when stack empty)
   ↓
Execute .then() or .catch()
   ↓
Update Global Memory
   ↓
response = <data>

Key points:
1. fetch() returns Promise immediately
2. Network happens in background (Web API)
3. Result goes to Microtask Queue
4. Event Loop executes when main thread free
5. .then() / .catch() run with result/error
*/


// ========================================
// 🟣 COMMON PITFALLS & GOTCHAS
// ========================================

console.log("\n=== COMMON MISTAKES ===\n");

// ❌ Mistake 1: Forgetting await
console.log("❌ Mistake 1: Missing await");
async function mistake1() {
    const data = fetchUser('test'); // ❌ Missing await!
    console.log(data); // Prints Promise, not data!
}

// ✅ Correct:
async function correct1() {
    const data = await fetchUser('test'); // ✅ Correct
    console.log(data); // Prints actual data
}

// ❌ Mistake 2: Catching errors without try/catch
console.log("\n❌ Mistake 2: No error handling");
async function mistake2() {
    const data = await errorPromise; // ❌ Error thrown, nothing catches it!
    console.log(data);
}

// ✅ Correct:
async function correct2() {
    try {
        const data = await errorPromise;
        console.log(data);
    } catch (error) {
        console.log("Error handled:", error);
    }
}

// ❌ Mistake 3: Sequential when parallel intended
console.log("\n❌ Mistake 3: Sequential instead of parallel");
async function mistake3() {
    const start = Date.now();
    
    const r1 = await promise2; // 1 second wait
    const r2 = await promise2; // 1 second wait
    const r3 = await promise2; // 1 second wait
    
    console.log("Total time:", Date.now() - start); // ~3 seconds
}

// ✅ Correct:
async function correct3() {
    const start = Date.now();
    
    const [r1, r2, r3] = await Promise.all([
        promise2,
        promise2,
        promise2
    ]);
    
    console.log("Total time:", Date.now() - start); // ~1 second
}

// ❌ Mistake 4: Not checking response.ok
console.log("\n❌ Mistake 4: 404 treated as success");
async function mistake4() {
    const response = await fetch('https://invalid-url-404.com/api');
    const data = await response.json(); // ❌ This succeeds even on 404!
    console.log(data); // Undefined or error HTML
}

// ✅ Correct:
async function correct4() {
    const response = await fetch('https://invalid-url-404.com/api');
    
    if (!response.ok) { // ✅ Check status
        throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
}

// ❌ Mistake 5: Creating unhandled promise rejection
console.log("\n❌ Mistake 5: Unhandled rejection");
async function mistake5() {
    // This rejection not caught anywhere
    const p = Promise.reject("Unhandled!");
    // ⚠️ Will cause "Unhandled Promise Rejection" warning
}

// ✅ Correct:
async function correct5() {
    const p = Promise.reject("Handled!");
    
    p.catch(err => console.log("Caught:", err)); // ✅ Handle it
}


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What does async keyword do?
A: Makes function return a Promise
   Auto-wraps return value in Promise.resolve()
   Auto-wraps throw error in Promise.reject()

Q2: What does await do?
A: Pauses function execution
   Waits for Promise settlement
   Returns fulfilled value or throws if rejected
   Only works in async function

Q3: async/await vs Promises difference?
A: async/await - looks synchronous, cleaner syntax
   Promises - .then() chain, more functional
   Both equivalent, async/await preferred

Q4: How to handle errors in async/await?
A: Try/catch/finally blocks
   Much cleaner than .catch()
   Finally always runs

Q5: Sequential vs parallel execution?
A: Sequential - await each Promise one by one
   Parallel - Promise.all() waits for all at once
   Parallel faster when independent

Q6: What is microtask queue?
A: Higher priority queue than macrotask queue
   Promises and async/await use it
   Executes before setTimeout, etc.

Q7: Why might fetch() not reject?
A: HTTP errors (404, 500) don't reject Promise
   Only network errors cause rejection
   Must check response.ok or response.status

Q8: What happens after await?
A: Code after await goes to Microtask Queue
   Executes when main thread free
   Part of event loop scheduling

Q9: Can you use await outside async?
A: No (normally) - only in async functions
   Exception: Top-level await in ES2022 modules

Q10: How to implement timeout with fetch?
A: Use AbortController with timeout
   Signal passed to fetch()
   Call abort() after timeout
   Prevents hanging requests

Q11: Promise.all vs Promise.allSettled?
A: Promise.all - rejects if ANY Promise rejects
   Promise.allSettled - waits for ALL, returns status
   Use allSettled when need all results

Q12: What does "callback hell" mean?
A: Deeply nested callbacks (1990s problem)
   Promises reduced it
   async/await eliminated it

Q13: How to retry failed async operation?
A: Loop with try/catch inside
   Increment retry counter
   Can use exponential backoff delay

Q14: What is AbortController?
A: Mechanism to cancel fetch requests
   Pass signal to fetch()
   Call abort() to cancel
   Prevents resource waste

Q15: Explain async function execution?
A: Body runs synchronously until first await
   Returns Promise immediately
   Code after await scheduled as microtask
   Continues when microtask runs
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION PATTERNS ===\n");

/*
1. FETCH WITH ERROR HANDLING AND RETRY
*/
async function robustFetch(url, options = {}) {
    const {
        retries = 3,
        timeout = 5000,
        method = 'GET'
    } = options;
    
    let lastError;
    
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);
            
            const response = await fetch(url, {
                method,
                signal: controller.signal,
                ...options
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            lastError = error;
            console.log(`Attempt ${attempt}/${retries} failed:`, error.message);
            
            if (attempt < retries) {
                // Exponential backoff
                const delay = 1000 * Math.pow(2, attempt - 1);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw lastError;
}

/*
2. BATCH PROCESSING WITH CONCURRENCY LIMIT
*/
async function processBatch(items, processor, concurrency = 3) {
    const results = [];
    const executing = [];
    
    for (const [index, item] of items.entries()) {
        // Start processing
        const promise = Promise.resolve().then(() => processor(item)).then(
            result => (results[index] = result)
        );
        
        executing.push(promise);
        
        // If reached concurrency limit, wait for one to finish
        if (executing.length >= concurrency) {
            await Promise.race(executing);
            executing.splice(executing.findIndex(p => p === promise), 1);
        }
    }
    
    // Wait for remaining
    await Promise.all(executing);
    return results;
}

/*
3. LOAD DATA WITH PROGRESS TRACKING
*/
async function fetchWithProgress(url) {
    const response = await fetch(url);
    
    if (!response.ok) throw new Error(response.statusText);
    
    const total = parseInt(response.headers.get('content-length'), 10);
    let loaded = 0;
    
    const reader = response.body.getReader();
    const chunks = [];
    
    while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        chunks.push(value);
        loaded += value.length;
        
        const progress = (loaded / total) * 100;
        console.log(`Progress: ${progress.toFixed(2)}%`);
    }
    
    const blob = new Blob(chunks);
    return blob.text();
}

/*
4. CHAIN OF DEPENDENT ASYNC OPERATIONS
*/
async function chainedOperations() {
    try {
        // Step 1: Get user
        const user = await fetchUser('MayankShedge');
        console.log('User:', user.name);
        
        // Step 2: Get repos (depends on user)
        const repos = await fetch(user.repos_url).then(r => r.json());
        console.log('Repos:', repos.length);
        
        // Step 3: Get first repo details
        if (repos.length > 0) {
            const repo = await fetch(repos[0].url).then(r => r.json());
            console.log('First repo:', repo.name);
            
            // Step 4: Get commits
            const commits = await fetch(repo.commits_url.replace('{/sha}', '')).then(r => r.json());
            console.log('Commits:', commits.length);
        }
        
        return { user, repos };
    } catch (error) {
        console.error('Operation failed:', error);
        throw error;
    }
}

/*
5. RACE CONDITIONS - FIRST SUCCESSFUL
*/
async function fetchFastest(urls) {
    try {
        return await Promise.race(
            urls.map(url => fetch(url).then(r => r.json()))
        );
    } catch (error) {
        console.error('All requests failed:', error);
        throw error;
    }
}


console.log("\n✅ Async/Await Mastery Complete!");
