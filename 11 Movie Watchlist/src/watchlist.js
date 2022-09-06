import {filmInfo} from "./index.js"

const watchlistResaults = document.getElementById("watchlist-resaults")
const notFoundWl = document.getElementById("second-resualts-lines")


function addToWatchlist() {
    console.log("hi")
    watchlistResaults.innerHTML += `
        <div class="resault">
            <img src=${filmInfo.Poster} class="poster">
            <div class="texts">
                <div class="resualts-lines first-resualts-lines">
                    <h2>${filmInfo.Title} ${filmInfo.Year}</h2>
                    <img src="images/star-vector.png">
                    <p>${filmInfo.imdbRating}</p>
                </div>
                <div class="resualts-lines second-resualts-lines">
                    <p>${filmInfo.Runtime}</p>
                    <p>${filmInfo.Genre}</p>
                    <button id="remove-watch">
                        <img src="images/remove-vector.png">
                        Remove
                    </button>
                </div>
                <div class="resualts-lines resualts-desc">
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

document.getElementById("add-watch").addEventListener("click", () => {
    addToWatchlist
    console.log("uuuuhhhh")
})