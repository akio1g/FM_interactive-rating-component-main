'use strict';
let rate = 0;
function chooseRate(button) {
    let arrButton = document.querySelectorAll(".buttons-rate");
    arrButton.forEach(button => {button.classList.remove("focus")});

    rate = parseInt(button.id.charAt(4));
    button.classList.toggle("focus");
}

function submitRate(rate) {
    document.getElementById("support-request").classList.toggle("submit-done");
    document.getElementById("thank-you").classList.toggle("rating-done");
    document.getElementById("number-rate").innerText = rate;
}