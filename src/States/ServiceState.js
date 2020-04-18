import {
    store
} from '@risingstack/react-easy-state';
import DataService from '../Manager/DataService';

const privateVars = {
    allServices: [],
}

const services = store({
    services: [{
        id: 1,
        name: "Müll raustragen",
        employee:{
            id: 1,
            name: "Maxi Müller",
            address: "Teststraße 2"
        }, 
        date: "2.5.2019",
        address: "Heimatgefühlsweg 5",
        lat: "45.2546",
        long: "78.6366"
    }, {
        id: 2,
        name: "Hund spazieren",
        employee:{
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
        employee:{
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
        employee:{
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
        employee:{
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
        employee:{
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
        employee:{
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
        employee:{
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
        employee:{
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
        employee:{
            id: 16,
            name: "Smitty Werben Jagger Man Jensen",
            address: "Nummernplatz 1"
        }, 
        date: "1.1,2021",
        address: "Wolke 7",
        lat: "95.218",
        long: "58.55658"
    }],
    servicesWithCoords: [],
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
    serviceToEdit: {},
    min: 0,
    max: 0,
    showEntries: 0,
    nrAllServices: 0,
    pageNr: 1,
    showAddService: false,
    showEditService: false,
    showOnMap: false,

    initalize: () => {
        DataService.serviceSize().then(res => {
            services.nrAllServices = res.data;
            console.log("Res: " + res.data);
        });
    },

    addService: (serviceDTO) => {
        DataService.addService(serviceDTO).then(res => {
            services.services.push(res.data);
            services.showAddService = false;
            services.nrAllServices++;
        });
    },
    setServiceToEdit:(service)=>{
        services.serviceToEdit=service;
        services.showEditService=true;
    },
    deleteService: (serviceId) => {
        DataService.deleteService(serviceId).then(res => {
            services.services = services.services.filter(x => x.id !== res.data.id);
        });
    },
    editService: (serviceDTO) => {
        DataService.editService(services.serviceToEdit.id, serviceDTO).then(res => {
            console.log(res.data);
            for (var i = 0; i < services.services.length; ++i) {
                if (services.services[i].id === services.serviceToEdit.id) {
                    services.services[i] = res.data;
                }
            }
    
            for (var j = 0; j < privateVars.allServices.length; ++j) {
                if (privateVars.allServices[j].id === services.serviceToEdit.id) {
                    privateVars.allServices[j] = res.data;
                }
            }
        });

    },
    loadServices: () => {
        DataService.loadServices(services.min, services.max).then(res => {
            services.services = res.data
            console.log(services.services);
            // if (services.showEntries > services.services.length) {
            //     services.max = services.max - services.services.length;
            // }
            
            if(services.nrAllServices < services.max){
                services.max = services.nrAllServices;
            }

            DataService.loadAllEmployees().then(res => {
                services.employees = res.data;
            })
        });

    },
    loadServicesWithCoords: () => {},
    filterServices: (searchString) => {
        console.log(privateVars.allServices);
        if (privateVars.allServices.length < 1) {
            console.log("Set private vars");
            privateVars.allServices = services.services;
        }
        console.log("SearchString: " + searchString);
        if (searchString.length < 1) {
            services.services = privateVars.allServices;
            privateVars.allServices = [];
        } else {
            services.services = services.services.filter(x => x.name.startsWith(searchString));
        }
    }
})
export default services;