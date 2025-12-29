// 1. Debounce

// Jab ham google karte hai tab ham jab search karte hai kuch toh hame ek suggestion milta hai
// Ab ye suggestion kaha se aara hota hai ? Jab bhi ek key press hoga ham ek API call karke server se data manga lenge
// Suppose user search karra hai "Hard JS" toh ham jab vo h type karega toh ek API call bhejenge aise hi "ha","har","hard","hard ","hard j" aur "hard js" inke liye alag alag API calls trigger honge 
// Ab iskike optimization ke liye debouncing use hota hai. What is it exactly ?
// Agar user ek specified number of seconds ke liye kuch bhi interruption nahi karta hai typing mai toh hi ham API call karenge varna timer ko reset kar denge 
// Ab isme bht sare API calls waste ho gaye . Ab isme ham ek kar sakte the ki ham jab user ka pura type karke ho gaya ho tab API call execute karo final query par.
// par isme UX accha nahi hai as ham user ko autosuggestion nahi provide karre

function debounce(fn , delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId) // cancel the last call 
        timerId = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}

const search = (query) => {
    console.log(`searching for ${query}`);
}

const searchWithDebounce = debounce(search , 1000); // Ha isme ek function denge as parameter jisme hame debouncing lagani hai aur ek delay jitne sec ka agar user halt le ham api call karenge

search('H')
search('Ha')
search('Har')
search('Hard')
search('Hard ')
search('Hard J')
search('Hard JS')

// 2. Throttle 
// Ab isme suppose hamne ek time window laga rakhi hai ek particular time period ki uske andar aap jitne marzi API calls bhejo vo calls ko ignore kiya jaega 
// Ab debouncing mai ham ek particular time pe agar intercept nahi kiya typing ko toh hi API send hoti thi , par isme ham ek time window rakh denge jiske andar jitne chahe requests marlo agar vo timeframe ke andar mar diye gaye (suppose timer is 10 sec and we send req at 5th sec toh vo request ko ignore kiya jaega)
// Eg:- YT live pe slow mode jo agar set ho 20 sec pe ham 1 comment karte hi next 20s ke liye vapis comment nahi kar paenge 

function throttle(fn , delay){
    let lastCall = 0

    return function(...args){
        const now = Date.now()
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(...args)
    }
}

function sendChatMessage(message) {
    console.log(`Sending Message: ${message}`);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage , 2000)

sendChatMessageWithSlowMode('Hi')
sendChatMessageWithSlowMode('Hello')
sendChatMessageWithSlowMode('Hello Ji')
sendChatMessageWithSlowMode('gayab hai kya')


/* 1. Introduction --------------------------------------------------------- */
/*
Debouncing and throttling are two advanced techniques to optimize event-driven code in JavaScript, commonly used to control the execution of performance-heavy operations such as search/autocomplete, scroll, resize, and API calls. Both help avoid unnecessary processing and improve user experience, especially in web applications with frequent events.
*/

/* 2. Debouncing ------------------------------------------------------------ */
/*
- Definition: Debouncing ensures that a function is only executed AFTER a certain amount of time has passed since the last time it was invoked.
- Typical use case: Restricting API calls in search boxes, window resizing, or form validation.
- Working: The function 'waits' until the user has stopped an action (like typing), then runs.

Analogy: "Bandh raho thodi der, agar fir bhi koi nahi aaya toh aap kaam chalu karo."
*/

// Debounce Implementation (vanilla JS)
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage Example - Debounced Search
const onSearchInput = debounce((value) => {
    // perform API call
    console.log('Searching for: ', value);
}, 300);

document.getElementById('search').addEventListener('input', (e) => {
    onSearchInput(e.target.value);
});

/*
- Key points:
  - Only last event triggers function
  - Useful to minimize redundant API calls
  - Commonly used for input boxes, resize events
*/

/* 3. Throttling ------------------------------------------------------------- */
/*
- Definition: Throttling ensures a function is only executed AT MOST ONCE in a specified interval, regardless of how many times the event is triggered.
- Typical use case: Continuous scroll, mouse move, or window resize that fire too many events.
- Working: The function will run at regular intervals, ignoring excessive calls within the interval.

Analogy: "Ek specific gap mein hi kaam karo, baaki ignore karo."
*/

