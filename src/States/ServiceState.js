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
    employees: [ {
        id: 0,
        name: "TestService"
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