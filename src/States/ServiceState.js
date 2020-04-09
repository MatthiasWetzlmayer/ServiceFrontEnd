import {store} from '@risingstack/react-easy-state'
import DataService from '../Manager/DataService'
const privateVars={
    allServices:[],
}

const services=store({
    services:[],
    servicesWithCoords:[],
    employees:[],
    serviceToEdit:{},
    
    addService: ()=>{},
    editService: ()=>{},
    loadServices:(min, max)=>{},
    loadServicesWithCoords:()=>{},
    filterServices:()=>{},
    setServiceToEdit:(service)=>{
        services.serviceToEdit=service;
    },
    deleteService:(service)=>{
        services.services=services.services.filter(x=>x.id!==DataService.deleteService(service).id)
    }
})
export default services;