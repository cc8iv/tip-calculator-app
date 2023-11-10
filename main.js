// input & button elements
let amtEl = document.querySelector("input#amount");
let tipEl = document.querySelector("input#tip");
const sbtBtn = document.querySelector("input#sbt-btn");

// display element
let display = document.querySelector("div.display");

// functionality

function getTip(){
    let amtValue = amtEl.value;
    let tipValue = tipEl.value;

    let tipResult = (tipValue / 100) * amtValue;

    return tipResult;
}

sbtBtn.addEventListener("click", ()=>{
    res = getTip();
    let output = '';

    if(res >= 0){
        if (res > amtEl.value) {
            output = `<div class="warning">Your Tip should be within the amount available not more.</div>`;
            display.innerHTML = output;
        }
        else{
            output = `<div class="correct">The Tip is: ${res}</div>`;
            display.innerHTML = output;
        }
    }
    else if(res < 0){
        output = `<div class="warning">Your tip should not be less than 0</div>`;
        display.innerHTML = output;
    }
    
    amtEl.value = "";
    tipEl.value = "";
})