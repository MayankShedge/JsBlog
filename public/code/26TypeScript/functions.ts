//Function bodies
function addTwo(num: number): number{//Ab function ka return type bas number ho sakta hai
    return num + 2
    // return "hello" //returning an inaccurate value

}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string , email: string , isPaid: boolean){

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { //setting default value for a parameter

}

//What will happen if we have multiple return types present

// function getValue(myVal: number): {
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

// const heros = ["thor","spiderman","ironman"]
const heros = [1,2,3]


heros.map((hero): string =>{ //Smart context switching of typescript(automatically guesses the type of the value hero when you change it, i.e no need to explicitly mention (hero: string)=>{} over here)
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//Functions which never return a value(The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program. never also appears when TypeScript determines there’s nothing left in a union.)
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

//Function Calls
addTwo(5)

getUpper("mayank")

signUpUser("mayank","mayankshedge0@gmail.com",true)

loginUser("Mayank","mayankshedge07@gmail.com")

export {}