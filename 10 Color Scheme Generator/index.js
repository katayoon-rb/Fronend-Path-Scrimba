document.getElementById("get-btn").addEventListener("click", function(){
    let pickedColor = document.getElementById("color-picker").value.substring(1)
    let colorMode = document.getElementById("color-options").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${colorMode}`)
        .then(response => response.json())
        .then(data => {
            let colorsStr = ""
            for (let i = 0; i < data.count; i++) {
                colorsStr += data.colors[i].hex.value + " "
            }
            let colorsArr = colorsStr.split(" ")
            
            document.getElementById("colors").innerHTML = `
                <div class="first-color color" style="background: ${colorsArr[0]};">
                    <p>${colorsArr[0]}</p>
                </div>
                <div class="second-color color" style="background: ${colorsArr[1]};">
                    <p>${colorsArr[1]}</p>
                </div>
                <div class="third-color color" style="background: ${colorsArr[2]};">
                    <p>${colorsArr[2]}</p>
                </div>
                <div class="fourth-color color" style="background: ${colorsArr[3]};">
                    <p>${colorsArr[3]}</p>
                </div>
                <div class="fifth-color color" style="background: ${colorsArr[4]};">
                    <p>${colorsArr[4]}</p>
                </div>
            `
        })
})