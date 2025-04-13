// For Loop Exercises in TypeScript

// 1 - Progressive Countdown

/*
Write a script that prints the numbers from 1 to 10 using a 
for loop
*/
console.log("Progressive countdown")

for (let i = 1; i <= 10; i++) {
    console.log(`Count: ${i}`)
}

// 2 - Countdown

console.log("Countdown")

for (let i = 10; i > 0; i--) {
    console.log(`Count: ${i}`)
}

// 3 - Even numbers

console.log("Even Numbers")

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Even number: ${i}`)
    }
    else {
        continue
    }
}

// 4 - Sum of numbers from 1 to N

/*
Build a script that asks for a number N and displays the sum of all numbers from 1 to N
*/

console.log("Sum of numbers from 1 to N")

const n: number = 5
let sum: number = 0

for (let i = 1; i <= n; i++) {
    sum = sum + i
    console.log(`Sum: ${sum}`)
}

// 5 - Looping through an array of numbers

/*
For an array of numbers, use a for loop to display all the elements
*/

console.log("Looping through an array of numbers")

let numbers: number[] = [1980, 1982, 1983, 1987, 1992, 2009, 2019, 2020]

for (let number of numbers) {
    console.log(`Year: ${number}`)
}

// 6 - Looping through an array of strings

/*
For an array of strings, use a for loop to display all the strings
*/

console.log("Looping through an array of strings")

let players: string[] = [
    "Rossi", 
    "Alexsandro",
    "Wesley",
    "Ortiz",
    "Leo Pereira",
    "Pulgar",
    "De la Cruz",
    "Arrascaeta",
    "Luis Araujo",
    "Gerson",
    "Plata"
] 

for (let player of players) {
    console.log(`Player: ${player}`)
}

// 7 - Looping through elements of an object

let bankInfo: Record<string, { name: string; febraban_code: string }> = {
    itau: {
        name: "Itau",
        febraban_code: "m23"
    },
    santander: {
        name: "Santander",
        febraban_code: "m62"
    }
}

for (let bank in bankInfo) {
    let code_febraban = bankInfo[bank].febraban_code
    console.log(`febraban_code: ${code_febraban}`)
}
