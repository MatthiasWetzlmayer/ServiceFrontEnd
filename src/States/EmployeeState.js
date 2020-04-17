import {
    store
} from '@risingstack/react-easy-state';
import dataService from '../Manager/DataService';

const privateVars = {
    allEmployees: [],
}

const employeeState = store({
    employees: [],

    employeeToEdit:{},
    addEmployee:(employeeDTO) => {
        var result = dataService.addEmployee(employeeDTO);
        employeeState.employees = [...employeeState.employees, result];
        
        console.log("Employees: " + employeeState.employees);
    },
    setEmployeeToEdit:()=>{},
    editEmployee:(id, employeeDTO) => {


        console.log(employeeDTO)
        var result = dataService.editEmployee(id, employeeDTO);
        for(var i = 0; i < employeeState.employees.length; ++i){
            if(employeeState.employees[i].id === id){
                employeeState.employees[i] = result;
            }
        }

        for (var i = 0; i < privateVars.allEmployees.length; ++i){
            if (privateVars.allEmployees[i].id === id) {
                privateVars.allEmployees[i] = result;
            }
        }

        console.log("Employeesedit: " + employeeState.employees);
    },

    min: 0,
    max: 0,
    showEntries: 0,
    nrAllEmployees: 0,
    showAddEmployee: false,
    deleteEmployee: (empId)=>{
        const id=dataService.deleteEmployee(empId).id
        employeeState.employees=employeeState.employees.filter(x => x.id!==id)
    },
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