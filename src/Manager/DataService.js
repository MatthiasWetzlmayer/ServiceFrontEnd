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
       return [{
        id: "1",
        name: "Putzen",
        employee: {
            id: 1,
            name: "Wetzi",
            address: "ABC"
        },
        date: "26.02.2020 20:20",
        address: "Wetzi-Straße 5",
        lat: "13",
        lon: "48"

        },
        {
            id: "3",
            name: "Müll",
            employee: {
                id: 1,
                name: "Wetzi",
                address: "ABC"
            },
            date: "26.02.2020 20:20",
            address: "Wetzi-Straße 5",
            lat: "13",
            lon: "48"
    
            },
            {
                id: "4",
                name: "Spüli",
                employee: {
                    id: 1,
                    name: "Wetzi",
                    address: "ABC"
                },
                date: "26.02.2020 20:20",
                address: "Wetzi-Straße 5",
                lat: "13",
                lon: "48"
        
                },
        {
        id: "2",
        name: "Waschen",
        employee: {
            id: 1,
            name: "Wetzi",
            address: "ABC"
        },
        date: "26.02.2020 20:20",
        address: "Wetzi-Straße 5",
        lat: "13",
        lon: "48"

    }];
    },
    loadEmployees: (min, max) => {
        return [];
    },

    size: () => {
        return 2;
    }
}
export default DataService