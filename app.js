let driver = {
    name: "Stas Fediv",
    category: "C",
    personalLimitations: "No driving at night"
};

let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 256;
car1.driver = new Object();
car1.driver.name = "Stas Fediv";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;
car1.drive = function() {
    console.log("I am not driving at night.");
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
        if (this.driver.nightDriving) {
            console.log("drives at night");
        } else {
            console.log("does not drive at night");
        }
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

// Square
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

// Rectangle
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

// Rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._alpha = alpha;
        this._beta = beta;
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        if (value > 0 && value < 180) {
            this._alpha = value;
        } else {
            throw new Error("Alpha must be a valid angle between 0 and 180 degrees.");
        }
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        if (value > 0 && value < 180) {
            this._beta = value;
        } else {
            throw new Error("Beta must be a valid angle between 0 and 180 degrees.");
        }
    }

    area() {
        return this.a * this.a * Math.sin(this.beta * Math.PI / 180);
    }

    length() {
        console.log(`Total length of all sides: ${4 * this.a}`);
    }

    square() {
        console.log(`Area of the rhombus: ${this.area()}`);
    }

    info() {
        console.log(`Side of the rhombus: ${this.a}`);
        console.log(`Obtuse angle (alpha): ${this.alpha} degrees`);
        console.log(`Acute angle (beta): ${this.beta} degrees`);
        console.log(`Perimeter of the rhombus: ${4 * this.a}`);
        console.log(`Area of the rhombus: ${this.area()}`);
    }

    static help() {
        console.log("The Rhombus class represents a rhombus geometric figure with equal sides and two types of opposite angles: acute and obtuse.");
        console.log("It includes methods to calculate the rhombus's area (square) and perimeter (length), and it provides detailed info with the 'info' method.");
    }
}

let myRhombus = new Rhombus(10, 120, 60);
console.log(`\n-- Rhombus\nDimensions of the rhombus: side = ${myRhombus.a}, alpha = ${myRhombus.alpha} degrees, beta = ${myRhombus.beta} degrees`);
myRhombus.length();
myRhombus.square();
myRhombus.info();

Rhombus.help();

// Parallelogram
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    area() {
        return this.a * this.b * Math.sin(this.beta * Math.PI / 180);
    }

    info() {
        console.log(`\n-- Parallelogram`);
        console.log(`Length: ${this.a}`);
        console.log(`Width: ${this.b}`);
        console.log(`Obtuse angle (alpha): ${this.alpha} degrees`);
        console.log(`Acute angle (beta): ${this.beta} degrees`);
        console.log(`Perimeter: ${this.perimeter()}`);
        console.log(`Area: ${this.area()}`);
    }

    static help() {
        console.log("The Parallelogram class represents a parallelogram geometric figure.");
        console.log("Properties include two sets of opposite sides being equal in length and two sets of opposite angles being equal.");
        console.log("It includes methods to calculate the parallelogram's area (square) and perimeter (length), and it provides detailed info with the 'info' method.");
    }
}

let myParallelogram = new Parallelogram(10, 20, 120, 60);
myParallelogram.info();

Parallelogram.help();

// Triangular
const Triangular = (a = 3, b = 4, c = 5) => ({ a, b, c });

const triangle1 = Triangular();
const triangle2 = Triangular(5, 12, 13);
const triangle3 = Triangular(7, 8, 9);

console.log("Triangle 1:", triangle1);
console.log("Triangle 2:", triangle2);
console.log("Triangle 3:", triangle3);

// Painter
function PiMultiplier(multiplier) {
    return function() {
        return Math.PI * multiplier;
    };
}

const multiplyByTwo = PiMultiplier(2);
const multiplyByTwoThirds = PiMultiplier(2 / 3);
const divideByTwo = PiMultiplier(1 / 2);

console.log("\nMultiplying 6 by 2:", multiplyByTwo(6));
console.log("Multiplying 6 by 2/3:", multiplyByTwoThirds(6));
console.log("Dividing 6 by 2:", divideByTwo(6));

// Painter
function Painter(colorProperty) {
    return function(object) {
        if (object && object[colorProperty]) {
            console.log(`The color of the paint is: ${object[colorProperty]}`);
        } else {
            console.log("No 'color' property occurred!");
        }
    };
}

const PaintBlue = Painter("color");
const PaintRed = Painter("color");
const PaintYellow = Painter("color");

const object1 = {
    maxSpeed: 280,
    type: 'Sportcar',
    color: 'magenta'
};

const object2 = {
    type: 'Truck',
    avgSpeed: 90,
    loadCapacity: 2400
};

const object3 = {
    maxSpeed: 180,
    color: 'purple',
    isCar: true
};

console.log("");
console.log("Using PaintBlue:");
PaintBlue(object1);

console.log("Using PaintRed:");
PaintRed(object2);

console.log("Using PaintYellow:");
PaintYellow(object3);
