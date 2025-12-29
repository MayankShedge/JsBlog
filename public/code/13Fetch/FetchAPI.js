// ========================================
// 🌐 FETCH API - COMPLETE MASTERCLASS
// ========================================

/*
Fetch API = Modern way to make HTTP requests (replaces XMLHttpRequest)
Returns a Promise that resolves with Response object
Available in browsers and modern Node.js (18+)

⭐ INTERVIEW IMPORTANCE: CRITICAL (90% of modern JS interviews)
Most asked: Fetch basics, error handling, response handling,
request options, CORS, file uploads

Why Fetch over XMLHttpRequest?
✅ Promise-based (cleaner than callbacks)
✅ Simpler API
✅ Built into modern browsers
✅ Works with async/await
✅ Better error handling

Why NOT just use a library?
- Good to understand underlying API
- Less dependency
- Better for interviews
*/

// ========================================
// 🟢 FETCH BASICS - FUNDAMENTAL
// ========================================

console.log("=== FETCH BASICS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Fetch is foundation of modern API communication

Fetch Syntax:
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
*/

// 1️⃣ Simple GET request
console.log("1. Simple GET:");

fetch('https://api.github.com/users/MayankShedge')
    .then((response) => {
        console.log("Response object:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        
        // Must convert to JSON
        return response.json();
    })
    .then((data) => {
        console.log("User data:", data);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });

/*
Fetch returns Response object with:
- status: HTTP status code (200, 404, etc.)
- ok: true if status 200-299
- statusText: Status message
- headers: HTTP headers
- body: Response body (must parse)
- Methods: .json(), .text(), .blob(), .arrayBuffer()
*/

// 2️⃣ Response parsing
console.log("\n2. Response parsing:");

async function parseResponses() {
    try {
        const response = await fetch('https://api.github.com/users/MayankShedge');
        
        // Different parsing methods
        
        // JSON (most common)
        // const data = await response.json();
        
        // Plain text
        // const text = await response.text();
        
        // Binary data (images, etc.)
        // const blob = await response.blob();
        
        // Raw bytes
        // const buffer = await response.arrayBuffer();
        
        // Cloned response (response body can only be read once!)
        const response1 = response.clone();
        const json = await response1.json();
        
        console.log("Parsed:", json);
    } catch (error) {
        console.error("Error:", error);
    }
}

// parseResponses();

/*
⚠️ Response body can only be read ONCE!

❌ Wrong:
const data1 = await response.json();
const data2 = await response.json(); // Error!

✅ Right:
const data = await response.json();
// Or:
const response1 = response.clone();
const data1 = await response1.json();
const response2 = response.clone();
const data2 = await response2.json();
*/

// 3️⃣ Error handling - CRITICAL!
console.log("\n3. Error handling:");

async function errorHandling() {
    try {
        const response = await fetch('https://invalid-domain-xyz.com/api');
        
        // ⚠️ Network error causes rejection
        // But HTTP errors (404, 500) don't!
        
        // Must check response.ok
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Success:", data);
        
    } catch (error) {
        // Catches network errors AND manual throws
        if (error instanceof TypeError) {
            console.error("Network error:", error.message);
        } else {
            console.error("Error:", error.message);
        }
    }
}

// errorHandling();

/*
⭐ INTERVIEW GOLD: Fetch error handling

Fetch rejects Promise when:
✅ Network error (offline, timeout)
✅ Request blocked (CORS, CSP)

Fetch does NOT reject when:
❌ HTTP 404, 500, etc. (returns Response with ok=false)

So ALWAYS check response.ok!

fetch(url)
  .then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
*/


// ========================================
// 🔵 REQUEST OPTIONS - POST, HEADERS, ETC
// ========================================

console.log("\n=== REQUEST OPTIONS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
HTTP methods: GET, POST, PUT, PATCH, DELETE

Fetch options object:
{
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON stringified data,
  credentials: 'include' | 'same-origin' | 'omit',
  mode: 'cors' | 'same-origin' | 'no-cors',
  signal: AbortSignal,
  cache: 'default' | 'no-store' | 'reload' | 'force-cache',
}
*/

// 1️⃣ POST request with body
console.log("1. POST request:");

async function postData() {
    const newUser = {
        name: "Mayank",
        email: "mayank@example.com",
        age: 22
    };
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST', // Important!
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser) // Must stringify
        });
        
        if (!response.ok) throw new Error(response.statusText);
        
        const result = await response.json();
        console.log("Posted:", result);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

// postData();

// 2️⃣ PUT request (replace entire resource)
console.log("\n2. PUT request:");

async function updateUser(userId) {
    const updatedUser = {
        name: "Updated Name",
        email: "new@example.com"
    };
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser)
        });
        
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

