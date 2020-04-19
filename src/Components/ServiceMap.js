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
          initialCenter={services.services.length>0&&({ lat: services.services[0].lat, lng: services.services[0].lon })}
          style={mapStyles}
        >
          {services.services.map(x => (
            <Marker title={x.name} position={{ lat: x.lat, lng: x.lon }}></Marker>
          ))}
        </Map>
      </div>
    )
  }

}
const mapStyles = {
  width: '50%',
  height: '50%',
};

export default view(ServiceMap);

