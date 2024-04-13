#! /usr/bin/env node


import inquirer from "inquirer";

let rateExchange:any = {

    //Define the list of the currencies and their exchange rate.
    "USD": 1,
    "EUR": 0.82,
    "GBP": 0.73,
    "JPY": 110.07,
    "AUD": 1.29,
    "CAD": 1.26,
    "CHF": 0.91,
    "CNY": 6.49,
    "INR": 75.05,
    "KRW": 1155.50,
    "NZD": 1.39,
    "SGD": 1.34,
    "HKD": 7.77,
    "SEK": 8.46,
    "NOK": 8.77,
    "DKK": 6.09,
    "RUB": 75.60
}

let userINput =await inquirer.prompt(
    [
        {
            name:"convert_from",
            type:"list",
            message:"Select the currency you convert from",
            choices:[  "USD","EUR","GBP","JPY","AUD","CAD", "CHF","CNY","INR","KRW","NZD","SGD","HKD","SEK","DKK","RUB"]
        },
        {
            name:"convert_to",
            type:"list",
           message:"Select the currency you convert into",
           choices:["USD","EUR","GBP","JPY","AUD","CAD", "CHF","CNY","INR","KRW","NZD","SGD","HKD","SEK","DKK","RUB"]
         
        },
        {
            
            name:"amount",
            type:"input",
           message:"Enter the amount",

        }
    ]
);
// perform currency conversion by using formula
let from_amount =rateExchange[userINput.convert_from];
let to_amount = rateExchange[userINput.convert_to];
let amount= userINput.amount;

//formula of conversion
let base_amount = amount / from_amount;
let convertedAmount = base_amount * to_amount;

// console the converted amount
console.log(`converted Amount is:`,convertedAmount.toFixed(3));