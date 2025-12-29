// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username : ${this.username}`);
//     }

//     static createId(){ // Uss method ya keyword ko access karne se rok leta hai 
//         return `${Math.floor(Math.random() * [100-20] + 1)}`
//     }
// }

// const Mayank = new User('Mayank')
// // Mayank.createId()
// // console.log(Mayank.createId());

// class Admin extends User{
//     constructor(username , email){
//         super(username)
//         this.email
//     }
// }

// const iPhone = new Admin('IPhone','i@mac.com')
// console.log(iPhone);
// iPhone.logMe()
// iPhone.createId()

// behind the scenes
// Function-based equivalent of class User
function User(username) {
    // constructor ka kaam — object create hote hi ye chalega
    this.username = username;
}

// Method jo sab instances share karenge
User.prototype.logMe = function() {
    console.log(`Username : ${this.username}`);
};

// ✅ Static method — class ke constructor pe attach hota hai, instance pe nahi
User.createId = function() {
    return `${Math.floor(Math.random() * (100 - 20) + 1)}`;
};

// Function-based equivalent of class Admin
function Admin(username, email) {
    // Parent constructor call (super)
    User.call(this, username); // same as super(username)
    this.email = email;
}

// Instance-level inheritance (Admin → User)
Object.setPrototypeOf(Admin.prototype, User.prototype);

// Static-level inheritance (Admin → User)
Object.setPrototypeOf(Admin, User);

// ✅ Example usage
const iPhone = new Admin('IPhone', 'i@mac.com');
iPhone.logMe();        // ✅ from User.prototype
Admin.createId();      // ✅ from User constructor (static)
iPhone.createId();     // ❌ not available on instance
