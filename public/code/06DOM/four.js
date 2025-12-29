function addLanguage(langName) {
    const listItem = document.createElement('li')
    listItem.innerHTML = `${langName}`

    document.querySelector('.language').appendChild(listItem)
    // Yahape hamare .language mai 1 hi value thi lekin jab ham appendChild() karte hai uske andar aur element ko select karke kaam mai lete hai toh yahape sara ka sara tree usse traverse karna padta hai document ke andar
}

addLanguage("Python")
addLanguage("TypeScript")

// Ye approach mai hame tree traverse nahi karna padra instead ham ek naya text node banake bas usse append kardi bas
function addOptimizedLanguage(langName){
    const listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(listItem)
}

// Edit

const secondLang = document.querySelector('li:nth-child(2)')
// secondLang.innerHTML = "<h1> Mojo </h1>"
const newLi = document.createElement("li")
newLi.textContent = "Mojo"

secondLang.replaceWith(newLi)

/*

Step-by-Step Explanation:

document.querySelector('li:nth-child(2)')
→ Ye page ke <ul> (ya jo bhi parent hai) ke dusre <li> element ko select karta hai.
Example:

<ul class="language">
  <li>JavaScript</li>
  <li>Python</li>   <!-- 👈 Ye select hoga -->
  <li>TypeScript</li>
</ul>


const newLi = document.createElement("li")
→ Ye ek naya <li> element banata hai memory me (DOM pe abhi nahi gaya).

newLi.textContent = "Mojo"
→ Us <li> ke andar text daal diya:

<li>Mojo</li>


secondLang.replaceWith(newLi)
→ Ye existing second <li> (jo “Python” tha) ko poora replace kar deta hai naye <li> se.

Final DOM:

<ul class="language">
  <li>JavaScript</li>
  <li>Mojo</li>        <!-- ✅ replaced -->
  <li>TypeScript</li>
</ul>

🧠 Conceptually:

replaceWith() → ek Node method hai jo purani node ko completely hata kar naye node ko uske place pe laga deta hai.

Ye text, HTML tag, ya koi aur node sabko replace kar sakta hai.

⚠️ Note:

Old node completely remove hoti hai (memory se bhi nikal jaati hai jab garbage collector chalega).

Agar tujhe old node sirf modify karni ho (replace nahi), toh tu use kare:

secondLang.textContent = "Mojo";

*/

// Edit
const firstLang = document.querySelector('li:nth-child(1)') // select the 1st child of li family
// firstLang.innerHTML = "GoLang" // either use .innerHTML to change text
firstLang.outerHTML = "<li>GoLang</li>"
const NewLi = document.createElement('li') // create a new li element jisme we will store this changes we made or edit we did to text
const newLiText = document.createTextNode('GoLang') // create a new text node so that we do not have to travel entire tree to jus change this name
NewLi.appendChild(newLiText) // Once created the new text node append with the new li we created
firstLang.replaceWith(NewLi) // Finally replace this li with the previous li 

// Remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()