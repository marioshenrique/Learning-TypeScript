// Exercises - Abstract Class

/*
Transportation System

Requirements: 

Create an abstract class Transport with:

Attributes:

- brand: string
- maximumSpeed: number

Abstract method:

- move(): void

Concrete method:

- displayInfo() which prints brand and max speed

Create two classes that inherit from Transport:

Bicycle: implements move() with message: 'Pedalling...'

Car: implements move() with message 'Accelerating...'
*/

abstract class Transport {

    constructor(public brand: string, public maximumSpeed: number) {}

    displayInfo(): void {
        console.log(`Brand: ${this.brand}`)
        console.log(`Maximum speed: ${this.maximumSpeed}`)
    }

    abstract move(): void;
}

class Bicycle extends Transport {

    constructor(brand: string, maximumSpeed: number) {
        super(brand, maximumSpeed)
    }

    move(): void {
        console.log("Pedalling...")
    }
}

class Car extends Transport {

    constructor(brand: string, maximumSpeed: number) {
        super(brand, maximumSpeed)
    }

    move(): void {
        console.log("Accelerating...")
    }
}

console.log("Exercise 1 -------------------")
const bicycle = new Bicycle("Monark", 20)
console.log(bicycle.brand)
console.log(bicycle.maximumSpeed)
bicycle.displayInfo()
bicycle.move()

const car = new Car("Volkswagen", 190)
console.log(car.brand)
console.log(car.maximumSpeed)
car.displayInfo()
car.move()
console.log("------------------------------")


// Exercise 2 - Generic Geometric Shape

/*
Requirements:

Create an abstract class GeometricForm with:

- Abstract method calculateArea(): number
- Abstract method calculatePerimeter(): number

Create concrete class:

- Rectangule: receives width and height
- Circle: receives radius

*/

abstract class GeometricForm {

    static PI = 3.14159

    abstract calculateArea(): number

    abstract calculatePerimeter(): number

}

class Circle extends GeometricForm {

    constructor(public radius: number) {
        super()
    }

    calculateArea(): number {
        const area = GeometricForm.PI*(this.radius)**2
        return area
    }

    calculatePerimeter(): number {
        const perimeter = 2*GeometricForm.PI*this.radius
        return perimeter
    }
}

class Rectangule extends GeometricForm {

    constructor(public width: number, public height: number) {
        super()
    }

    calculateArea(): number {
        const area = this.width*this.height
        return area
    }

    calculatePerimeter(): number {
        const perimeter = 2*(this.width + this.height)
        return perimeter
    }
}

console.log("Exercise 2 -----------------------")
const geometric = new Circle(1)
console.log("circle")
console.log(geometric.calculateArea())
console.log(geometric.calculatePerimeter())
console.log("rectangule")
const rectangule = new Rectangule(10, 20)
console.log(rectangule.calculateArea())
console.log(rectangule.calculatePerimeter())
console.log("----------------------------------")