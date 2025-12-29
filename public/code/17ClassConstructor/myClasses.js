// ES6

// class User{
//     constructor(username,email,password){ // Jaise hi class se ek object initialize hoga (new keyword jaise hi kaam mai loge) vaise hi constructor apne aap call ho jata hai
//         this.username = username
//         this.password = password
//         this.email = email
//     } 

//     encryptPassword(){ //kyuki class hai toh sidha method declare kiya no need of writing function
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const mayank = new User("Mayank","may@33.com","123")
// console.log(mayank.encryptPassword());
// console.log(mayank.changeUserName());

// Behind the scene 
function User(username,password,email){
    this.username = username
    this.password = password
    this.email = email
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const yash = new User("Yash","123","yash@123.com")
console.log(yash.changeUserName());
console.log(yash.encryptPassword())
