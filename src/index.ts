#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import * as yargs from "yargs";

const QUESTIONS = [
  {
    name: "username",
    type: "input",
    message: "What is your username?",
    when: () => true//!yargs.argv["username"],
  },
  {
    name: "password",
    type: "password",
    message: "Password:",
    when: () => true,//!yargs.argv["password"],
    validate: (input: string) => {
      if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(input))
        return true;
      else return "Password needs to contain letter, number and a sign";
    },
  },
];

//Bottom bar
const ui = new inquirer.ui.BottomBar();
ui.log.write("Please fill up the inputs");
//   ui.log.write('Almost over, standby!');
//   ui.updateBottomBar('new bottom bar content');

//Prompt
inquirer.prompt(QUESTIONS).then((answers) => {
  answers = Object.assign({}, answers, yargs.argv);

  const username: string = answers["username"];
  const password: string = answers["password"];

  console.log(chalk.green("Done."));
  console.log(
    chalk.bgMagenta(
      `Chosen username: ${username} - ${"*".repeat(password.length)}`
    )
  );
});
