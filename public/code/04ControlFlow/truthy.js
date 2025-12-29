// const userEmail = "mayank@ai"
// const userEmail = ""
const userEmail = []

//yahape notice karna ki hamne koi condition check nahi kari ya kuch aisa nahi karra jisse apan kuch check kar paye ki trrue hai ya nahi condition
//Yahape agar email mai ek valid string ya koi value hai toh isse true maan ke ham aage badh jaenge aur iss scope mai ghus jaenge 
//note karna if string empty hai toh ye loop execute nahi hogi instead else block mai code jaega
if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Do not have user email");
}

/*
falsey values :
false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

Truthy values (most of the expected values which aren't amongst the above ones are truthy but some ay suprise us)
"0" , "false" , " " , [] , {} , function(){}
*/

// to handle that the passed array is not empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// to handle empty oject 
const emptyObj = {}
 
if (Object.keys(emptyObj).length) { //Keys ki ek array banali and then uski length check karli ki empty hai kya
    console.log("Object is empty");
}

// false == 0 , false == '' & 0 == '' ye teeno true values hai

// Nullish Coalescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10
//Jab database se kuch call karte hai ya firebase/appwrite ka use karte hai toh hame directly kabhi values nahi milti toh aisa ho sakta hai values null aa jaye ya kabhi receive ho hi na(undefined) toh uss case mai pura code structure disturb ho sakta hai
//Toh iss cases ke liye ye design kiya gaya hai ki null ho ya undefined ho toh usse handle karlo

val2 = null ?? 10 //null ke basis pe safety check kare
val3 = undefined ?? 15 // undefined ke basis pe safety check

val4 = null ?? 10 ?? 15 // Jo first value milegi vo assign ho jaegi

console.log(val1);

//Ternary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
;
