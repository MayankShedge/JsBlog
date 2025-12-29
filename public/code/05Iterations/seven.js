const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.map((num) => (num + 10)) // Same isme bhi scope open karre hai toh return karna hai
// console.log(newNums);

// Isse for each se kaise karenge ?
// const newNums = [];

// myNums.forEach((num) => {
//   newNums.push(num + 10);
// });

// console.log(newNums);
//Method chaining
let newNums = myNums
            .map((num) => (num * 10)) // Jab bhi chaining hoti hai uski value aage vale chain mai pass ho jati hai[10,20,30,..]
            .map((num) => (num + 1)) //Yahape hame manipulated array milega[11,12,13,..]
            .filter((num) => (num >= 40))

console.log(newNums);


// Map in detail
const area = function(radius){
    return (Math.PI * radius ** 2)
}

const circumference = function(radius){
    return (2 * Math.PI * radius)
}

const diameter = function(radius){
    return (2 * radius)
}
// So as we saw ab hamne sidha jo values hame calculate karne rehte the vo hamne declare kiye as alag functions and we directly sent them as callbacks in the function calculate

// Ab calculate hamara higher order function ban jaega jo callbacks like area,circumference,diameter aise lega aur pass karega as result

// hamara version map ka
// const calculate = function(radius,logic){
//     const output = []
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// calculate ko bhi exactly map jaisa banate hai 
Array.prototype.calculate = function(logic){ // Array.prototype.calculate se hamara ye calculate sare arrays ko available ho jaega
    const output = []
    for(let i = 0; i < this.length; i++){ // here this will refer to the array on which this calculate prototype object is being used
        output.push(logic(this[i]))
    }
    return output
}

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

console.log(radius.calculate(area));


// Ye hai functional programming - har ek module apna ek alag kaam karra hai
// Matlab ? --> as we can see area func will only take radius and give area as output, similarly for circumdferemce and diameter
// and calculate will only create a new array push the results in it and then give output toh har function alag kaam karra hai and they are non repeating
// so we broke down the logic into small resuable functions which is called functionality 

radius.map(area) // Map function creates a new array iterates all its elements and returns the outputs

