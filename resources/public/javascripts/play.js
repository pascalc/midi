window.onload = function () {
  MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    callback: function() { console.log("Loaded plugin!") },
  });
};

function play(note) {
  var delay = 0; // play one note every quarter second
  var velocity = 127; // how hard the note hits
  // play the note
  MIDI.setVolume(0, 127);
  MIDI.noteOn(0, note, velocity, delay);
  MIDI.noteOff(0, note, delay + 0.75);
}
