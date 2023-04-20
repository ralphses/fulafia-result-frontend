import axios from "axios";

const STUDENT_BASE_URL = "https://fulafia-result-backend-production.up.railway.app/api/v1/student"
const ADD_STUDENT_URI = "/add";

class StudentService {

    all(page) {
        return axios.get(`${STUDENT_BASE_URL}/${page}`);
    }

}
export default new StudentService();