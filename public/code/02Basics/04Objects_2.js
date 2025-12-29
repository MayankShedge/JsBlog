//creation of objects using constructors(singleton)
const tinderUser = new Object() //create hua ek singleton object
tinderUser.id = "123abc"
tinderUser.name = "Yash"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Mayank",
            middleName: "Vijay",
            lastName: "Shedge"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname?.userFullName.firstName); //isme kuch baar jab APIs se data fetchh hota hai tab hame iska dhyan rakhna padta hai ki kuch values aaye hi na toh iss case mai hame ? se check karte hai ki agar hai toh lo varna ignore

//Merging  objects 
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

let merged_obj = {...obj1,...obj2} //isme bhi arrays ke tarah agar sidha console.log(obj1,obj2) kiya toh object ke andar dusra object merge hoga(nested) joki galat hai
// console.log(merged_obj);

let obj3 = Object.assign({},obj1,obj2) //preferred hai ki start mai empty object pass karte hai => Object.assign(target,source)
// console.log(obj3); // {} --> target  obj1,obj2 --> source

// Jab database se values aaengi 
const user = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "v@gmail.com"
    },
    {
        id: 3,
        email: "y@gmail.com"
    }
]

// console.log(user[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //ye array return karega jisse apan loop kar sakte hai
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // ek array bana dega har key value pair ka jiski 1st value will be key and 2nd will be value
console.log(tinderUser.hasOwnProperty('isLoggedIn'));