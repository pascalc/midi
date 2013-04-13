(ns midi.server
  (:use [org.httpkit.server]))

(def clients (atom {})) 

(defn midi-handler [request]
  (if-not (:websocket? request)
    {:status 200 :body "Welcome to the MIDI server!"}
    (with-channel request ch
      (println ch "connected")
      (swap! clients assoc ch true)
      (on-close ch 
        (fn [status]
          (swap! clients dissoc ch)
          (println ch "closed, status" status))))))

(defn broadcast! [data]
  (doseq [client (keys @clients)]
    (send! client data)))

(defonce server (atom nil))

(defn start-server! []
  (reset! server 
    (run-server #'midi-handler {:port 8080})))

(defn stop-server! []
  (@server))

(defn -main [& args]
  (start-server!))
