import SimpleImageSlider from "react-simple-image-slider";

import React from 'react'
import Slider from 'react-simple-slideshow';
import Dog1 from './images/1.jpg'
import Dog2 from './images/2.jpg'
import Dog3 from './images/3.jpg'
const images = [
  { url: Dog1 },
  { url: Dog2},
  {uirl: Dog3}

];

const Sslide = () => {
  return (
    <div className="gala">
     
      <Slider className="slides" width="100%" height="100%" >
    <img src={Dog1} />
    <img src= {Dog2}/>
    <img src={Dog3} />
    </Slider>
    </div>
  );
}
export default Sslide