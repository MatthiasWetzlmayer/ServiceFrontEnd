import {
    store
} from '@risingstack/react-easy-state';
import DataService from '../Manager/DataService';

const privateVars = {
    allEmployees: [],
    min: -1,
}

const employeeState = store({
    employees: [],

    employeeToEdit: {},

    min: 0,
    max: 0,
    showEntries: 0,
    nrAllEmployees: -1,
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

    resetAlertAfterAmount: (seconds) => {
        setTimeout(() => {
            employeeState.disableAlert();
        }, seconds);
    },

    addEmployee: (employeeDTO) => {
        employeeState.disableAlert();
        DataService.addEmployee(employeeDTO).then(res => {
            employeeState.showAddEmployee = false;
            employeeState.nrAllEmployees++;

                if (parseInt(employeeState.max) / parseInt(employeeState.pageNr) < parseInt(employeeState.showEntries)) {
                    employeeState.employees.push(res.data);
                    employeeState.max++;
                }else if (employeeState.min === 0 && employeeState.max === 0){
                    employeeState.employees.push(res.data);
                    employeeState.pageNr++;
                    employeeState.min++;
                    employeeState.max++;
                }

               
                employeeState.updateAlert("Hinzufügen erfolgreich", "success");
                employeeState.resetAlertAfterAmount(3000);
            })
            .catch(error => {
                employeeState.updateAlert(error.response.data.message, "error");
            });
    },
    setEmployeeToEdit: (employee) => {
        if (employeeState.employeeToEdit.id === employee.id) {
            employeeState.employeeToEdit = {};
            employeeState.showEditEmployee = false;
        } else {
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
                employeeState.resetAlertAfterAmount(3000);
            })
            .catch(error => {
                employeeState.updateAlert(error.response.data.message, "error");
            });
    },

    deleteEmployee: (empId) => {
        employeeState.disableAlert();
        DataService.deleteEmployee(empId).then(res => {
                employeeState.nrAllEmployees--;
                employeeState.employees = employeeState.employees.filter(x => x.id !== res.data.id);
                employeeState.updateAlert("Löschen erfolgreich", "success");
                employeeState.resetAlertAfterAmount(3000);

                //The Max value can not be more than all Employees in the DB
                if (parseInt(employeeState.max) > parseInt(employeeState.nrAllEmployees) || employeeState.max === "") {
                    employeeState.max = employeeState.nrAllEmployees;
                }

                //Show the alert in loadEmployees if there are no employees
                if (parseInt(employeeState.nrAllEmployees) === 0) {
                    employeeState.min = 0;
                    employeeState.max = 0;
                    employeeState.loadEmployees();
                //If you delete the last Employee on a page, go back one page and load the according employees 
                } else if (parseInt(employeeState.min) > parseInt(employeeState.nrAllEmployees)) {
                    employeeState.min = parseInt(employeeState.min) - parseInt(employeeState.showEntries);
                    employeeState.max = parseInt(employeeState.max) - parseInt(employeeState.nrAllEmployees) % parseInt(employeeState.showEntries);
                    employeeState.pageNr--;
                    employeeState.loadEmployees();
                }
                //if you delete an entry on the second last side page when there is only one service on the next page you dont need max (because this is one to low)
                else if(
                    parseInt(employeeState.max) === parseInt(employeeState.nrAllEmployees)
                    && parseInt(employeeState.showEntries) * parseInt(employeeState.pageNr) <= parseInt(employeeState.nrAllEmployees)
                    ){
                        privateVars.min = employeeState.nrAllEmployees;
                        employeeState.loadEmployees(true);
                }
                else  if (parseInt(employeeState.max) < parseInt(employeeState.nrAllEmployees)
                && !(parseInt(employeeState.min) === parseInt(employeeState.nrAllEmployees))){
                    privateVars.min = employeeState.max;
                    employeeState.loadEmployees(true);
                }

            })
            .catch(error => {
                console.log(error);
                employeeState.updateAlert(error.response.data.message, "error");
            });
    },
    loadEmployees: (loadOneEmployee) => {

        if (parseInt(employeeState.nrAllEmployees) === 0) {
            employeeState.min = 0;
            employeeState.max = 0;
            employeeState.updateAlert("Keine Mitarbeiter in der Datenbank!", "info");
        } else {
            if (!loadOneEmployee) {
                employeeState.disableAlert();
            }
            DataService.loadEmployees(loadOneEmployee ? privateVars.min : employeeState.min, employeeState.max).then(res => {
                    console.log(res.data);
                    if (loadOneEmployee) {
                        employeeState.employees.push(res.data[0]);
                        privateVars.min = -1
                    } else {
                        employeeState.employees = res.data;
                    }
                    if (employeeState.nrAllEmployees < employeeState.max) {
                        employeeState.max = employeeState.nrAllEmployees;
                    }

                })
                .catch(error => {
                    if(parseInt(employeeState.nrAllEmployees) !== 0)
                    {
                        employeeState.updateAlert(error.response.data.message, "error");
                    }
                    else{
                        employeeState.loadEmployees();
                    }
                });
        }
    },
    filterEmployees: (searchString) => {
        if (privateVars.allEmployees.length < 1) {
            privateVars.allEmployees = employeeState.employees;
        }
        if (searchString.length < 1) {
            employeeState.employees = privateVars.allEmployees;
            privateVars.allEmployees = [];
        } else {
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