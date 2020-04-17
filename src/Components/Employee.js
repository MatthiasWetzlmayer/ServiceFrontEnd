import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';

export class Employee extends Component {
  render() {
    return (
      <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.address}</td>
      <td><button className="button" onclick={employees.employeeToEdit=employee}>Edit</button></td>
      <td><button className="button" onclick={employees.deleteEmployee(employee)}>Delete</button></td>
   </tr>    
    )
  }
}

export default view(Employee)
