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

buttonNodeList = document.querySelectorAll("button");
buttonArray = Array.from(buttonNodeList);

buttonArray.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
    //here check if the innertext is a number
    //if its not a number RETURN
    //when its a number create a new element
    //keep appending numbers to this element
    //when a string is clicked create new element
    //when = is clicked do the math and print
    if (!isNaN(Number(button.innerText))) {
      let newVar = document.createElement("p");
    } else {
      return;
    }
  });
});
