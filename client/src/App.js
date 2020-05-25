import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import "./index.css";
import System from "../src/pages/System";
import Tracker from "../src/pages/Tracker";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Route path="/home" exact component={Home} />
        <Route path="/system" component={System} />
        <Route path="/tracker" component={Tracker} />
      </div>
    </Router>
  );
}


export default App;
