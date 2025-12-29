const myObj = {
    js: 'javascript',
    cpp: 'CPP',
    rb: 'Ruby',
    java: "Java"
}

// For in loop
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ['js','cpp','java','c','python']

for (const key in programming) {
    // console.log(key); //. yahape keys aa jaegi matlab array ke case mai index
    // console.log(`${key} index is for ${programming[key]}`);
}

const greetings = "Hello World"

for (const key in greetings) {
    // console.log(`${key} of the main word ${greetings[key]}`);
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")
// map.set('IN',"India") // ye add nahi kiya map ne as it is a duplicate 

// for (const key in map) {
//     console.log(key);
//     // console.log(`${key} index is for ${map[key]}`);
// }

