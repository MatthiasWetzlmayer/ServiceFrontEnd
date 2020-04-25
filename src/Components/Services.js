import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import ServiceView from './ServiceView'
import AddService from './AddService'
import EditService from './EditService'
import ServiceMap from './ServiceMap'
import services from '../States/ServiceState'
import Alert from '@material-ui/lab/Alert';


export class Services extends Component {
  render() {
    return (
      <div>
         <div className="alertContainer">
          <div className="alertDiv"></div>
          {services.customAlert.showAlert&&<Alert className="alert" severity={services.customAlert.alertSeverity} variant="filled">{services.customAlert.alertMessage}</Alert>}
          <div className="alertDiv"></div>
        </div>

        <ServiceView></ServiceView>

       
        
        
        {services.showAddService&&<AddService></AddService>}
        {services.showEditService&&<EditService></EditService>}
        {services.showOnMap&&<ServiceMap></ServiceMap>}
        
      </div>
    )
  }
}

export default view(Services)
