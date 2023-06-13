#!/usr/bin/env node

import chalk from "chalk";
// import inquirer from "inquirer";
import boxen from "boxen";
import yargs from "yargs/yargs";
// import { hideBin } from "yargs/helpers";
// import figlet from "figlet";

// const usageMessage = chalk.blue(
//   "\nUsage: mycli -l <language>  -s <sentence> \n" +
//     boxen(
//       chalk.green("\n" + "Translates a sentence to specific language" + "\n"),
//       { padding: 1, borderColor: "green", dimBorder: true }
//     ) +
//     "\n"
// );

chalk.blue(
  "\nUsage: mycli -l <language>  -s <sentence> \n" +
    boxen(
      chalk.green("\n" + "Translates a sentence to specific language" + "\n"),
      { padding: 1, borderColor: "green", dimBorder: true }
    ) +
    "\n"
);

//const options =
const argv = yargs(process.argv.slice(2))
  .options({
    a: { type: "boolean", default: false },
    b: { type: "string"},//, demandOption: true },
    c: { type: "number", alias: "chill" },
    d: { type: "array" },
    e: { type: "count" },
    f: { choices: ["1", "2", "3"] },
  })
  .parseSync();
// .option("language", {
//   alias: "l",
//   describe: "Translate to language",
//   type: "string",
//   demandOption: false,
// })
// .option("s", {
//   alias: "sentence",
//   describe: "Sentence to be translated",
//   type: "string",
//   demandOption: false,
// })
// .help(true)
// .parse();
//.argv;
// const argv = yargs(process.argv.slice(2)).argv;

// console.log(
//   chalk.yellow(figlet.textSync("CLI Template", { horizontalLayout: "full" }))
// );
// yargs.showHelp();

console.log(argv);
console.log(argv.a);
console.log(argv.b);
console.log(argv.c);
console.log(argv.d);
console.log(argv.e);
console.log(argv.f);

// const QUESTIONS = [
//   {
//     name: "username",
//     type: "input",
//     message: "What is your username?",
//     when: () => true//!yargs.argv["username"],
//   },
//   {
//     name: "password",
//     type: "password",
//     message: "Password:",
//     when: () => true,//!yargs.argv["password"],
//     validate: (input: string) => {
//       if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(input))
//         return true;
//       else return "Password needs to contain letter, number and a sign";
//     },
//   },
// ];

// //Bottom bar
// const ui = new inquirer.ui.BottomBar();
// ui.log.write("Please fill up the inputs");
// //   ui.log.write('Almost over, standby!');
// //   ui.updateBottomBar('new bottom bar content');

// //Prompt
// inquirer.prompt(QUESTIONS).then((answers) => {
//   answers = Object.assign({}, answers, yargs.argv);

//   const username: string = answers["username"];
//   const password: string = answers["password"];

//   console.log(chalk.green("Done."));
//   console.log(
//     chalk.bgMagenta(
//       `Chosen username: ${username} - ${"*".repeat(password.length)}`
//     )
//   );
// });

