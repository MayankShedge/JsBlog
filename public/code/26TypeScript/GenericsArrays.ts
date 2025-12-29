//Taking array as an input(method 1)
function getSearchProducts<T>(val: T[]): T[]{
    return val
}

//We return one particular value from the array by using this syntax
function getSearchProducts3<T>(val: T[]): T{
    //Carrying out some database operations
    const myIndex = 3
    return val[myIndex]
}

//Taking array as an input(method 2)
function getSearchProducts2<T>(val: Array<T>): Array<T>{
    return val
}

//With arrow functions
const getMoreSearchProducts = <T>(products: T[]): T[] => {
    return products 
}

//Same hai bas <T,> bhi use karte hai jo same imply karta hai but a better way to represent that this is a generic
const getMoreSearchProducts2 = <T,>(products: T[]): T => {
        //Carrying out some database operations
    const myIndex = 4
    return products[myIndex]
}