// Throttle Implementation (vanilla JS)
function throttle(fn, interval) {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Usage Example - Throttled Scroll
const onScrollThrottled = throttle(() => {
    // code that runs only every 200ms
    console.log('Scroll event');
}, 200);

window.addEventListener('scroll', onScrollThrottled);

/*
- Key points:
  - Ensures periodic execution, never more frequent than specified interval
  - Useful for infinite scroll, resizing layout, analytics, heavy redraws
*/

/* 4. Debouncing vs Throttling ----------------------------------------------- */
/*
| Feature      | Debounce                  | Throttle                     |
|--------------|---------------------------|------------------------------|
| Frequency    | Only Last Event           | Once per interval            |
| Use Case     | Input, search             | Scroll, resize, analytics    |
| Delay        | Runs after user stops     | Runs every N ms at max       |
| API Calls    | Minimize to final event   | Spread out calls over time   |
*/

/* 5. Advanced Concepts ------------------------------------------------------ */
/*
- Immediate Debounce (leading/trailing):
    - Leading: Execute at start, ignore rest
    - Trailing: Default, waits till user stops

function debounceLeading(fn, delay) {
    let timer, called;
    return (...args) => {
        if (!called) {
            fn.apply(this, args);
            called = true;
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            called = false;
        }, delay);
    };
}

- Throttle with trailing (last call always executed):
function throttleTrailing(fn, interval) {
    let lastCall = 0, timer, args;
    return function (...params) {
        const now = Date.now();
        args = params;
        if (now - lastCall >= interval) {
            fn.apply(this, args);
            lastCall = now;
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), interval - (now-lastCall));
        }
    };
}

- Using Lodash:
    - debounce: _.debounce(func, wait)
    - throttle: _.throttle(func, wait)
*/

/* 6. Production Use Cases --------------------------------------------------- */
/*
1. Search Autocomplete (Debounce):
   - Prevents excessive API calls while user is typing
   - Improves UX and backend performance
2. Scroll-based Analytics (Throttle):
   - Ensures analytic events are logged predictably
3. Window Resize Event (Debounce):
   - Only update layout once user resize is finished
4. Real-time Games/Animation (Throttle):
   - Keeps frame rate steady and predictable
5. Button Spamming Protection (Debounce):
   - Prevents multiple clicks on form submission
6. Infinite Scroll (Throttle):
   - Loads data chunks periodically
*/

/* 7. Interview Questions ----------------------------------------------------- */
/*
Q1. What is debouncing? How is it different from throttling?
Q2. Where would you use debouncing in a web app?
Q3. Write a debounce function in JavaScript.
Q4. Where is throttling better than debouncing?
Q5. How would you implement debouncing in React?
Q6. Explain trailing and leading calls in debounce/throttle.
Q7. How do debouncing and throttling help with performance?
Q8. How would you use lodash for debouncing and throttling?
Q9. When would you use throttle over debounce?
Q10. Can debouncing and throttling be combined? Give an example scenario.
*/

/* 8. React Integration Tips -------------------------------------------------- */
/*
- Use useCallback or useRef for stable function references
    Example:
    const debouncedFn = useRef(debounce(actualFn, 300)).current;
    useEffect(() => {
        element.addEventListener('event', debouncedFn);
        return () => element.removeEventListener('event', debouncedFn);
    }, [])

- For forms, use debounce for API validation and throttle for expensive UI or logging changes
8*/


/* =============================================================================
   🧠 Debouncing & Throttling — FULL MASTER NOTES (Beginner → Advanced)
   =============================================================================

   WHY USE THIS FILE?
   ------------------
   This JS file explains everything about:
   - Debounce
   - Throttle
   - When to use which
   - Advanced patterns
   - Production optimizations
   - React integration
   - Interview-level concepts

   Use this as a reference/cheatsheet in future projects.
   ============================================================================= */


/* =============================================================================
   1) INTRO — WHY DO WE EVEN NEED DEBOUNCE & THROTTLE?
   =============================================================================
   Browsers fire certain events *extremely fast*:
     - onScroll
     - onResize
     - onMouseMove
     - onKeyPress (e.g., typing search input)

   If you run heavy logic for every event → app becomes slow, API overload happens,
   and UI begins lagging.

   SOLUTION:
   - Debounce → wait until user STOPS doing something.
   - Throttle → allow function to run ONCE per interval.
   =========================================================================== */


/* =============================================================================
   2) DEBOUNCE — SIMPLE VERSION
   =============================================================================
   RULE:
   -----
   "Run function only AFTER user stops performing the action."

   USE CASES:
   ----------
   ✓ Search box autocomplete  
   ✓ Expensive validation  
   ✓ Resize-based layout recalculation  
   ✓ Button spam-prevention  

   CODE:
*/
function debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}


