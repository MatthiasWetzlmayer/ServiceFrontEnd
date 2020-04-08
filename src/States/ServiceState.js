import {store} from '@risingstack/react-easy-state'
const privateVars={
    allServices:[],
}

const services=store({
    services:[],
    servicesWithCoords:[],
    employees:[],
    serviceToEdit:{},
    
    addService: ()=>{},
    deleteService: ()=>{},
    editService: ()=>{},
    loadServices:(min, max)=>{},
    loadServicesWithCoords:()=>{},
    filterServices:()=>{}
})
export default services;