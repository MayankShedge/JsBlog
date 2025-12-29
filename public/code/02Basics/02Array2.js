const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","wonderwoman"]
// marvel_heros.push(dc_heros) //Array ke andar array aa jaega
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

let all_heros = marvel_heros.concat(dc_heros) // remember isse ek naye array mai store karna pada kyuki ye return karta hai ek new array
// console.log(all_heros);

//Spread operator - expand ya spread out karne allow karta hai elements ek iterable datatype(array,objects ya string) 
//Merging 2 arrays with spread operator 
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

//Adding Elements to Arrays
const initialArray = [1, 2];
const newArray = [0, ...initialArray, 3, 4]; // newArray is [0, 1, 2, 3, 4]

//Passing Array Elements as Function Arguments: 
const numbers = [10, 20, 5];
const maxNumber = Math.max(...numbers); // maxNumber is 20

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array = anotherArray.flat(Infinity) //Jo nested arrays hai unko hatake sabko 1 array mai daal dega
console.log(usable_another_array);

// jab ham data select ya scrape karte hai kisi web page se toh vo kafi alag format mai aata hai(nodelist , string , object) par hame chaiye array tha
console.log(Array.isArray("Mayank"))

//convert karne ke liye
console.log(Array.from("Mayank"))

console.log(Array.from({name: "Mayank" , age: 22})) //isme specify karna padega keys ka array chaiye ya pairs ka ya kisi aur ka else empty array return karega

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //ek neew array return karega from set of elements

