//Functions - Jitna bhi hamne code likha hai 10-20 lines ka usko ek package mai band kar diya hai aur ye package ham kahi bhi uthake use kar sakte hai

// First Class Functions - The ability of func where it can be treated as a variable i.e we can pass functon as argument , return func and even assign func to another varibales

//Function Definition
function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}

//Function Reference
sayMyName

//Function Execution
// sayMyName()


//Function ke andar joo pass kiya jara hai vo hai parameters
function addTwoNumbers(number1 , number2){
    // console.log("Mayank"); //Ye execute ho jaega 
    // let sum = number1 + number2
    // return sum 
    return (number1+number2)
    console.log("Mayank"); //This block becomes unreachable code as we will never reac here cause the function is already returning or has returned a value previously above
}

//Function call ke andar jo call kiye jare hai vo hai arguments
// let Sum = addTwoNumbers() //Ye NaN output dega as we haven't passed arguments 
// let Sum = addTwoNumbers(3,4)
let Sum = addTwoNumbers(3,null)

// console.log(Sum);

//Note that if a function is returning a void(simply samjho ki agar we are console logging in the function) and we store it in a variable and print it's value vo undefined dega obviously kyuki hamne kuch return kaha karaya tha uss function mai 

function loginUserMessage(username = "Yash"){ //Giving a default value 
    if (!username) { //Production practice better use !username than username === undefined kyuki it implies the same
        console.log("Please enter a user name");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Mayank")); //Mayank just logged in
console.log(loginUserMessage("")); // just logged in(start mai blank isiliye hai kyuki empty string hai)
console.log(loginUserMessage()); //undefined just logged in

// Shopping Cart logic - iss case mai hame pata nahi hota kitne numbers ya item aane vale. Toh aise situation aa sakti hai jaha apneko patana ho kitne arguments aane vale hai. Iss hisaab se hame parameter tayaar karne hote hai
// function calculateCartPrice(num1 ){
//     return num1 
// }
// // console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,500)); // Ab yahape first argument apne pass aa gaya hai par aage vale nahi aa pare

//Isko solve karne ke liye Rest ya Spread operator use kar sakte hai. Isko Rest bolna hai ya Spread ye depend karta hai kis tarah ye use hone vala hai uske upar
//Rest ka matlab hai ki jo items hame milre hai vo kafi scattered format mai hai (khule mai milre hai) toh isse bundle mai pack karke hame dedo 
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,2000)); //Array mai pass ho gaye sare arguments => [200->val1,300-val2][pehle 2 values ke alava jo bhi aaega -> ...num ]

const user = {
    name: "Mayank",
    price: 199
}

// function handleObject(anyobject){
//     console.log(`Username is ${user.name} and the price is ${user.price}`);   
// }

// handleObject(user)
// // const objectRead = handleObject(user)

//This can also be done as 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and the price is ${anyobject.price}`);   
}

handleObject(user)
// const objectRead = handleObject(user)

//Arrays 
const myNewArray = [200,300,400,500]

//Ham getArray aur upar bhi anyObject isiliye pass karre the taki ham general rakh paye ki yahape koi bhi object ya array aa sakta hai
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));