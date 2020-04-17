import axios from 'axios';

const DataService={
    deleteService:(serviceId)=>{
        return axios.delete(`http://localhost:8080/services/${serviceId}`);
    },

    addService: (serviceDTO) => {
        console.log(serviceDTO);
        return axios.post(`http://localhost:8080/services`, serviceDTO);
    },

    editService: (id, serviceDTO) => {
        return axios.put(`http://localhost:8080/services/${id}`, serviceDTO);
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

    },
    loadServices: (min, max) => {
        return axios.get(`http://localhost:8080/services?min=${min}&max=${max}`);
    },

    loadAllEmployees: () => {
        return axios.get(`http://localhost:9000/employees`);
    },
    loadEmployees: (min, max) => {
        return [];
    },

    size: () => {
        return 2;
    },

    serviceSize: () => {
        return axios.get(`http://localhost:8080/services/size`);
    },
    deleteEmployee:(empId)=>{
        return {
            id: empId
        }
    }
}
export default DataService