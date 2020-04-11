import React, { Component } from 'react'
import { view } from '@risingstack/react-easy-state';
import ServiceTable from './ServiceTable';
import state from '../States/ServiceState';
import App from '../App.css';
import services from '../States/ServiceState';

export class ServiceView extends Component {
  render() {
    return (
      <div >
        <header style={headerStyle}>
        
            <div style={textStyle}>Show</div>    
            <div>
              <select style={colorStyle}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="null">All</option>
              </select>
            </div>
            <div style={textStyle}>entries</div>

            <div style={rightStyle}>
              <label for="search">Search: </label>
              <input 
                name="search" 
                type="text" 
                style={colorStyle}></input>
            </div>
          
        </header>
        {/* <ServiceTable></ServiceTable> */}
        <br></br>
        <br></br>
        <br></br>
        <footer style={footerStyle}>
          <div style={textStyle}>Showing</div>
          <div>{services.min}</div>
          <div style={textStyle}>to</div>
          <div>{services.max}</div>
          <div style={textStyle}>of</div>
          <div>{services.services.length}</div>
          <div style={textStyle}>entries</div>

          <div style={footerRightStyle}>
              <button className="button">Previous</button>
              <div style={textStyle}>1</div>
              <button className="button">Next</button>
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

export default view(ServiceView)
