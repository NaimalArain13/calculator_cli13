#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"


//defining an enum to prevent from possible spelling mistakes 
enum operator{ 
    ADD = "addition",
    SUBTRACT = "subtraction",
    MULTIPLY = "multiplication",
    DIVIDE = "division",
    SQUARE = "exponentiation"
}   

//validation of user input
function validateNumber(input:string) :string | boolean{
    if(isNaN(parseFloat(input))){
        return "Please enter a valid number"
    }
return true
}

// //const validateInput = parseFloat(answer.number)
const answer =  await inquirer.prompt([
    {message: "Enter first number: ",
    type: "number",
    name: "firstnumber",
    validate: validateNumber
},
{
    message: "Select one of the operator to perform operation: ",
    type: "list",
    name: "operator",
    choices: Object.values(operator),
},
    {message: "Enter second number: ",
    type: "number",
    name: "secondnumber",
    validate: validateNumber
},
]);

if(answer.operator === operator.ADD){
    console.log(chalk.magentaBright.bgGray(answer.firstnumber + answer.secondnumber));
    
}  else if(answer.operator === operator.SUBTRACT){
    console.log(chalk.magentaBright.bgGray(answer.firstnumber - answer.secondnumber));
}
else if(answer.operator === operator.MULTIPLY){
    console.log(chalk.magentaBright.bgGray(answer.firstnumber * answer.secondnumber));

}else if(answer.operator === operator.DIVIDE){
    console.log(chalk.magentaBright.bgGray(answer.firstnumber / answer.secondnumber));
}
else if(answer.operator === operator.SQUARE){
    console.log(chalk.magentaBright.bgGray(answer.firstnumber ** answer.secondnumber));

}
console.log("The End");