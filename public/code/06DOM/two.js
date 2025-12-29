/*
5. Why even use .parent or .children when we have query selectors?

Good question 🔥
You can indeed use querySelectorAll('p') or getElementsByClassName(),
but .parent and .children are used when:

✅ You already have a reference to one element
and you want to navigate relative to it instead of querying entire DOM again.

Parent → has → children[]
Each child → can have → its own children[]
And each child → knows its → parentElement
*/


const parent =  document.querySelector('.parent')
// console.log(parent);

// console.log(parent.children); // parent ke andar kitne children mile hai
// // Ye return karta hai ek HTML Collection

// console.log(parent.children[1]); // kisi ek element ko access kiya
// console.log(parent.children[1].innerText = 'Friday'); 
// // Toh isse hamne jana ki jitne bhi elements hai sabke koi na koi children hote hai

// // Bina array mai convert kiye kyuki ye HTML Collection almost array like structure tha we used a for loop on it to itrate through it
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }

parent.children[1].style.color = 'orange'

//Parent ke andar children chodke kuch aur properties bhi hoti hai

/*

| Property / Method         | Description                                         | Returns        |
| ------------------------- | --------------------------------------------------- | -------------- |
| `.children`               | All element children (ignores text nodes, comments) | HTMLCollection |
| `.childNodes`             | Includes text nodes, comments, etc.                 | NodeList       |
| `.firstElementChild`      | First child element                                 | HTMLElement    |
| `.lastElementChild`       | Last child element                                  | HTMLElement    |
| `.parentElement`          | The parent of the element                           | HTMLElement    |
| `.nextElementSibling`     | The next element at the same level                  | HTMLElement    |
| `.previousElementSibling` | The previous element at the same level              | HTMLElement    |

*/

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const day1 = document.querySelector('.day')
// console.log(day1);
// See ab basically yaha apan baar baar querySelector lagane ka kaam bacha rahe hai kyuki querySelector baar baar pura tree traverse karte baithega which might degrade the perfoemance a bit as pura DOM jo ek tree hai vo baar baar traverse hora hai
// So yahape agar apneko directly parent mil sakta hai kisi element ka we directly use that to khali fukat avoid the usage of querySelector

// console.log(day1.parentElement); // Isse apan sidhe iss element ke parent element ko target kar paenge
// console.log(day1.nextElementSibling); // Jo ussi ke similar next element hai same level pe(matlab same parent ka children) vo yahape trigger ho jaega

console.log("NODES: ", parent.childNodes); // Ye pura ek complex tree structure hai (jaise hamare pass bas 4 elements the Mon tue wed thu par hamne har ek ke baad enter mara tha aur div create kiya tha toh voh text ban gaya line break aur div apna div.day(day uski class hia)) aur inke andar aur aise properties
// HTML mai 1 line enter 1 hi baar count hota hai uske baad kitne bhi dalo it will still remain same until vahape koi aur element na ghusa diya jaye

