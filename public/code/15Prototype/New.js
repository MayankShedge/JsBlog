// Prototype ek behaviour hai jo Js show karti hai while it's execution specially for prototyipical inheritance
const newHero = ["hulk","spiderman"]

// jab ham iss newHero ko browser mai dekhne ki koshish karenge toh vo hame by default ek prototype property object deta hai

// Js ka behavoiur hai prototypical behaviour i.e Js haar nahi manti itna jaldi , matlab agar usse koi chiz nahi milri jo ham dhudna chah rahe hai ya toh voh aur uske layer ke upar jati hai to check access karke parents , grand parents , great grand parents etc jab tak usko. null value na mil jaye
// Isi behavior se linked hoke this keyword bhi kaam karta hai
// Isi nature ko prototypical behaviour kehte hai
// Toh agar dekhe isi mai toh ye rukega kab? ye rukta hai jab null milega
// Array --> Object --> null
// String --> Object --> null
// Toh end of the day ham ye keh sakte hai Js mai har ek chiz ek object hai aur jo sari properties available hai vo sari array aur string ke pass bhi hai available 
// Har function ko .prototype object milta hai jo start mai jab vo func initialize hoga vo empty hoga aur usme ham apne prtotoypes define karke add kar sakte hai
// Note that for object __proto__ ye hhota hai prototype object ka naki .prototype ye sirf functions ke liye hota hai
// Eg :- myArr = [1,2,3]
// console.log(myArr.__proto__);

function multiplyByFive(num){
    return num*5
}

multiplyByFive.power = 2 // Kyuki function bhi ek object hota hai isiliye uske andar properties add kar sakte ho — jaise kisi object me karte hai.

console.log(multiplyByFive(5));
console.log(multiplyByFive.power); // Ye object behaviour bhi karva sakte hai iss tarike se ham
console.log(multiplyByFive.prototype); // Kyuki yahape function ek object hai aur object ka prototyoe is null
// By default kuch context set hote hai , toh by default jo context set hota hai prototype ka vo iss method ka this hai
// Jo prototype hota hai vo sirf methods nahi kuch internal properties bhi deta hai. Toh aur bhi jo prototype ki properties hoti hai + this ka context hamare isme available hota hai

// Toh function bhi function bhi hai aur object bhi hai (end mai har chiz jake milti hai object se)
// Toh sab kuch jake object se milta hai until object is reached kyuki object se null hi milega (object ka prototype is null)

// Ham yahape harcoded values se bhi bana sakte the but phir suppose n no of users hai toh isme dikkat aa jaegi hame har ek ke liye ye repeptetive task karna padega 
// TOh ham yahape ek user banaya aur ab ham isse duplicate kar sakte hai n number of times 
function createUser(username,score){
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ //. jisne bhi usse bulaya hai ye usse ka value increase karega 
}

createUser.prototype.prinntMe = function(){
    console.log(`Score is ${this.score}`);
}

const yash = new createUser("Yash",25) // Ab new keyword jo hai vo hame access dega jo hamne new properties banayi hai uska.
// ye create karega ek empty object jaise hi new lagaenge iske aage 
// Then yash.__proto__ point karne lagega createUser.prototype
// jo bhi properties defined hai createUser mai with .this vo sabka access mil jaega yash ko
// Lastly jab ham yash.printMe() karenge ab iske pass this.score ka access hoga createUser() context mai jo pada hai uske so ye usse access karke function execute kar dega
// Remember failing to use new will deny or not provide us access to the score and username present in createUser() ka context (iss case mai ye global Object ko point karega yani window ya empty object)

// Agar new ke bina yash.printMe() kiya toh voh error throw karega cannot define properties of undefined kyuki iske bina properties jo banayi hai hamne nayi vo nahi milegi yash ko aur yahi new hame ye lake deta hai
const mayank = new createUser("Mayank",30) // ab iss createUser ko kaise pata ki kiska score badhana hai .increment se kyuki .increment pure createUser pe chalra hai
// Iss case mai yahape context nahi hai createUser ke pass ki kisse increment karna hai(usse idea nahi hai kaise ya kis value ko increment karna hai yash ke score ko ya mayank ke)

// console.log(createUser.prototype);

yash.prinntMe() // iss case mai Js khud dhund lega prototype apne prototypical inheritance se 

// new keyword 

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/

/*
Upar ka sentence thoda heavy lag sakta hai uska easy explanation -->

// -------------------------------
// 🔥 What happens when we use `new` in JavaScript
// -------------------------------

function CreateUser(username, score) {
    // Step 3️⃣ -> 'this' ab naye empty object ko point karega
    this.username = username;
    this.score = score;

    // (No return statement needed — JS khud 'this' return karega)
}

// Step 1️⃣ -> Jab hum 'new' keyword lagate hain
const user1 = new CreateUser("Mayank", 50);

/*
Behind the scenes:

1️⃣ JS ek naya empty object banata hai:
    let this = {}; 

2️⃣ Us naye object ka prototype link set hota hai:
    this.__proto__ = CreateUser.prototype;

   👉 Iska matlab:
      - Ab user1 ke paas access hai CreateUser.prototype me
        likhe hue sab methods ka.
      - Agar user1 ke andar koi property nahi mili, JS 
        automatically prototype me dhundhegi.

3️⃣ Ab CreateUser function call hota hai:
    CreateUser("Mayank", 50)

   Aur andar likha 'this.username' aur 'this.score'
   us naye object me add ho jaata hai.

4️⃣ Function ke end me agar kuch manually return nahi kiya gaya,
   to JS khud hi return karti hai wo naya object.

   return this;

So final object looks like 👇

user1 = {
  username: "Mayank",
  score: 50,
  __proto__: CreateUser.prototype
};



console.log(user1.username); // "Mayank"
console.log(user1.score);    // 50
console.log(user1.__proto__ === CreateUser.prototype); // true ✅


// -------------------------------
// 📘 Extra Example — Add methods via prototype
// -------------------------------

CreateUser.prototype.increment = function() {
    this.score++;
};

CreateUser.prototype.printMe = function() {
    console.log(`${this.username} has score: ${this.score}`);
};

user1.increment();
user1.printMe(); // Mayank has score: 51 ✅


// -------------------------------
// 💡 In short (super simple version)
// -------------------------------

/*
1️⃣ new -> ek khali object {} banata hai
2️⃣ uska __proto__ link karta hai function ke prototype se
3️⃣ function ke andar jo this likha hai wo us object ko point karta hai
4️⃣ function khatam hone pe wo naya object return hota hai -- remember this 


// -------------------------------
// ⚠️ If you forget 'new':
// -------------------------------

const user2 = CreateUser("Yash", 20); 
console.log(user2); // undefined ❌
// aur 'this' ab global object (window/global) ko point karega — dangerous!
*/

myArr = [1,2,3]
console.log(myArr.__proto__);

// WHAT IS CONSTRCUTOR?
// A constructor is a **special function** that **automatically runs** when you **create an object using the new** keyword.

// Internally JS ye steps follow karti hai:
// 1️⃣ Create an empty object {}
// 2️⃣ Set __proto__ link → constructor.prototype // Js classes ke through constuctor funcs nahi deti ye new keyword ke through deti hai 
// 3️⃣ Bind `this` to the new object
// Calls the constructor
// 4️⃣ Execute constructor body (assign properties)
// 5️⃣ Return the new object

