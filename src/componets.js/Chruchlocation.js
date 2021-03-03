import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Churchsvg from './churchsvg'
import './chruchloc.css'
class Chruchlocation extends Component {
    render() {
        return(
            <div>
                    <div className="chruch_container">
                    <h1>Church and location</h1>
                    <h3>La Cermona</h3>
                    <Churchsvg/> 
                    <h1>Saint Joesph in Petaluma</h1> 
                    <a href='https://www.google.com/maps/place/Saint+Vincent+de+Paul+Roman+Catholic+Church/@38.2325312,-122.6451016,17z/data=!3m1!4b1!4m5!3m4!1s0x8085b6a716701fbf:0x9ebafe85e97ff568!8m2!3d38.2325312!4d-122.6429129'>
                    Cick here for dircitions</a>
                    </div>

                    <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: 38.23254093802357, lng:-122.64293900759004 }}
                        >
                    <Marker 
                    icon={Churchsvg}            
                    position={{ lat:38.23254093802357, lng:-122.64293900759004 }} />
                    </Map>
            </div>
        )
       
    }

}
const mapStyles = {
    width: '100%',
    height: '50%',
    
  };
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDbwxXV1saSuEHtYZhRhBTo9E1_RFIhtho'
  })(Chruchlocation);