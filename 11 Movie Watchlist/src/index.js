const inputBar = document.getElementById("search-input")
let filmInfo = {}
const startMsg = document.getElementById("start")
const notFound = document.getElementById("not-found")
const results = document.getElementById("results")
const addOrRemove = document.getElementById("add-watch")

let keyArr = []
for (var key in localStorage) {
    keyArr.push(key)
}



document.getElementById("search-button").addEventListener("click", () => {
    let input = inputBar.value.split(" ").join("+");
    fetch(`https://www.omdbapi.com/?apikey=ec7cbf3b&t=${input}`)
        .then(res => res.json())
        .then(data => {
            if (data.Response === "True") {
                Object.assign(filmInfo, data)
                startMsg.classList.add("hidden")
                notFound.classList.add("hidden")
                results.innerHTML = `
                    <div class="results">
                        <img src=${filmInfo.Poster} class="poster">
                        <div class="texts">
                            <div class="results-lines first-results-lines">
                                <h2>${filmInfo.Title} ${filmInfo.Year}</h2>
                                <img src="images/star-vector.png">
                                <p>${filmInfo.imdbRating}</p>
                            </div>
                            <div class="results-lines second-results-lines">
                                <p>${filmInfo.Runtime}</p>
                                <p>${filmInfo.Genre}</p>
                                <div id="add-watch">
                                    ${keyArr.includes(`${filmInfo.Title}`) ? `
                                        <button id="remove" onclick="removeFromWatchList()">
                                            <img src="images/remove-vector.png">  
                                            Remove
                                        </button>
                                    ` : `
                                        <button id="add" onclick="addToWatchList()">
                                            <img src="images/add-vector.png">  
                                            WatchList
                                        </button>`}
                                </div>
                            </div>
                            <div class="results-lines results-desc">
                                <p>${filmInfo.Plot}</p>
                            </div>
                        </div>
                    </div>
                `
            } else {
                results.innerHTML = ""
                notFound.classList.remove("hidden")
                startMsg.classList.add("hidden")
            } 
            
            inputBar.value = ""
        })
})



function addToWatchList() {
    for (item in keyArr){
        localStorage.setItem(`${filmInfo.Title}`, JSON.stringify(filmInfo))
    }
    document.getElementById("add-watch").innerHTML = `
        <button id="remove" onclick="removeFromWatchList()">
            <img src="images/remove-vector.png">
            Remove
        </button>`
}

function removeFromWatchList() {
    localStorage.removeItem(`${filmInfo.Title}`)
    document.getElementById("add-watch").innerHTML = `
        <button id="add" onclick="addToWatchList()">
            <img src="images/add-vector.png">  
            WatchList
        </button>`
}

