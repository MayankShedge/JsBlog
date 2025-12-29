const myArr = []
// %DebugPrint(myArr)

// continious(packed bhi bolte hai isse) , Holey --> 2 types of arrays
// Holey arrays - jinke andar holes hai

// Arrays ka optimization hota hai , Js mai 3 type ke Optimizations hote hai 
// SMI(Small integer) - Sabse best type of array hai(par isme restrictions aate hai ki iske elements sirf numbers le sakte ho not even decimals)
// Packed elements 
// Double(float,string,function)

// Based on hamare array ke andar elements kya hai aur vo kis position pe hai internally js usko bht optimize karta hai

// Agar kuch cases mai 0,1,3 pe elements hai aur 2 pe nahi hai toh array mai ek hole hai toh iska alag optimization hoga (based on usme numbers hai ya string hai)

// Array mai jo bhi chize rakhi jati hai technically unhe elements bolte hai 

// Optimization wise weihtage - 
// Packed(continious) > Holey
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

// remember hamne ek baar agar optimization ko downgrade kar diya toh vo vapis se upgrade optimize nahi ho paega ye almost impossible ho jata hai

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS - ye array ka default type hai jisme sabse jyada performance optimization dikhai deti hai

const arrThree = [1,2,,4,5]
// HOLEY array

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS - 6.0 iske andar ek double value aa gai hai

arrTwo.push('7')
// PACKED_ELEMENTS - '7' isme ye string bhi aa gaya ab kyuki

arrTwo[10] = 11
// HOLEY_ELEMENTS - SMI ya double nahi kyuki isme 6.0(double) aur '7'(string) bhi present hai. Ye ab continious(packed) bhi nahi hai kyuki isme gap bhi aa gaya hai elements mai 

console.log(arrTwo); //[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ] --> <3 empty items> - isne Holey banaya hai hamare array ko
console.log(arrTwo.length);
console.log(arrTwo[9]); // undefined 

// Array koi bhi element ki index ko find kaise karta hai?
// 1. bound check - array jaha se start hora hai aur jaha pe end hora hai (ya utni length hai uske bahar jara hai toh ye hit hoga)
// 2. hasOwnProperty(arrTwo,9) -- ye koi property toh nahi hai jisse 9 pe undefined aara hai
// 3. hasOwnProperty(arrTwo.prototype,10)
// 4. hasOwnProperty(Object.prototype,10)
// hasOwnProperty() -- one of the most expensive checks Js ke andar 

// holes are very expensive in Js

const arrFour = [1,2,3,4,5]
console.log(arrFour[8]);

// ab yaha kaam asan hai kyu 2 steps honge bas 
// 1. bound check - 8th element hai toh out of bounds aaega so stop
// 2. if arrFour[2] bolte toh bound check false aata ham check karte 2nd index pe kya hai and we just return it

const arrFive = new Array(3)
// just 3 holes . HOLEY_SMI_ELEMENTS

arrFive[0] = '1' // ab ho gaya HOLEY_ELEMENTS
arrFive[1] = '2' 
arrFive[2] = '3' 

// Ab ham strings ko toh hata nah sakte the requirement thi par hamne jo const arrFive = new Array(3) isse initially ek holey array banaya vo ham sudhar sakte the 

const arrSix = [] // ye optimization kar sakte the yahape we would have had got SMI instead of HOLEY_SMI
// iske baad ham har index pe bas push kar sakte the 
arrSix.push('1') // PACKED_ELEMENTS
arrSix.push('2')
arrSix.push('3')

const arrSeven = [1,2,3,4,5]
arrSeven.push(NaN) // DOUBLE

// for , for-of , for-in , forEach --khudse ye sab banane ke jagah inko prefer kare kyuki browser ne inko bht sare jagah optimized ho rakha hota hai