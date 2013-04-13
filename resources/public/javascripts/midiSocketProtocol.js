var midiSocketProtocol = function(data) {
	obj = {};

	obj.raw = data['raw'];
	obj.tone = data['tone'];
	obj.note = data['tone'][0];
	obj.octave = parseInt(data['tone'][1]);
	obj.type = data['type'];
	
	return obj;
}

midiSocketProtocol.types = {
	noteOn: 'noteOn',
	noteOff: 'noteOff'
}