
import './index.css';
import React, { useState, useEffect } from 'react';
function Content() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


    return(
      <div className={isMenuOpen ? 'menu-open' : ''}>
      <header>
        <div className="logo">
          <img src="/images/multimedia.png"/>
        </div>
        {isMobile && (
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {(!isMobile || isMenuOpen) && (
          <nav className={isMenuOpen ? 'open' : ''}>
            <ul>
              <li><a href="#" >Home</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#"className='active'>Podcast</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </nav>
        )}
      </header>
        <div className='title'>
        <br></br>
        <div className='pictures'>
       <img id='podmic'  src ='./images/podmicr.png'alt='p'></img>
       
       <img  id='mama' src ='./images/mama.jpg'alt='m'></img>
       </div>
        <p id='slogan'>Listen as we bring you <br/>Unleashing insights,</p>
          <p id='show'>Coming Soon!</p>
          <p id='quinte' >Quintessential <br/>
         Podcast</p>
          
          
          <button id='call'>20th August</button>
         
        </div>
        </div>
        

    );
};

export default Content;