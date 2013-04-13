var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var image             = catImage,
	defaultDotRadius  = 4,
	bigDotRadius      = 10;

function clearCanvas() {
	ctx.clearRect(0, 0, 600, 600);
}

function addDot(x, y, dotColor, dotRadius) {
	ctx.beginPath();
	ctx.arc(x, y, dotRadius || defaultDotRadius, 0, 2*Math.PI);
	ctx.fillStyle = dotColor;
	ctx.fill();
	ctx.fillStyle = color.defaultColor;
}

function drawDots(current) {
	for (var i = 0; i < image.length; i++) {
		var x         = image[i][0],
		    y         = image[i][1],
		    color     = dotColorAt(i),
		    dotRadius = (i == current) % image.length ? bigDotRadius : defaultDotRadius;
		addDot(x, y, color, dotRadius);
	}
}

function dotColorAt(i) {
	return noteColors[notes[i]];
}

function drawLine(fromIndex, toIndex) {
	var startDot = image[fromIndex],
		endDot   = image[toIndex % image.length]
	var startX   = startDot[0],
		startY   = startDot[1],
		endX     = endDot[0],
		endY     = endDot[1];

	ctx.moveTo(startX, startY);
	ctx.lineTo(endX  , endY);
	ctx.stroke();
}

function drawLines() {
	for (var toIndex = 1; toIndex <= currentDot; toIndex++) {
		fromIndex = toIndex - 1;
		drawLine(fromIndex, toIndex);
	}
}

function draw(current) {
	clearCanvas();
	drawDots(current);
	drawLines();
}
