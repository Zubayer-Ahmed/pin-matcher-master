// Random number 
let randomPin = document.getElementById("pin-generator-display");
function getRandomPin(){
    let output = Math.round(Math.random() * 8999) + 1000;
    randomPin.value = output;

    displayPin.value = "";
    pinMatched.style.display = "none";
    pinUnmatched.style.display = "none";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#495BC3";
}
// Submit pin 
let displayPin = document.getElementById("input");
function getInputNumber(num){
    displayPin.value += num;
}
//Clear input display
function clearInput(){
    let displayPin = document.getElementById("input");
    displayPin.value = "";
}
// Delete input display
function deleteInput(){
    let displayPin = document.getElementById("input");
    let remove = displayPin.value;
    remove = remove.slice(0,-1);
    displayPin.value = remove;
}
// Pin checker
const pinMatched = document.getElementById("pin-matched");
const pinUnmatched = document.getElementById("pin-unmatched");
let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function(){
        if (displayPin.value == randomPin.value) {
            pinMatched.style.display = "block";
        }
        else{
            pinUnmatched.style.display = "block";
            let actionLeft = document.getElementById("actionLeft").innerText;
            let tryLeft = parseInt(actionLeft);
            tryLeft -= 1;         
        }
})