import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import ServiceTable from './ServiceTable';
import state from '../States/ServiceState';
import App from '../App.css';
import services from '../States/ServiceState';

export class ServiceView extends Component {

  state = {
    pageNr: 1
  }

  componentDidMount (){
    services.initalize();
    services.min = 1;
    services.max = document.getElementById("entries").value;
    services.showEntries = services.max;
    services.loadServices();
  }

  selectionChanged = (e) => {
    e.preventDefault();
    services.showEntries = e.target.value;
    
    services.min = 1;
    services.max = services.showEntries;
    services.loadServices();

    this.setState({pageNr:  1});
  }

  searchChanged = (e) => {
    e.preventDefault();
    services.filterServices(e.target.value);
  }

  nextButtonClicked = (e) => {
    e.preventDefault();
    services.min = parseInt(services.min) + parseInt(services.showEntries);
    services.max = parseInt(services.max) + parseInt(services.showEntries);
    services.loadServices();

    console.log(this.state.pageNr);
    this.setState({pageNr: this.state.pageNr + 1});
  }

  previousButtonClicked = (e) => {
    e.preventDefault();
    if(services.max == services.nrAllServices){
      services.max = services.max - parseInt(services.nrAllServices) % services.showEntries;
    }
    else{
      services.max = parseInt(services.max) - parseInt(services.showEntries);
    }
    services.min = parseInt(services.min) - parseInt(services.showEntries);
    services.loadServices();

    console.log(this.state.pageNr);
    this.setState({pageNr: this.state.pageNr - 1});
  }

  addService = (e) => {
    services.showAddService = !services.showAddService;
  }

  showOnMap = (e) => {
    services.showOnMap = !services.showOnMap;
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
                selectedIndex={state.optionIndex}
                //options={state.options}
                onChange={this.selectionChanged} 
                style={colorStyle}>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="null">All</option>
              </select>
            </div>
            <div style={textStyle}>entries</div>

            <button 
            style={specialButtonStyle}
            onClick={this.addService} 
            className="button">
              {services.showAddService ? "Dienst anlegen abbrechen" : "Dienst anlegen"}
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
          <div>{services.min}</div>
          <div style={textStyle}>to</div>
          <div>{services.max}</div>
          <div style={textStyle}>of</div>
          <div>{services.nrAllServices}</div>
          <div style={textStyle}>entries</div>

          <button 
          style={specialButtonStyle}
          className="button" 
          onClick= {this.showOnMap}>
            {services.showOnMap ? "Nicht mehr anzeigen" : "Auf Karte anzeigen" }
          </button>

          <div style={footerRightStyle}>
              <button 
                id="previous"
                onClick={this.previousButtonClicked}
                className={services.min == 1 ? "button disabled" : "button"}
                disabled = {services.min == 1}
                >Previous
                </button>
    <div id="pageNr" style={textStyle}>{this.state.pageNr}</div>
              <button
                id="next"
                onClick={this.nextButtonClicked} 
                className={services.max == services.nrAllServices ? "button disabled" : "button"}
                disabled = {services.max == services.nrAllServices}
                >Next</button>
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

export default view(ServiceView)
