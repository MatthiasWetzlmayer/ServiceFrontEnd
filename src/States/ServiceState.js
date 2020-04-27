import {
    store
} from '@risingstack/react-easy-state';
import DataService from '../Manager/TestDataService';

const privateVars = {
    allServices: [],
    min: -1,
    debugMode: true
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
        setTimeout(() => {
            services.disableAlert();
        }, seconds);
    },

    addService: (serviceDTO) => {
        services.disableAlert();
        DataService.addService(serviceDTO).then(res => {

                services.showAddService = false;
                services.nrAllServices++;
                if (parseInt(services.min) === 0 && 0 === parseInt(services.max)) {
                    services.services.push(res.data);
                    services.pageNr = 1;
                    services.min = 1;
                    services.max = 1;

                } else if (parseInt(services.max) / parseInt(services.pageNr) < parseInt(services.showEntries)) {
                    services.services.push(res.data);
                    services.max++;
                }
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
            services.serviceToEdit = {};
            services.showEditService = false;
            setTimeout(() => {
                services.serviceToEdit = service;
                services.showEditService = true;
            }, 0);
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


                //The Max value can not be more than all Services in the DB
                if (parseInt(services.max) > parseInt(services.nrAllServices) || services.max === "") {
                    services.max = services.nrAllServices;
                }

                //If there are no Services show the alert in loadServices()
                if (parseInt(services.nrAllServices) === 0) {
                    services.min = 0;
                    services.max = 0;
                    services.loadServices();
                    //If you delete the last Service on a page, go back one page and load the according services
                } else if (parseInt(services.min) > parseInt(services.nrAllServices)) {
                    services.min = parseInt(services.min) - parseInt(services.showEntries);
                    services.max = parseInt(services.max) - parseInt(services.nrAllServices) % parseInt(services.showEntries);
                    services.pageNr--;
                    services.loadServices();
                }
                //if you delete an entry on the second last side page when there is only one service on the next page you dont need max (because this is one to low)
                else if (
                    parseInt(services.max) === parseInt(services.nrAllServices) &&
                    parseInt(services.showEntries) * parseInt(services.pageNr) <= parseInt(services.nrAllServices)
                ) {
                    privateVars.min = services.nrAllServices;
                    services.loadServices(true);
                }
                //load the service of the next page if there is enough space on this page
                else if (parseInt(services.max) < parseInt(services.nrAllServices) &&
                    !(parseInt(services.min) === parseInt(services.nrAllServices))) {
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

            if (privateVars.debugMode) {
                DataService.loadServices(loadOneService ? privateVars.min : services.min, services.max).then(res => {
                    console.log("Res after load: ");
                    console.log(res);
                    if (loadOneService) {
                        services.services.push(res.data[0]);
                        privateVars.min = -1
                    } else {
                        services.services = res.data;
                        console.log("Services: ");
                        console.log(services.services);
                    }
                    if (services.nrAllServices < services.max) {
                        services.max = services.nrAllServices;
                    }

                })
                .catch(error => {
                    if(parseInt(services.nrAllServices) !== 0)
                    {
                        services.updateAlert(error.response.data.message, "error");
                    }
                    else{
                        services.loadServices();
                    }
                });
            } else {


                if (services.eventSource) {
                    services.eventSource.close();
                    services.eventSource = null;
                }

                if (loadOneService) {
                    services.eventSource = DataService.loadServices(privateVars.min, services.max);
                    privateVars.min = -1;

                } else {
                    services.eventSource = DataService.loadServices(services.min, services.max);

                    console.log(services.eventSource);

                    services.services = [];
                }
                let isOpen = false;

                services.eventSource.onopen = e => {
                    if (isOpen) {
                        services.eventSource.close();
                        services.eventSource = null;

                    } else {
                        if (parseInt(services.nrAllServices) === 0) {
                            services.loadServices();
                        } else {
                            isOpen = true;
                        }
                    }
                }
                services.eventSource.onmessage = e => {
                    console.log("onmessage e: ");
                    console.log(e);
                    services.services.push(JSON.parse(e.data));
                    if (services.nrAllServices < services.max) {
                        services.max = services.nrAllServices;
                    }
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