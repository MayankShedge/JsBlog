// ========================================
// ⚡ EVENTS - COMPLETE MASTERCLASS
// ========================================

/*
Events = Actions or occurrences that happen in the browser
JavaScript can listen to these events and respond

⭐ INTERVIEW IMPORTANCE: CRITICAL (90% of front-end interviews)
Most asked: Event bubbling/capturing, event delegation, preventDefault,
addEventListener vs onclick, event object properties

Event Types:
1. Mouse Events: click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave
2. Keyboard Events: keydown, keyup, keypress
3. Form Events: submit, change, input, focus, blur
4. Window Events: load, resize, scroll
5. Touch Events: touchstart, touchmove, touchend
6. Custom Events: Custom user-defined events
*/

// ========================================
// 🟢 EVENT LISTENERS - FUNDAMENTALS
// ========================================

console.log("=== EVENT LISTENERS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Questions: addEventListener vs onclick, multiple listeners, removeEventListener

3 Ways to add events (from worst to best):
1. Inline HTML: onclick="handler()" ❌ (mixing JS with HTML, not scalable)
2. Property: element.onclick = handler ❌ (only one handler, overwrites)
3. addEventListener: element.addEventListener('click', handler) ✅ (multiple, flexible)
*/

// ❌ Method 1: Inline HTML (AVOID!)
/*
<button onclick="alert('clicked')">Click</button>

Problems:
- Mixes JS with HTML
- Hard to maintain
- No separation of concerns
- Cannot easily remove
- Global scope pollution
*/

// ❌ Method 2: Property assignment (LIMITED!)
const button1 = document.getElementById('btn1');
button1.onclick = function() {
    console.log('Clicked!');
};

// Problem: Overwrites previous handler
button1.onclick = function() {
    console.log('This replaces previous handler!');
};

/*
onclick property issues:
- Only ONE handler allowed
- New handler overwrites old
- Cannot remove specific handler
- Less features than addEventListener
*/

// ✅ Method 3: addEventListener (RECOMMENDED!)
const button2 = document.getElementById('btn2');

button2.addEventListener('click', function() {
    console.log('First handler');
});

button2.addEventListener('click', function() {
    console.log('Second handler - both execute!');
});

/*
✅ addEventListener advantages:
- Multiple handlers on same event
- Can remove specific handlers
- Event propagation control (bubble/capture)
- Works with custom events
- More flexible and powerful

Syntax:
element.addEventListener(event, handler, options)
- event: string ('click', 'keydown', etc.)
- handler: function to call
- options: boolean (capture) or object { capture, once, passive }
*/


// ========================================
// 🔵 EVENT OBJECT - CRITICAL INFO
// ========================================

console.log("\n=== EVENT OBJECT ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Questions: Event object properties, target vs currentTarget

Every event handler receives an event object parameter
Contains information about the event
*/

document.getElementById('myBtn').addEventListener('click', function(event) {
    // event (or e) parameter is automatically passed
    
    console.log("=== Event Object Properties ===");
    
    // 1. type - Event type
    console.log("Type:", event.type); // 'click'
    
    // 2. target - Element that triggered event
    console.log("Target:", event.target); // Actual clicked element
    
    // 3. currentTarget - Element listener is attached to
    console.log("CurrentTarget:", event.currentTarget); // Element with listener
    
    // 4. timestamp - When event occurred
    console.log("Timestamp:", event.timeStamp);
    
    // 5. defaultPrevented - Was preventDefault called?
    console.log("Default prevented:", event.defaultPrevented);
    
    // 6. bubbles - Does event bubble?
    console.log("Bubbles:", event.bubbles);
    
    // 7. cancelable - Can preventDefault be called?
    console.log("Cancelable:", event.cancelable);
});

/*
⭐ CRITICAL: target vs currentTarget

target = Element that TRIGGERED the event (child)
currentTarget = Element that LISTENER is attached to (parent)

Example:
<div id="parent">          <- currentTarget (listener here)
    <button id="child">    <- target (clicked here)
        Click
    </button>
</div>

parent.addEventListener('click', (e) => {
    e.target // button (what you clicked)
    e.currentTarget // div (where listener is)
});
*/

// Mouse Event Properties
document.addEventListener('click', function(e) {
    console.log("=== Mouse Event Properties ===");
    
    // Position relative to viewport
    console.log("clientX:", e.clientX);
    console.log("clientY:", e.clientY);
    
    // Position relative to screen
    console.log("screenX:", e.screenX);
    console.log("screenY:", e.screenY);
    
    // Position relative to element
    console.log("offsetX:", e.offsetX);
    console.log("offsetY:", e.offsetY);
    
    // Position of page (includes scroll)
    console.log("pageX:", e.pageX);
    console.log("pageY:", e.pageY);
    
    // Which mouse button
    console.log("button:", e.button); // 0=left, 1=middle, 2=right
    
    // Modifier keys
    console.log("ctrlKey:", e.ctrlKey);
    console.log("shiftKey:", e.shiftKey);
    console.log("altKey:", e.altKey);
    console.log("metaKey:", e.metaKey); // Command on Mac, Windows key on PC
});

/*
⭐ INTERVIEW GOLD: Mouse coordinates

| Property | Relative to        | Includes scroll? | Use case                 |
|----------|--------------------| -----------------|--------------------------|
| clientX  | Viewport           | ❌ No            | Position in visible area |
| pageX    | Document           | ✅ Yes           | Position in full page    |
| screenX  | Screen             | N/A              | Multi-monitor setups     |
| offsetX  | Target element     | N/A              | Position within element  |
*/

// Keyboard Event Properties
document.addEventListener('keydown', function(e) {
    console.log("=== Keyboard Event Properties ===");
    
    // Key pressed (modern)
    console.log("key:", e.key); // 'a', 'Enter', 'ArrowUp'
    
    // Key code (deprecated but still used)
    console.log("keyCode:", e.keyCode); // 65, 13, 38
    
    // Code (physical key)
    console.log("code:", e.code); // 'KeyA', 'Enter', 'ArrowUp'
    
    // Modifier keys
    console.log("ctrlKey:", e.ctrlKey);
    console.log("shiftKey:", e.shiftKey);
    console.log("altKey:", e.altKey);
});

/*
⚠️ key vs keyCode vs code:

key = Character value ('a', 'A', '1', 'Enter')
keyCode = Numeric code (65, 13) [DEPRECATED]
code = Physical key location ('KeyA', 'Digit1')

Recommendation: Use 'key' (modern, readable)
*/


// ========================================
// 🟠 EVENT PROPAGATION - BUBBLING & CAPTURING
// ========================================

console.log("\n=== EVENT PROPAGATION ===\n");

/*
⭐ INTERVIEW IMPORTANCE: EXTREMELY HIGH
This is asked in almost EVERY front-end interview!

Event Propagation has 3 phases:
1. Capturing (top → bottom) - Document to target
2. Target phase - Target element
3. Bubbling (bottom → top) - Target to Document

Default: Events BUBBLE (bottom → top)
*/

// HTML Structure for examples:
/*
<div id="grandparent">
    <div id="parent">
        <button id="child">Click Me</button>
    </div>
</div>
*/

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// BUBBLING (default - false)
console.log("=== BUBBLING (default) ===");

grandparent.addEventListener('click', function() {
    console.log('Grandparent clicked (BUBBLE)');
}, false); // false = bubble (default)

parent.addEventListener('click', function() {
    console.log('Parent clicked (BUBBLE)');
}, false);

child.addEventListener('click', function() {
    console.log('Child clicked (BUBBLE)');
}, false);

/*
When you click child button:
1. Child clicked (BUBBLE)
2. Parent clicked (BUBBLE)
3. Grandparent clicked (BUBBLE)

Execution order: child → parent → grandparent (bottom to top)
*/

// CAPTURING (true)
console.log("\n=== CAPTURING ===");

grandparent.addEventListener('click', function() {
    console.log('Grandparent clicked (CAPTURE)');
}, true); // true = capture

parent.addEventListener('click', function() {
    console.log('Parent clicked (CAPTURE)');
}, true);

child.addEventListener('click', function() {
    console.log('Child clicked (CAPTURE)');
}, true);

/*
When you click child button (with capture):
1. Grandparent clicked (CAPTURE)
2. Parent clicked (CAPTURE)
3. Child clicked (CAPTURE)

Execution order: grandparent → parent → child (top to bottom)
*/

/*
⭐ INTERVIEW GOLD: Complete flow with both

If you have BOTH capturing and bubbling:

grandparent.addEventListener('click', () => console.log('GP CAPTURE'), true);
parent.addEventListener('click', () => console.log('P CAPTURE'), true);
child.addEventListener('click', () => console.log('C TARGET'), false);
parent.addEventListener('click', () => console.log('P BUBBLE'), false);
grandparent.addEventListener('click', () => console.log('GP BUBBLE'), false);

Click child output:
1. GP CAPTURE
2. P CAPTURE
3. C TARGET
4. P BUBBLE
5. GP BUBBLE

Flow: Top→Down (capture) → Target → Bottom→Up (bubble)
*/

// ========================================
// 🔴 STOP PROPAGATION
// ========================================

console.log("\n=== STOP PROPAGATION ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Questions: stopPropagation vs stopImmediatePropagation

Methods to stop propagation:
1. stopPropagation() - Stops bubbling/capturing to parent
2. stopImmediatePropagation() - Stops bubbling AND other handlers on same element
*/

// stopPropagation() example
grandparent.addEventListener('click', function() {
    console.log('Grandparent - will NOT execute if child stops');
}, false);

parent.addEventListener('click', function(e) {
    console.log('Parent clicked');
    e.stopPropagation(); // ⛔ Stops here, grandparent won't execute
}, false);

child.addEventListener('click', function() {
    console.log('Child clicked');
}, false);

/*
With stopPropagation():
1. Child clicked
2. Parent clicked
(Grandparent does NOT execute - stopped!)
*/

// stopImmediatePropagation() example
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    console.log('Handler 1');
    e.stopImmediatePropagation(); // ⛔ Stops ALL other handlers!
});

btn.addEventListener('click', function() {
    console.log('Handler 2 - will NOT execute');
});

btn.addEventListener('click', function() {
    console.log('Handler 3 - will NOT execute');
});

/*
⚠️ stopPropagation vs stopImmediatePropagation:

stopPropagation():
- Stops propagation to parent/child
- Other handlers on SAME element still execute
- Use when you want to stop bubbling/capturing

stopImmediatePropagation():
- Stops propagation to parent/child
- Stops OTHER handlers on SAME element
- Use when you want to stop everything

Example:
element has 3 handlers → click

stopPropagation(): All 3 handlers run, parent handlers don't
stopImmediatePropagation(): Only first handler runs, everything stops
*/


// ========================================
// 🟣 PREVENT DEFAULT
// ========================================

console.log("\n=== PREVENT DEFAULT ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Questions: What does preventDefault do? When to use?

preventDefault() - Stops default browser behavior
Examples: form submit, link navigation, checkbox toggle
*/

// Example 1: Prevent link navigation
const link = document.getElementById('google');

link.addEventListener('click', function(e) {
    e.preventDefault(); // ⛔ Link won't navigate!
    console.log('Link clicked but navigation prevented');
    
    // Custom behavior instead
    console.log('Doing something custom...');
});

/*
Common preventDefault use cases:
✅ Form validation before submit
✅ Custom link behavior (SPA routing)
✅ Preventing context menu
✅ Drag and drop
*/

// Example 2: Form validation
const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // ⛔ Prevent form submission
    
    // Custom validation
    const email = form.querySelector('#email').value;
    
    if (!email.includes('@')) {
        console.log('Invalid email');
        return;
    }
    
    console.log('Valid! Submitting via AJAX...');
    // Submit via fetch/AJAX
});

