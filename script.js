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

  //if clicked button is number show on screen
  if (!isNaN(button.innerText)) {
    while (theScreen.innerText.length < 10) {
      theScreen.append(button.innerText);
      break;
    }
  }
  //if bttn is not number, set operator and num1-num2, clear or display result
  else {
    switch (button.innerText) {
      case "=":
        num2 = theScreen.innerText;
        console.log("calculating...");
        console.log(Number(num1), operator, Number(num2));
        switch (operator) {
          case "+":
            theScreen.innerText = Number(num1) + Number(num2);
            break;
          case "-":
            theScreen.innerText = Number(num1) - Number(num2);
            break;
          case "*":
            theScreen.innerText = Number(num1) * Number(num2);
            break;
          case "/":
            theScreen.innerText = Number(num1) / Number(num2);
            break;
        }
        //set operator down here to not override it before its used in switch
        operator = "=";
        break;
    }
    //this codes here so we dont reset num1 while setting num2
    if (!num2) {
      num1 = theScreen.innerText;
    }
    switch (button.innerText) {
      case "AC":
        console.log("clearing display");
        num1 = num2 = operator = "";
        break;
      case "÷":
        console.log("division selected");
        operator = "/";
        break;
      case "x":
        console.log("multiplication selected");
        operator = "*";
        break;
      case "-":
        console.log("subtraction selected");
        operator = "-";
        break;
      case "+":
        console.log("addition selected");
        operator = "+";
        break;
    }
    //when we select an operator always clear screen
    if (operator !== "=") {
      theScreen.innerText = "";
    }
  }
  //use below code for debugging
  // console.log("num1 is", num1);
  // console.log("num2 is", num2);
  // console.log("operator is", operator);
};
//call calc function when a button is clicked
buttonArray.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
  });
});
