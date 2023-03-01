//create an array of all the buttons
buttonNodeList = document.querySelectorAll("button");
buttonArray = Array.from(buttonNodeList);

//setting variables here so they arent lost between func calls
let num1;
let num2;
let operator;

//write a function that will do the calculations
const calculate = (button) => {
  let theScreen = document.querySelector("#printP");

  if (!isNaN(button.innerText)) {
    while (theScreen.innerText.length < 10) {
      theScreen.append(button.innerText);
      num2 = theScreen.innerText;
      console.log("num1 is", num1);
      console.log("num2 is", num2);
      console.log("operator is", operator);
      break;
    }
  } else {
    switch (button.innerText) {
      case "AC":
        console.log("clearing display");
        theScreen.innerText = "";
        num1 = "";
        num2 = "";
        operator = "";
        break;
      case "÷":
        console.log("division selected");
        num1 = theScreen.innerText;
        num2 = "";
        operator = "/";
        theScreen.innerText = "";
        break;
      case "x":
        console.log("multiplication selected");
        num1 = theScreen.innerText;
        num2 = "";
        operator = "*";
        theScreen.innerText = "";
        break;
      case "-":
        console.log("subtraction selected");
        num1 = theScreen.innerText;
        num2 = "";
        operator = "-";
        theScreen.innerText = "";
        break;
      case "+":
        console.log("addition selected");
        num1 = theScreen.innerText;
        num2 = "";
        operator = "+";
        theScreen.innerText = "";
        break;
      case "=":
        console.log("calculating...");
        console.log(typeof num1);
        console.log(typeof num2);
        console.log(typeof operator);
        break;
    }
    console.log("num1 is", num1);
    console.log("num2 is", num2);
    console.log("operator is", operator);
  }
};
//call calc function when a button is clicked
buttonArray.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
  });
});
