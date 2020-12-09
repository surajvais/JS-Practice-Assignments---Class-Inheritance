// declare class

// export class using module.exports

class shape {
  constructor() {
    super();
    this.drawShape = function () {
      console.log("draw shape");
    };

    this.calculateArea = () => {
      console.log("shape calc area");
    };

    this.color = "blue";
  }
}

module.exports.shape = shape;
