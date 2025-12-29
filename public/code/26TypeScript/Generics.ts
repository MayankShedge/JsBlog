const score: Array<number> = []
const names: Array<string> = []

//Now suppose a case where we need to take input of multiple number of types and we can return the same too. But the type of input provided and the returned values type should be same
function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

//once value type is provided it is locked so if suppose input is number the output will be a number and similar for others
function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Mayank", type: 3})