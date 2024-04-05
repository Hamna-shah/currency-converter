#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    JPY: 115,
    CAD: 1.25,
    PKR: 180,
};
let userAnswer = await inquirer.prompt([{
        name: "from",
        message: "select from which currency you want to exchange",
        type: "list",
        choices: ["PKR", "USD", "EUR", "GBP", "JPY", "CAD"]
    },
    {
        name: "to",
        message: "select to which currency you want to exchange",
        type: "list",
        choices: ["PKR", "USD", "EUR", "GBP", "JPY", "CAD"]
    },
    {
        name: "amount",
        message: "please enter your amount which you want to convert",
        type: "number",
    }
]);
let fromUserAmount = currency[userAnswer.from];
let toUserAmount = currency[userAnswer.to];
let userAmount = userAnswer.amount;
let baseAmount = userAmount / fromUserAmount; //usd base currency
let convertedAmount = Math.round(baseAmount * toUserAmount);
console.log(convertedAmount);
