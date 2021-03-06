import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import ServiceTable from './ServiceTable';
import '../App.css';
import services from '../States/ServiceState';

export class ServiceView extends Component {


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
    services.max = e.target.value;
    services.loadServices();

    services.pageNr = 1;
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

    // this.setState({pageNr: this.state.pageNr + 1});
    services.pageNr++;
  }

  previousButtonClicked = (e) => {
    e.preventDefault();
    if(services.max === services.nrAllServices && services.max % services.showEntries !== 0){
      services.max = services.max - parseInt(services.nrAllServices) % services.showEntries;
    }
    else{
      services.max = parseInt(services.max) - parseInt(services.showEntries);
    }
    services.min = parseInt(services.min) - parseInt(services.showEntries);
    services.loadServices();

    // this.setState({pageNr: this.state.pageNr - 1});
    services.pageNr--;
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
        <header>
        
            <div className="textStyle">Zeige</div>    
            <div>
              <select 
                name="entries"
                id="entries"
                //options={state.options}
                onChange={this.selectionChanged} 
                className="colorStyle">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="">Alle</option>
              </select>
            </div>
            <div className="textStyle">Einträge an</div>

            <button 
            className="button specialButtonStyle"
            onClick={this.addService} 
            >
              {services.showAddService ? "Dienst anlegen abbrechen" : "Dienst anlegen"}
            </button>

            <div className="rightStyle">
              <label for="search">Suche: </label>
              <input 
                name="search"
                id="search" 
                type="text" 
                className="colorStyle"
                onChange={this.searchChanged}></input>
            </div>
          
        </header>
        <ServiceTable services={services.services}></ServiceTable>
        <footer>
          <div className="textStyle">Zeige</div>
          <div
            className={services.max === "" ? "hide" : ""}
          >{services.min}.</div>
          <div 
          className={services.max === "" ? "hide textStyle" : "textStyle"}
          >bis</div>
          <div>{services.max === "" ? "alle" : services.max + "."}</div>
          <div 
          className={services.max === "" ? "hide textStyle" : "textStyle"}
          >von</div>
          <div
          className={services.max === "" ? "hide" : ""}
          >{services.nrAllServices}</div>
          <div className="textStyle">Einträgen an</div>

          <button 
          className="button specialButtonStyle" 
          onClick= {this.showOnMap}>
            {services.showOnMap ? "Nicht mehr anzeigen" : "Auf Karte anzeigen" }
          </button>

          <div className="footerRightStyle">
              <button 
                id="previous"
                onClick={this.previousButtonClicked}
                className={parseInt(services.min) <= 1 ? "button disabled" : "button"}
                disabled = {parseInt(services.min) <= 1}
                >Vorherige
                </button>
              <div id="pageNr" className="textStyle">{services.pageNr}</div>
              <button
                id="next"
                onClick={this.nextButtonClicked} 
                className={parseInt(services.max) === parseInt(services.nrAllServices) || services.max === "" ? "button disabled" : "button"}
                disabled = {parseInt(services.max) === parseInt(services.nrAllServices) || services.max === ""}
                >Nächste</button>
          </div>
        </footer>
      </div>
    )
  }
}

export default view(ServiceView)
