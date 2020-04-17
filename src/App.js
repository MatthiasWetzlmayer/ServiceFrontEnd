import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Services from './Components/Services'
import Employees from './Components/Employees'
import {GoogleApiWrapper} from 'google-maps-react';
import services from './States/ServiceState'

function App() {
 return (
    <div>
      <Employees></Employees>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAjNdsjave8Zd7JzROSIUycfyj6G0iXuwo")
})(view(App));


