// Reduce 

// const arr = [1,2,3,4,5]

// const initialValue = 0
// const sumWithInitialValue = arr.reduce(
        //curretValue milegi current ongoing array value se
//     //accumalator mai 1st iteration mai initialValue ki value store hogi and once it runs from 2nd iteration onwards jo sum aaya hai uski values store hona start ho jaegi
//     (accumalator , currentValue) => (accumalator + currentValue,initialValue)
// )

const myNums = [1,2,3]

const myTotal = myNums.reduce((acc , currVal) => {
    console.log(`the value of accumlator is ${acc} and current array value is ${currVal}`);
    return acc + currVal
},0) // , ke baad jo value denge vo hamari accumalator ki initial value ban jaegi
console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js-course',
        price: 299
    },
    {
        itemName : 'mobile-dev',
        price: 5999
    },
    {
        itemName : 'data-science',
        price: 12999
    }
]

// Goal --> shopping cart mai jitne items hai unhe add kardo
const cartTotal = shoppingCart.reduce((acc,currVal) => {
    console.log(`the value of accumlator is ${acc} and current array value is ${currVal.price}`);
    return acc + currVal.price
},0)

console.log(cartTotal);
