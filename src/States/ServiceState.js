import {
    store
} from '@risingstack/react-easy-state';
import DataService from '../Manager/DataService';

const privateVars = {
    allServices: [],
}

const services = store({
    services: [],
    servicesWithCoords: [],
    employees: [{
        id: 1,
        name: "Wetzi",
        address: "ABC"
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
        var result = DataService.size();
        services.nrAllServices = result;
    },

    addService: (serviceDTO) => {
        var result = DataService.addService(serviceDTO);
        services.services = [...services.services, result];
    },
    setServiceToEdit:(service)=>{
        services.serviceToEdit=service;
    },
    deleteService:(service)=>{
        services.services=services.services.filter(x=>x.id!==DataService.deleteService(service).id)

        console.log("Services:" + services.services[0]);
        console.log("Services In All Servies:" + privateVars.allServices[0]);
    
        services.showAddService = false;
    },
    editService: (serviceDTO) => {
        var result = DataService.editService(services.serviceToEdit.id, serviceDTO);
        console.log(result);
        for (var i = 0; i < services.services.length; ++i) {
            if (services.services[i].id === services.serviceToEdit.id) {
                services.services[i] = result;
            }
        }

        for (var j = 0; j < privateVars.allServices.length; ++j) {
            if (privateVars.allServices[j].id === services.serviceToEdit.id) {
                privateVars.allServices[j] = result;
            }
        }
        console.log(services.services);
    },
    loadServices: () => {
        var result = DataService.loadServices(services.min, services.max);
        services.services = result;
        console.log(services.services);
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