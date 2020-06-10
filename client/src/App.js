import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "./index.css";
import System from "../src/pages/System";
import Tracker from "../src/pages/Tracker";
import Search from "../src/pages/Search";
import GeneralInformation from "../src/pages/GeneralInformation";
import HealthInfo from "../src/pages/HealthInfo";
import ResourcesPage from "../src/pages/ResourcesPage";
import Register from "./pages/Register";
import Login from "./pages/Login";


const token = localStorage.getItem("token")



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/system" component={System} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/search" component={Search} />
          <Route path="/generalInformation" component={GeneralInformation} />
          <Route path="/healthInfo" component={HealthInfo} />
          <Route path="/resourcesPage" component={ResourcesPage} />
          <Route path="/login" render={() => (
            (token) ? (
              <Redirect to="/" />
            ) : (
                <Route path="/login" component={Login} />
              )
          )} />
          <Route path="/register" render={() => (
            (token) ? (
              <Redirect to="/" />
            ) : (
                <Route path="/register" component={Register} />
              )
          )} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}


export default App;
