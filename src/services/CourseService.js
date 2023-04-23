import axios from "axios"

const COURSE_BASE_API_URL = "fulafia-result-backend-production.up.railway.app/api/v1/course"
const ADD_COURSE_URI = "add"

class CourseService {

    all(page) {
        return axios.get(`${COURSE_BASE_API_URL}/all/${page}`);
    }

    add(course) {
        return axios.post(`${COURSE_BASE_API_URL}/${ADD_COURSE_URI}`, course);
    }

}

const courseService = new CourseService();
export default courseService;