/* =============================================================================
   3) DEBOUNCE — ADVANCED VERSION (Leading + Trailing + Cancel + Flush)
   =============================================================================
   WHY?
   ----
   Google Docs, Figma, YouTube search, LinkedIn search…
   — sab me advanced debouncing use hota hai.

   leading = run IMMEDIATELY  
   trailing = run AFTER final event ends (default)  
*/
function debounceAdvanced(fn, delay = 300, { leading = false, trailing = true } = {}) {
    let timer = null;
    let lastArgs = null;
    let lastThis = null;
    let leadingCalled = false;

    const invoke = () => {
        timer = null;
        leadingCalled = false;

        if (trailing && lastArgs) {
            fn.apply(lastThis, lastArgs);
            lastArgs = lastThis = null;
        }
    };

    const debounced = function (...args) {
        lastArgs = args;
        lastThis = this;

        // Leading execution
        if (leading && !timer && !leadingCalled) {
            fn.apply(this, args);
            leadingCalled = true;
        }

        clearTimeout(timer);
        timer = setTimeout(invoke, delay);
    };

    // cancel pending calls
    debounced.cancel = () => {
        clearTimeout(timer);
        timer = null;
        lastArgs = lastThis = null;
        leadingCalled = false;
    };

    // execute trailing NOW
    debounced.flush = () => {
        if (timer) {
            clearTimeout(timer);
            invoke();
        }
    };

    return debounced;
}


/* =============================================================================
   4) DEBOUNCE — ASYNC VERSION (returns a Promise)
   =============================================================================
   WHY?
   ----
   Kabhi kabhi API response chahiye hota hai await karke.
   Normal debounce response return nahi karta.

   Example:
   const value = await debouncedSearch("apple");
*/
function debounceAsync(fn, delay = 300) {
    let timer = null;
    let rejectPending = null;

    return function (...args) {
        if (rejectPending) {
            rejectPending({ cancelled: true });
            rejectPending = null;
        }

        clearTimeout(timer);

        return new Promise((resolve, reject) => {
            rejectPending = reject;
            timer = setTimeout(async () => {
                rejectPending = null;
                try {
                    const res = await fn.apply(this, args);
                    resolve(res);
                } catch (err) {
                    reject(err);
                }
            }, delay);
        });
    };
}


/* =============================================================================
   5) THROTTLE — SIMPLE VERSION
   =============================================================================
   RULE:
   -----
   "Run function AT MOST once every X milliseconds."

   USE CASES:
   ----------
   ✓ scroll-based infinite loading  
   ✓ mousemove drag events  
   ✓ analytics events  
   ✓ resize events  
*/
function throttle(fn, interval = 200) {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= interval) {
            last = now;
            fn.apply(this, args);
        }
    };
}


/* =============================================================================
   6) THROTTLE — ADVANCED VERSION (Leading + Trailing)
   =============================================================================
   WHY?
   ----
   Many scroll UIs need BOTH:
   leading → for fast visible response  
   trailing → to handle last scroll position  
*/
function throttleAdvanced(fn, interval = 200, { leading = true, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    let lastArgs, lastThis;

    return function (...args) {
        const now = Date.now();
        lastArgs = args;
        lastThis = this;

        if (!last && !leading) last = now;

        const remaining = interval - (now - last);

        if (remaining <= 0) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            last = now;
            fn.apply(lastThis, lastArgs);
        } else if (!timer && trailing) {
            timer = setTimeout(() => {
                last = leading ? Date.now() : 0;
                timer = null;
                fn.apply(lastThis, lastArgs);
            }, remaining);
        }
    };
}


/* =============================================================================
   7) React Integration — BEST PRACTICES
   =============================================================================
   Common mistakes:
   - Don't place debounce inside render (new instance on every render)
   - Use useRef to keep stable debounced function
   - Always cancel on unmount (avoid memory leaks)
*/

/* Example: Debounced search in React */
//
// const search = (query) => API.search(query);
// const debounced = useRef(debounce(search, 400)).current;
//
// useEffect(() => {
//     debounced(query);
// }, [query]);



/* =============================================================================
   8) Ultra-short use cases
   =============================================================================
   Debounce:
   ---------
   - Search bar
   - Validating email/password on typing
   - Resize event (layout recalc)
   - Prevent double click on login/submit

   Throttle:
   ---------
   - Scroll events
   - Drag and drop
   - Infinite scroll
   - Sending analytics session data
*/


/* =============================================================================
   9) Interview-Ready Table (Most Asked)
   =============================================================================
   | Feature      | Debounce                         | Throttle                     |
   |--------------|----------------------------------|------------------------------|
   | Execution    | After last event                 | At most once every X ms      |
   | Use-case     | search, resize finish            | scroll, mousemove            |
   | Improves     | API load                         | UI performance               |
   | Pattern      | wait-then-run                    | limit-rate                   |
*/


/* =============================================================================
   10) Quick Cheatsheet (Copy anywhere)
   =============================================================================
   const d = debounce(fn, 300);
   const t = throttle(fn, 200);

   ---> Debounce when:
        User is typing, resizing, clicking button multiple times.

   ---> Throttle when:
        Scrolling, dragging, constant movement events.
*/



/* =============================================================================
   END OF FILE
   =============================================================================
*/
