import {
    store
} from '@risingstack/react-easy-state';
import dataService from '../Manager/DataService';

const privateVars = {
    allEmployees: [],
}

const employeeState = store({
    employees: [{
        id: 0,
        name: "Max Mustermann",
        address: "Musterstraße 5"
    },{
        id: 1,
        name: "Hans Müller",
        address: "HansMüllerStraße 44"
    }, {
        id: 2,
        name: "Maria-Klara Krup",
        address: "Comschstraße 12"
    },{
        id: 3,
        name: "Phil Laude",
        address: "Kuhmistweg 1"
    }, {
        id: 4,
        name: "Ben Dover",
        address: "Kahootstreet 1"
    }, , {
        id: 5,
        name: "Mike Oxlong",
        address: "Beamtenlaufbahn 22"
    }, {
        id: 6,
        name: "Lana Rhoades",
        address: "Jubelstraße 4"
    }, {
        id: 7,
        name: "Karmen Karma",
        address: "Trickbetrügerlichtung 8"
    }, {
        id: 8,
        name: "Mia Malkova",
        address: "Hunnenweg 6"
    }, {
        id: 9,
        name: "Jonny Sins",
        address: "Doctorstreet 11"
    }, {
        id: 10,
        name: "Abella Danger",
        address: "Ameisenstraße 34"
    }, {
        id: 11,
        name: "Asa Akira",
        address: "Reisweg  19"
    }, {
        id: 12,
        name: "Karoline Rose",
        address: "Tulpenpfad 5"
    }, {
        id: 13,
        name: "Karlee Gray",
        address: "Grimmweg 8"
    }, {
        id: 14,
        name: "Jessa Rhodes",
        address: "Müllbachplatz 46"
    }, {
        id: 15,
        name: "Peta Jensen",
        address: "Nimmerland 42"
    }, {
        id: 16,
        name: "Smitty Werben Jagger Man Jensen",
        address: "Nummernplatz 1"
    }, {
        id: 17,
        name: "Madison Ivy",
        address: "Gartenlauf 12"
    }, {
        id: 18,
        name: "Janice Grifffith",
        address: "Grafitiplatz 8"
    }, {
        id: 19,
        name: "Ariana Grande",
        address: "Sternendollarpfad 1"
    }, {
        id: 20,
        name: "Bridgette B.",
        address: "Tahiweg 6"
    }, {
        id: 21,
        name: "Valentina Nappi",
        address: "Dr-Schauer-Straße 5"
    }, {
        id: 22,
        name: "Bill Bailey",
        address: "Dr-Kroß-Straße 13"
    }, {
        id: 23,
        name: "Brad Knight",
        address: "Ritterweg 7"
    }, {
        id: 24,
        name: "Bryan Gozzling",
        address: "Göthestraße 5"
    }, {
        id: 25,
        name: "Daimon Dice",
        address: "Würfeldock 65"
    }, {
        id: 26,
        name: "Ike Diezel",
        address: "Tankweg 19"
    }, {
        id: 27,
        name: "James Deen",
        address: "Indianerpfad 26"
    }, {
        id: 28,
        name: "Jessy Jones",
        address: "Bauerpforte 24"
    }, {
        id: 29,
        name: "Keiran Lee",
        address: "Felsenweg 57"
    }
    , {
        id: 30,
        name: "Lucas Frost",
        address: "Triuphweg 20"
    }],

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
    showEditEmployee: false,

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