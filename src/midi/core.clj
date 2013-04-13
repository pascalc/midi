(ns midi.core
  (:require [midi.server :as server]
            [cheshire.core :as json])
  (:import (javax.sound.midi 
              MidiSystem MidiMessage
              Receiver)
          [javax.xml.bind DatatypeConverter]
          [org.jfugue Note]))

;; Get a reference to the keyboard

(defonce device   (MidiSystem/getMidiDevice (aget (MidiSystem/getMidiDeviceInfo) 0)))
(def transmitter  (.getTransmitter device))

(defn open! [] 
  (.open device))

(defn close! [] 
  (.close device))

;; Create a receiver for the keyboard's MidiEvents

(def event
  {144 "noteOn"
   128 "noteOff"})

(defn midi->json [data]
  (let [msg     (.getMessage data)
        note    (aget msg 1)
        status  (.getStatus data)]
    (json/generate-string
      {:raw   (DatatypeConverter/printHexBinary msg)
       :tone  (Note/getStringForNote note)
       :type  (event status)})))

(def receiver 
  (reify Receiver
    (close [this]
      (println "Closing!"))
    (send [this data timestamp]
      (server/broadcast! (midi->json data)))))
          
(defn reload! []
  (close!)
  (use (symbol (str *ns*)) :reload-all)
  (.setReceiver transmitter receiver)
  (open!))

