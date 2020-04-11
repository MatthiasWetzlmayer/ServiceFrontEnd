import React, { Component } from 'react';
import { view } from '@risingstack/react-easy-state';
import EmployeeTable from './EmployeeTable';
import employees from '../States/EmployeeState';
import App from '../App.css';

export class EmployeeView extends Component {

  state = {
    pageNr: 1
  }

  componentDidMount() {
    employees.initalize();
    employees.min = 1;
    employees.showEntries = document.getElementById("entries").value;
    employees.loadEmployees();
    employees.max = employees.showEntries;
  }

  selectionChanged = (e) => {
    e.preventDefault();
    employees.showEntries = e.target.value;
    employees.min = 1;
    employees.max = employees.showEntries;
    employees.loadEmployees();
    this.setState({ pageNr: 1 });
  }

  searchChanged = (e) => {
    e.preventDefault();
    employees.filterEmployees(e.target.value);
  }

  nextButtonClicked = (e) => {
    e.preventDefault();
    employees.min = parseInt(employees.min) + parseInt(employees.showEntries);
    employees.max = parseInt(employees.max) + parseInt(employees.showEntries);
    employees.loadEmployees();
    this.setState({ pageNr: this.state.pageNr + 1 });
  }

  previousButtonClicked = (e) => {
    e.preventDefault();
    if (employees.max == employees.nrAllEmployees) {
      employees.max = parseInt(employees.max) - parseInt(employees.nrAllEmployees % employees.showEntries)
    }
    else {
      employees.max = parseInt(employees.max) - parseInt(employees.showEntries);
    }
    employees.min = parseInt(employees.min) - parseInt(employees.showEntries);
    employees.loadEmployees();
    this.setState({ pageNr: this.state.pageNr - 1 });
  }

  addEmployee = () => {
    employees.showAddEmployee = !employees.showAddEmployee;
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
            {employees.showAddEmployee ? "Mitarbeiter anlegen abbrechen" : "Mitarbeiter anlegen"}
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
        <br></br>
        <br></br>
        <br></br>
        <footer style={footerStyle}>
          <div style={textStyle}>Showing</div>
          <div>{employees.min}</div>
          <div style={textStyle}>to</div>
          <div>{employees.max}</div>
          <div style={textStyle}>of</div>
          <div>{employees.nrAllEmployees}</div>
          <div style={textStyle}>entries</div>

          <div style={footerRightStyle}>
            <button id="previous" disabled={employees.min == 1} className={employees.min == 1 ? "button disabled" : "button"} onClick={this.previousButtonClicked}>Previous</button>
            <div id="pageNr" style={textStyle}>{this.state.pageNr}</div>
            <button id="next" disabled={employees.max == employees.nrAllEmployees} className={employees.max == employees.nrAllEmployees ? "button disabled" : "button"} onClick={this.nextButtonClicked}>Next</button>
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
