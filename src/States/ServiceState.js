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
    employees: [],
    serviceToEdit: {},
    min: 0,
    max: 0,

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

        for (var j = 0; j < privateVars.allServices.length; ++j) {
            if (privateVars.allServices[j].id === id) {
                privateVars.allServices[j] = result;
            }
        }
    },
    loadServices: () => {
        var result = dataService.loadServices(services.min, services.max);
        services.services = result;
    },
    loadServicesWithCoords: () => {},
    filterServices: () => {}
})
export default services;