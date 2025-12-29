// ========================================
// 🌳 DOM (Document Object Model) - COMPLETE MASTERCLASS
// ========================================

/*
DOM = Tree-like representation of HTML document in memory
JavaScript can manipulate this tree to change content, structure, and styling

⭐ INTERVIEW IMPORTANCE: CRITICAL (80% of front-end interviews)
Most asked: querySelector vs getElementById, NodeList vs HTMLCollection, 
DOM manipulation methods, performance optimization, event delegation

What is DOM?
- Programming interface for HTML/XML documents
- Represents page as nodes and objects
- Allows languages like JS to connect to the page
- Changes to DOM are reflected in browser rendering

DOM Tree Structure:
Document
  └── html (root element)
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── div
          │   ├── h1
          │   └── p
          └── ul
              └── li
*/

// ========================================
// 🟢 DOM SELECTION METHODS - FUNDAMENTAL
// ========================================

console.log("=== DOM SELECTION METHODS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Questions: Performance differences, return types, when to use which

Main Selection Methods:
1. getElementById() - Single element by ID
2. getElementsByClassName() - HTMLCollection by class
3. getElementsByTagName() - HTMLCollection by tag
4. querySelector() - First match (CSS selector)
5. querySelectorAll() - All matches (CSS selector)
*/

// 1️⃣ getElementById() - OLD but FAST
console.log("1. getElementById():");
const titleById = document.getElementById('title');
console.log("Element:", titleById);
console.log("ID:", titleById?.id);
console.log("ClassName:", titleById?.className); // ⚠️ Use className, not .class

/*
⚠️ getElementById() characteristics:
- Fastest selection method (uses hash map internally)
- Returns single HTMLElement or null
- Case-sensitive
- Only searches by ID attribute
- No CSS selector support

✅ When to use:
- When you have unique ID
- Performance critical operations
- Simple, straightforward selection

❌ Limitations:
- Only IDs (no classes, tags, attributes)
- Single element only
*/

// 2️⃣ getElementsByClassName() - Returns LIVE HTMLCollection
console.log("\n2. getElementsByClassName():");
const headings = document.getElementsByClassName('heading');
console.log("HTMLCollection:", headings);
console.log("Type:", headings.constructor.name); // HTMLCollection
console.log("Length:", headings.length);

/*
⚠️ HTMLCollection characteristics:
- LIVE collection (updates automatically when DOM changes)
- Array-like but NOT an array
- No forEach, map, filter by default
- Must convert to array first: Array.from() or [...collection]

✅ Live collection example:
const items = document.getElementsByClassName('item');
console.log(items.length); // 3
document.body.innerHTML += '<div class="item"></div>';
console.log(items.length); // 4 (automatically updated!)
*/

// Convert HTMLCollection to Array
const headingsArray = Array.from(headings);
// OR: const headingsArray = [...headings];

headingsArray.forEach(heading => {
    console.log("Heading text:", heading.textContent);
});

// 3️⃣ getElementsByTagName() - Returns LIVE HTMLCollection
console.log("\n3. getElementsByTagName():");
const allDivs = document.getElementsByTagName('div');
console.log("All divs:", allDivs);

// Get all elements (*)
const allElements = document.getElementsByTagName('*');
console.log("Total elements:", allElements.length);

// 4️⃣ querySelector() - MODERN, returns FIRST match
console.log("\n4. querySelector() - First match:");
const firstH1 = document.querySelector('h1');
console.log("First h1:", firstH1);

const titleByQuery = document.querySelector('#title'); // By ID
const headingByQuery = document.querySelector('.heading'); // By class
const passwordInput = document.querySelector('input[type="password"]'); // By attribute
const firstChild = document.querySelector('p:first-child'); // CSS pseudo-selector

console.log("Query by ID:", titleByQuery);
console.log("Query by class:", headingByQuery);
console.log("Password input:", passwordInput);

/*
⚠️ querySelector() power:
- Uses ANY CSS selector
- Returns FIRST matching element
- Returns HTMLElement or null
- More flexible than getElement* methods
- Slightly slower than getElementById

✅ CSS Selectors supported:
- #id, .class, tag
- [attribute="value"]
- :first-child, :last-child, :nth-child(n)
- parent > child, ancestor descendant
- element + sibling, element ~ siblings
*/

// Advanced querySelector examples
console.log("\n5. Advanced querySelector:");
const specificLi = document.querySelector('ul li:nth-child(2)'); // 2nd li in ul
const notFirst = document.querySelector('li:not(:first-child)'); // Not first li
const hasClass = document.querySelector('div[class*="bg"]'); // Class contains "bg"

// Chained querySelector (scope to element)
const myUl = document.querySelector('ul');
if (myUl) {
    const firstLi = myUl.querySelector('li');
    console.log("First li in ul:", firstLi);
}

// 5️⃣ querySelectorAll() - Returns STATIC NodeList
console.log("\n6. querySelectorAll() - All matches:");
const allLis = document.querySelectorAll('li');
console.log("NodeList:", allLis);
console.log("Type:", allLis.constructor.name); // NodeList
console.log("Length:", allLis.length);

/*
⚠️ NodeList vs HTMLCollection:

| Feature           | NodeList          | HTMLCollection     |
|-------------------|-------------------|--------------------|
| Returned by       | querySelectorAll  | getElements*       |
| Live/Static       | STATIC            | LIVE               |
| forEach available | ✅ Yes            | ❌ No              |
| Array methods     | ❌ No (but has forEach) | ❌ No        |
| Performance       | Slower query      | Faster query       |
| Updates           | Must re-query     | Auto-updates       |

⭐ INTERVIEW GOLD: This comparison is asked VERY frequently!
*/

// NodeList has forEach (but HTMLCollection doesn't)
allLis.forEach((li, index) => {
    console.log(`Li ${index}:`, li.textContent);
});

// Convert NodeList to Array for full array methods
const lisArray = [...allLis]; // OR: Array.from(allLis)
const texts = lisArray.map(li => li.textContent);
console.log("All li texts:", texts);

// querySelectorAll with multiple selectors
const multiSelect = document.querySelectorAll('h1, p, li'); // All h1, p, and li
console.log("Multiple selector count:", multiSelect.length);

/*
⭐ INTERVIEW QUESTION: querySelector vs getElementById
A: getElementById is faster (hash map lookup)
   querySelector is more flexible (any CSS selector)
   Use getElementById for performance-critical, simple ID lookups
   Use querySelector for complex selections
*/


// ========================================
// 🔵 GETTING & SETTING ATTRIBUTES
// ========================================

console.log("\n=== ATTRIBUTES ===\n");

/*
⭐ INTERVIEW IMPORTANCE: HIGH
Questions: getAttribute vs property access, setAttribute overwrite behavior
*/

const title = document.getElementById('title');

// Method 1: Direct property access (common attributes)
console.log("1. Direct property access:");
console.log("ID:", title.id);
console.log("ClassName:", title.className); // ⚠️ Use className, not class
console.log("InnerHTML:", title.innerHTML);

// Method 2: getAttribute() - Gets ANY attribute
console.log("\n2. getAttribute() - any attribute:");
console.log("ID via getAttribute:", title.getAttribute('id'));
console.log("Class via getAttribute:", title.getAttribute('class'));
console.log("Custom attribute:", title.getAttribute('data-custom'));

// Method 3: setAttribute() - Sets attribute (OVERWRITES!)
console.log("\n3. setAttribute():");
title.setAttribute('class', 'test heading'); // ⚠️ Overwrites existing classes!
title.setAttribute('data-info', 'some-value'); // Custom attribute
console.log("After setAttribute:", title.className);

/*
⚠️ setAttribute() characteristics:
- OVERWRITES existing value (doesn't append)
- Can set custom/data attributes
- String values only
- For classes, use classList instead!

✅ Better alternatives:
- For classes: element.classList.add/remove/toggle
- For styles: element.style.property = value
- For data attributes: element.dataset.propertyName
*/

// Better way to manage classes
console.log("\n4. classList API (BETTER for classes):");
title.classList.add('new-class'); // Add class
title.classList.remove('test'); // Remove class
title.classList.toggle('active'); // Toggle class
title.classList.contains('heading'); // Check if has class
console.log("Classes:", title.classList);

// Data attributes
console.log("\n5. Data attributes:");
title.setAttribute('data-user-id', '123');
console.log("Via getAttribute:", title.getAttribute('data-user-id'));
console.log("Via dataset:", title.dataset.userId); // Camel case!

/*
⚠️ Property vs Attribute:
Property = Live object property (JavaScript)
Attribute = HTML attribute (markup)

Example:
<input value="hello">

input.value = "world"; // Property (in memory)
input.getAttribute('value'); // "hello" (in HTML)

Most times they sync, but not always!
*/


// ========================================
// 🟠 STYLING ELEMENTS
// ========================================

console.log("\n=== STYLING ===\n");

/*
⭐ INTERVIEW IMPORTANCE: MODERATE
Questions: Inline styles vs classes, style property format
*/

// Inline styles via .style
console.log("1. Inline styles:");
title.style.backgroundColor = 'green'; // ⚠️ camelCase for multi-word properties
title.style.padding = '15px';
title.style.borderRadius = '30px';
title.style.color = '#fff';

/*
⚠️ style property characteristics:
- Only inline styles (not from CSS files)
- Use camelCase: backgroundColor (not background-color)
- Returns empty string if not set inline
- High specificity (overrides CSS classes)

✅ When to use:
- Dynamic styles based on JS logic
- One-off style changes
- Conditional styling

❌ When NOT to use:
- Static styles → use CSS classes
- Multiple properties → use classList + CSS
- Reusable styles → use classes
*/

// Get computed styles (includes CSS files)
console.log("\n2. Computed styles:");
const computedStyle = window.getComputedStyle(title);
console.log("Computed background:", computedStyle.backgroundColor);
console.log("Computed padding:", computedStyle.padding);

/*
⚠️ getComputedStyle():
- Returns ALL computed styles (CSS + inline)
- Read-only (cannot set)
- Returns actual rendered values
- Cross-browser compatible
*/

// Remove inline style
title.style.backgroundColor = ''; // Remove specific property
title.style.cssText = ''; // Remove all inline styles


// ========================================
// 🔴 CONTENT MANIPULATION
// ========================================

console.log("\n=== CONTENT MANIPULATION ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Questions: innerHTML vs textContent vs innerText differences
*/

const para = document.querySelector('p');

// 1️⃣ textContent - ALL text (including hidden)
console.log("1. textContent:");
console.log(para.textContent);
/*
- Returns ALL text content (including hidden elements)
- Includes text from <script>, <style> tags
- Ignores HTML tags
- Faster than innerText
- Returns exact text (whitespace preserved)
*/

// 2️⃣ innerText - VISIBLE text only
console.log("\n2. innerText:");
console.log(para.innerText);
/*
- Returns only VISIBLE text
- Respects CSS (display:none hides text)
- Triggers reflow (performance cost)
- More "human-readable"
- Slower than textContent
*/

// 3️⃣ innerHTML - HTML content (including tags)
console.log("\n3. innerHTML:");
console.log(para.innerHTML);
/*
- Returns HTML as string
- Includes ALL tags, attributes
- Can set HTML (parses and renders)
- ⚠️ Security risk: XSS vulnerability
*/

// Comparison example
const testDiv = document.createElement('div');
testDiv.innerHTML = `
    <p>Visible text <span style="display:none;">Hidden text</span></p>
`;
document.body.appendChild(testDiv);

console.log("\nComparison:");
console.log("textContent:", testDiv.textContent); // "Visible text Hidden text"
console.log("innerText:", testDiv.innerText); // "Visible text"
console.log("innerHTML:", testDiv.innerHTML); // Full HTML

/*
⭐ INTERVIEW GOLD: textContent vs innerText vs innerHTML

| Property    | Returns       | Performance | Security | Use Case                    |
|-------------|---------------|-------------|----------|-----------------------------|
| textContent | All text      | Fast        | Safe     | Get/set plain text          |
| innerText   | Visible text  | Slow        | Safe     | User-visible text only      |
| innerHTML   | HTML string   | Medium      | ⚠️ XSS   | Get/set HTML content        |

When setting content:
textContent = "Safe text"; // ✅ Safe, text only
innerHTML = userInput; // ❌ Dangerous if user input!
innerHTML = "<b>Safe</b>"; // ✅ OK if you control content
*/

// Setting content safely
para.textContent = "New safe text"; // ✅ Safe
para.innerHTML = "<b>Bold text</b>"; // ⚠️ Only if you trust the source

// XSS example (DON'T DO THIS!)
const userInput = '<img src=x onerror="alert(\'XSS\')">';
// para.innerHTML = userInput; // ❌ XSS vulnerability!
para.textContent = userInput; // ✅ Safe (renders as text)


// ========================================
// 🟣 DOM TRAVERSAL (Parent, Child, Sibling)
// ========================================

console.log("\n=== DOM TRAVERSAL ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Questions: children vs childNodes, element vs node methods

Why traverse instead of querySelector?
✅ Avoids re-querying entire DOM
✅ Faster for relative navigation
✅ Useful when you already have a reference
*/

const parent = document.querySelector('.parent');

// 1️⃣ Children (Element children only)
console.log("1. Children:");
console.log("parent.children:", parent.children); // HTMLCollection
console.log("First child:", parent.firstElementChild);
console.log("Last child:", parent.lastElementChild);
console.log("Child count:", parent.children.length);

// Iterate children
for (let i = 0; i < parent.children.length; i++) {
    console.log(`Child ${i}:`, parent.children[i].textContent);
}

// 2️⃣ Child Nodes (Includes text nodes, comments)
console.log("\n2. Child Nodes:");
console.log("parent.childNodes:", parent.childNodes); // NodeList
/*
childNodes includes:
- Element nodes (div, p, etc.)
- Text nodes (whitespace, line breaks)
- Comment nodes (<!-- comments -->)

⚠️ Usually you want .children (elements only)
*/

// 3️⃣ Parent Element
console.log("\n3. Parent:");
const firstDay = document.querySelector('.day');
console.log("Parent element:", firstDay.parentElement);
console.log("Parent node:", firstDay.parentNode); // Usually same as parentElement

/*
parentElement vs parentNode:
- parentElement: Always an Element or null
- parentNode: Can be any node type
- Usually they're the same
- Document node has no parentElement (but has parentNode)
*/

// 4️⃣ Siblings
console.log("\n4. Siblings:");
console.log("Next sibling:", firstDay.nextElementSibling);
console.log("Previous sibling:", firstDay.previousElementSibling);

/*
Element siblings (no text nodes):
- nextElementSibling
- previousElementSibling

Node siblings (includes text nodes):
- nextSibling
- previousSibling

⚠️ Usually use Element versions to avoid text nodes
*/

// Traverse all siblings
console.log("\n5. Traverse all siblings:");
let currentSibling = firstDay;
while (currentSibling) {
    console.log("Sibling:", currentSibling.textContent);
    currentSibling = currentSibling.nextElementSibling;
}

/*
⭐ INTERVIEW GOLD: Complete Traversal Table

| Property / Method         | Description                     | Returns        |
|---------------------------|---------------------------------|----------------|
| .children                 | Element children only           | HTMLCollection |
| .childNodes               | All nodes (text, comments)      | NodeList       |
| .firstElementChild        | First child element             | Element        |
| .lastElementChild         | Last child element              | Element        |
| .parentElement            | Parent element                  | Element        |
| .nextElementSibling       | Next sibling element            | Element        |
| .previousElementSibling   | Previous sibling element        | Element        |
*/


// ========================================
// 🟢 CREATING & ADDING ELEMENTS
// ========================================

console.log("\n=== CREATING ELEMENTS ===\n");

/*
⭐ INTERVIEW IMPORTANCE: VERY HIGH
Questions: innerHTML vs createElement, appendChild vs append, 
createTextNode vs textContent performance
*/

// Method 1: createElement() - RECOMMENDED
console.log("1. createElement():");
const newDiv = document.createElement('div');
newDiv.className = 'main';
newDiv.id = Math.round(Math.random() * 10 + 1);
newDiv.setAttribute('title', 'generated title');
newDiv.style.backgroundColor = 'green';
newDiv.style.padding = '12px';

// Add text - Method 1: textContent (fast)
newDiv.textContent = 'Hello from textContent';

// Add text - Method 2: createTextNode (optimal)
const textNode = document.createTextNode('Hello from createTextNode');
newDiv.appendChild(textNode);

// Add to DOM
document.body.appendChild(newDiv);

/*
⚠️ textContent vs createTextNode:

textContent:
✅ Simple, readable
✅ Fast for single text node
❌ Replaces ALL child nodes
❌ Re-parses HTML if used in loops

createTextNode:
✅ More control (can append, move, remove)
✅ Better performance in loops
✅ Doesn't replace existing children
❌ Slightly more verbose

Recommendation:
- Simple case: textContent
- Loops/dynamic: createTextNode
- Multiple text nodes: createTextNode
*/

// Method 2: innerHTML (AVOID in loops)
console.log("\n2. innerHTML (use carefully):");
const container = document.createElement('div');
container.innerHTML = '<p>Paragraph 1</p><p>Paragraph 2</p>';
document.body.appendChild(container);

/*
⚠️ innerHTML issues:
❌ Security risk (XSS if using user input)
❌ Destroys event listeners on children
❌ Slow (parses HTML string each time)
❌ Re-creates ALL child nodes

✅ When OK to use:
- Simple static HTML
- No event listeners
- Not in loops
- You control the content
*/

// Method 3: insertAdjacentHTML (better than innerHTML)
console.log("\n3. insertAdjacentHTML():");
const list = document.querySelector('ul');
list.insertAdjacentHTML('beforeend', '<li>New item</li>');
/*
Positions:
'beforebegin' - Before element
'afterbegin' - Inside element, before first child
'beforeend' - Inside element, after last child
'afterend' - After element
*/

// ========================================
// 🔵 ADDING ELEMENTS TO DOM
// ========================================

console.log("\n=== ADDING TO DOM ===\n");

/*
Methods:
1. appendChild() - Old, single node
2. append() - New, multiple nodes/strings
3. insertBefore() - Specific position
4. insertAdjacentElement() - Flexible positioning
*/

// 1️⃣ appendChild() - Classic way
const ul = document.querySelector('.language');
const newLi = document.createElement('li');
newLi.textContent = 'Python';
ul.appendChild(newLi);

/*
appendChild():
- Only one node at a time
- Returns the appended node
- Moves node if already in DOM
- Oldest method (best browser support)
*/

// 2️⃣ append() - Modern way
ul.append('TypeScript'); // ✅ Can append strings!
ul.append(newLi, 'JavaScript'); // ✅ Multiple items!

/*
append() vs appendChild():

| Feature        | append()           | appendChild()      |
|----------------|--------------------|--------------------|
| Parameters     | Multiple           | Single             |
| Strings        | ✅ Yes             | ❌ No              |
| Return value   | undefined          | Appended node      |
| Browser support| Modern (IE ❌)     | All browsers       |
*/

// 3️⃣ prepend() - Add to beginning
ul.prepend('First item');

// 4️⃣ insertBefore() - Specific position
const referenceNode = ul.children[2];
const insertedLi = document.createElement('li');
insertedLi.textContent = 'Inserted';
ul.insertBefore(insertedLi, referenceNode);

// 5️⃣ insertAdjacentElement()
const targetLi = ul.querySelector('li');
const adjacentLi = document.createElement('li');
adjacentLi.textContent = 'Adjacent';
targetLi.insertAdjacentElement('afterend', adjacentLi);


// ========================================
// 🟠 EDITING & REPLACING ELEMENTS
// ========================================

console.log("\n=== EDITING ELEMENTS ===\n");

// 1️⃣ replaceWith() - Replace element
const secondLang = document.querySelector('li:nth-child(2)');
const newLang = document.createElement('li');
newLang.textContent = 'Mojo';
secondLang.replaceWith(newLang);

/*
replaceWith():
- Replaces element completely
- Old element removed from DOM
- Can pass multiple nodes
- Modern method
*/

// 2️⃣ replaceChild() - Old way
const parent2 = ul;
const oldChild = ul.children[0];
const newChild = document.createElement('li');
newChild.textContent = 'Replaced';
parent2.replaceChild(newChild, oldChild);

// 3️⃣ Editing content
const editLi = ul.querySelector('li');
editLi.textContent = 'Go'; // Safe text
// editLi.innerHTML = '<b>Go</b>'; // HTML (use carefully)

// 4️⃣ outerHTML - Replace including element itself
editLi.outerHTML = '<li class="new">GoLang</li>';
/*
outerHTML:
- Replaces element AND its content
- Includes opening/closing tags
- Creates new element (old reference invalid)
*/


// ========================================
// 🔴 REMOVING ELEMENTS
// ========================================

console.log("\n=== REMOVING ELEMENTS ===\n");

// 1️⃣ remove() - Modern, simple
const lastLang = document.querySelector('li:last-child');
lastLang.remove();

/*
remove():
- Removes element from DOM
- Modern method (IE ❌)
- No parent reference needed
- Clean and simple
*/

// 2️⃣ removeChild() - Old way
const parentUl = document.querySelector('ul');
const childToRemove = parentUl.children[0];
parentUl.removeChild(childToRemove);

/*
removeChild():
- Requires parent reference
- Older method (better support)
- Returns removed node
- More verbose
*/

// 3️⃣ innerHTML = '' - Clear all children
// parentUl.innerHTML = ''; // ⚠️ Destroys all event listeners!

// 4️⃣ replaceChildren() - Modern clear
// parentUl.replaceChildren(); // Modern way to clear


// ========================================
// 🧠 COMPLETE INTERVIEW QUESTIONS
// ========================================

/*
Q1: querySelector vs getElementById difference?
A: getElementById is faster (hash map)
   querySelector more flexible (any CSS selector)
   getElementById returns HTMLElement or null
   querySelector returns first match or null

Q2: NodeList vs HTMLCollection difference?
A: NodeList = static (querySelectorAll), has forEach
   HTMLCollection = live (getElements*), no forEach
   Both array-like, not real arrays

Q3: innerHTML vs textContent vs innerText?
A: textContent - all text (fast, safe)
   innerText - visible text (slow, respects CSS)
   innerHTML - HTML content (XSS risk, use carefully)

Q4: appendChild vs append difference?
A: appendChild - single node, returns node, old
   append - multiple nodes/strings, no return, modern

Q5: children vs childNodes difference?
A: children - elements only (HTMLCollection)
   childNodes - all nodes including text (NodeList)

Q6: How to safely insert user content?
A: Use textContent (not innerHTML)
   Or sanitize with DOMPurify library
   Never trust user input in innerHTML

Q7: createElement vs innerHTML performance?
A: createElement better in loops (no re-parsing)
   innerHTML OK for one-time static content
   createElement maintains event listeners

Q8: Live vs static collection kya hai?
A: Live - updates automatically (HTMLCollection)
   Static - snapshot, must re-query (NodeList from querySelectorAll)

Q9: How to convert NodeList/HTMLCollection to array?
A: Array.from(collection) or [...collection]
   Then can use map, filter, reduce

Q10: Remove all children best way?
A: element.replaceChildren() (modern)
    Or: element.innerHTML = '' (destroys listeners)
    Or: while(el.firstChild) el.removeChild(el.firstChild)
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. DYNAMIC LIST RENDERING
   - Todo lists, shopping carts
   - User comments, notifications
*/

function renderTodoList(todos) {
    const ul = document.getElementById('todo-list');
    
    // Clear existing (safe way)
    ul.replaceChildren();
    
    // Method 1: createElement (RECOMMENDED for performance)
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.id = todo.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        
        const text = document.createTextNode(todo.text);
        
        li.append(checkbox, text);
        ul.appendChild(li);
    });
}

// Usage:
const todos = [
    { id: 1, text: 'Learn DOM', completed: false },
    { id: 2, text: 'Build project', completed: false }
];
// renderTodoList(todos);


/*
2. MODAL/POPUP CREATION
   - Dynamic dialogs
   - Confirmation boxes
*/

function createModal(title, message) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 400px;
    `;
    
    // Title
    const h2 = document.createElement('h2');
    h2.textContent = title;
    
    // Message
    const p = document.createElement('p');
    p.textContent = message;
    
    // Close button
    const button = document.createElement('button');
    button.textContent = 'Close';
    button.onclick = () => overlay.remove();
    
    modal.append(h2, p, button);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    return overlay;
}

// Usage:
// createModal('Success', 'Operation completed successfully!');


/*
3. TABLE GENERATION
   - Data tables from API
   - Dynamic reports
*/

function createTable(data) {
    const table = document.createElement('table');
    table.style.cssText = 'border-collapse: collapse; width: 100%;';
    
    // Header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        th.style.cssText = 'border: 1px solid #ddd; padding: 8px; background: #f2f2f2;';
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Body
    const tbody = document.createElement('tbody');
    
    data.forEach(row => {
        const tr = document.createElement('tr');
        
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            td.style.cssText = 'border: 1px solid #ddd; padding: 8px;';
            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    return table;
}

// Usage:
const tableData = [
    { Name: 'Mayank', Age: 22, City: 'Mumbai' },
    { Name: 'Raj', Age: 25, City: 'Delhi' }
];
// document.body.appendChild(createTable(tableData));


/*
4. FORM VALIDATION UI
   - Error messages
   - Success indicators
*/

function showFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    
    // Remove existing error
    const existing = input.nextElementSibling;
    if (existing && existing.classList.contains('error-message')) {
        existing.remove();
    }
    
    // Add error
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    error.style.cssText = 'color: red; font-size: 12px; display: block;';
    
    input.style.borderColor = 'red';
    input.insertAdjacentElement('afterend', error);
}

function clearFieldError(inputId) {
    const input = document.getElementById(inputId);
    const error = input.nextElementSibling;
    
    if (error && error.classList.contains('error-message')) {
        error.remove();
    }
    
    input.style.borderColor = '';
}


/*
5. CARD/ITEM GRID RENDERING
   - Product listings
   - Image galleries
*/

function renderProductGrid(products) {
    const grid = document.createElement('div');
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.cssText = 'border: 1px solid #ddd; padding: 15px; border-radius: 8px;';
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.style.cssText = 'width: 100%; height: 150px; object-fit: cover;';
        
        const name = document.createElement('h3');
        name.textContent = product.name;
        
        const price = document.createElement('p');
        price.textContent = `₹${product.price}`;
        price.style.fontWeight = 'bold';
        
        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(product.id);
        
        card.append(img, name, price, button);
        grid.appendChild(card);
    });
    
    return grid;
}

function addToCart(productId) {
    console.log('Added product:', productId);
}


console.log("\n✅ DOM Manipulation Mastery Complete!");
