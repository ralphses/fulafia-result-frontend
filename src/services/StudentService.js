import axios from "axios";

const STUDENT_BASE_URL = "fulafia-result-backend-production.up.railway.app/api/v1/student"

class StudentService {

    all(page) {
        return axios.get(`${STUDENT_BASE_URL}/${page}?all=true`);
    }

}
const studentService = new StudentService(); 
export default  studentService;