// variable declaration
let amount = document.querySelector('input#amt');
let tip = document.querySelector('input#tip');

let submitBtn = document.querySelector('button#sbt-btn');

let result = document.querySelector('.result')



//functionality
function resultOutput(){
    // converting html string objects to numbers
    let amountContent = parseFloat(amount.value);
    let tipContent = Number(tip.value);

    tipPercent = tipContent / 100;
    total = amountContent * tipPercent;

    // console.log(tipPercent);
    // console.log(total);
    if(isNaN(total)){
        message = "Please type in some figures";
        return message;
    }
    else if(total > amountContent){
        message = "Your tip can't be more than the total amount";
        return message;
    }
    else if (total < 0){
        message = "Your tip can't be less than 0";
        return message;
    }
    else{
        message = "Your tip is #" + total;
        return message;
    }
}


//display
submitBtn.addEventListener('click', () => {
    result.textContent = resultOutput();
    console.log(resultOutput());
});