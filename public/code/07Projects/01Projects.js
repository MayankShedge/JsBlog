const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        console.log(e) // Jab koi bhi event trigger hota hai(like click,submit,keydown) browser automatically ek event object create karta hai jisme us event ki saari details hoti hai
        /*
        browser automatically ek event object create karta hai jisme us event ki saari details hoti hai:

        kis element pe click hua,

        kis time pe hua,

        kaunsa button press hua,

        mouse ka position kya tha, etc
        */
        console.log(e.target); // Jo bhi element click hoga uske sare details isko mil jaenge

        //With if-else
        // if (e.target.id === 'grey') {
        //     // body.style.backgroundColor = 'grey'
        //     body.style.backgroundColor = e.target.id
        // } 
        // if (e.target.id === 'white') {
        //     // body.style.backgroundColor = 'white'
        //     body.style.backgroundColor = e.target.id
        // } 
        // if (e.target.id === 'yellow') {
        //     // body.style.backgroundColor = 'yellow'
        //     body.style.backgroundColor = e.target.id
        // } 
        // if (e.target.id === 'blue') {
        //     // body.style.backgroundColor = 'blue'
        //     body.style.backgroundColor = e.target.id
        // } 

        // with switch case 
        const color = e.target.id

        switch (color) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                console.log('No match found');
                
                break;
        }
    })
})