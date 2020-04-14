const DataService={
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
        
        return {
            id: id,
            name: serviceDTO.name,
            employeeId: serviceDTO.employeeId,
            date: serviceDTO.date,
            address: serviceDTO.address
        };
    },

    addEmployee: (employeeDTO) => {
        console.log(employeeDTO);

        return {
            id: 1,
            name: employeeDTO.name,
            address: employeeDTO.address
        };
    },

    editEmployee: (id, employeeDTO) => {
        
        return {
            id: id,
            name: employeeDTO.name,
            address: employeeDTO.address
        };
    }
}
export default DataService