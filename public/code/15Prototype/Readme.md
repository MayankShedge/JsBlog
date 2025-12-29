
---

# 💥 PART 1 — “Prototype” kya hota hai?

Tu already likh chuka hai 👇

> Prototype ek behaviour hai jo JS show karti hai while execution — for prototypical inheritance.

Bilkul sahi ✅

Bas ye samajh le:
👉 Har **function**, **array**, **object**, **string** — sabke paas ek **prototype chain** hoti hai.
Aur ye chain basically batati hai —

> “Agar mujhe koi property ya method nahi milta, to mai upar ke prototype se poochh lunga.”

Example:

```js
const arr = [1,2,3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
```

So chain = `Array → Object → null`

That’s what we mean by “JS haar nahi maanti” 😄
Ye **upar tak jaati rehti hai jab tak null na mil jaaye.**

---

# 💥 PART 2 — “Function bhi Object hai” (ye sabse important hai)

Dekho tu likh raha hai:

```js
function multiplyByFive(num) {
    return num * 5;
}
multiplyByFive.power = 2;
```

Ab ye possible kyu hai?
Kyuki JS me **function bhi ek object** hota hai!
Matlab uske andar properties add kar sakte ho — jaise kisi object me karte ho.

Isliye ye likhna valid hai:

```js
console.log(multiplyByFive.power); // 2
```

---

# 💥 PART 3 — Prototype property ka use (real magic)

Jab tu `function` banata hai, to JS automatically uske andar ek **hidden property** add karti hai —
called `prototype`.

```js
console.log(multiplyByFive.prototype);
// 👉 { constructor: ƒ }
```

Ab tu chahe to uske andar custom methods add kar sakta hai:

```js
multiplyByFive.prototype.sayHello = function() {
    console.log("Hello from prototype!");
};
```

Ab koi bhi object jo is function ke through bana ho,
wo ye method access kar sakta hai.

---

# 💥 PART 4 — `createUser` ka scene (aur yahan sab milta hai)

Tu likh raha hai:

```js
function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}
```

Chal samajhte hain ye line by line —
lekin pehle ek zaruri baat:

### ⚙️ Jab tu `new` lagata hai, ye 4 kaam hota hai:

1️⃣ Ek **naya empty object** banta hai
2️⃣ Us object ko link milta hai `createUser.prototype` se
3️⃣ Function ke andar ka `this` ab us naye object ko point karta hai
4️⃣ Function execute hota hai → uske andar properties set hoti hain
5️⃣ Ye **naya object automatically return** hota hai

---

### 🧠 Flow visualize kar:

```js
const yash = new createUser("Yash", 25);
```

➡ Step 1: `new` ek naya empty object banata hai
`{}`

➡ Step 2: us object ka prototype link ho jaata hai `createUser.prototype` se
`{ __proto__: createUser.prototype }`

➡ Step 3: `this.username = username;` matlab
`this` = naya object → so object.username = "Yash"`

➡ Step 4: Ab function khatam → naya object return ho gaya.

---

To ab jab tu likhta hai:

```js
yash.increment();
```

* JS check karega kya `increment` yash ke andar milta hai? ❌
* Nahi mila → to check karega `yash.__proto__` me (yaani `createUser.prototype`)
* Wahan mila ✅ → run kar diya.

So chain:

```
yash → createUser.prototype → Object.prototype → null
```

---

# 💥 PART 5 — `this` lagana kidhar hai aur kidhar nahi

⚙️ Rule:
**Jab tu constructor function ke andar ho, `this` us object ko point karta hai jo “new” se bana hai.**

So:

```js
function createUser(username, score) {
    this.username = username; // current user ka naam set karega
    this.score = score;       // current user ka score set karega
}
```

Ye likhna zaruri hai, warna JS nahi samjhega kis object ke andar property daalni hai.
(Without `this`, wo sirf ek local variable ban jaayega aur bahar gayab ho jaayega.)

---

# 💥 PART 6 — Prototype manually banana kyu zaruri hai?

Dekho, jab tu **constructor function** banata hai,
to har instance (user, yash, mayank) ke paas apne **individual data** hone chahiye —
par **common methods** (like `.increment()` or `.printMe()`) har user ke liye alag se memory me copy karna bekaar hai.

Toh humne kya kiya —
Unhe function ke prototype me daal diya.

Now:

* `yash` aur `mayank` dono `.increment()` use kar sakte hain,
* par function memory me ek hi copy hoti hai (efficient 🚀)

---

# 💥 PART 7 — Tu poochha tha:

> “.prototype hame declare kiya kyuki function pe ek prototype declare kar sake right?”

✅ Bilkul sahi.
Har function ke paas ek `prototype` hota hi hai —
par wo initially empty hota hai.
Tu usme apne methods daal sakta hai manually.

Aur arrays, strings ke case me — unka prototype JS khud set karta hai:

```js
myArr.map() // map() = Array.prototype.map
```

Matlab `map()` array ke object me nahi hota,
wo `Array.prototype` me hota hai —
par array apne prototype chain ke zariye usse access kar leta hai.

---

# 💥 PART 8 — Ek final summary table:

| Concept         | Meaning                                          | Example                                  |
| --------------- | ------------------------------------------------ | ---------------------------------------- |
| `this`          | Current object jiske andar value set ho rahi hai | `this.username = "Yash"`                 |
| `prototype`     | Shared space for methods (memory efficient)      | `createUser.prototype.increment`         |
| `new`           | Creates object + binds `this` + links prototype  | `const u1 = new createUser("Mayank",30)` |
| Prototype chain | Object inheritance path                          | `User → Object → null`                   |

---

# 💥 Visual Flow (Simplified)

```
function createUser(){}    --> has prototype {}
         |
         | new keyword used
         ↓
   yash = { username: "Yash", score: 25 }
         ↑
         |
   yash.__proto__ --> createUser.prototype
```

To jab tu `yash.increment()` likhta hai, JS:
1️⃣ Pehle yash me dhundta hai → nahi milta
2️⃣ Phir createUser.prototype me jata hai → milta hai ✅

Aur wahi se method run ho jaata hai.

---

