//create an array of all the buttons
buttonNodeList = document.querySelectorAll("button");
buttonArray = Array.from(buttonNodeList);

//write a function that will do the calculations
let calculate = (button) => {
  console.log("a button was clicked");
  let theScreen = document.querySelector("#printP");
  let Num;

  if (!isNaN(button.innerText)) {
    theScreen.append(button.innerText);
  } else {
    switch (button.innerText) {
      case "AC":
        console.log("clearing display");
        theScreen.innerText = "";
        break;
      case "÷":
        console.log("division selected");
        theScreen.innerText = "";
        break;
      case "x":
        console.log("multiplication selected");
        theScreen.innerText = "";
        break;
      case "-":
        console.log("subtraction selected");
        theScreen.innerText = "";
        break;
      case "+":
        console.log("addition selected");
        theScreen.innerText = "";
        break;
      case "=":
        console.log("calculating...");
        break;
    }
  }
};
//call calc function when a button is clicked
buttonArray.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
  });
});
