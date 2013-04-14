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
		console.log('Good!');
		console.log("Incrementing currentDot");
		currentDot = (currentDot + 1) % image.length;
		console.log("currentDot", currentDot);
		draw(currentDot);
		if (gameIsFinished()) {
			// setTimeout(function () {
			// 	alert("Great job!");	
			// }, 3000);
		}
	}
	else {
		console.log("Wrong character `" + note + "`, next is: " + getNextNote());
	}
}

draw(0);
