// Exercices - Inheritance

// Exercise 1 - Animals

/*
Create an Animal Class with basic methods like eat() and sleep(). Then create subclasses like Dog() and Cat() that inherit from the Animal class and add specific methods.
*/

class Animal {
    constructor(protected name: string) {}

    eat(): void {
        console.log(`${this.name} is eating...`)
    }

    sleep(): void {
        console.log(`${this.name} is sleeping...`)
    }
}

class Dog extends Animal {
    constructor(name: string, private age: number) {
        super(name)
    }

    bark(): void {
        console.log(`${this.name} is barking...`)
    }

    getInfo(): void {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
    }
}

console.log("Exercise 1 ----------------")
const dog = new Dog("Loki", 3)
dog.eat() // Loki is eating...
dog.sleep() // Loki is sleeping...
dog.bark() // Loki is barking...
dog.getInfo()
console.log("---------------------------")

// Exxercise 2 - vehicle

/*
Create a base class Vehicle with general attributes (make, model) and method details(). Then derive subclasses like Car and Motorcycle, adding specific properties and methods.
*/

type DetailsVehicle = {
    brand: string,
    model: string
}

type DetailsCar = {
    brand: string,
    model: string,
    numberOfDoors: number,
    fuelType: string
}

type DetailMotorcycle = {
    brand: string,
    model: string,
    engineCC: number,
    fuelTankVolume: number
}

class Vehicle {
    protected brand: string
    protected model: string

    constructor(brand: string, model: string) {
        this.brand = brand
        this.model = model
    }

    details(): DetailsVehicle {
        return {
            brand: this.brand,
            model: this.model
        }
    }
}

class Car extends Vehicle {
    private numberOfDoors: number
    private fuelType: string

    constructor(brand: string, model: string, numberOfDoors: number, fuelType: string) {
        super(brand, model)
        this.numberOfDoors = numberOfDoors
        this.fuelType = fuelType
    }

    details(): DetailsCar {
        return {
            brand: this.brand,
            model: this.model,
            numberOfDoors: this.numberOfDoors,
            fuelType: this.fuelType
        }
    }
}

class Motorcycle extends Vehicle{
    private engineCC: number
    private fuelTankVolume: number

    constructor(brand: string, model: string, engineCC: number, fuelTankVolume: number) {
        super(brand, model)
        this.engineCC = engineCC
        this.fuelTankVolume = fuelTankVolume
    }

    details(): DetailMotorcycle {
        return {
            brand: this.brand,
            model: this.model,
            engineCC: this.engineCC,
            fuelTankVolume: this.fuelTankVolume
        }
    }
}
console.log("Exercise 2 --------------------")
const car = new Car("Ford", "KA 2.0 2019", 4, "Gasoline")
console.log(car.details())
const motorcycle = new Motorcycle("Honda", "XRE 300 2021", 300, 12.5)
console.log(motorcycle.details())
console.log("-------------------------------")
