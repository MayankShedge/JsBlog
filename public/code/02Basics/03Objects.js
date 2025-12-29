/*
 Isko declare karne ke 2 tarike hai - 1. Literal ke tarah.   
                                      2. Constructor ke tarah

Singleton - koi bhi object jab constructor se banate hai toh singleton ek object banta hai yani ye apne tarah ka ek hi object hai(unique)
Dusri tarah se banate vakt multiple instances create ho jati hai

So point to remember --> Jab object constructor se banega => Singleton
                     --> Jab Literal se banega => Non Singleton
*/

//Singleton
// Object.create()

//Symbol
const mySym = Symbol("key1")

// Object Literals 
const JsUser = {
    name: "Mayank",
    "full-name": "Mayank Shedge",
    mySym: "symbol-1", // value ki type as string store hogi yahape
    [mySym]: "actual-symbol",
    age: 22,
    location: "Vashi",
    email: "mayank@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email) //ye bhi ek tarika hai objects ke values ko access karneka butit is not the only available method
// console.log(JsUser["email"]);

// // console.log(JsUser."full-name"); //ye allowed nahi hai yahape hame dikkat aaegi ye value access karne mai
// console.log(JsUser["full-name"]);

// console.log(JsUser.mySym); //Ye yahape use toh hora hai but not perfectly as a symbol 
// console.log(typeof JsUser.mySym); //iska output string aata hai jo ki maine upar bataya bhi ki perfectly as a symbol nahi use hora hota hai

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]); //still yahape string hi aaega type of

JsUser.email = "mayank2@gmail.com" //Accessing and changing the object values 
// console.log("Before freeze " , JsUser.email);

// Object.freeze(JsUser) // isse further mutation of value nahi ho paegi 
JsUser.email = "mayank0@gmail.com"
// console.log("After freeze ", JsUser.email); // yahape value last vali hi milegi upar vale statement se ab change nahi hogi vo

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name} your email id is ${this.email}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


