const Div = document.createElement('div')
// console.log(Div);

// Har ek element individually ek node list hai( uske andar values sari available hai aria text se leke baki sab) lekin vo set nahi hai values
Div.className = "main" // kuch default attritubutes set kar diye
Div.id = Math.floor(Math.random()*10 + 1) // Same yaha bhi
Div.setAttribute("title" , "generated title") // Set custom attributes(key aur value pair mai attribute dena hai)
Div.style.backgroundColor = 'green'
Div.style.padding = '12px'
// Div.innerText = ' Hi Mayank '
const addText = document.createTextNode("Mayank")

// Yaha tak apan ne jo Div create kiya vo bas memory mai present hai asal mai vo kabhi abhi tak page pe add hua hi nahi hai

// Now add this to DOM
Div.appendChild(addText)
document.body.appendChild(Div)

/* 
Some points to note
for innerText :- 
✅ Ye directly element ke andar ka text replace kar deta hai.
It’s simple, but…
❌ Ye purana text delete kar deta hai.
❌ Ye re-parsing karta hai DOM ko (performance slightly worse if used often).
❌ Ye reflows/repaints trigger karta hai browser me har time jab use karte ho.
✅ But ye human-readable aur fast coding ke liye useful hai.

Eg:- 
const div = document.createElement('div');
div.innerText = 'Hello Mayank'; 
// Agar div ke andar pehle se kuch aur tha, wo sab replace ho gaya.

for createTextNode :-
✅ Ye ek text node object banata hai (like a pure data node in the DOM tree).
✅ Ye DOM me merge hota hai bina poora inner structure replace kiye.
✅ Performance-wise better hai when building DOM dynamically (loops, API data, etc.)
✅ Gives you fine-grained control — you can append, move, or remove it anytime.
❌ Slightly longer syntax.

Eg:-
const div = document.createElement('div');
const text = document.createTextNode('Hello Mayank');
div.appendChild(text);
// Yeh existing children ko delete nahi karta, bas text node add karta hai.

*/