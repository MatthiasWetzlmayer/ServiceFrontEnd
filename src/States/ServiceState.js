import {
    store
} from '@risingstack/react-easy-state';
import dataService from '../Manager/DataService';

const privateVars = {
    allServices: [],
}

const services = store({
    services: [],
    servicesWithCoords: [],
    employees: [{
            id: 1,
            name: "Wetzi"
        },
        {
            id: 2,
            name: "Mani"
        },

    ],
    serviceToEdit: {},

    addService: (serviceDTO) => {
        var result = dataService.addService(serviceDTO);
        services.services = [...services.services, result];
        privateVars.allServices = [...privateVars.allServices, result];
    
        console.log("Services:" + services.services[0]);
        console.log("Services In All Servies:" + privateVars.allServices[0]);
    },
    deleteService: () => {},
    editService: (id, serviceDTO) => {
        var result = dataService.editService(id, serviceDTO);
        for (var i = 0; i < services.services.length; ++i) {
            if (services.services[i].id === id) {
                services.services[i] = result;
            }
        }

        for (var i = 0; i < privateVars.allServices.length; ++i) {
            if (privateVars.allServices[i].id === id) {
                privateVars.allServices[i] = result;
            }
        }
    },
    loadServices: (min, max) => {},
    loadServicesWithCoords: () => {},
    filterServices: () => {}
})
export default services;