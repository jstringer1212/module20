// TODO: this file! :)
const NumBank = [];
const odds =[];
const evens = [];

const form = document.querySelector("form");
const numBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOneBtn = document.querySelector("#sortOne");
const sortAllBtn = document.querySelector("#sortAll");


form.addEventListener("submit", addNumber)
sortAllBtn.addEventListener("click", sortAll);
sortOneBtn.addEventListener("click", sortOne);


renderNumBank();

function renderNumBank() {
        numBankOutput.textContent = NumBank;
     }

function addNumber(event) {
    event.preventDefault();
    const input = parseInt(event.target.number.value);
    NumBank.push(input);
    renderNumBank();
    event.target.number.value = "";
}

function sortOne() {
    const lastNum = NumBank.pop();
    evenorodd(lastNum);
    renderNumBank();
    rendersorted(); 
    console.log(rendersorted);   
}

function sortAll() {
    while (NumBank.length > 0) {
        const lastNum = NumBank.pop();
        evenorodd(lastNum);
    }
    renderNumBank();
    rendersorted();
}

function rendersorted() {
    oddsOutput.textContent = odds;
    evensOutput.textContent = evens;
}

function evenorodd(num) {
    if (num % 2 === 0) {
        evens.push(num);
    }
    else {
        odds.push(num);
    }
    console.log(num);
}