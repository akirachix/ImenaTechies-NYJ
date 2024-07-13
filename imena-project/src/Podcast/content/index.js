import  './index.css';
 import mama from  './mama.jpg'
 import waves from './waves.png';
 import Achan from './Achan.png';
 import Linet from './Linet.png';
 import headphones from './headphones.jpg'
 import pod3 from './pod3.jpg'

const Content =() => {
    return(
        <div className='title'>
    
      
      
        <div className='intro'>
        <p id='quinte' >Quintessential Podcast</p>
        <br></br>
        <img id='wave' src={waves} /> 
        <p id='slogan'>Listen as we bring you <br/>Unleashing insights,</p>
          <p id='show'>The most interactive show</p>
          <p id='soon'>Coming Soon!</p>
          
        </div>
       
        <img id='Kur' src={Achan} /> 
        <img id='Ndau'src={Linet}/>
        <p id='profiles'>NEW GUESTS </p>
        <img id='amplifyer' src={headphones} /> 
        <p id='free'>Join for free</p>
          <button id='call'>20th August</button>
          <img id='vida'src={pod3}/>
          <p id='five'>5 </p>
          <p id='records'>Recorded podcasts</p>

        
        
       
       
       
         
        </div>
        

    );
};

export default Content;