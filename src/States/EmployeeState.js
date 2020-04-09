import {
    store
} from '@risingstack/react-easy-state';
import dataService from '../Manager/DataService';

const privateVars = {
    allEmployees: [],
}

const employeeState=store({
    employees: [],
    employeeToEdit:{},
    addEmployee:()=>{},
    deleteEmployee:()=>{},
    setEmployeeToEdit:()=>{},
    editEmployee:()=>{},
    loadEmployees:()=>{},
    filterEmployees: () => {}
});
export default employeeState