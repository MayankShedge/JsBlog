// for each loop 

const coding = ['js','cpp','java','c','python']

//Har array mai prototype mai kuch values provided hoti hai just like strings and objects
//for each jo prototype hai vo expect karta hai ek callback function so ham yahape function ka naam nahi denge aur kyuki ye khud itna smart hai ki ye khud hi sare elements ke through iterate karega isse ham ek naam dete hai jo ham denge uss element ka array ke

//With normal function
// coding.forEach( function (item){
//     console.log(item);    
// })

//With arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

//Kya iss function ko bhi pass kar sakte hai ??
function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) //yahape reference dena hai not execution of the function

//iske pass bas item nahi hota balki 
coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
})

//[{},{},{}] - handle these scenarios which come from API calls 

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "Java",
        langFileName: "java"
    }
]

//isme note karna ki as a item yahape ham pura object pass karenge
myCoding.forEach((item) => {
    console.log(item.langName); //array ke andar ke object ke andar ki value nikal li
})