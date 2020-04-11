import React, { useEffect } from 'react';
import { view } from '@risingstack/react-easy-state';
import ServiceView from './Components/ServiceView'
import services from './States/ServiceState';

function App() {
  
 return (
    <div>
      <ServiceView></ServiceView>
    </div>
  );
}
export default view(App);


