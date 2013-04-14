# midi

A WebSocket server for external MIDI keyboards

The server listens on ws://localhost:8080

and broadcast a stream of JSON:

    {"raw":"903B61","tone":"B4","type":"noteOn", "note": 50}
    {"raw":"803E7F","tone":"D5","type":"noteOff", "note": 61} 

## Usage

    java -jar target/midi-0.1.0-SNAPSHOT-standalone.jar

## Example client

In resources/public there is an example client for a WebSocket stream from an AKAI LPK 25 External Synthesiser. 
It was exhibited by Pascal Chatterjee, Fredrik Stockman and Jakob Smedhagen at ArtHack Day Stockholm 2013.

![Paint by Tones](https://raw.github.com/pascalc/midi/master/resources/public/paint_by_tones.png)

## License

Copyright © 2013 Pascal Chatterjee, Fredrik Stockman & Jakob Smedhagen

Distributed under the Eclipse Public License, the same as Clojure.
