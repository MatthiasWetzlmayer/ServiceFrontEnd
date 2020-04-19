import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import Employee from './Employee'

export class EmployeeTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Mitarbeiter</th>
            <th>Adresse</th>
            <th>Bearbeiten</th>
            <th>Löschen</th>
          </tr>
          <tbody>
            {
              this.props.employees.map(x => {
                return (
                  <Employee employee={x}></Employee>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default view(EmployeeTable)
