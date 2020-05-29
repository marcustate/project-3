import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
// import Footer from "../src/components/Footer";
import "./index.css";
import System from "../src/pages/System";
import Tracker from "../src/pages/Tracker";
import Search from "../src/pages/Search";
import GeneralInformation from "../src/pages/GeneralInformation";
import SearchButtons from "../src/pages/SearchButtons";
import Footer from "../src/components/Footer";
import { Login } from "../src/containers/login";
import { Register } from "./containers";

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
        {/* <Route path="/resourcesPage" component={ResourcesPage} /> */}

      </div>

      <div className="App">
        <Login />
        <Register />
      </div>

      <Footer />
    </Router>
  );
}


export default App;
