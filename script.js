const passwordContainer = document.getElementById('password-container')
const eachPassword = document.getElementsByClassName('passwords')

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '_', '=', '+', ':', '<', '>', '?', '|'];

let passwordLength = 9;

function generatePassword() {
    let password = [];
    for (let i = 0; i < passwordLength; i++) {
        let randomChar = characters[Math.floor(Math.random() * characters.length)]
        password.push(randomChar)
    }
    return password.join('')
}

function renderPassword() {
    for (let x = 0; x < eachPassword.length; x++) {
        eachPassword[x].textContent = generatePassword()
    }
}

// renderPassword()

const generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", renderPassword)

function click() {
    console.log("Hello!")
}
