import React, { Component} from 'react';
import Lotus from './Lotussvg'
import BottomLeft from './bottomleft'
import TopRight from './topright'
import './styleevite.css'
class Evite extends Component{

    render(){return(
            <div className='bigcon'>
            <div className='evite-contianer'>
                <Lotus />
                <BottomLeft />
                <TopRight />
                <div className='words'>
                    <h3>Nansi De La Torre</h3>
                    <h5>&</h5>
                    <h3>Eder Aragon</h3>
                    <h3>Wedding</h3>
                    <div className='info'>
                        <div className="box"><h4>Cermona</h4><p></p></div>
                        <div className="box"><h4>date</h4><p>August</p><h1>28</h1></div>
                        <div className="box"><h4>Church</h4><p></p></div>
                    </div>
                </div>
              </div>  
            </div>
        
    )

    }
}
export default Evite