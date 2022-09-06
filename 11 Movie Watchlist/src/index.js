const inputBar = document.getElementById("search-input")
let filmInfo = {}
const startMsg = document.getElementById("start")
const notFound = document.getElementById("not-found")
const results = document.getElementById("results")


document.getElementById("search-button").addEventListener("click", () => {
    let input = inputBar.value.split(" ").join("+");
    fetch(`http://www.omdbapi.com/?apikey=ec7cbf3b&t=${input}`)
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
                                <button id="add-watch" onclick="addToWatchList()"> 
                                    <img src="images/add-vector.png">
                                    WatchList
                                </button>
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
    const watchListResults = document.getElementById("WatchList-results")
    const notFoundWl = document.getElementById("second-results-lines")

    console.log(watchListResults)
    watchListResults.innerHTML += `
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
                    <button id="remove-watch">
                        <img src="images/remove-vector.png">
                        Remove
                    </button>
                </div>
                <div class="resualts-lines results-desc">
                    <p>${filmInfo.Plot}</p>
                </div>
            </div>
        </div>
    `
    notFoundWl.innerHTML = `
        <p>${filmInfo.Runtime}</p>
        <p>${filmInfo.Genre}</p>
        <button id="remove-watch">
            <img src="images/remove-vector.png">
            Remove
        </button>
    `
}
