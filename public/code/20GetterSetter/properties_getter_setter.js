//. Ye ho gaya function based getters aur setters 

function User(email,password){
    this._email = email
    this._password = password

    // As we know ki function ek object ke jaise bhi behave karta hai in Js toh ham uske object ki properties ko call kar sakte hai
    Object.defineProperty(this, 'email' , {/* iske andar aata hai object , jo properties yaha define karna chate ho kar sakte ho */
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    }) // ye defineProperty hai vo actually getters aur setters hi property hai. Isse usekarne ka tarike ka hai pehle ise do context (this) kyuki iska this point karega global empty object aur konsi property ham overrite karna chate hai ye 2 denge 

    Object.defineProperty(this, 'password' , {
        get: function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password = value
        }
    })
}

const yash = new User("yash@ai.com", "abc")
console.log(yash.email);
console.log(yash.password);

/*
// 👇 Ye function-based getter aur setter ka example hai.
// Yahape 'Object.defineProperty()' ka use karke manually get aur set functions banaye gaye hain.
// Jab bhi 'yash.email' likhoge to ye 'get' function ko call karega aur value return karega (uppercase mai).

// 👇 Isme 'this' current object ko refer karta hai, aur 'email' / 'password' wo properties hain
// jinke liye hamne get aur set ka logic likha hai (yaani value kaise leni hai aur kaise store karni hai).


Yahape Object.defineProperty() manually getters aur setters banane ka tarika hai —
jab .email ya .password access hota hai, JS actually unke andar likhe get / set functions run karti hai.
*/
