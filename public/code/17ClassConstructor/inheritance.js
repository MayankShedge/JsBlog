// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`The username is : ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
           // When a child class (subclass) extends a parent class (superclass), child class ka constructor tab tak run nahi ho sakta jab tak super() call na ho.
           //Because JavaScript ko pehle parent class ka setup/execution complete karna hota hai, tab jaake child class ka this create hota hai.
//         super(username) // ye same hai jo apan likhte the as user User().call(this , username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`New course was addded by : ${this.username}`);
//     }
// }

// const Mayank = new Teacher('Mayank','mayank@gmail.com','123')

// Mayank.addCourse()

// const Yash = new User("Yash")
// // Yash.addCourse() // User ko nahi hoga access Teacher ke methods ka because obviously Parent ko child ke methods ka access nahi milta
// Yash.logMe()

// console.log(Mayank === Yash); // false 
// console.log(Mayank === Teacher); // false 
// console.log(Mayank instanceof Teacher); // true
// console.log(Mayank instanceof User); // true

// behind the scenes 

function User(username){
    this.username = username
}

User.prototype.logMe = function(){
    console.log(`The username is : ${this.username}`);
}

function Teacher(username,email,password){
    User.call(this , username)
    this.email = email
    this.password = password
    // __proto__: User  // only available inside object literals
}

Teacher.prototype.addCourse = function(){
    console.log(`New course was addded by : ${this.username}`);
}

Teacher.prototype = Object.create(User.prototype); // inherit user's prototype
//or
// Object.setPrototypeOf(Teacher.prototype, User.prototype);

// Object.setPrototypeOf(Teacher.prototype, User.prototype); // instance chain
// Object.setPrototypeOf(Teacher, User); // static chain


const Mayank = new Teacher('Mayank','mayank@gmail.com','123')

Mayank.addCourse()

const Yash = new User("Yash")

Yash.logMe()