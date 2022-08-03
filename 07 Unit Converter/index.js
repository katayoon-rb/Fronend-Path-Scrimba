/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")

let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

function calculation() {
    const inputNum = Number(inputEl.value).toFixed(2);
    
    lengthEl.textContent = `${inputNum} meters = ${(inputNum * 3.281).toFixed(3)} feet | ${inputNum} feet = ${(inputNum / 3.281).toFixed(3)} meters`
    volumeEl.textContent = `${inputNum} liters = ${(inputNum * 0.264).toFixed(3)} gallons | ${inputNum} gallons = ${(inputNum / 0.264).toFixed(3)} liters`
    massEl.textContent = `${inputNum} killos = ${(inputNum * 2.204).toFixed(3)} pounds | ${inputNum} pounds = ${(inputNum / 2.204).toFixed(3)} killos`
}

calculation()