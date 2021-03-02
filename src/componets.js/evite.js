import React, { Component} from 'react';
import {Link } from 'react-router-dom';
import Lotus from './Lotussvg'
import Bottom_Left from './bottomleft'
import Top_Right from './topright'
import './styleevite.css'
class Evite extends Component{

    render(){return(
            <div className='bigcon'>
            <div className='evite-contianer'>
                <Lotus />
                <Bottom_Left />
                <Top_Right />
                <div className='words'>
                    <h3>Nansi De La Torre</h3>
                    <h5>&</h5>
                    <h3>Eder Aragon</h3>
                    <h3>Wedding</h3>
                    <div className='info'>
                        <div className="box"><h4>lcoations</h4><p></p></div>
                        <div className="box"><h4>date</h4><p>August</p><h1>24</h1></div>
                        <div className="box"><h4>lcoations</h4><p></p></div>
                    </div>
                </div>
              </div>  
            </div>
        
    )

    }
}
export default Evite