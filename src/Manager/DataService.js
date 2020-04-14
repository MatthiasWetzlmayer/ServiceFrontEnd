const DataService={
    deleteService:(service)=>{
        return service;
    },
    addService: (serviceDTO) => {
        //TODO addService Request

        console.log(serviceDTO);

    
        
        return {
            id: 1,
            name: serviceDTO.name,
            employeeId: serviceDTO.employeeId,
            date: serviceDTO.date,
            address: serviceDTO.address
        };
    },

    editService: (id, serviceDTO) => {
        //TODO editService Request
        
        return {
            id: id,
            name: serviceDTO.name,
            employeeId: serviceDTO.employeeId,
            date: serviceDTO.date,
            address: serviceDTO.address
        };
    },


    loadServices: (min, max) => {
       return []
    },
    loadEmployees: (min, max) => {
        return []
    },

    size: () => {
        return 5;
    }
}
export default DataService