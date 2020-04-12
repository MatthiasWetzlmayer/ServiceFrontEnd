import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import { Map, Marker } from 'google-maps-react';
import services from '../States/ServiceState'


export class ServiceMap extends Component {

  render() {

    return (
      <div>
        <Map
          google={window.google}
          zoom={8}
          initialCenter={{ lat: services.services[0].lat, lng: services.services[0].lon }}
          style={mapStyles}
        >
          {services.services.map(x => (
            <Marker title={x.name} position={{ lat: x.lat, lng: x.lon }}></Marker>

          )
          )
          }
        </Map>
      </div>
    )
  }

}
const mapStyles = {
  width: '100%',
  height: '100%',
};

export default view(ServiceMap);

