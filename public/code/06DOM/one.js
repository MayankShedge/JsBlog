// Accessing the element by id
document.getElementById('title')

document.getElementById('title').id // 'title'

document.getElementById('title').class //ye nahi hoga kyuki behind the scenes class ko kuch aur method name se call kiya jara hai

document.getElementById('title').className // Ye sahi tarika hai class ko call karneka

document.getElementById('title').getAttribute('id') // Isme sare attribute batane padenge jo apneko chaiye 

document.getElementById('title').getAttribute('class')

document.getElementById('title').setAttribute('class','test heading') // Ye yaad rakhna ye hamesha attributes ko overwrite karega

//Manipulating the styling of an current element
const title = document.getElementById('title') 

title.style.backgroundColor = 'green' // How to alter the styling of a object 

title.style.padding = '15px'

title.style.borderRadius = '30px'

//Accessing the inner Text,content or HTML value of a compoenent
title.textContent // Isme sara ka sara content milega even if vo kisi CSS property se chupa ke rakha ho

title.innerText // Sirf vo text aaega jo abhi uske andar visible hai

title.innerHTML // Iss case mai agar kuch Html bhi likh rakha hai content mai toh iss case mai vo bhi return kiya jaega. (eg agar hamne p ko trigerr kiya aur usme span bhi present hai toh span bhi return karega ye)

// Capturing element by class name
document.getElementsByClassName('heading')

//Advance querySelectors

// 1.querySelector -- selecting single elements
document.querySelector('h1') //Ye page ka sabse pehla h1 return karega
document.querySelector('#title') // Selecting by id
document.querySelector('.heading') // Selecting by className
document.querySelector('input[type="password"]') // Same as css ham isme bhi alag alag elements ko trigger kar sakte hai appropriate query selector lagake
document.querySelector('p:first-child')

/*
<ul>
    <li>one</li> ye kaise select karenge aur uska color change karenge
    <li>two</li>
    <li>three</li>
</ul?
*/

const myul = document.querySelector('ul')
const myLi = myul.querySelector('li')
myLi.style.backgroundColor = 'green'

// 2.querySelectorAll -- Access multiple elements
const tempLiList = document.querySelectorAll('li')
tempLiList // Ye ek hamare pass NodeList mili hai ( ye hai toh array se milta julta but note that ye exactly array nahi hai [iske prototype mai bhi push pop map ye nahi milega halaki forEach and all this will be available ])

tempLiList.style.color = 'green' // Ye nahi ho sakta 
tempLiList[0].style.color = 'green' // Ye hai sahi tarika uske particular number ke element ko access karke usse manipulate karo

const myH1 = document.querySelectorAll('h1') // Ab page pe bhale hi 1 hi h1 hai
myH1.style.color = 'gray' // Toh bhi ye galat hai 
myH1[0].style.color = 'gray' // 1 element ho toh bhi hame specify karna padega ki 1st element chaiye

// using forEach on this querySelectorAll
tempLiList.forEach((l) => (l.style.backgroundColor = 'green'))
// Note :- As specified above ye nodelist ek array nahi hai par agar ispe array methods like map reduce filter lagane ke liye convert this to array

tempLiList.forEach((l) => {
    l.style.color = 'orange';
    l.style.backgroundColor = 'green';
    l.style.padding = '10px';
    history.innerHTML = "<h1> Mayank is genius <span> Ye jhut hai </span> </h1>"
})
/*
<ul>
    <li class="list-item">one</li> ye kaise select karenge aur uska color change karenge
    <li class="list-item">two</li>
    <li class="list-item">three</li>
</ul>
*/
document.getElementsByClassName('list-item') // htmlCollection deta hai ye ek jispe apneko koi looping ka prototype method available nahi hota

// Yahape ham htmlCollection ko convert karenge into array
const tempClassList = document.getElementsByClassName('list-item')

//Convert kar diya htmlCollection ko into array(can be done same for nodelist also)
Array.from(tempClassList)
// const myConvertedArray = [...tempClassList];
const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach((l) => (l.style.color = 'orange'))

// We can make multiple lines also in this
myConvertedArray.forEach((li) => {
    li.style.color = 'orange';
    li.style.backgroundColor = 'green';
    li.style.padding = '10px';
    li.innerHTML = "<h1> Mayank is genius <span> Ye jhut hai </span> </h1>"
})