import React from "react";
import LandingPage from "../Landingpage/landingpage";
import Portfolio1 from "../Linet";
import Portfolio2 from "../Kur";
import Portfolio3 from "../Wato";
import Portfolio4 from "../Daisy";
import Portfolio5 from "../Aline";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import "./App.css";

const Portfolio = () => {
  return (
    <Router>
      <div className="app">
        <LandingPage/>
        <Portfolio1 />
        <Portfolio2 />
        <Portfolio3 />
        <Portfolio4 />
        <Portfolio5 />
      </div>
    </Router>
  );
};
export default Portfolio;
