import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import state from '../States/ServiceState';
import App from '../App.css'

export class AddService extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    var serviceDTO = {
      name: e.target.name.value,
      employeeId: e.target.employee.value,
      date: e.target.date.value,
      address: e.target.address.value
  };
  state.addService(serviceDTO);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label for="name">Name: </label>
        <input
            id="name"
            type="text"
            name="name"
        />

        <br/>

        <label for="employee">Mitarbeiter: </label>
        <select
            id="employee"
            name="employee"
            className="dropdown"
        >{state.employees.map(employee => {
            return (<option value={employee.id}>{employee.name}</option>);
          })}
        </select>

        <br/>

        <label for="date">Datum: </label>
        <input
            id="date"
            type="text"
            name="date"
        />

        <br/>
        
        <label for="address">Adresse: </label>
        <input
            id="address"
            type="text"
            name="address"
        />

        <button
            type="submit"
            value="Submit"
            className="button"
        >Dienst anlegen</button>
  </form>
    )
  }
}



export default view(AddService)
