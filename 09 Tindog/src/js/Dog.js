import dogs from "./data.js"

function getDogHtml(data) {
    const { name, avatar, age, bio } = data
    return `<img src="${avatar}" class="image">
            <div class="text-container" id="text-container">
                <h2 class="nameANDage" id="test">${name}, ${age}</h2>
                <p class="bio">${bio}</p>
            </div>`
}

export default getDogHtml