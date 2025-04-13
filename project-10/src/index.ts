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

console.log(Animal.totalCreated)
