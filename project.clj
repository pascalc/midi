(defproject midi "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [http-kit "2.0.1"]
                 [jfugue "4.0.3"]
                 [cheshire "5.1.1"]]
  :source-paths ["src"]               
  :repl-options {:init-ns midi.core}
  :main midi.server)
