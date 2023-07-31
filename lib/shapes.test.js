// testing for shapes
const { triangle, square, circle } = require("./shapes.js");

// triangle
describe("figure triangle", () => {
    test("triangle", () => {
      const shape = new triangle();
      shape.setColor("purple");
      expect(shape.render()).toEqual(
        '<polygon points="152, 20 246, 184 58, 184" fill="purple" />'
      );
    });
  });
  
  // circle
  describe("figure circle", () => {
    test("circle", () => {
      const shape = new circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="blue" />'
      );
    });
  });

    // square
    describe("figure square", () => {
      test("square", () => {
        const shape = new square();
        shape.setColor("gray");
        expect(shape.render()).toEqual(
          '<rect x="73" y="40" width="200" height="200" fill="grey" />'
        );
      });
    });