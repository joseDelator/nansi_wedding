import React, { useEffect, useRef } from 'react';
import Mus from "../mus.m4a"
import Lotussvg from './Lotussvg'
import './music.css'
 function  Music() {
  const box = useRef(0);
  
      function start(){
        const audioEl = document.getElementsByClassName("audio-element")[0]
         audioEl.play()
         box.current.style.display = "none";
      }
     
    
        return (
            <div className="music_container" ref={box}>
                <audio autoPlay={true}  className='audio-element' >
                    <source src={Mus} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <button onClick={start} >
                <Lotussvg/>
                </button>
               
              
            </div>
           
        );
    
}

export default Music;