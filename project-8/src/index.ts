// Exercise Get and Set

/*

1 - TEMPERATURE CONTROL

Create a Thermometer class with:

- A private field '_celsius'
- A setter to set the temperature in Celsius
- A getter to get the temperature converted to Fahrenheit

*/

class Thermometer {
    private _celsius: number

    constructor(temperatureInCelsius: number) {
        this._celsius = temperatureInCelsius
    }

    private _convertCelsiusToFahrenheit(temperatureInCelsius: number): number {
        const temperatureConverted = (temperatureInCelsius*(9/5)) + 32
        return temperatureConverted
    }

    private _convertFahrenheitToCelsius(temperatureInFahrenheit: number) {
        const temperatureConverted = (temperatureInFahrenheit - 32)*(5/9)
        return temperatureConverted
    }

    get temperatureFahrenheit(): number {
        const temperatureConverted = this._convertCelsiusToFahrenheit(this._celsius)
        return temperatureConverted
    }

    set temperatureFahrenheit(temperature: number) {
        this._celsius = this._convertFahrenheitToCelsius(temperature)
    }
}

console.log("------ Temperature Control")
const control = new Thermometer(35)
console.log(control.temperatureFahrenheit) // 95 °F
control.temperatureFahrenheit = 122
console.log(control.temperatureFahrenheit) // 122 °F
console.log("--------------------------")

class Thermometer1 {

    constructor(private _celsius: number) {}

    private _convertCelsiusToFahrenheit(temperatureInCelsius: number): number {
        const temperatureConverted = (temperatureInCelsius*(9/5)) + 32
        return temperatureConverted
    }

    private _convertFahrenheitToCelsius(temperatureInFahrenheit: number) {
        const temperatureConverted = (temperatureInFahrenheit - 32)*(5/9)
        return temperatureConverted
    }

    get temperatureFahrenheit(): number {
        const temperatureConverted = this._convertCelsiusToFahrenheit(this._celsius)
        return temperatureConverted
    }

    set temperatureFahrenheit(temperature: number) {
        this._celsius = this._convertFahrenheitToCelsius(temperature)
    }
}

console.log("------ Temperature Control")
const control1 = new Thermometer(35)
console.log(control1.temperatureFahrenheit) // 95 °F
control1.temperatureFahrenheit = 122
console.log(control1.temperatureFahrenheit) // 122 °F
console.log("--------------------------")
