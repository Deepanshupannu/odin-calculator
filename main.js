let operator="";
let previousValue="";
let currentValue="";

document.addEventListener("DOMContentLoaded",function(){
    let numbers=document.querySelectorAll(".numbers")
    let operators=document.querySelectorAll(".operator")

    let clear=document.querySelector(".clear")
    let equal=document.querySelector(".equal")
    let decimal=document.querySelector(".decimal")

    let previousScreen=document.querySelector(".previousScreen")
    let currentScreen=document.querySelector(".currentScreen")
    


    numbers.forEach((numbers)=> numbers.addEventListener("click",function(e){
        handleNumbers(e.target.textContent)
        currentScreen.textContent=currentValue
    }))
    operators.forEach((op) =>op.addEventListener("click",function(e){
        handleOperators(e.target.textContent)
        previousScreen.textContent=previousValue+" "+operator;
        currentScreen.textContent=currentValue;

    }
    ))
    clear.addEventListener("click",function(){
        previousValue=""
        currentValue=""
        operator=""
        currentScreen.textContent=currentValue
        previousScreen.textContent=previousValue

    })
    equal.addEventListener("click",function(){
        calculate()
        previousScreen.textContent='';
        currentScreen.textContent=previousValue;

    })
})

function handleNumbers(num){
    if (currentValue.length<=7) {
        currentValue+=num;   
        
    }
}

function handleOperators(op) {
    operator=op;
    previousValue=currentValue;
    currentValue="";

    
}

function calculate(){
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);

    if (operator==="+") {
        previousValue+=currentValue;
    }else if(operator==="-"){
        previousValue-=currentValue;
    }else if(operator==="*"){
        previousValue*=currentValue;
    }else{
        previousValue/=currentValue;
    }
    // previousValue=roundNumber(previousValue);
    previousValue=previousValue.toString();
    currentValue=previousValue.toString();

}

// function roundNumber(num){
//   return   Math.round(num*1000)/1000

// }