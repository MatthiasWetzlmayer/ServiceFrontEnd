import React from 'react';
import { view } from '@risingstack/react-easy-state';
import ServiceView from './Components/ServiceView'
import AddService from './Components/AddService'

function App() {

 return (
    <div>
      <ServiceView></ServiceView>
    </div>
  );
}
export default view(App);