// 3️⃣ PATCH request (partial update)
console.log("\n3. PATCH request:");

async function partialUpdate(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "New Name" }) // Only update name
        });
        
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

// 4️⃣ DELETE request
console.log("\n4. DELETE request:");

async function deleteUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error(response.statusText);
        
        console.log("Deleted successfully");
    } catch (error) {
        console.error("Error:", error);
    }
}

// 5️⃣ Headers
console.log("\n5. Custom headers:");

async function withHeaders() {
    const response = await fetch('https://api.github.com/user', {
        headers: {
            'Authorization': 'token YOUR_TOKEN',
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'MyApp'
        }
    });
    
    return await response.json();
}

// 6️⃣ Credentials (cookies, auth)
console.log("\n6. Credentials:");

/*
credentials options:
'omit' - Don't send cookies (default for cross-origin)
'same-origin' - Send cookies only if same domain
'include' - Always send cookies (for cross-origin)
*/

async function withCredentials() {
    const response = await fetch('https://example.com/api/user', {
        credentials: 'include' // Send cookies
    });
    
    return await response.json();
}

// 7️⃣ Request timeout
console.log("\n7. Timeout with AbortController:");

async function fetchWithTimeout(url, timeoutMs = 5000) {
    const controller = new AbortController();
    
    // Abort after timeout
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeoutMs);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(response.statusText);
        
        return await response.json();
        
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        
        throw error;
    }
}

/*
⚠️ AbortController pattern:
- Create controller
- Pass signal to fetch
- Call abort() to cancel
- Prevents hanging requests
- Cleans up resources
*/

// 8️⃣ Cache options
console.log("\n8. Cache control:");

async function withCache() {
    const response = await fetch('https://api.github.com/users/MayankShedge', {
        cache: 'force-cache' // Use cached if available
        // 'no-cache' - Validate with server
        // 'reload' - Skip cache, always fresh
        // 'no-store' - Never use or store cache
    });
    
    return await response.json();
}


// ========================================
// 🟠 ADVANCED PATTERNS
// ========================================

console.log("\n=== ADVANCED PATTERNS ===\n");

// 1️⃣ File upload
console.log("1. File upload:");

async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData // Don't set Content-Type! Browser does it
        });
        
        return await response.json();
    } catch (error) {
        console.error("Upload error:", error);
    }
}

// 2️⃣ Download file
console.log("\n2. File download:");

async function downloadFile(url, filename) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) throw new Error(response.statusText);
        
        const blob = await response.blob();
        
        // Create download link
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        
        URL.revokeObjectURL(a.href);
    } catch (error) {
        console.error("Download error:", error);
    }
}

// 3️⃣ Streaming response
console.log("\n3. Streaming response:");

async function streamResponse(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) throw new Error(response.statusText);
        
        const reader = response.body.getReader();
        let receivedLength = 0;
        const chunks = [];
        
        while (true) {
            const { done, value } = await reader.read();
            
            if (done) break;
            
            chunks.push(value);
            receivedLength += value.length;
            
            console.log(`Received ${receivedLength} bytes`);
        }
        
        // Convert chunks to blob
        const blob = new Blob(chunks);
        const text = await blob.text();
        
        console.log("Received:", text);
    } catch (error) {
        console.error("Error:", error);
    }
}

// 4️⃣ Request retry logic
console.log("\n4. Retry logic:");

async function fetchWithRetry(url, options = {}) {
    const {
        retries = 3,
        backoff = 1000,
        timeout = 5000
    } = options;
    
    let lastError;
    
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetchWithTimeout(url, timeout);
            return response;
        } catch (error) {
            lastError = error;
            console.log(`Attempt ${attempt}/${retries} failed:`, error.message);
            
            if (attempt < retries) {
                // Exponential backoff
                const delay = backoff * Math.pow(2, attempt - 1);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw lastError;
}

// 5️⃣ Parallel requests
console.log("\n5. Parallel requests:");

async function fetchMultiple(urls) {
    try {
        // Start all requests (don't await yet!)
        const promises = urls.map(url => fetch(url).then(r => r.json()));
        
        // Wait for all to complete
        const results = await Promise.all(promises);
        
        return results;
    } catch (error) {
        console.error("Error:", error);
    }
}

// 6️⃣ Cancellable request
console.log("\n6. Cancellable request:");

class CancellableRequest {
    constructor() {
        this.controller = new AbortController();
    }
    
    async fetch(url, options = {}) {
        try {
            const response = await fetch(url, {
                ...options,
                signal: this.controller.signal
            });
            
            if (!response.ok) throw new Error(response.statusText);
            
            return await response.json();
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Request cancelled');
            } else {
                throw error;
            }
        }
    }
    
    cancel() {
        this.controller.abort();
    }
}

