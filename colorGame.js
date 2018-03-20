var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		//figure out how many square to show
		numSquares = this.textContent === "EASY"? 3 : 6;
			
		reset();
		//pick new colors

		//pick a new pickedColor

		//update page to reflect changes

	});
}

function reset() {
	//gernate all new colors
	colors = generateRandomColors(numSquares);
	//pick new randonm color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//Remove our message
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			//We give our display block back to normal first
			//in case we set to none previously
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//add initial colors to squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor=== pickedColor){
			changeColors(clickedColor);
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	})
}

function changeColors(color){

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i <num; i++){
		//get random color push into arr
		arr[i] = randomColor();
	}


	return arr;

}

function randomColor() {
	//pick red
	var r = Math.floor(Math.random()*256);
	//pick green
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}