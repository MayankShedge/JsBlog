// getName(); // this will run the function
// console.log(x); // undefined  // memory allocation phase mai x ko undefined assign hoga (as seen in call-stack-notes) aur getName mai uska defn store hoga

console.log(getName); // Isiliye yahape vo jo func defn call return karvaega

// Hoisting is a phenomenon in Js by which we can access the variables and function even before we have initialized it

// Now how this nature works lies in the depth of the call stack video
let x = 7

// function getName(){
//     console.log("Hello World");
// }

// getName = () => {
//     console.log("Hello World");
// }

// Ab incase of arrow func calling getName before it's defn will give error. Ab iss case mai getName will not behave as a function but rather it will behave as a variable and when we access this before declaration we will obviosuly get not defined 

let getName = function(){ // is case mai bhi kahani same hogi as arrow func ye treat kara jaega as a variable ad not a function
    console.log("Mayank");
}