#! /usr/bin/env node

import inquirer from "inquirer";

// 1. computer will generate a number

// 2. user input for guessing number

// 3. compare computer generated number and user guessed number

const randomNumber = Math.floor(Math.random() * 6 +1 );

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number 1- 6 : ",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congtratulation! You guessed right number.");
} else {
  console.log("You guessed wrong number");
}
