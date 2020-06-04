import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "./index.css";
import System from "../src/pages/System";
import Tracker from "../src/pages/Tracker";
import Search from "../src/pages/Search";
import GeneralInformation from "../src/pages/GeneralInformation";
import SearchButtons from "../src/pages/SearchButtons";
import ResourcesPage from "../src/pages/ResourcesPage";
import Register from "./pages/Register";
import Login from "./pages/Login";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
       
        <Route path="/home" exact component={Home} />
        <Route path="/system" component={System} />
        <Route path="/tracker" component={Tracker} />
        <Route path="/search" component={Search} />
        <Route path="/generalInformation" component={GeneralInformation} />
        <Route path="/searchButtons" component={SearchButtons} />
        <Route path="/resourcesPage" component={ResourcesPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Register} />
      </div>

        <Footer />
    </Router>
  );
}


export default App;
