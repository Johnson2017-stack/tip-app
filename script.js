let inputElement = document.querySelector("#bill-amount");
let buttonElement = document.querySelector("#calculate-tip");
let tipAmountElement = document.querySelector("#tip-amount");
let tipAmount = 0;
let billAmount;

function handleCalculateTip() {
    billAmount = inputElement.value
    tipAmount = billAmount * .12;
    
    tipAmountElement.innnerHTML = `You Should Tip ${tipAmount}`;
}

buttonElement.addEventListener("click", handleCalculateTip);