import axios from "axios";

const STUDENT_BASE_URL = "https://fulafia-result-backend-production.up.railway.app/api/v1/student"

class StudentService {

    all(page) {
        return axios.get(`${STUDENT_BASE_URL}/${page}`);
    }

}
const studentService = new StudentService(); 
export default  studentService;