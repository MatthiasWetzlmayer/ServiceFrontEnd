import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import '../App.css'
import services from '../States/ServiceState'

export class Service extends Component {
  render() {
    var service =this.props.service
    return (
      <tr>
          <td>{service.id}</td>
          <td>{service.name}</td>
          <td>{service.employee == null ? <span style={employeeNotAssignedStyle}>Mitarbeiter nicht zugewiesen</span> : service.employee.name}</td>
          <td>{service.date}</td>
          <td>{service.address}</td>
          <td><button className="button" onClick={()=>services.setServiceToEdit(service)}>{services.showEditService && service.id === services.serviceToEdit.id ? "Bearbeiten beenden" : "Bearbeiten"}</button></td>
          <td><button className="button" onClick={()=>services.deleteService(service.id)}>Löschen</button></td>
      </tr>
    )
  }
}

const employeeNotAssignedStyle = {
  color: "red"
}

export default view(Service)