// Usage:
/*
const request = new CancellableRequest();
const promise = request.fetch('https://api.github.com/users/MayankShedge');

// Cancel after 2 seconds
setTimeout(() => request.cancel(), 2000);

promise.catch(err => console.error(err));
*/

// 7️⃣ Concurrent requests with limit
console.log("\n7. Limited concurrency:");

async function fetchWithLimit(urls, limit = 3) {
    const results = [];
    const executing = [];
    
    for (const [index, url] of urls.entries()) {
        // Start fetch
        const promise = fetch(url)
            .then(r => r.json())
            .then(data => results[index] = data);
        
        executing.push(promise);
        
        // If limit reached, wait for one to finish
        if (executing.length >= limit) {
            await Promise.race(executing);
            // Remove completed promise
            executing.pop();
        }
    }
    
    // Wait for remaining
    await Promise.all(executing);
    
    return results;
}


// ========================================
// 🔴 CORS & SECURITY
// ========================================

console.log("\n=== CORS & SECURITY ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
CORS = Cross-Origin Resource Sharing
Prevents malicious cross-origin requests

Browser enforces CORS, backend enables it
*/

// 1️⃣ CORS request
console.log("1. CORS request:");

/*
Browser automatically adds:
Origin: https://example.com

Server responds with:
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type

If mismatch → CORS error
*/

async function corsRequest() {
    try {
        const response = await fetch('https://different-domain.com/api', {
            mode: 'cors', // Enable CORS (default)
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return await response.json();
    } catch (error) {
        console.error("CORS error:", error);
    }
}

// 2️⃣ Preflight request
console.log("\n2. Preflight request:");

/*
Browser automatically sends OPTIONS request first for:
- POST, PUT, PATCH with custom headers
- Content-Type other than form/text/basic

Server must respond with:
- Allow-Origin
- Allow-Methods
- Allow-Headers
*/

async function preflightTrigger() {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Custom-Header': 'value' // Triggers preflight
        },
        body: JSON.stringify({ name: 'Test' })
    });
    
    return await response.json();
}

// 3️⃣ Credentials with CORS
console.log("\n3. Credentials with CORS:");

/*
To send cookies/auth:
1. Frontend: credentials: 'include'
2. Backend: Access-Control-Allow-Credentials: true
           Access-Control-Allow-Origin: specific domain (not *)
*/

