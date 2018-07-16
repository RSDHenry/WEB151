// Circle function to draw a bee
var circle = function (x, y, radius, fillCircle) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	if (fillCircle) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
};

// drawBee function that will draw the bee when called
var drawBee = function (x, y) {
	ctx.lineWidth = 2;
	ctx.strokeStyle = "Black";
	ctx.fillStyle = "Gold";
	
	circle(x, y, 8, true); //Main yellow body circle
	circle(x, y, 8, false); // Black outline around yellow body circle
	circle(x - 5, y - 11, 5, false); // Left wing
	circle(x + 5, y - 11, 5, false); // Right wing
	circle(x - 2, y - 1, 2, false); // left eye
	circle(x + 2, y - 1, 2, false); // Right eye
};

// Function to update the bee's location for buzzing animation
var update = function (coordinate) {
	var offset = Math.random() * 4 - 2;
	coordinate += offset;
	
	if (coordinate > 200) {
		coorddinate = 200;
	}
	if (coordinate < 0) {
		coordinate = 0;
	}
	// Return the coordinate
	return coordinate;
};

// Function to animate the buzzing bee.
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 100;
var y = 100;

setInterval(function () {
	ctx.clearRect(0, 0, 200, 200);
	
	drawBee(x, y);
	x = update(x);
	y = update(y);
	
	ctx.strokeRect(0, 0, 200, 200);
}, 30);