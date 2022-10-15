const increment = document.querySelector("[data-action=increment]")
const decrement = document.querySelector("[data-action=decrement]")
let counterValue = 0;


const clickButtonIncrement = () => {
    counterValue += 1;
    document.getElementById("value").textContent = counterValue;
}

const clickButtonDecrement = () => {
    counterValue -= 1;
    document.getElementById("value").textContent = counterValue;
}

increment.addEventListener("click", clickButtonIncrement);
decrement.addEventListener("click", clickButtonDecrement);
