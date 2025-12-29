//Js mai arrays resizable hote hai aur inme ham jaruri nahi ki same data types ke values store kare i.e different datatypes values bhi store kar sakte hai
// Ek aur point ki array associative nahi hote i.e array elements ko access nahi kar sakte use karke arbitary strings and indexing is zero based(obvious like all other languages)
//Jab bhi Js mai array pe copy operations karenge toh voh shallow copies banata hai(call by reference) 
//Aise hi deep copies signify karta hai call by value
const myArr = [0 , 1 , 2 , 3 , 4]
// console.log(myArr[0]);

// const myHeros =["krish","shaktiman"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[3]);

//Array Methods
myArr.push(6) // add value at the end
// console.log(myArr);

myArr.pop() // remove the last element from the array
// console.log(myArr)

myArr.unshift(0) // ek value insert karo at start shift karke baki sair values array ki to right
// console.log(myArr)

myArr.shift()
// console.log(myArr); //remove from start

// console.log(myArr.includes(9)); //check if something is there in array (questionare)
// console.log(myArr.indexOf(9)) // konse index pe element present hai

const newArr = myArr.join() //converts to string array ko bind karke
// console.log(newArr);

// Slice and splice
console.log("A " , myArr);
const myNewArr = myArr.slice(1,3)
console.log(myNewArr);
console.log("B ", myArr);

const mynewArr2 = myArr.splice(1,3)
console.log("C ", myArr);

console.log(mynewArr2);

//Normally interviews mai jab puchte hai ki kya difference hai splice aur slice mai toh ans dete hai log ki isme splice mai range include hogi aur slice mai nahi hogi
//But splice mai jo portion ham splice karte hai vo pura portion nikal jata hai

// Shallow Copies array
const ogArr = [1 , {a:10} , 3]
const shallowCopy = [...ogArr]

shallowCopy[1].a = 20

console.log(ogArr[1].a); // Eventhough hamne change shallowCopy array mai kiya vo change hame dikhai dega main array mai kyuki ye method work karta hai call by reference pe jisme sidha og values ka reference mil jaega shallow copied array ko

// Deep copies array
// ye completely diff array banata hai uske elements bhi diff hote hai matlab same values ka reference nahi hota (call by value)
const orignalArr = [1 , {a: 20} , 3]
// using JSON.parse(JSON.stringify()) for common deep copy creation method
const deepCopy = JSON.parse(JSON.stringify(orignalArr))

deepCopy[1].a = 20 // Modifying nested object in deepCopy

console.log(orignalArr[1].a); // output 10dega jisse ye pata lagta hai original array unaffected raha

