import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
}


export default App;
