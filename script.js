const passwordContainer = document.getElementById('password-container')
const eachPassword = document.getElementsByClassName('passwords')
const generateBtn = document.getElementById("generate-btn")

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '_', '=', '+', ':', '<', '>', '?', '|'];

let passwordLength = 9;

function generatePassword() {
    let password = [];
    for (let i = 0; i < passwordLength; i++) {
        let randomChar = characters[Math.floor(Math.random() * characters.length)]
        password.push(randomChar)
    }
    password = password.join('').toString()
    return password
}

function renderPassword() {
    let currentPassword;
    for (let x = 0; x < eachPassword.length; x++) {
        currentPassword = eachPassword[x]
        currentPassword.textContent = generatePassword()
    }
}

generateBtn.addEventListener("click", renderPassword)


const darkBtn = document.getElementById("dark")
const lightBtn = document.getElementById("light")

function lightMode() {
    document.body.style.background = "#dee2f5"
    document.getElementsByClassName("content-wrapper")[0].style.background = "#ECFDF5"
}

function darkMode() {
    document.body.style.background = "#172135"
    document.getElementsByClassName("content-wrapper")[0].style.background = "#374151"
}

darkBtn.addEventListener("click", darkMode)
lightBtn.addEventListener("click", lightMode)

