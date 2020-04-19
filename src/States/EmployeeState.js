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
    customAlert: {
        showAlert: false,
        alertMessage: "",
        alertSeverity: ""
    },
    

    updateAlert: (message, severity) => {
        employeeState.customAlert.alertMessage = message;
        employeeState.customAlert.showAlert = true;
        employeeState.customAlert.alertSeverity = severity;
    },

    disableAlert: () => {
        employeeState.customAlert.showAlert = false;
    },

    addEmployee: (employeeDTO) => {
        employeeState.disableAlert();
        DataService.addEmployee(employeeDTO).then(res => {
            employeeState.employees.push(res.data);
            employeeState.showAddEmployee = false;
            employeeState.nrAllEmployees++;
            employeeState.updateAlert("Hinzufügen erfolgreich", "success");
        })
        .catch(error => {
            employeeState.updateAlert(error.response.data.message, "error");
        });
    },
    setEmployeeToEdit: (employee) => {
        if(employeeState.employeeToEdit.id === employee.id){
            employeeState.employeeToEdit = {};
            employeeState.showEditEmployee = false;
        }
        else{
            employeeState.employeeToEdit = employee;
            employeeState.showEditEmployee = true;
        }

    },
    editEmployee: (id, employeeDTO) => {
        employeeState.disableAlert();
        DataService.editEmployee(employeeState.employeeToEdit.id, employeeDTO).then(res => {
            console.log(res.data);
            for (var i = 0; i < employeeState.employees.length; ++i) {
                if (employeeState.employees[i].id === employeeState.employeeToEdit.id) {
                    employeeState.employees[i] = res.data;
                }
            }

            employeeState.employeeToEdit = {};
            employeeState.showEditEmployee = false;

            employeeState.updateAlert("Bearbeiten erfolgreich", "success");
        })
        .catch(error => {
            employeeState.updateAlert(error.response.data.message, "error");
        });
    },

    deleteEmployee: (empId) => {
        employeeState.disableAlert();
        DataService.deleteEmployee(empId).then(res => {
            employeeState.employees = employeeState.employees.filter(x => x.id !== res.data.id);
            employeeState.nrAllEmployees--;
            employeeState.updateAlert("Löschen erfolgreich", "success");
        })
        .catch(error => {
            employeeState.updateAlert(error.response.data.message, "error");
        });
    },
    loadEmployees: () => {
        employeeState.disableAlert();
        DataService.loadEmployees(employeeState.min, employeeState.max).then(res => {
            employeeState.employees = res.data;
            if (employeeState.nrAllEmployees < employeeState.max) {
                employeeState.max = employeeState.nrAllEmployees;
            }
        })
        .catch(error => {
            employeeState.updateAlert(error.response.data.message, "error");
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