async function credentialsRequest() {
    const response = await fetch('https://api.example.com/user', {
        credentials: 'include', // Send cookies
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return await response.json();
}


// ========================================
// 🌳 FETCH EXECUTION FLOW (Your Screenshot)
// ========================================

console.log("\n=== EXECUTION FLOW ===\n");

/*
Your screenshot shows FETCH PROMISE FLOW:

┌─ GLOBAL MEMORY ─────────────────────────────────┐
│ response = fetch('https://api.github.com/...')   │
│ ↓                                                │
│ response: <pending Promise>                      │
└────────────────────────────────────────────────┘
              ↓
         WEB API / Browser / Node
              ↓
      Network Request Initiated
         /              \
        /                \
    Success (✅)        Failure (❌)
     ↓                    ↓
  Response Object    Network Error
     ↓                    ↓
  onFulfilled[]      onRejection[]
     ↓                    ↓
  .then(callback)    .catch(callback)
     ↓                    ↓
   Microtask Queue
     ↓
  Event Loop (when stack empty)
     ↓
  Execute callback
     ↓
  Update Global Memory
  response: <resolved Promise with data>


KEY POINTS FROM DIAGRAM:

1️⃣ Global Memory
- response variable created
- Initially: <pending Promise>

2️⃣ Web API / Browser
- fetch() NOT part of JavaScript Engine
- Browser handles network request
- JavaScript continues (non-blocking)

3️⃣ Network Request
- Browser sends request to server
- Waiting for response

4️⃣ Two Outcomes
✅ Server responds → Promise fulfills
   - Data in onFulfilled[]
   - .then() callback queued
   
❌ Network fails → Promise rejects
   - Error in onRejection[]
   - .catch() callback queued

5️⃣ Microtask Queue
- .then() / .catch() callbacks go here
- Higher priority than macrotask queue
- Executes when main thread free

6️⃣ Event Loop
- Checks: Is call stack empty?
- If yes: Move microtask to stack
- Execute callback

7️⃣ Result
- data = Response.json()
- response updates in global memory
- Can now use data

⏱️ TIMING:
response = fetch(...) → ⏱️ ~0ms (returns Promise)
Network request      → ⏱️ 100-2000ms (server dependent)
.then() executes     → ⏱️ Network time + event loop
*/


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: What does fetch() return?
A: Returns a Promise that resolves with Response object
   Promise rejects only on network error (not HTTP errors)

Q2: Why must I check response.ok?
A: HTTP errors (404, 500) don't reject Promise
   Must manually check response.ok or response.status

Q3: How to parse different response types?
A: .json() for JSON
   .text() for plain text
   .blob() for binary (images, files)
   .arrayBuffer() for raw bytes

Q4: Why can't I read response body twice?
A: Response body stream can only be read once
   Clone response if need multiple reads

Q5: How to handle fetch timeout?
A: Use AbortController with setTimeout
   Call controller.abort() after timeout
   Catch error with name === 'AbortError'

Q6: POST vs PUT vs PATCH?
A: POST - Create new resource
   PUT - Replace entire resource
   PATCH - Update partial resource

Q7: How to upload files?
A: Use FormData object
   Don't set Content-Type (browser does it)

Q8: What is CORS?
A: Cross-Origin Resource Sharing
   Browser enforces same-origin policy
   Server enables with Access-Control-Allow-* headers

Q9: What triggers preflight request?
A: Custom headers, POST/PUT/PATCH with non-simple content-type
   Browser sends OPTIONS request first

Q10: How to send cookies cross-origin?
A: credentials: 'include' on fetch
   Server: Access-Control-Allow-Credentials: true
   Server: Access-Control-Allow-Origin: specific domain (not *)

Q11: How to retry failed requests?
A: Loop with try/catch
   Exponential backoff delay
   Return on success or throw after max retries

Q12: Sequential vs parallel requests?
A: Sequential: await each
   Parallel: Promise.all() for independent requests

Q13: How to limit concurrent requests?
A: Track executing promises
   Wait for one to finish before starting new

Q14: Fetch vs XMLHttpRequest?
A: Fetch - Promise-based, simpler, modern
   XMLHttpRequest - Callback-based, complex, older

Q15: What happens after fetch completes?
A: Promise settles (fulfilled or rejected)
   .then() / .catch() callbacks go to Microtask Queue
   Event Loop executes when main thread free
*/


// ========================================
// 💼 PRODUCTION UTILITIES
// ========================================

console.log("\n=== PRODUCTION UTILITIES ===\n");

/*
PRODUCTION-READY FETCH WRAPPER
*/

class API {
    constructor(baseURL, defaultOptions = {}) {
        this.baseURL = baseURL;
        this.defaultOptions = defaultOptions;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        const config = {
            ...this.defaultOptions,
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...this.defaultOptions.headers,
                ...options.headers
            }
        };
        
        if (config.body && typeof config.body === 'object') {
            config.body = JSON.stringify(config.body);
        }
        
        try {
            const response = await fetch(url, config);
            
            // Handle HTTP errors
            if (!response.ok) {
                const error = new Error(`HTTP ${response.status}`);
                error.status = response.status;
                error.response = response;
                throw error;
            }
            
            // Handle empty responses
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                return null;
            }
            
            return await response.json();
        } catch (error) {
            console.error(`Request failed: ${endpoint}`, error);
            throw error;
        }
    }
    
    get(endpoint, options) {
        return this.request(endpoint, { method: 'GET', ...options });
    }
    
    post(endpoint, body, options) {
        return this.request(endpoint, { method: 'POST', body, ...options });
    }
    
    put(endpoint, body, options) {
        return this.request(endpoint, { method: 'PUT', body, ...options });
    }
    
    patch(endpoint, body, options) {
        return this.request(endpoint, { method: 'PATCH', body, ...options });
    }
    
    delete(endpoint, options) {
        return this.request(endpoint, { method: 'DELETE', ...options });
    }
}

// Usage:
/*
const api = new API('https://api.github.com', {
    headers: { 'Authorization': 'token...' }
});

const user = await api.get('/users/MayankShedge');
const updated = await api.patch('/user', { bio: 'Updated' });
await api.delete('/repos/user/repo');
*/

console.log("\n✅ Fetch API Mastery Complete!");
