import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import employeeState from '../States/EmployeeState';
import '../App.css';

export class AddEmployee extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    var employeeDTO = {
      name: e.target.name.value,
      address: e.target.address.value,
    };
    employeeState.addEmployee(employeeDTO);
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
        
        <label for="address">Adresse: </label>
        <input 
            id="address"
            type="text"
            name="address"
        />
        <br/>
        <button
            type="submit"
            value="Submit"
            className="button"
            >Mitarbeiter anlegen</button>
        </form>
    )
  }
}

export default view(AddEmployee)
