class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }


    // Ye sara naya syntax hai ( yaha sidha get aur set methods available hai kyuki class hai toh uske saath aate hai get aur set methods )

    // for a property if you define getter toh setter bhi define karna hi padega 
    get password(){ // class ke bahar se koi value get karna chate ho toh isiliye getter hota hai
        return this._password.toUpperCase() // user ko usse dete vakt ham usse change kar denge 
    }

    // getters mai hamesha koi value bhejni padegi toh hamesha return aaega (bhale hi empty value kyu na bhejre ho)
    get email(){
        return this._email.toUpperCase()
    }

    // class ke bahar koi value ko set karna chate ho toh isiliye setter hota hai
    set password(value){ // Ab setter hai aur hamesha value set karega toh hamesha usme value dalni padegi hi
        // this.password = value // yahape agar ham yaha bhi value set karenge toh baar baar set ho jaegi iski value jo dikkat degi (constructor bhi set karra hai aur yaha bhi ham set karre hai) iske karn iske aur constructor ke bich ek race lag jati hai jisse "Maximum call stack size reached" aata hai

        // toh iski value actually mai set kaise kare ? toh password set karte time yahape ek nayi property hi bana lijiye 
        // values jo set hori hai password ki vo getter aur setter se hori hai
        this._password = value // value db mai asal store hogi ye vali
        // ab ye jaise hi kiya toh pehle get sahi se chalra tha ab vo bhi error dega "Maximum call stack size reached" toh vaha bhi naya variable daldo
    }

    // setter mai ham value ko nahi bhejte hai toh return nahi aaega 
    set email(val){
        this._email = val
    }
}

const mayank = new User("mayank0@gmail.com","123")
console.log(mayank.password);

// Kahi baar hame fine grain control chaiye hota hai ki koi bhi mujhse password puche toh mai usse return karu ki password is encrypted

// Suppose mai kisiko password ka access dena hi nahi chata?


/*
//  Summary:
// Yahape getter aur setter use karke class ke properties (email, password) pe 
// fine control milta hai — jab koi .email ya .password access kare, to 
// getter function auto-run hota hai (value read karne ke liye), 
// aur jab koi naye value set kare to setter function run hota hai (value store karne ke liye).

//  Important: 'this.password = value' directly setter ke andar likhne se 
// recursion lag jaata hai (getter–setter ek dusre ko baar-baar call karte hain),
// isiliye naya internal variable (_password, _email) use kiya gaya hai 
// taaki actual value safely store ho sake bina loop ke.

//  Is approach se hum data encapsulation achieve karte hain — 
// user ko sirf processed (e.g., uppercase ya encrypted) value milti hai, 
// par original value safely class ke andar hi rehti hai.


Getter–Setter data ko directly expose nahi karte, balki uske upar ek controlled layer dete hain — jahan tu decide karta hai value kaise read/store hogi.
*/