// Example 3: Prevent context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // ⛔ No right-click menu
    console.log('Custom context menu here');
});

/*
⚠️ preventDefault() characteristics:
- Only works on cancelable events
- Check with event.cancelable property
- Does NOT stop propagation
- Can combine with stopPropagation
*/

// Combine both
link.addEventListener('click', function(e) {
    e.preventDefault(); // Stop default behavior
    e.stopPropagation(); // Stop bubbling
    console.log('Both stopped!');
});


// ========================================
// 🟢 EVENT DELEGATION - CRITICAL PATTERN
// ========================================

console.log("\n=== EVENT DELEGATION ===\n");

/*
⭐ INTERVIEW IMPORTANCE: EXTREMELY HIGH
This pattern is ESSENTIAL for real-world apps!

Event Delegation = Put listener on parent, handle children
Why? Performance + handles dynamic elements

Benefits:
✅ Better performance (fewer listeners)
✅ Works with dynamically added elements
✅ Less memory usage
✅ Cleaner code
*/

// ❌ BAD: Listener on every element
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', function() {
        console.log('Item clicked');
    });
});

/*
Problems:
- 100 items = 100 event listeners (memory!)
- Dynamically added items won't have listeners
- Hard to remove listeners
*/

// ✅ GOOD: Delegation (listener on parent)
const list = document.getElementById('images');

