
var buttonValue = 0;

const buttonvalue = numValue => buttonValue = numValue;

function showhidden() {

    if (buttonValue == 0) {
        alert("Select one of the alternatives before you submit")
    }else {
        var messageThanks = document.querySelector(".selected-rating");
        const ratingSec = document.querySelector(".rating-section");
        const thankSec = document.querySelector(".thanks-section");

        ratingSec.classList.add("hidden");
        thankSec.classList.remove("hidden");

        messageThanks.innerHTML = `You selected ${buttonValue} out of 5`
    }
}