const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let nameEl = document.getElementById("name")
let usernameEl = document.getElementById("username")
let locEl = document.getElementById("location")
let avatarEl = document.getElementById("avatar")
let postEl = document.getElementById("post")
let commentEl = document.getElementById("comment")
let likesEl = document.getElementById("likes")

let hearthEl = document.getElementById("heart")


nameEl.textContent = posts[0].name
locEl.textContent = posts[0].location
avatarEl.innerHTML = `<img src="${posts[0].avatar}">`

postEl.innerHTML = `<img src="${posts[0].post}" class="post">`

likesEl.textContent = posts[0].likes

usernameEl.textContent = posts[0].username
commentEl.textContent = posts[0].comment


postEl.addEventListener("dblclick", function() {
    likesEl.textContent = posts[0].likes + 1
})
hearthEl.addEventListener("click", function() {
    likesEl.textContent = posts[0].likes + 1
})