list.addEventListener('click', function(e) {
    // Check if clicked element is what we want
    if (e.target.tagName === 'IMG') {
        console.log('Image clicked:', e.target.id);
        
        // Remove image
        const li = e.target.parentElement;
        li.remove();
    }
});

/*
✅ Benefits:
- 1 listener for all items (performance!)
- Works for future items added dynamically
- Easy to manage
- Common in frameworks (React uses synthetic events with delegation)
*/

// Real-world delegation example
const todoList = document.getElementById('todoList');

todoList.addEventListener('click', function(e) {
    const target = e.target;
    
    // Delete button clicked
    if (target.classList.contains('delete-btn')) {
        target.closest('.todo-item').remove();
    }
    
    // Checkbox clicked
    if (target.classList.contains('todo-checkbox')) {
        target.closest('.todo-item').classList.toggle('completed');
    }
    
    // Edit button clicked
    if (target.classList.contains('edit-btn')) {
        const todoItem = target.closest('.todo-item');
        const text = todoItem.querySelector('.todo-text');
        text.contentEditable = true;
        text.focus();
    }
});

/*
⭐ INTERVIEW GOLD: Event Delegation Pattern

Question: "How would you handle clicks on 1000 list items?"

Answer: Event delegation!
1. Add ONE listener to parent (ul)
2. Use event.target to identify clicked item
3. Validate target is correct element type
4. Handle the action

Benefits: Performance, dynamic elements, maintainability
*/


