let passwordLength = 15
let passText = document.getElementById("pass-text")
let inputLength = document.getElementById("pass-length")

//creating password function
function createPassword() {

    let password = ""
    let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "!", "@", "#", "$", "%", "^", "&", "*", ">", "<",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    if (inputLength.value) { passwordLength = inputLength.value -1 }

    for (let i = 0; i <= passwordLength; i++) {

        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars[randomNumber]
    }

    return password
}


//button click
function randomPas() {
    let item = []
    for (let y = 0; y < passText.children.length; y++) {

        item[y] = passText.children[y].children[3]
        item[y].style.display = "block"
        item[y].value = createPassword()

       // 1-click copy to clipboard
        item[y].addEventListener('click', function(event) {
            item[y].focus()
            item[y].select()
            
            try {
                navigator.clipboard.writeText(item[y].value)
                let message = document.getElementById("message")
                message.textContent = "Copied to clipboard"
                setTimeout(function () {message.textContent=""}, 1 * 1000)
              } catch (err) {
                message.textContent = "Oops, unable to copy"
                setTimeout(function () {message.textContent=""}, 1 * 1000)
              }
        })
    }

}
