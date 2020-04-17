import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import employees from '../States/EmployeeState'

export class Employee extends Component {
  render() {
    const employee=this.props.employee;
    return (
      <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.address}</td>
      <td><button className="button" onClick={employees.employeeToEdit=employee}>Edit</button></td>
      <td><button className="button" onClick={()=>{
        employees.deleteEmployee(employee.id)
        }}>Delete</button></td>
   </tr>    
    )
  }
}

export default view(Employee)
