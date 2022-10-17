let result = document.querySelector(".result");
// for get and show the keys============================================
function showField(event) {
    let x = event.target.innerText;
    if (result.innerHTML == 0) {
        return result.innerHTML = x;
    }
    return result.innerHTML += x;
}
// for clear all we wrote========================================
function clearAll() {
    result.innerText = 0;
}
// for clear last one we wrote===================================
function clearkey(params) {
    let text = result.innerHTML;
    if (text.length == 1) {
        result.innerHTML = 0;
    } else {
        result.innerHTML = text.substring(0, result.innerHTML.length - 1);
        console.log(cleared);
    }
}
// for calculating the string===================================
function calcute(params) {
    let calc = result.innerHTML
    result.innerHTML = eval(calc)
    console.log(result.innerHTML)
}

let keyReader = document.querySelectorAll(".show-display");
keyReader.forEach(item => {
    item.addEventListener("click", showField)
})
let clearall = document.querySelector(".clear-all").addEventListener("click", clearAll)
let clear = document.querySelector(".clear").addEventListener("click", clearkey)
let calcuteQu = document.querySelector(".equal").addEventListener("click", calcute)
