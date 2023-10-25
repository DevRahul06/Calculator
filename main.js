const display = document.querySelector(".dispay");
const buttons = document.querySelectorAll(".button");
const spacicalChars = ["%", "*", "/", "-", "="];

let output = "";

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    // if output has '%',replace with '/100' before evaluating
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // if DEL button is clicked, remove the last charcter from the output
    output = output.toString().slice(0,-1);
  }else{
    // if output is empty and button is spcialchars then return
    if(output === "" && spacicalChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add event listener to button, call calculate() on click

buttons.forEach((button) => {
  // Button click listener calls calculate() with dataset vlue as argument

  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
