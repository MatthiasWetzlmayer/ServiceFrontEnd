import {
    store
} from '@risingstack/react-easy-state';
import dataService from '../Manager/DataService';

const privateVars = {
    allEmployees: [],
}

const employees = store({
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
        var result = dataService.loadEmployees(employees.min, employees.max);
        employees.employees = result;
        if (employees.max > employees.employees.length || employees.max == "null") {
            employees.max = employees.employees.length;
        }
    },
    filterEmployees: (searchString) => {
        if (privateVars.allEmployees === null) {
            privateVars.allEmployees = employees.employees;
        }
        if (searchString.length < 1) {
            employees.employees = privateVars.allEmployees;
            privateVars.allEmployees = null;
        }
        else {
            employees.employees = employees.employees.filter(x => x.name.startsWith(searchString));
        }
    },

    initalize: () => {
        var result = dataService.size();
        employees.nrAllEmployees = result;
    },
});
export default employees