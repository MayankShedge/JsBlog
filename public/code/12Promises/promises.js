// // Yaha promise create hua 
// const promiseOne = new Promise((resolve , reject) => { // Promise create ho gaya. Ye apne andar ek callback leta hai ( callback hell[callbacks ke andar callbacks] usko bhi reduce karta hai )
//     // jo callback function ye leta hai uske 2 parts hote hai resolve[success of promise] aur reject[after failure of a promise]. Promise yato eventually resolve hoga yato nahi hoga (fail ho jaega)
//     // Do an async task
//     // DB calls , cryptography , Network related tasks

//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve() // Ye jab tak nahi karenge tab tak .then() aur resolve ko connect nahi kar paenge ham
//     }, 1000)
// }) 


// Point to be noted :- agar ek promise ko 404 error response state aaya toh voh usse kaha milega ? Vo usse response mai milega naki reject mai kyuki vo error nahi hai , error tab hi milega jab request kar hi nahi paya hai browser 
// Toh basically promise promise reject karta hai sirf jab network error encounter hota hai (jo hota hai usually jab koi permission issue ya similar issues hai). Promise reject nahi hoga on HTTP errors(404,etc) 
// Instead then() operator ko check karna chaiye Response.ok ya Response.status properties

// // Ab iss promise ko consume karenge 
// promiseOne.then(() => { // iska sidha relation hai resolve ke sath. Iske andar ek callback milta hai
//     console.log('Promise consumed');
// }) 

// // Toh yahape pehle task executed aaega aur phir promise consumed aaega 

// // Ye same kaam iss tarah se bhi hota hai - isme promise ko alag ke ek variable mai store nahi kiya we directly consumed it
// new Promise((resolve , reject ) => {
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve();
//     },2000)
// }).then(() => {
//     console.log("Async part resolved");
// })

// const promiseThree = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve({username: "Mayank", email: "mayank2@gmail.com"}) // Resolve mai parameters mai object ya array ya function bhi pass kar sakte hai. Yaha se hi ham promise ko consume karne ke liye jo data lagega vo pass karenge
//     },1000)
// })

// Ab yaha pe data lenge kaise? Jaise hi ham bolte hai ki function ko hamne .then() kar liya aur inka apas mai connection hai toh ham expect kar sakte hai kuch data aaega
// promiseThree.then((user) => {
//     console.log(user); // resolve() ke andar jo bhi parameter pass hua vo hame yahape mil jata hai 
// })

// const  promiseFour = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let error = true
//         // Yahape ham condition vise check karenge error hai ya nahi suppose koi network request marte vakt
//         if (!error) {
//             resolve({username: "Mayank" , password: "123"}) // agar error nahi hai toh resolve kardo aur jo deta network se receive hua usse yahape bhej do
//         }else{
//             reject('ERROR: Something went wrong') // Agar error aaya toh ab scenario mai aaega apna rejection vala part promise ka jo banaya tha to handle failure
//         }
//     } , 2000)
// })

// Normal way where then ke andar error na aaya hua data le lenge aur catch ke andar jo error aaya tha vo le lenge 
// promiseFour.then((user) => {
//     console.log(user);
// }).catch(() => {
//     console.log("Faced error in this part");
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => { // Yahape hamne chaining kardi kyuki hame ye return koi variable mai nahi milra tha aur isse ham uss data ke andar ke data ko access kar paenge
//     console.log(username);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("The promise is either resolved or rejected");
// }) // toh hamne error aur right parts ko toh .then() and .catch() kar liya lekin ye finally hamesha execute hoga almost kind of default maan sakte hai isse

const promiseFive = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "javascript" , password: "123"}) 
        }else{
            reject('ERROR: JS went wrong') 
        }
    } , 2000)
})

// As per our knowledge , promise ek future mai hone vali chiiiz hi toh hai aur ye jaruri nahi ki ham hamesha usse .then() aur .catch() se hi handle karege ye async await se bhi handle kar sakte hai
// Thodi der wait karta hai kaam ke hone ka agar ho jata hai tab hi aage badhta hai, varna vahi error de deta hai.
// Isme lekin ham catch handle nahi karte par kuch jagah ye necessary rehta hai jaise DB connection hua hi na ho toh hame aage badhna hi nahi hai
// async function consumePromiseFive(){
//     const response = await promiseFive // note ki promise ek object hai aur isse ham promiseFive() iss tarah se consume nahi karte hai
//     console.log(response); // upar ke case mai ham ye expect kar rahe hai jab bhi promise resolve hoga value aaegi hi aaegi

//     // Ab iss case mai kafi ek classy error ham face karenge jo hai ki ham yaha agar error aaya toh usse handle nahi kar paenge as we had discussed earlier 
//     // Toh suppose karo ki hamne ek promise create kara jisme aise prakar se promise designed hai aur usme kuch iss prakar se error aa sakti hai ya network request karre the jisme iss prakar se values aa sakti hai toh problem ho sakti hai
//     // Async await ka problem hai vo directly errors ko handle nahi kar sakte hai (ham although usse try catch block mai dalke usse handle kar sakte hai)
// }

// Note that dono mai se koi bhi syntax galat nahi hai dono mai se koi bhi ham use kar sakte hai as per our conviniece 

// async function consumePromiseFive() {
// try {
//     const response = await promiseFive
//     console.log(response);
// } catch (error) {
//     console.log(error);
// }
// }

// consumePromiseFive()

// Thoda real world use case
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // isko bhi time lagta hai toh isko bhi await karana padega 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",  error);
//     }
// }

// getAllUsers()

// Kyuki fetch ka response type promise hai ham sidha ispe .then laga sakte hai
fetch('https://api.github.com/users/MayankShedge')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('The promise is either resolved or rejected');
})
