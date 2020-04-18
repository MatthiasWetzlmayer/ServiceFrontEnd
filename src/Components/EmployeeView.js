import React, { Component } from 'react';
import { view } from '@risingstack/react-easy-state';
import EmployeeTable from './EmployeeTable';
import employeeState from '../States/EmployeeState';
import App from '../App.css';

export class EmployeeView extends Component {

  componentDidMount() {
    employeeState.initalize();
    employeeState.min = 1;
    employeeState.showEntries = document.getElementById("entries").value;
    employeeState.max = employeeState.showEntries;
    employeeState.loadEmployees();
   
  }

  selectionChanged = (e) => {
    e.preventDefault();
    employeeState.showEntries = e.target.value;
    employeeState.min = 1;
    employeeState.max = employeeState.showEntries;
    employeeState.loadEmployees();
    employeeState.pageNr = 1;
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
    employeeState.pageNr++;
  }

  previousButtonClicked = (e) => {
    e.preventDefault();
    if (employeeState.max == employeeState.nrAllEmployees && employeeState.max % employeeState.showEntries !== 0) {
      employeeState.max = parseInt(employeeState.max) - parseInt(employeeState.nrAllEmployees % employeeState.showEntries)
    }
    else {
      employeeState.max = parseInt(employeeState.max) - parseInt(employeeState.showEntries);
    }
    employeeState.min = parseInt(employeeState.min) - parseInt(employeeState.showEntries);
    employeeState.loadEmployees();
    employeeState.pageNr--;
  }

  addEmployee = () => {
    employeeState.showAddEmployee = !employeeState.showAddEmployee;
  }

  render() {
    return (
      <div >
        <header className="headerStyle">

          <div className="textStyle">Show</div>
          <div>
            <select
              name="entries"
              id="entries"
              onChange={this.selectionChanged}
              className="colorStyle">
              <option value="2">2</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="">All</option>
            </select>
          </div>
          <div className="textStyle">entries</div>

          <button
            onClick={this.addEmployee}
            className="button specialButtonStyle">
            {employeeState.showAddEmployee ? "Mitarbeiter anlegen abbrechen" : "Mitarbeiter anlegen"}
          </button>

          <div className="rightStyle">
            <label for="search">Search: </label>
            <input
              name="search"
              id="search"
              type="text"
              className="colorStyle"
              onChange={this.searchChanged}></input>
          </div>

        </header>
        <EmployeeTable employees={employeeState.employees}></EmployeeTable>
        <footer className="footerStyle">
          <div className="textStyle">Showing</div>
          <div
            className={employeeState.max === "" ? "hide" : ""}
          >{employeeState.min}</div>
          <div
            className={employeeState.max === "" ? "hide textStyle" : "textStyle"}
          >to</div>
          <div>{employeeState.max === "" ? "All" : employeeState.max}</div>
          <div
            className={employeeState.max === "" ? "hide textStyle" : "textStyle"}
          >of</div>
          <div
            className={employeeState.max === "" ? "hide" : ""}
          >{employeeState.nrAllEmployees}</div>
          <div className="textStyle">entries</div>

          <div className="footerRightStyle">
            <button id="previous" disabled={employeeState.min == 1} className={employeeState.min == 1 ? "button disabled" : "button"} onClick={this.previousButtonClicked}>Previous</button>
            <div id="pageNr" className="textStyle">{employeeState.pageNr}</div>
            <button id="next" disabled={employeeState.max == employeeState.nrAllEmployees} className={employeeState.max == employeeState.nrAllEmployees ? "button disabled" : "button"} onClick={this.nextButtonClicked}>Next</button>
          </div>
        </footer>
      </div>
    )
  }
}

export default view(EmployeeView)
