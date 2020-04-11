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
    }],
    serviceToEdit: {},
    min: 0,
    max: 0,
    showEntries: 0,
    nrAllServices: 0,
    showAddService: false,
    showEditService: false,
    showOnMap: false,

    initalize: () => {
        var result = dataService.size();
        services.nrAllServices = result;
    },

    addService: (serviceDTO) => {
        var result = dataService.addService(serviceDTO);
        services.services = [...services.services, result];
        privateVars.allServices = [...privateVars.allServices, result];
    
        console.log("Services:" + services.services[0]);
        console.log("Services In All Servies:" + privateVars.allServices[0]);
    
        services.showAddService = false;
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
        if(services.max > services.services.length || services.max == "null"){
            services.max = services.services.length;
        }
    },
    loadServicesWithCoords: () => {},
    filterServices: (searchString) => {
        if(privateVars.allServices == null){
            privateVars.allServices = services.services;
        }
        if(searchString.length < 1){
            services.services = privateVars.allServices;
            privateVars.allServices = null;
        }
        else{
            services.services = services.services.filter(x => x.name.startsWith(searchString));
        }
    }
})
export default services;