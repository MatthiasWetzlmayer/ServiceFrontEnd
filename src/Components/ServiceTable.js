import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import '../App.css'
import Service from './Service'

export class ServiceTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Dienstname</th>
            <th>Mitarbeiter</th>
            <th>Datum</th>
            <th>Adresse</th>
            <th>Bearbeiten</th>
            <th>Löschen</th>
          </tr>
          <tbody>
          {
          this.props.services.map(element => {
            return (
                <Service service={element}></Service>
            )
          })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default view(ServiceTable)
