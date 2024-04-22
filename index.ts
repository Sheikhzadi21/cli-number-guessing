#! /usr/bin/env node



import inquirer from "inquirer"

//1) computer will generate a random number "Done line number 14"

//2) user input for guessing number "Done line number 16.23,"

//3) compare user input with computer generated number and show result "done line number 25.29 "


const randomnumber = Math.floor(Math.random() * 6 +1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
    
]);

if(answers.userGuessedNumber === randomnumber) {
    console.log("Congtratulation you guessed right number.");
}else{
    console.log("You guessed wrong number");
}
