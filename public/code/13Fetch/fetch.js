// Fetch ek bohot exciting feature hai node js ke andar jo kafi easy bana deta hai web requests bhejna ya API calls bhejna
// As the web grew it became hard to work with XMLHttpRequest kyuki itne sare states ( 5 states ) track karna , callback hells , async banana ye sab issues face hore the 

// Ab XMLHttpRequest ne fetch API de rakha tha functionality in 2015 but node ne ye include nahi kara tha due to kuch limitations. Inmese 2 main reasons the ki 1. Web pe bht jyada dependent tha (Nodejs mai browser available hai nahi ) 2. AbortController

// Fetch kya hai? Fetch ek global fetch() method hai jo process ko start karta hai kisi bhi resource ko fetch karne ke liye network ke upar aur promise return karta hai jo fulfil hota hai once the response is available 
// Point to be noted :- agar ek promise ko 404 error response state aaya toh voh usse kaha milega ? Vo usse response mai milega naki reject mai kyuki vo error nahi hai , error tab hi milega jab request kar hi nahi paya hai browser 
// Toh basically promise promise reject karta hai sirf jab network error encounter hota hai (jo hota hai usually jab koi permission issue ya similar issues hai). Promise reject nahi hoga on HTTP errors(404,etc) 
// Instead then() operator ko check karna chaiye Response.ok ya Response.status properties

// Kyuki fetch ka response type promise hai ham sidha ispe .then laga sakte hai
fetch('https://api.github.com/users/MayankShedge')
.then((response) => {
    return response.json() // yahape pehle hamne apne string ko json mai convert kar diya aur phir usse return kiya 
})
.then((data) => { // As we had learnt previous step ka data access karne chain .then() laga diya
    console.log(data); // upar jo data ko string se json mai convert kiya usse yahape display kardo aur agar aage aur operations karne hai iske andar toh aur chaining kar sakte hai
    return data.followers
})
.then((followers) => {
    console.log(followers);
})
.catch((err) => {
    console.log(err); // same jaise promise mai error handle karte the with catch
})
.finally(() => {
    console.log('The promise is either resolved or rejected'); // Last mai default mai kya run hona chaiye vo 
})

/*

Ok toh kuch videos pehle hamne kuch learning ki thi in AsyncFundamentals regarding the async functions execution

- Ab isme we had noted ki jo kuch functions the vo Web APIs ko call karte the aur phir unka callback register hota tha aur ye phir callback queue mai daal dete the and then inko dala jata tha into the stack 
- Par isme fetch() ko ek alag queue mai dala jara tha Microtask queue y promise queue , jo thi high priority queue jiske karn fetch API as seen in last code also ki ye setTimeut , setInterval ye sab se pehle chalega 
- fetch se jo bhi kaam hota hai vo calllback queue ke andar aata hai aur kyuki ye promise queue hai toh iss queue ki priority sabse jyada hoti hai toh sabse pehle ye call stack mai add honge 

1️⃣ Global Memory Creation

Jab JS code run hota hai, ek Global Execution Context banta hai.

Uske andar sab variables store hote hain (Global Memory / Global Scope).

Yahan:

response = fetch('something')


likhne par response variable global memory me ban jaata hai.

🧠 Initially:

response = <pending Promise>


kyunki fetch() asynchronous function hai.

2️⃣ fetch() — Goes to Web APIs (Browser / Node environment)

fetch() JavaScript Engine (V8) ka part nahi hai.

Ye Web API (browser) ya libuv (Node.js) ke through handle hota hai.

So JS Engine kehta hai:

“Main wait nahi karunga, tu ja browser se request kar aur jab data mile to mujhe batana.”

Toh:
→ fetch() background me network request initiate karta hai
→ JavaScript thread aage ka code execute karne lagta hai (non-blocking)

3️⃣ Network Request Phase

Now Web API ne server ko request bheji:

Agar server se response aata hai → ✅
→ Promise fulfilled (resolved) hoga

Agar network fail hota hai (internet off, server down) → ❌
→ Promise rejected hoga

Yahi tumhare diagram me green ✅ aur ❌ circles se dikhaya gaya hai.

4️⃣ Once done → Data Ready (Promise Settled)

Fetch jab complete ho jata hai,
browser ek callback (promise resolution) register karta hai with the microtask queue (Promise queue).

Ab ye pending promise update hota hai:

Agar success → state = fulfilled

Agar fail → state = rejected

🧠 So ab:

response = Promise { state: 'fulfilled', value: <Response Object> }


Ya agar error:

response = Promise { state: 'rejected', reason: <Error Object> }

5️⃣ Event Loop Checks

Event Loop continuously dekhta hai:

“Kya call stack khali hai?”

Jaise hi call stack khali hoti hai,
event loop microtask queue (Promises) check karta hai
aur .then() / .catch() handlers ko execute karta hai.

6️⃣ Data Consumption

So jab fetch() resolve hota hai,
data Promise ke “fulfilled value” ke form me aata hai:

response
  .then((data) => { console.log(data); }) // ✅ on fulfillment
  .catch((err) => { console.log(err); })  // ❌ on rejection


Yahi tumne diagram me likha hai:

onFulfilled [ ] - resolve
 
onRejection [ ] - reject

Ye array mai hame values push karna allowed nahi hai kyuki ye hamare range mai hi nhi hote( non accessible private field ) even data bhi

Ye dono basically .then() aur .catch() ke callback queues ko represent karte hain.

Ye data field jo present hai vo initially empty hoga aur jab onFulfilled[ ] ya onRejection[ ] receive karenge kucgh vo isme store kar denge vo(either data or error)

Ab iss data field ko uthake response mai uska answwr store kiya jaega 

7️⃣ Final Flow Summary
JS (Global Memory)
   ↓
response = fetch('something')
   ↓
WEB API (network request)
   ↓
 ┌───────────────┐
 │ Success  ✅   │ → Promise resolved → .then() callback → microtask queue
 │ Failure  ❌   │ → Promise rejected → .catch() callback → microtask queue
 └───────────────┘
   ↓
Event Loop brings result back → executes onFulfilled/onRejection
   ↓
Global Memory updates → response settled

🧠 Concept Recap
Step	Stage	Description
1	Global Memory	Variable response created
2	Web API	fetch() delegated to browser
3	Network Request	Background async task starts
4	Response Arrives	Promise fulfilled / rejected
5	Microtask Queue	Promise callbacks queued
6	Event Loop	Moves callbacks to call stack
7	Execution	.then() or .catch() runs
💬 So your diagram basically shows:

fetch() → Web API handle karta hai

Result → Promise me stored hota hai

.then() / .catch() → “fulfillment” ya “rejection” ke time execute hote hain

Event loop ensures → ye tabhi chale jab main thread free ho

*/