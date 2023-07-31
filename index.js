// import node moduels
const filesystem = require('./node_modules')
// import inquirer
const inquirer = require("inquirer");
// imports defined variables from shapes.js
const {circle, square, triangle} = require("./lib/shapes");

class svgFormat{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="350" height="250">${this.shapeElement}${this.textElement}</svg>`
    }
	// svg text format
    setTextElement(text,color){
        this.textElement = `<text x="155" y="110" font-size="70" font-style="oblique" text-anchor="middle" fill="${color}">${text}</text>`
    }
	// svg shape format
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

// user input field
const questions = [
	// asks user for 3 letters to input in logo
    {
        type: "input",
        name: "text",
        message: "Input 3 letters:",
    },
	// asks user for prefered text color
    {
        type: "input",
        name: "text-color",
        message: "Enter prefered text color:",
    },
	// asks user for prefered shapes color
    {
        type: "input",
        name: "shape",
        message: "Enter prefered shape color:",
    },
	// asks user for prefered shape type
    {
        type: "input",
        name: "shape-type",
        message: "Enter what type of shape you would like:",
    },
];

// Transfering info to file
function information(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

async function init() {
    console.log("Start");
	var Pstring = "";
	var svg_file = "logo.svg";

    // Getting input from user
    const answers = await inquirer.prompt(questions);

	//user text for 3 letters
	var inputText = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		inputText = answers.text;
	} 
	console.log("Letters: [" + inputText + "]");
	//user font color
	fontColor = answers["text-color"];
	console.log("font color: [" + fontColor + "]");
	//user shape color
	shapeColor = answers.shape;
	console.log("shape color: [" + shapeColor + "]");
	//user shape type
	shapeType = answers[""];
	console.log("shape type = [" + shapeType + "]");
	

	// Create a new Svg instance and add the shape and text elements to it
	var svg = new Svg();
	svg.setTextElement(inputText, fontColor);
	Pstring = svg.render();
	
	//creating shape
	console.log("Printing shap:\n\n" + Pstring);
	console.log("Success");
	information(svg_file, Pstring); 
}
init()

svgString