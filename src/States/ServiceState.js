import {
    store
} from '@risingstack/react-easy-state';
import DataService from '../Manager/DataService';

const privateVars = {
    allServices: [],
    min: -1
}

const services = store({
    services: [],
    servicesWithCoords: [],
    employees: [],
    serviceToEdit: {},
    min: 0,
    max: 0,
    showEntries: 0,
    nrAllServices: -1,
    pageNr: 1,
    showAddService: false,
    showEditService: false,
    showOnMap: false,
    eventSource: null,

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

    resetAlertAfterAmount: (seconds) => {
        setTimeout( () => {
            services.disableAlert();
        }, seconds);
    },

    addService: (serviceDTO) => {
        services.disableAlert();
        DataService.addService(serviceDTO).then(res => {
                if(parseInt(services.max) / parseInt(services.pageNr) < parseInt(services.showEntries)){
                    services.services.push(res.data);
                }
                services.showAddService = false;
                services.nrAllServices++;
                services.updateAlert("Hinzufügen Erfolgreich", "success");
                services.resetAlertAfterAmount(3000);
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
        if (serviceId === services.serviceToEdit.id) {
            services.serviceToEdit = {};
            services.showEditService = false;
        }

        DataService.deleteService(serviceId).then(res => {
                services.nrAllServices--;
                services.services = services.services.filter(x => x.id !== res.data.id);
                services.updateAlert("Löschen erfolgreich", "success");
                services.resetAlertAfterAmount(3000);

                if (parseInt(services.max) > parseInt(services.nrAllServices)) {
                    services.max = services.nrAllServices;
                }

                if (parseInt(services.nrAllEmployees) === 0) {
                    services.min = 0;
                    services.max = 0;
                } else if (parseInt(services.min) > parseInt(services.nrAllServices)) {
                    services.min = parseInt(services.min) - parseInt(services.showEntries);
                    services.max = parseInt(services.max) - parseInt(services.nrAllServices) % parseInt(services.showEntries);
                    services.loadServices();
                }

                if (parseInt(services.max) !== parseInt(services.nrAllServices)) {
                    privateVars.min = services.max;
                    services.loadServices(true);
                }
            })
            .catch(error => {
                services.updateAlert(error.response.data.message, "error");
            });
    },
    editService: (serviceDTO) => {
        services.disableAlert();
        DataService.editService(services.serviceToEdit.id, serviceDTO).then(res => {

                for (var i = 0; i < services.services.length; ++i) {
                    if (services.services[i].id === services.serviceToEdit.id) {
                        services.services[i] = res.data;
                    }
                }

                services.serviceToEdit = {};
                services.showEditService = false;

                services.updateAlert("Bearbeiten erfolgreich", "success");
                services.resetAlertAfterAmount(3000);
            })
            .catch(error => {
                services.updateAlert(error.response.data.message, "error");
            });


    },
    loadServices: (loadOneService) => {
        if (parseInt(services.nrAllServices) === 0) {
            services.min = 0;
            services.max = 0;
            services.updateAlert("Keine Dienste in der Datenbank!", "info");
        } else {

            if (!loadOneService) {
                services.disableAlert();
            }

            if(services.eventSource){
                services.eventSource.close();
                services.eventSource = null;
            }
           
            if (loadOneService) {
                services.eventSource = DataService.loadServices(privateVars.min, services.max);
                privateVars.min = -1;

            } else {
                services.eventSource = DataService.loadServices(services.min, services.max);

                services.services = [];
            }
            let isOpen = false;

            services.eventSource.onopen = e => {
                if (isOpen) {
                    services.eventSource.close();
                    services.eventSource = null;
                } else {
                    isOpen = true;
                }
            }
            services.eventSource.onmessage = e => {
                services.services.push(JSON.parse(e.data));
                if (services.nrAllServices < services.max) {
                    services.max = services.nrAllServices;
                }
            }

            DataService.loadAllEmployees().then(res => {
                    services.employees = res.data;
                })
                .catch(error => {
                    services.updateAlert(error.response.data.message, "error");
                })

        }
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