// function anotherFunction<K,V extends number>(valOne: K , valTwo: V): object{
//     return {
//         valOne,
//         valTwo
//     }
// }

// anotherFunction(3,"4")

interface Database{
    connection: string,
    userName: string,
    password: string
}

function anotherFunction<K,V extends Database>(valOne: K , valTwo: V): object{
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3,"4")

//Defining a class type
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T,> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}