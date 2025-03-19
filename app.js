
let driver = {
    name: "Stas Fediv",
    category: "C",
    personalLimitations: "No driving at night"
};

let car1 = {
    color: "black",
    maxSpeed: 256,
    driver: driver,
    tuning: true,
    numberOfAccidents: 0,
    drive: function() {
        console.log("I am not driving at night.");
    }
};

console.log(car1);
car1.drive();

let driver2 = {
    name: "Рядок, який містить ім'я та прізвище виконавця практичної роботи",
    category: "B",
    personalLimitations: null
};

let car2 = {
    color: "вказати довільний колір англійською мовою",
    maxSpeed: "вказати довільне число",
    driver: driver2,
    tuning: false,
    numberOfAccidents: 2,
    drive: function() {
        console.log("I can drive anytime.");
    }
};

console.log(car2);
car2.drive();

// Функція-конструктор Truck залишається без змін
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}


Truck.prototype.AssignDriver = function(driver) {
    this.driver = {
        name: driver.name,
        nightDriving: driver.nightDriving,
        experience: driver.experience
    };
};


Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        console.log(`\nDriver ${this.driver.name}`);
        console.log(this.driver.nightDriving ? "drives at night" : "does not drive at night");
        console.log(`and has ${this.driver.experience} years of experience.`);
    }
};


let myTruck = new Truck("black", 5000, 110, "Audi", "Q8");
console.log(myTruck);


let newDriver = {
    name: "Stas Fediv",
    nightDriving: false,
    experience: 2
};


myTruck.AssignDriver(newDriver);
console.log("After assigning driver:", myTruck);

myTruck.trip();


let truck1 = new Truck("blue", 4500, 100, "Mercedes", "Actros");
let truck2 = new Truck("red", 5000, 120, "Volvo", "FH");


let firstDriver = {
    name: "Ivan Ivanenko",
    nightDriving: true,
    experience: 10
};

let secondDriver = {
    name: "Petro Petrenko",
    nightDriving: false,
    experience: 3
};


truck1.AssignDriver(firstDriver);
truck2.AssignDriver(secondDriver);

console.log("\n====\nTruck 1 details:");
truck1.trip();

console.log("\n====\nTruck 2 details:");
truck2.trip();


class Square {
    constructor(a) {
        this.a = a;
    }

    area() {
        return this.a * this.a;
    }

    perimeter() {
        return 4 * this.a;
    }

    length() {
        console.log(`Total length of all sides: ${this.perimeter()}`);
    }

    square() {
        console.log(`Area of the square: ${this.area()}`);
    }

    info() {
        console.log(`Each side length: ${this.a}`);
        console.log(`Perimeter (total length of all sides): ${this.perimeter()}`);
        console.log(`Area of the square: ${this.area()}`);
    }

    static help() {
        console.log("The Square class represents a square geometric figure with equal sides.");
        console.log("It includes methods to calculate the square's area (square), perimeter (length), and other properties.");
    }
}

let mySquare = new Square(10);
console.log(`\n-- Square\nSide length of the square: ${mySquare.a}`);
mySquare.length();
mySquare.square();
mySquare.info();

Square.help();


class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    area() {
        return this.a * this.b;
    }

    perimeter() {
        return 2 * (this.a + this.b);
    }

    length() {
        console.log(`Total length of all sides: ${this.perimeter()}`);
    }

    square() {
        console.log(`Area of the rectangle: ${this.area()}`);
    }

    info() {
        console.log(`Length of the rectangle: ${this.a}`);
        console.log(`Width of the rectangle: ${this.b}`);
        console.log(`Perimeter of the rectangle: ${this.perimeter()}`);
        console.log(`Area of the rectangle: ${this.area()}`);
    }

    static help() {
        console.log("The Rectangle class represents a rectangle geometric figure with two sides of potentially different lengths.");
        console.log("It includes methods to calculate the rectangle's area (square) and perimeter (length), among other properties.");
    }
}

let myRectangle = new Rectangle(10, 5);
console.log(`\n-- Rectangle\nDimensions of the rectangle: length = ${myRectangle.a}, width = ${myRectangle.b}`);
myRectangle.length();
myRectangle.square();
myRectangle.info();

Rectangle.help();
