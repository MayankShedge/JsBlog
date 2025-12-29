// IIFE :- Immidiately Invoked Function Expressions
//Ek aisa fuction jisse likhne ke baad turant hi execute karvana hai 

//Ab ye database calling function hai hamara aur ham nahi chate ki global scope pollution isse affect na kare
// function chai(){
//     console.log('DB connected');
// }
// chai()

// Global scope ke pollution se dikkate aati hai kai baar toh iss dikkat ko avoid karne IIFE use karte hai jo hame allow karta hai aisa function banane jo jaise hi Likha jaega uske saath hi execute bhi ho jaega
(function chai(){
    // named IIFE
    console.log('DB CONNECTED');
})()

(/*Function ki Definition*/)(/*Function Execution*/)

((name) => {
    //Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Mayank'); //last vala () bas uska execution hi hai

//IIFE invoke toh ho jata hai par isse pata nahi chalta context rokna kaha hai. Aise situation pe ; lagana padta hai usse uss line ko end karne ke liye