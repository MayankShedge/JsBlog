// Javascript ke adar jitne bh events hote hai vo sequentially hi run hote hai (kuch exceptions hai isme jo badme dekhenge)
// Ye events kisi activity pe invoke hote hai

// attachEvent() - Jab internet explorer pe bht mushkil hota tha applications ko chalana
// jOuery - on event listner milta tha isme

// self study - types of events , timestamps(Date activity kaise change karte hai and all) , defaultPrevented (kisi bhi tag ka default behaviour hai vo rok sakte hai isse)
// target  , toElement , sourceElement , currentTarget 
// Interview related - clientX , clientY , offset , screenX , screenY 
// altkey , ctrlKey , shiftKey , keyCode

// Isme bhi problems ho sakti kyuki hame bht jyada information nahi milti hai aur iske liye hame eventListeners use karne chaiye kyuki ye hame propagation ke ability dete hai 
// document.getElementById('owl').onclick = function (){
//     alert('owl clicked') //(Ye method features kam deta hai)
// }

// document.getElementById('owl').addEventListener('click' , (e) => {
//     // alert('Owl clicked')
//     // e = event object 
// }, false) // Event Propagation 2 context hota hai eventBubbling and event Capturing ( false yani default pe hota hai use Event Bubbling ) 

// Bubbling
// document.getElementById('images').addEventListener('click', (e) => {
//     alert('clicked inside the ul')
// })

// document.getElementById('owl').addEventListener('click', (e) => {
//     alert('clicked the owl')
// }) // aise likho ya ,false) same hi hai default false hota hai

// Event Propagation isme ye hai ki jaise bubble jata hai niche se upar vaise hi eventListeners bhi jaenge child se parent ke taraf matlab li->ul->div aise 

// Capturing
// document.getElementById('images').addEventListener('click', (e) => {
//     alert('clicked inside the ul')
// }, true)

// document.getElementById('owl').addEventListener('click', (e) => {
//     alert('clicked the owl')
// }, true) // isme likhna padega ,true) aise kyuki by default false hota hai

// Capturing opposite hai bubbling ke jo jaega top se bottom matlab parent se child so basically div->ul->li

// How to prevent the default bubbling?
// document.getElementById('images').addEventListener('click', (e) => {
//     alert('clicked inside the ul')
// }, false)

// document.getElementById('owl').addEventListener('click', (e) => {
//     alert('clicked the owl')
//     e.stopPropagation() // isse ab bubbling ruk jaegi ya even if capturing laga rakha hai toh voh bhi ruk jaega 
// }, false) 

// document.getElementById('google').addEventListener('click' , function(e){
//     console.log("google clicked");
//     e.preventDefault() // isse ye by default jo google page pe redirect karra tha usse nahi karega
//     e.stopPropagation()
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target); // konse element pe ye eventListner target hora ya ya fire hora hai
    console.log(e.target.parentNode); // target ke parent node ko trigger karna hai

    // Applying strict checks to ensure ki pura hi parent node na udd jaye if we trigger some unexpected node for it( jaise img ke badle li click hua toh ul trigger ho gaya aur pura ul udd gaya)
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove() // method 1
    }

    // removeIt.parentNode.removeChild(removeIt) // method 2 removeIt dega img ka parentNode li aur ye uske parentNode ul ko target karke bolega tere child node iss li ko hata( same hi way hai upar vale ke tarah )
    // Just a catch ki remove() vale method mai if by chance li pe click hua toh hamara target.parentNode dega return ul toh isse pura ul hi gayab ho jaega
}, false)