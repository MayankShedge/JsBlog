let greetings: string = "Hello Mayank"

// greetings = 6

// greetings = true

// let myNum = 6

// myNum.toLowerCase()

// greetings.toLowercase()

console.log(greetings)

//Number
// let userId: number = 334466

// userId.toExponential()

//Boolean
let isLoggedIn: boolean = false

isLoggedIn.valueOf()

//Type Inference
// In some cases the type inferences can be avoided to reduce the redundacy of the code 
// For example
let userId = 334466 //In this case TypeScript will automatically detect that this is a number so no need to explicitly write it

//However in some cases writing it may be critical and important 

let hero : string;

function getHero(){
    return "Thor"
}

hero = getHero() //Auto inferred as Any by TypeScript which is a bad case. So here is the special scenario where we need to infer this variable as string 

//Any is not a special keyword or type in Ts its is just a getaway where we tend to use it in cases where we want to skip TypeChecking for that particular part

//You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

export {}