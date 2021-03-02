import React, { Component, useEffect } from 'react';
import Mus from "../mus.m4a"
class Music extends Component {

   // componentDidMount() {
     //   const audioEl = document.getElementsByClassName("audio-element")[0]
       // audioEl.play()
      //}
      
      start() {
        
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      
      }
      
    render() {
    
        return (
            <div>
                <audio autoPlay={true}  className='audio-element' >
                    <source src={Mus} type="audio/mpeg"/>
                    Your browser does not suppofrt the audio element.
                </audio>
               
              
            </div>
           
        );
    }
}

export default Music;