function setUserName(username){
    // complex DB calls
    this.username = username // toh hame bolna padega ye jo set hora hia this ye apne function mai(har function ka this hota hai jiske andar aur bhi values add kari jaa sakti hai) na karke ye createUser ka context lelo isme
    console.log('called'); // Jab ye call hoga toh ye execution context se hat jaega jisse kya hoga? iske saath ke sare variables bhi gayab ho jaenge iske saath hi
}

// Agar hum setUserName(username) direct call karte hain,
// to wo apne function context me run karega, aur uska this global object pe point karega (ya undefined in strict mode).
// createUser ke this pe koi effect nahi hoga — so username createUser ke object me set nahi hoga. -- matlab ? --> Jab tu setUserName(username) likhta hai bina .call(this) ke,toh wo function apne khud ke this ke saath chalega —createUser() ke this se koi lena dena nahi hoga.

function createUser(username,email,password){
    // setUserName(username) // Ye call nahi hora hai aise bas reference diya hai 
    // Jab yahape sidha ham call kar denge setUserName ko toh vo call stack se hatt jaega sidha jisse hoga yu ki uske andar jo username hai v bhi obviosuly hatt jaega
    // Ab isiliye ham setUserName.call(this , username) ye likhenge jisse hoga yu ki ab setUserName iss createUser() ka execution context lega aur usme username set karke execution context se hatega toh ab username ye gayab hone se pehle createUser ke execution context mai set ho gaya hoga

    // .call() method kisi bhi function ko manually invoke karta hai aur
    // uske andar this ka value manually set kar deta hai.
    // Syntax → fn.call(thisArg, arg1, arg2, ...)

    setUserName.call(this , username) // jab bhi call dete hai toh first parameter optionally chao toh this pass kar sakte ho
    // Jaise hi yaha this pass hoga vo khudka nahi createUser ka this use karega setUserName store karne username
    this.email = email
    this.password = password

    // toh call kya karta hai ? hamara current execution context kisi aur function ko pass kar deta hai
}

const mayank = new createUser('mayank','may@32.com','123')
console.log(mayank);



// new createUser() → ek new empty object banata hai:
// this = {}

// createUser() ke andar:
//    setUserName.call(this, username)

//    means:
//    setUserName() chalega,
//    lekin iska 'this' yehi object (createUser ka) hoga.

// So:
// this.username = username
// this.email = email
// this.password = password

// Return => wo naya object


/*
🧩 Behind the scenes:

1️⃣ new createUser() creates a new empty object.
2️⃣ Inside createUser, we use setUserName.call(this, username)
    → 'this' here refers to the same new object.
3️⃣ So setUserName sets 'username' on that object itself. Matlab yahape setUserName khudka context na use karke sidha createUserName mai username bana dega
4️⃣ Rest properties (email, password) are added inside createUser.
5️⃣ Finally, the new object is returned automatically.

⚠️ If we didn’t use .call(this):
   - setUserName() would run in global scope.
   - this.username would set on window/global, not on our object.
*/