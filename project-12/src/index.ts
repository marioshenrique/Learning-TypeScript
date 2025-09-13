// Exercises on Interfaces in TypeScript

// 1.  Basic Interface Syntax

/*

Exercise 1:

Create an interface called 'Address' that has the following required properties:

- street (string)
- number (number)
- city (string)
- state (string)

Then, create a function 'displayAddress' that receives an 'Address' object as a parameter and returns a formatted string in the following pattern:

'Street <street>, No. <number>, <city> - <state>'

*/

interface Address {
    street: string,
    number: number,
    city: string,
    state: string
}

interface DisplayInfo {
    (param: Address): void
}

const displayAddress: DisplayInfo = (address) => {
    console.log(`Street ${address.street}, No. ${address.number}, ${address.city} - ${address.state}`)
}

console.log("Exercise 1 - Basic Interface Syntax-------")
displayAddress(
    {
        street: "Rodovia Raposo Tavares",
        number: 500,
        city: "Cotia",
        state: "SP"
    }
)
console.log("------------------------------------------")

/*

2. Interface with Optional Properties

Exercise 2:

Create an interface 'User' that has:

- name (string)
- email (string)
- phone (string, optional)

Then, create a function 'createUser' that receives a 'User' object and returns a string. if 
the phone number is provided, include it in response; otherwise, only show the name and email.

Example output with phone:

'Name: João, Email: joao@gmail.com, Phone: (11) 99999-9999'

Example output without phone:

'Name: Joao, Email: joao@gmail.com'

*/

interface User {
    name: string,
    email: string,
    phone?: string
}

function createUser(param: User): string {
    if (param.phone) {
        return `Name: ${param.name}, Email: ${param.email}, Phone: ${param.phone}`
    }
    return `Name: ${param.name}, Email: ${param.email}`
}

console.log("Exercise 2 - Interface with Optional Properties")
console.log("With phone:")
console.log(createUser({
    name: "Mario Henrique",
    email: "mario@gmail.com",
    phone: "(99)99999-9999"
}))
console.log("Without phone:")
console.log(createUser({
    name: "Mario Henrique",
    email: "mario@gmail.com"
}))
console.log("-----------------------------------------------")

/*

3. Interface with Readonly Properties

Exercise: 3

Define as interface 'Book' with:

- title (string, readonly)
- author (string, readonly)
- publicationYear (number)

The, create a function 'updatePublicationYear' that receives a 'Book' object and a new
publication year, changing only the 'publicationYear'.

*/

interface Book {
    readonly title: string,
    readonly author: string,
    publicationYear: number
}

const book = {
    title: "O encantador de serpentes",
    author: "Mario Henrique",
    publicationYear: 2024
}

function updatePublicationYear(param: Book, publicationYear: number): void {
    param.publicationYear = publicationYear
}

updatePublicationYear(book, 2025)

console.log("Exercise 3 - interface with readonly properties")
console.log(book)
console.log("-----------------------------------------------")

/*

Exercise 4:

Create an interface 'Vehicle' with the following rules:

- brand (string, readonly)
- model (string, readonly)
- year (number, readonly)
- color (string)
- plate (string, optional)

Then:

- Create a function 'describeVehicle' that returns a complete description of the vehicle.
- Create another function 'changeColor' that allows changing only the vehicle's color.

*/

interface Vehicle {
    readonly brand: string,
    readonly model: string,
    readonly year: number,
    color: string,
    plate?: string
}

function describeVehicle(param: Vehicle): string {
    if (param.plate) {
        return `Brand: ${param.brand}; Model: ${param.model}, ${param.year}, ${param.color}; Plate: ${param.plate}`
    }
    return `Brand: ${param.brand}; Model: ${param.model}, ${param.year}, ${param.color}`
}

function changeColor(param: Vehicle, color: string): void {
    param.color = color
}

console.log("Exercise 4 -----------------")

console.log("Vehicle with plate")

const vehicleWithPlate = {
    brand: "BMW",
    model: "GS800",
    year: 2025,
    color: "black",
    plate: "RGS1D30"
}

console.log(describeVehicle(vehicleWithPlate))

changeColor(vehicleWithPlate, "red")

console.log(describeVehicle(vehicleWithPlate))

const vehicleWithoutPlate = {
    brand: "BMW",
    model: "GS310",
    year: 2025,
    color: "white"
}

console.log(describeVehicle(vehicleWithoutPlate))

changeColor(vehicleWithoutPlate, "black")

console.log(describeVehicle(vehicleWithoutPlate))

console.log("----------------------------")

/*

Exercise 5: Interface with Functions

Create an interface 'Converter' that defines the signature of a
function that:

- Receives a numeric value (number)
- Returns a formatted string

Then:

- Create a function 'convertToCurrency' that implements the 'Converter' interface,
formatting the number into a currency format.

*/

const CURRENTQUOTE = {
    USD: 0.1759,
    EUR: 0.1549,
    GBP: 0.1322 
}

interface Converter {
    (param: number): string
}

const convertBRLToUSD: Converter = (value) => {
    const convertedValue = value * CURRENTQUOTE.USD
    return `Converted value: ${convertedValue}`
}

const convertBRLToEUR: Converter = (value) => {
    const convertedValue = value * CURRENTQUOTE.EUR
    return `Converted value: ${convertedValue}`
}

const convertBRLToGBP: Converter = (value) => {
    const convertedValue = value * CURRENTQUOTE.GBP
    return `Converted value: ${convertedValue}`
}

console.log("Exercise 5 -----------------")
console.log("USD")
console.log(convertBRLToUSD(20))
console.log("EUR")
console.log(convertBRLToEUR(20))
console.log("GBP")
console.log(convertBRLToGBP(20))
console.log("----------------------------")