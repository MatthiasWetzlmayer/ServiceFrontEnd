import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Services from './Components/Services'
import Employees from './Components/Employees'
import {GoogleApiWrapper} from 'google-maps-react';
import services from './States/ServiceState'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { findByLabelText } from '@testing-library/react';


function App() {
 return (
    <div>
      <div className="navStyles">
        <a className="button navItem" href="/services">Servicemanagement</a>
        <a className="button navItem" href="/employees">Employeemanagement</a>
      </div>
      <Router>
        <Route path="/services" component={Services} />
        <Route path="/employees" component={Employees} />
      </Router>
    </div>
  );
  
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAjNdsjave8Zd7JzROSIUycfyj6G0iXuwo")
})(view(App));


