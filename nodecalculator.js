var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("please give me first number");
var secondNum = readlineSync.questionInt("please give me second number");
var solution = readlineSync.question("how would you like me to solve: add/sub/mul/div?");

function add(num1, num2){
    return "addition of number-1" + num1 + "with number-2" + num2 + "return a sum of: " + (num1 + num2)
}

if (solution == "add"){
    console.log(add(firstNum, secondNum));
}