const descriptor = Object.getOwnPropertyDescriptor(
    Math , "PI" // key , "value"
) //Ye object ke kuch hidden chizo ke bare mai batati hai

// console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false, // ye itna hardcoded kara rakha hai js ke engine ne ki isse ham edit nahi kar sakte 
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // Ab ye ideally change ho toh nahi rahi kyuki ek constant hai par kya iska matlab hai ye change kar hi nahi sakte?
// Nahi ye galat hai change ho sakti hai

/*
 Toh kya ham aise hamare bhi objects ko properties de sakte hai ki vo aise hardcoded ho ki vo change na ho sake
 ham unki properties aur flags le sakte hai aur change bhi kar sakte hai
*/

const mynewObj = Object.create(null)
const Mayank = {
    name: "Mayank",
    age: 22,
    isProgrammer: true,

    beginProgram: function(){
        console.log(`Programmer ${this.name} has started the programming`);
        
    }
}

// console.log(Mayank["isProgrammer"]);

// kya iski descriptor properties hai? Ha hai 

// console.log(Object.getOwnPropertyDescriptor(Mayank)); // undefined aaega kyuki hamne object diya hai property nahi property hogi name , age , isProgramming ye sab
// console.log(Object.getOwnPropertyDescriptor(Mayank , 'name'));

// How to change these properties ?
Object.defineProperty(Mayank , 'age' , {
    writable: false,
    enumerable: false,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(Mayank , 'age'));

for (const [key,value] of Object.entries(Mayank)) {
    if (typeof value !== 'function') { // function ko iterate nahi karna
        console.log(`${key} : ${value}`);
    }
}

// Ye kaam aaega jab kabhi kuch object ke properties jo API se receive hue hai usme kuch kuch baar ye ham alter kar sakte hai like object iterable nahi hai ya writable nahi hai aisa sab