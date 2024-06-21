let count = 0;
const inc = document.getElementById('increase')
const dec = document.getElementById('decrease')
const res = document.getElementById('reset')
const countDisplay = document.getElementById('count')

inc.addEventListener('click', increment)

function enableButtons() {
    dec.addEventListener('click', decrement)
    res.addEventListener('click', reset)
    dec.classList.remove('disabled')
    res.classList.remove('disabled')
}

function disableButtons() {
    dec.removeEventListener('click', decrement)
    res.removeEventListener('click', reset)
    dec.classList.add('disabled')
    res.classList.add('disabled')
}

function increment() {
    count = count + 1
    enableButtons()
    updateDisplay()
}

function decrement() {
    count = count - 1
    if (count === 0) {
        disableButtons()
    }
    updateDisplay()
}

function reset() {
    count = 0
    disableButtons()
    updateDisplay()
}

function updateDisplay() {
    countDisplay.innerText = count
}