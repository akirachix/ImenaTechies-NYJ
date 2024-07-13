import React from 'react';
import './index.css';
import daisy from'./images/daisy.jpeg'

const Portfolio4 = () => {
  return (
    <div className="daisy">
      <div className='daisy2'>
        <div>
       <img id= 'daisy'src={daisy} alt='Daisy'/>
       </div>
       <div>
      <h2 id='name'>Daisy</h2>
        <p>Contacts: +254110941162</p>
        <p>LinkedIn: daisy</p>
      <h3 id='heading'>About Me</h3>
      <p>Growing up in a digital age, Daisy has seen how technology completely changes lives. From making lives easier with online banking to social media, which keeps everyone connected. Technology has completely changed the way of working, communicating, and getting information. However, the more we turn to digital systems, the greater the risk of cybersecurity breaches, and the need for the protection of our personal and sensitive information increases. Machine learning algorithms can be used to detect and respond to cyber threats in real time, while blockchain technology can secure sensitive data and help curb cyber crimes. These insights have fueled her desire to be at the forefront of this technological revolution, driving the development and implementation of innovative solutions that can stay one step ahead of evolving cyber threats.
</p>
      <h4 id='skills'>Skills</h4>
      <p><b>*</b>Ability to create websites that adapt  to different devices and screen sizes using media query .
</p>
      <p> <b>*</b>Capable of conducting A/B testing and user testing to validate hypotheses and iterate on design solutions.
</p>
      <p> <b>*</b>Understanding in conducting user journey mapping exercises to identify pain points and opportunities for improving user experience</p>
      </div>
      
    </div>
    </div>
  );
};

export default Portfolio4;