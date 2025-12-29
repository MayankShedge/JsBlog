//This is not the use case of the object
const User = {
    name: "Mayank",
    email: "mayankshedge0@gmail.com",
    isActive: false
}

//Use case of the objects is through the functions where we either pass or return some objects through the functions.
//Passing an object through function
function createUser({name: string, isPaid: boolean}){

}

createUser({name:"Mayank", isPaid: true})

//Returning an object through function
function createCourse():{name: string, price: number}{
    return {name: "React", price: 3499}
}

//Bad syntax of objects(bad behaviour) in TypeScript
function createUser2({name: string, isPaid: boolean}){

}

let newUser = {name:"Mayank", isPaid: true, email: "mayankshedge0@gmail.com"} //Passed more no of parameters than actually present 

createUser2(newUser)

export{}

