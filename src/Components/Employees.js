import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import EmployeeView from './EmployeeView'
import AddEmployee from './AddEmployee'
import EditEmployee from './UpdateEmployee'
import employees from '../States/EmployeeState'

export class Employees extends Component {
  render() {
    return (
      <div>
        <EmployeeView></EmployeeView>
        {employees.showAddEmployee&&<AddEmployee></AddEmployee>}
        {employees.showEditEmployee&&<EditEmployee></EditEmployee>}
      </div>
    )
  }
}

export default view(Employees)
