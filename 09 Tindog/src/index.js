import dogs from "./js/data.js"
import getDogHtml from "./js/Dog.js"

document.getElementById("like").addEventListener("click", function(){
    document.getElementById("like-badge").classList.remove("hidden")
    setTimeout(() => {
        document.getElementById("like-badge").classList.add("hidden")
        getDog()
    }, 2500)
})

document.getElementById("nope").addEventListener("click", function(){
    document.getElementById("nope-badge").classList.remove("hidden")
    setTimeout(() => {
        document.getElementById("nope-badge").classList.add("hidden")
        getDog()
    }, 2500)
})

let counter = 0
function getDog() {
    let currentDog = dogs[counter]
    counter === dogs.length - 1 ? counter = 0 : counter++
    document.getElementById("container").innerHTML = getDogHtml(currentDog)
}

getDog()
