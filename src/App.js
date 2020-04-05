import React, { useState } from 'react';
import EventManager from './Manager/EventManager'
import DataService from './Manager/DataService';

function App() {
  
 const manager={
   eventManager: new EventManager(),
   dataService: new DataService()
 }

 return (
    <div>
    </div>
  );

}

export default App;


