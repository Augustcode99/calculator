//i need to track the numbers clicked
//when a button that isnt a number is clicked
//stop appending to the first number variable
//then start a new variable and start appending to that
//keep creating new variables until = is clicked
//call a calculate function and assign it to bottomPrint.innerText
//need to add event listener that checks the innerText of that button
//and appends it to a automatically generated element that will be used
//to get the innertext later.
//see if theres a a math method that checks if innerText is a number
//check if you need to first make the number a number if its a string
//create an array of buttons with queryselectorall and add a forall loop
// to add event listeners to all of them

var firstNum;

buttonNodeList = document.querySelectorAll("button");
buttonArray = Array.from(buttonNodeList);

// if (!isNaN(Number(button.innerText)))
buttonArray.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isNaN(Number(button.innerText))) {
      let theScreen = document.querySelector("#printP");
      theScreen.append(button.innerText);
    } else if (button.innerText === "+" && firstNum) {
    }
  });
});
