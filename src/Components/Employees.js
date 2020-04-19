import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import EmployeeView from './EmployeeView'
import AddEmployee from './AddEmployee'
import EditEmployee from './UpdateEmployee'
import employeeState from '../States/EmployeeState'
import Alert from '@material-ui/lab/Alert';

export class Employees extends Component {
  render() {
    return (
      <div>
        <EmployeeView></EmployeeView>
        {employeeState.customAlert.showAlert&&<Alert severity={employeeState.customAlert.alertSeverity} variant="filled">{employeeState.customAlert.alertMessage}</Alert>}

        {employeeState.showAddEmployee&&<AddEmployee></AddEmployee>}
        {employeeState.showEditEmployee&&<EditEmployee></EditEmployee>}
      </div>
    )
  }
}

export default view(Employees)
