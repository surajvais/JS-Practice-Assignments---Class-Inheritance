let shape = require("./shape.js");

// declare class

// export class using module.exports

class circle extends shape {
  constructor() {
    super();
    this.calculateArea = () => {
      console.log("circle calc area");
    };
  }
}

module.exports.circle = circle;