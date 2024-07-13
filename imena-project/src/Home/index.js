import './index.css';
import React, { useState } from 'react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="/images/yeg.png" alt="M Multimedia Logo"/>
        </div>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Podcast</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <main>
        <div className="left-content">
          <div className="all">
            <h2>Unlock your potential and gain a competitive edge in the jobs of the future</h2>
            <button className="discover-more">Discover More</button>
          </div>
        </div>
        <div className="right-content">
          <img src="/images/home.jpeg" alt="Jobs of the Future"/>
        </div>
      </main>
    </div>
  );
}

export default Home;