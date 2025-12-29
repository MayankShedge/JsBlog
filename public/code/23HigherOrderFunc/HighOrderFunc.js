// A function which takes another function as an argument or returns a func from it is known as higher order function

// function x(){
//     console.log("Mayank");
// }

// function y(x){ // So yaha function y jo leta x ek dusra function as a argument ban jata hai higher order function aur x ban jaega callback functiton
//     x();
// }

const radius = [3,1,2,4] // --> array of radius of 4 circles and task is to calculate area of these 4 circles

// const calculateArea = function(radius){
//     const output = []
//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i]**2)
//     }
//     return output
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function(radius){
//     const output = []
//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }

// console.log(calculateCircumference(radius));

// const calculateDiameter = function(radius){
//     const output = []
//     for(let i = 0; i < radius.length; i++){
//         output.push(2  * radius[i])
//     }
//     return output
// }

// console.log(calculateDiameter(radius));

// Here DRY is getting violated as we are repeating a lot of code. Baki sara process same reh raha hai bas logic change hora hai

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
const calculate = function(radius,logic){
    const output = []
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// Ye hai functional programming - har ek module apna ek alag kaam karra hai
// Matlab ? --> as we can see area func will only take radius and give area as output, similarly for circumdferemce and diameter
// and calculate will only create a new array push the results in it and then give output toh har function alag kaam karra hai and they are non repeating
// so we broke down the logic into small resuable functions which is called functionality 

radius.map(area)