// ========================================
// 🔵 REMOVE EVENT LISTENERS
// ========================================

console.log("\n=== REMOVE EVENT LISTENERS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Questions: How to remove listeners? Named vs anonymous functions

To remove listener:
- Must use SAME function reference
- Anonymous functions cannot be removed!
*/

// ❌ CANNOT remove (anonymous function)
button.addEventListener('click', function() {
    console.log('Cannot remove this!');
});
// button.removeEventListener('click', ???); // No reference!

// ✅ CAN remove (named function)
function handleClick() {
    console.log('Can remove this!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick); // ✅ Works!

/*
⚠️ removeEventListener requirements:
- SAME function reference
- SAME event type
- SAME capture/bubble setting

This won't work:
button.addEventListener('click', fn, false);
button.removeEventListener('click', fn, true); // Different capture!
*/

// One-time listener (modern approach)
button.addEventListener('click', function() {
    console.log('Executes only once!');
}, { once: true }); // ✅ Automatically removes after first execution

/*
addEventListener options object:
{
    capture: true/false,     // Capture phase?
    once: true/false,        // Remove after first execution?
    passive: true/false,     // Won't call preventDefault?
    signal: AbortSignal      // AbortController for removal
}
*/

// Advanced: AbortController for multiple removals
const controller = new AbortController();

button.addEventListener('click', handler1, { signal: controller.signal });
button.addEventListener('mouseover', handler2, { signal: controller.signal });
button.addEventListener('mouseout', handler3, { signal: controller.signal });

// Remove ALL listeners at once
controller.abort(); // ✅ All listeners removed!


// ========================================
// 🟠 COMMON EVENTS REFERENCE
// ========================================

console.log("\n=== COMMON EVENTS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Know these common events for interviews
*/

// 1️⃣ MOUSE EVENTS
const element = document.getElementById('box');

element.addEventListener('click', () => console.log('click')); // Single click
element.addEventListener('dblclick', () => console.log('dblclick')); // Double click
element.addEventListener('mousedown', () => console.log('mousedown')); // Button press
element.addEventListener('mouseup', () => console.log('mouseup')); // Button release
element.addEventListener('mousemove', () => console.log('mousemove')); // Mouse moves
element.addEventListener('mouseenter', () => console.log('mouseenter')); // Enter (no bubble)
element.addEventListener('mouseleave', () => console.log('mouseleave')); // Leave (no bubble)
element.addEventListener('mouseover', () => console.log('mouseover')); // Enter (bubbles)
element.addEventListener('mouseout', () => console.log('mouseout')); // Leave (bubbles)

/*
⚠️ mouseenter vs mouseover:
mouseenter - Fires on element only (no bubble)
mouseover - Fires on element + children (bubbles)

Use mouseenter for simpler logic!
*/

// 2️⃣ KEYBOARD EVENTS
document.addEventListener('keydown', (e) => {
    console.log('Key down:', e.key);
}); // Key pressed

document.addEventListener('keyup', (e) => {
    console.log('Key up:', e.key);
}); // Key released

document.addEventListener('keypress', (e) => {
    console.log('Key press:', e.key);
}); // ⚠️ DEPRECATED

/*
⚠️ keydown vs keypress:
keydown - Fires for ALL keys (including Ctrl, Shift, etc.)
keypress - Fires only for character keys ⚠️ DEPRECATED
keyup - Fires when key released

Use keydown (modern, works for all keys)
*/

// 3️⃣ FORM EVENTS
const input = document.querySelector('input');
const form = document.querySelector('form');

input.addEventListener('focus', () => console.log('focus')); // Input focused
input.addEventListener('blur', () => console.log('blur')); // Input unfocused
input.addEventListener('input', () => console.log('input')); // Value changes (every keystroke)
input.addEventListener('change', () => console.log('change')); // Value committed (blur after change)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
}); // Form submitted

/*
⚠️ input vs change:
input - Fires on EVERY change (every keystroke)
change - Fires when value committed (blur after change)

Use input for real-time validation
Use change for final validation
*/

// 4️⃣ WINDOW EVENTS
window.addEventListener('load', () => console.log('load')); // Page fully loaded (images, CSS)
window.addEventListener('DOMContentLoaded', () => console.log('DOMContentLoaded')); // DOM ready (faster)
window.addEventListener('resize', () => console.log('resize')); // Window resized
window.addEventListener('scroll', () => console.log('scroll')); // Page scrolled
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = ''; // Show "leave page?" dialog
});

