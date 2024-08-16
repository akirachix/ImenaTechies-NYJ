
import './index.css';
import mic2 from '../Images/mic2.webp'
import woman from '../Images/woman.jpg'
import multimedia from '../Images/multimedia.png'

import React, { useState, useEffect } from 'react';

function Podcast() {
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
      <div className='page-podcast'>
      <div className={isMenuOpen ? 'menu-open' : ''}>
      <header>
        <div className="logo">
        <img  id='media' src ={multimedia} alt='multimedia'></img>
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
        <div >
           <img  id='mic2' src ={mic2} alt='mic2'></img>
                </div>

               
                 <div >
                    <img  id='mama' src ={woman} alt='mama'></img>
                </div>
            

            <div  >
              <p id='quinte'>Quintessential Podcast</p>
            </div>

            <div >
              <p id='insight' >Listen as we bring you Unleashing insights,</p>

            </div>
            <div>
            <button id='date'>20th August</button>
            </div>

            <div>
               <p id='show'>Coming Soon!</p>
            </div>

         
            
            </div>
            </div>
      
          
         
        </div>
        
        
        

    );
};

export default Podcast;