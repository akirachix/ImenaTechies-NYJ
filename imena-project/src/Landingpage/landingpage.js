
import React from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
// import landingpage from './'
// import landingpage from './images/landingpage.jpeg'
// import landingpage from '../images/landingpage.jpeg'
import landingpage from '../images/landingpage.jpg'



const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className='heading'>Welcome to Our Portfolio Showcase</h1>
        <p>Discover the amazing work of our talented professionals.</p>
        <Link to="/portfolio1" className="cta-button">Explore Portfolios</Link>
      </div>
      <div>
        <img id='page' src={landingpage} alt='lp'/>
      </div>
      <div>
      
      </div>

    </div>
  );
};

export default LandingPage;
