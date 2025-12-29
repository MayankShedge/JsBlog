// for loop
for (let i = 0; i <= 10; i++) {
    const element = i
    if (element === 5) {
        // console.log("This is 5th index");
    }
    // console.log(element)
}

for (let i = 0; i <= 3; i++) {
    const ele1 = i;
    // console.log(`Outer loop value : ${ele1}`);
    for (let j = 0; j <= 3; j++) {
        const ele2 = j;
        // console.log(`Inner loop value : ${ele2}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArr = ["flash","batman","superman"]
// console.log(myArr.length);


for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// Some important keywords break and continue
// for (let index = 1; index < 20; index++) {
//     if (index === 7) {
//         console.log(`${index} is my favorite number`);
//         break; // As soon as 7 comes the entire loop is skipped and bahar chala jata for loop se
//         // kisi bhi control flow ko break karke uske bahar exit karna hai toh break likhte hai
//     }
//     console.log(`Value of iindex is ${index}`);
// }

for (let index = 1; index < 20; index++) {
    if (index === 7) {
        console.log(`${index} is my favorite number`);
        continue; // As soon as 7 comes this time the particular index is skipped from the loop and rest of the loop continues
        // kisi bhi ek condition ko ignore karke aage as it execution karne(skip)
    }
    console.log(`Value of iindex is ${index}`);
}