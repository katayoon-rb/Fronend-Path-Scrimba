const menu = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushroom", "mozzarella"],
        id: 0,
        price: 14,
        emoji: "./images/pizza.png",
        available: 1,
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "./images/ham.png",
        id: 1,
        available: 1,
    },
    {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "./images/beer.png",
        id: 2,
        available: 1,
    }
]

let orders = new Map()
let totalPrice = 0

function generateMenuHTML() {
    let itemsHTML = ``

    menu.forEach((menuItem) => {
        itemsHTML += `
            <div>
                <img src=${menuItem.emoji} class="emoji">
                <div class="container">
                    <h3 class="name">${menuItem.name}</h3>
                    <p class="ingredients">${menuItem.ingredients}</p>
                    <h5 class="price">$${menuItem.price}</h5>
                </div>
                <button onclick="addToCard(${menuItem.id})"><img src="./images/add-btn.png"></button>
            </div>
            `
    })

    return itemsHTML
}


let ordersHTMLmap = new Map()

function addOrderHTML(orderName) {
    let currentOrder = orders.get(`${orderName}`)
    if (currentOrder.available > 0) {
        ordersHTMLmap.set(`${orderName}`, `
            <div class="order" id="${currentOrder.id}">
                <div>
                    <h6>${currentOrder.name}</h6>
                    <h4 class="available">x${currentOrder.available}</h4>
                    <button class="removeBtn" onclick="remove(${currentOrder.id})">remove</button>
                </div>
                <h5>$${currentOrder.price * currentOrder.available}</h5>
            </div>
        `
    )
    }
    
}


function generateOrdersHTML(orderName) {
    addOrderHTML(orderName)

    let orderHTMLstr = ``  
    for (let html of ordersHTMLmap.values()) {
        orderHTMLstr += html
    }

    if (totalPrice === 0) {
        document.getElementById("your-order").classList.add("hidden")
    } else {
        document.getElementById("your-order").innerHTML = `
            <h5>Your order</h5>
            ${orderHTMLstr}
            <div class="total">
                <h6>Total price:</h6>
                <h5>$${totalPrice}</h5>
            </div>
            <button id="completeBtn" onclick="completeOrder()">Complete order</button>
        `
        document.getElementById("your-order").classList.remove("hidden")
    }
}



function addToCard(id) {
    document.getElementById("thanks").classList.add("hidden")
    let orderItem = menu[id]
    
    if (orders.has(`${orderItem.name}`)) {
        orderItem.available++
    } else {
        orderItem.available = 1
        orders.set(`${orderItem.name}`, orderItem)
    }

    totalPrice += orderItem.price

    generateOrdersHTML(`${orderItem.name}`)
}

function remove(id) {
    let orderItem = menu[id]
    orderItem.available--
    totalPrice -= orderItem.price
    ordersHTMLmap.delete(`${orderItem.name}`)

    if (orderItem.available === 0) {
        ordersHTMLmap.delete(`${orderItem.name}`)
    }
    
    generateOrdersHTML(`${orderItem.name}`)
}



function completeOrder() {
    document.getElementById("modal").classList.remove("hidden")
}


let clientName = ''

document.getElementById("payBtn").addEventListener('click', e => {
    e.preventDefault()

    if (document.querySelector("input").value.length > 0){
        document.getElementById("modal").classList.add("hidden")
        document.getElementById("your-order").classList.add("hidden")
        document.getElementById("thanks").classList.remove("hidden")
        clientName = document.getElementById("nameInput").value
    } else {
        alert("please fill the inputs")
    }

    document.getElementById("clientName").innerText = ", " + clientName
    document.querySelector("input").value = ''
})



function render() {
    document.getElementById("root").innerHTML = generateMenuHTML()
}

render()