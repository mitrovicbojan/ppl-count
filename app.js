const pplCounter = document.getElementById('ppl-counter');

let number = 0;

function increment() {
    number += 1    
    pplCounter.innerText = number;
}

function decrement() {
    if(number === 0) {
        return
    } else {
        number -= 1
        pplCounter.innerText = number;
    }
}