import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Landingpage/landingpage";
import Portfolio from "./Portfolios/portfolio";
import Portfolio5 from "./Aline";
import Portfolio4 from "./Daisy";
import Portfolio3 from "./Wato";
import Portfolio2 from "./Kur";
import Portfolio1 from "./Linet";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    <Portfolio1/>
        <Portfolio2/>
        <Portfolio3/>
        <Portfolio4/>
        <Portfolio5/>
    </div>
  );
}

export default App;
