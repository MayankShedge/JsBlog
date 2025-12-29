//Union can be used in a situation in which we are unaware of the type of data which is going to come in(number/string/etc)
let score: number | string = 33

score = 44

score = "44"

//Use of union with customed derieved data types
type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}

let mayank: User | Admin = {
    name: "Mayank", id: 334
}

mayank = {
    username: "Mnk", id: 2329
}

//Use of union with functions

// function getDbID(id: number | string){
//     //Making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbID(3)
getDbID("3")
function getDbID(id: number | string){
    //Making some API calls
    // id.toLowerCase() //Gives error cause id can be either a number or a string so we cannot pre-determine what it will be and apply a string function on it 
    
    if (typeof id === "string") {
        id.toLowerCase()
    }
    else if (typeof id === "number") {
        id + 2
    }
}

//Use of union with Array
const data: (number | string | boolean )[] = [1,2,3,"4",true]

let pi : 3.14 = 3.14
// pi = 3.145

let seatAllotment : "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"

export{}