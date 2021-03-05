import React, { useEffect } from 'react';
import Mus from "../mus.m4a"
 function  Music() {

   // componentDidMount() {
     //   const audioEl = document.getElementsByClassName("audio-element")[0]
       // audioEl.play()
      //}
      
      useEffect(() => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
       audioEl.play()
      });
    
    
    
        return (
            <div>
                <audio autoPlay={true}  className='audio-element' >
                    <source src={Mus} type="audio/mpeg"/>
                    Your browser does not suppofrt the audio element.
                </audio>
                <button ></button>
               
              
            </div>
           
        );
    
}

export default Music;