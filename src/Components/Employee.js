import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import employees from '../States/EmployeeState'
import employeeState from '../States/EmployeeState';

export class Employee extends Component {
  render() {
    const employee=this.props.employee;
    return (
      <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.address}</td>
      <td><button className="button" onClick={()=>{
        employeeState.setEmployeeToEdit(employee);
      }}>Edit</button></td>
      <td><button className="button" onClick={()=>{
        employeeState.deleteEmployee(employee.id)
        }}>Delete</button></td>
   </tr>    
    )
  }
}

export default view(Employee)
