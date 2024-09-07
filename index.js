#! /usr/bin/env node
import inquirer from "inquirer";
// steps to create a game
// 1st
// computer will generate a random number
// 2nd
// user input a guessing number
// 3rd
// compare a user input with a computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations!!! you guessed a  right number.");
}
else {
    console.log("you guessed wrong number");
}
;
