var currentDot = 0;

function gameIsFinished() {
	return currentDot == image.length - 1;
}

function drawDots() {
	for (var i = 0; i < image.length; i++) {
		var x = image[i][0],
		    y = image[i][1];
		addDot(x, y)
	}
}

function onNoteDown(note) {
	var note     = note.toLowerCase(),
	    noteCode = note.charCodeAt(0);
	    expectedNote = getNextNote(),
	    expectedNoteCode = getNextNote().charCodeAt(0);

	if (noteCode == expectedNoteCode) {
		console.log('Good!');
		drawNextLine();
		if (gameIsFinished()) {
			alert("Great job!");
		}
	}
	else {
		console.log("Wrong character `" + note + "`, next is: " + getNextNote());
	}
}

drawDots();
