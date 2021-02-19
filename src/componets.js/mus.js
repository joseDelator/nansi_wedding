import React, { Component } from 'react';
import Mus from "../mus.m4a"
class Music extends Component {
    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    render() {
        return (
            <div>
                <audio   className='audio-element' >
                    <source src={Mus} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

export default Music;