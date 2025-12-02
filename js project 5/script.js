const p = document.querySelector('p')
const text = p.innerText
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let iteration = 0

function randomChar() {
    const str = text.split("").map((char, index) => {
        if(index < iteration) {
            return char
        }
        return characters[Math.floor(Math.random() * 52)]
    }).join("")

    p.innerText = str

    iteration += 0.2
}
setInterval(randomChar, 100)