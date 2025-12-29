// Array specific loops 

// for of loops
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // To skip the blank space
    // if (greet === " ") {
    //     continue;
    // }

    // To stop after blank space appears
    if (greet === " ") {
        break;
    }
    // console.log(`Each charecter is ${greet}`);
}

// Maps - object which holds key value(value halaki duplicate bhi ho sakti hai but keys should be strictly unique) pair and remembers the original insertion order of the keys. 
// Isme koi duplicate values hoti nahi hai sari unique keys milti hai 
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India") // ye add nahi kiya map ne as it is a duplicate 
map.set('IND',"India") // ye add kiya jaega map me as it has a unique key although it's value is pre existing 

console.log(map);

for (const [key , val] of map) {
    // console.log(key + ":-" +val);
}

// For of on object
let myObj = {
    game1 : "NFS",
    game2 : "TOD"
}

// Ye kaam nahi karra hai map is not iterable bolta hai so we use forin loop instead of forof loop for maps
// for (const [key , val] of myObj) {
//     console.log(`game id is ${key} and name is ${val}`);
// }