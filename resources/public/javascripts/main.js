var currentDot = 0;

function gameIsFinished() {
	return currentDot == image.length - 1;
}

function onNoteDown(note) {
	var note     = note.toLowerCase(),
	    noteCode = note.charCodeAt(0);
	    expectedNote = getNextNote(),
	    expectedNoteCode = getNextNote().charCodeAt(0);

	if (noteCode == expectedNoteCode) {
		if (gameIsFinished()) {
			alert("Great job!");
		}
		console.log('Good!');
		drawNextLine();
	}
	else {
		console.log("Wrong character `" + note + "`, next is: " + getNextNote());
	}
}
