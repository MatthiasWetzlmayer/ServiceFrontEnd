import React, { Component } from 'react';
import { view } from '@risingstack/react-easy-state';
import EmployeeTable from './EmployeeTable';
import employeeState from '../States/EmployeeState';
import App from '../App.css';

export class EmployeeView extends Component {

  state = {
    pageNr: 1
  }

  componentDidMount() {
    employeeState.initalize();
    employeeState.min = 1;
    employeeState.showEntries = document.getElementById("entries").value;
    employeeState.loadEmployees();
    employeeState.max = employeeState.showEntries;
  }

  selectionChanged = (e) => {
    e.preventDefault();
    employeeState.showEntries = e.target.value;
    employeeState.min = 1;
    employeeState.max = employeeState.showEntries;
    employeeState.loadEmployees();
    this.setState({ pageNr: 1 });
  }

  searchChanged = (e) => {
    e.preventDefault();
    employeeState.filterEmployees(e.target.value);
  }

  nextButtonClicked = (e) => {
    e.preventDefault();
    employeeState.min = parseInt(employeeState.min) + parseInt(employeeState.showEntries);
    employeeState.max = parseInt(employeeState.max) + parseInt(employeeState.showEntries);
    employeeState.loadEmployees();
    this.setState({ pageNr: this.state.pageNr + 1 });
  }

  previousButtonClicked = (e) => {
    e.preventDefault();
    if (employeeState.max == employeeState.nrAllEmployees) {
      employeeState.max = parseInt(employeeState.max) - parseInt(employeeState.nrAllEmployees % employeeState.showEntries)
    }
    else {
      employeeState.max = parseInt(employeeState.max) - parseInt(employeeState.showEntries);
    }
    employeeState.min = parseInt(employeeState.min) - parseInt(employeeState.showEntries);
    employeeState.loadEmployees();
    this.setState({ pageNr: this.state.pageNr - 1 });
  }

  addEmployee = () => {
    employeeState.showAddEmployee = !employeeState.showAddEmployee;
  }

  render() {
    return (
      <div >
        <header style={headerStyle}>

          <div style={textStyle}>Show</div>
          <div>
            <select
              name="entries"
              id="entries"
              onChange={this.selectionChanged}
              style={colorStyle}>
              <option value="2">2</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="null">All</option>
            </select>
          </div>
          <div style={textStyle}>entries</div>

          <button
            style={specialButtonStyle}
            onClick={this.addEmployee}
            className="button">
            {employeeState.showAddEmployee ? "Mitarbeiter anlegen abbrechen" : "Mitarbeiter anlegen"}
          </button>

          <div style={rightStyle}>
            <label for="search">Search: </label>
            <input
              name="search"
              id="search"
              type="text"
              style={colorStyle}
              onChange={this.searchChanged}></input>
          </div>

        </header>
        <EmployeeTable employees={employeeState.employees}></EmployeeTable>
        <footer style={footerStyle}>
          <div style={textStyle}>Showing</div>
          <div>{employeeState.min}</div>
          <div style={textStyle}>to</div>
          <div>{employeeState.max}</div>
          <div style={textStyle}>of</div>
          <div>{employeeState.nrAllEmployees}</div>
          <div style={textStyle}>entries</div>

          <div style={footerRightStyle}>
            <button id="previous" disabled={employeeState.min == 1} className={employeeState.min == 1 ? "button disabled" : "button"} onClick={this.previousButtonClicked}>Previous</button>
            <div id="pageNr" style={textStyle}>{this.state.pageNr}</div>
            <button id="next" disabled={employeeState.max == employeeState.nrAllEmployees} className={employeeState.max == employeeState.nrAllEmployees ? "button disabled" : "button"} onClick={this.nextButtonClicked}>Next</button>
          </div>
        </footer>
      </div>
    )
  }
}

const footerStyle = {
  borderTop: '2px solid #888',

  display: 'flex',
  alignItems: 'center',
  background: '#ccc'
}

const headerStyle = {
  borderBottom: '2px solid #888',

  display: 'flex',
  alignItems: 'center',
  background: '#ccc'
}

const rightStyle = {
  paddingRight: '10px',
  marginLeft: 'auto'
}

const footerRightStyle = {
  padding: '10px',
  marginLeft: 'auto',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row'
}

const textStyle = {
  padding: '10px'
}

const colorStyle = {
  background: 'rgb(129, 129, 129)',
  color: '#fff'
}

const specialButtonStyle = {
  marginLeft: 'auto'
}

export default view(EmployeeView)
