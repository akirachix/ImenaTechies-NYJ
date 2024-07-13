import React from 'react';
import './index.css';
import wato from './images/wato.png'

const Portfolio3 = () => {
  return (
    <div className="wato">
      <img id='wato2'src={wato} alt='W'/>
      <div>
        <h2 id='name'>Wato Bucha</h2>
        <p>Contacts: +254110941162</p>
        <p>LinkedIn: Wato</p>
        <h3 id='about'>About Me</h3>
      <p>I’m on a quest to use technology to empower people. Developing digital platforms and virtual learning environments that facilitate access to essential services like healthcare and education is what I an most passionate about. My desire to 
have a significant impact on things goes beyond merely writing code. In my ideal society, technology would be unstoppable, healthcare would be available everywhere, and education would be considers a fundamental human right. I’m dedicated to making this vision a reality through discerning design, empathy-driven solutions, and a never-ending quest of innovation.
</p>
      <h3 id='skills'>Skills</h3>
      <p> <b>*</b>
      Knowledgeable in creating a progressive web app using JavaScript and ReactJs 
</p>
      <p> <b>*</b> Capable of prototyping and iterating designs based on user feedback and usability testing to optimize usability and engagement.</p>
      <p> <b>*</b> Familiarity with conducting user journey mapping exercises to identify pain points and opportunities for improving user experience</p>
</div>

      </div>
      
   
  );
};

export default Portfolio3;