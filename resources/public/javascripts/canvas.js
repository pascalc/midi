var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var image      = catImage,
	dotRadius  = 4;

function addDot(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, dotRadius, 0, 2*Math.PI);
	ctx.fill();
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