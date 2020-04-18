import {
    store
} from '@risingstack/react-easy-state';
import dataService from '../Manager/DataService';

const privateVars = {
    allEmployees: [],
}

const employeeState = store({
    employees: [
        {
            id: 0,
            name: "Björn (Wetzi) Höcke",
            address: "Erfurt (Berlin), Der-Falsche-Weg-Gasse 88"
        },{
            id: 1,
            name: "Max Mustermann",
            address: "Musterstraße 5"
        },{
            id: 2,
            name: "Hans Müller",
            address: "HansMüllerStraße 44"
        }
        , {
            id: 3,
            name: "Maria-Klara Krup",
            address: "Comschstraße 12"
        },{
            id: 4,
            name: "Phil Laude",
            address: "Kuhmistweg 1"
        }, {
            id: 5,
            name: "Ben Dover",
            address: "Kahootstreet 1"
        }, , {
            id: 6,
            name: "Mike Oxlong",
            address: "Beamtenlaufbahn 22"
        }, {
            id: 7,
            name: "Lana Rhoades",
            address: "Jubelstraße 4"
        }, {
            id: 8,
            name: "Karmen Karma",
            address: "Trickbetrügerlichtung 8"
        }, {
            id: 9,
            name: "Mia Malkova",
            address: "Hunnenweg 6"
        }, {
            id: 10,
            name: "Jonny Sins",
            address: "Doctorstreet 11"
        }, {
            id: 11,
            name: "Abella Danger",
            address: "Ameisenstraße 34"
        }, {
            id: 12,
            name: "Asa Akira",
            address: "Reisweg  19"
        }, {
            id: 13,
            name: "Karoline Rose",
            address: "Tulpenpfad 5"
        }, {
            id: 14,
            name: "Karlee Gray",
            address: "Grimmweg 8"
        }, {
            id: 15,
            name: "Jessa Rhodes",
            address: "Müllbachplatz 46"
        }, {
            id: 16,
            name: "Peta Jensen",
            address: "Nimmerland 42"
        }, {
            id: 17,
            name: "Smitty Werben Jagger Man Jensen",
            address: "Nummernplatz 1"
        }, {
            id: 18,
            name: "Madison Ivy",
            address: "Gartenlauf 12"
        }, {
            id: 19,
            name: "Janice Grifffith",
            address: "Grafitiplatz 8"
        }, {
            id: 20,
            name: "Ariana Grande",
            address: "Sternendollarpfad 1"
        }, {
            id: 21,
            name: "Bridgette B.",
            address: "Tahiweg 6"
        }, {
            id: 22,
            name: "Valentina Nappi",
            address: "Dr-Schauer-Straße 5"
        }, {
            id: 23,
            name: "Bill Bailey",
            address: "Dr-Kroß-Straße 13"
        }, {
            id: 24,
            name: "Brad Knight",
            address: "Ritterweg 7"
        }, {
            id: 25,
            name: "Bryan Gozzling",
            address: "Göthestraße 5"
        }, {
            id: 26,
            name: "Daimon Dice",
            address: "Würfeldock 65"
        }, {
            id: 27,
            name: "Ike Diezel",
            address: "Tankweg 19"
        }, {
            id: 28,
            name: "James Deen",
            address: "Indianerpfad 26"
        }, {
            id: 29,
            name: "Jessy Jones",
            address: "Bauerpforte 24"
        }, {
            id: 30,
            name: "Keiran Lee",
            address: "Felsenweg 57"
        } , {
            id: 31,
            name: "Lucas Frost",
            address: "Triuphweg 20"
        }  , {
            id: 32,
            name: "Daniel Wetzlmayer",
            address: "Parzer Schulstraße 1"
        }, {
            id: 33,
            name: "Bernd Haberfellner",
            address: "Kornblumenweg 1"
        }, {
            id: 34,
            name: "Frederik Mustermensch",
            address: "Am Hafen 5"
        }, {
            id: 35,
            name: "Mona Ennsbauer",
            address: "St. Pauli, Markusplatz 3"
        }, {
            id: 36,
            name: "Jan Böhmermann",
            address: "Köln, Innere Stadt 33"
        }, {
            id: 37,
            name: "Sven Marquart",
            address: "Berlin, Friedrichshaiin/Kreuzberg 5"
        }, {
            id: 38,
            name: "Richard Lugner",
            address: "Wien, Rudolfsheim-Fünfhaus 80"
        }, {
            id: 39,
            name: "Elias Mayer",
            address: "Albrechtgasse 1"
        }, {
            id: 40,
            name: "Falco Musterkünstler",
            address: "Wien, Margareten 25"
        }, {
            id: 41,
            name: "Max Haberfellner",
            address: "Kornblumenweg 1"
        }, {
            id: 42,
            name: "Stephan Dom",
            address: "Wien, Innere Stadt 1"
        }, {
            id: 43,
            name: "Finch Bürger",
            address: "Berlin, Lichtenberg 35"
        }, {
            id: 44,
            name: "Franklin D. Roosevelt",
            address: "United States, WA, The White House, 1938"
        }, {
            id: 45,
            name: "Tim Cook",
            address: "United States, CA, Cupertino, Apple Park"
        }, {
            id: 46,
            name: "Harry S. Truman",
            address: "United States, WA, The White House, 1945"
        }, {
            id: 47,
            name: "John F. Kennedy",
            address: "United States, WA, The White House, 1960"
        }, {
            id: 48,
            name: "Josef Stalin",
            address: "Russian Federation, Moskva, The Kreml, 1945"
        }, {
            id: 49,
            name: "Vladimir Putin",
            address: "Russian Federation, Moskva, The Kreml, 2020"
        }, {
            id: 50,
            name: "Oliver Schulte",
            address: "Darmstadt, Kreuzergasse 25"
        }, {
            id: 51,
            name: "Sebastian Kurz",
            address: "Wien, Innere Stadt, Ballhausplatz 1"
        }, {
            id: 52,
            name: "Sebastian Schweritzer",
            address: "München, Maria-Theresien-Dom-Platz 25"
        }, {
            id: 53,
            name: "Angela Merkel",
            address: "Berlin, Mitte, Platz-der-Republik 1"
        }, {
            id: 54,
            name: "Robert Alterlaan",
            address: "Linz, Industrieviertel 25"
        }
        , {
            id: 55,
            name: "Karl Marx",
            address: "Kapstadt, Kapitalsviertel 25"
        }
        , {
            id: 56,
            name: "Ivanka Trump",
            address: "WA, The White House, Verwöhnungsraum 3"
        }, {
            id: 57,
            name: "Alexander Wachbein",
            address: "Darmstadt, Kreuzergasse 60"
        }, {
            id: 58,
            name: "Martin Bauer",
            address: "Tulln an der Donau, Jekaterinenweg 3"
        }, {
            id: 59,
            name: "Marcvus Crancheck",
            address: "Ljubljana, Crzev-Protsdam-Platz 25"
        }, {
            id: 60,
            name: "Programmier Meister",
            address: "Haizing 45, 4081 Hartkirchen"
        }   
        ],    

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