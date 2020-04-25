import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import employeeState from '../States/EmployeeState';

export class Employee extends Component {
  render() {
    const employee = this.props.employee;
    return (
      <tr>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.address}</td>
        <td><button className="button" onClick={() => {
          employeeState.setEmployeeToEdit(employee);
        }}>{employeeState.showEditEmployee && employee.id === employeeState.employeeToEdit.id ? "Bearbeiten beenden" : "Bearbeiten"}</button></td>
        <td><button className="button" onClick={() => {
          if (employeeState.employeeToDelete == null || employeeState.employeeToDelete.id !== employee.id) {
            employeeState.updateAlert(`Achtung! Der Mitarbeiter ${employee.name} könnte Diensten zugewiesen sein!`, `warning`);
            employeeState.employeeToDelete = employee;
          }
          else if (employeeState.employeeToDelete.id === employee.id) {
            employeeState.deleteEmployee(employee.id)
          }
        }}>Löschen</button></td>
      </tr>
    )
  }
}

export default view(Employee)
