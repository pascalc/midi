(ns midi.core
  (:require [midi.server :as server])
  (:import (javax.sound.midi 
              MidiSystem MidiMessage
              Receiver)
          [javax.xml.bind DatatypeConverter]))

;; Get a reference to the keyboard

(defonce device   (MidiSystem/getMidiDevice (aget (MidiSystem/getMidiDeviceInfo) 0)))
(def transmitter  (.getTransmitter device))

(defn open! [] 
  (.open device))

(defn close! [] 
  (.close device))

;; Create a receiver for the keyboard's MidiEvents

(def receiver 
  (reify Receiver
    (close [this]
      (println "Closing!"))
    (send [this data timestamp]
      (let [msg (.getMessage data)]
        (server/broadcast! 
          (DatatypeConverter/printHexBinary msg))))))
          
(defn reload! []
  (close!)
  (use (symbol (str *ns*)) :reload-all)
  (.setReceiver transmitter receiver)
  (open!))

