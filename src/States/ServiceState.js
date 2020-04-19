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
    employees: [],
    serviceToEdit: {},
    min: 0,
    max: 0,
    showEntries: 0,
    nrAllServices: 0,
    pageNr: 1,
    showAddService: false,
    showEditService: false,
    showOnMap: false,

    customAlert: {
        alertMessage: "",
        alertSeverity: "",
        showAlert: false
    },

    initalize: () => {
        DataService.serviceSize().then(res => {
            services.nrAllServices = res.data;
            console.log("Res: " + res.data);
        });
    },

    updateAlert: (message, severity) => {
        services.customAlert.alertMessage = message;
        services.customAlert.showAlert = true;
        services.customAlert.alertSeverity = severity;
    },

    disableAlert: () => {
        services.customAlert.showAlert = false;
    },

    addService: (serviceDTO) => {
        services.disableAlert();
        DataService.addService(serviceDTO).then(res => {
            services.services.push(res.data);
            services.showAddService = false;
            services.nrAllServices++;
            services.updateAlert("Hinzufügen Erfolgreich", "success");
        })
        .catch(error => {
            services.updateAlert(error.response.data.message, "error");
        });
    },
    setServiceToEdit: (service) => {
        services.disableAlert();
        if (services.serviceToEdit.id === service.id) {
            services.serviceToEdit = {};
            services.showEditService = false;
        } else {
            services.serviceToEdit = service;
            services.showEditService = true;
        }

    },
    deleteService: (serviceId) => {
        services.disableAlert();
        if(serviceId ===services.serviceToEdit.id){
            services.serviceToEdit = {};
            services.showEditService = false;
        }
        
        DataService.deleteService(serviceId).then(res => {
            services.services = services.services.filter(x => x.id !== res.data.id);
            services.nrAllServices--;
            services.updateAlert("Löschen erfolgreich", "success");
            
        })
        .catch(error => {
            services.updateAlert(error.response.data.message, "error");
        });
    },
    editService: (serviceDTO) => {
        services.disableAlert();
        DataService.editService(services.serviceToEdit.id, serviceDTO).then(res => {
                console.log(res.data);

                for (var i = 0; i < services.services.length; ++i) {
                    if (services.services[i].id === services.serviceToEdit.id) {
                        services.services[i] = res.data;
                    }
                }

                services.serviceToEdit = {};
                services.showEditService = false;

                services.updateAlert("Bearbeiten erfolgreich", "success");

            })
            .catch(error => {
                services.updateAlert(error.response.data.message, "error");
            });


    },
    loadServices: () => {
        services.disableAlert();
        services.services = [];
        let isOpen = false;
        let eventSource = DataService.loadServices(services.min, services.max)

        eventSource.onopen = e => {
            if (isOpen) {
                eventSource.close();
            } else {
                isOpen = true;
            }
        }
        eventSource.onmessage = e => {

            services.services.push(JSON.parse(e.data));
            if (services.nrAllServices < services.max) {
                services.max = services.nrAllServices;
            }
        }

        DataService.loadAllEmployees().then(res => {
            services.employees = res.data;
        })
        .catch(error => {
            services.showAlert(error.response.data.message, "error");
        })

    },
    filterServices: (searchString) => {
        services.disableAlert();
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