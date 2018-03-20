var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
	//gernate all new colors
	colors = generateRandomColors(6);
	//pick new randonm color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
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
			messageDisplay.textContent = "Correct!"
			h1.style.backgroundColor = pickedColor;
		}else{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again!"
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