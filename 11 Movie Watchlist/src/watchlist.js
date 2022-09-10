let keyArr = []
for (var key in localStorage) {
    keyArr.push(key)
}

let listedFilms = new Array
let listedTitles = new Array

for (let i = 0; i < keyArr.length - 6; i++) {

    listedFilms.push(JSON.parse(localStorage.getItem(`${keyArr[i]}`)))
    listedTitles.push(listedFilms[i].Title)

    document.getElementById("WatchList-results").innerHTML += `
        <div class="results" id=${listedFilms[i].Title.split(' ').join('')}>
            <img src=${listedFilms[i].Poster} class="poster">
            <div class="texts">
                <div class="results-lines first-results-lines">
                    <h2>${listedFilms[i].Title} ${listedFilms[i].Year}</h2>
                    <p><img src="images/star-vector.png">${listedFilms[i].imdbRating}</p>
                </div>
                <div class="results-lines second-results-lines">
                    <p>${listedFilms[i].Runtime}</p>
                    <p>${listedFilms[i].Genre}</p>
                    <button id="remove-watch">
                        <button id="remove" onclick="removeFromWatchList(${i})">
                            <img src="images/remove-vector.png">  
                            Remove
                        </button>
                    </button>
                </div>
                <div class="results-lines results-desc">
                    <p>${listedFilms[i].Plot}</p>
                </div>
            </div>
        </div>
    `
}

function removeFromWatchList(i) {
    document.getElementById(listedTitles[i]).remove()
    localStorage.removeItem(listedTitles[i])
}


if (keyArr.length > 6) {
    document.getElementById("not-found-wl").classList.add("hidden")
} else {
    document.getElementById("not-found-wl").classList.remove("hidden")
}
