/*
A discriminated union in TypeScript is a powerful pattern for modeling a type that can be one of several different, but related, object shapes. It works by having a shared, specific property—the discriminant—that TypeScript can use to narrow down the exact type.

This pattern has three key components:

A common, literal property (the discriminant). This is usually a string literal, like kind, type, or status.


A union of types that each have a different literal value for that common property.

A type guard (like a switch statement) that checks the discriminant property.
*/
interface User{
    name: string,
    email:string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    breadth: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}

/*
Exhaustiveness Checking --
Exhaustiveness checking is a TypeScript feature that ensures you have handled every possible variant in a discriminated union. It prevents you from adding a new type to your union and forgetting to update the logic that uses it, thus catching bugs at compile time instead of at runtime.

This is typically achieved using the never type in the default case of a switch statement. The never type represents a value that should never occur.

Here's how it works:

1.Inside the default case, TypeScript knows shape could still be a Triangle.

2.You try to assign this Triangle type to a variable of type never.

3.Since a Triangle can exist, it cannot be assigned to never (a type for things that can never exist).

4.TypeScript throws a compile-time error, forcing you to realize you missed a case.

This technique ensures that if you ever add a new shape to the Shape union, your code won't compile until you update all the necessary switch statements to handle it, making your code much more robust and maintainable.
*/
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.breadth

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}