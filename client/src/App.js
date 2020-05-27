import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import "./index.css";
import System from "../src/pages/System";
import Tracker from "../src/pages/Tracker";
import Search from "../src/pages/Search";
import GeneralInformation from "../src/pages/GeneralInformation";
import SearchButtons from "../src/pages/SearchButtons";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Route path="/home" exact component={Home} />
        <Route path="/system" component={System} />
        <Route path="/tracker" component={Tracker} />
        <Route path="/search" component={Search} />
        <Route path="/generalInformation" component={GeneralInformation} />
        <Route path="/searchButtons" component={SearchButtons} />
      </div>

      <Footer />
    </Router>
  );
}


export default App;
