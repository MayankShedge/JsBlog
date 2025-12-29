type User = {
    readonly _id: string //used to mark properties of an object as immutable
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number //to keep a property optional we use optional keyword(?)
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails =  cardNumber & cardDate & {cvv: number} //combining more than one types 

let myUser: User={
    _id: "1245",
    name: "h",
    email: "mayank@gmail.com",
    isActive: false 
}

myUser.email = "m@gamil.com"
// myUser._id = "asa"

export{}



