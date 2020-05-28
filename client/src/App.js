import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
// import Header from "../src/components/Header";
// import Footer from "../src/components/Footer";
import "./index.css";
import System from "../src/pages/System";
import Wellness from "./pages/wellnessTracker";
import Search from "../src/pages/Search";
import GeneralInformation from "../src/pages/GeneralInformation";
import SearchButtons from "../src/pages/SearchButtons";
import Footer from "../src/components/Footer";
// import ResourcesPage from "../src/pages/ResourcesPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Header /> */}
        <Route path="/home" exact component={Home} />
        <Route path="/system" component={System} />
        <Route path="/wellness" component={Wellness} />
        <Route path="/search" component={Search} />
        <Route path="/generalInformation" component={GeneralInformation} />
        <Route path="/searchButtons" component={SearchButtons} />
        {/* <Route path="/resourcesPage" component={ResourcesPage} /> */}

      </div>

      <Footer />
    </Router>
  );
}


export default App;
