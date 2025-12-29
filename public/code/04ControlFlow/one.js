// If- Agar condition true hai toh andar ka code run hoga varna nahi hoga
const tempreature = 41

// if (true) {
//     // Execute hoga
// }if(false){
// // Execute nahi hoga
// }

// if (tempreature === 50) {
//     console.log("Tempreature is less than 50");
// }else{
// console.log("Tempreature is greater than 50");
// }

// === -> strict check used if you want to ensure ki sirf value hi nahi uska type bhi same ho

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User has the power ${power}`);   
// }

// console.log(`User has the power ${power}`);   //Iss scope mai power not defined bataega 

const balance = 1000
//Bad practice of code
// if (balance > 500) console.log("test"),
// console.log("test2");

//if-else-if ladder
// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("Less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("more than 1000");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}