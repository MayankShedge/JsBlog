// Object Literals 
const user = {
    username: "Mayank",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from the database");
        // console.log(`Username: ${sername} loginCount: ${loginCount}`); // ye nahi chalega not defined aaega yahape
        console.log(`Username: ${this.username} loginCount: ${this.loginCount}`);
        console.log(this);   // yahape current context milega matlab jo apna user object hai vo yahape milega       
    }
}

// console.log(user['username']);
// console.log(user.loginCount);
user.getUserDetails()

// this keyword - Ye hamesha current context ki baat karne ke liye use hoga 

// console.log(this); // ye yahape global mai for node environment blank/empty bject dega aur in browser ye dega Window object

// Ab yahape agar hame ek aur user object banana hai toh vapis se upar ka process repeat karna padega jo repetetive bana dega chizo ko

// Iske liye we use constructor function
// const promiseOne = new Promise()
// const date = new Date()
// Ye new keyword hai vo constructor func ha. Ye allow karta hai ek hi object literal se multiple object literals bana sako
// new keyword naya context banane mai kaam aata hai

function User(username , loginCount , isLoggedIn){
    this.username = username // left side value hamari variable hai aur right side jo ham pass karke dere hai
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this // ye implicitly define hota hai ye return nahi kiya toh bhi chalega
}

// const userOne = User("Mayank",12,true)
// const userTwo = User("Yash" ,11,false) // ye values overwrite kar dega 

// isislye 
const userOne = new User("Mayank",12,true)
const userTwo = new User("Yash" ,11,false)
// Toh constructor function hame ek har baar naya copy create karke dega jo apneko (naya instance)

// new keyword - Jaise hi likhte hai ek empty object create hota hai jisko instance bola jata hai (baar baar this likhenge baar baar empty object create hoga)
// Step 1 - Ek empty object create hota hai 
// Step 2 - Ek constructor function call hota hai new keyword ke karn(jo bhi arguments aur hai iske andar pack karke de deta hai)
// Step 3 - this keyword hai(jo bhi arguments vagera hai) vo iske andar inject ho jata hai
// Step 4 - Mil jate hai function ke andar

console.log(userOne.constructor); // Constructor property reference hoti hai apke khud hi ke bare mai

