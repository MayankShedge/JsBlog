const user = {
    _email: 'm@m.com',
    _password: "abc",

    get email(){ // get ek special keyword hai jo hamare email property pe work karra hai( isse lene dena nahi ki hamne ye property private kar rakhi hai by _email,_password ya nahi)
        // ye jo process overwrite karra hai vo hai usse memory se leke(get) aane ka aur memory mai chodke(set) aane ka.
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// factory function
const tea = Object.create(User)
console.log(tea.email);

/*
 👉 Even though '_email' is the real property, 'email' is accessed through the getter.
When we write 'tea.email', JS doesn't directly access '_email'.
Instead, it calls the 'get email()' function automatically —
which internally returns 'this._email.toUpperCase()'.
So .email looks like a property, but it actually runs a function behind the scenes.

get email() ek virtual property bana deta hai jisko access karte hi function call hota hai —
aur vo function return karta hai _email ka value (ya jo bhi logic tu likhe).
*/