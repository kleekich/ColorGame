var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.queryselector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;

		if(clickedColor=== pickedColor){
			changeColors(clickedColor);
			messageDisplay.textContent = "Correct!"
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