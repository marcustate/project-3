import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/home" component={Home} />
      </div>
      <Footer />
    </Router>
  );
}


export default App;
