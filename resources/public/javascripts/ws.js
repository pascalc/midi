var ws = new WebSocket("ws://" + serverIp + ":" + serverPort);
var lastPackage = null;

ws.onopen = function()
{
	// Web Socket is connected, send data using send()
	console.log("Socket opened!");
};

ws.onclose = function()
{ 
	// websocket is closed.
	console.log("Socket closed!");
};

function send(msg) {
	ws.send(msg);
}

ws.onmessage = function (evt) 
{ 
	console.log("Received:", evt.data);
	var parsed = JSON.parse(evt.data);
	lastPackage = new midiSocketProtocol(parsed);
	if (lastPackage.type == midiSocketProtocol.types.noteOn) {
		play(parsed.note);
		onNoteDown(lastPackage.note);
	}
};
