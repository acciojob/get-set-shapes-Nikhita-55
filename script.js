// Rectangle class
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate area
    getArea() {
        return this._width * this._height;
    }
}

// Square class that extends Rectangle
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength); // Use the same value for width and height
    }

    // Method to calculate perimeter
    getPerimeter() {
        return 4 * this._width;
    }
}

// Example usage:

// Create a rectangle
let rect = new Rectangle(4, 5);
console.log(`Rectangle Area: ${rect.getArea()}`);  // Output: 20

// Create a square
let sq = new Square(4);
console.log(`Square Area: ${sq.getArea()}`);       // Output: 16
console.log(`Square Perimeter: ${sq.getPerimeter()}`);  // Output: 16

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
