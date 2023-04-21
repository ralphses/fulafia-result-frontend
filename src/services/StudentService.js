import axios from "axios";

const STUDENT_BASE_URL = "http://localhost:8080/api/v1/student"

class StudentService {

    all(page) {
        return axios.get(`${STUDENT_BASE_URL}/${page}`);
    }

}
const studentService = new StudentService(); 
export default  studentService;