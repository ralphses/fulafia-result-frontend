import axios from "axios"

const DEPARTMENT_BASE_API_URL = "fulafia-result-backend-production.up.railway.app/api/v1/department"
const ADD_DEPARTMENT_API_URI = "/new"

class DepartmentService {
    
    add(newDepartmentRequest) {
        return axios.post(`${DEPARTMENT_BASE_API_URL}${ADD_DEPARTMENT_API_URI}`, newDepartmentRequest);
    }

    all(page) {
        return axios.get(`${DEPARTMENT_BASE_API_URL}/${page}`);
    }
}

const departmentService = new DepartmentService(); 
export default departmentService;
