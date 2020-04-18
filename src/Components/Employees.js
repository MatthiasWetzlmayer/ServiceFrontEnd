import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import EmployeeView from './EmployeeView'
import AddEmployee from './AddEmployee'
import EditEmployee from './UpdateEmployee'
import employees from '../States/EmployeeState'
import Alert from '@material-ui/lab/Alert';

export class Employees extends Component {
  render() {
    return (
      <div>
        <EmployeeView></EmployeeView>
        {employees.showAlert&&<Alert severity={employees.alertSeverity} variant="filled">{employees.alertMessage}</Alert>}

        {employees.showAddEmployee&&<AddEmployee></AddEmployee>}
        {employees.showEditEmployee&&<EditEmployee></EditEmployee>}
      </div>
    )
  }
}

export default view(Employees)
