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
        //TODO editService Request
        var obj = JSON.parse(serviceDTO);
        
        return {
            id: id,
            name: serviceDTO.name,
            employeeId: serviceDTO.employeeId,
            date: serviceDTO.date,
            address: serviceDTO.address
        };
    },

    loadEmployees: (min, max) => {
        return [
            {
                id: 1,
                name: "Wetzi",
                address: "Test"
            },
            {
                id: 2,
                name: "Mani",
                address: "Test"
            },
            {
                id: 3,
                name: "Riffi",
                address: "Test"
            },
            {
                id: 4,
                name: "Mani",
                address: "Test"
            },
            {
                id: 5,
                name: "Mani",
                address: "Test"
            },
        ]
    },

    size: () => {
        return 5;
    }
}
export default DataService