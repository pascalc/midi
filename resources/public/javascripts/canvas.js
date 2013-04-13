var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var image      = catImage,
	dotRadius  = 4;

function addDot(x, y, dotColor) {
	ctx.beginPath();
	ctx.arc(x, y, dotRadius, 0, 2*Math.PI);
	ctx.fillStyle = dotColor;
	ctx.fill();
	ctx.fillStyle = color.defaultColor;
}

function drawDots() {
	for (var i = 0; i < image.length; i++) {
		var x     = image[i][0],
		    y     = image[i][1],
		    color = dotColorAt(i);
		addDot(x, y, color)
	}
}

function dotColorAt(i) {
	return noteColors[notes[i]];
}

function drawLine(startX, startY, endX, endY) {
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX  , endY);
	ctx.stroke();
}

function drawNextLine() {
	var startDot = image[currentDot],
		endDot   = image[(currentDot + 1) % image.length]
	var startX   = startDot[0],
		startY   = startDot[1],
		endX     = endDot[0],
		endY     = endDot[1];

	drawLine(startX, startY, endX, endY);
	currentDot = (currentDot + 1) % image.length;
}