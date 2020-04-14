import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import state from '../States/EmployeeState';
import App from '../App.css';

export class AddEmployee extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    var employeeDTO = {
      name: e.target.name.value,
      address: e.target.address.value,
    };
    state.addEmployee(employeeDTO);
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
