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
        
        return {
            id: id,
            name: serviceDTO.name,
            employeeId: serviceDTO.employeeId,
            date: serviceDTO.date,
            address: serviceDTO.address
        };
    },

    loadServices: (min, max) => {
        return [
            {
                id: 1,
                name: "Wetzi",
                employee: 1,
                date: "11.04",
                address: "Test"
            },
            {
                id: 2,
                name: "Mani",
                employee: 1,
                date: "11.04",
                address: "Test"
            },
            {
                id: 3,
                name: "Test",
                employee: 1,
                date: "11.04",
                address: "Test"
            },
            {
                id: 4,
                name: "Test2",
                employee: 1,
                date: "11.04",
                address: "Test"
            },
            {
                id: 5,
                name: "Riffi",
                employee: 1,
                date: "11.04",
                address: "Test"
            }
        ]
    },

    size: () => {
        return 5;
    }
}
export default DataService