const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let password = ""
let firstPass = document.getElementById("first-pass")
let secondPass = document.getElementById("second-pass")


function generatePassword() {
    function makePassword() {
        for (i = 0; i < 15; i++) {
            let x = Math.floor( Math.random() * characters.length )
            password += characters[x]
        }
    }
    makePassword()
    firstPass.textContent = password
    password = ""
    makePassword()
    secondPass.textContent = password
    password = ""
}

