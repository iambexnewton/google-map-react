import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import iss from '/Users/beckynewton/Desktop/react-projects/google-maps-practice/src/iss.png';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [{ lat: 56.11816, lng: 10.19289 }],
    };
  }

  showMarkers = () => {
    return this.state.coords.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.lat,
            lng: store.lng,
          }}
          onClick={() => console.log('Clicked')}
        />
      );
    });
  };

  render() {
    return (
      <div className="map-container">
        <img src={iss} alt="ISS icon" className="iss" />
        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{
            lat: 56.11816,
            lng: 10.19289,
          }}
        >
          {this.showMarkers()}
        </Map>
      </div>
    );
  }
}
// Map.defaultProps = {
//   center: {
//     lat: 56.11816,
//     lng: 10.19289,
//   },
//   zoom: 6,
// };

const apiKey = process.env.REACT_APP_API_KEY;
export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapContainer);
