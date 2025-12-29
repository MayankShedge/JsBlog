//Without this 
// const user = {
//   username: "Mayank",
//   price: 999,

//   welcomeMessage: function() {
//     console.log(`${user.username}, welcome to website`);
//     console.log(this);
//   }
// };

// user.welcomeMessage(); // "Mayank, welcome to website"
// user.username = "Yash";
// user.welcomeMessage(); // "Mayank, welcome to website"

//With this
const user = {
    username: "Mayank",
    price: 999,

    welcomeMessage: function(){
        //Simple bhasa mai this current context ko refer karta hai
        console.log(`${this.username}, welcome to website`); //Iss scope mai jitne bhi variables hai unhe access karne ke liye ham this laga denge
        //Jab hame current context mai kuch refer karna hai tab ham this lagate hai.
        //Ab iska kya matlab hai? Matlab jab bhi current scope mai kisi ko refer karna hai this se ham vo kar sakte hai. Jab this ko akela use kiya jaye global scope mai tab vo refer karega global object. In browser ye hoga window object ko aur node mai global object ko
        //**This is a special keyword that refers to the object that is currently executing the function.** Jaise iss case mai user object hamara call karra hai welcomeMessage function ko aur execute bhi 
        console.log(this); //Pura ye current object return kar dega vo bhi current context vala
    }
}

// user.welcomeMessage() //Mayank, welcome to the website
// user.username = "Yash" //Yahape context(values) change karti
// user.welcomeMessage() //Yash, welcome to the website
//As soon as the context changes function ke andar bhi vo update ho jaega

// console.log(this); // Node environment mai ye this object hoga empty aur browser environment mai hota hai window object

// function chai(){
//     let username = "Mayank"
//     console.log(this.username); //ye aaega undefined so context objects ke andar hi karra hai yahape nahi
// }

// chai()

// Arrow function
const chai = () => {
    let username = "Mayank"
    console.log(this.username); //just like normal functions yahape bhi ye aaega undefined so context objects ke andar hi karra hai yahape nahi
}

// chai()

//Basic Arrow function
// const addTwo = (num1 , num2) => {
//     return (num1 + num2)
// }

//Implicit return
// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2) //curly brackets lagaye toh return keyword compulsory aur parenthesis lagaya tooh return not necessary

//Parenthesis lagane se fayda kya hota hai ? to return an object
const addTwo = (num1 , num2) => ({username: "Mayank"})

let sum = addTwo(3,4)
console.log(sum);

const myArr = [2,5,3,7,8]
// myArr.forEach(()=>({}))