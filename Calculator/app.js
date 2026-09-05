import { add, subtract, multiply, divide } from "./calculator.js";
const display = document.getElementById("display");
window.appendValue = function(value){
    display.value += value;
}
window.clearDisplay = function(){
    display.value = "";
}
window.deleteLast = function(){
    display.value = display.value.slice(0,-1);
}
window.calculate = function(){
    let expression = display.value;
    let operator;
    if(expression.includes("+"))
        operator="+";
    else if(expression.includes("-"))
        operator="-";
    else if(expression.includes("*"))
        operator="*";
    else if(expression.includes("/"))
        operator="/";
    else
        return;
    let parts = expression.split(operator);
    let a = Number(parts[0]);
    let b = Number(parts[1]);
    let result;
    switch(operator){
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
    }
    display.value = result;
}