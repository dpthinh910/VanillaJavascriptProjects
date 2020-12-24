var numSquares = 6;
var colors = [];
var square = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#messageDisplay");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

/*
Init function
*/
init()
function init() {
  setupModeButtons();
	setupSquares();
	resetGame();
}

/*
==============
 Functionalities
==============
*/
// Switch easy <-> hard mode of the game

function setupModeButtons() {
  for (let i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      mode[0].classList.remove('selected');
      mode[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      resetGame();
    })
  }
}
// Check if we get the right color
function setupSquares() {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function () {
      let clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        message.style.visibility = "initial";
        message.textContent = "Correct ! You are awesome :) ";
        reset.textContent = "Play Again ?";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else {
        message.style.visibility = "initial";
        message.textContent = "Try Again...";
        this.style.backgroundColor = "#ffffff";
      }
    })
  }
}

//Reset function
function resetGame() {
  colors = generateRandomColors(numSquares);
  // Choose a random color from array of squares
  pickedColor = pickColor();
  //Change the colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  reset.textContent = "NEW COLORS";
  message.textContent = "";
  //Change colors of each square
  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = "lightskyblue";
  reset.addEventListener('click', function () { resetGame() });
}
//Change color function ... 
function changeColor(color) {
  for (let i = 0; i < numSquares; i++) {
    square[i].style.backgroundColor = color;
  }
}
// Create a random picked color
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
// Generate an array of random colors each time we click reset button
function generateRandomColors(num) {
  //Initialize an empty array
  let colorArr = [];
  for (let i = 0; i < num; i++) {
    colorArr.push(randomColors());
  }
  return colorArr;
}

function randomColors() {
  // RGB Color - You can customize based on your own preference

  // Red value from 0 - 255
  let red = Math.floor(Math.random() * 256);
  // Green value from 0 - 255
  let green = Math.floor(Math.random() * 256);
  // Blue value from 0 - 255
  let blue = Math.floor(Math.random() * 256);
  // Return value of RGB color
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}