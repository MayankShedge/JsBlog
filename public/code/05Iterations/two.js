// While loop tab use hota hai jab apneko malum na ho kitne baar apna program repeat hoga ya basically hame program kaha tak execute karna hai uski value pehle se pata nahi hai
let index = 0
while (index <= 10) {
    // console.log(`Value of index is : ${index}`);
    index = index + 2;
}

let myArrDC = ["flash","batman","superman"]
i = 0
while (i < myArrDC.length) {
    console.log("The heros are :" + myArrDC[i]);
    i++
}

//Do while - Ye atleast once execute hota hi hai iski speciality hai kyuki condtion last mai check hoti hai
// j = 0
// myArrMarvel = ["Thor","Captain America","IronMan"]
// do {
//     console.log("The heros are :" + myArrMarvel[j]);
//     j++
// } while (j < myArrMarvel.length);

// Iss case mai issue aaega as we can see kyuki array empty pass hua hai aur hamne last mai check kiya is arr.length < j but usse pehle loop execute ho gayi
j = 0
myArrMarvel = []
do {
    console.log("The heros are :" + myArrMarvel[j]);
    j++
} while (j < myArrMarvel.length);