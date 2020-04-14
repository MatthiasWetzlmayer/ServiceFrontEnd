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
    addEmployee:(employeeDTO) => {
        var result = dataService.addEmployee(employeeDTO);
        employeeState.employees = [...employeeState.employees, result];
        
        console.log("Employees: " + employeeState.employees);
    },
    deleteEmployee:()=>{},
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
    loadEmployees:()=>{},
    filterEmployees: () => {}
});
export default employeeState