const DataService = {
    services: [{
        id: 1,
        name: "Müll raustragen",
        employee: {
            id: 1,
            name: "Hans Müller",
            address: "HansMüllerStraße 44"
        },
        date: "2.5.2019",
        address: "Heimatgefühlsweg 5",
        lat: "45.2546",
        long: "78.6366"
    }, {
        id: 2,
        name: "Hund spazieren",
        employee: {
            id: 4,
            name: "Ben Dover",
            address: "Kahootstreet 1"
        },
        date: "6.8.2019",
        address: "Trageweg 16",
        lat: "54.896",
        long: "58.4636"
    }, {
        id: 3,
        name: "Bett testen",
        employee: {
            id: 6,
            name: "Lana Rhoades",
            address: "Jubelstraße 4"
        },
        date: "18.40.2020",
        address: "Dänemark, Bettenlager 8",
        lat: "12.85694",
        long: "59.781"
    }, {
        id: 4,
        name: "Haare schneiden",
        employee: {
            id: 22,
            name: "Bill Bailey",
            address: "Dr-Kroß-Straße 13"
        },
        date: "6.8.2020",
        address: "Klippweg 9",
        lat: "318.5118",
        long: "298.216518"
    }, {
        id: 5,
        name: "DBI Projekt testen",
        employee: {
            id: 30,
            name: "Lucas Frost",
            address: "Triuphweg 20"
        },
        date: "9.12.2020",
        address: "Programmpfad 6",
        lat: "98.68522",
        long: "63.6366"
    }, {
        id: 6,
        name: "Genie sein",
        employee: {
            id: 28,
            name: "Jessy Jones",
            address: "Bauerpforte 24"
        },
        date: "18.04.2020",
        address: "Geniuswalk 1",
        lat: "65.885258",
        long: "85.36696"
    }, {
        id: 7,
        name: "Service erstellen",
        employee: {
            id: 26,
            name: "Ike Diezel",
            address: "Tankweg 19"
        },
        date: "17.04.2020",
        address: "Datenautobahn",
        lat: "99.5888",
        long: "18.5163"
    }, {
        id: 8,
        name: "Käsebrot machen",
        employee: {
            id: 23,
            name: "Brad Knight",
            address: "Ritterweg 7"
        },
        date: "6.7.1258",
        address: "Radauweg",
        lat: "58.118",
        long: "69.2518"
    }, {
        id: 9,
        name: "Tragebank benutzen",
        employee: {
            id: 19,
            name: "Ariana Grande",
            address: "Sternendollarpfad 1"
        },
        date: "15.8.1111",
        address: "Euroweg 3",
        lat: "86.2565",
        long: "68.84126"
    }, {
        id: 10,
        name: "Maria einen Antrag machen",
        employee: {
            id: 16,
            name: "Smitty Werben Jagger Man Jensen",
            address: "Nummernplatz 1"
        },
        date: "1.1,2021",
        address: "Wolke 7",
        lat: "95.218",
        long: "58.55658"
    }],

    employees: [{
        id: 1,
        name: "Max Mustermann",
        address: "Musterstraße 5"
    }, {
        id: 2,
        name: "Hans Müller",
        address: "HansMüllerStraße 44"
    }, {
        id: 3,
        name: "Maria-Klara Krup",
        address: "Comschstraße 12"
    }, {
        id: 4,
        name: "Phil Laude",
        address: "Kuhmistweg 1"
    }, {
        id: 5,
        name: "Ben Dover",
        address: "Kahootstreet 1"
    }, {
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
    }, {
        id: 31,
        name: "Lucas Frost",
        address: "Triuphweg 20"
    }, {
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
    }, {
        id: 55,
        name: "Karl Marx",
        address: "Kapstadt, Kapitalsviertel 25"
    }, {
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
    }],

    empId: 60,

    serviceId: 10,


    deleteService: (serviceId) => {
        let toDel;
        DataService.services.forEach(element => {
            if (element.id === parseInt(serviceId)) {
                toDel = element;
            }
        });

        DataService.services = DataService.services.filter(x => x.id !== parseInt(serviceId));

        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: toDel
            });
        });
    },

    addService: (serviceDTO) => {

        let employee;
        DataService.employees.forEach(element => {
            if (parseInt(element.id) === parseInt(serviceDTO.employeeId)) {
                employee = element;
            }
        });

        const service = {};

        service.id = DataService.serviceId++;
        service.name = serviceDTO.name;
        service.employee = employee;
        service.date = serviceDTO.date;
        service.address = serviceDTO.address;

        DataService.services.push(service);
        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: service
            });
        });
    },

    editService: (id, serviceDTO) => {
        serviceDTO.id = id;

        let employee;
        DataService.employees.forEach(element => {
            if (parseInt(element.id) === parseInt(serviceDTO.employeeId)) {
                employee = element;
            }
        });

        const service = {};

        service.id = serviceDTO.id;
        service.name = serviceDTO.name;
        service.employee = employee;
        service.date = serviceDTO.date;
        service.address = serviceDTO.address;


        DataService.services.forEach(element => {
            if (element.id === parseInt(id)) {
                element = service;
            }
        });

        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: service
            });
        });
    },

    loadServices: (min, max) => {

        if (max === "") {
            return DataService.loadAllServices();
        }
        min--;

        let length = DataService.services.length;

        if (parseInt(length) <= parseInt(max)) {
            max = length;
        }
        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: DataService.services.slice(min, max)
            });
        });




    },

    loadAllServices: () => {
        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: DataService.services
            });
        });
    },

    serviceSize: () => {
        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: DataService.services.length
            });
        });
    },

    deleteEmployee: (empId) => {
        let toDel;
        DataService.employees.forEach(element => {
            if (element.id === parseInt(empId)) {
                toDel = element;
            }
        });

        DataService.employees = DataService.employees.filter(x => x.id !== parseInt(empId));

        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: toDel
            });
        });
    },

    addEmployee: (employeeDTO) => {
        employeeDTO.id = DataService.empId++;
        DataService.employees.push(employeeDTO);

        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: employeeDTO
            });
        });
    },

    editEmployee: (id, employeeDTO) => {
        employeeDTO.id = id;
        DataService.employees.forEach(element => {
            if (element.id === parseInt(id)) {
                element = employeeDTO;
            }
        });

        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: employeeDTO
            });
        });
    },

    loadAllEmployees: () => {
        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: DataService.employees
            });
        });
    },

    loadEmployees: (min, max) => {
        if (max === "") {
            return DataService.loadAllEmployees();
        } else {
            min--;

            return new Promise((successCallback, failureCallback) => {
                successCallback({
                    data: DataService.employees.slice(min, max)
                });
            });
        }




    },

    employeeSize: () => {
        return new Promise((successCallback, failureCallback) => {
            successCallback({
                data: DataService.employees.length
            });
        });
    },

}
export default DataService