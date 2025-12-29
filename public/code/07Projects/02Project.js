// Submit type of event - pure form ko select karo as submit button is present inside that form

// This use case will give you empty value
// const height = parseInt(document.querySelector('.height').value)
// const weight = parseInt(document.querySelector('.weight').value)

const form = document.querySelector("form")

form.addEventListener('submit' , (e) => {
    // Ye nahi kiya toh form submit hote hi page reload ho jaega aur value display karne nahi milega
    e.preventDefault() // Jo bhi default action hai vo rokne ke liye (kyuki hame defaultly form ko get ya post se submit karke server pe nahi bhejna)

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        // const resultText = document.createTextNode(`Please give a valid height ${height}`)
        // results.appendChild(resultText)
        results.innerHTML = `Please give a valid height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        // const resultText = document.createTextNode(`Please give a valid height ${weight}`)
        // results.appendChild(resultText)
        results.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const bmi = ( weight / ((height * height)/10000)).toFixed(2)
        // Show the result 
        results.innerHTML = (`<span>${bmi}</span>`)

        // const infoPara = document.createElement('p')
        // const existingInfo = document.querySelector('p')
        const infoPara = form.querySelector('#info')
        if (bmi < 18.6) {
            infoPara.innerHTML = '<span> You are underwiirght </span>'
        }else if (bmi >= 18.6 && bmi < 24.9 ) {
            infoPara.innerHTML = '<span> You are in Normal Range </span>'
        } else {
            infoPara.innerHTML = '<span> You are Overweight </span>'
        }
    }

    // const newResultText = document.createTextNode(`The answer is ${height * weight}`)
    // results.appendChild(newResultText)


})
