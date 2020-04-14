import {
    store
} from '@risingstack/react-easy-state';
import dataService from '../Manager/DataService';

const privateVars = {
    allEmployees: [],
}

const employeeState = store({
    employees: [],
    employeeToEdit: {},
    min: 0,
    max: 0,
    showEntries: 0,
    nrAllEmployees: 0,
    showAddEmployee: false,
    addEmployee: () => { },
    deleteEmployee: () => { },
    setEmployeeToEdit: () => { },
    editEmployee: () => { },
    loadEmployees: () => {
        var result = dataService.loadEmployees(employeeState.min, employeeState.max);
        employeeState.employees = result;
        if (employeeState.max > employeeState.employees.length || employeeState.max == "null") {
            employeeState.max = employeeState.employees.length;
        }
    },
    filterEmployees: (searchString) => {
        if (privateVars.allEmployees === null) {
            privateVars.allEmployees = employeeState.employees;
        }
        if (searchString.length < 1) {
            employeeState.employees = privateVars.allEmployees;
            privateVars.allEmployees = null;
        }
        else {
            employeeState.employees = employeeState.employees.filter(x => x.name.startsWith(searchString));
        }
    },

    initalize: () => {
        var result = dataService.size();
        employeeState.nrAllEmployees = result;
    },
});
export default employeeState