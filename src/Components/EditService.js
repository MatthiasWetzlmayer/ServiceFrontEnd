import React, { Component } from 'react';
import { view } from '@risingstack/react-easy-state';
import services from '../States/ServiceState';
import '../App.css';

export class EditService extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    var serviceDTO = {
      name: e.target.name.value,
      employeeId: e.target.employee.value,
      date: e.target.date.value,
      address: e.target.address.value
  };
  services.editService(serviceDTO);
  }

  render() {
    return (
    <form onSubmit={this.onSubmit}>
        <label for="name">Name: </label>
        <input
            id="name"
            type="text"
            name="name"
            defaultValue={services.serviceToEdit.name}
        ></input>
        
        <br/>

        <label for="employee">Mitarbeiter: </label>
        <select
            id="employee"
            name="employee"
            className="dropdown"
        >{services.employees.map(employee => {
          if(employee.id === services.serviceToEdit.id){
            return (<option selected="selected" value={employee.id}>{employee.name}</option>)
          }
          else{
            return (<option value={employee.id}>{employee.name}</option>);
          }
          })}
        </select>

        <br/>

        <label for="date">Datum: </label>
        <input
            id="date"
            type="text"
            name="date"
            defaultValue={services.serviceToEdit.date}
        ></input>

        <br/>
        
        <label for="address">Adresse: </label>
        <input
            id="address"
            type="text"
            name="address"
            defaultValue={services.serviceToEdit.address}
        ></input>
        
        <br></br>

        <button
            type="submit"
            value="Submit"
            className="button"
        >Dienst bearbeiten</button>
    </form>
    )
  }
}

export default view(EditService)
