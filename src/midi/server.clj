(ns midi.server
  (:use [org.httpkit.server]))

(defn echo-handler [ring-request]
  (with-channel ring-request channel
    (on-receive channel 
      (fn [data]
        (send! channel (clojure.string/upper-case data))))))

(defn -main [& args]
  (run-server #'echo-handler {:port 8080}))