/*
⚠️ load vs DOMContentLoaded:
DOMContentLoaded - DOM ready (scripts run first)
load - ALL resources loaded (images, CSS, fonts)

Use DOMContentLoaded for faster interaction
*/

// 5️⃣ TOUCH EVENTS (Mobile)
element.addEventListener('touchstart', () => console.log('touchstart'));
element.addEventListener('touchmove', () => console.log('touchmove'));
element.addEventListener('touchend', () => console.log('touchend'));
element.addEventListener('touchcancel', () => console.log('touchcancel'));

// 6️⃣ DRAG EVENTS
element.addEventListener('dragstart', () => console.log('dragstart'));
element.addEventListener('drag', () => console.log('drag'));
element.addEventListener('dragend', () => console.log('dragend'));
element.addEventListener('dragenter', () => console.log('dragenter'));
element.addEventListener('dragover', (e) => {
    e.preventDefault(); // Required for drop!
    console.log('dragover');
});
element.addEventListener('dragleave', () => console.log('dragleave'));
element.addEventListener('drop', (e) => {
    e.preventDefault();
    console.log('drop');
});


// ========================================
// 🔴 CUSTOM EVENTS
// ========================================

console.log("\n=== CUSTOM EVENTS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Questions: How to create custom events? When to use?

Custom events = User-defined events
Useful for component communication
*/

// Create custom event
const customEvent = new CustomEvent('userLoggedIn', {
    detail: {
        username: 'Mayank',
        timestamp: Date.now()
    },
    bubbles: true,
    cancelable: true
});

// Listen for custom event
document.addEventListener('userLoggedIn', function(e) {
    console.log('User logged in:', e.detail.username);
    console.log('Time:', e.detail.timestamp);
});

// Dispatch (trigger) custom event
document.dispatchEvent(customEvent);

/*
CustomEvent options:
- detail: Any data to pass
- bubbles: Should event bubble?
- cancelable: Can preventDefault be called?
*/

// Real-world example: Component communication
function showNotification(message, type) {
    const event = new CustomEvent('notification', {
        detail: { message, type },
        bubbles: true
    });
    
    document.dispatchEvent(event);
}

document.addEventListener('notification', function(e) {
    const { message, type } = e.detail;
    console.log(`[${type}] ${message}`);
    // Show UI notification
});

// Usage
showNotification('Login successful!', 'success');
showNotification('Error occurred', 'error');


// ========================================
// 🟣 TIMERS - setTimeout & setInterval
// ========================================

console.log("\n=== TIMERS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Questions: setTimeout vs setInterval, how to clear, execution context
*/

// 1️⃣ setTimeout - Execute ONCE after delay
console.log("1. setTimeout:");

const changeText = function() {
    document.querySelector('h1').innerHTML = "Text changed!";
};

const timeoutId = setTimeout(changeText, 2000); // 2 seconds

// Clear timeout (cancel)
document.getElementById('stop').addEventListener('click', function() {
    clearTimeout(timeoutId); // ⛔ Cancels timeout
    console.log("Timeout cancelled");
});

/*
setTimeout():
- Executes ONCE
- Returns timeout ID
- Can be cancelled with clearTimeout(id)
- Delay in milliseconds
*/

// setTimeout with parameters
setTimeout((name, age) => {
    console.log(`Hello ${name}, age ${age}`);
}, 1000, 'Mayank', 22); // Pass params after delay

// 2️⃣ setInterval - Execute REPEATEDLY
console.log("\n2. setInterval:");

const sayDate = function(prefix) {
    console.log(prefix, Date.now());
};

const intervalId = setInterval(sayDate, 1000, 'Current time:'); // Every 1 second

// Clear interval (stop)
document.getElementById('stopInterval').addEventListener('click', function() {
    clearInterval(intervalId); // ⛔ Stops interval
    console.log("Interval stopped");
});

/*
setInterval():
- Executes REPEATEDLY
- Returns interval ID
- Must clear with clearInterval(id)
- Continues until cleared or page unloads
*/

// Real-world: Clock
let clockInterval;

function startClock() {
    clockInterval = setInterval(() => {
        const now = new Date();
        document.getElementById('clock').textContent = now.toLocaleTimeString();
    }, 1000);
}

function stopClock() {
    clearInterval(clockInterval);
}

/*
⚠️ setTimeout vs setInterval:

| Feature      | setTimeout           | setInterval         |
|--------------|----------------------|---------------------|
| Executions   | Once                 | Repeated            |
| Clear method | clearTimeout(id)     | clearInterval(id)   |
| Use case     | Delayed action       | Repeated action     |
| Drift        | No                   | Yes (can accumulate)|

⚠️ setInterval drift:
If function takes longer than interval, executions queue up!
Solution: Use recursive setTimeout for precise timing
*/

// Better approach: Recursive setTimeout
function preciseTimer() {
    console.log('Tick');
    
    setTimeout(preciseTimer, 1000); // Reschedule after execution
}

// setTimeout(() => preciseTimer(), 1000); // Start


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: addEventListener vs onclick difference?
A: addEventListener - multiple handlers, remove support, options
   onclick - single handler, overwrites, simpler

Q2: Event bubbling vs capturing?
A: Bubbling - child to parent (default)
   Capturing - parent to child (use true)
   Order: capture phase → target → bubble phase

Q3: stopPropagation vs stopImmediatePropagation?
A: stopPropagation - stops bubbling to parent
   stopImmediatePropagation - stops bubbling + other handlers on same element

Q4: preventDefault kya karta hai?
A: Stops default browser behavior (link navigation, form submit)
   Does NOT stop propagation
   Only works on cancelable events

Q5: Event delegation kya hai?
A: Listener on parent, handle children via event.target
   Benefits: performance, dynamic elements, less memory

Q6: target vs currentTarget difference?
A: target - element that triggered event (child)
   currentTarget - element with listener (parent)

Q7: How to remove event listener?
A: removeEventListener with SAME function reference
   Must use named function (not anonymous)

Q8: setTimeout vs setInterval?
A: setTimeout - executes once after delay
   setInterval - executes repeatedly
   Clear with clearTimeout/clearInterval

Q9: DOMContentLoaded vs load?
A: DOMContentLoaded - DOM ready (faster)
   load - all resources loaded (images, CSS)

Q10: keydown vs keypress?
A: keydown - all keys (modern)
    keypress - character keys only (DEPRECATED)

Q11: mouseenter vs mouseover?
A: mouseenter - fires on element only (no bubble)
   mouseover - fires on element + children (bubbles)

Q12: input vs change event?
A: input - fires on every keystroke
   change - fires when value committed (blur)

Q13: How to pass data with custom events?
A: Use CustomEvent with detail property
   new CustomEvent('name', { detail: data })

Q14: Can you have multiple listeners on same element?
A: Yes with addEventListener
   No with onclick (overwrites)

Q15: How does event delegation improve performance?
A: 1 listener instead of N listeners
   Less memory, better for dynamic elements
   Common pattern in frameworks
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. IMAGE GALLERY WITH DELEGATION
*/
function setupImageGallery() {
    const gallery = document.getElementById('images');
    
    gallery.addEventListener('click', function(e) {
        // Check if image clicked
        if (e.target.tagName === 'IMG') {
            // Validate before removing
            if (!e.target.classList.contains('no-delete')) {
                const li = e.target.closest('li');
                
                // Confirm before delete
                if (confirm('Delete this image?')) {
                    li.remove();
                }
            }
        }
    });
}


/*
2. FORM VALIDATION WITH REAL-TIME FEEDBACK
*/
function setupFormValidation() {
    const form = document.getElementById('signupForm');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    
    // Real-time email validation
    emailInput.addEventListener('input', function(e) {
        const value = e.target.value;
        const errorSpan = emailInput.nextElementSibling;
        
        if (!value.includes('@')) {
            emailInput.style.borderColor = 'red';
            errorSpan.textContent = 'Invalid email';
        } else {
            emailInput.style.borderColor = 'green';
            errorSpan.textContent = '';
        }
    });
    
    // Password strength check
    passwordInput.addEventListener('input', function(e) {
        const value = e.target.value;
        const strengthSpan = passwordInput.nextElementSibling;
        
        if (value.length < 8) {
            strengthSpan.textContent = 'Weak';
            strengthSpan.style.color = 'red';
        } else if (value.length < 12) {
            strengthSpan.textContent = 'Medium';
            strengthSpan.style.color = 'orange';
        } else {
            strengthSpan.textContent = 'Strong';
            strengthSpan.style.color = 'green';
        }
    });
    
    // Form submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Submitting:', data);
        // Send via fetch
    });
}


