import {
    store
} from '@risingstack/react-easy-state';
import DataService from '../Manager/DataService';

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
    showEditEmployee: false,
    pageNr: 1,

    addEmployee: (employeeDTO) => {
        DataService.addEmployee(employeeDTO).then(res => {
            employeeState.employees.push(res.data);
            employeeState.showAddEmployee = false;
            employeeState.nrAllEmployees++;
        });
    },
    setEmployeeToEdit: (employee) => {
        employeeState.employeeToEdit = employee;
        employeeState.showEditEmployee = true;
    },
    editEmployee: (id, employeeDTO) => {
        DataService.editEmployee(employeeState.employeeToEdit.id, employeeDTO).then(res => {
            console.log(res.data);
            for (var i = 0; i < employeeState.employees.length; ++i) {
                if (employeeState.employees[i].id === employeeState.employeeToEdit.id) {
                    employeeState.employees[i] = res.data;
                }
            }

            for (var j = 0; j < privateVars.allEmployees.length; ++j) {
                if (privateVars.allEmployees[j].id === employeeState.employeeToEdit.id) {
                    privateVars.allEmployees[j] = res.data;
                }
            }
        });
    },

    deleteEmployee: (empId) => {
        DataService.deleteEmployee(empId).then(res => {
            employeeState.employees = employeeState.employees.filter(x => x.id !== res.data.id);
        });
    },
    loadEmployees: () => {
        DataService.loadEmployees(employeeState.min, employeeState.max).then(res => {
            employeeState.employees = res.data;
            if (employeeState.nrAllEmployees < employeeState.max) {
                employeeState.max = employeeState.nrAllEmployees;
            }
        });
    },
    filterEmployees: (searchString) => {
        if (privateVars.allEmployees.length < 1) {
            privateVars.allEmployees = employeeState.employees;
        }
        if (searchString.length < 1) {
            employeeState.employees = privateVars.allEmployees;
            privateVars.allEmployees = [];
        }
        else {
            employeeState.employees = employeeState.employees.filter(x => x.name.startsWith(searchString));
        }
    },

    initalize: () => {
        DataService.employeeSize().then(res => {
            employeeState.nrAllEmployees = res.data;
            console.log("Res: " + res.data);
        });
    },

});
export default employeeState