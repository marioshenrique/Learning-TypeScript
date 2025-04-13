/*
Exercise module on switch case structures
*/

// Days of the week

/*
Build a "switch case" structure responsible for returning the day of the week
from a variable that stores the numerical value corresponding to the day of the week
*/

/*
sunday: 1
monday: 2
tuesday: 3
wednesday: 4
thursday: 5
friday: 6
saturday: 7
*/

console.log("1 - Days of the week")

function getDayWeek(day: string): void {
    console.log(`Day of the week: ${day}`)
}

const dayWeek: number = 1

switch (dayWeek) {
    case 1:
        getDayWeek("sunday")
        break
    case 2:
        getDayWeek("monday")
        break
    case 3:
        getDayWeek("tuesday")
        break
    case 4:
        getDayWeek("wednesday")
        break
    case 5:
        getDayWeek("thursday")
        break
    case 6:
        getDayWeek("friday")
        break
    case 7:
        getDayWeek("saturday")
        break
    default:
        console.log("Invalid input data")
}

// Simple calculator

/*
Build a script that receives two numbers and an operator and returns the result
of the operation
*/

console.log("2 - simple calculator")

let operatorArray: string[] = ["+", "-", "*", "/"]

let num1: number = 10
let num2: number = 10
let operator: string = "+"

operatorArray.forEach((operator) => {
    switch (operator) {
        case "+":
            console.log(`Operation result: ${num1 + num2}`)
            break
        case "-":
            console.log(`Operation result: ${num1 - num2}`)
            break
        case "*":
            console.log(`Operation result: ${num1 * num2}`)
            break
        case "/":
            console.log(`Operation result: ${num1 / num2}`)
            break
        default:
            console.log("Select a valid input data!")
    }
})

// Grade Classification

/*
Build a script that receiver a grade from 0 to 10 and classifies student performance
according to the following table:

10: excellent
8-9: very good
6-7: good
4-5: regular
0-3: bad

*/
console.log("Grade Classification")

let grade: number = 0

switch (grade) {
    case 10:
        console.log("Grade classification: excellent")
        break
    case 9:
    case 8:
        console.log("Grade classification: very good")
        break
    case 7:
    case 6:
        console.log("Grade classification: good")
        break
    case 5:
    case 4:
        console.log("Grade classification: regular")
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Grade classification: bad")
        break
    default:
        console.log("Select a valid input data!")
}

// Currency converter

/*
Build a script that receives a currency code (USD, EUR, GBP) and converts
a fixed value of 100 reais to the corresponding currency, assuming the following rates:

USD: 5.00
EUR: 5.30
GBP: 6.10

*/

console.log("Currency converter")

let currency: string = "GBP"

switch (currency) {
    case "USD":
        console.log(`100 reais equals ${100*5} USD`)
        break
    case "EUR":
        console.log(`100 reais equals ${100*5.30} EUR`)
        break
    case "GBP":
        console.log(`100 reais equals ${100*6.10} GBP`)
        break
    default:
        console.log("Select a valid input data!")
}
