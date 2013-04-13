# midi

A WebSocket server for external MIDI keyboards

The server listens on ws://localhost:8080

and broadcast a stream of JSON:

  {"raw":"903B61","tone":"B4","type":"noteOn"}
  {"raw":"803E7F","tone":"D5","type":"noteOff"} 

## Usage

  java -jar target/midi-0.1.0-SNAPSHOT-standalone.jar

## License

Copyright © 2013 Pascal Chatterjee, Fredrik Stockman & Jakob 

Distributed under the Eclipse Public License, the same as Clojure.
