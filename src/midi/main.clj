(ns midi.main
  (:gen-class :main true)
  (:require [midi.keyboard :as keyboard]
            [midi.server :as server]))

(defn -main [& args]
  (keyboard/setup!)
  (server/start-server!))
