let myName = "Mayank"
// let myChannel = "MayankShedge"

// console.log(myName.truelength); // Yahape ham chate hai ki ham yahape log mai de ki `true lenght of string is : ${length}`

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// jaise hamne function ko diya tha hamne khudke prototypes isko bhi denge ab
Object.prototype.mayank = function(){ //. rather than creating a seperate prototypes for sring array obj etc sidha Object pe hi banado kyuki sab isko aake link hote hai
    console.log(`Mayank is present in all objects`);
    
}

myHeros.mayank() // in dono mai accessible hai object vala vo custom prototype

heroPower.mayank() // in dono mai accessible hai object vala vo custom prototype

Array.prototype.heyMayank = function(){
    console.log(`This is present in Array but kya ye present hai in object? `);
}

myHeros.heyMayank()
// Object.heyMayank() // Ab yahape note kyuki ye array mai hua tha create and array is child of object, object ko ye accessible nai tha
// heroPower.heyMayank() // same here
// nor even the same level children can access this 
// myName.heyMayank() // jaise yahape ye string hai

// INHERITANCE

// Old approach
const User = {
    name: "Mayank",
    email: "mayank@gmail.com"
}

const Teacher = {
    makeVideo: true,
    __proto__: User // Teacher gets all the properties of user
}

const TecahingSupport = {
    isAvailable: false
}

const TASuppport = {
    makeAssignment: 'Js Assignment',
    fulltime: true, // Har object apne level pe ek alag instance hai
    __proto__: TecahingSupport // Ab isse sare TeachingSupport ki properties mil jaegi
}

Teacher.__proto__ = User // Prototypal inheritance isko user ki sari properties mil jaegi
setPrototypeOf(Teacher,User) // Same as above

// New approach
Object.setPrototypeOf(TecahingSupport,Teacher) // same as writing TecahingSupport.__proto__ = Teacher bas syntax accha hai

let anotherUserName = "Mayank          "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`The true length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"Hitesh".trueLength()
"iceTea".trueLength()