
// establishing shapes class
class shapes {
    constructor() {
      this.color = "";
    }

    // Shape class takes in setColor function
    setColor(colorVar) {
      this.color = colorVar;
    }
  }

  // Takes from shapes class and applies it to triangle
class triangle extends shapes {
    render() {

      // Brings back the shape with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Takes from shapes class and applies it to circle
  class circle extends shapes {
    render() {

      // Brings back the shape with color input
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
    // Takes from shapes class and applies it to square
    class square extends shapes {
      render() {

        // Brings back the shape with color input
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
      }
    }

 
  module.exports = { triangle, square, circle };