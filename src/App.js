import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { EmployeeTable } from './Components/EmployeeTable';
import app from './App.css'
import employees from './States/EmployeeState'

function App() {
  
 return (
    <div>
      <EmployeeTable employees={employees.employees}></EmployeeTable>
    </div>
  );
}
export default view(App);


