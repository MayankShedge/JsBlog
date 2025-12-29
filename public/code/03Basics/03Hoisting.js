// Nested Scope 
function one(){
    const username = "Mayank"

    function two(){
        const website = "youtube"
        console.log(username);   
    }
    // console.log(website); //Ek jaruri point ki jab hamare pass parent-child nesting hori hogi child element jo hai vo parent element ke variables ko apne scope mai use kar paega very easily but the vice versa is not possible i.e parent child vale ke elements ko access nahi kar sakta
    two() //Yahape gaur farmane ki baat hai ki if we do not execute the two() function then ye kabhi run nahi hoga even if we execute the one function matlab two execute karne two ko hi call karna hi padega
}
one()

if (true) {
    const username = "Mayank"
    if (username === "Mayank") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //Vapis voi galat calling (cannot call a child variable outside childs scope inside the parent scope)
}

// console.log(username);//Yaha bhi same block scope ko we cannot call inside the global scope

//+++++++++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++++++
console.log(addOne(5)) // Ye karna allowed hai. Iss case mau ham jo function hai uske declaration ke pehle uski execution kar sakte hai
function addOne(num){ //Ye ek basic function hai
    return num + 1
}

console.log(addTwo(5)); // Ye yahape lekin allowed nahi hai kyuki hamne iss case mai function ko declare karne ke saath hi e variable mai hold bhi kara rakha hai.
const addTwo = function(num){ //Ye bhi function hi hai but isse kabhi kabhi expression bol diya jata hai matlab ek variable jo function hold kar raha ho.
    return num + 2
}