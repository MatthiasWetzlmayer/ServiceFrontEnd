import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import employeeState from '../States/EmployeeState';
import App from '../App.css';

export class UpdateEmployee extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    var employeeDTO = {
      name: e.target.name.value,
      address: e.target.address.value,
    };
    employeeState.editEmployee(employeeState.employeeToEdit.id ,employeeDTO);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <label for="name">Name: </label>
      <input 
          id="name"
          type="text"
          name="name"
          defaultValue={employeeState.employeeToEdit.name}
      />
      <br/>
      
      <label for="address">Adresse: </label>
      <input 
          id="address"
          type="text"
          name="address"
          defaultValue={employeeState.employeeToEdit.address}
      />

      <br/>
      <button
          type="submit"
          value="Submit"
          className="button"
          >Mitarbeiter bearbeiten</button>
      </form>
    )
  }
}

export default view(UpdateEmployee)
