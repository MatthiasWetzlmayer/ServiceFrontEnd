import axios from 'axios';
const DataService = {
    deleteService:(serviceId)=>{
        return axios.delete(`http://localhost:8080/services/${serviceId}`);
    },

    addService: (serviceDTO) => {
        return axios.post(`http://localhost:8080/services`, serviceDTO);
    },

    editService: (id, serviceDTO) => {
        return axios.put(`http://localhost:8080/services/${id}`, serviceDTO);
    },

    loadServices: (min, max) => {
        return new EventSource(`http://localhost:8080/services?min=${min}&max=${max}`);
        // return axios.get(`http://localhost:8080/services?min=${min}&max=${max}`);
    },

    serviceSize: () => {
        return axios.get(`http://localhost:8080/services/size`);
    },

    deleteEmployee:(empId)=>{
        return axios.delete(`http://localhost:9000/employees/${empId}`);
    },

    addEmployee: (employeeDTO) => {
        return axios.post(`http://localhost:9000/employees`, employeeDTO);
    },

    editEmployee: (id, employeeDTO) => {
        return axios.put(`http://localhost:9000/employees/${id}`, employeeDTO);
    },

    loadAllEmployees: () => {
        return axios.get(`http://localhost:9000/employees`);
    },

    loadEmployees: (min, max) => {
        return axios.get(`http://localhost:9000/employees?min=${min}&max=${max}`);
    },

    employeeSize: () => {
        return axios.get(`http://localhost:9000/employees/size`);
    },

}
export default DataService