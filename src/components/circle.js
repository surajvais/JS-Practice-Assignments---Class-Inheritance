const Shape = require("./shape");

// declare class

// export class using module.exports

class Circle extends Shape {
  constructor() {
    super();
  }

  calculateArea() {
    console.log("circle calc area");
  }
}

module.exports = Circle;
