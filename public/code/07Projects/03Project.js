const clock = document.getElementById('clock')

// let date = new Date()

// console.log(date.toLocaleTimeString()); // Aisa karne mai ye issue hai ki page refresh hone pe hi ye run hoga

setInterval((e) => {
    let date = new Date()

    // console.log(date.toLocaleTimeString());

    if(clock.firstChild){
        clock.removeChild(clock.firstChild)
    }
    const clockTime = document.createTextNode(date.toLocaleTimeString())
    clock.appendChild(clockTime)

    // or method 2
    // clock.innerHTML = date.toLocaleTimeString

    // or method 3
    // clock.textContent = date.toLocaleTimeString()
}, 1000)
