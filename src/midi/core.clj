(ns midi.core
  (:import (javax.sound.midi 
              MidiSystem MidiMessage
              Receiver)
          [javax.xml.bind DatatypeConverter]
          [org.jfugue Note]))

;; Get a reference to the keyboard

(def device       (MidiSystem/getMidiDevice (aget (MidiSystem/getMidiDeviceInfo) 0)))
(def transmitter  (.getTransmitter device))

(defn open! [] 
  (.open device))

(defn close! [] 
  (.close device))

;; Create a receiver for the keyboard's MidiEvents

(defn hex->str
  [hex]
  (->> hex
    (partition 2)
    (map (partial apply str))
    (interpose " ")
    (apply str)))

(def messages (atom []))

(def receiver 
  (reify Receiver
    (close [this]
      (println "Closing!"))
    (send [this msg timestamp]
      (println 
        (format "[%s]: %s" 
          timestamp (Note/getStringForNote (aget (.getMessage msg) 1))))
          ;timestamp (hex->str (DatatypeConverter/printHexBinary (.getMessage msg)))))
      (swap! messages conj msg))))
          
(defn reload! []
  (close!)
  (use (symbol (str *ns*)) :reload-all)
  (.setReceiver transmitter receiver)
  (open!))

