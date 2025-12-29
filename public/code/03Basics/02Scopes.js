// Yaha jo bhi values declare hongi vo global scope mai hongi jo hoti hai accessible throughout the blockscopes + global scope
// let a = 10
// const b = 30
// var c = 30 //Block scope ko jaisa hona chaiye uske tarah kaam nahi karta
let a = 300

if (true) {
    // Yaha jo values declare hongi vo hoti hai block scope jo ki accessible honi chaiye sirf yahi block of code mai
    let a = 10
    const b = 30
    // var c = 30 
    console.log("Block Scoped value of a: ",a); //Yahape iska value alag aaega 
}

console.log("Global Scoped value of a: ",a); //Yahape alag aaega 
// console.log(b);
// console.log(c); // Yaha pe scope block vala nahi hai ye har jagah accessible ho jaega
// {} --> scope of the program (uss function ya if else ya loop ka scope)

// Console mai jake ham jo scope dekhte hai vo alag hai aur code environment mai node ke through code run karte vakt scope alag hai