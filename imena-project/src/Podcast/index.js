import './index.css';
import  multimedia from './multimedia.png'

const Podcast = ()=>{
    return(
<div className='Navbar'>
<img className='logo' src={multimedia} />
<p id='media'>multimedia</p>
<p>Home</p>
<p>Videos</p>
<p>Blog</p>
<p id='pod'>Podcast</p>
<p>Portfolio</p>
</div>





    );
};
export default Podcast;