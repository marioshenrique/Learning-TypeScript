// Exercises - static members

// Exercise 1: Temperature Conversion Utility

/*
create an TemperatureConverter class with:

- A static method celsiusToFahrenheit
- A static method fahrenheitToCelsius
*/

class TemperatureConverter {
    static celsiusToFahrenheit(temperatureCelsius: number): number {
        const temperature = (temperatureCelsius*(9/5)) + 32
        return temperature
    }

    static fahrenheitToCelsius(temperatureFahrenheit: number): number {
        const temperature = (temperatureFahrenheit - 32)*(5/9)
        return temperature
    }
}

console.log("Exercise 1 ----------------------------")
console.log(TemperatureConverter.celsiusToFahrenheit(35)) // 95
console.log(TemperatureConverter.fahrenheitToCelsius(95)) // 35
console.log("---------------------------------------")


// Exercise 2: Created Objects Counter

/* 

Create a Animal class that:

- Has a static property totalCreated.
- Increments totalCreated every time a new animal is created.

*/

class Animal {
    static totalCreated: number = 0

    constructor(public name: string, public age: number, public specie: string) {
        Animal.totalCreated++
    }
}
console.log("Exercise 2 ----------------------------")
console.log(Animal.totalCreated) // 0
const animal_01 = new Animal("Loki", 3, "Dog")
const animal_02 = new Animal("Kira", 3, "Dog")
const animal_03 = new Animal("Bruce", 10, "Dog")
console.log(Animal.totalCreated)
console.log("---------------------------------------")

// Exercise 3: Global Settings Manager

/*

Create a Configuration Class that:

- has a static property currentTheme with an initial value of clear
- has a static method changeTheme that changes the value of currentTheme

*/

type Theme = "clear" | "dark"

class Configuration {
    static currentTheme: string = "clear"

    static changeTheme(theme: Theme): void {
        if (theme === "clear" || theme === "dark") {
            console.log("The theme has been modified")
            Configuration.currentTheme = theme
        } else {
            console.log("The theme has not been modified")
        }
    }
}

console.log("Exercise 3 ----------------------------")
console.log(Configuration.currentTheme)
Configuration.changeTheme("dark")
console.log(Configuration.currentTheme)
console.log("---------------------------------------")