/*
3. KEYBOARD SHORTCUTS
*/
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl+S - Save
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            console.log('Saving...');
            save();
        }
        
        // Ctrl+K - Search
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            document.getElementById('search').focus();
        }
        
        // Escape - Close modals
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}


/*
4. DEBOUNCING & THROTTLING
*/
// Debounce - Wait until user stops typing
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage: Search as you type
const searchInput = document.getElementById('search');
const debouncedSearch = debounce(function(e) {
    console.log('Searching for:', e.target.value);
    // API call here
}, 500);

searchInput.addEventListener('input', debouncedSearch);

// Throttle - Execute at most once per interval
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage: Scroll event
const throttledScroll = throttle(function() {
    console.log('Scrolling...');
    // Update scroll indicator
}, 200);

window.addEventListener('scroll', throttledScroll);


/*
5. KEYBOARD EVENT DISPLAY (Your example)
*/
function setupKeyDisplay() {
    const insert = document.getElementById('insert');
    
    window.addEventListener('keydown', (e) => {
        insert.innerHTML = `
            <div class='color'>
                <table>
                    <tr>
                        <th>Key</th>
                        <th>Keycode</th>
                        <th>Code</th>
                    </tr>
                    <tr>
                        <td>${e.key === ' ' ? 'Space' : e.key}</td>
                        <td>${e.keyCode}</td>
                        <td>${e.code}</td>
                    </tr>
                </table>
            </div>
        `;
    });
}


console.log("\n✅ Events Mastery Complete!");
