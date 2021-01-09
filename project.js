var readlineSync = require('readline-sync');
var num1 = readlineSync.questionInt(" please give first number:");
var num2 = readlineSync.questionInt(' please give second number:');
var enteredOperator= readlineSync.question('how would you like to solve: add/sub/mul/div? ');
function add (num1, num2){
    return (num1 + num2);
}
function sub (num1, num2){
    return (num1 - num2);
}
function mul(num1, num2){
    return (num1 * num2);
}
function div(num1, num2){
    return (num1 / num2);
}
if (enteredOperator == 'add'){
    //do addtion
    console.log(add("the result is ",num1, num2));
}
else if(enteredOperator == 'sub'){
    //do subtraction
    console.log(sub(num1, num2));
}
else if (enteredOperator == 'mul'){
// do multiplication{
    console.log(mul("the result is ",num1, num2));
}
else if (enteredOperator == 'div'){
    // do division
    console.log(div("the result is ",num1, num2));
}

sub()
