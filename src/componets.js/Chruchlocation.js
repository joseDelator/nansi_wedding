import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Churchsvg from './churchsvg'
import './chruchloc.css'
class Chruchlocation extends Component {
    render() {
        return (
            <div className="chruch_container">
            <h1>Church and location</h1>
            <h3>La Cermona</h3>
           <Churchsvg/> 
           <h1>Saint Joesph in Petaluma</h1> 
           <a href='https://www.google.com/maps/dir/38.3491059,-122.7294302/Saint+Vincent+de+Paul+Roman+Catholic+Church,+35+Liberty+St,+Petaluma,+CA+94952/@38.2908448,-122.7492339,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8085b6a716701fbf:0x9ebafe85e97ff568!2m2!1d-122.6429129!2d38.2325312'>
               Cick here for dircitions </a>
               <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
        >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
          
    );
               
            </div>
        )
    }
}
const mapStyles = {
    width: '50%',
    height: '50%',
  };
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDbwxXV1saSuEHtYZhRhBTo9E1_RFIhtho'
  })(Chruchlocation);